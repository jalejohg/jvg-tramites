import { SITE } from "@/lib/siteConfig";

/** Áreas de cobertura en México (UI muestra `name`; `localities` solo datos/SEO). */
export const MEXICO_COVERAGE = SITE.mexicoCoverage;

/** Provincias de Cuba + municipio especial Isla de la Juventud. */
export const CUBA_PROVINCES = SITE.cubaProvinces;

export type AreaServedPlace = {
  "@type": "Country" | "City" | "AdministrativeArea";
  name: string;
  containedInPlace?: {
    "@type": "Country" | "AdministrativeArea";
    name: string;
  };
};

/** Cobertura México + Cuba para JSON-LD (incluye localidades no listadas en UI). */
export function organizationAreaServed(): AreaServedPlace[] {
  const mexicoPlaces: AreaServedPlace[] = MEXICO_COVERAGE.flatMap((area) => {
    const parent: AreaServedPlace = {
      "@type":
        area.name === "Ciudad de México" ? "City" : "AdministrativeArea",
      name: area.name,
      containedInPlace: { "@type": "Country", name: "México" },
    };

    const localities = (area.localities ?? []).map(
      (name): AreaServedPlace => ({
        "@type": "City",
        name,
        containedInPlace: { "@type": "AdministrativeArea", name: area.name },
      })
    );

    return [parent, ...localities];
  });

  return [
    { "@type": "Country", name: "México" },
    ...mexicoPlaces,
    { "@type": "Country", name: "Cuba" },
    ...CUBA_PROVINCES.map(
      (name): AreaServedPlace => ({
        "@type": "AdministrativeArea",
        name,
        containedInPlace: { "@type": "Country", name: "Cuba" },
      })
    ),
  ];
}
