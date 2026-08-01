import type { Metadata } from "next";
import { SITE, SITE_URL, pageCanonical } from "@/lib/siteConfig";

export interface PageSeoInput {
  /** Segmento de título (se combina con el template del layout). */
  title: string;
  description: string;
  /** Ruta canónica, p. ej. `/servicios` o `/`. */
  path: string;
  /** Si true, el title no usa el template del layout. */
  absoluteTitle?: boolean;
  /** Imagen OG distinta a la del sitio (ruta absoluta o relativa). */
  ogImage?: string;
  noIndex?: boolean;
}

/**
 * Metadata on-page completa: canonical + Open Graph + Twitter por ruta.
 * Evita que las interiores hereden el título/descripción del home en redes.
 */
export function buildPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  ogImage = SITE.ogImage,
  noIndex = false,
}: PageSeoInput): Metadata {
  const { canonical } = pageCanonical(path);
  const ogTitle = absoluteTitle ? title : `${title} · ${SITE.shortName}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical },
    openGraph: {
      title: ogTitle,
      description,
      url: canonical,
      siteName: SITE.name,
      locale: "es_MX",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${SITE.directorCourtesy} ${SITE.director} · ${SITE.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [ogImage],
    },
    ...(noIndex
      ? { robots: { index: false, follow: true } }
      : {}),
  };
}

/** URL absoluta a un path del sitio. */
export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized === "/" ? "" : normalized}`;
}
