# Checklist de auditoría a11y + Core Web Vitals — JVG

Checklist operativo alineado a la guía (`guia-webs-corporativas`).  
Usar antes de cada release importante.

## Accesibilidad (WCAG 2.1 AA)

- [ ] Lighthouse → Accessibility ≥ 95 (móvil)
- [ ] axe DevTools: 0 critical / 0 serious en home, contacto, FAQ
- [ ] Navegación solo teclado: Tab por header, menú móvil (Escape cierra), formulario, WhatsApp
- [ ] Skip link visible al enfocar y lleva a `#contenido-principal`
- [ ] Zoom 200 % sin pérdida de contenido
- [ ] Ancho 320 CSS px sin scroll horizontal
- [ ] VoiceOver (macOS) o NVDA: form ContactStepper + CountrySelect anuncian errores
- [ ] Contraste: eyebrows `gold-deep` y bordes de inputs verificados (≥ 4,5:1 / ≥ 3:1)

## Rendimiento (Core Web Vitals)

- [ ] PageSpeed Insights (URL de producción): LCP ≤ 2,5 s · INP ≤ 200 ms · CLS ≤ 0,1 (p75)
- [ ] Search Console → Experiencia → Core Web Vitals en verde
- [ ] Consola `[web-vital]` en desarrollo o beacon a `NEXT_PUBLIC_ANALYTICS_ENDPOINT`
- [ ] Hero/LCP en WebP sin lazy; logo WebP con altura fija (sin CLS de header)

## SEO técnico

- [ ] `robots.txt` y `sitemap.xml` accesibles en producción
- [ ] Rich Results Test: Organization + FAQPage
- [ ] Canonical y OG image en vista de código fuente
- [ ] `site:` indexación tras enviar sitemap a Search Console

## Notas de esta base de código (2026-08-01)

Implementado en código: skip link, contraste tokens, Escape/focus trap menú, FAQ, JSON-LD, sitemap/robots, OG, WebVitals RUM, WebP LCP/logo, breadcrumbs, titles/metas, canonical.
Pendiente de entorno: medición CrUX real, GA4 ID, dominio definitivo en `NEXT_PUBLIC_SITE_URL`.
