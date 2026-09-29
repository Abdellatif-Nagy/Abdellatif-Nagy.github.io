/* =========================================================
   Portfolio behaviour: shared header/footer, language switch,
   rendering content from data.js, animations and the contact form.
   ========================================================= */
(function () {
  "use strict";

  /* ---------- Icons (inline SVG, no external library) ---------- */
  const s = (p) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  const ICONS = {
    linkedin: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>`,
    github: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57v-2.02c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .3"/></svg>`,
    whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.07-.13-.27-.2-.57-.35M12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88a9.83 9.83 0 0 1 6.99 2.9 9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88m8.41-18.3A11.81 11.81 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.16-3.48-8.41"/></svg>`,
    mail: s('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>'),
    download: s('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>'),
    arrow: s('<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>'),
    external: s('<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>'),
    menu: s('<path d="M3 6h18M3 12h18M3 18h18"/>'),
    close: s('<path d="M18 6 6 18M6 6l12 12"/>'),
    pin: s('<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>'),
    globe: s('<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>'),
    award: s('<circle cx="12" cy="8" r="6"/><path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11"/>'),
    chart: s('<path d="M3 3v18h18"/><rect x="7" y="12" width="3" height="6"/><rect x="12" y="8" width="3" height="10"/><rect x="17" y="5" width="3" height="13"/>'),
    looker: s('<path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>'),
    db: s('<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>'),
    clean: s('<path d="M3 6h18"/><path d="M7 12h10"/><path d="M10 18h4"/>'),
    python: s('<path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/>'),
    bolt: s('<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>'),
    layers: s('<path d="m12 2 10 5-10 5L2 7l10-5z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/>'),
    search: s('<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>'),
  };

  /* ---------- Language ---------- */
  function storedLang() {
    try { return localStorage.getItem("lang"); } catch (e) { return null; }
  }
  let lang = storedLang() || "en";
  if (!I18N[lang]) lang = "en";

  const t = (key) => (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key;
  const L = (obj) => (obj && typeof obj === "object" ? obj[lang] || obj.en : obj || "");
  const esc = (str) => String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function setLang(next) {
    lang = next;
    try { localStorage.setItem("lang", next); } catch (e) { /* storage unavailable: ignore */ }
    render();
  }

  /* Image with automatic fallback to the placeholder (.svg) if the photo isn't uploaded yet */
  function img(src, alt, cls) {
    const fallback = src.replace(/\.(jpe?g|png|webp)$/i, ".svg");
    return `<img src="${esc(src)}" alt="${esc(alt)}" ${cls ? `class="${cls}"` : ""} loading="lazy" onerror="this.onerror=null;this.src='${esc(fallback)}'">`;
  }

  /* ---------- Shared header & footer ---------- */
  const PAGES = [
    ["home", "index.html", "nav.home"],
    ["about", "about.html", "nav.about"],
    ["projects", "projects.html", "nav.projects"],
    ["certs", "certificates.html", "nav.certs"],
    ["freelance", "freelancing.html", "nav.freelance"],
    ["contact", "contact.html", "nav.contact"],
  ];
  const page = document.body.dataset.page;

  function socialLinks() {
    return `
      <a href="${SITE.social.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${ICONS.linkedin}</a>
      <a href="${SITE.social.github}" target="_blank" rel="noopener" aria-label="GitHub">${ICONS.github}</a>
      <a href="${SITE.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp">${ICONS.whatsapp}</a>
      <a href="mailto:${SITE.email}" aria-label="Email">${ICONS.mail}</a>`;
  }

  function renderHeader() {
    const el = document.getElementById("site-header");
    if (!el) return;
    const activeKey = page === "project" ? "projects" : page;
    el.className = "site-header";
    el.innerHTML = `
      <nav class="container nav" aria-label="Main">
        <a class="brand" href="index.html"><span class="brand-mark">AN</span><span>${esc(L(SITE.name))}</span></a>
        <ul class="nav-links" id="nav-links">
          ${PAGES.map(([k, href, key]) => `<li><a href="${href}" class="${k === activeKey ? "active" : ""}" ${k === activeKey ? 'aria-current="page"' : ""}>${t(key)}</a></li>`).join("")}
        </ul>
        <div class="nav-actions">
          <a class="btn btn-primary btn-sm btn-hire" href="contact.html">${t("nav.hire")}</a>
          <button class="lang-btn" id="lang-btn" type="button" aria-label="Switch language">${lang === "en" ? "عربي" : "EN"}</button>
          <button class="menu-btn" id="menu-btn" type="button" aria-label="${t("nav.menu")}" aria-expanded="false" aria-controls="nav-links">${ICONS.menu}</button>
        </div>
      </nav>`;
    document.getElementById("lang-btn").onclick = () => setLang(lang === "en" ? "ar" : "en");
    const menuBtn = document.getElementById("menu-btn");
    const links = document.getElementById("nav-links");
    menuBtn.onclick = () => {
      const open = links.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
      menuBtn.innerHTML = open ? ICONS.close : ICONS.menu;
    };
  }

  function renderFooter() {
    const el = document.getElementById("site-footer");
    if (!el) return;
    el.className = "site-footer";
    el.innerHTML = `
      <div class="container footer-inner">
        <p class="mb-0">© ${new Date().getFullYear()} ${esc(L(SITE.name))}. ${t("footer.rights")}</p>
        <div class="socials">${socialLinks()}</div>
      </div>`;
  }

  /* ---------- Static text translation ---------- */
  function applyI18n() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-i18n]").forEach((el) => { el.innerHTML = t(el.dataset.i18n); });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => { el.placeholder = t(el.dataset.i18nPlaceholder); });
    document.querySelectorAll("[data-name]").forEach((el) => { el.textContent = L(SITE.name); });
    document.querySelectorAll("[data-social]").forEach((el) => { el.innerHTML = socialLinks(); });
    document.querySelectorAll("[data-cv]").forEach((el) => { el.href = SITE.cv; });
    document.querySelectorAll("[data-whatsapp]").forEach((el) => { el.href = SITE.whatsapp; });
    document.querySelectorAll("[data-photo]").forEach((el) => {
      el.innerHTML = img(SITE.photo, L(SITE.name));
    });
  }

  /* ---------- Components ---------- */
  function projectCard(p) {
    const live = p.links && p.links[0];
    return `
      <article class="card project-card reveal" data-cat="${p.category}">
        <a class="thumb" href="project.html?id=${p.id}" aria-label="${esc(L(p.title))}">${img(p.image, L(p.title) + " dashboard")}</a>
        <div class="body">
          <h3><a href="project.html?id=${p.id}">${esc(L(p.title))}</a></h3>
          <div class="sub">${esc(L(p.subtitle))}</div>
          <p>${esc(L(p.summary))}</p>
          <div class="tags">${p.tags.map((x) => `<span class="tag">${esc(x)}</span>`).join("")}</div>
          <div class="actions">
            <a class="btn btn-ghost btn-sm" href="project.html?id=${p.id}">${t("common.details")}</a>
            ${live ? `<a class="btn btn-primary btn-sm" href="${esc(live.url)}" target="_blank" rel="noopener">${t("common.live")} ${ICONS.external}</a>` : ""}
          </div>
        </div>
      </article>`;
  }

  /* ---------- Page renderers ---------- */
  const renderers = {
    home() {
      const grid = document.getElementById("featured");
      if (grid) grid.innerHTML = PROJECTS.filter((p) => p.featured).map(projectCard).join("");
    },

    about() {
      const exp = document.getElementById("experience");
      if (exp) exp.innerHTML = EXPERIENCE.map((e) => `
        <div class="tl-item reveal"><div class="card">
          <div class="tl-head">
            <div><h3>${esc(L(e.role))}</h3><div class="tl-company">${esc(e.company)}</div></div>
            <div class="tl-meta">${esc(L(e.date))}<br>${esc(L(e.place))}</div>
          </div>
          <p>${esc(L(e.desc))}</p>
          <div class="tags mb-0">${e.tags.map((x) => `<span class="tag">${esc(x)}</span>`).join("")}</div>
        </div></div>`).join("");

      const edu = document.getElementById("education");
      if (edu) edu.innerHTML = EDUCATION.map((e) => `
        <div class="card reveal">
          <div class="tl-head"><h3>${esc(L(e.title))}</h3><span class="tl-meta">${esc(e.date)}</span></div>
          <div class="tl-company">${esc(L(e.org))}</div>
          <p class="muted mb-0" style="margin-top:8px">${esc(L(e.desc))}</p>
        </div>`).join("");

      const tools = document.getElementById("tools");
      if (tools) tools.innerHTML = SKILLS.tools.map((x) => `
        <div class="skill"><div class="skill-top"><span>${esc(x.name)}</span><span>${x.level}%</span></div>
        <div class="bar" role="progressbar" aria-label="${esc(x.name)}" aria-valuenow="${x.level}" aria-valuemin="0" aria-valuemax="100"><i data-w="${x.level}"></i></div></div>`).join("");

      const core = document.getElementById("core");
      if (core) core.innerHTML = L(SKILLS.core).map((x) => `<span class="chip">${esc(x)}</span>`).join("");
    },

    projects() {
      const grid = document.getElementById("projects-grid");
      if (!grid) return;
      grid.innerHTML = PROJECTS.map(projectCard).join("");
      const btns = document.querySelectorAll(".filter-btn");
      btns.forEach((b) => {
        b.onclick = () => {
          btns.forEach((x) => { x.classList.remove("active"); x.setAttribute("aria-pressed", "false"); });
          b.classList.add("active"); b.setAttribute("aria-pressed", "true");
          const f = b.dataset.filter;
          grid.querySelectorAll(".project-card").forEach((c) => { c.style.display = f === "all" || c.dataset.cat === f ? "" : "none"; });
        };
      });
      const active = document.querySelector(".filter-btn.active");
      if (active) active.onclick(); // keep the chosen filter after a language switch
    },

    project() {
      const root = document.getElementById("project-root");
      if (!root) return;
      const id = new URLSearchParams(location.search).get("id");
      const i = PROJECTS.findIndex((p) => p.id === id);
      if (i < 0) {
        root.innerHTML = `<section class="page-head container"><h1>${t("pd.notfound")}</h1><a class="btn btn-primary" href="projects.html">${t("pd.back")}</a></section>`;
        return;
      }
      const p = PROJECTS[i];
      const prev = PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length];
      const next = PROJECTS[(i + 1) % PROJECTS.length];
      document.title = `${L(p.title)} | ${L(SITE.name)}`;
      const list = (arr) => `<ul class="check-list">${L(arr).map((x) => `<li>${esc(x)}</li>`).join("")}</ul>`;
      root.innerHTML = `
        <section class="page-head container">
          <div class="breadcrumb"><a href="projects.html">${t("nav.projects")}</a> / ${esc(L(p.title))}</div>
          <h1>${esc(L(p.title))}</h1>
          <p class="section-lead">${esc(L(p.summary))}</p>
        </section>
        <section class="container" style="padding-bottom:40px">
          <div class="detail-hero reveal">${img(p.image, L(p.title) + " dashboard")}</div>
          <div class="detail-grid">
            <div>
              <h2>${t("pd.context")}</h2><p class="muted">${esc(L(p.context))}</p>
              <h2>${t("pd.deliverables")}</h2>${list(p.deliverables)}
              <h2>${t("pd.insights")}</h2>${list(p.insights)}
            </div>
            <aside class="card side-card">
              <h3>${t("pd.tools")}</h3>
              <div class="tags">${p.tags.map((x) => `<span class="tag">${esc(x)}</span>`).join("")}</div>
              <h3 style="margin-top:18px">${t("pd.links")}</h3>
              ${p.links.map((l) => `<a class="btn btn-primary" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(L(l.label))} ${ICONS.external}</a>`).join("")}
              <a class="btn btn-ghost" href="projects.html">${t("pd.back")}</a>
            </aside>
          </div>
          <nav class="proj-nav" aria-label="Project navigation">
            <a href="project.html?id=${prev.id}"><small class="muted">${t("pd.prev")}</small><br><strong>${esc(L(prev.title))}</strong></a>
            <a href="project.html?id=${next.id}" style="text-align:end"><small class="muted">${t("pd.next")}</small><br><strong>${esc(L(next.title))}</strong></a>
          </nav>
        </section>`;
    },

    certs() {
      const grid = document.getElementById("certs-grid");
      if (!grid) return;
      grid.innerHTML = CERTIFICATES.map((c) => `
        <article class="card cert reveal ${c.highlight ? "highlight" : ""}">
          <div class="cert-icon">${ICONS.award}</div>
          <div>
            ${c.highlight ? `<div class="badge-top">★ ${t("certs.featured")}</div>` : ""}
            <h3>${esc(c.title)}</h3>
            <div class="issuer">${esc(c.issuer)}${c.date ? " · " + esc(c.date) : ""}</div>
            ${c.url ? `<a href="${esc(c.url)}" target="_blank" rel="noopener">${t("certs.view")}</a>` : ""}
          </div>
        </article>`).join("");
    },

    freelance() {
      const sv = document.getElementById("services");
      if (sv) sv.innerHTML = SERVICES.map((x) => `
        <article class="card service reveal"><div class="icon">${ICONS[x.icon] || ICONS.chart}</div>
        <h3>${esc(L(x.title))}</h3><p>${esc(L(x.desc))}</p></article>`).join("");

      const platforms = [
        ["Upwork", SITE.social.upwork, "Global clients"],
        ["Mostaql · مستقل", SITE.social.mostaql, "Arab clients"],
        ["Khamsat · خمسات", SITE.social.khamsat, "Micro-services"],
      ];
      const pf = document.getElementById("platforms");
      if (pf) pf.innerHTML = platforms.map(([n, u]) => `
        <div class="card platform reveal"><h3>${esc(n)}</h3>
        <a class="btn btn-ghost btn-sm" href="${u}" target="_blank" rel="noopener">${t("fr.visit")} ${ICONS.external}</a></div>`).join("");

      const rv = document.getElementById("reviews");
      if (rv) {
        if (REVIEWS.length) {
          rv.innerHTML = `<div class="reviews-grid">${REVIEWS.map((r) => `<figure class="reveal">${img(r.image, "Client review from " + r.source)}<figcaption>${esc(r.source)}</figcaption></figure>`).join("")}</div>`;
        } else {
          rv.innerHTML = `<div class="card center"><p class="muted">${t("fr.reviewsEmpty")}</p>
            <div class="btn-row" style="justify-content:center">
              <a class="btn btn-ghost btn-sm" href="${SITE.social.upwork}" target="_blank" rel="noopener">Upwork</a>
              <a class="btn btn-ghost btn-sm" href="${SITE.social.mostaql}" target="_blank" rel="noopener">Mostaql</a>
              <a class="btn btn-ghost btn-sm" href="${SITE.social.khamsat}" target="_blank" rel="noopener">Khamsat</a>
            </div></div>`;
        }
      }
    },

    contact() {
      const ci = document.getElementById("contact-items");
      if (ci) {
        const items = [
          ["mail", "ct.email", SITE.email, "mailto:" + SITE.email],
          ["whatsapp", "ct.whatsapp", "+20 112 261 2595", SITE.whatsapp],
          ["linkedin", "ct.linkedin", "abdellatif-nagy", SITE.social.linkedin],
          ["github", "ct.github", "Abdellatif-Nagy", SITE.social.github],
        ];
        ci.innerHTML = items.map(([ic, k, v, href]) => `
          <a class="contact-item" href="${href}" ${href.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>
            <span class="ci-icon">${ICONS[ic]}</span><div><small>${t(k)}</small><span dir="ltr">${esc(v)}</span></div>
          </a>`).join("");
      }
      setupForm();
    },
  };

  /* ---------- Contact form (Formspree) ---------- */
  function setupForm() {
    const form = document.getElementById("contact-form");
    if (!form || form.dataset.bound) return;
    form.dataset.bound = "1";
    const params = new URLSearchParams(location.search);
    if (params.get("type") && form.type) form.type.value = params.get("type");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const status = document.getElementById("form-status");
      const btn = form.querySelector("button[type=submit]");
      status.className = "form-status";

      if (!SITE.formspreeId || SITE.formspreeId === "YOUR_FORM_ID") {
        status.textContent = t("form.notset");
        const body = `${form.message.value}\n\n— ${form.name.value} (${form.email.value})`;
        location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Portfolio: " + form.type.options[form.type.selectedIndex].text)}&body=${encodeURIComponent(body)}`;
        return;
      }
      btn.disabled = true; btn.textContent = t("form.sending");
      try {
        const res = await fetch(`https://formspree.io/f/${SITE.formspreeId}`, {
          method: "POST", body: new FormData(form), headers: { Accept: "application/json" },
        });
        if (!res.ok) throw new Error(res.status);
        form.reset();
        status.textContent = t("form.ok"); status.classList.add("ok");
      } catch (err) {
        status.textContent = t("form.err"); status.classList.add("err");
      } finally {
        btn.disabled = false; btn.textContent = t("form.send");
      }
    });
  }

  /* ---------- Animations ---------- */
  function animateCounters() {
    document.querySelectorAll("[data-count]").forEach((el) => {
      if (el.dataset.done) return;
      const target = +el.dataset.count;
      const suffix = el.dataset.suffix || "";
      const io = new IntersectionObserver((entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect(); el.dataset.done = "1";
        const t0 = performance.now(), dur = 1400;
        const step = (now) => {
          const k = Math.min(1, (now - t0) / dur);
          el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3))) + suffix;
          if (k < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
      io.observe(el);
    });
  }

  function revealOnScroll() {
    const els = document.querySelectorAll(".reveal:not(.in)");
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add("in");
        en.target.querySelectorAll(".bar > i").forEach((b) => { b.style.width = b.dataset.w + "%"; });
        io.unobserve(en.target);
      });
    }, { threshold: 0.12 });
    els.forEach((e) => io.observe(e));
  }

  /* ---------- Render everything ---------- */
  function render() {
    renderHeader();
    renderFooter();
    applyI18n();
    if (renderers[page]) renderers[page]();
    revealOnScroll();
    animateCounters();
  }

  render();
})();
