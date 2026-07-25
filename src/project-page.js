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

  const gallery = (item.gallery || [])
    .map(
      (src, index) => `
      <figure class="project-gallery__item">
        <img src="${escapeHtml(src)}" alt="${escapeHtml(item.title)} figure ${index + 1}" loading="lazy" width="640" height="400" />
      </figure>`
    )
    .join('');

  const highlights = (item.protein.highlights || [])
    .map((line) => `<li>${escapeHtml(line)}</li>`)
    .join('');

  const tools = (item.protein.tools || [])
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
      <div class="project-video">
        <video controls playsinline preload="metadata" poster="${escapeHtml(item.cover)}">
          <source src="${escapeHtml(item.video)}" type="video/mp4" />
          Your browser does not support embedded video.
        </video>
      </div>`
    : '';

  root.innerHTML = `
    <section class="project-hero">
      <div class="container">
        <p class="eyebrow"><a class="crumb" href="/#projects">← Projects</a></p>
        <h1>${escapeHtml(item.title)}</h1>
        <p class="hero-role">${escapeHtml(item.summary)}</p>
        <div class="project-hero__media">
          <img src="${escapeHtml(item.cover)}" alt="" width="1200" height="750" />
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container project-layout">
        <div class="project-main">
          <h2 class="section-title">Overview</h2>
          <div class="prose">
            ${item.description.map((p) => `<p>${escapeHtml(p)}</p>`).join('')}
          </div>

          ${videoBlock}

          ${
            gallery
              ? `<h2 class="section-title" style="margin-top:2rem">Figures</h2>
                 <div class="project-gallery">${gallery}</div>`
              : ''
          }

          <h2 class="section-title" style="margin-top:2rem">Protein structure</h2>
          <p class="section-lead">
            Interactive view of <strong>${escapeHtml(item.protein.name)}</strong>
            ${item.protein.pdbId ? `(PDB <code>${escapeHtml(item.protein.pdbId)}</code>)` : ''}.
            Drag to rotate · scroll to zoom.
          </p>
          <div id="protein-viewer" class="protein-viewer" aria-label="Interactive protein structure viewer"></div>
          <p class="viewer-note">Structure loaded from the Protein Data Bank via 3Dmol.js.</p>
        </div>

        <aside class="project-aside">
          <div class="protein-panel">
            <h2>Protein details</h2>
            <dl class="protein-meta">
              <div><dt>Name</dt><dd>${escapeHtml(item.protein.name)}</dd></div>
              <div><dt>PDB ID</dt><dd>${
                item.protein.pdbId
                  ? `<a href="https://www.rcsb.org/structure/${escapeHtml(item.protein.pdbId)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.protein.pdbId)}</a>`
                  : '—'
              }</dd></div>
              <div><dt>Organism</dt><dd>${escapeHtml(item.protein.organism || '—')}</dd></div>
              <div><dt>Method</dt><dd>${escapeHtml(item.protein.method || '—')}</dd></div>
              <div><dt>Resolution / source</dt><dd>${escapeHtml(item.protein.resolution || '—')}</dd></div>
              <div><dt>Binding site</dt><dd>${escapeHtml(item.protein.bindingSite || '—')}</dd></div>
            </dl>

            <h3>Key findings</h3>
            <ul class="protein-highlights">${highlights}</ul>

            <h3>Tools</h3>
            <ul class="chip-list">${tools}</ul>

            ${links ? `<div class="project-aside__actions">${links}</div>` : ''}
          </div>
        </aside>
      </div>
    </section>
  `;
}

function initProteinViewer(pdbId) {
  const element = document.querySelector('#protein-viewer');
  if (!element || !pdbId) return;

  const start = async () => {
    if (typeof window.$3Dmol === 'undefined') {
      element.innerHTML =
        '<p class="section-lead" style="padding:1.25rem">3D viewer library failed to load. You can still open the structure on <a href="https://www.rcsb.org/structure/' +
        encodeURIComponent(pdbId) +
        '" target="_blank" rel="noopener noreferrer">RCSB PDB</a>.</p>';
      return;
    }

    const viewer = window.$3Dmol.createViewer(element, {
      backgroundColor: '0x0b1620',
    });

    try {
      const response = await fetch(
        `https://files.rcsb.org/download/${encodeURIComponent(pdbId)}.pdb`
      );
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const pdbText = await response.text();
      viewer.addModel(pdbText, 'pdb');
      viewer.setStyle({}, { cartoon: { color: 'spectrum' } });
      viewer.zoomTo();
      viewer.render();
    } catch (error) {
      console.error(error);
      element.innerHTML =
        '<p class="section-lead" style="padding:1.25rem">Could not load PDB <code>' +
        pdbId +
        '</code>. Open it on <a href="https://www.rcsb.org/structure/' +
        encodeURIComponent(pdbId) +
        '" target="_blank" rel="noopener noreferrer">RCSB PDB</a>.</p>';
    }
  };

  if (typeof window.$3Dmol !== 'undefined') {
    start();
    return;
  }

  let attempts = 0;
  const timer = setInterval(() => {
    attempts += 1;
    if (typeof window.$3Dmol !== 'undefined' || attempts > 40) {
      clearInterval(timer);
      start();
    }
  }, 100);
}

if (!project) {
  renderNotFound();
} else {
  renderProject(project);
  initProteinViewer(project.protein?.pdbId);
}
