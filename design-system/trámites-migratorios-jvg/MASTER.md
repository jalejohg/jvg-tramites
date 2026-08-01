# Design System Master File — Trámites Migratorios JVG

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.
>
> **Fuente:** ui-ux-pro-max (Trust & Authority) + brief `docs/Prompt-Generacion-Web-JVG.md`.
> La paleta navy genérica de legal services se **reemplazó** por beige/negro/dorado del logo.

---

**Project:** Trámites Migratorios JVG  
**Generated:** 2026-07-31  
**Category:** Legal / Immigration consultancy (corporate multipage)  
**Style:** Trust & Authority · premium moderno · cálido · sin dark mode

---

## Global Rules

### Color Palette (marca — fondo claro obligatorio)

| Role | Hex | CSS Variable | Uso |
|------|-----|--------------|-----|
| Background | `#F7F4EF` | `--color-bg` | Fondo principal |
| Surface | `#FFFFFF` | `--color-surface` | Secciones / superficies |
| Ink | `#141414` | `--color-ink` | Texto principal + CTA primario |
| Muted | `#5C5A56` | `--color-muted` | Texto secundario |
| Border | `#E4DFD6` | `--color-border` | Separadores |
| Gold | `#C4A35A` | `--color-gold` | Acentos de marca |
| Gold Deep | `#9A7B2F` | `--color-gold-deep` | Hover de acentos |
| CTA | `#141414` | `--color-cta` | Botones primarios (texto claro) |
| CTA Hover | `#2A2A2A` | `--color-cta-hover` | Hover CTA |
| On CTA | `#F7F4EF` | `--color-on-cta` | Texto sobre CTA |
| Destructive | `#B91C1C` | `--color-destructive` | Errores de formulario |
| Ring / Focus | `#C4A35A` | `--color-ring` | Focus visible |

**Vetos:** sin dark mode; sin franjas oscuras de sección completas (máx. barra fina negra+dorado o footer inferior); sin purple AI gradients.

### Typography

- **Heading:** Cormorant Garamond (serif editorial premium — dialogo con “JVG” del logo)
- **Body / UI:** Source Sans 3 (sans clara, cálida, legible)
- **Mood:** legal, profesional, editorial, cercano, confiable
- **Base body:** ≥16px · line-height 1.5–1.75
- **Evitar:** Inter, Roboto, Arial, Geist display, system como tipografía principal

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

### Radius & Effects

- **Radius:** 0–4px (institucional; sin pills exageradas)
- **Sombras:** sutiles, cálidas (ink a baja opacidad)
- **Motion:** 150–300ms micro; reveal fade/slide corto; `prefers-reduced-motion`
- **Hovers:** marcados (color / underline / translateY leve)
- **Iconos:** Lucide filled, sobrios, sin emoji

### Shadows

| Level | Value |
|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(20,20,20,0.04)` |
| `--shadow-md` | `0 4px 16px rgba(20,20,20,0.08)` |
| `--shadow-lg` | `0 12px 40px rgba(20,20,20,0.12)` |

---

## Component Specs

### Buttons

- **Primary:** fondo `--color-cta`, texto `--color-on-cta`, radius 2px, hover `--color-cta-hover` + translateY(-1px)
- **Secondary:** borde `--color-ink`, fondo transparente, hover fondo ink / texto on-cta
- **Gold accent link:** underline dorado en hover
- Min touch 44×44 · `cursor-pointer` · focus ring dorado 2–3px

### Cards

- **No por defecto.** Solo donde ayuden a interacción (servicios clicables).
- Preferir tipografía + imagen + reglas sutiles (`border-border`).

### Inputs

- Labels visibles (nunca solo placeholder)
- Height ≥44px · border `--color-border` · focus gold ring
- Errores debajo del campo · `aria-live` en resumen

### Navigation

- Sticky header claro; blur al scroll
- CTA fijo «Solicitar asesoría» → `/contacto`
- WhatsApp flotante global (`aria-label`: «Escribir por WhatsApp»)

---

## Style Guidelines

**Style:** Trust & Authority (adaptado)

**Keywords:** confianza, seriedad, calidez, claridad, premium moderno, cobertura Cienfuegos + alcance internacional

**Page pattern (Home):**  
1. Hero full-bleed (marca, headline, subtítulo, 2 CTAs, imagen) — sin badges/stats  
2. Servicios (5, mismo peso)  
3. Diferenciadores (3 pilares)  
4. Proceso resumido  
5. Director  
6. Contadores provisionales honestos  
7. Historias reales (galería de entregas) + citas (usted)  
8. CTA final

**CTA primario global:** Solicitar asesoría  
**Idioma:** español · tratamiento de **usted**

---

## Anti-Patterns (Do NOT Use)

- ❌ Dark mode / secciones oscuras completas
- ❌ Tech purple / AI gradients
- ❌ Hero con stats, chips, badges flotantes
- ❌ Cards por defecto / pills redondeadas exageradas
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
- [ ] Hero limpio full-bleed
- [ ] Formulario idle / loading / success / error
- [ ] TODO en `siteConfig` para datos faltantes
- [ ] `pnpm build` OK
