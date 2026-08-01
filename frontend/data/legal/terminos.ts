import { SITE } from "@/lib/siteConfig";
import type { LegalDocumentContent } from "./types";

/**
 * Términos y condiciones de uso del sitio y marco general de los servicios
 * de consultoría jurídica y gestoría migratoria de Trámites Migratorios JVG.
 */
export const TERMINOS_Y_CONDICIONES: LegalDocumentContent = {
  title: "Términos y condiciones",
  description:
    "Condiciones de uso de este sitio web y marco general de los servicios profesionales de Trámites Migratorios JVG.",
  updatedLabel: "Última actualización: 1 de agosto de 2026.",
  intro: [
    `Los presentes Términos y Condiciones (los “Términos”) regulan el acceso y uso del sitio web de ${SITE.name} (el “Sitio”), así como el marco general de la relación entre el usuario o cliente y el prestador de servicios identificado más abajo. Al navegar, consultar o utilizar el Sitio, o al solicitar información o servicios a través de él, usted declara haber leído, comprendido y aceptado estos Términos.`,
    "Si no está de acuerdo con alguna disposición, le pedimos abstenerse de utilizar el Sitio y de enviar datos a través de sus formularios.",
  ],
  sections: [
    {
      id: "identificacion",
      title: "1. Identificación del prestador",
      paragraphs: [
        `El Sitio es operado por ${SITE.name}, marca bajo la cual presta servicios profesionales el Lic. ${SITE.director}, ${SITE.directorRole}.`,
      ],
      listIntro: "Datos de contacto:",
      list: [
        `Correo electrónico: ${SITE.email}`,
        `Teléfono / WhatsApp: ${SITE.phoneDisplay}`,
        `Domicilio de atención publicado: ${SITE.address}`,
        `Modalidad de atención: ${SITE.locationLabel}`,
      ],
    },
    {
      id: "objeto",
      title: "2. Objeto social y alcance de los servicios",
      paragraphs: [
        `${SITE.name} ofrece consultoría jurídica y gestoría profesional orientada a facilitar procesos migratorios, documentales y de soporte familiar, con especialización en trámites hacia y dentro de México, y con capacidad operativa de gestión en terreno (incluyendo Cienfuegos) e atención a usuarios en distintos países.`,
      ],
      listIntro: "De manera enunciativa, el portafolio puede incluir:",
      list: [
        "Asesoría y gestoría en trámites migratorios en México (residencias, visas, canjes, renovaciones, reunificación familiar, regularización, naturalización, permisos de trabajo, asesoría a inversionistas y empresas, y gestiones ante el INM u otras autoridades competentes).",
        "Legalización, apostilla y obtención de documentos civiles, académicos y afines ante las instancias que correspondan.",
        "Asesoría técnica y armado de expedientes para homologación o validación de títulos y estudios en el país de destino.",
        "Gestión territorial en el terreno: búsqueda y procesamiento de certificaciones en registros, notarías y archivos locales.",
        "Coordinación de soporte familiar en remesas y telecomunicaciones (recargas y conectividad), cuando se solicite expresamente.",
        "Atención presencial, virtual o mixta, según la naturaleza del trámite y lo acordado con el cliente.",
      ],
      afterList: [
        "La descripción de servicios en el Sitio tiene carácter informativo y comercial. El alcance concreto, honorarios, plazos estimados, documentos requeridos y condiciones particulares de cada encargo se definirán en la cotización, propuesta o acuerdo profesional correspondiente.",
      ],
    },
    {
      id: "naturaleza",
      title: "3. Naturaleza de la información y de la asesoría",
      paragraphs: [
        "El contenido del Sitio (textos, descripciones de procesos, plazos orientativos, preguntas frecuentes y materiales similares) tiene finalidad informativa y divulgativa. No constituye, por sí solo, una opinión jurídica personalizada, un dictamen vinculante ni el inicio de una relación abogado-cliente.",
        "La relación profesional y el secreto profesional aplicables se perfeccionan cuando existe un encargo aceptado por ambas partes, con el alcance y las condiciones expresamente convenidas. Hasta ese momento, las comunicaciones preliminares se entienden como solicitudes de información o de cotización.",
        `Las decisiones de autoridades migratorias, consulares, registrales, educativas u otras son autónomas. ${SITE.name} no garantiza la aprobación de visas, residencias, naturalizaciones, homologaciones, citas, apostillas ni ningún otro resultado que dependa de terceros o de la valoración discrecional de una autoridad.`,
      ],
    },
    {
      id: "uso-sitio",
      title: "4. Uso del sitio web",
      paragraphs: [
        "El usuario se compromete a utilizar el Sitio de forma lícita, diligente y conforme a estos Términos, a la moral y al orden público. Queda prohibido, entre otros:",
      ],
      list: [
        "Utilizar el Sitio para fines ilícitos, fraudulentos o que vulneren derechos de terceros.",
        "Introducir malware, realizar ataques informáticos, o intentar acceder de forma no autorizada a sistemas, cuentas o datos.",
        "Enviar información falsa, engañosa o de la que no se tenga legitimación para compartir (incluidos datos de terceros o de menores sin la debida representación).",
        "Reproducir, distribuir, modificar o explotar comercialmente el contenido del Sitio sin autorización previa y por escrito.",
        "Suplantar la identidad de otra persona o utilizar el formulario de contacto de manera abusiva o automatizada.",
      ],
      afterList: [
        `${SITE.name} podrá suspender, limitar o cancelar el acceso al Sitio o a determinados canales de atención cuando detecte un uso indebido, sin perjuicio de las acciones legales que correspondan.`,
      ],
    },
    {
      id: "formulario",
      title: "5. Solicitudes a través del formulario y otros canales",
      paragraphs: [
        "El formulario de contacto y los canales de WhatsApp, correo o teléfono permiten iniciar una conversación sobre su caso. El envío de una solicitud no implica la aceptación automática del encargo ni la reserva de un resultado.",
        "El Responsable podrá requerir información o documentación adicional para evaluar la viabilidad del servicio. Se reserva el derecho de declinar un asunto cuando exista conflicto de interés, imposibilidad técnica o jurídica, información insuficiente, o cuando el encargo sea contrario a la ética profesional o a la ley.",
        "Los datos personales proporcionados se tratan conforme al Aviso de Privacidad publicado en el Sitio, el cual forma parte integrante de estos Términos en lo relativo a protección de datos.",
      ],
    },
    {
      id: "obligaciones-cliente",
      title: "6. Obligaciones del cliente o usuario",
      paragraphs: [
        "Quien solicite o contrate servicios se obliga a:",
      ],
      list: [
        "Proporcionar información y documentación veraz, completa, legible y actualizada.",
        "Informar de cualquier cambio relevante en su situación migratoria, personal, laboral o documental que pueda afectar el trámite.",
        "Cumplir los requisitos, plazos de aportación de documentos y pagos acordados para la continuidad del servicio.",
        "Abstenerse de utilizar los servicios para simular hechos, falsear documentos o eludir disposiciones legales.",
        "Obtener, cuando corresponda, el consentimiento o la representación legal necesarios respecto de datos o documentos de terceros, incluidos menores de edad.",
      ],
      afterList: [
        `Los retrasos, denegaciones o incidencias derivados de información incompleta, inexacta o extemporánea aportada por el cliente, o de omisiones atribuibles a este, no serán responsabilidad de ${SITE.name}.`,
      ],
    },
    {
      id: "honorarios",
      title: "7. Honorarios, cotizaciones y pagos",
      paragraphs: [
        "Los honorarios y costos se cotizan caso por caso, en función de la complejidad, la urgencia, el tipo de trámite, el número de personas involucradas, desplazamientos y gestiones ante terceros.",
        "Salvo pacto escrito en contrario, las cotizaciones tienen carácter estimativo. Tasas, derechos, aranceles, traducciones, envíos, apostillas, pagos a autoridades o a proveedores externos suelen ser independientes de los honorarios profesionales y correrán por cuenta del cliente cuando así se indique.",
        "Los plazos de ejecución son estimaciones sujetas a la carga de trabajo de autoridades y terceros, a la disponibilidad de citas y a la entrega oportuna de requisitos por parte del cliente. Un plazo orientativo publicado en el Sitio no constituye una obligación de resultado ni una fecha cierta de resolución administrativa.",
      ],
    },
    {
      id: "terceros",
      title: "8. Autoridades, terceros y servicios complementarios",
      paragraphs: [
        `En la prestación de los servicios pueden intervenir autoridades (como el Instituto Nacional de Migración, consulados, ministerios, registros civiles, instituciones educativas u otras) y proveedores externos. ${SITE.name} actúa como gestor y/o asesor en el marco del encargo, pero no controla ni responde por demoras, criterios, caídas de sistemas, cambios normativos o resoluciones de dichas entidades.`,
        `Respecto de remesas y telecomunicaciones, ${SITE.name} puede coordinar o canalizar la solicitud a través de proveedores o mecanismos disponibles en el mercado. Estos servicios complementarios están sujetos a las condiciones, comisiones, límites y regulaciones de los intermediarios financieros o de telecomunicaciones correspondientes. El cliente deberá verificar y aceptar las condiciones aplicables antes de confirmar la operación.`,
      ],
    },
    {
      id: "propiedad",
      title: "9. Propiedad intelectual",
      paragraphs: [
        `Los textos, diseño, logotipo, marcas, tipografías, imágenes, estructura y demás elementos del Sitio son titularidad de ${SITE.name}, del Lic. ${SITE.director} o de terceros licenciantes, y están protegidos por la legislación aplicable en materia de derechos de autor, propiedad industrial y competencia desleal.`,
        "Queda prohibida su reproducción, comunicación pública, transformación o distribución sin autorización previa y por escrito, salvo los usos permitidos por ley (como el derecho de cita con indicación de la fuente, cuando proceda).",
        "El slogan «Tu camino, nuestro compromiso.» y la denominación «Trámites Migratorios JVG» identifican la marca del prestador en el Sitio.",
      ],
    },
    {
      id: "enlaces",
      title: "10. Enlaces a terceros",
      paragraphs: [
        `El Sitio puede incluir enlaces a WhatsApp, redes sociales, mapas u otros sitios de terceros. Dichos recursos se rigen por sus propias condiciones y políticas de privacidad. ${SITE.name} no controla ni asume responsabilidad por el contenido, disponibilidad o prácticas de sitios ajenos, sin perjuicio de la diligencia razonable en la selección de enlaces de utilidad para el usuario.`,
      ],
    },
    {
      id: "responsabilidad",
      title: "11. Limitación de responsabilidad",
      paragraphs: [
        `En la máxima medida permitida por la ley aplicable, ${SITE.name} y el Lic. ${SITE.director} no serán responsables por:`,
      ],
      list: [
        "Decisiones, silencios administrativos, requisitos adicionales o criterios de valoración adoptados por autoridades o terceros.",
        "Daños derivados del uso indebido del Sitio, de la imposibilidad temporal de acceso por mantenimiento, fuerza mayor o fallos de infraestructura de terceros (hospedaje, redes, mensajería).",
        "Consecuencias de información falsa, incompleta u oculta por el usuario o cliente.",
        "Pérdidas de oportunidad, lucro cesante o daños indirectos, salvo dolo o negligencia inexcusable cuando la ley no permita su exclusión.",
      ],
      afterList: [
        "Nada en estos Términos excluye responsabilidades que por ley sean indisponibles, en particular las derivadas de normas de orden público o de la regulación profesional aplicable.",
      ],
    },
    {
      id: "privacidad",
      title: "12. Protección de datos personales",
      paragraphs: [
        `El tratamiento de datos personales se rige por el Aviso de Privacidad disponible en el Sitio (/aviso-de-privacidad). Al utilizar el formulario de contacto, el usuario debe aceptar dicho Aviso. Para ejercer derechos ARCO o plantear dudas sobre privacidad, puede escribir a ${SITE.email}.`,
      ],
    },
    {
      id: "modificaciones",
      title: "13. Modificaciones",
      paragraphs: [
        `${SITE.name} podrá actualizar estos Términos para reflejar cambios en los servicios, en la operativa del Sitio o en la normativa aplicable. La versión vigente será la publicada en esta página, con su fecha de actualización. El uso continuado del Sitio tras la publicación de cambios implica la aceptación de la versión actualizada, sin perjuicio de los derechos que correspondan respecto de encargos ya formalizados bajo condiciones particulares previas.`,
      ],
    },
    {
      id: "ley",
      title: "14. Ley aplicable y jurisdicción",
      paragraphs: [
        "Estos Términos se interpretan de conformidad con las leyes aplicables en los Estados Unidos Mexicanos, sin perjuicio de normas imperativas del lugar de residencia del consumidor que resulten de aplicación necesaria.",
        "Para la resolución de controversias derivadas del uso del Sitio o de la interpretación de estos Términos, las partes se someten a los tribunales competentes de la Ciudad de México, renunciando a cualquier otro fuero que pudiera corresponderles por razón de domicilio presente o futuro, salvo que una norma de protección al consumidor imponga un fuero distinto de aplicación obligatoria.",
        "Las condiciones particulares de cada encargo profesional podrán establecer pactos específicos de mediación, domicilio convencional o jurisdicción, que prevalecerán entre las partes para ese encargo.",
      ],
    },
    {
      id: "contacto-terminos",
      title: "15. Contacto",
      paragraphs: [
        `Para consultas sobre estos Términos y Condiciones, puede escribir a ${SITE.email} o comunicarse al WhatsApp ${SITE.phoneDisplay}.`,
      ],
    },
  ],
};
