export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface PackageFeature {
  label: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  tagline: string;
  price: number;
  currency: string;
  unit: string;
  delivery: string;
  features: PackageFeature[];
  popular: boolean;
  accent: 'basic' | 'standard' | 'premium';
}

export interface ValueProp {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  quote: string;
}

export interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface SiteStats {
  yearsExperience: number;
  clientsServed: number;
  transactionsProcessed: number;
  accuracyRate: number;
}

export interface SiteContent {
  services: ServiceItem[];
  packages: PricingPackage[];
  valueProps: ValueProp[];
  testimonials: Testimonial[];
  processSteps: ProcessStep[];
  faqs: FaqItem[];
  stats: SiteStats;
}

export interface ApiResponse<T> {
  ok: boolean;
  data?: T;
  message?: string;
  error?: string;
  fields?: Record<string, string>;
}
