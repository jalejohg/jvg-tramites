import type { Metadata } from "next";
import ServiciosScreen from "@/screens/ServiciosScreen";
import PageJsonLd from "@/components/seo/PageJsonLd";
import { SERVICES } from "@/data/content";
import { organizationAreaServed } from "@/lib/coverage";
import { buildPageMetadata, absoluteUrl } from "@/lib/seo";
import { SITE } from "@/lib/siteConfig";

const PATH = "/servicios";
const TITLE = "Servicios de consultoría jurídica y gestión documental";
const DESCRIPTION =
  "Legalización y apostilla, homologación de títulos, asesoría consular y migratoria, gestión en el terreno y soporte familiar. Un solo interlocutor de confianza.";

export const metadata: Metadata = buildPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

export default function ServiciosPage() {
  const serviceSchema = {
    "@type": "ItemList",
    "@id": `${absoluteUrl(PATH)}#services`,
    name: TITLE,
    description: DESCRIPTION,
    url: absoluteUrl(PATH),
    numberOfItems: SERVICES.length,
    itemListElement: SERVICES.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: { "@id": `${absoluteUrl("/")}#organization` },
        areaServed: organizationAreaServed(),
        url: absoluteUrl(service.href ?? PATH),
        image: absoluteUrl(service.image),
      },
    })),
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: absoluteUrl("/"),
    },
  };

  return (
    <>
      <PageJsonLd data={serviceSchema} />
      <ServiciosScreen />
    </>
  );
}
