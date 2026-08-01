/**
 * Configuración central del sitio Trámites Migratorios JVG.
 * Fuente de verdad: cuestionario de descubrimiento + material promocional WhatsApp.
 * El sitio web se está creando ahora: no publicar URL de dominio antiguo.
 */

export const SITE = {
  name: "Trámites Migratorios JVG",
  shortName: "JVG",
  /** Slogan oficial del logotipo en /public/logo.png */
  slogan: "Tu camino, nuestro compromiso.",
  /** Frase de posicionamiento del material promocional (enfoque México). */
  taglineMexico: "Su futuro en México está en manos expertas.",
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
  address: "Ave Polanco, AGENCY GLOBAL PASS",
  /** Approx. Polanco / CDMX — solo referencia de mapa hasta tener calle completa. */
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

const DEFAULT_WA_TEXT =
  "Hola, vengo del sitio web de Trámites Migratorios JVG y me gustaría solicitar asesoría.";

export function waLink(text: string = DEFAULT_WA_TEXT): string {
  return `https://wa.me/${SITE.waNumber}?text=${encodeURIComponent(text)}`;
}

export const telLink = `tel:${SITE.phoneDisplay.replace(/\s/g, "")}`;
export const mailLink = `mailto:${SITE.email}`;

/** Ancla del formulario en /contacto — usar en CTAs de «Solicitar asesoría». */
export const CONTACT_FORM_ID = "formulario";
export const CONTACT_FORM_HREF = `/contacto#${CONTACT_FORM_ID}`;

export function mapsEmbedUrl(): string {
  const q = encodeURIComponent(SITE.address);
  return `https://www.google.com/maps?q=${q}&output=embed`;
}

export function mapsLink(): string {
  const q = encodeURIComponent(SITE.address);
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}
