# sharathbs.github.io

Personal portfolio site for **Sharath B S** (`My_portfolio2026`), published via GitHub Pages from the
`sharathbs.github.io` user-site repository.

## Cursor Cloud specific instructions

- **Stack:** Vite 6 static site — `index.html` + `src/main.js` + `src/styles/main.css`.
- **Install / refresh deps:** `npm install` (VM update script on startup).
- **Dev server:** `npm run dev` — port **5173**, `host: true` (use `http://localhost:5173`).
- **Production build:** `npm run build` → `dist/`; preview with `npm run preview` on port **4173**.
- **No tests or linters** are configured yet; verify with dev server + `npm run build`.
- **Content updates:** edit `index.html` for CV/portfolio sections; styles in `src/styles/main.css`.
- **GitHub Pages:** built site is on branch `gh-pages`. Public URL: https://sharathbs.github.io
  One-time: **Settings → Pages → Deploy from branch → `gh-pages` / root**.
  Workflow `.github/workflows/deploy.yml` rebuilds `gh-pages` on push to `main`.
- **localhost:5173** is dev-only; it is not shareable with others.
