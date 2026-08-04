import { organizationAreaServed } from "@/lib/coverage";
import { SITE, SITE_URL, waLink } from "@/lib/siteConfig";

/**
 * Datos estructurados Organization / ProfessionalService (JSON-LD).
 * Google recomienda JSON-LD para resultados enriquecidos.
 */
export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": `${SITE_URL}/#organization`,
        name: SITE.name,
        alternateName: SITE.shortName,
        url: SITE_URL,
        logo: `${SITE_URL}${SITE.logo}`,
        image: `${SITE_URL}${SITE.ogImage}`,
        description: SITE.description,
        email: SITE.email,
        telephone: SITE.phoneDisplay,
        slogan: SITE.slogan,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ciudad de México",
          addressRegion: "CDMX",
          addressCountry: "MX",
        },
        sameAs: [SITE.facebookGroup, SITE.facebookProfile].filter(Boolean),
        knowsAbout: [
          "Legalización y apostilla de documentos civiles y académicos",
          "Homologación y validación de títulos universitarios",
          "Asesoría consular y acompañamiento en procesos migratorios",
          "Gestión territorial de trámites en el terreno",
          "Remesas seguras y telecomunicaciones",
        ],
        areaServed: organizationAreaServed(),
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer service",
            telephone: SITE.phoneDisplay,
            email: SITE.email,
            availableLanguage: ["Spanish"],
            url: waLink(),
            areaServed: ["MX", "CU"],
          },
        ],
        founder: {
          "@type": "Person",
          name: `${SITE.directorCourtesy} ${SITE.director}`,
          jobTitle: SITE.directorRole,
          image: `${SITE_URL}${SITE.directorImage}`,
          url: `${SITE_URL}/nosotros`,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE.name,
        description: SITE.description,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "es-MX",
        about: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
