export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

/**
 * Preguntas frecuentes orientadas a intención de búsqueda y rich results FAQPage.
 */
export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "que-tramites",
    question: "¿Qué trámites migratorios gestiona JVG hacia México?",
    answer:
      "Acompañamos residencias temporales y permanentes, naturalización, reunificación familiar, regularización, visas de trabajo y asesoría a inversionistas o empresas. También legalización/apostilla, homologación de títulos y gestión documental en Cienfuegos.",
  },
  {
    id: "desde-donde",
    question: "¿Puedo iniciar mi trámite si estoy fuera de México?",
    answer:
      "Sí. Atendemos de forma virtual en México y a distancia para la diáspora (EE. UU., España, LatAm y Europa). La gestión operativa en terreno (registros, notarías, archivos) la cubrimos desde Cienfuegos cuando el expediente lo requiere.",
  },
  {
    id: "homologacion",
    question: "¿En qué consiste la homologación de títulos universitarios?",
    answer:
      "Armamos el expediente completo (título, notas, planes de estudio y traducciones cuando apliquen) y le orientamos sobre el proceso de validación u homologación en el país de destino, para reducir rechazos por forma y acelerar su inserción profesional.",
  },
  {
    id: "apostilla",
    question: "¿Qué es la apostilla y cuándo la necesito?",
    answer:
      "La apostilla (o legalización, según el país) da validez internacional a documentos civiles y académicos. Suele exigirse para residencias, matrimonios, estudios o ejercicio profesional en el exterior. Gestionamos la obtención ante las autoridades competentes.",
  },
  {
    id: "plazos",
    question: "¿Cuánto tarda un trámite migratorio o de documentos?",
    answer:
      "Depende del tipo de caso, la autoridad competente y la completitud del expediente. En la evaluación de viabilidad le explicamos plazos estimados con transparencia, sin prometer fechas que no controlamos.",
  },
  {
    id: "como-empezar",
    question: "¿Cómo solicito una asesoría con JVG?",
    answer:
      "Puede usar el formulario de contacto en cuatro pasos, escribirnos por WhatsApp o enviar un correo. Escuchamos su caso, evaluamos viabilidad y le proponemos el camino más seguro antes de avanzar.",
  },
  {
    id: "cienfuegos",
    question: "¿Por qué mencionan gestión en Cienfuegos?",
    answer:
      "Contamos con equipo operativo en Cienfuegos para buscar y procesar certificaciones en registros, notarías y archivos locales. Es especialmente útil si usted ya está en el exterior u otra provincia y necesita «ojos y manos» en el terreno.",
  },
  {
    id: "costos",
    question: "¿Los honorarios incluyen tasas oficiales?",
    answer:
      "Los honorarios de asesoría y gestoría se cotizan según el caso. Las tasas, aranceles o pagos a autoridades suelen ser independientes. En la evaluación le aclaramos qué cubre cada concepto antes de comprometerse.",
  },
];
