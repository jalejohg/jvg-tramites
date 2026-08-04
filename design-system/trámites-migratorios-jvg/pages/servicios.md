# Servicios — catálogo oficial

> Fuente de verdad de negocio: `docs/Cuestionario-de-Descubrimiento-del-Proyecto.md`.  
> Fuente de verdad en código: `frontend/data/knowledge-base.json` → `services`.

## Portafolio (orden canónico)

### 1. Legalización y apostilla de documentos civiles y académicos

Gestión, obtención y tramitación del reconocimiento oficial ante ministerios, MINREX y embajadas/consulados de documentos esenciales (nacimiento, matrimonio, fe de vida, antecedentes penales, títulos educativos).

**Valor:** tranquilidad y validez internacional. Página: `/servicios/legalizacion`.

### 2. Homologación y validación de títulos universitarios

Asesoría técnica y armado del expediente (título, notas, planes de estudio) para homologar, validar o revalidar estudios superiores en el país de destino.

**Valor:** superación y éxito profesional. Página dedicada: `/servicios/homologacion` (redirect desde `/homologacion`).

### 3. Asesoría consular y acompañamiento en procesos migratorios

Consultoría para visados, reunificación familiar y preparación de entrevistas consulares, con análisis de viabilidad según normativa del destino.

**Valor:** certeza y reducción de riesgos. Página: `/servicios/consular-migratorio`.

### 4. Gestión territorial de trámites en el terreno

Equipo operativo en regiones clave (p. ej. Cienfuegos): búsqueda y procesamiento en registros civiles, notarías y archivos locales.

**Valor:** inmediatez y eliminación de distancias. Página: `/servicios/territorial`.

### 5. Soporte logístico familiar: remesas seguras y telecomunicaciones

Coordinación de remesas y recargas de telefonía/conectividad para familiares en el país de origen.

**Valor:** cercanía y bienestar familiar. Página: `/servicios/logistico`.

## Detalle por servicio

Ruta dinámica: `/servicios/[slug]` (`slug` = `id` en `knowledge-base.json`).
Plantilla visual: misma estructura que Homologación (`PageHero` warm → intro 2 col → audiencias → `PhotoCta` → `PageCtaBand`).
Contenido de detalle: campo `detail` en cada servicio.

**Jerarquía de copy:**
- `description`: resumen corto/mediano para cards (catálogo y home).
- `detail` + `value`: detalle completo — párrafos, puntos del servicio y propuesta de valor.

## Copy de sección

- **Intro del portafolio:** Combinamos rigor jurídico con soluciones logísticas para ofrecer total tranquilidad.
- **Home (servicios):** Cinco soluciones, un mismo compromiso — legalización y apostilla, homologación, asesoría consular, gestión en el terreno y soporte familiar.
- No presentar el primer servicio como «trámites migratorios solo en México»; el alcance migratorio es consular/internacional según el cuestionario.
