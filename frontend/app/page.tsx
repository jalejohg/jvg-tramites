import type { Metadata } from "next";
import HomeScreen from "@/screens/HomeScreen";
import { buildPageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/siteConfig";

export const metadata: Metadata = buildPageMetadata({
  title: SITE.titleDefault,
  description: SITE.description,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return <HomeScreen />;
}
