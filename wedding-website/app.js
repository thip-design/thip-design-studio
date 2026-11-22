/* Variant 01 "KINETIC GRID" — interaction layer (vanilla JS, no deps) */
(function () {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- mobile nav ---- */
  const navToggle = $(".nav-toggle");
  const nav = $("nav.main");
  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", open);
      navToggle.textContent = open ? "Close" : "Menu";
    });
    nav.addEventListener("click", (e) => {
      if (e.target.tagName === "A") { nav.classList.remove("open"); navToggle.setAttribute("aria-expanded", false); navToggle.textContent = "Menu"; }
    });
  }

  /* ---- grid overlay toggle (press G) ---- */
  const overlay = $("#grid-overlay");
  const gridBtn = $(".grid-btn");
  function toggleGrid() { overlay && overlay.classList.toggle("on"); }
  gridBtn && gridBtn.addEventListener("click", toggleGrid);
  document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === "g" && !/input|textarea|select/i.test(document.activeElement.tagName)) toggleGrid();
  });

  /* ---- kinetic hero words: slide up in stagger ---- */
  const words = $$(".hero h1 .word span");
  if (words.length && !reduce) {
    words.forEach((w, i) => {
      w.style.transform = "translateY(105%) rotate(6deg)";
      w.style.transition = "transform .9s cubic-bezier(.16,1,.3,1)";
      w.style.transitionDelay = 90 * i + "ms";
    });
    requestAnimationFrame(() => requestAnimationFrame(() => words.forEach((w) => (w.style.transform = "none"))));
  }

  /* ---- reveal on scroll ---- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  $$(".reveal").forEach((el, i) => { el.style.transitionDelay = (i % 6) * 40 + "ms"; io.observe(el); });

  /* ---- specimen density switch with FLIP reshuffle ---- */
  const cellsWrap = $(".grid-cells");
  const densBtns = $$(".density button");
  if (cellsWrap) {
    function setDensity(d) {
      const cells = $$(".cell", cellsWrap);
      const first = cells.map((c) => c.getBoundingClientRect());
      cellsWrap.style.setProperty("--dens", d);
      densBtns.forEach((b) => b.setAttribute("aria-pressed", b.dataset.d === String(d)));
      if (reduce) return;
      const last = cells.map((c) => c.getBoundingClientRect());
      cells.forEach((c, i) => {
        const dx = first[i].left - last[i].left, dy = first[i].top - last[i].top;
        if (!dx && !dy) return;
        c.animate(
          [{ transform: `translate(${dx}px, ${dy}px)` }, { transform: "none" }],
          { duration: 520, easing: "cubic-bezier(.16,1,.3,1)", delay: (i % 5) * 25 }
        );
      });
    }
    densBtns.forEach((b) => b.addEventListener("click", () => setDensity(+b.dataset.d)));
  }

  /* ---- card magnetic tilt in configurator ---- */
  const card = $(".card3d");
  const pane = $(".preview-pane");
  if (card && pane && !reduce && matchMedia("(pointer:fine)").matches) {
    pane.addEventListener("pointermove", (e) => {
      const r = pane.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `rotateX(${12 - py * 18}deg) rotateY(${-18 + px * 26}deg) rotateZ(1deg)`;
    });
    pane.addEventListener("pointerleave", () => { card.style.transform = ""; });
  }

  /* ---- configurator logic ---- */
  const cfg = $("[data-config]");
  if (cfg) {
    const state = { stock: "colorplan", finish: "letterpress", edge: "none", qty: 100 };
    const stockPrice = { colorplan: 4500, cotton: 6200, duplex: 7800 };
    const finishAdd = { letterpress: 0, foil: 2600, edgeblind: 1400 };
    const edgeAdd = { none: 0, orange: 1200, black: 1200, gold: 1900 };
    const qtyMult = { 100: 1, 250: 2.1, 500: 3.6 };
    const stockName = { colorplan: "Colorplan 540gsm", cotton: "Cotton 600gsm", duplex: "Duplex 800gsm" };
    const finishName = { letterpress: "Letterpress", foil: "Gold foil", edgeblind: "Blind deboss" };

    function money(n) { return "฿" + n.toLocaleString("en-US"); }
    function render() {
      const base = (stockPrice[state.stock] + finishAdd[state.finish] + edgeAdd[state.edge]);
      const total = Math.round(base * qtyMult[state.qty]);
      $("[data-out=price]").textContent = money(total);
      $("[data-out=qty]").textContent = state.qty + " cards";
      $("[data-out=spec]").textContent = `${stockName[state.stock]} · ${finishName[state.finish]}${state.edge !== "none" ? " · " + state.edge + " edge" : ""}`;
      // visual
      const c = $(".card3d");
      const bg = { colorplan: "#F3F1EC", cotton: "#FBFAF6", duplex: "#111", }[state.stock];
      const fg = state.stock === "duplex" ? "#F3F1EC" : "#1A1815";
      c.style.background = bg; c.style.color = fg;
      c.classList.toggle("foil", state.finish === "foil");
      const edgeEl = $(".card3d .edge");
      const edgeColor = { none: "transparent", orange: "#E2711D", black: "#1A1815", gold: "#c9a24a" }[state.edge];
      edgeEl.style.background = edgeColor;
      c.style.boxShadow = state.stock === "duplex"
        ? "0 40px 60px -30px rgba(0,0,0,.6), 0 6px 12px -8px rgba(0,0,0,.4)"
        : "0 40px 60px -30px rgba(0,0,0,.45), 0 6px 12px -8px rgba(0,0,0,.3)";
    }
    $$("[data-set]", cfg).forEach((btn) => {
      btn.addEventListener("click", () => {
        const [k, v] = btn.dataset.set.split(":");
        state[k] = k === "qty" ? +v : v;
        $$(`[data-set^="${k}:"]`, cfg).forEach((b) => b.setAttribute("aria-pressed", b === btn));
        render();
      });
    });
    render();
  }

  /* ---- enquiry form ---- */
  const form = $("form.enquiry");
  if (form) {
    $$(".choice", form).forEach((ch) => {
      ch.addEventListener("click", () => {
        const multi = ch.dataset.multi !== undefined;
        if (!multi) $$(`.choice[data-group="${ch.dataset.group}"]`, form).forEach((o) => o.setAttribute("aria-pressed", o === ch));
        else ch.setAttribute("aria-pressed", ch.getAttribute("aria-pressed") !== "true");
        syncHidden();
      });
      ch.addEventListener("keydown", (e) => { if (e.key === " " || e.key === "Enter") { e.preventDefault(); ch.click(); } });
    });
    function syncHidden() {
      $$("input[data-mirror]", form).forEach((inp) => {
        const g = inp.dataset.mirror;
        inp.value = $$(`.choice[data-group="${g}"][aria-pressed="true"]`, form).map((c) => c.textContent.trim()).join(", ");
      });
    }
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      syncHidden();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      const data = Object.fromEntries(new FormData(form).entries());
      const wrap = $(".form-wrap");
      wrap.innerHTML = `<div class="success reveal in"><p class="eyebrow">Enquiry received — ref ${"TDS-" + Math.random().toString(36).slice(2, 7).toUpperCase()}</p>
        <h2 class="big-type" style="margin:14px 0 18px">Thank you,<br>${(data.name || "friend").split(" ")[0]}.</h2>
        <p class="prose">We've got your ${data.project || "enquiry"}. Thip or Boss will reply within one working day with next steps and a scoping call time. Meanwhile — press <b>G</b> anywhere to see the grid this whole site is built on.</p>
        <p style="margin-top:24px"><a class="btn" href="/work/">See recent work <span class="arrow">→</span></a></p></div>`;
      wrap.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
    });
  }

  /* ---- year ---- */
  $$("[data-year]").forEach((e) => (e.textContent = new Date().getFullYear()));
})();
