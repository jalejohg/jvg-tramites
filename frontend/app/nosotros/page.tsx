import type { Metadata } from "next";
import NosotrosScreen from "@/screens/NosotrosScreen";
import PageJsonLd from "@/components/seo/PageJsonLd";
import { buildPageMetadata, absoluteUrl } from "@/lib/seo";
import { SITE } from "@/lib/siteConfig";

const PATH = "/nosotros";
const TITLE = "Nosotros · Lic. Josue Vega Gómez";
const DESCRIPTION =
  "Conozca Trámites Migratorios JVG: firma jurídica mexicana con sede en Ciudad de México, atención en las principales ciudades de Cuba y dirección del Lic. Josue Vega Gómez.";

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
      "Legalización y apostilla de documentos",
      "Homologación y validación de títulos universitarios",
      "Asesoría consular y procesos migratorios",
      "Gestión territorial de trámites",
      "Soporte logístico familiar",
    ],
  };

  return (
    <>
      <PageJsonLd data={personSchema} />
      <NosotrosScreen />
    </>
  );
}
