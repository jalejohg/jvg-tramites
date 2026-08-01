import type { Metadata } from "next";
import ContactoScreen from "@/screens/ContactoScreen";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contacto · Solicitar asesoría migratoria",
  description:
    "Solicite asesoría migratoria por formulario paso a paso o WhatsApp. Respuesta humana, evaluación de viabilidad y orientación clara sobre su caso.",
  path: "/contacto",
});

export default function ContactoPage() {
  return <ContactoScreen />;
}
