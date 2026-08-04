/**
 * Enlaces que deben abrirse en nueva pestaña:
 * externos (http/https/mailto/tel) + páginas legales.
 * La navegación interna del sitio permanece en la misma ventana.
 */
const NEW_TAB_PATHS = [
  "/aviso-de-privacidad",
  "/terminos-y-condiciones",
] as const;

export function opensInNewTab(href: string): boolean {
  if (!href || href.startsWith("#")) return false;
  if (/^(https?:|mailto:|tel:)/i.test(href) || href.startsWith("//")) {
    return true;
  }
  const path = href.split(/[?#]/)[0] ?? href;
  return NEW_TAB_PATHS.some((p) => path === p || path.startsWith(`${p}/`));
}

export function newTabLinkProps(href: string): {
  target?: "_blank";
  rel?: string;
} {
  if (!opensInNewTab(href)) return {};
  return { target: "_blank", rel: "noopener noreferrer" };
}
