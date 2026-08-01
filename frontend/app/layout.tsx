import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import SiteHeader from "@/components/chrome/SiteHeader";
import SiteFooter from "@/components/chrome/SiteFooter";
import SkipLink from "@/components/chrome/SkipLink";
import WhatsAppFloat from "@/components/chrome/WhatsAppFloat";
import JsonLd from "@/components/seo/JsonLd";
import WebVitals from "@/components/seo/WebVitals";
import Analytics from "@/components/seo/Analytics";
import { SITE, SITE_URL } from "@/lib/siteConfig";
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
  metadataBase: new URL(SITE_URL),
  applicationName: SITE.name,
  title: {
    default: SITE.titleDefault,
    /** Corto para SERP ≤ ~60–65 chars en páginas interiores. */
    template: `%s · ${SITE.shortName}`,
  },
  description: SITE.description,
  keywords: [...SITE.keywords],
  authors: [{ name: `${SITE.directorCourtesy} ${SITE.director}` }],
  creator: SITE.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE.titleDefault,
    description: SITE.description,
    siteName: SITE.name,
    locale: "es_MX",
    type: "website",
    url: SITE_URL,
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE.directorCourtesy} ${SITE.director} · ${SITE.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.titleDefault,
    description: SITE.description,
    images: [SITE.ogImage],
  },
  robots: {
    index: true,
    follow: true,
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
        <SkipLink />
        <JsonLd />
        <Analytics />
        <WebVitals />
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
