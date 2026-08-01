import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import SuccessStoryItem from "@/components/home/SuccessStoryItem";
import { SUCCESS_STORIES, TESTIMONIALS, type Testimonial } from "@/data/content";

function QuoteItem({ item, index }: { item: Testimonial; index: number }) {
  return (
    <Reveal delay={Math.min(index, 4) as 0 | 1 | 2 | 3 | 4} as="blockquote">
      <div className="border-l-2 border-l-gold pl-5">
        <p className="font-serif text-lg leading-relaxed text-ink text-pretty italic">
          «{item.quote}»
        </p>
        <footer className="mt-4">
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

/**
 * Storybook visual de entregas reales + testimonios del cliente.
 * Patrón ui-ux-pro-max: Portfolio Grid + Hero/Testimonials social proof.
 */
export default function HomeTestimonials() {
  return (
    <section
      className="relative overflow-hidden border-y border-border bg-surface py-20 md:py-28"
      aria-label="Historias reales de entregas"
    >
      <div
        className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-gold/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-24 h-56 w-56 rounded-full bg-gold-soft/40 blur-3xl"
        aria-hidden
      />

      <Container className="relative">
        <Reveal>
          <SectionHead
            eyebrow="Historias reales"
            title="Resultados que se ven"
            description="Entregas, residencias y acompañamientos reales de familias y profesionales que confían en JVG. La prueba está en cada documento en mano."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-4 md:auto-rows-[minmax(0,auto)] md:gap-x-4 md:gap-y-10">
          {SUCCESS_STORIES.map((story, i) => (
            <SuccessStoryItem key={story.id} story={story} index={i} />
          ))}
        </div>

        <div className="mt-16 border-t border-border pt-12 md:mt-20 md:pt-16">
          <Reveal>
            <p className="mb-8 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
              Voces
            </p>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-3 md:gap-10">
            {TESTIMONIALS.map((item, i) => (
              <QuoteItem key={item.name} item={item} index={i} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
