import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/sections/PageHero";
import PhotoCta from "@/components/sections/PhotoCta";
import SectionAtmosphere from "@/components/ui/SectionAtmosphere";
import type { ServiceItem } from "@/data/content";

interface ServiceDetailScreenProps {
  service: ServiceItem;
}

export default function ServiceDetailScreen({
  service,
}: ServiceDetailScreenProps) {
  const { detail } = service;

  return (
    <main id="contenido-principal">
      <PageHero
        eyebrow={detail.eyebrow}
        title={service.title}
        description={detail.heroDescription}
        tone="warm"
        imageSrc={service.image}
        imageAlt={service.imageAlt}
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Servicios", href: "/servicios" },
          { label: detail.breadcrumbLabel },
        ]}
      />

      <section className="relative overflow-hidden bg-surface py-16 md:py-24">
        <SectionAtmosphere />
        <Container className="relative">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border-subtle shadow-sm">
                <Image
                  src={detail.introImage}
                  alt={detail.introImageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-gold/20 via-transparent to-transparent"
                  aria-hidden
                />
              </div>
            </Reveal>
            <Reveal delay={1}>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                {detail.introEyebrow}
              </p>
              <h2 className="mt-2 font-serif text-2xl font-medium text-ink md:text-3xl">
                {detail.introTitle}
              </h2>
              {detail.introParagraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-4 text-muted text-pretty leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
              <ul className="mt-6 space-y-2 text-sm text-ink">
                {detail.introPoints.map((item) => (
                  <li key={item} className="border-l-2 border-gold pl-3">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-l-2 border-gold pl-3 text-sm font-medium leading-relaxed text-ink/85 text-pretty">
                {service.value}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden border-y border-border-subtle bg-bg py-16 md:py-24">
        <SectionAtmosphere mirror />
        <Container className="relative">
          <Reveal>
            <h2 className="font-serif text-2xl font-medium text-ink md:text-3xl">
              {detail.audiencesTitle}
            </h2>
            <p className="mt-3 max-w-2xl text-muted">
              {detail.audiencesDescription}
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {detail.audiences.map((item, i) => (
              <Reveal
                key={item.title}
                delay={Math.min(i, 4) as 0 | 1 | 2 | 3 | 4}
              >
                <article className="group h-full overflow-hidden rounded-xl border border-border-subtle bg-surface shadow-sm transition-[border-color,box-shadow] duration-250 hover:border-gold hover:shadow-md">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-xl text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted text-pretty">
                      {item.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <PhotoCta
        imageSrc={detail.photoCtaImage}
        title={detail.photoCtaTitle}
        description={detail.photoCtaDescription}
        secondaryHref="/servicios"
        secondaryLabel="Ver todos los servicios"
      />
    </main>
  );
}
