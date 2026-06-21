'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Clock, ArrowRight, Star } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';
import { HeroDashboard } from './HeroDashboard';

const trust = [
  { icon: ShieldCheck, label: '100% Accuracy' },
  { icon: Lock, label: 'Confidential Data' },
  { icon: Clock, label: 'On-Time Delivery' },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-navy-900 pb-20 pt-28 sm:pb-28 sm:pt-32"
    >
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-navy-radial" />
      <div className="absolute inset-0 bg-grid bg-grid-faint opacity-60" />
      <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-brand-500/10 blur-3xl" />

      <div className="container-page relative">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left: copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-2"
            >
              {siteConfig.badges.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-300"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                  {b}
                </span>
              ))}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-6 text-balance text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]"
            >
              <span className="gradient-text">QuickBooks Online</span> &{' '}
              <span className="gradient-text">SAP Business One</span> Bookkeeping Expert
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-navy-100/80"
            >
              {siteConfig.shortPitch}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <a href="#contact" className="btn-primary group">
                Get a Free Quote
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#pricing" className="btn-ghost-light">
                View Pricing
              </a>
            </motion.div>

            {/* Rating + trust */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm text-navy-100/80">
                  <span className="font-bold text-white">5.0</span> from happy clients
                </span>
              </div>
            </motion.div>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              {trust.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-navy-100/90">
                  <Icon size={18} className="text-brand-400" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Right: dashboard */}
          <div className="relative">
            <HeroDashboard />
          </div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white/0" />
    </section>
  );
}
