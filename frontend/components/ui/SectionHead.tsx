import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

interface SectionHeadProps {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  className?: string;
  align?: "left" | "center";
  children?: ReactNode;
}

export default function SectionHead({
  eyebrow,
  title,
  description,
  className,
  align = "left",
  children,
}: SectionHeadProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium leading-[1.15] text-ink text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted text-pretty md:text-lg">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
