import type { ProcessStep } from '@/lib/types';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Process({ steps }: { steps: ProcessStep[] }) {
  return (
    <section id="process" className="section bg-slate-50">
      <div className="container-page">
        <SectionHeading
          eyebrow="How it works"
          title="Clean books in four simple steps"
          subtitle="A smooth, transparent process designed to get your finances organized fast — without the back-and-forth."
        />

        <div className="relative mt-16">
          {/* Connector line */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent lg:block" />

          <div className="grid gap-10 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.1} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="relative z-10 grid h-14 w-14 place-items-center rounded-full bg-brand-500 text-lg font-black text-white shadow-glow ring-8 ring-slate-50">
                    {s.step}
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy-900">{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{s.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
