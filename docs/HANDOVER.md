# Pehelwan website handover

## 2026-11-26 — Brand attribution correction

- Done: Changed the site lockup and footer in both languages to “Pehelwan by Shanik AG Private Limited”; updated the home descriptions and README, then regenerated all ten pages. MAMA remains named only where it describes the earlier drone work or the existing enquiry form. Increased the small lockup text size to accommodate the longer legal name. `node scripts/check.mjs` and `node --check scripts/build.mjs` passed; the route checker now requires the attribution on every page.
- In progress: Verify the corrected lockup on a Vercel preview once the new project is imported.
- Broken or risky: Browser visual inspection remains unavailable because the browser-control kernel fails to start. The longer legal name should be checked on a narrow phone in the eventual Vercel preview.
- Next: Verify the new preview and then address the separate production-domain release decision. The current MAMA deployment and DNS remain untouched.

## 2026-11-26 — Standalone site

- Done: Confirmed the supplied repository was empty; cloned it into this directory. Built five English and five Marathi pages, with distinct photographs by page, the road video only on Machine, and MAMA's existing enquiry route on Contact. Only `public/` is served by Vercel's Other static preset; source and release files stay outside it. The current MAMA project remains untouched. `node scripts/build.mjs`, `node scripts/check.mjs`, and JavaScript syntax checks passed. Local HTTP returned 200 for all ten pages, the video and sitemap, and 404 for source/release files. Both external enquiry destinations returned 200. The owner approved commit/push for preview, and commit `43db0c9` was pushed to `swastikchauhan28/pehelwan_website` main; remote SHA was checked.
- In progress: Import the repository as a new Vercel project and verify its preview. GitHub reported no deployment after the push. The owner has been asked for the new preview URL or deployment screenshot because the browser-control kernel still fails to start.
- Broken or risky: Browser-control tooling failed, so desktop/mobile visual inspection is incomplete. `pehelwan.live` still points to the existing MAMA Vercel project; its HTTPS TLS handshake was still failing at the last check. A new deployment and domain move require review and verification. The Quadra steer industry-first claim is attributed to the team but independently unverified.
- Next: Complete the Vercel import (Other preset, blank build command, static `public/` output), verify the preview, then seek a separate release decision before moving the domain. The new project's assigned A value may differ.
- Do not touch: MAMA's production routes, mail DNS records, old project settings, secrets, or physical tractor controls.
