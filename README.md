# GlobalTechWorx Website

The official website for **GlobalTechWorx** — CCTV & Webcam Systems, Wireless Networking,
Vehicle Charging Mounts, Computer Workstation Installation, and Server Installation &
Deployment.

- Live site: [www.globaltechworx.com](https://www.globaltechworx.com)
- Tagline: INNOVATE · INTEGRATE · ELEVATE

This is a plain, static multi-page site (no build step, no framework) served by a small
Express app. It's designed so anyone — including someone with no coding background — can
run it locally with a single command via Docker.

---

## What's in this repo

```
website/
├── public/                 # everything the browser loads — the actual website
│   ├── index.html          # Home
│   ├── about.html          # About
│   ├── services.html       # Services
│   ├── gallery.html        # Gallery
│   ├── contact.html        # Contact (quote form, map, WhatsApp button)
│   ├── css/styles.css      # all styling (single stylesheet, shared by every page)
│   ├── js/script.js        # nav toggle, footer year, small UI behavior
│   ├── images/              # logos, favicon, gallery photos
│   ├── robots.txt / sitemap.xml
├── server.js                # Express static file server
├── package.json              # Node dependencies (just Express)
├── Dockerfile                 # builds the site into a container image
├── docker-compose.yml         # one-command local run
├── .env.example                # copy to .env to change the port
└── DEPLOY-SOP.md                # step-by-step guide for running this on someone else's laptop
```

Each HTML page repeats its own `<head>`, header, nav, and footer — there's no templating
engine or build step by design, so any page can be opened and edited directly.

---

## Running it locally (recommended: Docker)

No Node.js, npm, or Python install required — just Docker.

```bash
docker compose up -d --build
```

Then open **http://localhost:3009**.

- Stop it: `docker compose down`
- Start it again (no rebuild needed unless files changed): `docker compose up -d`
- Change the port: copy `.env.example` to `.env` and edit `HOST_PORT` (defaults to `3009`)

This is the same method to use for handing the site to someone else to run on their own
computer — see **[DEPLOY-SOP.md](DEPLOY-SOP.md)** for a full non-technical walkthrough
(installing Docker Desktop, getting the files, troubleshooting).

## Running it locally (with Node.js installed)

If you already have Node.js and prefer not to use Docker:

```bash
npm install
npm start
```

Then open **http://localhost:3009** (or whatever port `$PORT` is set to).

---

## Making changes

- **Edit content/copy:** open the relevant `.html` file in `public/` directly — there's no
  build step, just edit and refresh the browser (or re-run `docker compose up -d --build`
  if running via Docker).
- **Edit styling:** everything is in `public/css/styles.css`, shared by all pages via CSS
  variables (colors, fonts, spacing) defined at the top of the file in `:root`.
- **Add a new page:** copy an existing `.html` file as a starting point (to keep the
  header/nav/footer and `<head>` meta tags consistent), then add a link to it in the
  `.site-nav` block of every page's header.
- **Replace images:** drop new files into `public/images/` (or `public/images/gallery/`)
  and update the `src`/`href` in the relevant HTML.

## Deployment

- **Production:** the live site is deployed from this repo — check with whoever manages
  hosting for the current deploy process.
- **Anyone's own laptop / LAN:** see [DEPLOY-SOP.md](DEPLOY-SOP.md) — the goal is that
  `docker compose up` works out of the box on Windows, Mac, or Linux.

## Repository

- GitHub: [vinplexhome-coder/globaltechworx-website](https://github.com/vinplexhome-coder/globaltechworx-website)
  (private repo)

## Still pending / known placeholders

- Social media links in the footer are placeholder `#` hrefs — need real profile URLs.
- Gallery page uses stock photos as placeholders until real project photos are available.
- Testimonials on the Home page are sample/placeholder text.
- Contact form submits via `mailto:` (opens the visitor's email client) — there's no backend
  or email service wired up.
