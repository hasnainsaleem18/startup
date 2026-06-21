'use client';

import { useEffect, useState } from 'react';
import { Menu, X, BookOpenCheck } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'How it works' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#faq', label: 'FAQ' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-navy-100/70 bg-white/85 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-page flex h-[72px] items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5" aria-label={siteConfig.name}>
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-500 text-white shadow-glow">
            <BookOpenCheck size={22} strokeWidth={2.2} />
          </span>
          <span
            className={`text-xl font-extrabold tracking-tight ${
              scrolled ? 'text-navy-900' : 'text-white'
            }`}
          >
            {siteConfig.name}
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                scrolled ? 'text-slate-600 hover:text-brand-600' : 'text-navy-100/90 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
            className="btn-primary px-5 py-2.5 text-sm"
          >
            Get a Free Quote
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`grid h-10 w-10 place-items-center rounded-lg lg:hidden ${
            scrolled ? 'text-navy-900' : 'text-white'
          }`}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open ? (
        <div className="lg:hidden">
          <div className="container-page space-y-1 border-t border-navy-100 bg-white pb-5 pt-2 shadow-lg">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
