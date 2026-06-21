import { Reveal } from './Reveal';

export function PlatformStrip() {
  return (
    <div className="border-b border-navy-100 bg-white">
      <div className="container-page py-8">
        <Reveal className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
            Certified expertise in the tools you trust
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            <div className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-slate-50 px-4 py-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-500 text-sm font-black text-white">
                qb
              </span>
              <div className="leading-tight">
                <p className="text-sm font-bold text-navy-900">QuickBooks</p>
                <p className="text-[11px] text-slate-500">Online</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-slate-50 px-4 py-2.5">
              <span className="grid h-8 px-2 place-items-center rounded-lg bg-navy-900 text-sm font-black text-white">
                SAP
              </span>
              <div className="leading-tight">
                <p className="text-sm font-bold text-navy-900">Business One</p>
                <p className="text-[11px] text-slate-500">ERP Accounting</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
