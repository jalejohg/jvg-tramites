export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  value: string;
  icon: "FileCheck" | "GraduationCap" | "Landmark" | "MapPin" | "HeartHandshake";
  href?: string;
  /** Ruta local en public/images */
  image: string;
  imageAlt: string;
  /** Detalles opcionales (p. ej. listado de trámites del material promocional). */
  highlights?: readonly string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "migratorio-mx",
    title: "Trámites migratorios en México",
    description:
      "Acompañamiento jurídico en procesos migratorios hacia y dentro de México: residencias, naturalización, reunificación, regularización y asesoría a inversionistas y empresas.",
    value:
      "Claridad sobre su caso, menor riesgo de denegación y un interlocutor legal de confianza en cada etapa.",
    icon: "Landmark",
    image: "/images/viaje-horizonte.jpg",
    imageAlt: "Viaje internacional y horizonte abierto",
    highlights: [
      "Visas de residencia temporales y permanentes",
      "Naturalización y ciudadanía",
      "Canjes de residencia y visas de trabajo",
      "Reunificación familiar",
      "Regularización y defensa",
      "Asesoría para inversionistas y empresarial",
    ],
  },
  {
    id: "legalizacion",
    title: "Legalización y apostilla",
    description:
      "Gestión, obtención y tramitación del reconocimiento oficial de documentos civiles y académicos ante ministerios, MINREX y consulados: nacimientos, matrimonios, antecedentes penales, títulos y más.",
    value:
      "Sus documentos quedan con validez internacional, sin filas ni errores de forma.",
    icon: "FileCheck",
    image: "/images/documentos.jpg",
    imageAlt: "Documentos oficiales sobre un escritorio",
  },
  {
    id: "homologacion",
    title: "Homologación de títulos",
    description:
      "Asesoría técnica y armado del expediente completo (título, notas, planes de estudio) para homologar o validar estudios superiores en el país de destino.",
    value:
      "Acelera su inserción laboral profesional en el exterior y reduce el riesgo de rechazo de expediente.",
    icon: "GraduationCap",
    href: "/homologacion",
    image: "/images/graduacion.jpg",
    imageAlt: "Graduación y trayectoria académica profesional",
  },
  {
    id: "territorial",
    title: "Gestión territorial en el terreno",
    description:
      "Equipo operativo en regiones clave como Cienfuegos: búsqueda y procesamiento de certificaciones en registros, notarías y archivos locales.",
    value:
      "«Ojos y manos» en el terreno para quien ya está en el exterior u otra provincia.",
    icon: "MapPin",
    image: "/images/ciudad-calle.jpg",
    imageAlt: "Calle soleada de ciudad caribeña",
  },
  {
    id: "logistico",
    title: "Remesas y telecomunicaciones",
    description:
      "Canal confiable para coordinar remesas y recargas de telefonía/conectividad para familiares en el país de origen.",
    value:
      "Centralice el cuidado legal de su futuro y el sustento diario de los suyos con un solo proveedor.",
    icon: "HeartHandshake",
    image: "/images/familia-manos.jpg",
    imageAlt: "Familia conectada a la distancia",
  },
];

export const PILLARS = [
  {
    title: "Gestión integral llave en mano",
    description:
      "De la obtención de documentos a la migración en México, la homologación y el soporte familiar: un ecosistema completo, sin fragmentar su trámite entre intermediarios.",
  },
  {
    title: "Respaldo legal y transparencia",
    description:
      "Servicio liderado por un profesional del derecho: asesoría honesta sobre viabilidad, manejo seguro de documentación sensible y claridad en cada paso.",
  },
  {
    title: "Cobertura local, alcance internacional",
    description:
      "Especialización en trámites hacia México, presencia operativa en Cienfuegos y atención para la diáspora en EE. UU., España, LatAm y Europa.",
  },
] as const;

/** Logros comunicados en material promocional real del cliente. */
export const ACHIEVEMENTS = [
  "Alta tasa de éxito en trámites complejos",
  "Cientos de familias unificadas",
  "Asesoría legal de confianza",
  "Soluciones rápidas e integrales",
] as const;

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Contacto",
    description:
      "Cuéntenos su caso por el formulario, WhatsApp o correo. Escuchamos con atención y sin tecnicismos innecesarios.",
  },
  {
    step: 2,
    title: "Evaluación de viabilidad",
    description:
      "Analizamos su situación y le explicamos con transparencia qué es posible, plazos estimados y el camino más seguro.",
  },
  {
    step: 3,
    title: "Gestión y seguimiento",
    description:
      "Tramitamos y coordinamos en el terreno o a distancia, manteniéndole informado del avance de su expediente.",
  },
  {
    step: 4,
    title: "Entrega y acompañamiento",
    description:
      "Recibe sus documentos o la resolución con acompañamiento hasta cerrar el ciclo con tranquilidad.",
  },
] as const;

/** Cifras alineadas a material promocional y operación descrita por el cliente. */
export const COUNTERS = [
  {
    value: "Cientos",
    label: "Familias acompañadas",
    provisional: false,
  },
  {
    value: "México",
    label: "Especialidad migratoria",
    provisional: false,
  },
  {
    value: "Cienfuegos",
    label: "Gestión operativa en terreno",
    provisional: false,
  },
  {
    value: "5",
    label: "Servicios integrales",
    provisional: false,
  },
] as const;

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  provisional: true;
}

/** Textos temporales de tono; la prueba social principal son las fotos reales. */
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Llegar a México con mi título de medicina parecía imposible de ordenar sola. Con JVG armamos el expediente paso a paso y sentí que alguien cuidaba el trámite como si fuera propio.",
    name: "Ana R.",
    role: "Médica · Cuba",
    provisional: true,
  },
  {
    quote:
      "Desde Caracas necesitaba residencia temporal en México para trabajar. Me explicaron con claridad qué pedía el INM y el resultado llegó sin sobresaltos.",
    name: "Carlos M.",
    role: "Ingeniero · Venezuela",
    provisional: true,
  },
  {
    quote:
      "Vine de Bogotá por reunificación familiar. Lo que más valoro es la tranquilidad de no pelear sola con la burocracia: cada documento y cita quedó en orden.",
    name: "María L.",
    role: "Contadora · Colombia",
    provisional: true,
  },
];

/** Casos reales del material del cliente — storybook visual de entregas. */
export type StorySpan = "featured" | "tall" | "standard";

export interface SuccessStory {
  id: string;
  src: string;
  alt: string;
  label: string;
  place: string;
  span: StorySpan;
}

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: "familia-residencias",
    src: "/images/casos/familia-residencias.jpg",
    alt: "Familia mostrando tarjetas de residencia migratoria",
    label: "Familia con residencias",
    place: "Puente México–Cuba",
    span: "featured",
  },
  {
    id: "residencia-permanente-cdmx",
    src: "/images/casos/residencia-permanente-cdmx.jpg",
    alt: "Entrega de residencia permanente frente al INM en Ciudad de México",
    label: "Residencia permanente",
    place: "INM · Ciudad de México",
    span: "tall",
  },
  {
    id: "tribunal-federal",
    src: "/images/casos/tribunal-federal.jpg",
    alt: "Equipo legal frente al Tribunal Federal",
    label: "Defensa de derechos",
    place: "Tribunal Federal",
    span: "tall",
  },
  {
    id: "inm-hidalgo-familia",
    src: "/images/casos/inm-hidalgo-familia.jpg",
    alt: "Familia con tarjeta migratoria ante la oficina del INM en Hidalgo",
    label: "Tarjeta migratoria",
    place: "INM · Hidalgo",
    span: "standard",
  },
  {
    id: "familia-nino-tarjeta",
    src: "/images/casos/familia-nino-tarjeta.jpg",
    alt: "Familia con un niño mostrando su documento migratorio",
    label: "Documento en familia",
    place: "Entrega exitosa",
    span: "standard",
  },
  {
    id: "residencia-permanente-senora",
    src: "/images/casos/residencia-permanente-senora.jpg",
    alt: "Cliente mostrando su tarjeta de residencia permanente",
    label: "Residencia permanente",
    place: "Entrega exitosa",
    span: "tall",
  },
  {
    id: "pareja-oficina",
    src: "/images/casos/pareja-oficina.jpg",
    alt: "Pareja con documentación ante oficina de Gobernación",
    label: "Gestión ante Gobernación",
    place: "Oficina de representación",
    span: "tall",
  },
  {
    id: "oficina-hidalgo",
    src: "/images/casos/oficina-hidalgo.jpg",
    alt: "Cliente con tarjeta migratoria en Hidalgo",
    label: "Acompañamiento en terreno",
    place: "Hidalgo",
    span: "standard",
  },
  {
    id: "entrega-tarjeta",
    src: "/images/casos/entrega-tarjeta.jpg",
    alt: "Entrega de tarjeta migratoria entre asesor y cliente",
    label: "Tarjeta en mano",
    place: "Proceso cerrado",
    span: "standard",
  },
  {
    id: "visa-entrega",
    src: "/images/casos/visa-entrega.jpg",
    alt: "Cliente mostrando visa mexicana recién obtenida",
    label: "Visa mexicana",
    place: "Entrega",
    span: "standard",
  },
];
