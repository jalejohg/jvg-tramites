/**
 * Contenido de marketing y catálogo — alimentado desde la base de conocimiento.
 * Editar datos en `data/knowledge-base.json`.
 */
import { knowledgeBase } from "@/data/knowledgeBase";
import type {
  KnowledgeService,
  KnowledgeStorySpan,
  KnowledgeSuccessStory,
  KnowledgeTestimonial,
  ServiceIconName,
} from "@/data/knowledgeBase.types";

export type ServiceItem = KnowledgeService & {
  icon: ServiceIconName;
};

export const SERVICES: ServiceItem[] = knowledgeBase.services;

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES.find((service) => service.id === slug);
}

export function serviceDetailPath(serviceId: string): string {
  return `/servicios/${serviceId}`;
}

export const PILLARS = knowledgeBase.pillars;

/** Logros comunicados en material promocional real del cliente. */
export const ACHIEVEMENTS = knowledgeBase.achievements;

export const PROCESS_STEPS = knowledgeBase.processSteps;

/** Cifras alineadas a material promocional y operación descrita por el cliente. */
export const COUNTERS = knowledgeBase.counters;

export type Testimonial = KnowledgeTestimonial;

/** Testimonios aportados por el cliente. */
export const TESTIMONIALS: Testimonial[] = knowledgeBase.testimonials;

/** Casos reales del material del cliente — storybook visual de entregas. */
export type StorySpan = KnowledgeStorySpan;

export type SuccessStory = KnowledgeSuccessStory;

export const SUCCESS_STORIES: SuccessStory[] = knowledgeBase.successStories;
