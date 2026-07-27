import { getProjectById, projects } from './projects-data.js';

const params = new URLSearchParams(window.location.search);
const projectId = params.get('id');
const project = projectId ? getProjectById(projectId) : null;
const root = document.querySelector('#project-root');
const titleEl = document.querySelector('#project-doc-title');

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function normalizeSnapshot(item, index, title) {
  if (typeof item === 'string') {
    return {
      src: item,
      caption: `${title} snapshot ${index + 1}`,
      alt: `${title} snapshot ${index + 1}`,
    };
  }
  return {
    src: item.src,
    caption: item.caption || `${title} snapshot ${index + 1}`,
    alt: item.alt || item.caption || `${title} snapshot ${index + 1}`,
  };
}

function renderNotFound() {
  if (titleEl) titleEl.textContent = 'Project not found | Sharath B S';
  root.innerHTML = `
    <section class="section">
      <div class="container narrow">
        <p class="eyebrow">Projects</p>
        <h1>Project not found</h1>
        <p class="section-lead">That project link is missing or outdated.</p>
        <p><a class="btn btn-primary" href="/#projects">Back to projects</a></p>
        <ul class="project-list" style="margin-top:2rem">
          ${projects
            .map(
              (item) => `
            <li>
              <a class="project-card" href="/project.html?id=${encodeURIComponent(item.id)}">
                <span class="project-card__title">${escapeHtml(item.title)}</span>
                <span class="project-card__desc">${escapeHtml(item.summary)}</span>
              </a>
            </li>`
            )
            .join('')}
        </ul>
      </div>
    </section>
  `;
}

function renderProject(item) {
  if (titleEl) titleEl.textContent = `${item.title} | Sharath B S`;

  const snapshots = (item.snapshots || []).map((snap, index) =>
    normalizeSnapshot(snap, index, item.title)
  );

  const gallery = snapshots
    .map(
      (snap) => `
      <figure class="project-gallery__item">
        <a href="${escapeHtml(snap.src)}" target="_blank" rel="noopener noreferrer">
          <img
            src="${escapeHtml(snap.src)}"
            alt="${escapeHtml(snap.alt)}"
            loading="lazy"
            width="640"
            height="400"
          />
        </a>
        <figcaption>${escapeHtml(snap.caption)}</figcaption>
      </figure>`
    )
    .join('');

  const details = item.details || {};
  const highlights = (details.highlights || [])
    .map((line) => `<li>${escapeHtml(line)}</li>`)
    .join('');

  const tools = (details.tools || [])
    .map((tool) => `<li class="chip">${escapeHtml(tool)}</li>`)
    .join('');

  const links = (item.links || [])
    .map(
      (link) => `
      <a class="btn btn-primary" href="${escapeHtml(link.href)}" target="_blank" rel="noopener noreferrer">
        ${escapeHtml(link.label)}
      </a>`
    )
    .join('');

  const videoBlock = item.video
    ? `
      <div class="project-media-block">
        <h2 class="section-title">Recorded video</h2>
        <div class="project-video">
          <video controls playsinline preload="metadata" poster="${escapeHtml(item.cover)}">
            <source src="${escapeHtml(item.video)}" type="video/mp4" />
            Your browser does not support embedded video.
          </video>
        </div>
      </div>`
    : '';

  const snapshotsBlock = gallery
    ? `
      <div class="project-media-block">
        <h2 class="section-title">${item.video ? 'Snapshots' : 'Images &amp; snapshots'}</h2>
        <p class="section-lead">Click a snapshot to open the full image.</p>
        <div class="project-gallery">${gallery}</div>
      </div>`
    : '';

  root.innerHTML = `
    <section class="project-hero">
      <div class="container">
        <p class="eyebrow"><a class="crumb" href="/#projects">← Projects</a></p>
        <h1>${escapeHtml(item.title)}</h1>
        <p class="hero-role">${escapeHtml(item.summary)}</p>
      </div>
    </section>

    <section class="section">
      <div class="container project-layout">
        <div class="project-main">
          ${videoBlock || ''}
          ${
            !item.video
              ? `<div class="project-hero__media project-hero__media--inline">
                   <img src="${escapeHtml(item.cover)}" alt="${escapeHtml(item.title)} cover" width="1200" height="750" />
                 </div>`
              : ''
          }

          ${snapshotsBlock}

          <h2 class="section-title" style="margin-top:2rem">Overview</h2>
          <div class="prose">
            ${item.description.map((p) => `<p>${escapeHtml(p)}</p>`).join('')}
          </div>
        </div>

        <aside class="project-aside">
          <div class="protein-panel">
            <h2>Project details</h2>
            <dl class="protein-meta">
              <div><dt>Target</dt><dd>${escapeHtml(details.target || '—')}</dd></div>
              <div><dt>Method</dt><dd>${escapeHtml(details.method || '—')}</dd></div>
            </dl>

            ${
              highlights
                ? `<h3>Key findings</h3><ul class="protein-highlights">${highlights}</ul>`
                : ''
            }

            ${tools ? `<h3>Tools</h3><ul class="chip-list">${tools}</ul>` : ''}

            ${links ? `<div class="project-aside__actions">${links}</div>` : ''}

            <p class="viewer-note" style="margin-top:1.25rem">
              Replace the placeholder video and snapshots in
              <code>public/projects/${escapeHtml(item.id)}/</code>
              with your recorded media.
            </p>
          </div>
        </aside>
      </div>
    </section>
  `;
}

if (!project) {
  renderNotFound();
} else {
  renderProject(project);
}
