// All content is visible without JavaScript. Motion never changes product facts.
const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
const root = document.documentElement;
const video = document.querySelector('[data-road-video]');
const reveals = [...document.querySelectorAll('.reveal')];
const counters = [...document.querySelectorAll('[data-count]')];
const finalValues = new Map(counters.map(node => [node, node.textContent]));
const counterFrames = new Map();
let motion = !preference.matches;
let videoVisible = false;
let frame = 0;

function animateCount(node) {
  if (!motion || node.dataset.counted) return;
  node.dataset.counted = 'true';
  const target = Number(node.dataset.count);
  const formatter = new Intl.NumberFormat(document.documentElement.lang === 'mr' ? 'mr-IN' : 'en-IN');
  const start = performance.now();
  function tick(now) {
    const progress = Math.min(1, (now - start) / 1100);
    node.textContent = formatter.format(Math.round(target * (1 - (1 - progress) ** 3)));
    if (progress < 1 && motion) counterFrames.set(node, requestAnimationFrame(tick));
    else { node.textContent = finalValues.get(node); counterFrames.delete(node); }
  }
  counterFrames.set(node, requestAnimationFrame(tick));
}

function syncVideo() {
  if (!video) return;
  if (motion && videoVisible && !document.hidden) {
    video.playbackRate = 0.5;
    video.play().catch(() => { /* Autoplay refusal leaves the poster available. */ });
  } else video.pause();
}

function setMotion(enabled) {
  motion = enabled;
  root.dataset.motion = enabled ? 'on' : 'off';
  root.classList.toggle('motion-ready', enabled && 'IntersectionObserver' in window);

  if (!enabled) {
    for (const [node, id] of counterFrames) {
      cancelAnimationFrame(id);
      node.textContent = finalValues.get(node);
    }
    counterFrames.clear();
  }
  syncVideo();
  scheduleScroll();
}

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-visible');
      entry.target.querySelectorAll('[data-count]').forEach(animateCount);
      revealObserver.unobserve(entry.target);
    }
  }, { threshold: 0.06 });
  reveals.forEach(node => revealObserver.observe(node));
  if (video) {
    new IntersectionObserver(entries => {
      videoVisible = entries[0].isIntersecting;
      syncVideo();
    }, { threshold: 0.25 }).observe(video);
  }
}

// One frame per scroll event batch; calculations use only a few section bounds.
const story = document.querySelector('.farmer-story');
const concept = document.querySelector('[data-field-concept]');
const progressBar = document.querySelector('.reading-progress');
const clamp = value => Math.max(0, Math.min(1, value));
function updateScroll() {
  frame = 0;
  const height = window.innerHeight;
  if (progressBar) {
    const range = document.documentElement.scrollHeight - height;
    progressBar.style.transform = `scaleX(${range > 0 ? clamp(window.scrollY / range) : 0})`;
  }
  if (!motion) return;
  if (story) {
    const bounds = story.getBoundingClientRect();
    story.style.setProperty('--story-progress', clamp((height * .4 - bounds.top) / Math.max(1, bounds.height - height * .5)));
  }
  if (concept) {
    const bounds = concept.getBoundingClientRect();
    if (bounds.bottom > 0 && bounds.top < height) {
      concept.style.setProperty('--field-progress', clamp((height - bounds.top) / (height + bounds.height)));
    }
  }
}
function scheduleScroll() {
  if (!frame) frame = requestAnimationFrame(updateScroll);
}
window.addEventListener('scroll', scheduleScroll, { passive: true });
window.addEventListener('resize', scheduleScroll, { passive: true });
document.addEventListener('visibilitychange', syncVideo);
preference.addEventListener('change', event => setMotion(!event.matches));
setMotion(motion);

document.querySelectorAll('.mobile-menu nav a').forEach(link => {
  link.addEventListener('click', () => { link.closest('details').open = false; });
});
