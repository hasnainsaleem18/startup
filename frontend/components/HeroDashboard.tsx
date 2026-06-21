'use client';

import { motion } from 'framer-motion';
import { TrendingUp, ArrowUpRight } from 'lucide-react';

const incomeBars = [38, 52, 44, 66, 58, 78, 70, 88];

export function HeroDashboard() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      {/* Glow */}
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-brand-500/20 blur-3xl" />

      {/* Dashboard card */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="rounded-2xl border border-white/10 bg-white p-5 shadow-2xl"
      >
        {/* Top bar */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-brand-500 text-xs font-bold text-white">
              qb
            </span>
            <span className="text-sm font-bold text-navy-900">QuickBooks</span>
          </div>
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-brand-400" />
          </div>
        </div>

        {/* Stat tiles */}
        <div className="grid grid-cols-3 gap-3">
          <StatTile label="Profit & Loss" value="$23,876" tone="navy" />
          <StatTile label="Expenses" value="$8,123" tone="amber" />
          <StatTile label="Income" value="$32,000" tone="brand" />
        </div>

        {/* Charts row */}
        <div className="mt-3 grid grid-cols-5 gap-3">
          {/* Donut */}
          <div className="col-span-2 rounded-xl border border-slate-100 bg-slate-50/60 p-3">
            <p className="mb-2 text-[11px] font-semibold text-slate-500">Expenses</p>
            <div className="relative mx-auto h-[88px] w-[88px]">
              <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="#e2e8f0" strokeWidth="4" />
                <circle
                  cx="18"
                  cy="18"
                  r="15.9"
                  fill="none"
                  stroke="#2E9E4F"
                  strokeWidth="4"
                  strokeDasharray="42 100"
                  strokeLinecap="round"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="15.9"
                  fill="none"
                  stroke="#1B6FB8"
                  strokeWidth="4"
                  strokeDasharray="28 100"
                  strokeDashoffset="-42"
                  strokeLinecap="round"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="15.9"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="4"
                  strokeDasharray="18 100"
                  strokeDashoffset="-70"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 grid place-items-center">
                <span className="text-xs font-bold text-navy-900">100%</span>
              </div>
            </div>
          </div>

          {/* Income bars */}
          <div className="col-span-3 rounded-xl border border-slate-100 bg-slate-50/60 p-3">
            <div className="mb-1 flex items-center justify-between">
              <p className="text-[11px] font-semibold text-slate-500">Income · 30 days</p>
              <span className="inline-flex items-center gap-0.5 rounded-full bg-brand-50 px-1.5 py-0.5 text-[10px] font-bold text-brand-700">
                <ArrowUpRight size={10} /> 18%
              </span>
            </div>
            <div className="flex h-[78px] items-end justify-between gap-1.5">
              {incomeBars.map((h, i) => (
                <motion.span
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.7, delay: 0.3 + i * 0.07, ease: 'easeOut' }}
                  className="w-full rounded-t-sm bg-gradient-to-t from-brand-500 to-brand-300"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bank row */}
        <div className="mt-3 rounded-xl border border-slate-100 p-3">
          <p className="mb-2 text-[11px] font-semibold text-slate-500">Bank Accounts</p>
          <div className="space-y-2">
            <BankRow name="Operating Account" amount="$12,435.65" />
            <BankRow name="Savings Account" amount="$8,987.43" />
          </div>
        </div>
      </motion.div>

      {/* Floating 11+ years badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute -left-7 top-[44%] hidden animate-float lg:block"
      >
        <div className="grid h-24 w-24 place-items-center rounded-full border-4 border-brand-400 bg-white text-center shadow-xl">
          <div>
            <p className="text-2xl font-black leading-none text-navy-900">11+</p>
            <p className="text-[9px] font-bold uppercase tracking-wide text-brand-600">Years Exp.</p>
          </div>
        </div>
      </motion.div>

      {/* Floating accuracy pill */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="absolute -right-5 bottom-8 hidden rounded-xl border border-brand-100 bg-white px-3 py-2 shadow-lg lg:flex lg:items-center lg:gap-2"
      >
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-50 text-brand-600">
          <TrendingUp size={16} />
        </span>
        <div>
          <p className="text-xs font-bold text-navy-900">100% Accurate</p>
          <p className="text-[10px] text-slate-500">Reconciled books</p>
        </div>
      </motion.div>
    </div>
  );
}

function StatTile({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: 'navy' | 'amber' | 'brand';
}) {
  const tones = {
    navy: 'text-navy-900',
    amber: 'text-amber-600',
    brand: 'text-brand-600',
  } as const;
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-2.5">
      <p className="text-[10px] font-medium text-slate-500">{label}</p>
      <p className={`mt-1 text-sm font-extrabold ${tones[tone]}`}>{value}</p>
    </div>
  );
}

function BankRow({ name, amount }: { name: string; amount: string }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="h-6 w-6 rounded-md bg-gradient-to-br from-navy-700 to-navy-900" />
        <span className="text-xs font-medium text-slate-700">{name}</span>
      </div>
      <span className="text-xs font-bold text-navy-900">{amount}</span>
    </div>
  );
}
