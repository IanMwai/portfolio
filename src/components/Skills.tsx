import Section from './Section';
import { skills } from '../data';
import Cpu from 'lucide-react/dist/esm/icons/cpu';
import Database from 'lucide-react/dist/esm/icons/database';
import Globe from 'lucide-react/dist/esm/icons/globe';
import Wrench from 'lucide-react/dist/esm/icons/wrench';

export default function Skills() {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Power Systems': return <Zap className="text-yellow-400" />;
      case 'Hardware': return <Cpu className="text-orange-400" />;
      case 'Data': return <Database className="text-blue-400" />;
      case 'Web': return <Globe className="text-green-400" />;
      default: return <Wrench className="text-slate-400" />;
    }
  };

  // Group technical skills by category
  const categories = Array.from(new Set(skills.technical.map(s => s.category)));

  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-slate-200 mb-6">Technical</h3>
          <div className="grid gap-6">
            {categories.map(category => (
              <div key={category} className="bg-slate-900/50 p-6 rounded-lg border border-slate-800">
                <div className="flex items-center gap-3 mb-4">
                  {/* @ts-ignore */}
                  {getIcon(category)}
                  <h4 className="text-lg font-semibold text-slate-200">{category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.technical
                    .filter(s => s.category === category)
                    .map(skill => (
                      <span 
                        key={skill.name}
                        className="px-3 py-1 bg-slate-800 text-slate-300 rounded text-sm font-mono border border-slate-700"
                      >
                        {skill.name}
                      </span>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-200 mb-6">Soft Skills</h3>
          <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-800">
            <div className="flex flex-wrap gap-3">
              {skills.soft.map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-slate-800/50 text-blue-300 rounded-full text-sm border border-blue-500/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

// Helper for icon
function Zap(props: any) {
  return (
    <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      width="24" height="24" viewBox="0 0 24 24" 
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
