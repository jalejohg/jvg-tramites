# Prompt de generación — Sitio corporativo Trámites Migratorios JVG

> **Uso:** Copiar este documento (o las secciones marcadas como prompt) y entregarlo a Claude / el agente de implementación como brief maestro para construir el sitio.
>
> **Fuentes:** `docs/Cuestionario-de-Descubrimiento-del-Proyecto.md` + `docs/Interrogatorio-Diseno-Web-JVG.md` + decisiones de diseño acordadas.
>
> **Logo:** `frontend/public/logo.png`

---

## Datos pendientes del cliente (placeholders ficticios)

Los siguientes datos **no fueron aportados por el cliente**. Se usan valores ficticios para poder construir el sitio. Deben reemplazarse antes de producción y, en código, centralizarse en un único archivo de configuración (p. ej. `frontend/data/site.ts` o `frontend/lib/siteConfig.ts`) marcados con comentario `// TODO: dato real del cliente`.


| Campo                                      | Valor placeholder (ficticio)                                                                         | Estado                    |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------- | ------------------------- |
| WhatsApp                                   | `+53 5 123 4567`                                                                                     | **FALTANTE** — reemplazar |
| Email de contacto / envío del formulario   | `contacto@tramitesmigratoriosjvg.com`                                                                | **FALTANTE** — reemplazar |
| Teléfono (si se muestra)                   | `+53 43 123 456`                                                                                     | **FALTANTE** — reemplazar |
| Dirección (mapa / footer)                  | Calle 37 #4208, e/ 42 y 44, Cienfuegos, Cuba                                                         | **FALTANTE** — reemplazar |
| Coordenadas mapa (aprox.)                  | `22.1450, -80.4360` (Cienfuegos centro)                                                              | **FALTANTE** — ajustar    |
| Facebook página personal                   | Josue Vega Gomez (enlace real pendiente si no es el del grupo)                                       | Parcial                   |
| Grupo Facebook                             | [https://www.facebook.com/groups/941897664039041/](https://www.facebook.com/groups/941897664039041/) | Real (del cuestionario)   |
| Precios de servicios                       | No publicados — CTA “Solicitar asesoría”                                                             | Sin precios               |
| Foto del director                          | Placeholder Unsplash de profesional formal hasta tener foto real                                     | **FALTANTE**              |
| Testimonios                                | Textos inventados temporales (ver sección copy)                                                      | Temporal                  |
| Colegiatura / credenciales legales exactas | “Dirigido por Josue Vega Gomez” sin número de colegiación hasta confirmación                         | **FALTANTE**              |


---



## PROMPT (inicio)

Eres un desarrollador senior de frontend especializado en sitios corporativos Next.js (App Router) + React + TypeScript + Tailwind. Debes construir el sitio web multipágina de **Trámites Migratorios JVG** dentro del monorepo existente, carpeta `frontend/`.

Antes de escribir código, lee la documentación de Next disponible en `frontend/node_modules/next/dist/docs/` (esta versión de Next puede diferir de tu conocimiento entrenado). Respeta `CLAUDE.md` / `AGENTS.md` del repo: rutas delgadas en `app/`, pantallas en `screens/`, servicios en `services/`, hooks dedicados, Tailwind, tipado estricto, sin `any`.

Tu objetivo no es un mock genérico: es un sitio **listo para presentar al cliente**, con contenido real del negocio, identidad visual alineada al logo, y una experiencia premium-moderna, cálida y confiable.

---



### 1. Negocio y audiencia

**Nombre oficial:** Trámites Migratorios JVG  
**Eslogan (logo):** «Tu camino, nuestro compromiso.»  
**Director / figura pública:** Josue Vega Gomez  
**Actividad:** Consultoría jurídica y gestión documental internacional. Simplifican burocracia legal (apostillas, legalizaciones, homologación de títulos) y ofrecen soporte logístico (remesas y recargas) para conectar familias y facilitar movilidad global con seguridad jurídica.

**Propuesta de valor (headline / hero):**  
«Unimos profesionalismo jurídico y calidez humana para simplificar tu futuro, legalizar tus metas profesionales y mantenerte conectado con los tuyos, sin importar la distancia o la burocracia.»

**Público:**

1. Profesionales y graduados (25–45) que buscan homologar títulos y ejercer en el exterior.
2. Personas en procesos migratorios/consulares (20–60), especialmente en Cuba (foco Cienfuegos) y recién llegados a destino.
3. Diáspora en EE. UU., España, LatAm y Europa que gestiona documentos y apoyo familiar a distancia.

**Valores que el sitio debe transmitir:** confianza, seriedad, tranquilidad, claridad, calidez humana.  
**Diferenciadores (3 pilares):** gestión integral llave en mano; respaldo legal profesional y transparencia; cobertura local (Cienfuegos) con alcance internacional.

**Personalidad visual (adjetivos):** serio, cercano, premium, moderno.  
**Posición:** consultora moderna y accesible (no bufete clásico rígido), pero con autoridad jurídica.

---



### 2. Dirección visual (obligatoria)



#### 2.1 Referencias (inspiración, no copia pixel)

- **Migralex** (`https://migralexconsultores.com/` y repo hermano `../migralex/frontend`): estructura de sitio corporativo, hero, jerarquía, formulario por pasos/correo, tono de confianza. Reutiliza patrones de arquitectura (screens, stepper de contacto, Reveal), no la paleta wine ni la marca.
- **Starlink** (`https://starlink.com/es-419`): modernidad, generosidad de espacio, tipografía fuerte, hero impactante, sensación contemporánea.



#### 2.2 Vetos

- **Sin modo oscuro** (ni toggle ni tema dark por defecto).
- Sin estética “tech púrpura”, cartoons, stock de abogados con martillo/balanza cliché.
- Sin hero recargado con stats, chips flotantes, badges encima de la imagen o múltiples bloques en el primer viewport.



#### 2.3 Paleta (derivada del logo dorado + negro, adaptada a fondo claro)

El logo es dorado metálico sobre negro. El sitio debe ser **predominantemente claro**. Traduce la marca así:


| Token               | Uso sugerido                                     | Hex orientativo                                                                                                                       |
| ------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| `--color-bg`        | Fondo principal                                  | `#F7F4EF` (beige cálido claro)                                                                                                        |
| `--color-surface`   | Superficies / secciones alternas                 | `#FFFFFF`                                                                                                                             |
| `--color-ink`       | Texto principal                                  | `#141414` / negro suave                                                                                                               |
| `--color-muted`     | Texto secundario                                 | `#5C5A56`                                                                                                                             |
| `--color-border`    | Separadores sutiles                              | `#E4DFD6`                                                                                                                             |
| `--color-gold`      | Acentos de marca, subrayados, iconos clave       | `#C4A35A` → `#D4AF37` (ajustar al logo)                                                                                               |
| `--color-gold-deep` | Hover de acentos                                 | `#9A7B2F`                                                                                                                             |
| `--color-cta`       | Botones primarios (alto contraste, muy visibles) | Negro `#141414` con texto claro **o** dorado sólido con texto oscuro — elegir una y ser consistente; el CTA debe “notarse claramente” |
| `--color-cta-hover` | Hover marcado del CTA                            | Variante más clara/oscura del CTA                                                                                                     |


Secciones oscuras **completas** (tipo dark mode) están prohibidas. Se permite como máximo una franja estrecha de acento negro+dorado (p. ej. barra superior fina o footer inferior) si refuerza marca, sin volverse el look dominante.

Define variables CSS en `globals.css` y úsalas en Tailwind (theme).

#### 2.4 Tipografía

- **Titulares:** serif editorial/premium (no Inter/Roboto/Arial/system; evita Geist para display). Ejemplos aceptables vía `next/font`: Fraunces, Libre Baskerville, Cormorant Garamond, Source Serif 4 — elige **una** que dialogue con el “JVG” serif del logo sin imitarlo mal.
- **Cuerpo / UI:** sans moderna clara y legible (p. ej. Source Sans 3, DM Sans, Manrope). Tracking limpio.
- Titulares: sensación **editorial premium**. Cuerpo: claridad y calidez.
- El logo ya combina serif (JVG) + sans caps (TRÁMITES MIGRATORIOS): respeta esa dualidad en el sitio.
- Balance accesibilidad / look fino: tamaños cómodos en móvil (≥16px cuerpo), buen contraste, line-height generoso.



#### 2.5 Layout y UI

- Layout **abierto y moderno** (inspiración Starlink): mucho aire, pero con **balance** para que sea útil/práctico (no solo vacío premium).
- **Bordes más rectos / institucionales** (radio bajo: 0–4px). Evitar pills redondeadas exageradas.
- Cards: no por defecto. Usar cards solo donde ayuden a la interacción (p. ej. ítems de servicio clicables). Preferir composición tipográfica + imagen + reglas sutiles.
- Iconos: **filled** sobrios (lucide filled / similar), coherentes; sin ilustraciones cartoon.
- Imágenes: **Unsplash**, acordes al contexto de cada sección (migración, documentos, familia, profesionalismo, viaje — sin clichés ridículos). Optimizar con `next/image`.
- Motivo visual recurrente: ninguno forzado; el logo (globo + avión) ya carga el símbolo de movilidad.



#### 2.6 Motion

- Apariciones sutiles al scroll (fade/slide corto; respeta `prefers-reduced-motion`).
- Hovers **marcados** en botones y enlaces (cambio claro de color/underline/translate leve).
- Aporta vida y belleza: transiciones de header, microinteracciones del stepper, hover de servicios. Evita parallax agresivo, loaders espectaculares y video de fondo a pantalla completa.



#### 2.7 Responsive

Desktop y móvil son **igual de importantes**. El sitio debe verse excelente en ambos. Header con logo completo en desktop; en móvil puede usarse versión compacta del logo o monograma si el full logo no cabe, manteniendo reconocimiento de marca.

---



### 3. Arquitectura de información



#### Páginas / rutas


| Ruta                      | Pantalla             | Notas                                              |
| ------------------------- | -------------------- | -------------------------------------------------- |
| `/`                       | `HomeScreen`         | Hero + secciones acordadas                         |
| `/servicios`              | `ServiciosScreen`    | Una sola página con los 5 servicios al mismo nivel |
| `/homologacion`           | `HomologacionScreen` | Profundización del servicio estrella               |
| `/nosotros`               | `NosotrosScreen`     | Historia + director                                |
| `/proceso`                | `ProcesoScreen`      | Cómo trabajamos                                    |
| `/preguntas-frecuentes`   | `FaqScreen`          | FAQ útil                                           |
| `/contacto`               | `ContactoScreen`     | Formulario stepper + datos + mapa                  |
| `/aviso-de-privacidad`    | Legal genérico       | Texto placeholder legal                            |
| `/terminos-y-condiciones` | Legal genérico       | Texto placeholder legal                            |


Sin blog / recursos por ahora.

#### Header (sticky)

- Logo (`/logo.png`) + navegación + CTA fijo.
- CTA header sugerido: **«Solicitar asesoría»** → `/contacto`.
- Sticky al scroll; fondo claro con blur sutil o sólido al scrollear.



#### WhatsApp flotante

Botón flotante visible en **todas** las páginas (excepto quizá legales si estorba; preferible en todas). Enlace `https://wa.me/5351234567` (placeholder; ver tabla de faltantes). Texto accesible: «Escribir por WhatsApp».

#### Footer

- Columnas: servicios (enlaces), contacto (email, WhatsApp, dirección), redes (Facebook / grupo), legales, mención Cienfuegos + atención internacional.
- Incluir **mapa** embebido (Google Maps iframe o enlace a Maps) con la dirección placeholder.
- Logo + eslogan.

---



### 4. Especificación por página



#### 4.1 Inicio `/`

**Primer viewport (hero) — solo:**

1. Marca (logo o nombre visible).
2. Headline = propuesta de valor (puede acortarse tipográficamente en 1–2 líneas potentes si la frase completa queda larga; la frase completa puede ir como subtítulo).
3. Un subtítulo corto de apoyo (1 frase).
4. Grupo CTA: primario **«Solicitar asesoría»** → `/contacto`; secundario **«Ver servicios»** → `/servicios`.
5. Imagen hero **full-bleed** (edge-to-edge), profesional y cálida (Unsplash). Sin overlays de badges/stats.

**Debajo del hero (orden):**

1. Servicios destacados (los 5, mismo peso visual; enlace a `/servicios` o anclas).
2. Diferenciadores (3 pilares).
3. Proceso resumido (pasos) + enlace a `/proceso`.
4. Equipo / director (foto + nombre Josue Vega Gomez + rol + CTA a `/nosotros`).
5. Contadores (aunque la firma sea nueva 2025–2026): inventar cifras **honestas de intención** y marcarlas en config como provisionales, p. ej. presencia en Cienfuegos, países de atención (Cuba, EE. UU., España, México), servicios integrales (5), acompañamiento familiar. No inventar “10 años de experiencia”.
6. Testimonios temporales inventados (3), tono emocional, tuteo **no** — usar **usted**.
7. CTA final de conversión.



#### 4.2 Servicios `/servicios`

Una página. Los **cinco** servicios al mismo nivel:

1. Legalización y apostilla de documentos civiles y académicos
2. Homologación y validación de títulos universitarios
3. Asesoría consular y acompañamiento en procesos migratorios
4. Gestión territorial de trámites en el terreno (foco Cienfuegos)
5. Soporte logístico familiar: remesas seguras y telecomunicaciones

Por cada servicio: título, descripción breve (del cuestionario), valor para el cliente, icono, CTA **«Solicitar asesoría»**.  
No mostrar precios (no aportados). No hace falta ficha exhaustiva de requisitos/plazos en esta versión; priorizar claridad + CTA. Homologación puede enlazar a `/homologacion` para profundizar.

#### 4.3 Homologación `/homologacion`

Página de aterrizaje del servicio estrella para profesionales. Explicar qué es, para quién, valor, y CTA fuerte a contacto. Contenido basado en el cuestionario (médicos, ingenieros, docentes; España, EE. UU., México).

#### 4.4 Nosotros `/nosotros`

- Historia de fundación **larga** usando solo la info del cuestionario (origen, 2025–primera mitad 2026, objetivos a largo plazo).
- Bloque director: **Josue Vega Gomez**, Director general. Bio tono **CV profesional** (sin inventar títulos académicos no confirmados; se puede decir que lidera la firma con enfoque jurídico-profesional en gestión migratoria y documental). Foto: placeholder hasta foto real.
- No mostrar aún administrador/gestores de Cienfuegos como fichas (solo mención de equipo operativo en terreno si encaja en el texto).



#### 4.5 Proceso `/proceso`

Diagrama/pasos claros: contacto → evaluación de viabilidad → gestión / seguimiento → entrega / acompañamiento. Tono tranquilizador. CTA a `/contacto`.

#### 4.6 FAQ `/preguntas-frecuentes`

8–12 preguntas útiles inventadas pero realistas (plazos, apostilla vs legalización, homologación, atención desde el exterior, remesas, Cienfuegos, costos “se cotizan según caso”, documentos sensibles). Respuestas en usted, claras, sin tecnicismos excesivos.

#### 4.7 Contacto `/contacto`

- **Conversión #1:** formulario multipaso (stepper) que envía por correo — patrón similar a Migralex (`ApptForm` / `contactService`), adaptado a JVG.
- Mensaje post-envío: “Le contactaremos” (sin calendario/agenda).
- Campos mínimos del stepper (propuesta):
  1. Nombre, email, teléfono (opcional),
  2. País desde el que escribe,
  3. Tipo de trámite / servicio (select de los 5 + Otro),
  4. Mensaje / detalle + consentimiento privacidad.
- Estados UI obligatorios: idle, validación por paso, loading, success, error.
- Mostrar también WhatsApp, email y dirección; mapa.
- El formulario no debe verse “aburrido”: progreso visible, microcopy cálido, transiciones entre pasos.

Referencia de implementación a estudiar: `../migralex/frontend/components/agendar/ApptForm.tsx` y `../migralex/frontend/services/contactService.ts` (adaptar marca, textos y endpoint/config; no copiar estilos wine).

---



### 5. Copy e idioma

- **Solo español.**
- Tratamiento de **usted** (máximo respeto).
- Tono **más emocional** (tranquilidad, familia, futuro, confianza) sin perder claridad factual donde haga falta.
- Evitar anglicismos innecesarios; términos del sector (apostilla, homologación, visa) sí.
- CTAs preferidos: «Solicitar asesoría», «Escribir por WhatsApp», «Ver servicios», «Conocer el proceso».

**Testimonios temporales (ejemplo — puedes variar el copy manteniendo el espíritu):**

1. Profesional en España sobre homologación.
2. Familiar en EE. UU. sobre gestión a distancia desde Cienfuegos.
3. Cliente sobre apostilla/legalización con sensación de tranquilidad.

Marcar en UI o en data: `provisional: true` o comentario TODO.

---



### 6. Requisitos técnicos

1. Implementar en `frontend/` con **Next.js App Router**, React 19, TypeScript, Tailwind v4.
2. `app/**/page.tsx` delgados; lógica y UI en `screens/*Screen.tsx`.
3. Componentes reutilizables en `components/` (Header, Footer, WhatsAppFloat, Reveal, ServiceItem, FaqItem, ContactStepper, etc.).
4. Contenido y config del sitio en `data/` o `lib/siteConfig.ts` (contacto placeholder, nav, servicios, FAQs, testimonios).
5. Formulario: capa `services/` + hook `use*` (TanStack Query si ya está o se añade; si no está en el proyecto, se puede implementar el envío con service + estados locales, pero preferible alinear con la arquitectura del repo / Migralex).
6. SEO básico: metadata por página (`title`, `description`), `lang="es"`.
7. Accesibilidad: contraste suficiente, focus visible, labels en formulario, `aria` en stepper y botón WhatsApp.
8. Legales día 1 con texto **genérico** claramente marcado como provisional.
9. Usar `frontend/public/logo.png` en header/footer; no redibujar el logo.
10. No implementar dark mode.

---



### 7. Criterios de aceptación

- [ ] Multipágina completa según mapa de rutas.
- [ ] Identidad clara: beige/claro + negro + dorado; logo visible; sin dark mode.
- [ ] Hero full-bleed limpio (marca, headline, subtítulo, 2 CTAs, imagen).
- [ ] Calidez perceptible en tipografía, foto y color (no solo en textos).
- [ ] Formulario stepper con estados idle/loading/success/error.
- [ ] WhatsApp flotante global.
- [ ] Mapa + datos de contacto (aunque sean placeholders documentados).
- [ ] Contenido 100% en español, de usted, basado en el cuestionario.
- [ ] Responsive excelente en móvil y desktop.
- [ ] Motion sutil + hovers marcados.
- [ ] Archivo de config con TODO para datos faltantes del cliente.
- [ ] Compila (`pnpm build` en `frontend/`) sin errores.

---



### 8. Orden de trabajo sugerido

1. Design tokens + tipografía + layout shell (Header/Footer/WhatsApp).
2. `siteConfig` con datos y TODOs.
3. Home completo.
4. Servicios + Homologación.
5. Nosotros + Proceso + FAQ.
6. Contacto (stepper) + legales.
7. Pulido motion, SEO, responsive, build.

---

## PROMPT (fin)

---

## Notas para quien ejecute el prompt

- Este archivo es el brief maestro; el cuestionario y el interrogatorio son anexos de contexto.
- Al reemplazar datos faltantes, actualizar solo `siteConfig` (o equivalente) y este documento.
- Si se aporta foto real del director, sustituir el placeholder de Unsplash en Nosotros e Inicio.

