import { SITE } from "@/lib/siteConfig";
import type { LegalDocumentContent } from "./types";

/**
 * Aviso de privacidad conforme a la Ley Federal de Protección de Datos
 * Personales en Posesión de los Particulares (México) y su Reglamento.
 * Ajustado a la actividad de consultoría jurídica y gestoría migratoria de JVG.
 */
export const AVISO_PRIVACIDAD: LegalDocumentContent = {
  title: "Aviso de privacidad",
  description:
    "Información sobre el tratamiento de sus datos personales al utilizar este sitio o contratar los servicios de Trámites Migratorios JVG.",
  updatedLabel: "Última actualización: 4 de agosto de 2026.",
  intro: [
    `De conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (la “Ley”), su Reglamento y lineamientos aplicables, ${SITE.name} (en adelante, el “Responsable”), marca comercial bajo la cual presta servicios profesionales el Lic. ${SITE.director}, pone a su disposición el presente Aviso de Privacidad.`,
    `El tratamiento de sus datos personales se realizará de manera lícita, informada y proporcional a las finalidades aquí descritas. Al proporcionar sus datos a través de este sitio web, del formulario de contacto, de WhatsApp, correo electrónico u otros canales de atención, usted reconoce haber leído y aceptado los términos de este Aviso.`,
  ],
  sections: [
    {
      id: "responsable",
      title: "1. Identidad y domicilio del Responsable",
      paragraphs: [
        `El Responsable del tratamiento de sus datos personales es ${SITE.name}, operado profesionalmente por el Lic. ${SITE.director}, ${SITE.directorRole}.`,
      ],
      listIntro: "Datos de contacto para asuntos relacionados con privacidad:",
      list: [
        `Correo electrónico: ${SITE.email}`,
        `Teléfono / WhatsApp: ${SITE.phoneDisplay}`,
        `Ubicación publicada: ${SITE.address}`,
        `Ámbito de atención: ${SITE.locationLabel}`,
      ],
      afterList: [
        "Cualquier comunicación relativa al ejercicio de derechos ARCO o a este Aviso deberá dirigirse preferentemente al correo electrónico indicado, con el asunto «Datos personales / ARCO».",
      ],
    },
    {
      id: "datos",
      title: "2. Datos personales que se recaban",
      paragraphs: [
        "Según el canal de contacto y el servicio solicitado, el Responsable podrá recabar las siguientes categorías de datos personales:",
      ],
      list: [
        "Datos de identificación y contacto: nombre completo, correo electrónico, número telefónico, país o ciudad de residencia, y datos equivalentes que usted facilite voluntariamente.",
        "Datos relativos a la consulta o al encargo: descripción del caso, tipo de servicio de interés (legalización y apostilla, homologación y validación de títulos, asesoría consular y procesos migratorios, gestión territorial, remesas y telecomunicaciones, u otros), y cualquier información que usted incluya en su mensaje.",
        "Datos documentales y migratorios: cuando el servicio lo requiera y usted los aporte, datos contenidos en documentos de identidad, actas del estado civil, títulos académicos, constancias, expedientes migratorios, visas, residencias, citas ante autoridades (por ejemplo, INM o consulados) y demás información necesaria para la gestoría o la asesoría.",
        "Datos de familiares o terceros: únicamente cuando usted los proporcione para reunificación familiar, soporte logístico, remesas u otros trámites que involucren a personas distintas de usted. En ese caso, usted declara contar con la legitimación o el consentimiento necesarios para compartir dicha información.",
        "Datos técnicos de navegación: dirección IP, tipo de dispositivo y navegador, páginas visitadas, fecha y hora de acceso, y datos análogos generados de forma automática por el sitio o por la infraestructura de hospedaje, en la medida en que resulten necesarios para la seguridad y el funcionamiento del servicio digital.",
      ],
      afterList: [
        "El Responsable no solicita, como regla general, datos personales sensibles a través del formulario público del sitio. Si con motivo de un encargo profesional usted aporta datos sensibles (por ejemplo, información sobre salud, origen étnico, opiniones políticas, creencias religiosas, o datos biométricos), dichos datos se tratarán únicamente para las finalidades del encargo, con las medidas de confidencialidad propias del secreto profesional y de la normativa aplicable, y solo en la medida estrictamente necesaria.",
      ],
    },
    {
      id: "finalidades",
      title: "3. Finalidades del tratamiento",
      paragraphs: [
        "Sus datos personales se tratarán para las siguientes finalidades primarias, necesarias para la relación con usted:",
      ],
      list: [
        "Atender solicitudes de información, cotizaciones y contacto iniciadas por usted.",
        "Prestar servicios de consultoría jurídica, asesoría y gestoría en materia migratoria, documental, consular, de homologación profesional y de soporte familiar o logístico, según el alcance acordado.",
        "Gestionar expedientes, citas, presentaciones y seguimientos ante autoridades, registros, notarías, consulados, instituciones educativas u otros terceros necesarios para el trámite, cuando ello forme parte del servicio contratado.",
        "Comunicarse con usted por los medios que haya facilitado (correo, teléfono, WhatsApp u otros) respecto del estado de su consulta o encargo.",
        "Cumplir obligaciones legales, regulatorias, fiscales, contables y de prevención de ilícitos que resulten aplicables.",
        "Ejercer o defender derechos ante autoridades o en procedimientos judiciales o administrativos.",
      ],
      afterList: [
        `Adicionalmente, y de forma secundaria —siempre que no se oponga—, los datos de contacto podrán utilizarse para enviarle información sobre servicios relacionados, actualizaciones del sitio o comunicaciones institucionales de ${SITE.name}. Si no desea recibir este tipo de comunicaciones, podrá oponerse en cualquier momento escribiendo a ${SITE.email}. La negativa a finalidades secundarias no condicionará la atención de su consulta ni la prestación de los servicios solicitados.`,
      ],
    },
    {
      id: "transferencias",
      title: "4. Transferencias de datos",
      paragraphs: [
        "El Responsable no vende ni comercializa sus datos personales. Podrá transferirlos o compartirlos únicamente en los siguientes supuestos:",
      ],
      list: [
        "Autoridades migratorias, consulares, registrales, notariales, educativas o administrativas, cuando la transferencia sea necesaria para el trámite que usted haya encargado o resulte legalmente exigida.",
        "Proveedores de servicios que actúen por cuenta del Responsable (por ejemplo, hospedaje web, correo electrónico, herramientas de mensajería, procesamiento del formulario de contacto, o colaboradores operativos en territorio para gestiones locales), bajo obligaciones de confidencialidad y solo para las finalidades del servicio.",
        "Entidades o intermediarios involucrados en remesas, recargas o servicios de telecomunicaciones, cuando usted solicite expresamente ese tipo de soporte y la transferencia sea indispensable para ejecutarlo.",
        "Terceros cuando exista mandato judicial, requerimiento de autoridad competente, o una obligación legal que así lo determine.",
        "Personas designadas por usted como contactos, representantes o beneficiarios del trámite, cuando ello sea necesario para la gestión encargada.",
      ],
      afterList: [
        "En transferencias nacionales o internacionales derivadas de la naturaleza de los trámites (México, Cuba u otros países de destino o de origen documental), el Responsable procurará que el intercambio se limite a lo indispensable y se realice a través de canales razonablemente seguros conforme a las prácticas del sector.",
      ],
    },
    {
      id: "arco",
      title: "5. Derechos ARCO y revocación del consentimiento",
      paragraphs: [
        "Usted —o su representante legal— puede ejercer los derechos de Acceso, Rectificación, Cancelación y Oposición (derechos ARCO), así como limitar el uso o divulgación de sus datos y revocar el consentimiento otorgado para el tratamiento, en los términos de la Ley.",
      ],
      listIntro: `Para ello, envíe una solicitud a ${SITE.email} que incluya al menos:`,
      list: [
        "Nombre completo del titular y medio para recibir la respuesta.",
        "Documento o datos que acrediten su identidad y, en su caso, la representación legal.",
        "Descripción clara de los datos respecto de los cuales busca ejercer sus derechos y el derecho concreto que desea ejercer.",
        "Cualquier elemento que facilite la localización de los datos.",
      ],
      afterList: [
        "El Responsable responderá en los plazos previstos por la normativa aplicable. Si la solicitud es procedente, se hará efectiva en los términos de la Ley. Tenga en cuenta que la cancelación u oposición podrán no proceder cuando el tratamiento sea necesario para cumplir un encargo en curso, una obligación legal, o para el ejercicio de derechos del Responsable.",
        "Asimismo, si considera que su derecho a la protección de datos ha sido lesionado, podrá presentar una queja o denuncia ante el Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI), o la autoridad que resulte competente.",
      ],
    },
    {
      id: "medios",
      title: "6. Medios de obtención de los datos",
      paragraphs: [
        "Los datos se obtienen de manera directa cuando usted los proporciona a través del sitio web, formulario de contacto, WhatsApp, correo electrónico, llamadas, atención presencial o virtual, o al entregar documentación para un trámite.",
        "También podrán obtenerse de manera indirecta cuando resulten de autoridades, registros públicos, o de terceros que usted haya autorizado a compartir información con el Responsable para la gestión de su caso.",
      ],
    },
    {
      id: "conservacion",
      title: "7. Conservación y medidas de seguridad",
      paragraphs: [
        "Los datos se conservarán durante el tiempo necesario para cumplir las finalidades del tratamiento, atender el encargo profesional, y satisfacer obligaciones legales, contractuales o de defensa de derechos. Transcurridos dichos plazos, se procederá a su eliminación, bloqueo o anonimización conforme a la normativa y a las políticas internas aplicables.",
        "El Responsable implementa medidas administrativas, técnicas y físicas razonables para proteger los datos personales contra daño, pérdida, alteración, destrucción o uso, acceso o tratamiento no autorizados, considerando el tipo de datos, el secreto profesional inherente a la asesoría jurídica y los riesgos propios de la gestoría documental y migratoria.",
        "Ningún sistema es absolutamente invulnerable; no obstante, ante cualquier incidente de seguridad que afecte de forma significativa sus derechos patrimoniales o morales, se le informará conforme a la Ley.",
      ],
    },
    {
      id: "cookies",
      title: "8. Cookies y tecnologías similares",
      paragraphs: [
        "Este sitio puede utilizar cookies propias o de terceros, así como tecnologías equivalentes, para permitir el funcionamiento técnico de la página, recordar preferencias básicas de navegación, proteger la seguridad del servicio y obtener métricas agregadas de uso cuando se habiliten herramientas de analítica.",
        "Las cookies técnicas o necesarias no requieren consentimiento en la medida en que resulten indispensables para prestar el servicio digital solicitado. Las cookies no esenciales (por ejemplo, analíticas o de marketing), de instalarse, se utilizarán conforme a la configuración disponible y a la normativa aplicable.",
        "Usted puede configurar su navegador para rechazar, eliminar o bloquear cookies. Tenga presente que deshabilitar ciertas cookies podría afectar la experiencia de navegación o algunas funciones del sitio.",
        "El formulario de contacto puede incluir mecanismos antifraude (como campos ocultos) que no recaban datos de identificación adicionales más allá de lo necesario para filtrar envíos automatizados indebidos.",
      ],
    },
    {
      id: "menores",
      title: "9. Mayores de edad y datos de menores",
      paragraphs: [
        `Los servicios de ${SITE.name} y este sitio web están dirigidos exclusivamente a personas mayores de edad (18 años o más) con capacidad legal para contratar. El Responsable solo establece relación comercial o profesional con adultos; no acepta menores de edad como titulares del encargo ni como contratantes.`,
        "Al proporcionar datos a través del sitio, del formulario, de WhatsApp, correo u otros canales, usted declara ser mayor de edad. Si el Responsable advierte que quien contacta es menor de edad, podrá abstenerse de continuar el tratamiento con fines de contratación y, en su caso, eliminar o bloquear los datos conforme a la Ley.",
        "Únicamente podrán tratarse datos personales de menores cuando un adulto —quien ejerza la patria potestad, tutela o representación legal— los aporte en el marco de un trámite familiar o migratorio que ese adulto haya encargado (por ejemplo, reunificación familiar o documentos de hijos a cargo). Quien los proporcione garantiza la veracidad de la información y su legitimación para el tratamiento.",
      ],
    },
    {
      id: "cambios",
      title: "10. Cambios al Aviso de Privacidad",
      paragraphs: [
        `El Responsable podrá modificar este Aviso de Privacidad cuando sea necesario por cambios legislativos, jurisprudenciales, de servicios o de políticas internas. Las actualizaciones se publicarán en esta misma página web (${SITE.name}), con la fecha de la última versión. Se recomienda revisarlo periódicamente.`,
        "Cuando los cambios sean sustanciales y la normativa lo exija, se pondrán a disposición de los titulares a través de los medios de contacto disponibles o mediante un aviso destacado en el sitio.",
      ],
    },
    {
      id: "consentimiento",
      title: "11. Consentimiento",
      paragraphs: [
        "Al marcar la casilla de aceptación en el formulario de contacto, al enviar datos por WhatsApp o correo, o al continuar el uso del sitio habiendo tenido acceso a este Aviso, usted declara ser mayor de edad y consiente el tratamiento de sus datos personales en los términos aquí descritos, sin perjuicio de los derechos que la Ley le reconoce y de las finalidades que no requieren consentimiento por estar amparadas en alguna de las excepciones legales.",
      ],
    },
  ],
};
