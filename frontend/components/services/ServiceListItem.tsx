import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ServiceItem } from "@/data/content";
import ServiceIcon from "@/components/ui/ServiceIcon";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

interface ServiceListItemProps {
  service: ServiceItem;
  index: number;
  className?: string;
}

function ServiceListItem({ service, index, className }: ServiceListItemProps) {
  const reverse = index % 2 === 1;

  return (
    <Reveal delay={Math.min(index, 4) as 0 | 1 | 2 | 3 | 4}>
      <Link
        href={service.href}
        className={cn(
          "group grid items-center gap-6 rounded-2xl border border-border-subtle bg-surface p-4 shadow-sm transition-[border-color,box-shadow,transform] duration-250 hover:-translate-y-0.5 hover:border-gold hover:shadow-md cursor-pointer md:grid-cols-2 md:gap-10 md:p-6",
          reverse && "md:[&>*:first-child]:order-2",
          className
        )}
      >
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-beige">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            className="object-cover transition-transform duration-500 ease-[var(--ease-fluid)] group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            sizes="(max-width: 768px) 100vw, 45vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-gold/10"
            aria-hidden
          />
          <div className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-xl border border-white/50 bg-surface/95 text-gold-deep backdrop-blur-sm">
            <ServiceIcon name={service.icon} className="h-5 w-5" />
          </div>
        </div>

        <div className="min-w-0 px-1 pb-2 md:px-2 md:pb-0">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">
            0{index + 1}
          </p>
          <h2 className="mt-2 font-serif text-2xl font-medium text-ink md:text-[1.75rem]">
            {service.title}
          </h2>
          <p className="mt-3 text-muted text-pretty">{service.description}</p>
          <span className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink transition-colors duration-200 group-hover:text-gold-deep">
            Conocer más
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden
            />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export default ServiceListItem;
