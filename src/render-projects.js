import { projects } from './projects-data.js';

function renderProjectCards() {
  const list = document.querySelector('#project-list');
  if (!list) return;

  list.innerHTML = projects
    .map(
      (project) => `
      <li>
        <a class="project-card" href="/project.html?id=${encodeURIComponent(project.id)}">
          <span class="project-card__media">
            <img
              src="${project.cover}"
              alt=""
              width="640"
              height="400"
              loading="lazy"
            />
            ${project.video ? '<span class="project-card__badge">Video</span>' : ''}
          </span>
          <span class="project-card__body">
            <span class="project-card__title">${project.title}</span>
            <span class="project-card__desc">${project.summary}</span>
            <span class="project-card__tags">
              ${project.tags.map((tag) => `<span class="project-card__tag">${tag}</span>`).join('')}
            </span>
            <span class="project-card__cta">View project →</span>
          </span>
        </a>
      </li>
    `
    )
    .join('');
}

renderProjectCards();
