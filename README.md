# Pehelwan website

A separate, bilingual website for Pehelwan by MAMA Agricultural Robotics / Shanik AG Private Limited.

## Pages

| English | Marathi |
| --- | --- |
| `/` | `/marathi/` |
| `/machine/` | `/marathi/machine/` |
| `/technology/` | `/marathi/technology/` |
| `/journey/` | `/marathi/journey/` |
| `/contact/` | `/marathi/contact/` |

The pages are static HTML, CSS and a small progressive JavaScript file. They have no runtime packages, database, checkout flow or hardware control. The Contact page links to the existing MAMA enquiry form; submissions are handled there, not by this repository.

## Develop

Requires Node.js 20+ to regenerate pages. No package installation is needed.

```powershell
node scripts/build.mjs
node scripts/check.mjs
node --check assets/site.js
python -m http.server 3001 --bind 127.0.0.1 --directory public
```

Visit `http://127.0.0.1:3001/`. The committed `public/` directory is the deployable output. Edit `scripts/build.mjs`, regenerate, and check both languages before publishing. Shared styles and motion are in `public/assets/`.

## Deployment

Import this repository as a **new** Vercel project using the **Other** framework preset. The site has no install or build command; Vercel serves `public/` as static output. Test the generated Vercel preview URL first. Only then move `pehelwan.live` from the existing MAMA project to the new project. Use the A record value shown by the new project's Domains settings; it may differ from the current value. Verify HTTPS and all routes before considering the move complete. Do not change nameservers or mail records.

See [release review](docs/RELEASE.md) and [handover](docs/HANDOVER.md) before deployment.
