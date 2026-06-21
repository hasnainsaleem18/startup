/**
 * ──────────────────────────────────────────────────────────────────────────
 *  CUSTOMIZE YOUR BRAND HERE  (the only file you need to edit for branding)
 * ──────────────────────────────────────────────────────────────────────────
 * Change the business name, contact details and social links below.
 * Everything across the site reads from this object.
 */
export const siteConfig = {
  name: 'Ledgerly',
  tagline: 'QuickBooks Online & SAP Business One Bookkeeping Expert',
  shortPitch:
    'Reliable, accurate and confidential bookkeeping for growing businesses — powered by 11+ years of QuickBooks Online and SAP Business One expertise.',
  badges: ['Reliable', 'Accurate', 'Confidential'],

  // Contact details — used in the navbar, footer and contact section.
  email: 'hello@ledgerly.com',
  phone: '+1 (555) 010-2030',
  whatsapp: '15550102030', // digits only, used for the wa.me link
  location: 'Serving clients worldwide • Remote',

  social: {
    linkedin: 'https://linkedin.com',
    facebook: 'https://facebook.com',
    upwork: 'https://upwork.com',
  },
};

export type SiteConfig = typeof siteConfig;
