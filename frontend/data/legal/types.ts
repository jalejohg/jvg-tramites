export interface LegalSection {
  id: string;
  title: string;
  paragraphs: readonly string[];
  /** Lista opcional tras los párrafos iniciales. */
  listIntro?: string;
  list?: readonly string[];
  /** Párrafos posteriores a la lista. */
  afterList?: readonly string[];
}

export interface LegalDocumentContent {
  title: string;
  description: string;
  updatedLabel: string;
  intro: readonly string[];
  sections: readonly LegalSection[];
}
