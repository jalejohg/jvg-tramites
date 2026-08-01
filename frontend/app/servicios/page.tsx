import type { Metadata } from "next";
import ServiciosScreen from "@/screens/ServiciosScreen";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Trámites migratorios en México, legalización y apostilla, homologación de títulos, gestión en Cienfuegos y soporte de remesas.",
};

export default function ServiciosPage() {
  return <ServiciosScreen />;
}
