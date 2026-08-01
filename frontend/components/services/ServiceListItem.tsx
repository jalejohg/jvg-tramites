import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ServiceItem } from "@/data/content";
import ServiceIcon from "@/components/ui/ServiceIcon";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { CONTACT_FORM_HREF } from "@/lib/siteConfig";

interface ServiceListItemProps {
  service: ServiceItem;
  index: number;
  className?: string;
}

function ServiceListItem({ service, index, className }: ServiceListItemProps) {
  const href = service.href ?? CONTACT_FORM_HREF;  const isDetail = Boolean(service.href);
  const reverse = index % 2 === 1;

  return (
    <Reveal delay={Math.min(index, 4) as 0 | 1 | 2 | 3 | 4}>
      <article
        className={cn(
          "group grid items-center gap-6 border border-border bg-surface p-4 transition-[border-color,box-shadow] duration-250 hover:border-gold hover:shadow-md md:grid-cols-2 md:gap-10 md:p-6",
          reverse && "md:[&>*:first-child]:order-2",
          className
        )}
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-warm">
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
          <div className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center border border-white/50 bg-surface/95 text-gold-deep backdrop-blur-sm">
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
          {service.highlights && (
            <ul className="mt-3 space-y-1.5 text-sm text-ink">
              {service.highlights.map((item) => (
                <li key={item} className="border-l-2 border-gold pl-2.5">
                  {item}
                </li>
              ))}
            </ul>
          )}
          <p className="mt-3 border-l-2 border-gold pl-3 text-sm font-medium text-ink/85">
            {service.value}
          </p>
          <Link
            href={href}
            className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink transition-colors duration-200 hover:text-gold-deep cursor-pointer"
          >
            {isDetail ? "Conocer más" : "Solicitar asesoría"}
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}

export default ServiceListItem;
