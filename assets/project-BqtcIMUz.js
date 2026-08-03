import{g as S,p as _}from"./projects-data-C6yb4qZp.js";const w=new URLSearchParams(window.location.search),v=w.get("id"),u=v?S(v):null,g=document.querySelector("#project-root"),i=document.querySelector("#project-doc-title");function t(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function B(e,c,o){return typeof e=="string"?{src:e,caption:`${o} snapshot ${c+1}`,alt:`${o} snapshot ${c+1}`}:{src:e.src,caption:e.caption||`${o} snapshot ${c+1}`,alt:e.alt||e.caption||`${o} snapshot ${c+1}`}}function P(){i&&(i.textContent="Project not found | Sharath B S"),g.innerHTML=`
    <section class="section">
      <div class="container narrow">
        <p class="eyebrow">Projects</p>
        <h1>Project not found</h1>
        <p class="section-lead">That project link is missing or outdated.</p>
        <p><a class="btn btn-primary" href="/#projects">Back to projects</a></p>
        <ul class="project-list" style="margin-top:2rem">
          ${_.map(e=>`
            <li>
              <a class="project-card" href="/project.html?id=${encodeURIComponent(e.id)}">
                <span class="project-card__title">${t(e.title)}</span>
                <span class="project-card__desc">${t(e.summary)}</span>
              </a>
            </li>`).join("")}
        </ul>
      </div>
    </section>
  `}function q(e){i&&(i.textContent=`${e.title} | Sharath B S`);const o=(e.snapshots||[]).map((s,k)=>B(s,k,e.title)).filter(s=>!(e.cover&&s.src===e.cover&&!e.video)).map(s=>`
      <figure class="project-gallery__item">
        <a href="${t(s.src)}" target="_blank" rel="noopener noreferrer">
          <img
            src="${t(s.src)}"
            alt="${t(s.alt)}"
            loading="lazy"
            width="640"
            height="400"
          />
        </a>
        <figcaption>${t(s.caption)}</figcaption>
      </figure>`).join(""),a=e.details||{},n=(a.highlights||[]).map(s=>`<li>${t(s)}</li>`).join(""),p=(a.tools||[]).map(s=>`<li class="chip">${t(s)}</li>`).join(""),d=(e.features||[]).map(s=>`<li>${t(s)}</li>`).join(""),h=(e.links||[]).map(s=>`
      <a class="btn btn-primary" href="${t(s.href)}" ${s.href.startsWith("mailto:")?"":'target="_blank" rel="noopener noreferrer"'}>
        ${t(s.label)}
      </a>`).join(""),j=e.video?`
      <div class="project-media-block">
        <h2 class="section-title">Recorded video</h2>
        <div class="project-video">
          <video controls playsinline preload="metadata" poster="${t(e.cover)}">
            <source src="${t(e.video)}" type="video/mp4" />
            Your browser does not support embedded video.
          </video>
        </div>
      </div>`:"",f=e.video?"":`
      <div class="project-media-block">
        <h2 class="section-title">Homepage</h2>
        <div class="project-hero__media project-hero__media--inline">
          <img
            src="${t(e.cover)}"
            alt="${t(e.title)} homepage screenshot"
            width="1200"
            height="750"
          />
        </div>
      </div>`,m=o?`
      <div class="project-media-block">
        <h2 class="section-title">Snapshots</h2>
        <p class="section-lead">Click a snapshot to open the full image.</p>
        <div class="project-gallery">${o}</div>
      </div>`:"",y=d?`
      <h2 class="section-title" style="margin-top:2rem">Key features</h2>
      <ul class="feature-list">${d}</ul>`:"",b=e.note?`<p class="project-note">${t(e.note)}</p>`:"";g.innerHTML=`
    <section class="project-hero">
      <div class="container">
        <p class="eyebrow"><a class="crumb" href="/#projects">← Projects</a></p>
        <h1>${t(e.title)}</h1>
        <p class="hero-role">${t(e.summary)}</p>
      </div>
    </section>

    <section class="section">
      <div class="container project-layout">
        <div class="project-main">
          ${j}
          ${f}
          ${m}

          <h2 class="section-title" style="margin-top:2rem">Overview</h2>
          <div class="prose">
            ${e.description.map(s=>`<p>${t(s)}</p>`).join("")}
          </div>

          ${y}
          ${b}
        </div>

        <aside class="project-aside">
          <div class="protein-panel">
            <h2>Project details</h2>
            <dl class="protein-meta">
              <div><dt>Focus</dt><dd>${t(a.target||"—")}</dd></div>
              <div><dt>Workflow</dt><dd>${t(a.method||"—")}</dd></div>
            </dl>

            ${n?`<h3>Highlights</h3><ul class="protein-highlights">${n}</ul>`:""}

            ${p?`<h3>Capabilities</h3><ul class="chip-list">${p}</ul>`:""}

            ${h?`<div class="project-aside__actions">${h}</div>`:""}
          </div>
        </aside>
      </div>
    </section>
  `}u?q(u):P();const r=document.querySelector(".nav-toggle"),l=document.querySelector(".nav-menu"),$=document.querySelector("#year");$&&($.textContent=String(new Date().getFullYear()));r&&l&&(r.addEventListener("click",()=>{const e=l.classList.toggle("is-open");r.setAttribute("aria-expanded",String(e))}),l.querySelectorAll("a").forEach(e=>{e.addEventListener("click",()=>{l.classList.remove("is-open"),r.setAttribute("aria-expanded","false")})}));
