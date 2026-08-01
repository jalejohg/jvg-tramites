import type { Metadata } from "next";
import HomeScreen from "@/screens/HomeScreen";
import { SITE } from "@/lib/siteConfig";

export const metadata: Metadata = {
  /** Evita "Inicio · …" en la pestaña; el home usa el título canónico del sitio. */
  title: {
    absolute: SITE.titleDefault,
  },
  description: SITE.description,
};

export default function HomePage() {
  return <HomeScreen />;
}
