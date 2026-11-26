# Pehelwan website decisions

## 2026-11-26 — Standalone site structure (before implementation)

- Context: The owner wants a full, separate website for `pehelwan.live` and supplied an empty `pehelwan_website` repository. The existing MAMA deployment currently serves a one-page Pehelwan experience at that hostname.
- Options: extend the shared MAMA Next.js application, create a new Next.js application, or publish dependency-free static pages from the new repository.
- Choice: build five English pages and five matching Marathi pages as static HTML with shared CSS and a small script. Place only deployable files in `public/`, which Vercel's Other preset serves by default. Use unique supplied photographs on the Home, Machine, Technology, and Journey pages, with the road-test video only on Machine. Keep enquiries on the already-tested MAMA contact route.
- Reason: a separate source and deployment can evolve without changing MAMA. Static output avoids a new production dependency or server and keeps the public pages readable without JavaScript. A small script supplies progressive motion only.
- Cost and risk: shared header/footer markup appears in multiple pages; changes must be checked across both languages. The form remains on the MAMA site. The current Vercel domain must be moved only after a separate preview and owner review; HTTPS on the current assignment is still pending.
- Revisit if: the owner needs an independent Pehelwan form, content management, account features, or a confirmed product launch with new claims.
- Model/version: unavailable in the project record.
