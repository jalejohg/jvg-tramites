import type { Metadata } from "next";
import HomologacionScreen from "@/screens/HomologacionScreen";

export const metadata: Metadata = {
  title: "Homologación de títulos",
  description:
    "Homologación y validación de títulos universitarios para profesionales que desean ejercer en España, EE. UU., México y más.",
};

export default function HomologacionPage() {
  return <HomologacionScreen />;
}
