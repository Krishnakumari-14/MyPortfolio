import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Terminal } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative border-t border-slate-900 bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-emerald-400 tracking-wider uppercase mb-2">
            <span>03. Industry Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Internships & Applied Engineering Work
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Real-world industry internships spanning data analytics at Adroit Technologies and artificial intelligence at Appin Technology.
          </p>
        </div>

        {/* Vertical Experience Timeline */}
        <div className="relative border-l border-slate-800 ml-4 md:ml-32 space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div key={exp.id} className="relative pl-8 md:pl-10 group">
              {/* Timeline marker node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-emerald-400 group-hover:scale-125 group-hover:shadow-[0_0_12px_#10b981] transition-all" />

              {/* Date callout pinned on larger screens to the left */}
              <div className="hidden md:block absolute -left-36 top-1 text-right w-28 text-xs font-mono font-semibold text-slate-400">
                {exp.period}
              </div>

              {/* Experience Card */}
              <div className="p-7 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all hover:bg-slate-900/60 shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm font-semibold text-cyan-400 mt-0.5">
                      <span>{exp.company}</span>
                      <span className="text-slate-600">·</span>
                      <span className="text-xs font-mono text-slate-400 font-normal">{exp.type}</span>
                    </div>
                  </div>

                  <div className="md:hidden flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-5 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{exp.location}</span>
                </div>

                {/* Highlights */}
                <div className="space-y-3 mb-6">
                  {exp.highlights.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <ChevronRight className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies used (clean unboxed text with separators per Zero-Pill rule) */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 font-mono">
                  <span className="text-slate-500 font-semibold">Tech Stack:</span>
                  {exp.technologies.map((tech, tIdx) => (
                    <React.Fragment key={tech}>
                      <span className="text-slate-300 hover:text-emerald-400 transition-colors">
                        {tech}
                      </span>
                      {tIdx < exp.technologies.length - 1 && (
                        <span className="text-slate-700">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
