/**
 * Tipos de la base de conocimiento del sitio.
 * Fuente de datos: `knowledge-base.json`.
 */

export type ServiceIconName =
  | "FileCheck"
  | "GraduationCap"
  | "Landmark"
  | "MapPin"
  | "HeartHandshake";

export interface KnowledgeSite {
  name: string;
  shortName: string;
  logo: string;
  ogImage: string;
  slogan: string;
  taglineMexico: string;
  titleDefault: string;
  description: string;
  keywords: string[];
  director: string;
  directorCourtesy: string;
  directorRole: string;
  directorImage: string;
  tenantId: string;
  waNumber: string;
  phoneDisplay: string;
  email: string;
  address: string;
  mapCoords: { lat: number; lng: number };
  facebookProfile: string;
  facebookGroup: string;
  locationLabel: string;
  defaultSiteUrl: string;
}

export interface KnowledgeNavLink {
  href: string;
  label: string;
}

export interface KnowledgeService {
  id: string;
  title: string;
  description: string;
  value: string;
  icon: ServiceIconName;
  href?: string;
  image: string;
  imageAlt: string;
  highlights?: string[];
}

export interface KnowledgePillar {
  title: string;
  description: string;
}

export interface KnowledgeProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface KnowledgeCounter {
  value: string;
  label: string;
  provisional: boolean;
}

export interface KnowledgeTestimonial {
  quote: string;
  name: string;
  role: string;
}

export type KnowledgeStorySpan = "featured" | "tall" | "standard";

export interface KnowledgeSuccessStory {
  id: string;
  src: string;
  alt: string;
  label: string;
  place: string;
  span: KnowledgeStorySpan;
}

export interface KnowledgeBase {
  site: KnowledgeSite;
  waDefaultMessage: string;
  contactFormId: string;
  nav: KnowledgeNavLink[];
  services: KnowledgeService[];
  pillars: KnowledgePillar[];
  achievements: string[];
  processSteps: KnowledgeProcessStep[];
  counters: KnowledgeCounter[];
  testimonials: KnowledgeTestimonial[];
  successStories: KnowledgeSuccessStory[];
}
