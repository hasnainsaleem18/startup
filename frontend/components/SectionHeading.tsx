import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: 'center' | 'left';
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center items-center' : 'text-left items-start';
  return (
    <Reveal className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2
        className={`text-balance text-3xl font-extrabold tracking-tight sm:text-4xl ${
          light ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className={`text-balance text-lg leading-relaxed ${light ? 'text-navy-100/80' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
