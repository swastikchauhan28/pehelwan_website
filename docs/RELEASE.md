# Pehelwan standalone site — release review

## Scope and operation

The site presents Pehelwan on five English and five Marathi static pages: overview, machine, technology, journey and contact. `scripts/build.mjs` writes the pages from fixed copy into `public/`; a shared CSS file controls responsive layout; `public/assets/site.js` adds reveal motion and in-view, muted half-speed road video. Pages, navigation and contact links work without JavaScript. Vercel serves only `public/`, keeping source and release notes out of the site. The only external visitor flow is the existing MAMA enquiry form linked from Contact.

This is a distinct source repository and intended Vercel project. It does not replace or modify the MAMA source. The existing domain still belongs to the MAMA Vercel project until a separate deployment and domain move are reviewed.

## Choice and limits

Static pages were chosen over another Next.js deployment for a small public information site: no runtime packages, server, database or authentication are needed. The trade-off is repeated built HTML across routes, maintained through the checked-in generator. The site does not operate the machine or promise that roadmap functions, certification, pricing or purchase availability are complete. The design figures and target price are company-reported as of November 2026. The Quadra steer industry-first statement is attributed to the team with independent verification pending.

## Actors, inputs and trust boundaries

- Visitors and search crawlers read static pages and media. Visitors can call published numbers or follow the external MAMA form link. There is no visitor-controlled rendering or local data retention.
- The build script reads only fixed source copy. The ten generated HTML files, `assets/`, `robots.txt` and `sitemap.xml` are public. Asset sizes are bounded by the committed files; the video is about 1 MB per format and does not load until in view.
- The MAMA contact form is a separate provider and trust boundary. The site directs visitors away from sensitive personal or financial details. Form delivery must be checked on the destination itself; a click does not prove receipt.
- Repository maintainers control claims and media. Unreviewed copy, images, or hidden secrets in future commits are the main realistic content risks. Review the full diff and run a secret scan before push.

## Failures and recovery

| Failure | Detection | Recovery |
| --- | --- | --- |
| JavaScript blocked or motion reduced | Page still readable; poster remains | Static page and links are the fallback |
| Video blocked or slow | Poster remains, no native controls | Check video assets and local/Vercel response headers |
| MAMA enquiry form unavailable | External form cannot be opened or submitted | Published phone links remain available; check MAMA form separately |
| Wrong language or broken asset path | Route/asset check script and HTTP smoke test | Regenerate from source and redeploy |
| Vercel or DNS/certificate problem | Domains status, DNS lookup, HTTPS route checks | Keep or restore prior MAMA domain assignment and its required DNS value; verify prior MAMA Pehelwan route and HTTPS |

The prior MAMA source revision `cbfa59d` is a code rollback point, not evidence that the current custom domain has a valid certificate. Record the new project's deployment URL and assigned DNS value before any domain move. Do not execute rollback or domain changes without scoped authority.

## Verification and open release gates

- `node scripts/build.mjs` — passed on 2026-11-26; generated 10 routes, sitemap and robots.
- `node scripts/check.mjs` — passed on 2026-11-26; checked route files, internal links/assets, language and canonical metadata, image alt text and video placement.
- `node --check public/assets/site.js` and `node --check scripts/build.mjs` — passed on 2026-11-26.
- Local HTTP smoke test at `127.0.0.1:3001` — all ten routes, the road video, and sitemap returned 200 on 2026-11-26. `/docs/RELEASE.md` and `/scripts/build.mjs` returned 404 from the public-only server.
- Both MAMA enquiry destinations returned HTTP 200 on 2026-11-26. This verifies loading, not submission; an earlier owner-confirmed test submission was on the existing MAMA site.
- The owner approved commit and push for a preview on 2026-11-26 after receiving the local preview link. Independent desktop/mobile browser inspection remains pending because the browser-control kernel failed to start. No Vercel preview has been created yet.
- Changed-file list reviewed: this empty repository contains only the new `public/` site, `scripts/`, `docs/`, `README.md`, and `.gitignore`. A targeted scan found no private-key or common API-token patterns; this is not a guarantee against every secret type. External destinations in the source are `pehelwan.live` and the existing `www.mamaapp.live` enquiry/site links, plus the sitemap XML namespace. The owner previously approved company figures and supplied media for public use in the MAMA website; this new layout and wording still need review.
- Before production: owner explanation in their own words, diff review, preview link and visual check, current dependency/secret review, HTTPS and all-route check after domain move, and confirmed contact enquiry path. The preview approval is not production-domain approval.
