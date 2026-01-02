import Section from './Section';
import { writing, interests, writingIntro } from '../data';
import ExternalLink from 'lucide-react/dist/esm/icons/external-link';

export default function Writing() {
  return (
    <Section id="writing" title="Writing & Interests">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Writing */}
        <div>
          <h3 className="text-2xl font-bold text-slate-200 mb-6">Writing</h3>
          <p className="text-slate-400 mb-6 leading-relaxed">
            {writingIntro}
          </p>
          <div className="space-y-4">
            {writing.map((item) => (
              <a 
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-slate-900/50 p-6 rounded-lg border border-slate-800 hover:border-blue-500/50 transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-400 font-mono text-xs">{item.platform}</span>
                  <ExternalLink size={16} className="text-slate-500 group-hover:text-blue-400 transition-colors" />
                </div>
                <h4 className="text-lg font-bold text-slate-200 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h4>
              </a>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div>
          <h3 className="text-2xl font-bold text-slate-200 mb-6">Personal Interests</h3>
          <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-800">
            <ul className="grid grid-cols-2 gap-4">
              {interests.map((interest) => (
                <li key={interest} className="flex items-center gap-2 text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
