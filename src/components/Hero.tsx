import { personalInfo } from '../data';

export default function Hero() {
  return (
    <section id="about" className="stream-section hero-profile">
      <div className="hero-copy">
        <p className="hero-eyebrow">Electrical Engineering · Harvard University</p>
        <h1>
          Hello, I’m Ian.
          <span>
            Glad You’re Here <em>:)</em>
          </span>
        </h1>
        <div className="hero-introduction">
          {personalInfo.introduction.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="hero-links" aria-label="Ways to learn more about Ian">
          <a href="#projects">See What I’ve Been Building</a>
          <a href={personalInfo.links.resume} target="_blank" rel="noreferrer">
            Want the Formal Version? <span aria-hidden>↗</span>
          </a>
          <a href={personalInfo.links.email}>Say Hello</a>
        </div>
      </div>
      <figure className="portrait">
        <img src={personalInfo.headshot} alt="Ian Toyota" />
        <figcaption>{personalInfo.name} · Cambridge, Massachusetts</figcaption>
      </figure>
    </section>
  );
}
