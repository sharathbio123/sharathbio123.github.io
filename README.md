# Portfolio source

Private source for **Sharath B S** — live site: [sharathbio123.github.io](https://sharathbio123.github.io)

> **Option B (private source):** See **[docs/OPTION-B-MIGRATION.md](docs/OPTION-B-MIGRATION.md)** for the full setup. Built files deploy to the public repo `sharathbio123/sharathbio123.github.io` (`gh-pages` branch).

## Quick reference (after migration)

### Profile photo

| File | Location |
|------|----------|
| `My_Photo.jpg` | `public/My_Photo.jpg` |

### CV (PDF)

Upload your résumé as **`public/CV.pdf`**. The **CV** nav link opens `/CV.pdf` in a new tab.

### Gallery / blog (future)

Gallery and blog blocks are not on the live site yet. When you add them back in `index.html`, put images under `public/gallery/` — see git history or earlier commits for filenames.

### Local preview

```bash
npm install
npm run dev
```

Open http://localhost:5173
