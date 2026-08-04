import { Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionAtmosphere from "@/components/ui/SectionAtmosphere";
import SectionHead from "@/components/ui/SectionHead";
import { TESTIMONIALS, type Testimonial } from "@/data/content";

function QuoteCard({ item, index }: { item: Testimonial; index: number }) {
  return (
    <Reveal delay={Math.min(index, 4) as 0 | 1 | 2 | 3 | 4} as="blockquote">
      <div className="flex h-full flex-col rounded-xl border border-border-subtle bg-surface p-6 shadow-sm md:p-7">
        <Quote
          className="h-8 w-8 text-gold-deep/80"
          aria-hidden
          strokeWidth={1.5}
        />
        <p className="mt-4 flex-1 font-serif text-lg leading-relaxed text-ink text-pretty italic">
          «{item.quote}»
        </p>
        <footer className="mt-6 border-t border-border-subtle pt-5">
          <cite className="not-italic">
            <span className="block text-sm font-semibold text-ink">
              {item.name}
            </span>
            <span className="text-sm text-muted">{item.role}</span>
          </cite>
        </footer>
      </div>
    </Reveal>
  );
}

export default function HomeTestimonials() {
  return (
    <section
      className="relative overflow-hidden bg-bg py-20 md:py-28"
      aria-labelledby="testimonials-heading"
    >
      <SectionAtmosphere mirror />
      <Container className="relative">
        <Reveal>
          <SectionHead
            eyebrow="Voces"
            title="Lo que dicen quienes nos confían su caso"
            description="Testimonios reales de profesionales y familias acompañadas por JVG."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3 md:gap-6">
          {TESTIMONIALS.map((item, i) => (
            <QuoteCard key={item.name} item={item} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
