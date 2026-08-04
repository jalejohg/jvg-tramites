import { MapPin } from "lucide-react";
import CoveragePlaceItem from "@/components/contacto/CoveragePlaceItem";
import { CUBA_PROVINCES, MEXICO_COVERAGE } from "@/lib/coverage";
import { SITE } from "@/lib/siteConfig";

export default function LocationCoveragePanel() {
  return (
    <div className="rounded-2xl border border-border-subtle bg-bg p-6 shadow-sm md:p-7">
      <div className="flex items-center gap-2 text-gold-deep">
        <MapPin className="h-5 w-5" aria-hidden />
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em]">
          Cobertura
        </p>
      </div>
      <h3 className="mt-3 font-serif text-xl text-ink md:text-2xl">
        {SITE.address}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted text-pretty">
        {SITE.locationSummary}
      </p>

      <p className="mt-5 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-gold-deep">
        México
      </p>
      <ul className="mt-3 grid grid-cols-1 gap-x-4 gap-y-1.5 sm:grid-cols-2">
        {MEXICO_COVERAGE.map((area) => (
          <CoveragePlaceItem key={area.name} name={area.name} />
        ))}
      </ul>

      <p className="mt-6 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-gold-deep">
        Principales ciudades de Cuba
      </p>
      <ul className="mt-3 grid grid-cols-1 gap-x-4 gap-y-1.5 sm:grid-cols-2">
        {CUBA_PROVINCES.map((province) => (
          <CoveragePlaceItem key={province} name={province} />
        ))}
      </ul>
    </div>
  );
}
