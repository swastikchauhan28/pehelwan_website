import { readFile, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(fileURLToPath(new URL('../', import.meta.url)), 'public');
const pages = ['', 'machine/', 'technology/', 'contact/'];
const localFile = route => join(root, route === '' || route.endsWith('/') ? `${route}index.html` : route);
let checked = 0;

for (const lang of ['en', 'mr']) {
  for (const page of pages) {
    const route = `${lang === 'mr' ? 'marathi/' : ''}${page}`;
    const file = localFile(route);
    const html = await readFile(file, 'utf8');
    const expectedUrl = `https://pehelwan.live/${route}`;
    if (!html.includes(`<html lang="${lang}">`)) throw new Error(`Wrong language: ${route}`);
    if (!html.includes(`rel="canonical" href="${expectedUrl}"`)) throw new Error(`Wrong canonical: ${route}`);
    if ((html.match(/<h1>/g) || []).length !== 1) throw new Error(`Expected one h1: ${route}`);
    if (!html.includes('class="mobile-menu"')) throw new Error(`Missing mobile menu: ${route}`);
    if (!html.includes('<small>by Shanik AG Private Limited</small>') || !html.includes('Pehelwan by Shanik AG Private Limited.')) throw new Error(`Wrong brand attribution: ${route}`);
    if (!html.includes('href="/assets/site.css?v=pehelwan-product-6"')) throw new Error(`Missing shared styles: ${route}`);
    if (html.includes('localhost:') || html.includes('file://')) throw new Error(`Local development URL: ${route}`);

    for (const match of html.matchAll(/(?:href|src)="(\/[^"]*)"/g)) {
      const path = match[1].split('#')[0].split('?')[0];
      const target = localFile(path.slice(1));
      try { await stat(target); }
      catch { throw new Error(`Broken local URL ${path} in ${route}`); }
    }
    for (const match of html.matchAll(/<img\b[^>]*>/g)) {
      if (!/\balt="[^"]+"/.test(match[0])) throw new Error(`Missing image alt in ${route}`);
    }
    if (page === 'machine/') {
      if (!html.includes('data-road-video') || /<video[^>]*\bcontrols\b/.test(html)) throw new Error(`Incorrect road video in ${route}`);
    } else if (html.includes('data-road-video')) throw new Error(`Road video on wrong page: ${route}`);
    checked++;
  }
}

const source = await readFile(join(root, 'assets/site.js'), 'utf8');
if (!source.includes('video.playbackRate = 0.5')) throw new Error('Road video is not set to half speed');
console.log(`Checked ${checked} English/Marathi routes, local links, assets, metadata, alt text and video placement.`);
