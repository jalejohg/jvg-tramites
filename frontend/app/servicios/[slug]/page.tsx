import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailScreen from "@/screens/ServiceDetailScreen";
import PageJsonLd from "@/components/seo/PageJsonLd";
import { SERVICES, getServiceBySlug } from "@/data/content";
import { organizationAreaServed } from "@/lib/coverage";
import { buildPageMetadata, absoluteUrl } from "@/lib/seo";
import { SITE } from "@/lib/siteConfig";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return buildPageMetadata({
    title: service.detail.seoTitle,
    description: service.detail.seoDescription,
    path: service.href,
  });
}

export default async function ServicioDetallePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const serviceSchema = {
    "@type": "Service",
    "@id": `${absoluteUrl(service.href)}#service`,
    name: service.title,
    description: service.detail.seoDescription,
    url: absoluteUrl(service.href),
    serviceType: service.title,
    image: absoluteUrl(service.image),
    provider: { "@id": `${absoluteUrl("/")}#organization` },
    areaServed: [
      ...organizationAreaServed(),
      { "@type": "Country", name: "España" },
      { "@type": "Country", name: "Estados Unidos" },
    ],
    brand: {
      "@type": "Organization",
      name: SITE.name,
    },
  };

  return (
    <>
      <PageJsonLd data={serviceSchema} />
      <ServiceDetailScreen service={service} />
    </>
  );
}
