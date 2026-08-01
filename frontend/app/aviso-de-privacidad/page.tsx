import type { Metadata } from "next";
import AvisoPrivacidadScreen from "@/screens/AvisoPrivacidadScreen";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description:
    "Aviso de privacidad de Trámites Migratorios JVG: tratamiento de datos personales conforme a la LFPDPPP para consultoría jurídica y trámites migratorios.",
};

export default function AvisoPrivacidadPage() {
  return <AvisoPrivacidadScreen />;
}
