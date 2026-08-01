# Estado actual de cumplimiento — Guía webs corporativas vs JVG

> **Fecha de re-análisis:** 2026-08-01  
> **Método:** auditoría estática del código en `frontend/` contrastada ítem a ítem con los 6 documentos de `~/Desktop/guia-webs-corporativas/` + contraste WCAG calculado sobre tokens actuales.  
> **No incluye:** PageSpeed/CrUX de producción, axe/VoiceOver en navegador (hay checklist operativo pendiente de ejecución en staging).

---

## Veredicto

La web **cumple de forma sólida** los checklists de la guía en código. Respecto al análisis previo a la remediación (~65 %), el estado actual ronda **~90–93 %**.

Lo que queda fuera del código es casi todo **operativo de despliegue**: dominio real, Search Console, medición de campo CWV y pasar el checklist manual de a11y.

| Dimensión | Score | Estado |
|---|---:|---|
| Landing pages | 94 % | ✅ Cumple |
| SEO on-page | 88 % | ✅ Cumple (matiz titles largos por template) |
| UX Nielsen | 95 % | ✅ Cumple |
| Redacción / contenido | 92 % | ✅ Cumple |
| Core Web Vitals | 82 % | ✅ Listo en código · ⚠️ campo pendiente |
| Accesibilidad WCAG AA | 90 % | ✅ Cumple en código · ⚠️ auditoría manual pendiente |
| **TOTAL orientativo** | **~91 %** | |

---

## 1. Landing pages

Fuente: `landing-pages/caracteristicas-landing-page-efectiva.md`

| # | Criterio guía | Estado | Evidencia actual |
|---|---|---|---|
| 1 | Único objetivo | ✅ | CTA primario «Solicitar asesoría» → `/contacto#formulario`. Secundario `ghost` «Ver servicios» (menor peso visual). |
| 2 | Título fuerte | ✅ | H1: *Su camino migratorio, con respaldo jurídico y calidez humana*. |
| 3 | CTA above the fold | ✅ | Hero `min-h-dvh` + botón primario visible sin scroll. |
| 4 | Propuesta de valor | ✅ | Subtítulo con **México**, gestión documental y homologación. |
| 5 | Diseño limpio → CTA | ✅ | Paleta beige/ink/gold; CTA ink de alto contraste; home ordenada. |
| 6 | Imagen representativa | ✅ | `hero-avion.webp` full-bleed, `priority`, alt descriptivo. |
| 7 | Formulario adecuado | ✅ | `/contacto` en 4 pasos; teléfono opcional; honeypot; consent. |
| 8 | Prueba social | ✅ | 10 fotos reales + 3 testimonios del cliente + contadores (`200+`, México, Cienfuegos, 5). |
| — | A/B planificado | ✅ | `docs/Plan-AB-Post-Lanzamiento.md` (pendiente de ejecutar con tráfico). |

**Matiz:** no hay logos de partners (opcional en la guía: “uno o varios” tipos de prueba social; ya hay testimonios + métricas + fotos).

---

## 2. SEO on-page

Fuente: `seo/seo-on-page-fundamentos-google.md`

| Criterio | Estado | Evidencia |
|---|---|---|
| `<title>` único + keyword | ⚠️ **Parcial** | Home **54** chars — OK. Varias interiores superan ~60–65 al aplicar el template `%s · Trámites Migratorios JVG` (p. ej. homologación ~80, servicios ~73). Keyword sí al inicio; riesgo de truncado en SERP. |
| Meta description 140–160 | ✅ / ⚠️ | Páginas hijas **145–160** — OK. Default sitio **167** — ligeramente por encima del rango ideal. |
| Un H1 + jerarquía | ✅ | Un H1 por pantalla (`HomeHero` / `PageHero`). |
| URL semántica | ✅ | `/servicios`, `/homologacion`, `/preguntas-frecuentes`, etc. |
| `alt` | ✅ | Informativas con alt; decorativas `alt=""`. |
| Enlazado interno | ✅ | Nav, footer, CTAs, breadcrumbs, FAQ. Anchors descriptivos. |
| Schema.org | ✅ | JSON-LD Organization + ProfessionalService + WebSite; FAQPage en FAQ. |
| Canonical | ✅ | `pageCanonical()` + `metadataBase` (`SITE_URL`). |
| robots + sitemap | ✅ | `public/robots.txt`, `public/sitemap.xml` (9 URLs). |
| Contenido único | ✅ | Copy propio + legales + FAQ. |
| Mobile | ✅ | Responsive; CWV de campo aún no medidos. |
| OG / Twitter | ✅ | Imagen `og-default.jpg` 1200×630, card `summary_large_image`. |

### Titles renderizados (con template)

| Ruta | Chars | Nota |
|---|---:|---|
| `/` | 54 | ✅ |
| `/nosotros` | 59 | ✅ |
| `/terminos-y-condiciones` | 56 | ✅ |
| `/contacto` | 67 | ⚠️ truncado posible |
| `/aviso-de-privacidad` | 68 | ⚠️ |
| `/proceso` | 70 | ⚠️ |
| `/preguntas-frecuentes` | 70 | ⚠️ |
| `/servicios` | 73 | ⚠️ |
| `/homologacion` | 80 | ⚠️ |

**Mejora recomendada (no bloqueante):** acortar `title` de página o usar template `%s · JVG`.

---

## 3. UX — Heurísticas de Nielsen

Fuente: `ux/heuristicas-nielsen.md`

| # | Heurística | Estado | Evidencia |
|---|---|---|---|
| 1 | Visibilidad del estado | ✅ | Form: loading / success / error; progressbar; WA dialog. |
| 2 | Lenguaje del mundo real | ✅ | «Sus datos», «Solicitar asesoría», nombres de servicios claros. |
| 3 | Control y libertad | ✅ | Atrás en stepper; Escape menú y WA; breadcrumbs; 404 con atajos. |
| 4 | Consistencia | ✅ | Logo→home; `Button` unificado; nav/`aria-current`. |
| 5 | Prevención de errores | ✅ | Validación por paso, regex, maxLength, consent. |
| 6 | Reconocimiento | ✅ | Labels visibles; CountrySelect con búsqueda; WA precargado. |
| 7 | Flexibilidad | ✅ | Form + WhatsApp + tel/mail + FAQ. |
| 8 | Minimalismo | ✅ | CTA primario dominante en hero. |
| 9 | Recuperación de errores | ✅ | Mensajes por campo + sugerencia; error de envío con alternativa WA. |
| 10 | Ayuda | ✅ | `/preguntas-frecuentes` + float WA + footer. |

---

## 4. Redacción web eficaz

Fuente: `contenido/redaccion-web-eficaz.md`

| Criterio | Estado | Evidencia |
|---|---|---|
| Texto conciso | ✅ | Hero acortado; párrafos cortos en home. |
| Pirámide invertida | ✅ | Beneficio primero en hero y secciones. |
| Una idea / párrafo | ✅ | Estructura modular. |
| Subtítulos informativos | ✅ | «Cómo trabajamos…», «Tres pilares: gestión…», FAQ claras. |
| Negritas de escaneo | ✅ | `<strong>México</strong>`, Cienfuegos/México en pilares, etc. |
| Listas | ✅ | Pasos, highlights de servicios, FAQ. |
| Sin marketese vacío | ✅ | Pilares reescritos («de punta a punta» vs «ecosistema/llave en mano»). |
| Números en cifra | ✅ | `200+`, `5` servicios, pasos 1–4. |
| Datos / casos | ✅ | Fotos reales + testimonios del cliente. |
| CTA verbo de acción | ✅ | Solicitar / Enviar / Ver. |

---

## 5. Core Web Vitals

Fuente: `rendimiento/core-web-vitals.md`

| Criterio | Estado | Evidencia |
|---|---|---|
| LCP ≤ 2,5 s (campo) | ❓ | No medible sin URL pública. **Mitigado en código:** hero WebP ~45 KB, `priority`. |
| INP ≤ 200 ms | ❓ / ✅ riesgo bajo | Bundle lean; sin analytics pesado por defecto. |
| CLS ≤ 0,1 | ✅ probable | Logo altura fija; imágenes con `fill`/`aspect`; fuentes `swap`. |
| WebP/AVIF + dimensiones | ✅ | **21** WebP en `images/` + logo/director; casos aún JPG (lazy). |
| LCP sin lazy | ✅ | `HomeHero` `priority`. |
| Fonts display | ✅ | `next/font` + `display: "swap"`. |
| RUM web-vitals | ✅ | `WebVitals` + `useReportWebVitals`; GA4 opcional. |
| CDN / cache | ❓ | Depende del hosting del export estático. |
| Search Console | ❌ operativo | Pendiente de dominio. |
| `images.unoptimized` | ℹ️ | Sigue en `true` (requerido por `output: "export"`); compensado con WebP pregenerados. |

---

## 6. Accesibilidad WCAG 2.1 AA

Fuente: `accesibilidad/wcag-aa-fundamentos.md`

### Contraste medido (tokens actuales)

| Par | Ratio | AA |
|---|---:|---|
| ink / bg | 16.79:1 | ✅ texto |
| muted / bg | 6.27:1 | ✅ texto |
| **gold-deep `#7a6124` / bg** | **5.37:1** | ✅ texto pequeño |
| border `#8a847a` / bg | 3.38:1 | ✅ UI no textual |
| gold / ink (footer `bg-ink`) | 7.66:1 | ✅ |
| gold `#c4a35a` / bg claro | 2.19:1 | ❌ si se usara como texto sobre beige — **no se usa así** (solo footer sobre ink / hovers) |

| Criterio checklist | Estado |
|---|---|
| `lang="es"` | ✅ |
| Contraste texto / bordes | ✅ |
| `alt` adecuado | ✅ |
| Semántica + H1 único | ✅ |
| Skip link | ✅ `SkipLink` → `#contenido-principal` |
| Teclado | ✅ menú Escape + focus trap; WA Escape; form |
| Foco visible | ✅ `:focus-visible` |
| Labels + errores + live regions | ✅ ContactStepper |
| FAQ / ayuda | ✅ |
| Prefer-reduced-motion | ✅ |
| Auditoría axe + Lighthouse + lector | ⚠️ **Checklist listo**, ejecución manual pendiente (`docs/Checklist-Auditoria-A11y-CWV.md`) |
| Zoom 200 % / 320 px | ⚠️ Probable por layout; falta prueba formal |

---

## 7. Inventario de rutas actuales

| URL | Rol | SEO/a11y basales |
|---|---|---|
| `/` | Landing | ✅ |
| `/servicios` | Catálogo | ✅ + breadcrumbs |
| `/homologacion` | Servicio | ✅ |
| `/nosotros` | Firma | ✅ |
| `/proceso` | Cómo funciona | ✅ |
| `/contacto` | Conversión | ✅ |
| `/preguntas-frecuentes` | Ayuda + FAQPage | ✅ |
| `/aviso-de-privacidad` | Legal | ✅ |
| `/terminos-y-condiciones` | Legal | ✅ |
| 404 | Recuperación | ✅ noindex |

Chrome: SkipLink, Header (a11y menú), Footer (FAQ), WhatsAppFloat, JsonLd, Analytics, WebVitals.

---

## 8. Comparativa vs análisis inicial

| Área | Antes (~65 %) | Ahora (~91 %) |
|---|---|---|
| Skip link | ❌ | ✅ |
| Contraste gold/bordes | ❌ | ✅ |
| Schema / sitemap / robots / canonical / OG | ❌ | ✅ |
| FAQ / breadcrumbs / Escape menú | ❌ / parcial | ✅ |
| WebP + RUM | ❌ | ✅ |
| Testimonios | provisional → reales | ✅ |
| Titles SERP length | cortos/genéricos | keyword OK, **algunos largos por template** |
| CWV / a11y de campo | no | checklist + RUM; **falta ejecutar en prod** |

---

## 9. Únicos puntos abiertos (prioridad)

### P1 — Fácil, mejora SEO SERP
1. Acortar titles de páginas interiores **o** cambiar template a `%s · JVG` para quedar ≤60–65 chars.
2. Recortar `SITE.description` a ≤160 caracteres.

### P2 — Despliegue / operación
3. Confirmar dominio → `NEXT_PUBLIC_SITE_URL` + alinear `robots.txt` / `sitemap.xml`.
4. Search Console + enviar sitemap.
5. Opcional: `NEXT_PUBLIC_GA_MEASUREMENT_ID`.
6. Ejecutar `docs/Checklist-Auditoria-A11y-CWV.md` en staging.
7. Medir LCP/INP/CLS en PageSpeed (móvil) tras publicar.
8. Arrancar A/B #1 (titular) cuando haya tráfico (`docs/Plan-AB-Post-Lanzamiento.md`).

### No bloqueante / opcional
9. Logos de partners si el cliente los aporta.
10. Convertir fotos de `casos/` a WebP (ya van con lazy).

---

## 10. Conclusión

La web **está alineada con la guía corporativa** en implementación. El cumplimiento restante no es de diseño/código pendiente grande: es **afinación de titles**, **configuración de dominio/analytics** y **validación real en producción**.

Cuando quieras, el siguiente paso natural es cerrar el P1 de titles/description (rápido) o preparar el deploy con dominio definitivo.
