# Pehelwan website handover

## 2026-11-27 — Logo push authorized

- Done: Owner explicitly requested commit and push after reviewing the local logo placement. Local and remote `main` match base `37dc8f93f0276ebef722699bc5fac931885fac8a`. Stage only the shared logo asset, generator/styles/checker, eight generated pages and relevant records; leave pre-existing untracked `docs/FULLSTACK-PLAN.md` untouched.
- Verification: Fresh generator, eight-route checker, motion fixtures, both JS syntax checks and diff whitespace passed. All eight pages contain the supplied header/footer/favicon logo, and targeted source secret scan found no matches. Earlier headless desktop, 500 px, 360 px and 320 px checks support the visual layout; real-device/browser-tab acceptance remains unverified.
- In progress: Commit and push the owner's approved scoped logo change to auto-deploying `main`, then verify remote revision and live asset/pages. Do not claim full production readiness from these checks.
- Next: Confirm live logo on both languages and a real phone. Recovery reference is `37dc8f9`; a rollback would redeploy that prior revision without data migration.

## 2026-11-27 — Owner-supplied logo placed locally

- Done: Added the unchanged owner-supplied JPEG as `public/assets/pehelwan-logo.jpg` (180,081 bytes). The shared header shows its emblem beside the readable Pehelwan name and Shanik AG attribution; the footer shows the complete artwork; the browser icon references the same asset. Both English and Marathi routes use the shared treatment. Bumped the stylesheet query to `pehelwan-product-7`. No new dependency, data flow, external destination or form.
- Verification: Fresh eight-page generator, route/asset checker, motion fixtures, JS syntax and diff whitespace checks passed. Headless Chrome screenshots show the desktop and 500 px header and full footer; 360 px English and 320 px Marathi iframe measurements found no horizontal overflow or overlapping controls. The asset hash matches the supplied file and contains no EXIF or XMP metadata. Local preview is running at `http://127.0.0.1:3001/`.
- Broken or risky: Owner visual acceptance is pending, including the browser tab icon and a real phone. This change is local only, uncommitted and unpushed; production remains at `37dc8f9`. The older untracked `docs/FULLSTACK-PLAN.md` is untouched.
- Next: Owner reviews the Home page and footer in both languages, then decides whether to authorize a commit/push to the auto-deploying `main`. Recovery is reverting this scoped local change; no migration is involved.

## 2026-11-26 — Technology update authorized for main

- Done: Owner explicitly requested commit and push of the revised Technology design after the spacing correction. Base local and remote `main` both equal `72a60853f9b027592ee4feac6b862e025b73a449`. Scoped review confirms only the two Technology route bodies changed; the other six generated routes only receive cache query `pehelwan-product-6`. The pre-existing untracked `docs/FULLSTACK-PLAN.md` remains outside the commit.
- Verification: Fresh generator, eight-route check, controlled motion fixtures, builder/runtime syntax and diff whitespace passed. Focused markup audit found three AI concept cards plus one compact GPS band in each language, no old sparse section. Targeted secret pattern scan found no matches. Headless desktop reduced-motion layout and 430 px frame width were previously checked. These checks do not establish actual phone animation or owner diff review.
- In progress: Commit and push the explicitly authorized scoped change to auto-deploying `main`, then check the remote revision and live Technology routes. Do not call production readiness certified while visual and owner review gaps remain.
- Next: Owner reviews live English/Marathi Technology pages, scrolling and animation on a phone. Recovery reference is `72a6085`; redeploy it if an authorized rollback is needed. No data migration or new dependency is involved.

## 2026-11-26 — Technology spacing corrected after owner screenshot

- Done: Removed the tall standalone GPS sowing section and placed its bilingual roadmap copy in a compact fourth illustrated band beside the three AI panels. Tightened Technology and Indian engineering spacing, and made the engineering cards follow the same border, color and text scale. Bumped cache query to `pehelwan-product-6` so the local preview refreshes. No unrelated route content changed beyond that query.
- Verification: Fresh generator, eight-route checker, motion fixtures, JS syntax and diff whitespace checks passed. A headless Chrome desktop screenshot with reduced motion showed the compact band and engineering cards with substantially less blank space. A 430 px iframe layout audit found no horizontal overflow in the hero, AI cards, sowing band or build cards. Chrome reported the hero image decoded at natural width 2240; its omission in the instantaneous headless screenshot was a capture timing issue. Local preview remains on port 3001.
- Broken or risky: Owner visual acceptance is still pending, especially actual scrolling and animation on a phone. No commit, push or deployment occurred. The temporary layout and image audit pages were removed. The pre-existing untracked `docs/FULLSTACK-PLAN.md` remains untouched.
- Next: Review `http://127.0.0.1:3001/technology/` and `/marathi/technology/` at the GPS/engineering transition. If accepted, review this scoped diff and authorize the production commit/push; retain `72a6085` for rollback.

## 2026-11-26 — Technology concept sequence, local preview

- Done: Replaced the text-only Vision AI roadmap on English and Marathi Technology pages with three original SVG concept panels for observation, navigation and targeted treatment. Each panel has restrained decorative motion gated by the existing system reduced-motion preference. Capabilities remain labelled in development/planned, and the visual is explicitly conceptual. Bumped shared asset query to `pehelwan-product-5`. No dependency, form, external destination, hardware connection or runtime JavaScript added.
- Verification: Fresh `node scripts/build.mjs`, `node scripts/check.mjs`, `node scripts/check-motion.mjs`, both JS syntax checks and `git diff --check` passed. A focused HTML audit found three SVG stages and a concept note in each language, with no old list or form. Local HTTP returned 200 for English/Marathi Technology pages and the stylesheet.
- Broken or risky: Browser visual control still fails before rendering with kernel-assets os error 3. Phone appearance and actual animation have not been visually accepted. Loopback preview is running at `http://127.0.0.1:3001/technology/` and `/marathi/technology/` for owner review. The change is uncommitted, unpushed and not deployed; production remains revision `72a6085` until verified otherwise.
- Next: Owner inspects both previews, including a phone and reduced-motion setting, and reviews the diff/claims before any commit or push to auto-deploying `main`. Preserve the existing untracked `docs/FULLSTACK-PLAN.md`; recovery is to discard this scoped local change or redeploy `72a6085` after an authorized release.

## 2026-11-26 — Repository prepared for Vercel import

- Done: Reviewed the accumulated bilingual product showcase, eight-route generator, changed-file list, media and local delivery. Owner authorized all repository preparation including commit/push, excluding Vercel and Namecheap. Remote `main` matched local base `183b708` before commit. The superseded untracked `docs/FULLSTACK-PLAN.md` is deliberately excluded from the release commit.
- Verification: Fresh `node scripts/build.mjs`, `node scripts/check.mjs`, `node scripts/check-motion.mjs`, both JS syntax checks and `git diff --check` passed. A page audit found internal anchors, unique homepage photos, correct Company photo and no forms/motion button. Local HTTP returned 200 for eight routes plus CSS, JS, Company image, video and sitemap, and 404 for removed Journey routes and private source paths. A targeted common-secret pattern scan found no matches. These are code/static and controlled motion checks; they do not establish rendered phone appearance.
- Broken or risky: Computer-use browser initialization still fails with kernel-assets os error 3. Owner needs to visually inspect the Vercel URL, especially phone/Marathi wrapping, machine video and the selected Company photo, before moving the domain. Company-reported design figures and attributed industry-first wording need owner claim review. No real hardware capability was tested.
- Next: Import the pushed repository into a new Vercel project using the Other preset and `public` output, review its temporary URL, then separately move the domain in Vercel/Namecheap. Keep the old project and current DNS settings available for rollback. No deployment or domain action was performed in this repository phase.

## 2026-11-26 — Owner-selected Company photo

- Done: Replaced the Company hero image in English and Marathi with the owner's farmer discussion photograph (`farmer-field-discussion.jpg`, 205 KB). Updated alt text/caption and changed the crop to preserve the landscape group composition. Bumped the static asset query to `pehelwan-product-4`. No other page uses this photo.
- Verification: Fresh generator, eight-route check, builder syntax and diff whitespace checks passed. Both generated Company pages reference the new photo and asset query; six other generated routes do not reference that photo. Browser visual inspection remains unavailable in this environment.
- Next: Review http://localhost:3001/contact/ and http://localhost:3001/marathi/contact/. Local only, uncommitted and unpushed.

## 2026-11-26 — Company hero corrected

- Done: Replaced the empty PEHELWAN circle on both Company routes with an unused owner-supplied team/drone photograph. Shortened the English/Marathi headlines and leads, tightened the hero height, added responsive crops and an accurate photo caption. The image is not used on Home or other pages. Bumped CSS/JS cache query to `pehelwan-product-3`.
- Verification: Fresh generator, eight-route checker, source syntax, motion fixtures and diff whitespace checks passed. Asserted both Company HTML pages contain the new image and no decorative circle; local HTTP returned 200 for both. No browser screenshot/visual inspection was available in this environment.
- Next: Review http://localhost:3001/contact/ and the Marathi switch. Changes remain local and uncommitted/unpushed.

## 2026-11-26 — Header motion button removed

- Done: Removed Enable/Pause motion from the shared English/Marathi header, associated CSS and JS handler. System reduced-motion preference and changes still govern animations and video. Updated existing motion fixtures and asset cache version.
- Verification: Fresh generator, eight-route checker, motion fixtures, JS syntax and diff whitespace checks passed. `rg -n 'motion-toggle|Enable motion|Pause motion' public scripts` returned no matches (exit 1 expected). Visual inspection remains unavailable due to the previously recorded browser kernel failure.
- Next: Refresh localhost. Local changes only; no commit, push or deployment.

## 2026-11-26 — FarmSathi-inspired product layout

- Done: Replaced the warm photo collage with an original charcoal/green product-first hero, large owner-supplied tractor photograph, compact design-figure strip and restrained navigation. Moved engineering and AI ahead of the farmer story; placed the farmer photograph once in that story. Added native Perceive / Plan / Act disclosures that change the labelled concept schematic through CSS. Mirrored English and Marathi; retained all eight routes, motion controls and machine-only video. No dependency, backend, new external destination or runtime JS changes in this revision.
- Verification: Fresh `node scripts/build.mjs`, `node scripts/check.mjs`, `node scripts/check-motion.mjs`, `node --check scripts/build.mjs`, `node --check public/assets/site.js` and `git diff --check` passed. A one-off HTMLParser audit found balanced HTML, valid anchor targets and no forms across all eight pages; both homepages have two unique photos, three concept disclosures and no price/Journey link. HTTP verified eight 200 responses with the new asset query and two Journey 404s. Opened http://localhost:3001/?design=pehelwan-product in the default browser.
- Broken or risky: Retried CUA; kernel initialization still fails with os error 3. No visual browser verification claimed. Review hero crop, mobile/Marathi wrapping and disclosure layout before publication. CSS concept highlighting depends on `:has()`; native text disclosures remain usable without it. Concept states are illustrative, not machine controls or telemetry.
- Next: Owner visual review on localhost. Changes remain uncommitted/unpushed; no deployment or DNS change. Prior local work preserved.
- Do not touch: MAMA production, DNS, secrets and physical hardware.

## 2026-11-26 — Journey pages removed

- Done: Removed English/Marathi Journey content, generated route files and empty route directories, navigation labels and sitemap entries. Updated related links to machine, company or homepage engineering content. Homepage farmer storytelling and existing media are retained. README and route checker now describe eight pages.
- Verification: Generator, eight-route checker, JS source syntax and diff whitespace checks passed; no Journey URLs or navigation labels remain in public output. Local HTTP verified 200 for the eight remaining routes and 404 for `/journey/` and `/marathi/journey/`.
- Next: Refresh localhost to review the shortened navigation. Changes remain local and uncommitted/unpushed. No production or DNS action.

## 2026-11-26 — Indian farming and AI visual direction

- Done: Replaced the rejected blue masthead with a farmer/product photo composition and a charcoal, saffron and turmeric identity. Opening copy connects Indian farmers to Pehelwan's electric-machine and AI roadmap. Added a decorative Marathi/seedling motif; moved the training photograph into the hero so it appears once per homepage. Reworked the farmer chapter, warm engineering diagrams, pill buttons and typography; kept bilingual parity, view-only scope and existing motion controls.
- Verification: Fresh build, ten-route check, JS syntax checks and motion fixtures passed. HTTP returned 200 for all ten routes; assertions checked local anchor targets, new stylesheet version, no forms and exactly one occurrence of each hero photograph on both homepages. Opened localhost with `?design=pehelwan-soil`. Diff whitespace check passed.
- Broken or risky: Also attempted the supported Windows `@oai/sky` initialization through node_repl; it failed with the same kernel-assets error (os error 3). Browser and Windows visual inspection are therefore unavailable; no screenshot or layout acceptance is claimed. Owner visual review is still needed.
- Next: Review the Indian farming/AI direction at http://localhost:3001/?design=pehelwan-soil, including Marathi. Changes are local, uncommitted and unpushed; no domain/deployment changes.

## 2026-11-26 — Distinct blue product identity

- Done: Compared MAMA's local design source and replaced Pehelwan's stylesheet with a midnight-blue/silver design. New centred PEHELWAN masthead, wide machine stage with side annotations, engineering typography, native disclosure-driven architecture viewer, and photo-led farmer chapter with three columns. The four-wheel schematic reacts to the steering disclosure through CSS and is explicitly labelled as a concept. Updated both languages, interior pages and favicon; retained view-only scope, media and motion controls. Styles/scripts have a new cache query so the localhost browser fetches the redesign.
- Verification: Fresh generator, ten-route checker, JS syntax checks, motion fixtures and diff whitespace checks passed. HTTP returned 200 for all ten routes; HTML checks confirmed local anchor targets, no forms, new stylesheet query and four engineering disclosures on both homepages. Opened http://localhost:3001/?design=pehelwan-blue in the default browser. Initial build failed due to a newline inside a quoted caption; corrected to `<br>` and reran successfully. The following checker failure was from that stale generated output and also resolved after rebuilding.
- Broken or risky: Browser automation remains unavailable from preceding kernel failures; opening the default browser is not visual inspection. Phone layout, typography and native disclosure/CSS transitions require visual review. No dependency, provider, account or hardware behavior added.
- Next: Review the distinct design on localhost, including Marathi and the steering disclosure. Local changes remain uncommitted/unpushed; no production deployment or DNS action.

## 2026-11-26 — Farmer story and product motion

- Done: Rebuilt the homepage hero and added a three-part farmer story with the owner's training photograph, `farmers-training.jpeg` (229 KB). Added a desktop sticky story visual, scroll-driven AI concept illustration, reading progress, finite entrances, animated design figures and a motion pause toggle. Mirrored the content in Marathi and carried the visual/motion treatment across all ten routes. Site remains view-only; product figures and AI roadmap qualifications remain intact.
- Verification: `node scripts/build.mjs`, `node scripts/check.mjs`, `node --check scripts/build.mjs`, `node --check public/assets/site.js`, `node scripts/check-motion.mjs` and `git diff --check` passed. Motion tests use controlled DOM fixtures, not a real browser. Local HTTP verified 200 for all ten pages, the new photograph, CSS and JS, plus assertions for motion controls, new story sections and absence of forms. Opened the updated localhost URL in the user's browser.
- Broken or risky: Browser automation still fails at kernel initialization (os error 3); desktop/mobile screenshots and visual acceptance remain outstanding. Native operating-system font rendering, sticky layout and actual scroll smoothness need visual review. No new dependency or external destination; the new image is an owner-supplied photo previously approved for public use.
- Next: Owner can review http://localhost:3001/ and the Marathi switch. The preview server from the preceding turn is still running. Changes remain local, uncommitted and unpushed.
- Do not touch: MAMA production, DNS, secrets or physical machine controls.

## 2026-11-26 — View-only product showcase implemented

- Done: The owner cancelled the enquiry/backend scope. Removed enquiry buttons and external form destinations from both languages; the former Contact routes now show company information. Added homepage chapter links and a labelled AI crop-row concept illustration, refined charcoal/orange styling and heading scale, and added Marathi font/spacing rules. No runtime dependency, auth, database or visitor data collection was added. The full-stack proposal and its pending questions are superseded.
- Verification: `node scripts/build.mjs`, `node scripts/check.mjs`, `node --check scripts/build.mjs`, and `node --check public/assets/site.js` passed. A temporary Python HTTP server on 127.0.0.1:3001 returned 200 for all ten pages; each response was checked for branding and absence of forms, enquiry links and the floating enquiry button. Server shut down after the check. `git diff --check` passed. No new secret or external destination was introduced.
- Broken or risky: Browser tool again failed with `failed to write kernel assets` (os error 3), so desktop/mobile visual review remains pending. Initial loopback check was restricted; an approved local check then showed no preview server running, so a temporary server was used. No successful browser inspection is claimed.
- Next: Review the product showcase on a local or Vercel preview before publishing; source/static output changes are uncommitted and unpushed. Existing production-domain release gates still apply.
- Do not touch: MAMA production, current DNS, secrets or machine controls.

## 2026-11-26 — Full-stack proposal

- Done: Confirmed the owner wants Pehelwan enquiry capture and a private team review inbox. Audited the static routes, existing contact flow and current Git revision. Drafted `docs/FULLSTACK-PLAN.md` and a pending decision before application edits.
- In progress: Owner review of the proposed Next.js/Supabase architecture and identification of authorized staff email addresses.
- Broken or risky: Current site has no private data store or auth. The planned change adds contact-data handling and requires a new preview environment and release gate. The live domain remains on the older project.
- Next: Once the owner approves the architecture and staff access, implement and test the bilingual site, form, RLS and inbox without moving the live domain.
- Do not touch: MAMA production, current DNS, secrets or physical machine controls.

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
