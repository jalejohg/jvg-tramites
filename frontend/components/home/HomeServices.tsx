import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
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
        href={service.href ?? "/servicios"}
        className="group flex h-full flex-col overflow-hidden border border-border bg-surface transition-[border-color,box-shadow,transform] duration-250 ease-[var(--ease-fluid)] hover:-translate-y-0.5 hover:border-gold hover:shadow-md cursor-pointer"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-warm">
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
          <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center border border-white/40 bg-surface/90 text-gold-deep backdrop-blur-sm">
            <ServiceIcon name={service.icon} className="h-5 w-5" />
          </div>
        </div>
        <div className="flex flex-1 flex-col p-5 md:p-6">
          <h3 className="font-serif text-xl font-medium text-ink">
            {service.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted text-pretty">
            {service.value}
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
    <section className="bg-bg py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHead
            eyebrow="Servicios"
            title="Cinco soluciones, un mismo compromiso"
            description="Desde los trámites migratorios en México hasta la apostilla, la homologación y el soporte familiar: un portafolio integral."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <HomeServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
        <Reveal className="mt-10">
          <Link
            href="/servicios"
            className="inline-flex min-h-11 items-center gap-2 font-semibold text-ink underline-offset-4 hover:text-gold-deep hover:underline cursor-pointer"
          >
            Ver todos los servicios
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
