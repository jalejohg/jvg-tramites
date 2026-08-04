import type { Metadata } from "next";
import HomologacionRedirect from "@/components/seo/HomologacionRedirect";
import { buildPageMetadata } from "@/lib/seo";

const CANONICAL = "/servicios/homologacion";

export const metadata: Metadata = buildPageMetadata({
  title: "Homologación y validación de títulos universitarios",
  description:
    "Asesoría técnica y armado del expediente para homologar, validar o revalidar títulos universitarios en el exterior.",
  path: CANONICAL,
  noIndex: true,
});

export default function HomologacionPage() {
  return <HomologacionRedirect />;
}
