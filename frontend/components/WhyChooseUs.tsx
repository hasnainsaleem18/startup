import type { ValueProp } from '@/lib/types';
import { getIcon } from '@/lib/icons';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function WhyChooseUs({ valueProps }: { valueProps: ValueProp[] }) {
  return (
    <section className="section bg-slate-50">
      <div className="container-page">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why choose us"
              title="A bookkeeper you can actually rely on"
              subtitle="No guesswork, no missed deadlines, no surprises — just accurate, confidential books and clear communication, every single time."
            />
            <Reveal delay={0.15} className="mt-8">
              <a href="#contact" className="btn-primary">
                Start with a free quote
              </a>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {valueProps.map((vp, i) => {
              const Icon = getIcon(vp.icon);
              return (
                <Reveal key={vp.id} delay={i * 0.08}>
                  <div className="h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                    <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-base font-bold text-navy-900">{vp.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{vp.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
