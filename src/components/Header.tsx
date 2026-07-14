import { Terminal, User, Cpu, Briefcase, Layers, BookOpen } from 'lucide-react';
import { personalInfo } from '../data';

const navItems = [
  { href: '#about', label: 'About', icon: User },
  { href: '#projects', label: 'Projects', icon: Cpu },
  { href: '#experience', label: 'Experience', icon: Briefcase },
  { href: '#skills', label: 'Skills', icon: Layers },
  { href: '#writings', label: 'Writing', icon: BookOpen },
];

export default function Header() {
  return (
    <>
      <header className="brand-header">
        <div className="brand-logo">
          <Terminal size={16} aria-hidden /> {personalInfo.brand}
        </div>
        <div>{personalInfo.brandTagline}</div>
      </header>

      <nav className="sticky-navbar">
        <div className="nav-links">
          {navItems.map(({ href, label, icon: Icon }) => (
            <a key={href} href={href} className="nav-btn">
              <Icon aria-hidden /> {label}
            </a>
          ))}
        </div>
        <div className="nav-indicator">{personalInfo.navIndicator}</div>
      </nav>
    </>
  );
}
