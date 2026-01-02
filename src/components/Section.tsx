import { ReactNode } from 'react';
import clsx from 'clsx';

interface SectionProps {
  id?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, title, children, className }: SectionProps) {
  return (
    <section id={id} className={clsx("py-20 px-6 md:px-12 max-w-7xl mx-auto", className)}>
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-100 flex items-center gap-4">
          <span className="text-blue-500">#</span> {title}
        </h2>
      )}
      {children}
    </section>
  );
}
