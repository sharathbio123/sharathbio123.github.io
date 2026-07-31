# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single static personal portfolio site built with **Vite 6 + vanilla JS** (no backend, database, framework, or env files). npm is the package manager (`package-lock.json`); Node 22 is used in CI (`.github/workflows/deploy.yml`).

### Services

There is exactly one service to run locally: the **Vite dev server**.

- Start it with `npm run dev` (see `package.json`). It listens on **port 5173** (configured in `vite.config.js`, `host: true`).
- Home page: `http://localhost:5173/`. Project detail pages: `http://localhost:5173/project.html?id=<id>` (e.g. `?id=moldockpro`).
- Production build: `npm run build` (outputs `dist/`, deployed to GitHub Pages via CI). This is for release verification, not local development.

### Notes

- There are **no automated tests and no lint config** in this repo — do not expect `npm test`/`npm run lint` to exist.
- Portfolio content is data-driven: project entries live in `src/projects-data.js`, rendered by `src/render-projects.js` (home cards) and `src/project-page.js` (detail page via the `?id=` query param). Media lives under `public/projects/<id>/`.
- `npm run build` emits benign warnings about `__VITE_PUBLIC_ASSET__...` not resolving at build time for a couple of `public/` assets referenced dynamically; these are resolved at runtime and are not errors.
- Google Fonts load from a CDN but the site falls back to system fonts, so it works fine without internet access.
