import type { Metadata } from "next";
import NosotrosScreen from "@/screens/NosotrosScreen";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conozca la historia de Trámites Migratorios JVG y a Lic. Josue Vega Gómez, especialista en trámites migratorios.",
};

export default function NosotrosPage() {
  return <NosotrosScreen />;
}
