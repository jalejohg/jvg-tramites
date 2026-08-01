import LegalDocumentView from "@/components/legal/LegalDocumentView";
import { TERMINOS_Y_CONDICIONES } from "@/data/legal/terminos";

export default function TerminosScreen() {
  return <LegalDocumentView doc={TERMINOS_Y_CONDICIONES} />;
}
