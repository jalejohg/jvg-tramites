import LegalDocumentView from "@/components/legal/LegalDocumentView";
import { AVISO_PRIVACIDAD } from "@/data/legal/avisoPrivacidad";

export default function AvisoPrivacidadScreen() {
  return <LegalDocumentView doc={AVISO_PRIVACIDAD} />;
}
