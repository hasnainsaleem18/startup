'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle2,
  Loader2,
  ShieldCheck,
  AlertCircle,
} from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';
import { submitLead, type LeadPayload } from '@/lib/api';
import { SELECT_PACKAGE_EVENT } from '@/lib/selectPackage';
import { SectionHeading } from './SectionHeading';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const packageOptions = [
  { value: '', label: 'General inquiry' },
  { value: 'basic', label: 'Basic — $15' },
  { value: 'standard', label: 'Standard — $40 (Most Popular)' },
  { value: 'premium', label: 'Premium — $90' },
  { value: 'custom', label: 'Custom quote' },
];

const initialForm = {
  name: '',
  email: '',
  company: '',
  phone: '',
  packageId: '',
  message: '',
};

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>('idle');
  const [serverMessage, setServerMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const messageRef = useRef<HTMLTextAreaElement>(null);

  // Listen for plan selection from the Pricing section.
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ packageId: string }>).detail;
      const packageId = detail?.packageId === 'custom' ? 'custom' : detail?.packageId ?? '';
      setForm((f) => ({
        ...f,
        packageId,
        message:
          f.message ||
          `Hi, I'm interested in the ${
            packageId && packageId !== 'custom' ? packageId : 'custom'
          } package. Here's a bit about my business: `,
      }));
      setStatus('idle');
      setTimeout(() => messageRef.current?.focus(), 600);
    };
    window.addEventListener(SELECT_PACKAGE_EVENT, handler);
    return () => window.removeEventListener(SELECT_PACKAGE_EVENT, handler);
  }, []);

  const update =
    (field: keyof typeof initialForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((f) => ({ ...f, [field]: e.target.value }));
      setFieldErrors((prev) => {
        if (!prev[field]) return prev;
        const next = { ...prev };
        delete next[field];
        return next;
      });
    };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setServerMessage('');
    setFieldErrors({});

    const isQuote = form.packageId !== '';
    const payload: LeadPayload = {
      name: form.name,
      email: form.email,
      company: form.company || undefined,
      phone: form.phone || undefined,
      message: form.message,
      ...(isQuote ? { packageId: form.packageId } : {}),
    };

    try {
      const res = await submitLead(isQuote ? 'quote' : 'contact', payload);
      if (res.ok) {
        setStatus('success');
        setServerMessage(res.message ?? 'Thanks! We will be in touch shortly.');
        setForm(initialForm);
      } else {
        setStatus('error');
        setFieldErrors(res.fields ?? {});
        setServerMessage(res.error ?? 'Please check the form and try again.');
      }
    } catch {
      setStatus('error');
      setServerMessage(
        'Could not reach the server. Please try again, or email us directly.'
      );
    }
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container-page">
        <div className="overflow-hidden rounded-3xl border border-slate-100 shadow-card-hover lg:grid lg:grid-cols-5">
          {/* Left info panel */}
          <div className="relative overflow-hidden bg-navy-900 p-8 sm:p-10 lg:col-span-2">
            <div className="absolute inset-0 bg-navy-radial opacity-80" />
            <div className="relative">
              <span className="eyebrow border-white/15 bg-white/5 text-brand-300">Get in touch</span>
              <h2 className="mt-5 text-3xl font-extrabold text-white">
                Let&apos;s get your books in order
              </h2>
              <p className="mt-3 leading-relaxed text-navy-100/80">
                Tell us about your business and we&apos;ll reply within{' '}
                <span className="font-semibold text-white">1 business day</span> with a free,
                no-obligation quote.
              </p>

              <div className="mt-9 space-y-5">
                <ContactLine icon={Mail} label="Email" value={siteConfig.email} href={`mailto:${siteConfig.email}`} />
                <ContactLine icon={Phone} label="Phone" value={siteConfig.phone} href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} />
                <ContactLine
                  icon={MessageCircle}
                  label="WhatsApp"
                  value="Chat with us"
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                />
                <ContactLine icon={MapPin} label="Availability" value={siteConfig.location} />
              </div>

              <div className="mt-10 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                <ShieldCheck className="text-brand-400" size={22} />
                <p className="text-sm text-navy-100/80">
                  Your information is kept strictly confidential and never shared.
                </p>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="p-8 sm:p-10 lg:col-span-3">
            {status === 'success' ? (
              <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-brand-50 text-brand-600">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="mt-5 text-2xl font-bold text-navy-900">Message sent!</h3>
                <p className="mt-2 max-w-sm text-slate-600">{serverMessage}</p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="btn-secondary mt-7"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" error={fieldErrors.name}>
                    <input
                      type="text"
                      value={form.name}
                      onChange={update('name')}
                      placeholder="Jane Doe"
                      className={inputCls(fieldErrors.name)}
                      autoComplete="name"
                    />
                  </Field>
                  <Field label="Email" error={fieldErrors.email}>
                    <input
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      placeholder="jane@company.com"
                      className={inputCls(fieldErrors.email)}
                      autoComplete="email"
                    />
                  </Field>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Company (optional)" error={fieldErrors.company}>
                    <input
                      type="text"
                      value={form.company}
                      onChange={update('company')}
                      placeholder="Acme Inc."
                      className={inputCls(fieldErrors.company)}
                      autoComplete="organization"
                    />
                  </Field>
                  <Field label="Phone (optional)" error={fieldErrors.phone}>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={update('phone')}
                      placeholder="+1 555 000 0000"
                      className={inputCls(fieldErrors.phone)}
                      autoComplete="tel"
                    />
                  </Field>
                </div>

                <Field label="Which package interests you?" error={fieldErrors.packageId}>
                  <select value={form.packageId} onChange={update('packageId')} className={inputCls()}>
                    {packageOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="How can we help?" error={fieldErrors.message}>
                  <textarea
                    ref={messageRef}
                    value={form.message}
                    onChange={update('message')}
                    rows={4}
                    placeholder="Tell us about your business, your accounting software (QBO / SAP B1) and what you need help with…"
                    className={inputCls(fieldErrors.message)}
                  />
                </Field>

                {status === 'error' && serverMessage ? (
                  <div className="flex items-start gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                    <AlertCircle size={18} className="mt-0.5 shrink-0" />
                    {serverMessage}
                  </div>
                ) : null}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> Sending…
                    </>
                  ) : (
                    <>
                      Send my request <Send size={18} />
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-slate-400">
                  No spam, ever. We typically reply within one business day.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function inputCls(error?: string) {
  return `w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-navy-900 outline-none transition-colors placeholder:text-slate-400 focus:ring-4 ${
    error
      ? 'border-red-300 focus:border-red-400 focus:ring-red-100'
      : 'border-slate-200 focus:border-brand-400 focus:ring-brand-100'
  }`;
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-navy-800">{label}</span>
      {children}
      {error ? <span className="mt-1 block text-xs font-medium text-red-600">{error}</span> : null}
    </label>
  );
}

function ContactLine({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-3">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/10 text-brand-300">
        <Icon size={18} />
      </span>
      <div>
        <p className="text-xs uppercase tracking-wide text-navy-100/60">{label}</p>
        <p className="text-sm font-semibold text-white">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="block transition-opacity hover:opacity-80">
      {content}
    </a>
  ) : (
    content
  );
}
