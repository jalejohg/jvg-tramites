/**
 * Configuración central del sitio Trámites Migratorios JVG.
 * Fuente de verdad: cuestionario de descubrimiento + material promocional WhatsApp.
 * El sitio web se está creando ahora: no publicar URL de dominio antiguo.
 */

export const SITE = {
  name: "Trámites Migratorios JVG",
  shortName: "JVG",
  /** Logotipo oficial (public/logo_oficial.png). */
  logo: "/logo_oficial.png",
  /** Slogan oficial del logotipo. */
  slogan: "Tu camino, nuestro compromiso.",
  /** Frase de posicionamiento del material promocional (enfoque México). */
  taglineMexico: "Su futuro en México está en manos expertas.",
  /**
   * SEO: título por defecto (pestaña / SERP cuando no hay título de página).
   * Las rutas hijas usan el template `%s · ${SITE.name}`.
   */
  titleDefault: "Trámites Migratorios JVG · Tu camino, nuestro compromiso",
  /**
   * SEO: meta description del sitio (~155 caracteres).
   * Orientada a búsqueda: consultoría, México, documentos, homologación.
   */
  description:
    "Consultoría jurídica y trámites migratorios: México, legalización, apostilla, homologación de títulos y soporte familiar, con gestión en Cienfuegos.",
  /** Palabras clave de apoyo (Google ya no las usa como ranking; útiles para otros motores / coherencia). */
  keywords: [
    "trámites migratorios",
    "consultoría jurídica",
    "residencia México",
    "apostilla",
    "legalización de documentos",
    "homologación de títulos",
    "Cienfuegos",
    "JVG",
  ],
  director: "Josue Vega Gómez",
  directorCourtesy: "Lic.",
  directorRole:
    "Licenciado en Derecho · Especialista en Trámites Migratorios",
  /** Retrato oficial del director (public/director.jpg). */
  directorImage: "/director.jpg",
  /** Slug de tenant para el endpoint de contacto (si aplica). */
  tenantId: "jvg",

  /** WhatsApp / teléfono (material promocional). Formato wa.me sin + ni espacios. */
  waNumber: "524951069969",
  /** Formato canónico más frecuente en flyers. */
  phoneDisplay: "+52 495 106 9969",
  /** Correo del material promocional. */
  email: "josuevevagomez88@gmail.com",
  /** Ubicación de contacto citada en flyers (calle exacta pendiente). */
  address: "Ave Polanco, AGENCY GLOBAL PASS, Ciudad de México",
  /** Polanco / Ciudad de México — pin del mapa embebido. */
  mapCoords: { lat: 19.4338, lng: -99.1947 },
  /**
   * Perfil de Facebook: el cuestionario cita «Josue Vega Gomez» sin URL exacta.
   * Vacío hasta confirmar el enlace real.
   */
  facebookProfile: "",
  facebookGroup: "https://www.facebook.com/groups/941897664039041/",
  /** Presencial CDMX + virtual México (flyers) · operación Cienfuegos (cuestionario). */
  locationLabel:
    "CDMX presencial · Virtual en México · Gestión en Cienfuegos",
} as const;

/** Mensaje precargado al abrir el chat de WhatsApp desde el sitio. */
export const WA_DEFAULT_MESSAGE =
  "Hola, vengo del sitio web de Trámites Migratorios JVG y me gustaría solicitar asesoría.";

export function waLink(text: string = WA_DEFAULT_MESSAGE): string {
  return `https://wa.me/${SITE.waNumber}?text=${encodeURIComponent(text)}`;
}

export const telLink = `tel:${SITE.phoneDisplay.replace(/\s/g, "")}`;
export const mailLink = `mailto:${SITE.email}`;

/** Ancla del formulario en /contacto — usar en CTAs de «Solicitar asesoría». */
export const CONTACT_FORM_ID = "formulario";
export const CONTACT_FORM_HREF = `/contacto#${CONTACT_FORM_ID}`;

export function mapsEmbedUrl(): string {
  const { lat, lng } = SITE.mapCoords;
  return `https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`;
}

export function mapsLink(): string {
  const { lat, lng } = SITE.mapCoords;
  return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
}
