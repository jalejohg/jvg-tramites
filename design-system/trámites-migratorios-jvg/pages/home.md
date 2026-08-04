# Home — overrides

> Overrides de `MASTER.md` para la página de inicio.
> Estructura inspirada en referencia corporativa (ritmo Anti): hero + proof temprano, about fusionado, servicios, proceso, casos en ink, testimonios, CTA band.

## Page pattern (orden)

1. **Hero full-bleed** + highlight dorado en frase clave del H1 + **stats bar** (COUNTERS) al pie del hero en `ink`
2. **Quiénes somos** — collage 2 fotos + checklist de 3 pilares + CTA «Conocer la firma» → `/nosotros` (Director detallado solo en Nosotros)
3. **Servicios** — header con «Ver todos» a la derecha + grid 5 cards
4. **Proceso** resumido (fondo surface / blanco)
5. **Casos / entregas** — franja `ink` + 4 cards foto + caption (excepción dark permitida)
6. **Testimonios** — 3 cards claras (comilla dorada; sin estrellas inventadas)
7. **CTA band** — canvas claro (blanco) + CTAs ink; no competir con el footer
8. Footer ink (única franja oscura de cierre)

## Excepciones vs MASTER

- **Sí permitido:** stats bar bajo el hero (COUNTERS honestos; no inventar cifras).
- **Sí permitido:** hasta **1** franja `ink` de contenido en Home (casos); el footer es ink global. CTA pre-footer en canvas claro.
- **Atmósfera:** orbes dorados a baja opacidad (discreta). Sin halos agresivos en CTAs.
- **No:** badges flotantes inventados, estrellas 5★, newsletter, blog, hexágono decorativo.
- Badge del collage About: solo proof real derivado de COUNTERS / casos.

## Sticky photo band (pilares)

- **Retirada de Home.** Los pilares viven en el checklist de Quiénes somos.
- No restaurar parallax / sticky band en Home salvo decisión explícita.

## Atmósfera visual

- Tokens: canvas predominante `bg` (blanco) + ink / gold. Beige solo acentos puntuales.
- Ritmo: blanco continuo entre bloques; franja `ink` de contenido solo en casos; cierre en footer ink.
- **Atmósfera Migralex (ricas):** orbes radiales dorados + blur + lavado diagonal vía `SectionAtmosphere` (`tone="light" | "ink"`, prop `mirror` para alternar).
- Secciones claras: `relative overflow-hidden` + `<SectionAtmosphere />` (o `mirror`).
- Franjas ink / footer / stats: `<SectionAtmosphere tone="ink" />`.
- Hero full-bleed sin radius; veladuras `from-bg` + highlight dorado en H1.
- Sin purple AI; sin animar orbes (estáticos) — respetar `prefers-reduced-motion` en hovers.

## Soft organic (vs Stalink)

- Cards de servicio, casos, testimonios y CTA: radios `xl`–`2xl`.
- Icon badges: `rounded-xl`; números de paso: `rounded-full`.
- Bordes: `border-border-subtle` en claro; en ink, bordes `white/10` o sin borde duro.

## Casos (featured)

- **Fuente:** fotos reales en `public/images/casos/`.
- **Layout Home:** 4 cards iguales (foto + footer claro), no masonry.
- Caption: título + lugar; affordance sutil (+ / flecha).
- **Lazy load** en imágenes below fold.
- `prefers-reduced-motion` en hovers.
