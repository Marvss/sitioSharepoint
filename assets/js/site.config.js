/* ============================================================
   INVELA Corp - Configuración del sitio (fuente única)
   Modificar aquí actualiza TODAS las páginas (header/nav/footer).
   ============================================================ */
window.SITE_CONFIG = {
  brand: {
    name: 'INVELA',
    sub: 'Corp',
    portal: 'Portal Corporativo',
    email: 'soporte@invela.com',
    phone: '+507 300-0000',
    year: 2026,
    version: 'v2.0'
  },

  /* --- Navegación principal + submenús (opciones determinadas) --- */
  nav: [
    { id: 'inicio', label: 'Inicio', href: 'index.html', icon: 'home' },

    { id: 'nosotros', label: 'Nosotros', href: 'pages/nosotros.html', icon: 'users', sub: [
      { label: 'Quiénes Somos', href: 'pages/nosotros.html#intro', icon: 'info' },
      { label: 'Misión y Visión', href: 'pages/nosotros.html#mvp', icon: 'target' },
      { label: 'Nuestra Historia', href: 'pages/nosotros.html#historia', icon: 'clock' },
      { label: 'Liderazgo', href: 'pages/nosotros.html#liderazgo', icon: 'users' },
      { label: 'Valores CREHO', href: 'pages/valores.html', icon: 'star' }
    ]},

    { id: 'valores', label: 'Valores', href: 'pages/valores.html', icon: 'star' },

    { id: 'guias', label: 'Guías Rápidas', href: 'pages/guias-rapidas.html', icon: 'book', sub: [
      { label: 'Recursos Humanos', href: 'pages/guias-rapidas.html#rrhh', icon: 'users' },
      { label: 'Tecnología', href: 'pages/guias-rapidas.html#ti', icon: 'monitor' },
      { label: 'Finanzas', href: 'pages/guias-rapidas.html#finanzas', icon: 'file' },
      { label: 'Operaciones', href: 'pages/guias-rapidas.html#operaciones', icon: 'gear' }
    ]},

    { id: 'solicitudes', label: 'Solicitudes', href: 'pages/solicitudes.html', icon: 'file', sub: [
      { label: 'Solicitud General', href: 'pages/solicitudes.html#general', icon: 'edit' },
      { label: 'Vacaciones', href: 'pages/solicitudes.html#tipos', icon: 'calendar' },
      { label: 'Constancia Laboral', href: 'pages/solicitudes.html#tipos', icon: 'file' },
      { label: 'Reembolso de Gastos', href: 'pages/solicitudes.html#tipos', icon: 'file' },
      { label: 'Permiso de Ausencia', href: 'pages/solicitudes.html#tipos', icon: 'clock' },
      { label: 'Mis Solicitudes', href: 'pages/solicitudes.html#seguimiento', icon: 'sort' }
    ]},

    { id: 'directorio', label: 'Directorio', href: 'pages/directorio.html', icon: 'contact', sub: [
      { label: 'Gerencia', href: 'pages/directorio.html#gerencia', icon: 'star' },
      { label: 'Tecnología', href: 'pages/directorio.html#tecnologia', icon: 'monitor' },
      { label: 'Finanzas', href: 'pages/directorio.html#finanzas', icon: 'file' },
      { label: 'Operaciones', href: 'pages/directorio.html#operaciones', icon: 'gear' }
    ]},

    { id: 'documentacion', label: 'Documentación', href: 'pages/documentacion.html', icon: 'folder', sub: [
      { label: 'Políticas (PDF)', href: 'pages/documentacion.html#politicas', icon: 'pdf' },
      { label: 'Procedimientos', href: 'pages/documentacion.html#procedimientos', icon: 'file' },
      { label: 'Formatos y Plantillas', href: 'pages/documentacion.html#formatos', icon: 'edit' },
      { label: 'Manuales', href: 'pages/documentacion.html#manuales', icon: 'book' },
      { label: 'Legal y Cumplimiento', href: 'pages/documentacion.html#legal', icon: 'shield' }
    ]},

    { id: 'soporte', label: 'Soporte TI', href: 'pages/soporte.html', icon: 'help', sub: [
      { label: 'Crear Ticket', href: 'pages/soporte.html#ticket', icon: 'edit' },
      { label: 'Preguntas Frecuentes', href: 'pages/soporte.html#faq', icon: 'help' },
      { label: 'Contacto TI', href: 'pages/soporte.html#contacto', icon: 'phone' }
    ]},

    { id: 'capacitacion', label: 'Capacitación', href: 'pages/capacitacion.html', icon: 'book-open', sub: [
      { label: 'Cursos Destacados', href: 'pages/capacitacion.html#cursos', icon: 'star' },
      { label: 'Calendario', href: 'pages/capacitacion.html#calendario', icon: 'calendar' }
    ]}
  ],

  footer: {
    cols: [
      { h: 'Accesos Rápidos', links: [
        { t: 'Guías Rápidas', href: 'pages/guias-rapidas.html' },
        { t: 'Solicitudes', href: 'pages/solicitudes.html' },
        { t: 'Directorio', href: 'pages/directorio.html' },
        { t: 'Documentación', href: 'pages/documentacion.html' }
      ]},
      { h: 'Recursos', links: [
        { t: 'Soporte TI', href: 'pages/soporte.html' },
        { t: 'Capacitación', href: 'pages/capacitacion.html' },
        { t: 'Valores CREHO', href: 'pages/valores.html' },
        { t: 'Nosotros', href: 'pages/nosotros.html' }
      ]},
      { h: 'Contacto', links: [
        { t: 'soporte@invela.com', href: 'mailto:soporte@invela.com' },
        { t: '+507 300-0000', href: 'tel:+5073000000' },
        { t: 'Intranet', href: '#' }
      ]}
    ]
  }
};

/* ------------------------------------------------------------
   Registro de íconos SVG (línea, 24x24). Uso: ICN('home')
   ------------------------------------------------------------ */
window.ICN = (function () {
  var P = {
    home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
    'book-open': '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',
    contact: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    folder: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',
    help: '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
    bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    'chevron-down': '<polyline points="6 9 12 15 18 9"/>',
    'chevron-right': '<polyline points="9 18 15 12 9 6"/>',
    'arrow-right': '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
    clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    check: '<polyline points="20 6 9 17 4 12"/>',
    filter: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',
    sort: '<line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/>',
    send: '<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    monitor: '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',
    award: '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>',
    info: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
    edit: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"/>',
    pdf: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 15h1.5a1.5 1.5 0 0 0 0-3H9z"/><path d="M14 18v-6"/>',
    grid: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',
    logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>'
  };
  return function (name, size) {
    var s = size || 18;
    var body = P[name] || P.file;
    return '<svg width="' + s + '" height="' + s + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + body + '</svg>';
  };
})();

/* --- Logotipo símbolo (círculo navy con montaña INVELA) --- */
window.LOGO_MARK = function (size) {
  var s = size || 42;
  return '<svg width="' + s + '" height="' + s + '" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<circle cx="50" cy="50" r="50" fill="#142F4C"/>' +
    '<path d="M18 63 C18 63 32 31 50 31 C68 31 82 63 82 63 C82 63 68 53 50 53 C32 53 18 63 18 63Z" fill="#fff"/>' +
    '</svg>';
};
window.LOGO_MARK_LIGHT = function (size) {
  var s = size || 38;
  return '<svg width="' + s + '" height="' + s + '" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<circle cx="50" cy="50" r="50" fill="rgba(255,255,255,.10)"/>' +
    '<path d="M18 63 C18 63 32 31 50 31 C68 31 82 63 82 63 C82 63 68 53 50 53 C32 53 18 63 18 63Z" fill="#fff"/>' +
    '</svg>';
};
