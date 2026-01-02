import { useState, useEffect } from 'react';
import clsx from 'clsx';
import Menu from 'lucide-react/dist/esm/icons/menu';
import X from 'lucide-react/dist/esm/icons/x';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Writing', href: '#writing' },
  ];

  return (
    <header 
      className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-slate-950/80 backdrop-blur-md py-4 shadow-lg shadow-blue-900/10" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-blue-500 font-bold text-xl font-mono">
          &lt;IT /&gt;
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link, i) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-slate-400 hover:text-blue-400 text-sm font-mono transition-colors"
            >
              <span className="text-blue-500 mr-1">0{i+1}.</span>
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-slate-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 p-6 md:hidden flex flex-col gap-4 shadow-xl">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-slate-400 hover:text-blue-400 py-2 block"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
