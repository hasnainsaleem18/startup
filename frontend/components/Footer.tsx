import { BookOpenCheck, Mail, Phone, Linkedin, Facebook, Briefcase } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

const nav = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'How it works' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

const serviceLinks = [
  'QuickBooks Online Bookkeeping',
  'SAP Business One Accounting',
  'Bank Reconciliation',
  'Accounts Payable & Receivable',
  'Financial Reporting',
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-950 text-navy-100/70">
      <div className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-500 text-white">
                <BookOpenCheck size={22} strokeWidth={2.2} />
              </span>
              <span className="text-xl font-extrabold text-white">{siteConfig.name}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed">{siteConfig.shortPitch}</p>
            <div className="mt-5 flex gap-3">
              <SocialLink href={siteConfig.social.linkedin} icon={Linkedin} label="LinkedIn" />
              <SocialLink href={siteConfig.social.facebook} icon={Facebook} label="Facebook" />
              <SocialLink href={siteConfig.social.upwork} icon={Briefcase} label="Upwork" />
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-white">Navigate</h4>
            <ul className="mt-4 space-y-2.5">
              {nav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm transition-colors hover:text-brand-300">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-white">Services</h4>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm transition-colors hover:text-brand-300">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-white">Get in touch</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 text-sm hover:text-brand-300">
                  <Mail size={16} /> {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-sm hover:text-brand-300">
                  <Phone size={16} /> {siteConfig.phone}
                </a>
              </li>
            </ul>
            <a href="#contact" className="btn-primary mt-5 px-5 py-2.5 text-sm">
              Get a Free Quote
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row">
          <p className="text-xs">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs">Reliable • Accurate • Confidential</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: typeof Linkedin;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-navy-100/70 transition-colors hover:bg-brand-500 hover:text-white"
    >
      <Icon size={18} />
    </a>
  );
}
