import { Star, Quote, MapPin } from 'lucide-react';
import type { Testimonial } from '@/lib/types';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section id="testimonials" className="section bg-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="Client stories"
          title="Trusted by business owners worldwide"
          subtitle="Real results from founders and finance teams who finally have books they can trust."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-2xl border border-slate-100 bg-slate-50/60 p-7 shadow-card">
                <Quote size={32} className="text-brand-200" />
                <div className="mt-3 flex">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-slate-700">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-slate-200 pt-4">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-sm font-bold text-white">
                      {t.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-navy-900">{t.name}</p>
                      <p className="text-xs text-slate-500">{t.role}</p>
                    </div>
                  </div>
                  <p className="mt-3 inline-flex items-center gap-1 text-xs text-slate-400">
                    <MapPin size={12} /> {t.location}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
