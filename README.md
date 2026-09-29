# Portal Corporativo INVELA Corp

Propuesta de intranet corporativa para INVELA Corp, construida como **sitio estático modular**
inspirado en la plantilla de comunicación de SharePoint/ShortPoint y alineada al
**Manual de Marca INVELA Corp 2027**.

> Objetivo: presentar a gerencia una propuesta navegable y completa de cómo podría
> quedar el portal antes de implementarlo en SharePoint.

---

## 1. Arquitectura modular

El sitio está diseñado para ser **completamente modular**: el encabezado, la navegación
(con submenús), el pie de página y el sistema visual se definen **una sola vez** y se
reutilizan en todas las páginas.

```
sitio_sharepoint/
├── index.html                 ← Inicio
├── pages/                     ← Una página por sección
│   ├── nosotros.html
│   ├── valores.html           ← CREHO (animación fiel al PPT)
│   ├── guias-rapidas.html
│   ├── solicitudes.html
│   ├── directorio.html
│   ├── documentacion.html
│   ├── soporte.html
│   └── capacitacion.html
├── assets/
│   ├── css/
│   │   ├── tokens.css         ← Design tokens (colores, tipografía, espaciado)
│   │   ├── base.css           ← Reset + tipografía base + fuentes
│   │   ├── layout.css         ← Topbar, header, nav, hero, secciones, footer
│   │   ├── components.css     ← Cards, listas, badges, tabs, formularios, tablas…
│   │   └── valores.css        ← Estilos específicos de la animación CREHO
│   ├── js/
│   │   ├── site.config.js     ← ⭐ Fuente única: navegación, submenús, footer, íconos
│   │   ├── components.js       ← Inyecta topbar/header/nav/footer desde la config
│   │   └── main.js            ← Interacciones (tabs, FAQ, CREHO, reveal, filtros)
│   └── img/
│       ├── invela-corp-logo.png
│       └── valores/           ← Íconos reales extraídos del PPT ADN INVELA
│           ├── calidad.png    respeto.png    excelencia.png
│           └── honestidad.png optimismo.svg
└── data/
    └── politicas/             ← Aquí van los PDF de políticas (ver §5)
```

### ¿Cómo funciona la modularidad?

Cada página HTML solo contiene **su contenido propio** más cuatro puntos de montaje:

```html
<div id="app-topbar"></div>
<div id="app-header"></div>
<div id="app-nav"></div>
<main> … contenido único de la página … </main>
<div id="app-footer"></div>

<script>window.PAGE = { active: 'valores', base: '../' };</script>
<script src="../assets/js/site.config.js"></script>
<script src="../assets/js/components.js"></script>
<script src="../assets/js/main.js"></script>
```

- `site.config.js` es la **única fuente** de la estructura del sitio. Cambiar un ítem de
  menú, un submenú o un enlace del footer se refleja automáticamente en **todas** las páginas.
- `components.js` lee esa config y `window.PAGE` (qué página está activa y su ruta base)
  y genera el encabezado, la navegación con submenús y el pie de página.

---

## 2. Sistema de marca (Manual INVELA 2027)

| Elemento | Valor |
|---|---|
| Azul del espacio (primario) | `#142F4C` — RGB 20,47,76 |
| Azul secundario | `#01456A` — RGB 1,69,106 |
| Blanco | `#FFFFFF` |
| Títulos | Fuente geométrica extendida (Condor Exd Bold) → *Archivo Expanded* como equivalente libre |
| Texto secundario | **Montserrat** |
| Sección Valores (CREHO) | **DM Sans** (igual que el PPT ADN INVELA) |

Todos los valores viven en `assets/css/tokens.css`. Para reemplazar la fuente de títulos por
la licencia real de **Condor Extended**, basta cambiar `--font-title` en ese archivo.

---

## 3. Secciones y submenús

Cada botón del menú tiene submenús definidos en `site.config.js`:

- **Nosotros** → Quiénes Somos · Misión y Visión · Historia · Liderazgo · Valores
- **Guías Rápidas** → RRHH · Tecnología · Finanzas · Operaciones *(en formato lista)*
- **Solicitudes** → Solicitud General · Vacaciones · Constancia · Reembolso · Permisos · Mis Solicitudes
- **Directorio** → Gerencia · Tecnología · Finanzas · Operaciones
- **Documentación** → Políticas (PDF) · Procedimientos · Formatos · Manuales · Legal
- **Soporte TI** → Crear Ticket · FAQ · Contacto
- **Capacitación** → Cursos · Calendario

---

## 4. Sección Valores — CREHO

Recreación fiel de la animación del PPT *ADN INVELA (valores)*: fondo azul marino,
tipografía **DM Sans**, los íconos planos originales y las letras **C-R-E-H-O** que se
expanden a cada valor (auto-reproducción, con pausa y navegación por puntos).

- **C**alidad · **R**espeto · **E**xcelencia · **H**onestidad · **O**ptimismo

---

## 5. Políticas en PDF

Las políticas se muestran como archivos **PDF** en `documentacion.html`. Para conectarlas:

1. Copia los PDF a `data/politicas/`.
2. En `pages/documentacion.html`, cambia el `href="#"` de cada política por la ruta real,
   p. ej. `href="../data/politicas/codigo-de-conducta.pdf"`.

En SharePoint, lo habitual es subir los PDF a una **biblioteca de documentos** y apuntar los
enlaces a esa biblioteca.

---

## 6. Cómo previsualizar

Al ser un sitio estático, cualquier servidor web local sirve. Por ejemplo:

```bash
npx http-server . -p 8080 -c-1
```

Luego abre `http://localhost:8080`.

---

## 7. Llevarlo a SharePoint

Tres caminos, según el nivel de integración deseado:

1. **Rápido (biblioteca + Embed):** subir la carpeta a una biblioteca de documentos y usar
   el elemento web *Insertar/Embed* o *Visor de archivos* para mostrar las páginas. Ideal
   para validar la propuesta con gerencia.
2. **Páginas modernas:** recrear cada sección con elementos web nativos de SharePoint usando
   este sitio como referencia visual y de contenido.
3. **SPFx (a medida):** convertir los componentes (`components.js` + secciones) en *web parts*
   de SharePoint Framework para una intranet totalmente integrada. La estructura modular ya
   está pensada para este paso: la config, los tokens y los componentes se trasladan casi 1:1.

---

*Propuesta interna · INVELA Corp · 2026*
