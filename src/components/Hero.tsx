import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { personalInfo, proofCards } from '../data';

export default function Hero() {
  return (
    <section id="about" className="stream-section hero-profile fusion-card">
      <div className="hero-main">
        <div className="avatar-frame">
          <img src={personalInfo.headshot} alt={personalInfo.name} />
        </div>
        <div>
          <h1>{personalInfo.name}</h1>
          <div className="hero-title">{personalInfo.role}</div>
          <div className="status-badge">{personalInfo.statusBadge}</div>
          <p className="bio-text">{personalInfo.bio}</p>
          <div className="tactile-btn-stack">
            <a href={personalInfo.links.github} className="tactile-btn github" target="_blank" rel="noreferrer">
              <Github aria-hidden /> GitHub
            </a>
            <a href={personalInfo.links.linkedin} className="tactile-btn linkedin" target="_blank" rel="noreferrer">
              <Linkedin aria-hidden /> LinkedIn
            </a>
            <a href={personalInfo.links.email} className="tactile-btn mail">
              <Mail aria-hidden /> Email
            </a>
            <a href={personalInfo.links.resume} className="tactile-btn resume" target="_blank" rel="noreferrer">
              <FileText aria-hidden /> Resume
            </a>
          </div>
        </div>
      </div>

      <div className="proof-grid">
        {proofCards.map((card) => (
          <div className="proof-card" key={card.title}>
            <h3>{card.title}</h3>
            <p>{card.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
