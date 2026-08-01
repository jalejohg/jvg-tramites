import type { Metadata } from "next";
import TerminosScreen from "@/screens/TerminosScreen";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description:
    "Términos y condiciones de uso del sitio y marco general de los servicios de consultoría jurídica y gestoría migratoria de Trámites Migratorios JVG.",
};

export default function TerminosPage() {
  return <TerminosScreen />;
}
