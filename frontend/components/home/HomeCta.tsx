import {
  Globe2,
  Scale,
  Shuffle,
  type LucideIcon,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionAtmosphere from "@/components/ui/SectionAtmosphere";
import { CONTACT_FORM_HREF, SITE, waLink } from "@/lib/siteConfig";

const BENEFITS: { title: string; Icon: LucideIcon }[] = [
  { title: "Gestión integral", Icon: Shuffle },
  { title: "Respaldo legal", Icon: Scale },
  { title: "Alcance internacional", Icon: Globe2 },
];

function CtaBenefitItem({
  title,
  Icon,
  index,
}: {
  title: string;
  Icon: LucideIcon;
  index: number;
}) {
  return (
    <Reveal delay={Math.min(index + 1, 4) as 0 | 1 | 2 | 3 | 4}>
      <div className="flex items-center gap-3">
        <span className="gold-orb flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <p className="text-sm font-semibold text-ink md:text-base">{title}</p>
      </div>
    </Reveal>
  );
}

/**
 * CTA pre-footer en canvas claro — deja el ink exclusivo al footer
 * (evita dos franjas oscuras seguidas).
 */
export default function HomeCta() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative overflow-hidden border-t border-border-subtle bg-bg py-16 md:py-20"
    >
      <SectionAtmosphere />
      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
          <Reveal>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep [text-shadow:none]">
              Dé el siguiente paso
            </p>
            <h2
              id="cta-heading"
              className="mt-3 max-w-xl font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium leading-[1.15] text-ink text-balance"
            >
              Cuéntenos su caso. Le respondemos con claridad y respeto.
            </h2>
            <p className="mt-4 max-w-lg text-muted text-pretty">
              {SITE.slogan} Solicite asesoría o escríbanos por WhatsApp.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={CONTACT_FORM_HREF}>Solicitar asesoría</Button>
              <Button href={waLink()} variant="secondary">
                WhatsApp
              </Button>
            </div>
          </Reveal>

          <ul className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
            {BENEFITS.map((item, i) => (
              <li key={item.title}>
                <CtaBenefitItem title={item.title} Icon={item.Icon} index={i} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
