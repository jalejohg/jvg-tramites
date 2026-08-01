import type { Metadata } from "next";
import TerminosScreen from "@/screens/TerminosScreen";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description: "Términos y condiciones provisionales de Trámites Migratorios JVG.",
};

export default function TerminosPage() {
  return <TerminosScreen />;
}
