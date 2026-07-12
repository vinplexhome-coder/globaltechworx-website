# GlobalTechWorx Website

The official website for **GlobalTechWorx** — CCTV & Webcam Systems, Wireless Networking,
Vehicle Charging Mounts, Computer Workstation Installation, and Server Installation &
Deployment.

- Live site: [www.globaltechworx.com](https://www.globaltechworx.com)
- Tagline: INNOVATE · INTEGRATE · ELEVATE

This is a plain, static multi-page site — no build step, no framework, no server required.
Every file the browser loads (HTML, CSS, JS, images) lives at the repo root, so it can be
opened directly or served by any static host.

---

## What's in this repo

```
website/
├── index.html          # Home
├── about.html           # About
├── services.html         # Services
├── gallery.html            # Gallery
├── contact.html             # Contact (quote form, map, WhatsApp button)
├── css/styles.css            # all styling (single stylesheet, shared by every page)
├── js/script.js                # nav toggle, footer year, small UI behavior
├── images/                       # logos, favicon, gallery photos
├── robots.txt / sitemap.xml
└── DEPLOY-SOP.md                   # step-by-step guide for sharing this with someone else
```

Each HTML page repeats its own `<head>`, header, nav, and footer — there's no templating
engine or build step by design, so any page can be opened and edited directly.

---

## Running it locally

No install required at all — just open `index.html` directly in a browser, since every
asset is linked with a relative path.

If you'd rather view it through a local server (closer to how it behaves in production):

```bash
python3 -m http.server 8080
```

Then open **http://localhost:8080**. Any other static file server (e.g. `npx serve .`)
works the same way.

---

## Making changes

- **Edit content/copy:** open the relevant `.html` file directly — there's no build step,
  just edit and refresh the browser.
- **Edit styling:** everything is in `css/styles.css`, shared by all pages via CSS
  variables (colors, fonts, spacing) defined at the top of the file in `:root`.
- **Add a new page:** copy an existing `.html` file as a starting point (to keep the
  header/nav/footer and `<head>` meta tags consistent), then add a link to it in the
  `.site-nav` block of every page's header.
- **Replace images:** drop new files into `images/` (or `images/gallery/`) and update the
  `src`/`href` in the relevant HTML.

## Deployment

- **Production:** the live site is deployed from this repo — check with whoever manages
  hosting for the current deploy process. Being fully static, it can be hosted on any
  static file host (Netlify, GitHub Pages, S3, Nginx, etc.) with no build step.
- **Anyone's own laptop / LAN:** see [DEPLOY-SOP.md](DEPLOY-SOP.md).

## Repository

- GitHub: [vinplexhome-coder/globaltechworx-website](https://github.com/vinplexhome-coder/globaltechworx-website)
  (private repo)

## Still pending / known placeholders

- Social media links in the footer are placeholder `#` hrefs — need real profile URLs.
- Gallery page uses stock photos as placeholders until real project photos are available.
- Testimonials on the Home page are sample/placeholder text.
- Contact form submits via `mailto:` (opens the visitor's email client) — there's no backend
  or email service wired up.
