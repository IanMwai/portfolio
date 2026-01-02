import Download from 'lucide-react/dist/esm/icons/download';
import { personalInfo } from '../data';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto pt-20">
      {/* Headshot - Top Left Aligned */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <div className="relative inline-block group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-slate-800 shadow-2xl bg-slate-900">
            <img 
              src={personalInfo.headshot} 
              alt={personalInfo.name} 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=" + personalInfo.name.replace(" ", "+") + "&background=0f172a&color=3b82f6&size=512";
              }}
            />
          </div>
        </div>
      </motion.div>

      {/* Text Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p className="text-blue-400 font-mono mb-4 text-lg">Hi, I'm</p>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-6">
          {personalInfo.name}.
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-8 leading-tight">
          {personalInfo.role}.
        </h2>
        <p className="max-w-2xl text-slate-400 text-lg leading-relaxed mb-10">
          {personalInfo.bio}
        </p>

        <div className="flex flex-wrap gap-4 mb-20">
          <a 
            href="#projects"
            className="px-6 py-3 border-2 border-blue-500 text-blue-500 rounded hover:bg-blue-500/10 transition-colors font-medium"
          >
            View Projects
          </a>
          <a 
            href="resume.pdf" 
            download="Ian_Toyota_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-slate-100 text-slate-900 rounded hover:bg-white transition-colors font-medium flex items-center gap-2"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>
        
        <div className="flex gap-6 text-slate-400">
          {personalInfo.socials.map((social) => {
            const isEmail = social.url.startsWith('mailto:');
            return (
              <a 
                key={social.name}
                href={social.url}
                target={isEmail ? undefined : "_blank"}
                rel={isEmail ? undefined : "noopener noreferrer"}
                className="hover:text-blue-400 transition-colors transform hover:scale-110"
                aria-label={social.name}
              >
                <social.icon size={28} />
              </a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
