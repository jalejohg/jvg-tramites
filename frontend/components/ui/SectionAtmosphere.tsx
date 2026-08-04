import { cn } from "@/lib/cn";

export type AtmosphereTone = "light" | "ink";

interface SectionAtmosphereProps {
  /** light = canvas blanco; ink = franjas oscuras (casos / footer). */
  tone?: AtmosphereTone;
  /** Invierte la posición de los orbes para ritmo entre secciones. */
  mirror?: boolean;
  className?: string;
}

/**
 * Atmósfera discreta: orbes radiales suaves (Soft Organic / Trust).
 * Intensidad baja para no competir con el contenido.
 */
export default function SectionAtmosphere({
  tone = "light",
  mirror = false,
  className,
}: SectionAtmosphereProps) {
  if (tone === "ink") {
    return (
      <div
        className={cn(
          "pointer-events-none absolute inset-0 overflow-hidden",
          className
        )}
        aria-hidden
      >
        <div
          className={cn(
            "absolute rounded-full bg-[radial-gradient(circle,rgba(213,158,63,0.16),transparent_62%)] blur-[48px]",
            mirror
              ? "-bottom-[40%] -left-[12%] h-[115%] w-[48vw]"
              : "-top-[34%] -right-[12%] h-[115%] w-[48vw]"
          )}
        />
        <div
          className={cn(
            "absolute rounded-full bg-[radial-gradient(circle,rgba(213,158,63,0.08),transparent_65%)] blur-[52px]",
            mirror
              ? "-top-[30%] -right-[14%] h-[85%] w-[36vw]"
              : "-bottom-[44%] -left-[14%] h-[90%] w-[38vw]"
          )}
        />
        <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(55%_100%_at_50%_0%,rgba(213,158,63,0.1),transparent_75%)]" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
      aria-hidden
    >
      <div
        className={cn(
          "absolute rounded-full bg-[radial-gradient(circle,rgba(213,158,63,0.14),transparent_60%)] blur-[50px]",
          mirror
            ? "-bottom-[32%] -left-[14%] h-[110%] w-[48vw]"
            : "-top-[26%] -right-[12%] h-[110%] w-[46vw]"
        )}
      />
      <div
        className={cn(
          "absolute rounded-full bg-[radial-gradient(circle,rgba(247,244,239,0.9),transparent_55%)] blur-[40px]",
          mirror
            ? "-top-[24%] -right-[8%] h-[70%] w-[36vw]"
            : "-bottom-[30%] -left-[10%] h-[72%] w-[38vw]"
        )}
      />
      <div
        className={cn(
          "absolute h-64 w-64 rounded-full bg-gold/10 blur-3xl md:h-80 md:w-80",
          mirror ? "left-[20%] top-[32%]" : "right-[18%] bottom-[8%]"
        )}
      />
      <div
        className={cn(
          "absolute inset-0",
          mirror
            ? "bg-[linear-gradient(135deg,rgba(247,244,239,0.4)_0%,transparent_48%,rgba(213,158,63,0.05)_100%)]"
            : "bg-[linear-gradient(225deg,rgba(247,244,239,0.35)_0%,transparent_45%,rgba(213,158,63,0.045)_100%)]"
        )}
      />
    </div>
  );
}
