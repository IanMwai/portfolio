import { personalInfo } from '../data';

export default function Contact() {
  const emailSocial = personalInfo.socials.find(s => s.url.startsWith('mailto:'));
  const email = emailSocial?.url;

  return (
    <footer className="py-20 text-center text-slate-400">
      <h2 className="text-4xl font-bold text-slate-100 mb-6">Get In Touch</h2>
      <p className="mb-10 max-w-lg mx-auto">
        I'm always open to discussing opportunities in sustainable energy, and any related fields. Also happy to discuss topics unrelated to Engineering!
      </p>
      
      <a 
        href={email}
        className="inline-block px-8 py-4 border border-blue-500 text-blue-500 rounded hover:bg-blue-500/10 transition-colors font-medium mb-20"
      >
        Say Hello
      </a>

      <div className="text-sm font-mono">
        <p>Built with React, Tailwind & Vite</p>
        <p className="mt-2">&copy; {new Date().getFullYear()} {personalInfo.name}</p>
      </div>
    </footer>
  );
}
