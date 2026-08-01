import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import SiteHeader from "@/components/chrome/SiteHeader";
import SiteFooter from "@/components/chrome/SiteFooter";
import WhatsAppFloat from "@/components/chrome/WhatsAppFloat";
import { SITE } from "@/lib/siteConfig";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} · ${SITE.slogan}`,
    template: `%s · ${SITE.name}`,
  },
  description:
    "Consultoría jurídica y trámites migratorios. Especialistas en México, legalización, homologación y soporte familiar con gestión en Cienfuegos.",
  openGraph: {
    title: SITE.name,
    description: SITE.slogan,
    locale: "es",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg font-sans text-ink">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
