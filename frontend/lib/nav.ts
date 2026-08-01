/**
 * Navegación principal — alimentada desde la base de conocimiento.
 * Editar en `data/knowledge-base.json`.
 */
import { knowledgeBase } from "@/data/knowledgeBase";

export const NAV_LINKS = knowledgeBase.nav;

export type NavLink = (typeof NAV_LINKS)[number];
