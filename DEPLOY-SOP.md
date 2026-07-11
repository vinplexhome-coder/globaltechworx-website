# SOP: Run the GlobalTechWorx Website on a Friend's Laptop

This shows how to get the website running on someone else's computer — Windows, Mac, or
Linux — in about 15 minutes, with no coding knowledge needed. The website runs inside
Docker, so the friend does not need to install Node.js, npm, or Python.

---

## What you'll need

- The friend's laptop, connected to the internet (only needed for setup).
- About 500 MB of free disk space.
- Administrator/install rights on the laptop (to install Docker Desktop).

---

## Step 1 — Install Docker Desktop

1. On the friend's laptop, go to **docker.com/products/docker-desktop** and download the
   installer for their operating system (Windows or Mac).
2. Run the installer and accept the defaults. Restart the laptop if it asks you to.
   - **Windows only:** if it asks about WSL2, let it install/enable that too — this is
     required and the installer handles it automatically on Windows 10/11.
3. Open **Docker Desktop** from the Start Menu / Applications folder and wait until it
   says **"Docker Desktop is running"** (the whale icon in the system tray/menu bar turns
   steady, not animated).

You only need to do this once per laptop.

---

## Step 2 — Get the website files onto the laptop

The project lives in a **private** GitHub repository, so pick whichever is easier:

### Option A — Send a ZIP file (easiest, no GitHub account needed)
1. On your own computer, zip the `website` folder.
2. Send it to your friend (USB drive, Google Drive, WeTransfer, email if small enough).
3. Your friend unzips it somewhere easy to find, e.g. `Desktop\globaltechworx-website`.

### Option B — GitHub clone (if your friend already has/wants a GitHub account)
1. Add your friend as a collaborator: on GitHub, go to the repo →
   **Settings → Collaborators → Add people**, and enter their GitHub username or email.
2. Your friend accepts the invite email.
3. Your friend installs **Git** (git-scm.com) if they don't have it, then opens a terminal
   and runs:
   ```
   git clone https://github.com/vinplexhome-coder/globaltechworx-website.git
   ```

Either way, your friend should end up with a folder that contains `Dockerfile`,
`docker-compose.yml`, `server.js`, and a `public` folder.

---

## Step 3 — (Optional) Pick a different port

By default the site runs on port **3009** (`http://localhost:3009`). Only do this step if
something else on the laptop is already using that port.

1. Inside the project folder, make a copy of `.env.example` and rename the copy to `.env`.
2. Open `.env` in a text editor and change `HOST_PORT=3009` to another number, e.g.
   `HOST_PORT=3010`.

If 3009 is free (it usually is), you can skip this step entirely.

---

## Step 4 — Start the website

1. Open a terminal inside the project folder:
   - **Windows:** open the folder in File Explorer, click the address bar, type `cmd`,
     press Enter.
   - **Mac:** right-click the folder → **Services → New Terminal at Folder** (or open
     Terminal and `cd` into the folder).
2. Run:
   ```
   docker compose up -d --build
   ```
3. The first time, this downloads about 150 MB and takes a few minutes — that's normal.
   You'll see it finish with something like `Container globaltechworx-web  Started`.

---

## Step 5 — View the site

Open a browser and go to:
```
http://localhost:3009
```
(or whatever port you set in Step 3). The GlobalTechWorx homepage should load.

---

## Everyday use after the first setup

- **Stop the site:** `docker compose down`
- **Start it again later:** `docker compose up -d` (fast — no rebuild needed unless the
  files changed)
- **Got updated files** (a new ZIP, or `git pull`)? Re-run:
  ```
  docker compose up -d --build
  ```

---

## Troubleshooting

| Problem | Fix |
|---|---|
| `docker: command not found` / `docker compose` fails | Docker Desktop isn't installed or isn't running — open it and wait for "Docker Desktop is running" first. |
| Browser says "can't reach this page" | Wait 10–15 seconds after starting, then refresh. Also double check the port number matches what's in `.env` (or 3009 if you skipped Step 3). |
| "Port is already allocated" error | Something else is using that port — go back to Step 3 and pick a different `HOST_PORT`, then re-run `docker compose up -d --build`. |
| Windows asks to install/enable WSL2 | Let it — it's required for Docker Desktop on Windows and only needs to happen once. |
