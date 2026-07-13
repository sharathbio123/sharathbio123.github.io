# Option B: Private source + public site

This splits your portfolio into two repositories:

| Repository | Visibility | Purpose |
|------------|------------|---------|
| **`portfolio-source`** | **Private** | Source code, photos, CV, workflows — you edit here |
| **`sharathbio123.github.io`** | **Public** | Deploy target only — `gh-pages` branch serves the live site |

Visitors only see the built site. Your HTML, assets, and git history stay in the private repo.

---

## Step 1 — Create the private source repo

1. On GitHub: **New repository**
2. Name: **`portfolio-source`**
3. Visibility: **Private**
4. Do **not** add a README (empty repo)

Clone and push this codebase to it:

```bash
git clone https://github.com/sharathbio123/sharathbio123.github.io.git
cd sharathbio123.github.io
git remote add source https://github.com/sharathbio123/portfolio-source.git
git push source main
```

Use the branch/commit that includes the updated `.github/workflows/deploy.yml` (cross-repo deploy).

---

## Step 2 — Create the deploy token

1. GitHub → **Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate**
2. **Resource owner:** your account
3. **Repository access:** Only **`sharathbio123.github.io`**
4. **Permissions:** **Contents** → Read and write
5. Generate and copy the token

Add it to the **private** `portfolio-source` repo:

**Settings → Secrets and variables → Actions → New repository secret**

| Name | Value |
|------|--------|
| `PAGES_DEPLOY_TOKEN` | your token |

---

## Step 3 — Deploy from the private repo

1. In **`portfolio-source`**: **Actions → Deploy to GitHub Pages → Run workflow** (or push to `main`)
2. Confirm the run succeeds
3. Open https://sharathbio123.github.io — site should look unchanged

**Public repo Pages settings** (one-time check):

`sharathbio123.github.io` → **Settings → Pages → Branch: `gh-pages` / (root)**

---

## Step 4 — Slim the public repo

After the private repo deploy works, clean **`sharathbio123.github.io`** so it no longer contains source code:

1. **Delete** `.github/workflows/deploy.yml` on the public repo (deploy runs from private repo only)
2. **Delete** from `main`: `index.html`, `src/`, `public/`, `package.json`, `package-lock.json`, `vite.config.js`, `.gitignore` (optional)
3. **Replace** `README.md` on `main` with:

```markdown
# sharathbio123.github.io

Public deploy target for [sharathbio123.github.io](https://sharathbio123.github.io).

The live site is published from the **`gh-pages`** branch (built output only).

Source code is private. Updates are deployed from the private `portfolio-source` repository.
```

Commit and push to `main` on the public repo.

The live site keeps serving from `gh-pages`; only `main` is cleaned up.

---

## Step 5 — Work in the private repo going forward

```bash
git clone https://github.com/sharathbio123/portfolio-source.git
cd portfolio-source
npm install
npm run dev
```

Edit, commit, push to **`main`** → Actions publishes to public `gh-pages`.

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Deploy workflow fails with 403 | Check `PAGES_DEPLOY_TOKEN` on **portfolio-source**; token must allow **Contents: write** on `sharathbio123.github.io` |
| Site unchanged after deploy | Wait 1–2 min; hard-refresh; check Actions log and `gh-pages` branch on public repo |
| Making public repo private | **Do not** — free GitHub Pages for `username.github.io` requires this repo to stay **public** |
| Token expired | Generate a new fine-grained PAT and update `PAGES_DEPLOY_TOKEN` |

---

## Interim: deploy still on public repo

If this PR updates `deploy.yml` before you finish migration, add **`PAGES_DEPLOY_TOKEN`** to **`sharathbio123.github.io`** as well so pushes to `main` keep deploying until you move all development to `portfolio-source` and remove the workflow from the public repo.
