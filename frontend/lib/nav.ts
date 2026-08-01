export const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/homologacion", label: "Homologación" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/proceso", label: "Proceso" },
  { href: "/contacto", label: "Contacto" },
] as const;

export type NavLink = (typeof NAV_LINKS)[number];
