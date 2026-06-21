import { ArrowRight, Sparkles } from 'lucide-react';
import { Reveal } from './Reveal';

export function CtaBanner() {
  return (
    <section className="bg-white py-4">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 px-8 py-12 text-center sm:px-12 sm:py-16">
            <div className="absolute inset-0 bg-grid bg-grid-faint opacity-40" />
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
            <div className="relative mx-auto max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur">
                <Sparkles size={16} /> Free, no-obligation quote
              </span>
              <h2 className="mt-5 text-balance text-3xl font-extrabold text-white sm:text-4xl">
                Ready for books you can finally trust?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-balance text-lg text-white/90">
                Join business owners worldwide who&apos;ve handed off the stress of bookkeeping. Get
                started today and see the difference accuracy makes.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="btn group bg-white text-brand-700 hover:-translate-y-0.5 hover:bg-brand-50"
                >
                  Get my free quote
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </a>
                <a href="#pricing" className="btn-ghost-light">
                  Compare packages
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
