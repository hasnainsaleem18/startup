'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import type { SiteStats } from '@/lib/types';

function useCountUp(target: number, run: boolean, duration = 1600) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run, duration]);
  return value;
}

function StatCard({
  value,
  suffix,
  label,
  run,
}: {
  value: number;
  suffix: string;
  label: string;
  run: boolean;
}) {
  const display = useCountUp(value, run);
  const formatted = value >= 1000 ? display.toLocaleString() : display;
  return (
    <div className="text-center">
      <p className="text-4xl font-black text-white sm:text-5xl">
        {formatted}
        <span className="text-brand-400">{suffix}</span>
      </p>
      <p className="mt-2 text-sm font-medium uppercase tracking-wide text-navy-100/70">{label}</p>
    </div>
  );
}

export function Stats({ stats }: { stats: SiteStats }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative overflow-hidden bg-navy-900 py-16">
      <div className="absolute inset-0 bg-navy-radial opacity-70" />
      <div className="container-page relative">
        <motion.div
          ref={ref}
          className="grid grid-cols-2 gap-8 lg:grid-cols-4"
        >
          <StatCard value={stats.yearsExperience} suffix="+" label="Years Experience" run={inView} />
          <StatCard value={stats.clientsServed} suffix="+" label="Clients Served" run={inView} />
          <StatCard
            value={stats.transactionsProcessed}
            suffix="+"
            label="Transactions Booked"
            run={inView}
          />
          <StatCard value={stats.accuracyRate} suffix="%" label="Accuracy Rate" run={inView} />
        </motion.div>
      </div>
    </section>
  );
}
