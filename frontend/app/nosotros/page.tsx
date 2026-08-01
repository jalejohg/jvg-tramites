import type { Metadata } from "next";
import NosotrosScreen from "@/screens/NosotrosScreen";
import PageJsonLd from "@/components/seo/PageJsonLd";
import { buildPageMetadata, absoluteUrl } from "@/lib/seo";
import { SITE } from "@/lib/siteConfig";

const PATH = "/nosotros";
const TITLE = "Nosotros · Lic. Josue Vega Gómez";
const DESCRIPTION =
  "Conozca Trámites Migratorios JVG: firma jurídica con especialidad migratoria en México, gestión en Cienfuegos y dirección del Lic. Josue Vega Gómez.";

export const metadata: Metadata = buildPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

export default function NosotrosPage() {
  const personSchema = {
    "@type": "Person",
    "@id": `${absoluteUrl(PATH)}#director`,
    name: `${SITE.directorCourtesy} ${SITE.director}`,
    jobTitle: SITE.directorRole,
    image: absoluteUrl(SITE.directorImage),
    worksFor: { "@id": `${absoluteUrl("/")}#organization` },
    url: absoluteUrl(PATH),
    knowsAbout: [
      "Trámites migratorios",
      "Homologación de títulos",
      "Apostilla y legalización",
      "Derecho migratorio México",
    ],
  };

  return (
    <>
      <PageJsonLd data={personSchema} />
      <NosotrosScreen />
    </>
  );
}
