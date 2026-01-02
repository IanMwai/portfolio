import Section from './Section';
import { experiences } from '../data';
import { motion } from 'framer-motion';

export default function Experience() {
  const groupOrder = ['Engineering', 'Leadership', 'Work', 'Service'];

  return (
    <Section id="experience" title="Experience">
      <div className="space-y-16">
        {groupOrder.map((category) => {
          // @ts-ignore
          const categoryExperiences = experiences.filter(e => e.category === category);
          
          if (categoryExperiences.length === 0) return null;

          return (
            <div key={category}>
              <h3 className="text-2xl font-bold text-slate-100 mb-8 border-b border-slate-800 pb-2 inline-block">
                {category}
              </h3>
              
              <div className="relative border-l border-slate-800 ml-3 space-y-12">
                {categoryExperiences.map((exp) => (
                  <motion.div
                    key={exp.company + exp.role}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="ml-8 relative"
                  >
                    <div className="absolute -left-[41px] bg-slate-950 border-2 border-blue-500 rounded-full w-5 h-5 top-6" />
                    
                    <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-800 hover:border-blue-500/50 transition-colors">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h4 className="text-xl font-bold text-slate-100">{exp.role}</h4>
                        <span className="text-blue-400 font-mono text-sm">{exp.period}</span>
                      </div>
                      <h5 className="text-lg text-slate-400 mb-4">{exp.company}</h5>
                      <p className="text-slate-400 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
