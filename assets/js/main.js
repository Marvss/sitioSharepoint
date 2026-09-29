/* ============================================================
   INVELA Corp - Interacciones (tabs, FAQ, CREHO, scroll reveal)
   ============================================================ */
(function () {

  /* ---------- Tabs ---------- */
  function initTabs(root) {
    (root || document).querySelectorAll('.tabs').forEach(function (group) {
      group.querySelectorAll('.tab').forEach(function (tab) {
        tab.addEventListener('click', function () {
          group.querySelectorAll('.tab').forEach(function (t) { t.classList.remove('is-active'); });
          tab.classList.add('is-active');
          var target = tab.getAttribute('data-tab');
          if (!target) return;
          var scope = group.closest('[data-tabs-scope]') || document;
          scope.querySelectorAll('[data-panel]').forEach(function (p) {
            if (p.closest('[data-tabs-scope]') === (group.closest('[data-tabs-scope]') || null) || scope === document) {
              p.hidden = (p.getAttribute('data-panel') !== target);
            }
          });
        });
      });
    });
  }

  /* ---------- FAQ acordeón ---------- */
  function initFaq(root) {
    (root || document).querySelectorAll('.faq__q').forEach(function (q) {
      q.addEventListener('click', function () { q.parentElement.classList.toggle('is-open'); });
    });
  }

  /* ---------- Scroll reveal (con red de seguridad) ---------- */
  function initReveal(root) {
    var els = (root || document).querySelectorAll('.reveal');
    if (!els.length) return;
    if (!('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('is-in'); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
    }, { threshold: 0, rootMargin: '0px 0px -6% 0px' });
    els.forEach(function (e) {
      // Contenido cerca del pliegue: revelar de inmediato (sin esperar scroll).
      if (e.getBoundingClientRect().top < window.innerHeight * 1.15) { e.classList.add('is-in'); return; }
      io.observe(e);
    });
    // Red de seguridad: si el observer no dispara (scroll programático, etc.), revelar todo.
    setTimeout(function () { els.forEach(function (e) { e.classList.add('is-in'); }); }, 2000);
  }

  /* ---------- CREHO: animación de valores ---------- */
  function initCreho() {
    var stage = document.querySelector('[data-creho]');
    if (!stage) return;
    var units = stage.querySelectorAll('.creho__unit');
    var slides = stage.querySelectorAll('.creho__slide');
    var dots = stage.querySelectorAll('.creho__dot');
    var playBtn = stage.querySelector('.creho__play');
    var n = units.length, i = 0, timer = null, playing = true, DELAY = 3600;

    function show(idx) {
      i = (idx + n) % n;
      units.forEach(function (u, k) { u.classList.toggle('is-active', k === i); });
      slides.forEach(function (s, k) { s.classList.toggle('is-active', k === i); });
      dots.forEach(function (d, k) { d.classList.toggle('is-active', k === i); });
    }
    function next() { show(i + 1); }
    function start() { stop(); if (playing) timer = setInterval(next, DELAY); }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }

    units.forEach(function (u, k) { u.addEventListener('click', function () { show(k); start(); }); });
    dots.forEach(function (d, k) { d.addEventListener('click', function () { show(k); start(); }); });
    if (playBtn) {
      playBtn.addEventListener('click', function () {
        playing = !playing;
        playBtn.innerHTML = playing
          ? '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>'
          : '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4"/></svg>';
        playing ? start() : stop();
      });
    }
    stage.addEventListener('mouseenter', stop);
    stage.addEventListener('mouseleave', function () { if (playing) start(); });

    show(0); start();
  }

  /* ---------- Búsqueda de listas / tarjetas (filtro en vivo) ---------- */
  function initFilter() {
    document.querySelectorAll('[data-filter-input]').forEach(function (input) {
      var scopeSel = input.getAttribute('data-filter-input');
      var scope = document.querySelector(scopeSel);
      if (!scope) return;
      input.addEventListener('input', function () {
        var q = input.value.trim().toLowerCase();
        scope.querySelectorAll('[data-search]').forEach(function (item) {
          var hit = item.getAttribute('data-search').toLowerCase().indexOf(q) !== -1;
          item.style.display = hit ? '' : 'none';
        });
      });
    });
  }

  /* ---------- Formularios demo (evitar submit real) ---------- */
  function initForms() {
    document.querySelectorAll('form[data-demo]').forEach(function (f) {
      f.addEventListener('submit', function (e) {
        e.preventDefault();
        var note = f.querySelector('[data-demo-note]');
        if (note) { note.hidden = false; note.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
      });
    });
  }

  function boot() { initTabs(); initFaq(); initReveal(); initCreho(); initFilter(); initForms(); }

  if (document.readyState !== 'loading') boot();
  else document.addEventListener('DOMContentLoaded', boot);
})();
