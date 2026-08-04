import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionAtmosphere from "@/components/ui/SectionAtmosphere";
import ServiceIcon from "@/components/ui/ServiceIcon";
import { SERVICES } from "@/data/content";

function HomeServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  return (
    <Reveal delay={Math.min(index, 4) as 0 | 1 | 2 | 3 | 4}>
      <Link
        href={service.href}
        className="group flex h-full flex-col overflow-hidden rounded-xl border border-border-subtle bg-surface shadow-sm transition-[border-color,box-shadow,transform] duration-250 ease-[var(--ease-fluid)] hover:-translate-y-0.5 hover:border-gold hover:shadow-md cursor-pointer"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-beige">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            className="object-cover transition-transform duration-500 ease-[var(--ease-fluid)] group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent"
            aria-hidden
          />
          <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl border border-white/40 bg-surface/90 text-gold-deep backdrop-blur-sm">
            <ServiceIcon name={service.icon} className="h-5 w-5" />
          </div>
        </div>
        <div className="flex flex-1 flex-col p-5 md:p-6">
          <h3 className="font-serif text-xl font-medium text-ink">
            {service.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted text-pretty">
            {service.description}
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink group-hover:text-gold-deep">
            Ver más
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export default function HomeServices() {
  return (
    <section className="relative overflow-hidden bg-bg py-20 md:py-28">
      <SectionAtmosphere mirror />
      <Container className="relative">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal className="max-w-2xl">
            <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
              Qué hacemos
            </p>
            <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium leading-[1.15] text-ink text-balance">
              Cinco soluciones, un mismo compromiso
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted text-pretty md:text-lg">
              Legalización y apostilla, homologación, asesoría consular, gestión
              en el terreno y soporte familiar — con un solo interlocutor.
            </p>
          </Reveal>
          <Reveal delay={1} className="shrink-0">
            <Button href="/servicios" variant="secondary">
              Ver todos
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <HomeServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
