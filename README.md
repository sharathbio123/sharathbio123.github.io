# Portfolio source (private)

Private source for **Sharath B S** — live site: [sharathbio123.github.io](https://sharathbio123.github.io)

Built files are deployed automatically to the public repo **`sharathbio123/sharathbio123.github.io`** (`gh-pages` branch only). Visitors see the website, not this repository.

## One-time setup (Option B)

### 1. Public deploy repo

Keep **`sharathbio123/sharathbio123.github.io`** **public**. Its `main` branch holds only a short README; the site is served from **`gh-pages`**.

In that repo: **Settings → Pages → Build and deployment → Branch: `gh-pages` / root**.

### 2. Deploy token (required)

Create a **fine-grained** personal access token:

1. GitHub → **Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate**
2. Resource owner: your account
3. Repository access: **Only select repositories** → `sharathbio123.github.io`
4. Permissions: **Contents** → Read and write
5. Generate and copy the token

Add it to **this private repo**:

**Settings → Secrets and variables → Actions → New repository secret**

| Name | Value |
|------|--------|
| `PAGES_DEPLOY_TOKEN` | your fine-grained PAT |

### 3. Deploy

Push to **`main`** on this repo, or run **Actions → Deploy to GitHub Pages → Run workflow**.

Rotate the PAT before it expires and update the secret.

## Day-to-day editing

1. Edit files here (`index.html`, `src/`, `public/`, etc.)
2. Commit and push to **`main`**
3. GitHub Actions builds and publishes to the public repo’s `gh-pages` branch

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
