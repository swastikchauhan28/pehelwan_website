# Pehelwan website handover

## 2026-11-26 — Standalone site

- Done: Confirmed the supplied repository is empty; cloned it into this directory. Built five English and five Marathi pages, with distinct photographs by page, the road video only on Machine, and MAMA's existing enquiry route on Contact. Only `public/` is served by Vercel's Other static preset; source and release files stay outside it. The current MAMA project remains untouched. `node scripts/build.mjs`, `node scripts/check.mjs`, and JavaScript syntax checks passed. Local HTTP returned 200 for all ten pages, the video and sitemap, and 404 for source/release files. Both external enquiry destinations returned 200.
- In progress: The owner approved commit and push to the supplied repository for a Vercel preview after receiving the local preview link. A separate Vercel preview and domain move remain.
- Broken or risky: Browser-control tooling failed, so desktop/mobile visual inspection is incomplete. `pehelwan.live` still points to the existing MAMA Vercel project; its HTTPS TLS handshake was still failing at the last check. A new deployment and domain move require review and verification. The Quadra steer industry-first claim is attributed to the team but independently unverified.
- Next: Commit and push the new site, create and verify a new Vercel preview, then seek a separate release decision before moving the domain. The new project's assigned A value may differ.
- Do not touch: MAMA's production routes, mail DNS records, old project settings, secrets, or physical tractor controls.
