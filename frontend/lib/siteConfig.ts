/**
 * Configuración del sitio — alimentada desde la base de conocimiento.
 * Editar datos de agencia en `data/knowledge-base.json`.
 */
import { knowledgeBase } from "@/data/knowledgeBase";

const { site, waDefaultMessage, contactFormId } = knowledgeBase;

/** URL canónica de producción. Sobrescribir con NEXT_PUBLIC_SITE_URL al desplegar. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? site.defaultSiteUrl
).replace(/\/$/, "");

export const SITE = {
  name: site.name,
  shortName: site.shortName,
  logo: site.logo,
  ogImage: site.ogImage,
  slogan: site.slogan,
  taglineMexico: site.taglineMexico,
  titleDefault: site.titleDefault,
  description: site.description,
  keywords: site.keywords,
  director: site.director,
  directorCourtesy: site.directorCourtesy,
  directorRole: site.directorRole,
  directorImage: site.directorImage,
  tenantId: site.tenantId,
  waNumber: site.waNumber,
  phoneDisplay: site.phoneDisplay,
  email: site.email,
  address: site.address,
  facebookProfile: site.facebookProfile,
  facebookGroup: site.facebookGroup,
  locationLabel: site.locationLabel,
  locationSummary: site.locationSummary,
  mexicoCoverage: site.mexicoCoverage,
  cubaProvinces: site.cubaProvinces,
} as const;

/** Mensaje precargado al abrir el chat de WhatsApp desde el sitio. */
export const WA_DEFAULT_MESSAGE = waDefaultMessage;

export function waLink(text: string = WA_DEFAULT_MESSAGE): string {
  return `https://wa.me/${SITE.waNumber}?text=${encodeURIComponent(text)}`;
}

export const telLink = `tel:${SITE.phoneDisplay.replace(/\s/g, "")}`;
export const mailLink = `mailto:${SITE.email}`;

/** Ancla del formulario en /contacto — usar en CTAs de «Solicitar asesoría». */
export const CONTACT_FORM_ID = contactFormId;
export const CONTACT_FORM_HREF = `/contacto#${CONTACT_FORM_ID}`;

/** Metadata canónica compartida por páginas. */
export function pageCanonical(path: string): { canonical: string } {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return { canonical: `${SITE_URL}${normalized === "/" ? "" : normalized}` };
}
