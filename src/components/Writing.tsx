import { BookOpen } from 'lucide-react';
import Section from './Section';
import { writing } from '../data';

export default function Writing() {
  return (
    <Section id="writings" title="Writing & Field Notes" icon={BookOpen}>
      <div className="writing-list">
        {writing.map((item) => (
          <a href={item.url} className="writing-item" target="_blank" rel="noreferrer" key={item.title}>
            <div className="writing-header">
              <h4 className="writing-title">{item.title}</h4>
              <span className="writing-platform">{item.platform}</span>
            </div>
            <p className="writing-summary">{item.summary}</p>
          </a>
        ))}
      </div>
    </Section>
  );
}
