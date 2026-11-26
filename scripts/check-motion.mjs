// Controlled DOM fixtures verify system motion preferences, not browser layout/rendering.
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import assert from 'node:assert/strict';

const source = await readFile(new URL('../public/assets/site.js', import.meta.url), 'utf8');
function fixture(reduced, intersection = true) {
  const callbacks = {}, observers = [], frames = new Map();
  const counter = { textContent: '१०', dataset: { count: '10' } };
  const video = { paused: true, play() { this.paused = false; return Promise.resolve(); }, pause() { this.paused = true; } };
  const classes = new Set();
  const root = { lang: 'mr', dataset: {}, scrollHeight: 2000,
    classList: { toggle(name, enabled) { enabled ? classes.add(name) : classes.delete(name); } } };
  const reveal = { classList: { add() {} }, querySelectorAll() { return [counter]; } };
  const progress = { style: {} };
  const document = { documentElement: root, hidden: false,
    querySelector(selector) { return { '[data-road-video]': video, '.reading-progress': progress }[selector] || null; },
    querySelectorAll(selector) { return selector === '.reveal' ? [reveal] : selector === '[data-count]' ? [counter] : []; },
    addEventListener(event, fn) { callbacks[event] = fn; } };
  const preference = { matches: reduced, addEventListener(_, fn) { callbacks.preference = fn; } };
  const window = { innerHeight: 800, scrollY: 300, matchMedia() { return preference; }, addEventListener() {} };
  class Observer { constructor(fn) { this.fn = fn; observers.push(this); } observe() {} unobserve() {} }
  if (intersection) window.IntersectionObserver = Observer;
  let id = 0;
  runInNewContext(source, { document, window, Intl, performance: { now: () => 0 },
    IntersectionObserver: Observer, requestAnimationFrame(fn) { frames.set(++id, fn); return id; }, cancelAnimationFrame(key) { frames.delete(key); } });
  return { root, video, document, callbacks, observers, frames, counter, reveal, classes };
}

const normal = fixture(false);
assert.equal(normal.root.dataset.motion, 'on');
normal.observers[1].fn([{ isIntersecting: true }]);
assert.equal(normal.video.paused, false);
assert.equal(normal.video.playbackRate, .5);
normal.observers[0].fn([{ isIntersecting: true, target: normal.reveal }]);
normal.callbacks.preference({ matches: true });
assert.equal(normal.video.paused, true);
assert.equal(normal.counter.textContent, '१०');
assert.equal(normal.root.dataset.motion, 'off');
assert.equal(normal.classes.has('motion-ready'), false);
normal.callbacks.preference({ matches: false });
assert.equal(normal.video.paused, false);
normal.document.hidden = true;
normal.callbacks.visibilitychange();
assert.equal(normal.video.paused, true);
normal.callbacks.preference({ matches: true });
assert.equal(normal.root.dataset.motion, 'off');

const reduced = fixture(true);
reduced.observers[1].fn([{ isIntersecting: true }]);
assert.equal(reduced.video.paused, true);
assert.equal(reduced.classes.has('motion-ready'), false);
assert.equal(reduced.counter.textContent, '१०');

const fallback = fixture(false, false);
assert.equal(fallback.classes.has('motion-ready'), false);
assert.equal(fallback.video.paused, true);
console.log('Motion fixtures passed: system preference pause/resume, reduced motion, hidden tab, final Marathi count, and no-observer fallback. Browser layout remains a separate check.');
