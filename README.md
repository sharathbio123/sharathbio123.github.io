# sharathbs.github.io

Personal portfolio site for **Sharath B S** — Computational Chemist specializing in AI drug
discovery, cheminformatics, and molecular modeling.

## Development

This site is a static portfolio built with [Vite](https://vitejs.dev/).

### Prerequisites

- Node.js 18+ (Node 22 is available in the Cloud Agent VM)

### Setup

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. Vite provides hot module
replacement for fast iteration while editing `index.html`, `src/`, and styles.

### Build for production

```bash
npm run build
npm run preview
```

The production build is written to `dist/`.

### Publish publicly (GitHub Pages)

**Important:** `https://sharathbs.github.io` only works when this repository is owned by the
**`sharathbs`** GitHub account (repo: `sharathbs/sharathbs.github.io`). It is currently under
**`sharathbio123`**, so GitHub will not publish it at that URL until you transfer ownership.

#### Option A — Public URL `https://sharathbs.github.io` (recommended)

1. Open https://github.com/sharathbio123/sharathbs.github.io/settings
2. Scroll to **Danger Zone → Transfer ownership**
3. Transfer to GitHub user **`sharathbs`** (your account that matches the desired URL)
4. On the transferred repo: **Settings → Pages → Deploy from branch → `gh-pages` / (root) → Save**
5. Wait 1–2 minutes, then open **https://sharathbs.github.io**

The `gh-pages` branch already contains the built portfolio. Pushes to `main` auto-rebuild via
GitHub Actions.

#### Option B — Keep repo on `sharathbio123` account

1. Rename the repository to **`sharathbio123.github.io`** (Settings → General → Repository name)
2. **Settings → Pages → Deploy from branch → `gh-pages` / (root) → Save**
3. Public URL: **https://sharathbio123.github.io**

> `npm run dev` (localhost:5173) is for development only — only you can see that link.
> Share your GitHub Pages URL (above) with others.

## Project structure

```
index.html          # Main portfolio page
public/
  profile.jpg       # Your photo (add this file — shown in hero)
  profile.svg       # Placeholder until profile.jpg is added
src/
  main.js           # Navigation and small UI helpers
  styles/main.css   # Site styles
vite.config.js      # Vite dev/build configuration
```

## Cursor Cloud specific instructions

- **Install / refresh deps:** `npm install` (also used as the VM update script on startup).
- **Dev server:** `npm run dev` — listens on port **5173** with `host: true` for container access.
- **Production check:** `npm run build` then `npm run preview` on port **4173**.
- There are no automated tests or linters configured yet; validation is manual via dev server and
  production build.
- Content lives in `index.html`; update sections there when the CV changes.
