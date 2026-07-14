import { Layers } from 'lucide-react';
import clsx from 'clsx';
import Section from './Section';
import { skillGroups } from '../data';

export default function Skills() {
  return (
    <Section id="skills" title="Technical Skills" icon={Layers}>
      <div className="skills-wrapper">
        {skillGroups.map((group) => (
          <div className={clsx('skills-box', group.accent)} key={group.title}>
            <h3>{group.title}</h3>
            <div className="skills-badge-list">
              {group.skills.map((skill) => (
                <span className="skill-badge" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
