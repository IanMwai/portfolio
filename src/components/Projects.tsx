import { Cpu, ExternalLink, FileText, Github, Play, PlayCircle } from 'lucide-react';
import Section from './Section';
import { projects, ProjectLinkKind } from '../data';

const linkIcons: Record<ProjectLinkKind, typeof ExternalLink> = {
  external: ExternalLink,
  github: Github,
  video: PlayCircle,
  pdf: FileText,
  none: ExternalLink,
};

export default function Projects() {
  return (
    <Section id="projects" title="Selected Technical Work" icon={Cpu}>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="fusion-card proj-card" key={project.title}>
            <div>
              <div className="proj-title">{project.title}</div>
              <p className="proj-desc">{project.description}</p>
              {project.video ? (
                <a
                  className="project-video-preview"
                  href={project.video.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Watch ${project.title} video demo`}
                >
                  <img src={project.video.thumbnail} alt={`${project.title} video preview`} loading="lazy" />
                  <span className="video-play-badge" aria-hidden>
                    <Play />
                  </span>
                </a>
              ) : (
                <div
                  className="project-video-preview placeholder"
                  aria-label={`${project.title} video coming soon`}
                >
                  <span className="video-soon-label">
                    <Play aria-hidden /> Video coming soon
                  </span>
                </div>
              )}
            </div>
            <div>
              <div className="tech-pill-row">
                {project.tech.map((t) => (
                  <span className="tech-pill" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="proj-links-row">
                {project.links.map((link) => {
                  const LinkIcon = linkIcons[link.kind];
                  return (
                    <a className="proj-link" href={link.url} target="_blank" rel="noreferrer" key={link.label + link.url}>
                      <LinkIcon aria-hidden /> {link.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
