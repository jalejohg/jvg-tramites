import type { Metadata } from "next";
import AvisoPrivacidadScreen from "@/screens/AvisoPrivacidadScreen";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description: "Aviso de privacidad provisional de Trámites Migratorios JVG.",
};

export default function AvisoPrivacidadPage() {
  return <AvisoPrivacidadScreen />;
}
