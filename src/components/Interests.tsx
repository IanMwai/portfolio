import { Compass } from 'lucide-react';
import Section from './Section';
import { interests } from '../data';

export default function Interests() {
  return (
    <Section id="extracurriculars" title="Extracurriculars / Personal Interests" icon={Compass}>
      <div className="fusion-card extracurricular-card">
        <div className="interest-grid">
          {interests.map((interest) => (
            <span className="interest-chip" key={interest}>
              {interest}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
