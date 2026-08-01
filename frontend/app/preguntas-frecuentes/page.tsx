import type { Metadata } from "next";
import FaqScreen from "@/screens/FaqScreen";
import PageJsonLd from "@/components/seo/PageJsonLd";
import { FAQ_ITEMS } from "@/data/faq";
import { buildPageMetadata, absoluteUrl } from "@/lib/seo";
import { SITE } from "@/lib/siteConfig";

const PATH = "/preguntas-frecuentes";
const TITLE = "Preguntas frecuentes sobre trámites migratorios";
const DESCRIPTION =
  "Respuestas sobre trámites migratorios a México, apostilla, homologación de títulos, plazos y cómo solicitar asesoría con Trámites Migratorios JVG.";

export const metadata: Metadata = buildPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

export default function PreguntasFrecuentesPage() {
  const faqSchema = {
    "@type": "FAQPage",
    "@id": `${absoluteUrl(PATH)}#faq`,
    url: absoluteUrl(PATH),
    name: TITLE,
    description: DESCRIPTION,
    isPartOf: { "@id": `${absoluteUrl("/")}#website` },
    about: { "@id": `${absoluteUrl("/")}#organization` },
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
    inLanguage: "es-MX",
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: absoluteUrl("/"),
    },
  };

  return (
    <>
      <PageJsonLd data={faqSchema} />
      <FaqScreen />
    </>
  );
}
