import type { Metadata } from "next";
import HomologacionScreen from "@/screens/HomologacionScreen";
import PageJsonLd from "@/components/seo/PageJsonLd";
import { buildPageMetadata, absoluteUrl } from "@/lib/seo";
import { SITE } from "@/lib/siteConfig";

const PATH = "/homologacion";
const TITLE = "Homologación de títulos universitarios en el exterior";
const DESCRIPTION =
  "Homologación y validación de títulos universitarios para ejercer en España, EE. UU., México y otros países. Armado de expediente y seguimiento claro.";

export const metadata: Metadata = buildPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

export default function HomologacionPage() {
  const serviceSchema = {
    "@type": "Service",
    "@id": `${absoluteUrl(PATH)}#service`,
    name: "Homologación de títulos universitarios",
    description: DESCRIPTION,
    url: absoluteUrl(PATH),
    serviceType: "Homologación y validación de títulos",
    provider: { "@id": `${absoluteUrl("/")}#organization` },
    areaServed: [
      { "@type": "Country", name: "México" },
      { "@type": "Country", name: "España" },
      { "@type": "Country", name: "Estados Unidos" },
    ],
    audience: {
      "@type": "Audience",
      audienceType: "Profesionales con estudios superiores",
    },
    brand: {
      "@type": "Organization",
      name: SITE.name,
    },
  };

  return (
    <>
      <PageJsonLd data={serviceSchema} />
      <HomologacionScreen />
    </>
  );
}
