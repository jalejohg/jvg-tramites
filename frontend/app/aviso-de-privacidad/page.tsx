import type { Metadata } from "next";
import AvisoPrivacidadScreen from "@/screens/AvisoPrivacidadScreen";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Aviso de privacidad · Protección de datos",
  description:
    "Aviso de privacidad de Trámites Migratorios JVG conforme a la LFPDPPP: cómo tratamos sus datos en consultoría jurídica y gestión de trámites migratorios.",
  path: "/aviso-de-privacidad",
});

export default function AvisoPrivacidadPage() {
  return <AvisoPrivacidadScreen />;
}
