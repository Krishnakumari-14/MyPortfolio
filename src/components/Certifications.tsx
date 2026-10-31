import React, { useState } from 'react';
import { Award, CheckCircle, ExternalLink, ShieldCheck, Trophy, Sparkles, BookOpen, Layers } from 'lucide-react';
import { CERTIFICATIONS, WORKSHOPS, ACHIEVEMENTS } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const [subSection, setSubSection] = useState<'certifications' | 'workshops' | 'achievements'>('certifications');

  return (
    <section id="certifications" className="py-24 relative border-t border-slate-900 bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-cyan-400 tracking-wider uppercase mb-2">
              <span>05. Credentials, Workshops & Honors</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Verified Technical Certifications & Achievements
            </h2>
            <p className="mt-3 text-base text-slate-400">
              Industry credentials from Infosys, IBM, TCS, and Naan Mudhalvan, alongside competitive symposium prizes and hands-on technical workshops.
            </p>
          </div>

          {/* Interactive Sub-Section Selector inspired by msenthil.com */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 rounded-xl border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => setSubSection('certifications')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                subSection === 'certifications'
                  ? 'bg-slate-800 text-cyan-400 shadow-sm border border-cyan-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Certifications ({CERTIFICATIONS.length})
            </button>
            <button
              onClick={() => setSubSection('achievements')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                subSection === 'achievements'
                  ? 'bg-slate-800 text-emerald-400 shadow-sm border border-emerald-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Achievements ({ACHIEVEMENTS.length})
            </button>
            <button
              onClick={() => setSubSection('workshops')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                subSection === 'workshops'
                  ? 'bg-slate-800 text-indigo-400 shadow-sm border border-indigo-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Workshops ({WORKSHOPS.length})
            </button>
          </div>
        </div>

        {/* View 1: Exact Verified Certifications from Resume */}
        {subSection === 'certifications' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/60 transition-all flex flex-col justify-between group shadow-lg text-left relative overflow-hidden"
              >
                {/* Subtle corner glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl group-hover:bg-cyan-500/10 transition-colors pointer-events-none" />

                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-slate-300 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/60">
                      {cert.year}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 font-mono mt-1">
                    <span>{cert.issuer}</span>
                    <span className="text-slate-600">·</span>
                    <span className="text-slate-400 font-normal">Verified</span>
                  </div>

                  {cert.credentialNote && (
                    <p className="text-[11px] font-mono text-slate-400 mt-2">
                      {cert.credentialNote}
                    </p>
                  )}
                </div>

                {/* Skills Covered */}
                <div className="mt-5 pt-3 border-t border-slate-800/80">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                    Skills Covered:
                  </span>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-slate-300 font-mono">
                    {cert.skillsCovered.map((skill, idx) => (
                      <React.Fragment key={skill}>
                        <span className="text-slate-200">{skill}</span>
                        {idx < cert.skillsCovered.length - 1 && (
                          <span className="text-slate-600">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View 2: College & Academic Achievements */}
        {subSection === 'achievements' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {ACHIEVEMENTS.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900/60 transition-all flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:scale-110 transition-transform">
                      <Trophy className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/30">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-medium mt-1">
                    {item.event}
                  </p>
                  <p className="text-[11px] text-slate-400 font-mono mt-2">
                    Category: {item.category}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Award & Honor</span>
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View 3: Technical Workshops */}
        {subSection === 'workshops' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {WORKSHOPS.map((workshop, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900/60 transition-all flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 group-hover:scale-110 transition-transform">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-slate-300 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/60">
                      {workshop.year}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {workshop.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mt-1 font-semibold">
                    Organized by: {workshop.organizer}
                  </p>
                  <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                    {workshop.highlight}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Professional Development</span>
                  <CheckCircle className="w-3.5 h-3.5 text-indigo-400" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
