import type { Metadata } from "next";
import NotFoundScreen from "@/screens/NotFoundScreen";

export const metadata: Metadata = {
  title: "Página no encontrada",
  description:
    "La página que busca no existe. Vuelva al inicio o solicite asesoría en Trámites Migratorios JVG.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <NotFoundScreen />;
}
