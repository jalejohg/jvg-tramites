import type { Metadata } from "next";
import ContactoScreen from "@/screens/ContactoScreen";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Solicite asesoría con nuestro formulario o WhatsApp. Le contactaremos con claridad sobre su caso.",
};

export default function ContactoPage() {
  return <ContactoScreen />;
}
