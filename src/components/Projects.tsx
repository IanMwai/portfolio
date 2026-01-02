import { useState } from 'react';
import Section from './Section';
import { projects } from '../data';
import ExternalLink from 'lucide-react/dist/esm/icons/external-link';
import Github from 'lucide-react/dist/esm/icons/github';
import Folder from 'lucide-react/dist/esm/icons/folder';
import Youtube from 'lucide-react/dist/esm/icons/youtube';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const getPrimaryLink = (links: { demo?: string; code?: string }) => {
    if (links.demo && links.demo !== '') return links.demo;
    if (links.code && links.code !== '') return links.code;
    return null;
  };
  
  const isYoutube = (url: string) => url.includes('youtube.com') || url.includes('youtu.be');

  return (
    <Section id="projects" title="Projects">
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={clsx(
              "px-4 py-2 rounded-full text-sm font-medium transition-all",
              filter === category 
                ? "bg-blue-500 text-white" 
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode='wait'>
          {filteredProjects.map((project) => {
             const primaryLink = getPrimaryLink(project.links);
             const hasYoutube = project.links.demo && isYoutube(project.links.demo);

             return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-slate-900 rounded-lg p-6 flex flex-col h-full border border-slate-800 hover:border-blue-500/50 hover:-translate-y-1 transition-all group relative"
            >
              {/* Card Clickable Overlay */}
              {primaryLink && !hasYoutube && (
                <a 
                  href={primaryLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="absolute inset-0 z-0" 
                  aria-label={`View ${project.title}`}
                />
              )}

              <div className="flex justify-between items-start mb-4 z-10 relative">
                <Folder size={40} className="text-blue-500" />
                <div className="flex gap-4 text-slate-400">
                  {project.links.code && project.links.code !== '' && (
                    <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" aria-label="GitHub">
                      <Github size={20} />
                    </a>
                  )}
                  {project.links.demo && project.links.demo !== '' && (
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" aria-label="Live Demo">
                      {isYoutube(project.links.demo) ? <Youtube size={20} /> : <ExternalLink size={20} />}
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors z-10 pointer-events-none">
                {project.title}
              </h3>
              
              <p className="text-slate-400 text-sm mb-6 flex-grow z-10 pointer-events-none">
                {project.description}
              </p>

              {/* YouTube Embed/Preview Area if applicable */}
              {hasYoutube && (
                <div className="mb-4 rounded overflow-hidden z-20">
                    <iframe 
                        width="100%" 
                        height="150" 
                        src={project.links.demo!.replace('watch?v=', 'embed/').replace('youtu.be/', 'youtube.com/embed/')} 
                        title={project.title} 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                        className="border border-slate-800"
                    ></iframe>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mt-auto z-10 pointer-events-none">
                {project.tech.map(t => (
                  <span key={t} className="text-xs font-mono text-slate-500">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          );
          })}
        </AnimatePresence>
      </div>
    </Section>
  );
}
