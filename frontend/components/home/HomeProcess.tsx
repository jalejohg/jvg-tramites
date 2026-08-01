import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import { PROCESS_STEPS } from "@/data/content";

const PROCESS_IMAGE =
  "/images/equipo-reunion.webp";

function ProcessStepItem({
  step,
  index,
}: {
  step: (typeof PROCESS_STEPS)[number];
  index: number;
}) {
  return (
    <Reveal delay={Math.min(index, 4) as 0 | 1 | 2 | 3 | 4}>
      <li className="relative flex gap-4 border-l-2 border-gold/40 pl-5 md:border-l-0 md:pl-0">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-gold text-ink font-serif text-lg md:mb-4">
          {step.step}
        </span>
        <div>
          <h3 className="font-serif text-xl font-medium text-ink">{step.title}</h3>
          <p className="mt-2 text-sm text-muted text-pretty md:text-base">
            {step.description}
          </p>
        </div>
      </li>
    </Reveal>
  );
}

export default function HomeProcess() {
  return (
    <section className="bg-warm py-20 md:py-28">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden border border-border md:aspect-[3/4]">
              <Image
                src={PROCESS_IMAGE}
                alt="Conversación profesional de acompañamiento"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-gold/10"
                aria-hidden
              />
            </div>
            <p className="mt-3 font-serif text-lg text-ink/70 italic">
              Acompañamiento claro, de principio a fin.
            </p>
          </Reveal>

          <div>
            <Reveal>
              <SectionHead
                eyebrow="Proceso"
                title="Cómo trabajamos con usted"
                description="Un recorrido claro, pensado para reducir ansiedad y sorpresas."
              />
            </Reveal>
            <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {PROCESS_STEPS.map((step, i) => (
                <ProcessStepItem key={step.step} step={step} index={i} />
              ))}
            </ol>
            <Reveal className="mt-10">
              <Link
                href="/proceso"
                className="inline-flex min-h-11 items-center gap-2 font-semibold text-ink underline-offset-4 hover:text-gold-deep hover:underline cursor-pointer"
              >
                Conocer el proceso
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
