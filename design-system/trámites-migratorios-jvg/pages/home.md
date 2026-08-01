# Home — overrides

> Overrides de `MASTER.md` para la página de inicio.

## Sticky photo band (pilares)

- **Sí permitido:** imagen de fondo `position: sticky` a viewport + paneles claros (paper/surface) que hacen scroll por encima.
- **No:** parallax JS agresivo, scroll-jacking, ni sección oscura tipo dark mode.
- Veladura: gradientes `bg` / `gold` claros para contraste (WCAG) sin “modo noche”.
- Respetar `prefers-reduced-motion` en hovers de imagen (scale); sticky CSS es aceptable.

## Atmósfera visual

- Fotografía Unsplash contextual en servicios, proceso y CTA (sin franja mosaico intermedia).
- Tokens extra: `--color-warm`, `--color-gold-soft` para fondos y brillos.
- Hero se mantiene intacto (ya validado al 100%).

## Storybook / historias reales

- **Fuente:** fotos reales del cliente en `public/images/casos/` (10 entregas).
- **Patrón ui-ux-pro-max:** Portfolio Grid + social proof (foto + label + lugar).
- **Layout:** masonry asimétrico 2×4 (featured / tall / standard); sin cards.
- **Caption:** tipografía serif + regla dorada lateral; sin badges flotantes sobre la foto.
- **Motion:** hover scale 1.02 (300ms) + reveal staggered; `prefers-reduced-motion`.
- **Lazy load** en todas las imágenes del storybook (below fold).
- Citas de texto siguen como bloque secundario (provisionales) debajo de la galería.
