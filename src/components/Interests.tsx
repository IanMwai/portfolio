import { Compass } from 'lucide-react';
import Section from './Section';
import { interests, writing } from '../data';

export default function Interests() {
  return (
    <Section id="extracurriculars" title="When I’m Away From Engineering" icon={Compass}>
      <div className="extracurricular-card">
        <p className="interests-intro">
          While engineering is a big part of my life, it certainly isn’t the whole story.
          Away from classes and labs, these are some of the things I find fulfilling.
        </p>
        <div className="interest-grid">
          {interests.map((interest) => (
            <article className="interest-item" key={interest.title}>
              <h3>{interest.title}</h3>
              <p>{interest.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="writing-section">
        <div className="writing-introduction">
          <h3>Things I Write About</h3>
          <p>
            Writing is one of the ways I make sense of what I am learning and experiencing.
            Depending on the day, that might mean thinking through a technical idea, recording
            a place I have visited, or reflecting on something happening around me.
          </p>
        </div>
        <div className="writing-list">
          {writing.map((item) => (
            <a href={item.url} className="writing-item" target="_blank" rel="noreferrer" key={item.title}>
              <div>
                <span className="writing-platform">{item.platform}</span>
                <h4 className="writing-title">{item.title}</h4>
                <p className="writing-summary">{item.summary}</p>
              </div>
              <span className="writing-arrow" aria-hidden>
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
