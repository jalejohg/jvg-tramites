import type { Metadata } from "next";
import ProcesoScreen from "@/screens/ProcesoScreen";

export const metadata: Metadata = {
  title: "Proceso",
  description:
    "Contacto, evaluación de viabilidad, gestión con seguimiento y entrega: así acompañamos su trámite.",
};

export default function ProcesoPage() {
  return <ProcesoScreen />;
}
