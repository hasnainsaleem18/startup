import {
  Calculator,
  Building2,
  Landmark,
  FileText,
  LineChart,
  Table,
  UserCheck,
  ShieldCheck,
  Lock,
  Headset,
  type LucideIcon,
} from 'lucide-react';

/** Maps icon names returned by the API to lucide-react components. */
const iconMap: Record<string, LucideIcon> = {
  Calculator,
  Building2,
  Landmark,
  FileText,
  LineChart,
  Table,
  UserCheck,
  ShieldCheck,
  Lock,
  Headset,
};

export const getIcon = (name: string): LucideIcon => iconMap[name] ?? FileText;
