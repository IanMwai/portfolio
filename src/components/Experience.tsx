import { Briefcase } from 'lucide-react';
import clsx from 'clsx';
import Section from './Section';
import { experiences } from '../data';

export default function Experience() {
  return (
    <Section id="experience" title="Experience" icon={Briefcase}>
      <div className="timeline-container">
        <div className="timeline-line" aria-hidden />
        {experiences.map((exp) => (
          <div className={clsx('timeline-item', exp.active && 'active')} key={exp.company + exp.role}>
            <div className="timeline-dot" aria-hidden />
            <div className="exp-content-box">
              <div className="exp-header">
                <div>
                  <div className="exp-role">{exp.role}</div>
                  <div className="exp-co">{exp.company}</div>
                </div>
                <span className="exp-date">{exp.period}</span>
              </div>
              <div className="catalog-tag-row">
                {exp.tags.map((tag) => (
                  <span className={clsx('catalog-tag', tag.variant)} key={tag.label}>
                    {tag.label}
                  </span>
                ))}
              </div>
              <p className="exp-desc">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
