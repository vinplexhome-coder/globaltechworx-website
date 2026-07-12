# SOP: Run the GlobalTechWorx Website on a Friend's Laptop

This shows how to get the website running on someone else's computer — Windows, Mac, or
Linux — in a couple of minutes, with no coding knowledge needed and nothing to install.
The site is a plain set of HTML files, so it just opens straight in a browser.

---

## What you'll need

- The friend's laptop (internet only needed to receive the files, not to view the site).
- A few MB of free disk space.

---

## Step 1 — Get the website files onto the laptop

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

Either way, your friend should end up with a folder that contains `index.html`, `css/`,
`js/`, and `images/`.

---

## Step 2 — View the site

**Simplest way:** double-click `index.html` inside the folder — it opens directly in the
default browser. Every page and image loads with no install and no terminal needed.

**Alternative (closer to a real server, optional):** if your friend has Python installed,
they can open a terminal in the folder and run:
```
python3 -m http.server 8080
```
then open `http://localhost:8080` in a browser.

---

## Everyday use after the first setup

- **Got updated files** (a new ZIP, or `git pull`)? Just replace the old folder (or re-run
  `git pull`) and refresh the browser — there's nothing to rebuild or restart.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Images or styling missing when opening `index.html` directly | Make sure the whole folder was copied/unzipped together (`css/`, `js/`, `images/` must sit next to the `.html` files) — don't move `index.html` out on its own. |
| Want to check how it looks over a local network (e.g. from a phone) | Use the Python server option above, then visit `http://<laptop's-IP-address>:8080` from another device on the same Wi-Fi. |
