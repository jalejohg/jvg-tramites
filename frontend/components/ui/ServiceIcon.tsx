import {
  FileCheck,
  GraduationCap,
  Landmark,
  MapPin,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";
import type { ServiceItem } from "@/data/content";

const ICONS: Record<ServiceItem["icon"], LucideIcon> = {
  FileCheck,
  GraduationCap,
  Landmark,
  MapPin,
  HeartHandshake,
};

interface ServiceIconProps {
  name: ServiceItem["icon"];
  className?: string;
}

export default function ServiceIcon({ name, className }: ServiceIconProps) {
  const Icon = ICONS[name];
  return <Icon className={className} strokeWidth={1.75} aria-hidden />;
}
