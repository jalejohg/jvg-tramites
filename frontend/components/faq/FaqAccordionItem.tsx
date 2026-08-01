"use client";

import { memo, useId, useState } from "react";
import type { FaqItem } from "@/data/faq";
import { cn } from "@/lib/cn";

interface FaqAccordionItemProps {
  item: FaqItem;
}

function FaqAccordionItem({ item }: FaqAccordionItemProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonId = useId();

  return (
    <div className="border-b border-border">
      <h2 className="m-0">
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full cursor-pointer items-start justify-between gap-4 py-5 text-left transition-colors hover:text-gold-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-deep/40"
        >
          <span className="font-serif text-lg font-medium text-ink md:text-xl text-balance">
            {item.question}
          </span>
          <span
            aria-hidden
            className={cn(
              "mt-1 shrink-0 font-sans text-xl leading-none text-gold-deep transition-transform",
              open && "rotate-45"
            )}
          >
            +
          </span>
        </button>
      </h2>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
        className={cn(!open && "hidden")}
      >
        <p className="pb-5 pr-8 text-muted leading-relaxed text-pretty">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default memo(FaqAccordionItem);
