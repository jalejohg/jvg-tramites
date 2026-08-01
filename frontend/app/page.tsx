import type { Metadata } from "next";
import HomeScreen from "@/screens/HomeScreen";

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "Trámites Migratorios JVG: profesionalismo jurídico y calidez humana para legalizar sus metas y mantenerle conectado con los suyos.",
};

export default function HomePage() {
  return <HomeScreen />;
}
