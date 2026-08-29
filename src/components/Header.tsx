import { personalInfo } from '../data';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#extracurriculars', label: 'Interests' },
];

export default function Header() {
  return (
    <header className="site-header">
      <a className="site-name" href="#about" aria-label="Back to the introduction">
        {personalInfo.name}
      </a>
      <nav className="site-nav" aria-label="Primary navigation">
        {navItems.map(({ href, label }) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
        <a href={personalInfo.links.linkedin} target="_blank" rel="noreferrer">
          LinkedIn <span aria-hidden>↗</span>
        </a>
      </nav>
    </header>
  );
}
