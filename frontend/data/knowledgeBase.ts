/**
 * Carga tipada de la base de conocimiento.
 * Editar contenido de negocio solo en `knowledge-base.json`.
 */
import raw from "./knowledge-base.json";
import type { KnowledgeBase } from "./knowledgeBase.types";

export const knowledgeBase = raw as KnowledgeBase;
