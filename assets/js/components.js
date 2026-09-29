/* ============================================================
   INVELA Corp - Renderizador de componentes compartidos
   Lee window.PAGE = { active, base } e inyecta topbar/header/nav/footer.
   Definidos UNA sola vez → arquitectura modular.
   ============================================================ */
(function () {
  var CFG = window.SITE_CONFIG;
  var PAGE = window.PAGE || { active: 'inicio', base: '' };
  var BASE = PAGE.base || '';
  var ICN = window.ICN;

  function href(h) {
    if (!h || h === '#' || /^(https?:|mailto:|tel:)/.test(h)) return h;
    return BASE + h;
  }

  /* ---------- Topbar SharePoint ---------- */
  function topbar() {
    return '' +
      '<div class="spbar">' +
        '<div class="spbar__left">' +
          '<div class="spbar__waffle" title="Aplicaciones">' + Array(9).join('<span></span>') + '<span></span></div>' +
          '<a class="spbar__brand" href="' + href('index.html') + '">SharePoint</a>' +
        '</div>' +
        '<div class="spbar__search">' + ICN('search', 16) +
          '<input type="text" placeholder="Buscar en INVELA">' +
        '</div>' +
        '<div class="spbar__right">' +
          '<div class="spbar__ico" title="Notificaciones">' + ICN('bell', 18) + '</div>' +
          '<div class="spbar__ico" title="Configuración">' + ICN('gear', 18) + '</div>' +
          '<div class="spbar__avatar" title="Mi perfil">OM</div>' +
        '</div>' +
      '</div>';
  }

  /* ---------- Header de sitio ---------- */
  function header() {
    return '' +
      '<div class="site-head"><div class="wrap site-head__in">' +
        '<a class="brand" href="' + href('index.html') + '">' +
          '<span class="brand__mark">' + window.LOGO_MARK(42) + '</span>' +
          '<span><span class="brand__name">' + CFG.brand.name + '</span><br>' +
          '<span class="brand__sub">' + CFG.brand.sub + '</span></span>' +
        '</a>' +
        '<div class="site-head__meta">' +
          '<a href="' + href('index.html') + '">' + ICN('home', 15) + ' Portal</a>' +
          '<a href="' + href('pages/documentacion.html') + '">' + ICN('folder', 15) + ' Documentos</a>' +
          '<a href="' + href('pages/soporte.html') + '">' + ICN('help', 15) + ' Ayuda</a>' +
        '</div>' +
      '</div></div>';
  }

  /* ---------- Navegación con submenús ---------- */
  function nav() {
    var items = CFG.nav.map(function (it) {
      var active = it.id === PAGE.active ? ' navitem--active' : '';
      var caret = it.sub ? '<span class="navitem__caret">' + ICN('chevron-down', 13) + '</span>' : '';
      var link = '<a class="navitem__link" href="' + href(it.href) + '">' + ICN(it.icon, 16) + '<span>' + it.label + '</span>' + caret + '</a>';
      var sub = '';
      if (it.sub) {
        sub = '<div class="submenu">' + it.sub.map(function (s) {
          return '<a class="submenu__link" href="' + href(s.href) + '"><span class="dot"></span>' + s.label + '</a>';
        }).join('') + '</div>';
      }
      return '<div class="navitem' + active + '">' + link + sub + '</div>';
    }).join('');
    return '<nav class="mainnav"><div class="wrap mainnav__in">' + items + '</div></nav>';
  }

  /* ---------- Footer ---------- */
  function footer() {
    var cols = CFG.footer.cols.map(function (c) {
      var links = c.links.map(function (l) {
        return '<li><a href="' + href(l.href) + '">' + l.t + '</a></li>';
      }).join('');
      return '<div><div class="foot__h">' + c.h + '</div><ul class="foot__links">' + links + '</ul></div>';
    }).join('');
    return '' +
      '<footer class="foot"><div class="foot__in">' +
        '<div>' +
          '<div class="foot__brand">' + window.LOGO_MARK_LIGHT(38) + '<b>' + CFG.brand.name + ' ' + CFG.brand.sub + '</b></div>' +
          '<p class="foot__text">Portal corporativo de ' + CFG.brand.name + ' ' + CFG.brand.sub + '. Tu espacio centralizado para información, recursos y herramientas de trabajo.</p>' +
        '</div>' + cols +
      '</div>' +
      '<div class="wrap foot__bottom">' +
        '<span>&copy; ' + CFG.brand.year + ' ' + CFG.brand.name + ' ' + CFG.brand.sub + '. Todos los derechos reservados.</span>' +
        '<span>' + CFG.brand.portal + ' ' + CFG.brand.version + '</span>' +
      '</div></footer>';
  }

  function mount(id, html) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  document.addEventListener('DOMContentLoaded', function () {
    mount('app-topbar', topbar());
    mount('app-header', header());
    mount('app-nav', nav());
    mount('app-footer', footer());
    document.dispatchEvent(new CustomEvent('layout:ready'));
  });
})();
