# Pehelwan standalone site — release review

## Full header logo push authorization — 2026-11-27

The owner explicitly requested commit and push after receiving local English/Marathi review files. Remote `main` matched `fca680f` before the push. Fresh generator, eight-route, motion, syntax and whitespace checks passed. The scope is the complete logo in the shared header, responsive sizing, cache key and generated pages; no new dependency, external destination, visitor data flow or hardware behavior. Automated desktop/phone visual inspection was blocked, and the owner has not reported a real-phone check, so no visual or general production-readiness certification is claimed. Verify the live pages after the authorized push. Recovery reference: `fca680f`; no migration.

## Header logo correction — 2026-11-27

The complete supplied logo now appears in both header and footer; the cropped header emblem and repeated English wordmark were removed. This is a shared static presentation change across eight routes, with no new dependency, external request, data collection or hardware interaction. Fresh generation, route, motion, syntax and whitespace checks passed. Browser visual inspection did not complete, so desktop and phone presentation still require owner review. This candidate is local and has not been committed, pushed or deployed. The previous revision `fca680f` is the recovery reference if a later authorized release needs reversal.

## Logo push authorization — 2026-11-27

The owner explicitly requested commit and push of the locally previewed logo change. Remote `main` matches the recorded base `37dc8f9`. Fresh generator, eight-route, motion, syntax, whitespace, shared-markup and targeted source-secret checks passed. The unchanged image has no EXIF/XMP metadata and introduces no dependency, external destination or visitor data flow. Desktop and narrow-width headless checks support the header/footer placement; real-device and browser-tab acceptance remain open, so this is not a production-readiness certification. After the authorized push, check live English/Marathi pages and the asset. Rollback reference: `37dc8f9`; no data migration is involved.

## Owner-supplied logo candidate — 2026-11-27

The unchanged JPEG logo now appears as a cropped emblem in the shared header, complete artwork in the footer and the browser icon on eight English/Marathi pages. The design retains the text brand and company attribution for readability and accessibility. The image has no EXIF/XMP metadata. Fresh generation, route checks, motion fixtures, syntax, whitespace and local desktop/phone-width layout checks passed. No new dependency, data handling or external destination was added. Owner visual review on a real phone and browser tab remains open. This is local only: no commit, push or deployment occurred. The current production reference is `37dc8f9`; there is no data migration or rollback action yet.

## Technology update push authorization — 2026-11-26

After seeing the local correction process, the owner explicitly asked to commit and push this Technology update. `main` on origin still matches the recorded base `72a6085`. Fresh generator, eight-route, controlled motion, syntax, whitespace, page-scope and targeted secret checks passed. The change adds no dependency, form, external request, storage, authorization or hardware operation. A prior headless desktop reduced-motion screenshot and 430 px layout measurement support the spacing fix; actual animation on a phone and owner diff review have not been independently confirmed. The push is authorized, but this record does not certify production readiness. After Vercel updates, check both live Technology routes; rollback is redeploying `72a6085` and rechecking those routes.

## Technology spacing correction — 2026-11-26

The owner screenshot showed excessive empty space under the standalone GPS sowing copy and a mismatch with the new AI panel styling. GPS sowing is now a fourth, compact illustrated roadmap band in both languages; the Indian engineering section follows with matching cards and shorter spacing. Fresh build, route, motion, syntax and diff checks passed. Headless Chrome captured the lower desktop layout with reduced motion and a 430 px iframe audit found no horizontal overflow; it also confirmed the hero WebP decoded. Actual scrolling, animated rendering and owner visual acceptance remain open. This candidate is local only; no commit/push/deployment. Rollback remains `72a6085` if a later authorized production release needs to be reversed.

## Technology animation candidate — 2026-11-26

The Technology page now has an illustrated three-stage Vision AI roadmap in English and Marathi. The generated pages contain only static copy and decorative inline SVG, with motion gated by system preference; no visitor data or machine interface is involved. The previous text list was replaced, while the GPS sowing and Indian engineering sections remain. Source revision before the local change: `72a6085`.

Fresh local generator, eight-route checker, controlled motion fixtures, syntax, diff whitespace and focused concept-markup checks passed. Local HTTP returned 200 for both Technology routes and CSS. Browser visual automation failed before rendering (kernel-assets os error 3), so desktop/phone composition and actual animation need owner review at the localhost preview. Review the changed-file diff and capability wording, then confirm both languages and reduced-motion behavior. No production commit, push or deployment has occurred. If released later and unacceptable, redeploy the prior `72a6085` artifact/revision and recheck both Technology routes; no data migration is involved.

## Repository handoff for Vercel — 2026-11-26

This revision is a view-only, bilingual product website. Fixed copy in `scripts/build.mjs` generates eight HTML pages in `public/`; Vercel should serve only `public/`. Shared CSS/JS supply layout and optional motion, with native disclosures for the engineering/AI illustrations. The only external navigation is the existing MAMA website link. There are no forms, authentication, data storage, API requests or physical machine commands. Product figures are company-reported design references, and the AI capabilities are described as a roadmap. This static approach avoids backend/dependency/credential risk, but copy and visual quality still require human review.

Fresh checks: `node scripts/build.mjs`, `node scripts/check.mjs`, `node scripts/check-motion.mjs`, `node --check scripts/build.mjs`, `node --check public/assets/site.js`, and `git diff --check` all passed. A controlled page audit covered anchors, images and absence of forms. Loopback HTTP returned 200 for all eight pages and key media/assets, and 404 for the two removed Journey routes and source/document paths. A targeted common-token/private-key pattern scan found no matches; it is not an exhaustive credential audit. Remote `main` was at `183b708` before this commit. The obsolete untracked full-stack plan is excluded.

Release gate remains open: browser control fails before rendering with kernel-assets os error 3, so no independent desktop/mobile visual acceptance is claimed. Owner should explain the site and review the GitHub diff, verify the new Vercel URL in both languages and on a phone, play the Machine video, check the Company photo and product claims, then move the domain only after the temporary URL is accepted. Retain the old Vercel project and record existing domain/DNS values before switching; if the new site fails, reassign the domain to the old project and restore its prior DNS values, then recheck HTTPS and key routes. No rollback was executed.

## Company photograph replacement — 2026-11-26

At the owner's request, both Company pages now use the supplied farmer discussion photograph, with accurate English/Marathi alt text and captions. The landscape framing preserves more of the group. Generator, eight-route checker, syntax and diff whitespace checks passed; source checks confirmed the image is absent from the other six pages. Visual browser review remains pending. No commit, push or deployment occurred.

## Company hero correction — 2026-11-26

The screenshot showed a large empty decorative circle and oversized copy on Company. The revised generator uses a previously unused owner-supplied MAMA team/drone image, an accurate caption and a shorter bilingual heading. Shared CSS constrains the hero and provides phone crops. Build, eight-route checker, syntax, motion fixtures and whitespace checks passed; both Company pages returned 200 locally. No new dependency, data flow, claim, commit, push or deployment. Browser visual review is still outstanding.

## Motion button removal — 2026-11-26

Owner requested removing the header motion button. Removed its bilingual markup, styles and event handler; system reduced-motion handling remains active. Existing motion fixtures now exercise preference changes to verify video pause/resume, final counter text, hidden-tab behavior and no-observer fallback. Fresh build, eight-route check, fixtures, JS syntax and whitespace checks passed; source/output search found no remaining button labels or selector. Asset query bumped to avoid stale JS/CSS. Browser visual verification remains unavailable; no publication performed.

## Product-first reference update — 2026-11-26

The owner supplied FarmSathi as a design reference. Public HTML/CSS informed the hierarchy (machine hero, figures, interactive systems), not Pehelwan's facts or assets. The original Pehelwan composition uses real supplied imagery, existing company-reported figures and native engineering/perception disclosures. `productHero` produces the opening and numbers, `engineeringViewer` explains mechanical systems, `perceptionSteps` and `fieldConcept` produce three labelled AI concepts, and `farmerStory` supplies the human context. Shared CSS styles all eight routes; the existing JS continues to enhance motion only. No form, external request, persistence, auth, package or hardware interface was added.

Fresh build, eight-route checks, motion fixtures, JS syntax and whitespace checks passed. A controlled HTML parser audit verified balanced elements, internal anchors, no forms and unique homepage photographs. Local HTTP returned 200 for eight pages and 404 for both removed Journey pages. Browser automation again failed before inspection (kernel assets, os error 3); actual desktop/mobile layout and native disclosure interaction remain unverified. The localhost browser was opened for owner review. This is local design work, not production readiness or a release; commits, pushes and deployments were not performed.

Review `scripts/build.mjs`, the final product-layout section of `public/assets/site.css`, and both generated homepages. Verify the machine remains visible at phone widths, the Marathi hero and phase descriptions fit, reduced-motion behavior remains readable, and roadmap labels remain clear. Earlier recovery/release requirements still apply; preserve accumulated local changes rather than resetting to the base revision.

## Route removal — 2026-11-26

At the owner's request, the standalone English and Marathi Journey pages have been removed. The current site contains eight routes: Home, Machine, Technology and Company in both languages. All former internal Journey links now point to retained content; sitemap and navigation omit the deleted routes. Existing Journey URLs return 404 (no hosting redirect introduced). Historical release descriptions below retain the earlier ten-page scope. Fresh build, eight-route checker, source syntax and diff whitespace checks passed; local HTTP verified the eight 200 responses and two expected 404 responses. No deployment or commit/push occurred.

## Indian farming / AI visual correction — 2026-11-26

Owner rejected the blue identity. The current presentation uses charcoal, saffron and turmeric, real farmer/product imagery, a decorative Marathi seedling motif and a warmer type treatment. Farmer photo placement is unique on each homepage; the story text leads into the existing mechanical design and labelled AI roadmap. No claims, dependencies, data flows or external destinations were added. Both languages and all interior pages receive the palette change. Native engineering disclosures and motion behavior remain as previously tested.

Build, route/syntax checks and motion fixtures passed. HTTP checks verified all ten routes, local anchor targets, absence of forms, the new asset version query and unique hero image placement. Browser visual inspection is still blocked; a separate supported Windows node_repl/sky initialization also failed with the kernel-assets error. Review the photo composition, mobile header, crop visibility and Marathi wrapping manually before production. No publication took place.

## Distinct identity update — 2026-11-26

The owner requested a greater visual departure from MAMA. The current design uses a centred product masthead, midnight-blue/silver palette, separate engineering type role, machine stage, native engineering disclosures and a wide farmer-story photograph with three text chapters. The rewritten stylesheet covers all public pages and both languages; favicon/theme/cache references match. The architecture viewer uses native `<details>` and CSS `:has()` to highlight conceptual parts. In browsers without `:has()`, the disclosures still expose their text and the diagram remains static. No JS/data/network behavior was added for the viewer.

Fresh generation, route checks, syntax checks, existing motion fixtures and `git diff --check` passed. HTTP checks returned 200 for all ten routes and verified local anchors and the four disclosures on English/Marathi homepages. A first generator syntax failure from a multiline caption was corrected and checks rerun. Visual browser review remains outstanding due to the existing automation startup failure. Review the full new stylesheet, `productHero`/`engineeringViewer` markup, preserved content and both generated homepages; test disclosure keyboard interaction, mobile header, machine photo crop and font fallback before publication. Code, media, auth and data scope remain unchanged beyond presentation; no publish/commit/push occurred.

## Product motion update — 2026-11-26

The homepage now tells the story from farmer conversations to the compact machine and its AI roadmap. One additional owner-supplied training photograph is stored locally. `scripts/build.mjs` renders fixed bilingual narrative, chapter links, static final numbers and the concept schematic. Shared CSS supplies responsive layouts; `public/assets/site.js` enhances them with finite entrances, reveal observers, one batched scroll callback, number animation and video visibility control. No visitor input, storage or external request is introduced.

The motion toggle restores static content and final numeric text and pauses the video. OS reduced-motion settings are respected, including changes during a visit; hidden tabs pause video. Without IntersectionObserver or JavaScript, content and final numbers remain readable. The AI diagram is a labelled concept, not telemetry. Native browser layout and actual video playback remain unverified because browser automation failed to initialize.

Fresh checks: `node scripts/build.mjs`, `node scripts/check.mjs`, `node --check scripts/build.mjs`, `node --check public/assets/site.js`, `node scripts/check-motion.mjs`, `git diff --check` passed. The new motion fixture exercises pause/resume, reduced motion, hidden tabs, final Marathi values and missing IntersectionObserver. HTTP checks on the running localhost server returned 200 for all ten routes and the three affected public assets. Full source/CSS/JS changes and generated structure were reviewed for scope; no new provider or credential handling was added. Before release, visually check desktop and phone layouts, keyboard control of motion/menu, real scrolling/video, and both languages. Existing release approval and rollback requirements continue to apply.

## Current scope correction — 2026-11-26

The owner clarified that Pehelwan should be a view-only product showcase. The pending Next.js/Supabase proposal is superseded. The site remains static with no accounts, forms, submission endpoint or visitor-data storage. `/contact/` and `/marathi/contact/` now provide company information, preserving old URLs. All enquiry links and floating enquiry buttons have been removed; public navigation instead explores the machine, AI roadmap, farmer journey and company. The MAMA footer link is ordinary website navigation. The following original release account is retained as history; its enquiry-flow descriptions no longer describe this revision.

The input/output path remains fixed bilingual content in `scripts/build.mjs` → ten HTML pages in `public/` → static HTTP responses. New chapter links need no JavaScript; the crop-row drawing is labelled as a concept, not live telemetry. No new trust boundary, package, secret, storage or service is introduced. Existing roadmap/target qualifications remain. This phase changes only presentation and navigation.

Fresh verification: static generation and the ten-route checker passed; both JavaScript syntax checks passed. A temporary Python `ThreadingHTTPServer` serving `public/` on loopback port 3001 returned 200 on all ten routes, with response assertions for the legal attribution and absence of `<form`, `contact?interest` and `floating-enquiry`. The server was shut down after testing. Browser initialization failed again (kernel assets, os error 3), so visual review is outstanding. No push or deployment was performed.

Review guide: inspect the English and Marathi homepage chapter links and AI illustration; follow Machine → Technology → Journey; open Company in both languages; verify the slow-motion machine video and phone layout. Review the generator and CSS diff, then the generated output. Current static source rollback point remains `183b70880c45830d110fbd5e12618bb9ed7d73b4`; it is not evidence of a working domain release. Production publication still requires the existing owner/preview/domain checks.

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
