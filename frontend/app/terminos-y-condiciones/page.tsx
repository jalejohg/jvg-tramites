import type { Metadata } from "next";
import TerminosScreen from "@/screens/TerminosScreen";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Términos y condiciones de uso",
  description:
    "Términos y condiciones de uso del sitio web y marco general de los servicios de consultoría jurídica y gestoría migratoria de Trámites Migratorios JVG.",
  path: "/terminos-y-condiciones",
});

export default function TerminosPage() {
  return <TerminosScreen />;
}
