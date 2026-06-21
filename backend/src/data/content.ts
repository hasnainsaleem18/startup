/**
 * Single source of truth for all marketing content served to the frontend.
 * The frontend renders whatever the API returns, so the business can evolve
 * copy/pricing here without touching the UI.
 */

export interface ServiceItem {
  id: string;
  icon: string; // lucide-react icon name resolved on the frontend
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

export const services: ServiceItem[] = [
  {
    id: 'qbo',
    icon: 'Calculator',
    title: 'QuickBooks Online Bookkeeping',
    description:
      'End-to-end QBO setup, clean-up and ongoing bookkeeping so your books are always accurate and review-ready.',
  },
  {
    id: 'sap-b1',
    icon: 'Building2',
    title: 'SAP Business One Accounting',
    description:
      'Expert SAP Business One accounting — journal entries, master data and reporting handled the right way.',
  },
  {
    id: 'bank-rec',
    icon: 'Landmark',
    title: 'Bank Reconciliation',
    description:
      'Every account reconciled to the penny each period so you can trust your cash position at a glance.',
  },
  {
    id: 'ap-ar',
    icon: 'FileText',
    title: 'Accounts Payable & Receivable',
    description:
      'Track what you owe and what you are owed — bills, invoices and aging managed so nothing slips through.',
  },
  {
    id: 'reporting',
    icon: 'LineChart',
    title: 'Financial Reporting & Analysis',
    description:
      'Monthly P&L, balance sheet and cash-flow reports with plain-English insights you can actually act on.',
  },
  {
    id: 'excel',
    icon: 'Table',
    title: 'Excel Reports & Data Management',
    description:
      'Custom Excel dashboards and clean, structured data so your numbers are organized and easy to share.',
  },
];

export const packages: PricingPackage[] = [
  {
    id: 'basic',
    name: 'Basic',
    tagline: 'Starter Package',
    price: 15,
    currency: 'USD',
    unit: '/ project',
    delivery: '2 Days Delivery',
    accent: 'basic',
    popular: false,
    features: [
      { label: 'Up to 50 Transactions' },
      { label: 'Bank Reconciliation' },
      { label: 'Data Entry' },
      { label: '2 Days Delivery' },
    ],
  },
  {
    id: 'standard',
    name: 'Standard',
    tagline: 'Growth Package',
    price: 40,
    currency: 'USD',
    unit: '/ project',
    delivery: '3–4 Days Delivery',
    accent: 'standard',
    popular: true,
    features: [
      { label: 'Up to 200 Transactions' },
      { label: 'Bookkeeping in QBO / SAP B1' },
      { label: 'Bank Reconciliation' },
      { label: 'Accounts Payable / Receivable' },
      { label: 'Financial Reports' },
      { label: '3–4 Days Delivery' },
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    tagline: 'Complete Package',
    price: 90,
    currency: 'USD',
    unit: '/ project',
    delivery: '5–7 Days Delivery',
    accent: 'premium',
    popular: false,
    features: [
      { label: 'Up to 500 Transactions' },
      { label: 'Full Bookkeeping in QBO or SAP B1' },
      { label: 'Bank Reconciliation' },
      { label: 'Accounts Payable / Receivable' },
      { label: 'Monthly Financial Reports' },
      { label: 'Excel Reports & Analysis' },
      { label: '5–7 Days Delivery' },
    ],
  },
];

export const valueProps: ValueProp[] = [
  {
    id: 'experience',
    icon: 'UserCheck',
    title: '11+ Years Experience',
    description: 'Over a decade of hands-on accounting across QuickBooks Online and SAP Business One.',
  },
  {
    id: 'accurate',
    icon: 'ShieldCheck',
    title: 'Accurate & Reliable',
    description: 'Meticulous, double-checked work with a 100% accuracy commitment on every deliverable.',
  },
  {
    id: 'confidential',
    icon: 'Lock',
    title: 'Confidentiality Guaranteed',
    description: 'Your financial data stays private and secure — handled with strict confidentiality.',
  },
  {
    id: 'communication',
    icon: 'Headset',
    title: 'Professional Communication',
    description: 'Clear, prompt updates and responsive support throughout every engagement.',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Mitchell',
    role: 'Founder, Mitchell Retail Co.',
    location: 'United States',
    rating: 5,
    quote:
      'My books were a mess for two years. Within a week everything was reconciled and clean in QuickBooks. Incredible attention to detail.',
  },
  {
    id: 't2',
    name: 'David Khan',
    role: 'Operations Director',
    location: 'United Kingdom',
    rating: 5,
    quote:
      'We run SAP Business One and finding someone who truly knows it is rare. The monthly reports are clear, on time and accurate every single month.',
  },
  {
    id: 't3',
    name: 'Aisha Rahman',
    role: 'Owner, Bloom Studio',
    location: 'United Arab Emirates',
    rating: 5,
    quote:
      'Professional, confidential and fast. I finally understand my numbers and can make decisions with confidence. Highly recommend.',
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: 'p1',
    step: 1,
    title: 'Share Your Books',
    description: 'Send your QuickBooks Online or SAP Business One access and a quick overview of your needs.',
  },
  {
    id: 'p2',
    step: 2,
    title: 'We Reconcile & Organize',
    description: 'We categorize transactions, reconcile accounts and clean up your ledgers with precision.',
  },
  {
    id: 'p3',
    step: 3,
    title: 'Review & Reporting',
    description: 'You receive accurate financial reports plus clear insights into your business performance.',
  },
  {
    id: 'p4',
    step: 4,
    title: 'Ongoing Support',
    description: 'We keep your books current every period so you always stay audit- and decision-ready.',
  },
];

export const faqs: FaqItem[] = [
  {
    id: 'f1',
    question: 'Which accounting software do you work with?',
    answer:
      'We specialize in QuickBooks Online (QBO) and SAP Business One (SAP B1), with 11+ years of hands-on experience across both platforms.',
  },
  {
    id: 'f2',
    question: 'Is my financial data kept confidential?',
    answer:
      'Absolutely. Confidentiality is guaranteed. Your data is handled securely and never shared with anyone outside the engagement.',
  },
  {
    id: 'f3',
    question: 'How long does a typical project take?',
    answer:
      'It depends on the package and transaction volume. Basic projects deliver in 2 days, Standard in 3–4 days, and Premium in 5–7 days.',
  },
  {
    id: 'f4',
    question: 'Do you offer ongoing monthly bookkeeping?',
    answer:
      'Yes. Beyond one-time clean-ups, we offer ongoing monthly bookkeeping so your books stay accurate and current all year round.',
  },
  {
    id: 'f5',
    question: 'What if my needs do not fit a package?',
    answer:
      'No problem. Send us a message with your requirements and we will put together a custom quote tailored to your business.',
  },
];

export const stats: SiteStats = {
  yearsExperience: 11,
  clientsServed: 250,
  transactionsProcessed: 100000,
  accuracyRate: 100,
};
