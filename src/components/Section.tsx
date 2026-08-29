import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionProps {
  id: string;
  title: string;
  icon: LucideIcon;
  children: ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="stream-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}
