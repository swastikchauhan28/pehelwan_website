# Pehelwan website decisions

## 2026-11-26 — Owner-selected Company photograph

- Owner supplied a photograph of a farmer discussion and asked to use it after seeing the revised Company page. Replace that page's previous team/drone hero image in both languages. Keep the image in its natural landscape composition so participants are not unnecessarily cropped, use descriptive alt text and a factual caption. The previous asset remains untouched because it predates this edit; no other route or product claim changes.

## 2026-11-26 — Company page hero correction

- Context: Owner showed the Company page with a large empty PEHELWAN circle and an oversized heading. The layout makes the page feel generic and wastes the opening viewport.
- Choice: use the existing owner-supplied MAMA team photograph (`mama-farm-drone-group-2026.jpg`) as evidence of the team's agricultural work, with a shorter bilingual company headline and a compact two-column hero. The image is currently unused elsewhere on this site. Keep the visible caption accurate to the drone-era context.
- Alternative: reuse the farmer-training or presenter photo. Rejected because the former is already on Home and the latter was previously disliked in another placement. No new image dependency or claims. Scope is the two Company pages and shared hero styling; verify both generated routes and responsive source rules before owner review.

## 2026-11-26 — Remove header motion button

- Owner explicitly requested removing Enable motion. Remove the shared Enable/Pause motion control in both languages and its unused styles/event handler. Retain system reduced-motion detection, preference-change handling, counter final values and video visibility behavior. Adapt the existing motion fixtures to exercise system preference changes instead of the removed button. No new dependencies or release actions.


## 2026-11-26 — FarmSathi-inspired product presentation

- Context: Owner supplied https://www.farmsathi.com/ after rejecting the warmer collage. Inspected its public HTML/CSS: product-first dark hero, compact figures, explorable machine systems and autonomy walkthroughs.
- Choice before implementation: use an original charcoal/green Pehelwan presentation, a large real machine photograph, compact company-reported design figures, native interactive engineering and a three-stage AI concept explanation. Place farmer evidence later in the product narrative. Keep both languages and the removed Journey routes absent.
- Alternative: reproduce the reference's 3D viewer. Rejected because no Pehelwan 3D asset exists; a labelled schematic is more honest and requires no new dependencies. Reference imagery, model data, claims and branding will not be copied.
- Scope: generator and shared CSS only; retain motion runtime, reduced-motion control and machine-only video. No form, backend, new external destination or publication. Static content is authored locally; diagrams accept only native disclosure selections, with no persistence or hardware connection.
- Verification: build, route/asset checks, motion fixtures, source checks and local HTTP. Browser inspection will be retried; report any remaining tooling limit. Recovery: preserve prior dirty work at base 183b708; this local design revision is not a release.

## 2026-11-26 — Remove standalone Journey pages

- Owner explicitly requested removing Our Journey from Pehelwan. Remove the English/Marathi route content and generated pages, navigation and sitemap entries. Redirect remaining internal calls to action toward the machine, technology or company content; preserve the homepage farmer narrative because the request is for the standalone page.
- No redirects or hosting configuration are introduced. Old Journey URLs will return 404; existing media and historical records remain. Check the eight remaining routes, internal links and both removed URLs.

## 2026-11-26 — Indian farming and AI direction

- Owner rejected the blue engineering identity and asked for modern AI/autonomy with Indian farmers and an Indian theme. Replace the blue/silver presentation with charcoal, saffron and turmeric, a farmer/product photo composition, and contemporary crop-row graphics. Avoid flags, invented endorsements and stock/generated depictions of the real machine.
- Put real farmer experience at the front of the story; keep autonomy/vision as a clearly labelled roadmap. Keep both languages, native engineering disclosures and reduced-motion controls. Move the existing farmer photograph into the opening composition so it is not repeated later.
- No dependency, backend, publishing or DNS changes. Preserve the current authorized worktree and verify generation, motion behavior, routes and image placement; report visual inspection limitations honestly.

## 2026-11-26 — Distinct Pehelwan identity

- Owner requests a stronger departure from MAMA. Replace the split headline/photo landing pattern with a centred product masthead and a wide product stage; use midnight blue, silver and electric blue instead of farm greens/orange. Use an engineering typeface role and quieter body text, with Marathi equivalents.
- Add an accessible interactive engineering viewer with native disclosure controls and a labelled steering concept. Recompose the farmer story into a broad photo-led introduction followed by three readable chapters, removing the MAMA-like sticky split story. Retain real supplied imagery, static architecture and motion controls.
- No new capability claims, dependencies, data collection or publication. Preserve all earlier authorized dirty-worktree changes; base revision remains 183b708. Verify static generation, both languages, native disclosure markup, motion regressions and localhost responses. Visual browser verification remains pending if tool startup still fails.

## 2026-11-26 — Futuristic farmer/product story

- Context: Owner requests stronger storytelling about Pehelwan and Indian farmers, with a futuristic appearance and animation. The view-only scope persists.
- Choice: retain the static site, add a product hero, a sticky farmer-story sequence using an additional supplied photograph, scroll-driven concept motion, count-up design figures and a visitor motion toggle. Carry the visual system and language parity through all pages. Use native CSS/JavaScript rather than an animation dependency.
- Trade-off: scroll effects need careful phone/reduced-motion fallbacks; real photos keep the story grounded but are not polished product renders. All figures remain company-reported design references; conceptual AI visuals are labelled. No invented farmer quotes or live telemetry.
- Recovery: preserve existing uncommitted showcase changes. Base revision remains `183b708`; current worktree is dirty with the previous authorized changes. No publication in this phase.
- Verification: generator and route/syntax checks, real HTTP page/asset checks, focused motion-state checks where tools permit and browser visual inspection if runtime becomes available. Native browser kernel previously failed, so do not claim visual acceptance without new evidence.

## 2026-11-26 — Product showcase confirmed

- The owner explicitly narrowed the scope to a website people only view, with no enquiry form. This supersedes the pending full-stack proposal and its approval questions. Keep the existing static architecture; add no database, authentication, provider or runtime dependency.
- Implement a product-first browsing flow in both languages: field context, machine engineering, autonomy/AI roadmap and company story. Replace enquiry calls to action with links through those chapters. Preserve `/contact/` as an informational company page so existing links keep working.
- Refine the existing charcoal/orange design with clearer chapter navigation, an illustrated crop-row concept, consistent typography and restrained motion. Reuse existing supplied media and keep roadmap claims qualified.
- Verification: rebuild both languages, check routes/links/metadata and absence of form destinations, inspect the local UI where tooling permits. No commit, push or production-domain change in this phase.

## 2026-11-26 — Proposed full-stack direction (pending owner approval)

- Context: The owner wants a futuristic product story for Indian farmers, autonomous and vision AI roadmap content, a Pehelwan enquiry form and a protected staff review workflow. The current static site sends enquiries to MAMA.
- Options: retain static pages with Vercel functions and a browser-rendered inbox; move the site to Next.js with a managed database/auth provider; or retain the external MAMA form.
- Proposed choice: Next.js App Router plus Supabase Postgres/Auth, with server-validated public submissions and a staff-only inbox. See `docs/FULLSTACK-PLAN.md` for scope, limits and release checks.
- Reason: one application can share the public bilingual story and private server-rendered workflow; one provider covers database and staff sign-in. The old static build remains the recovery source until preview approval.
- Cost/risk: new dependencies and managed-service cost, storing contact data, authentication and RLS configuration, provider outages and a broader rewrite. The Supabase SSR package is beta; pin and test it. No implementation or provider setup is approved by this proposal itself.
- Revisit if: the owner rejects the provider, needs a different team workflow, or cannot establish a test project with separate data.
- Model/version: unavailable in the project record.

## 2026-11-26 — Standalone site structure (before implementation)

- Context: The owner wants a full, separate website for `pehelwan.live` and supplied an empty `pehelwan_website` repository. The existing MAMA deployment currently serves a one-page Pehelwan experience at that hostname.
- Options: extend the shared MAMA Next.js application, create a new Next.js application, or publish dependency-free static pages from the new repository.
- Choice: build five English pages and five matching Marathi pages as static HTML with shared CSS and a small script. Place only deployable files in `public/`, which Vercel's Other preset serves by default. Use unique supplied photographs on the Home, Machine, Technology, and Journey pages, with the road-test video only on Machine. Keep enquiries on the already-tested MAMA contact route.
- Reason: a separate source and deployment can evolve without changing MAMA. Static output avoids a new production dependency or server and keeps the public pages readable without JavaScript. A small script supplies progressive motion only.
- Cost and risk: shared header/footer markup appears in multiple pages; changes must be checked across both languages. The form remains on the MAMA site. The current Vercel domain must be moved only after a separate preview and owner review; HTTPS on the current assignment is still pending.
- Revisit if: the owner needs an independent Pehelwan form, content management, account features, or a confirmed product launch with new claims.
- Model/version: unavailable in the project record.
