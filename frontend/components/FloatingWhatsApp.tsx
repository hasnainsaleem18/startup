'use client';

import { useEffect, useState } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

export function FloatingWhatsApp() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-center gap-3">
      {showTop ? (
        <button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-navy-800 shadow-card transition-transform hover:-translate-y-0.5"
        >
          <ArrowUp size={20} />
        </button>
      ) : null}
      <a
        href={`https://wa.me/${siteConfig.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative grid h-14 w-14 place-items-center rounded-full bg-brand-500 text-white shadow-glow transition-transform hover:-translate-y-0.5"
      >
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-brand-500" />
        <MessageCircle size={26} className="relative" />
      </a>
    </div>
  );
}
