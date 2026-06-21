'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import type { FaqItem } from '@/lib/types';
import { SectionHeading } from './SectionHeading';

export function Faq({ faqs }: { faqs: FaqItem[] }) {
  const [open, setOpen] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <section id="faq" className="section bg-slate-50">
      <div className="container-page">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered"
          subtitle="Everything you need to know before getting started. Still curious? Just ask."
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map((f) => {
            const isOpen = open === f.id;
            return (
              <div
                key={f.id}
                className={`overflow-hidden rounded-xl border bg-white transition-colors ${
                  isOpen ? 'border-brand-200 shadow-card' : 'border-slate-200'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : f.id)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] font-semibold text-navy-900">{f.question}</span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-brand-500 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: 'easeInOut' }}
                    >
                      <p className="px-6 pb-5 text-[15px] leading-relaxed text-slate-600">{f.answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
