import{p as c}from"./projects-data-C6yb4qZp.js";function l(){const e=document.querySelector("#project-list");e&&(e.innerHTML=c.map(t=>`
      <li>
        <a class="project-card" href="/project.html?id=${encodeURIComponent(t.id)}">
          <span class="project-card__media">
            <img
              src="${t.cover}"
              alt=""
              width="640"
              height="400"
              loading="lazy"
            />
            ${t.video?'<span class="project-card__badge">Video</span>':""}
          </span>
          <span class="project-card__body">
            <span class="project-card__title">${t.title}</span>
            <span class="project-card__desc">${t.summary}</span>
            <span class="project-card__tags">
              ${t.tags.map(a=>`<span class="project-card__tag">${a}</span>`).join("")}
            </span>
            <span class="project-card__cta">View project →</span>
          </span>
        </a>
      </li>
    `).join(""))}l();const r=document.querySelector(".nav-toggle"),s=document.querySelector(".nav-menu"),o=document.querySelector("#year");o&&(o.textContent=String(new Date().getFullYear()));r&&s&&(r.addEventListener("click",()=>{const e=s.classList.toggle("is-open");r.setAttribute("aria-expanded",String(e))}),s.querySelectorAll("a").forEach(e=>{e.addEventListener("click",()=>{s.classList.remove("is-open"),r.setAttribute("aria-expanded","false")})}));document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",t=>{const a=e.getAttribute("href");if(!a||a==="#")return;if(a==="#top"){t.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),history.pushState(null,"","#top");return}const n=document.querySelector(a);n&&(t.preventDefault(),n.scrollIntoView({behavior:"smooth",block:"start"}),history.pushState(null,"",a))})});
