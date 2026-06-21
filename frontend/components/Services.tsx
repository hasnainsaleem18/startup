import type { ServiceItem } from '@/lib/types';
import { getIcon } from '@/lib/icons';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Services({ services }: { services: ServiceItem[] }) {
  return (
    <section id="services" className="section bg-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="What we do"
          title="Bookkeeping services that keep you in control"
          subtitle="From clean-ups to ongoing monthly bookkeeping — every number reconciled, organized and ready when you need it."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = getIcon(service.icon);
            return (
              <Reveal key={service.id} delay={i * 0.06}>
                <article className="group h-full rounded-2xl border border-slate-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-card-hover">
                  <div className="mb-5 grid h-14 w-14 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
                    <Icon size={26} strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900">{service.title}</h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
