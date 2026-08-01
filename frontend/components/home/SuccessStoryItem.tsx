import Image from "next/image";
import { memo } from "react";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import type { SuccessStory } from "@/data/content";

const SPAN_CLASS: Record<SuccessStory["span"], string> = {
  featured: "md:col-span-2 md:row-span-2",
  tall: "md:row-span-2",
  standard: "",
};

const ASPECT_CLASS: Record<SuccessStory["span"], string> = {
  featured: "aspect-[4/5] md:aspect-auto md:h-full md:min-h-[420px]",
  tall: "aspect-[3/4] md:aspect-auto md:h-full md:min-h-[360px]",
  standard: "aspect-[3/4]",
};

interface SuccessStoryItemProps {
  story: SuccessStory;
  index: number;
}

function SuccessStoryItem({ story, index }: SuccessStoryItemProps) {
  return (
    <Reveal
      delay={Math.min(index % 5, 4) as 0 | 1 | 2 | 3 | 4}
      className={cn("group flex flex-col", SPAN_CLASS[story.span])}
    >
      <figure className="flex h-full flex-col">
        <div
          className={cn(
            "relative overflow-hidden border border-border bg-warm/40",
            ASPECT_CLASS[story.span]
          )}
        >
          <Image
            src={story.src}
            alt={story.alt}
            fill
            loading="lazy"
            className="object-cover object-center transition-transform duration-300 ease-[var(--ease-fluid)] group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            sizes={
              story.span === "featured"
                ? "(max-width: 768px) 100vw, 50vw"
                : "(max-width: 768px) 50vw, 25vw"
            }
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent opacity-80"
            aria-hidden
          />
        </div>
        <figcaption className="mt-3 border-l-2 border-l-gold pl-3">
          <p className="font-serif text-lg font-medium leading-snug text-ink">
            {story.label}
          </p>
          <p className="mt-0.5 text-sm text-muted">{story.place}</p>
        </figcaption>
      </figure>
    </Reveal>
  );
}

export default memo(SuccessStoryItem);
