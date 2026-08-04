# Design System Master File — Trámites Migratorios JVG

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.
>
> **Fuente:** ui-ux-pro-max (Trust & Authority + Soft Organic / Nature Distilled) + brief del proyecto.
> Paleta beige/negro/dorado del logo. Referencia de forma: **Migralex** (humano, suave) — no Stalink (duro, cuadrado).
>
> **Servicios (nombres y copy):** ver `pages/servicios.md` y el cuestionario de descubrimiento.

---

**Project:** Trámites Migratorios JVG  
**Updated:** 2026-08-04  
**Category:** Legal / Immigration consultancy (corporate multipage)  
**Style:** Soft Organic Trust · 3 colores + blanco · sin dark mode

---

## Global Rules

### Color Palette (3 colores + blanco)

| Rol | Hex | Token | Notas |
|-----|-----|-------|-------|
| **Fondo** | `#FFFFFF` | `--color-bg` / `--color-surface` | Blanco — canvas principal |
| **1. Negro** | `#141414` | `--color-ink` / `--color-cta` | Texto, CTA, footer |
| **2. Dorado** | `#D59E3F` | `--color-gold` / `--color-ring` | Acento luminoso de marca |
| **3. Beige** | `#F7F4EF` | `--color-beige` (`--color-warm` alias) | Acento puntual (placeholders, veladuras); **no** franjas de sección — el canvas predominante es blanco |

**Derivados** (solo tintes de los 3 + blanco; no cuentan como colores de marca extra):

| Token | Fórmula | Uso |
|-------|---------|-----|
| `--color-muted` | ink 58% + white | Texto secundario |
| `--color-border` | ink 48% + white | Controles / inputs |
| `--color-border-subtle` | ink 10% + white | Cards / separadores |
| `--color-gold-deep` | gold 62% + ink | Eyebrows / texto dorado AA (≥4.5:1) |
| `--color-gold-light` | gold 52% + white | Highlight de degradado luminoso |
| `--color-gold-soft` | gold 42% + white | Brillos / veladuras |
| `--shadow-gold` | halo dorado | CTAs, badges, fills `bg-gold` |
| `--color-cta-hover` | ink 88% + white | Hover CTA |
| `--color-on-cta` | `#FFFFFF` | Texto sobre CTA negro |

**Excepción funcional:** `--color-destructive` solo para errores de formulario (WCAG). No usarlo como acento decorativo.

**Vetos:** sin dark mode; sin purple AI; sin grises o azules inventados fuera de estos tintes.

### Typography

- **Heading:** Cormorant Garamond (serif editorial premium — dialogo con “JVG” del logo)
- **Body / UI:** Source Sans 3 (sans clara, cálida, legible)
- **Mood:** legal, profesional, editorial, cercano, confiable, humano
- **Base body:** ≥16px · line-height 1.5–1.75
- **Evitar:** Inter, Roboto, Arial, Geist display, system como tipografía principal
- **Evitar (forma):** tipografías excesivamente redondas tipo “kids / toy” (p. ej. Varela Round) — la suavidad va en radios y sombras, no en la letra

### Spacing (8dp)

| Token | Value |
|-------|-------|
| `--space-xs` | 4px |
| `--space-sm` | 8px |
| `--space-md` | 16px |
| `--space-lg` | 24px |
| `--space-xl` | 32px |
| `--space-2xl` | 48px |
| `--space-3xl` | 64px |
| `--space-4xl` | 96px |

### Radius & Effects (Soft Organic)

Inspiración ui-ux-pro-max: *Nature Distilled* / *Organic* — radios generosos y sombras difusas, sin caer en claymorphism ni pills exageradas.

| Token | Value | Uso |
|-------|-------|-----|
| `--radius-sm` | 10px | Chips, icon badges compactos |
| `--radius-md` | 14px | Botones, inputs, selects |
| `--radius-lg` | 18px | Cards de servicio, paneles |
| `--radius-xl` | 22px | Marcos de foto, listados |
| `--radius-2xl` | 28px | CTA shells, formularios, chat |
| `--radius-3xl` | 36px | Paneles grandes secundarios |

- **Sombras:** difusas y cálidas (ink a baja opacidad); preferir depth suave a bordes duros
- **Bordes de superficie:** `border-border-subtle` en cards/media; `border-border` solo en controles interactivos
- **Motion:** 150–300ms micro; reveal fade/slide corto; `prefers-reduced-motion`
- **Hovers:** color / underline / translateY leve + sombra que respira
- **Iconos:** Lucide, sobrios, sin emoji; contenedores de icono con `rounded-xl` o `rounded-full` (pasos)

### Shadows

| Level | Value |
|-------|-------|
| `--shadow-sm` | `0 2px 10px rgba(20,20,20,0.05)` |
| `--shadow-md` | `0 10px 28px rgba(20,20,20,0.08)` |
| `--shadow-lg` | `0 18px 52px rgba(20,20,20,0.11)` |

---

## Component Specs

### Buttons

- **Primary:** fondo `--color-cta`, texto `--color-on-cta`, radius `md` (14px), hover `--color-cta-hover` + translateY(-1px) + shadow-md
- **Secondary:** borde `--color-ink`, fondo transparente, radius `md`, hover fondo ink / texto on-cta
- **Gold accent link:** underline dorado en hover + halo suave (`text-gold` / `text-gold-deep`)
- Utilidades de lujo: `text-gold-luxe` (degradado + glow en highlights), `bg-gold-luxe` (rellenos CTA/badges), `shadow-gold`
- Min touch 44×44 · `cursor-pointer` · focus ring dorado 2–3px + halo luminoso
- **No** `rounded-full` en CTAs principales (evita look pill genérico)

### Cards / Surfaces

- Permitidas cuando agrupan interacción o una unidad de servicio.
- Radius `lg`–`xl`; borde sutil + sombra suave en hover.
- Preferir tipografía + imagen; evitar rejillas de cajas cuadradas duras.

### Photo frames

- Marcos de contenido (director, proceso, servicios, storybook): `rounded-xl` / `rounded-2xl` + `overflow-hidden`.
- Hero full-bleed: sin radius (edge-to-edge). No tocar el plano fotográfico del hero.

### Inputs

- Labels visibles (nunca solo placeholder)
- Height ≥44px · border `--color-border` · radius `md` · focus gold ring
- Errores debajo del campo · `aria-live` en resumen
- Contenedor del formulario: `rounded-2xl`, borde sutil, superficie clara

### Navigation

- Sticky header claro; blur al scroll
- CTA fijo «Solicitar asesoría» → `/contacto`
- WhatsApp flotante: burbuja redonda OK; panel chat `rounded-2xl`
- Menú móvil: botón `rounded-md`

---

## Style Guidelines

**Style:** Soft Organic Trust (Trust & Authority + calidez humana)

**Keywords:** confianza, seriedad, calidez, claridad, premium humano, cobertura Cienfuegos + alcance internacional, formas orgánicas

**Page pattern (Home):** ver `pages/home.md` (override). Resumen:  
1. Hero full-bleed + highlight dorado + stats bar (COUNTERS) en `ink`  
2. Quiénes somos (collage + 3 pilares + CTA a Nosotros)  
3. Servicios (5) + «Ver todos»  
4. Proceso resumido  
5. Casos / entregas — franja `ink` (excepción)  
6. Testimonios — cards claras  
7. CTA band — canvas claro + CTAs ink (no ink seguido del footer)  
8. Footer ink

**CTA primario global:** Solicitar asesoría  
**Idioma:** español · tratamiento de **usted**

---

## Anti-Patterns (Do NOT Use)

- ❌ Radios institucionales 0–4px (look Stalink / “extremadamente cuadrado”)
- ❌ Dark mode genérico / navy inventado (sí: footer + 1 franja `ink` de contenido en Home — ver `pages/home.md`)
- ❌ Tech purple / AI gradients
- ❌ Chips / badges flotantes inventados en hero (sí: stats bar con COUNTERS honestos — ver `pages/home.md`)
- ❌ Claymorphism / neumorphism juguetón / pills CTA exageradas
- ❌ Emojis como iconos
- ❌ Inter / Geist como display
- ❌ Precios (no aportados)
- ❌ Inventar “años de experiencia”
- ❌ Placeholders como único label
- ❌ Animaciones >500ms o parallax agresivo

---

## Pre-Delivery Checklist

- [ ] Contraste texto ≥4.5:1 (light only)
- [ ] Focus visible · labels · aria en stepper y WhatsApp
- [ ] `prefers-reduced-motion`
- [ ] Responsive 375 / 768 / 1024 / 1440
- [ ] Hero limpio full-bleed (sin radius)
- [ ] Cards / inputs / CTAs con radios soft organic
- [ ] Formulario idle / loading / success / error
- [ ] TODO en `siteConfig` para datos faltantes
- [ ] `pnpm build` OK
