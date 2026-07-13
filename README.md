# sharathbio123.github.io

Portfolio of **Sharath B S** — [sharathbio123.github.io](https://sharathbio123.github.io)

## Updating images & links

All media files go in **`public/`** (served at the site root after deploy). Push changes to **`main`** — GitHub Actions rebuilds the site automatically.

> **Note:** Gallery and blog sections are not shown on the live site yet. Use the steps below when you are ready to add them back in `index.html`.

### Profile photo

| File | Location |
|------|----------|
| `My_Photo.jpg` | `public/My_Photo.jpg` |

### CV (PDF)

Upload your résumé as **`public/CV.pdf`**. The **CV** link in the nav opens it in a new browser tab (`/CV.pdf` on the live site).

If your file has a different name, either rename it to `CV.pdf` or change the `href` on the CV nav link in `index.html`.

### Advanced TechBio — workflow screenshots

Upload screenshots to **`public/gallery/techbio/`** using these exact names (`.jpg` or `.png`):

| Filename | Shown as |
|----------|----------|
| `workflow-1.jpg` | Multi-omics analysis pipeline |
| `workflow-2.jpg` | Agentic AI / RAG workflow |
| `workflow-3.jpg` | Local LLM via Ollama — data exploration |

To change captions or add more images, edit the **Workflow snapshots** gallery in `index.html` (search for `gallery/techbio`).

Placeholder `.svg` files display until you upload the matching `.jpg`.

### Advanced TechBio — blog links

Edit the `<ul class="blog-list">` block under **Advanced TechBio** in `index.html`:

- Replace `href="#"` with your blog URL (Medium, Substack, LinkedIn article, etc.)
- Update the link text to your post title
- Add or remove `<li>` items as needed

### Beyond the Terminal — personal photos

Upload photos to **`public/gallery/personal/`**:

| Filename | Shown as |
|----------|----------|
| `badminton.jpg` | Badminton |
| `cricket.jpg` | Cricket |
| `hiking.jpg` | Hiking |
| `social.jpg` | Socializing |

Edit captions or add slots in `index.html` (search for `gallery/personal`).

### Local preview

```bash
npm install
npm run dev
```

Open http://localhost:5173
