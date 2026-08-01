import type { Metadata } from "next";
import ProcesoScreen from "@/screens/ProcesoScreen";
import PageJsonLd from "@/components/seo/PageJsonLd";
import { PROCESS_STEPS } from "@/data/content";
import { buildPageMetadata, absoluteUrl } from "@/lib/seo";
import { SITE } from "@/lib/siteConfig";

const PATH = "/proceso";
const TITLE = "Proceso de trámites migratorios paso a paso";
const DESCRIPTION =
  "Contacto, evaluación de viabilidad, gestión con seguimiento y entrega: cuatro pasos claros para acompañar su trámite migratorio con transparencia.";

export const metadata: Metadata = buildPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

export default function ProcesoPage() {
  const howToSchema = {
    "@type": "HowTo",
    "@id": `${absoluteUrl(PATH)}#howto`,
    name: "Cómo tramitar con Trámites Migratorios JVG",
    description: DESCRIPTION,
    url: absoluteUrl(PATH),
    inLanguage: "es-MX",
    step: PROCESS_STEPS.map((step) => ({
      "@type": "HowToStep",
      position: step.step,
      name: step.title,
      text: step.description,
      url: `${absoluteUrl(PATH)}#paso-${step.step}`,
    })),
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: absoluteUrl("/"),
    },
  };

  return (
    <>
      <PageJsonLd data={howToSchema} />
      <ProcesoScreen />
    </>
  );
}
