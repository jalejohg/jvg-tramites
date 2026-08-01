interface PageJsonLdProps {
  /** Objeto o array Schema.org (se serializa a JSON-LD). */
  data: Record<string, unknown> | Record<string, unknown>[];
}

/**
 * Inyecta JSON-LD de página (FAQPage, HowTo, Service, BreadcrumbList, etc.).
 */
export default function PageJsonLd({ data }: PageJsonLdProps) {
  const payload = Array.isArray(data)
    ? { "@context": "https://schema.org", "@graph": data }
    : { "@context": "https://schema.org", ...data };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
