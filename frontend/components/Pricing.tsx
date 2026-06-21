'use client';

import { Check, Truck, Star } from 'lucide-react';
import type { PricingPackage } from '@/lib/types';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';
import { selectPackage } from '@/lib/selectPackage';

const accentStyles = {
  basic: {
    header: 'bg-gradient-to-r from-brand-600 to-brand-500',
    price: 'text-brand-600',
    check: 'text-brand-500',
  },
  standard: {
    header: 'bg-gradient-to-r from-accent-600 to-accent-500',
    price: 'text-accent-500',
    check: 'text-accent-500',
  },
  premium: {
    header: 'bg-gradient-to-r from-brand-700 to-brand-600',
    price: 'text-brand-700',
    check: 'text-brand-600',
  },
} as const;

export function Pricing({ packages }: { packages: PricingPackage[] }) {
  return (
    <section id="pricing" className="section bg-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, transparent packages"
          subtitle="Pick a package that fits your transaction volume. Need something different? Request a custom quote — no obligation."
        />

        <div className="mt-14 grid items-stretch gap-7 lg:grid-cols-3">
          {packages.map((pkg, i) => {
            const styles = accentStyles[pkg.accent];
            const popular = pkg.popular;
            return (
              <Reveal key={pkg.id} delay={i * 0.08}>
                <div
                  className={`relative flex h-full flex-col overflow-hidden rounded-2xl bg-white transition-all duration-300 ${
                    popular
                      ? 'border-2 border-accent-500 shadow-card-hover lg:-translate-y-3'
                      : 'border border-slate-200 shadow-card hover:-translate-y-1 hover:shadow-card-hover'
                  }`}
                >
                  {popular ? (
                    <div className="absolute right-4 top-4 z-10 inline-flex items-center gap-1 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-navy-900 shadow">
                      <Star size={12} className="fill-navy-900" /> Most Popular
                    </div>
                  ) : null}

                  {/* Header */}
                  <div className={`${styles.header} px-7 py-6 text-white`}>
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-extrabold">{pkg.name}</h3>
                      <div className="grid h-12 w-12 place-items-center rounded-full bg-white/15 text-lg font-black backdrop-blur">
                        ${pkg.price}
                      </div>
                    </div>
                    <p className="mt-1 text-sm font-medium uppercase tracking-wide text-white/80">
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col px-7 py-7">
                    <div className="flex items-end gap-1">
                      <span className={`text-4xl font-black ${styles.price}`}>${pkg.price}</span>
                      <span className="mb-1 text-sm text-slate-400">{pkg.unit}</span>
                    </div>

                    <ul className="mt-6 flex-1 space-y-3.5">
                      {pkg.features.map((f) => (
                        <li key={f.label} className="flex items-start gap-3 text-[15px] text-slate-700">
                          <Check size={18} className={`mt-0.5 shrink-0 ${styles.check}`} strokeWidth={3} />
                          {f.label}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-600">
                      <Truck size={16} className={styles.check} />
                      {pkg.delivery}
                    </div>

                    <button
                      type="button"
                      onClick={() => selectPackage(pkg.id)}
                      className={`mt-6 w-full ${popular ? 'btn-primary' : 'btn-secondary'}`}
                    >
                      Choose {pkg.name}
                    </button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          All packages include a 100% accuracy commitment and strict confidentiality.{' '}
          <button
            type="button"
            onClick={() => selectPackage('custom')}
            className="font-semibold text-brand-600 underline-offset-2 hover:underline"
          >
            Need a custom quote?
          </button>
        </p>
      </div>
    </section>
  );
}
