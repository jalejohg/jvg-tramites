# Plan A/B post-lanzamiento — Trámites Migratorios JVG

> Objetivo: cumplir la recomendación de la guía de landing pages (tests basados en datos).  
> Estado: **planificado**; ejecutar cuando haya tráfico medible (Search Console + analytics).

## Hipótesis prioritarias

| # | Variable | Variante A (control) | Variante B | Métrica primaria |
|---|---|---|---|---|
| 1 | Titular del hero | Actual | Enfoque “residencia México en X pasos” | CTR CTA / conversiones a `/contacto#formulario` |
| 2 | Texto del CTA | “Solicitar asesoría” | “Evaluar mi caso” | Clics en CTA primario |
| 3 | Prueba social above-the-fold | Sin testimonios en hero | 1 cita corta bajo el subtítulo | Scroll depth + conversión |

## Protocolo

1. Una sola variable por experimento.
2. Mínimo 2 semanas o 100 conversiones por variante (lo que ocurra después).
3. No cambiar diseño global a mitad del test.
4. Registrar ganador en este documento y desplegar la variante ganadora.

## Herramientas sugeridas

- GA4 + eventos `generate_lead` / `click_cta_asesoria`
- Opcional: Cloudflare/Vercel Edge A/B o herramienta dedicada cuando el dominio esté en producción

## Primer experimento recomendado

Empezar por **#1 Titular**: máximo impacto según la guía y el informe de cumplimiento.
