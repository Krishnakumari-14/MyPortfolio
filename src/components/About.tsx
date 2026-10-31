import React, { useState } from 'react';
import { GraduationCap, Award, Brain, Code2, ShieldCheck, Database, Check, BookOpen, Sparkles, User, Globe2 } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_LIST, SOFT_SKILLS, LANGUAGES } from '../data/portfolioData';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'overview' | 'strengths'>('education');

  const engineeringPillars = [
    {
      icon: <Brain className="w-5 h-5 text-emerald-400" />,
      title: 'Algorithmic Problem Solving',
      desc: 'Solid mastery in C and Python, applying optimal data structures and computational logic to develop clean solutions.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-cyan-400" />,
      title: 'Testing & STLC Discipline',
      desc: 'Firm grasp of STLC, test case design, defect tracking, verification matrices, and Agile QA methodology.',
    },
    {
      icon: <Database className="w-5 h-5 text-indigo-400" />,
      title: 'Data-Driven Engineering',
      desc: 'Experience utilizing Pandas, NumPy, and IBM Cognos Analytics to ingest, clean, and visualize enterprise datasets.',
    },
    {
      icon: <Code2 className="w-5 h-5 text-emerald-400" />,
      title: 'Modern Web Architecture',
      desc: 'Developing responsive, accessible interfaces with HTML, CSS, JavaScript, and modern component principles.',
    },
  ];

  return (
    <section id="about" className="py-24 relative border-t border-slate-900 bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-emerald-400 tracking-wider uppercase mb-2">
              <span>01. Academic Profile & Background</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Consistent Academic Distinction & Engineering Fundamentals
            </h2>
            <p className="mt-3 text-base text-slate-400">
              From achieving 100% in SSLC (School First) to maintaining an 8.65 CGPA in B.E. Computer Science, with an analytical mindset ready for an entry-level software engineering role.
            </p>
          </div>

          {/* Interactive Navigation Switcher */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 rounded-xl border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('education')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeTab === 'education'
                  ? 'bg-slate-800 text-emerald-400 shadow-sm border border-emerald-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Education Timeline
            </button>
            <button
              onClick={() => setActiveTab('strengths')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeTab === 'strengths'
                  ? 'bg-slate-800 text-emerald-400 shadow-sm border border-emerald-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Core Competencies
            </button>
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeTab === 'overview'
                  ? 'bg-slate-800 text-emerald-400 shadow-sm border border-emerald-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Profile Overview
            </button>
          </div>
        </div>

        {/* Tab 1: Education Timeline */}
        {activeTab === 'education' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {EDUCATION_LIST.map((edu, idx) => (
                <div
                  key={edu.degree}
                  className="p-7 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700/80 hover:bg-slate-900/60 transition-all flex flex-col justify-between text-left group shadow-lg"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-4">
                      <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:scale-110 transition-transform">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <span className="px-2.5 py-1 rounded-md bg-slate-800/80 text-[11px] font-mono text-slate-300 border border-slate-700/60">
                        {edu.period}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-xs font-medium text-slate-300 mt-1">
                      {edu.institution}
                    </p>
                    <p className="text-[11px] text-slate-500 font-mono mt-0.5">
                      {edu.location}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-slate-400 block font-mono">
                        {edu.scoreLabel}
                      </span>
                      <span className="text-xl font-bold font-mono text-emerald-400">
                        {edu.score}
                      </span>
                    </div>
                    {edu.badge && (
                      <span className="text-[11px] font-mono font-medium text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-md">
                        {edu.badge}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* School Distinction Callout */}
            <div className="p-5 rounded-xl bg-slate-900/50 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-emerald-500/15 text-emerald-400 shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    School First Rank in Academic Score (SSLC 100% & HSC 93.16%)
                  </h4>
                  <p className="text-xs text-slate-400">
                    S.M.S.M. Higher Secondary School, Suchindrum — Consistently recognized for academic discipline and problem-solving drive.
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono font-semibold text-emerald-400 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 whitespace-nowrap">
                Top Ranker
              </span>
            </div>
          </div>
        )}

        {/* Tab 2: Core Engineering Competencies */}
        {activeTab === 'strengths' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {engineeringPillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700/80 hover:bg-slate-900/60 transition-all flex flex-col justify-between text-left group"
              >
                <div>
                  <div className="p-3 rounded-xl bg-slate-800/80 w-fit mb-4 group-hover:scale-110 transition-transform">
                    {pillar.icon}
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-800/60 text-[11px] font-mono text-emerald-400/80">
                  Focus Area 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Profile Overview & Soft Skills */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
            <div className="lg:col-span-7 p-7 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <User className="w-5 h-5 text-emerald-400" />
                <span>Professional Summary</span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {PERSONAL_INFO.professionalSummary}
              </p>
              <div className="pt-4 border-t border-slate-800 space-y-2 text-xs text-slate-400 font-mono">
                <p>• Institution: University College of Engineering, Nagercoil</p>
                <p>• Degree: Bachelor of Engineering in Computer Science & Engineering</p>
                <p>• University Affiliation: Anna University, Chennai</p>
                <p>• CGPA: 8.65 / 10.0</p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              {/* Soft Skills */}
              <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
                <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>Soft Skills & Interpersonal Strengths</span>
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-300">
                  {SOFT_SKILLS.map((skill) => (
                    <div key={skill} className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-900/80 border border-slate-800/80">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
                <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-indigo-400" />
                  <span>Languages Known</span>
                </h4>
                <div className="space-y-2 text-xs font-mono">
                  {LANGUAGES.map((lang) => (
                    <div key={lang.name} className="flex items-center justify-between p-2 rounded-lg bg-slate-900/80 border border-slate-800/80">
                      <span className="font-bold text-white">{lang.name}</span>
                      <span className="text-slate-400">
                        {lang.fluency.join(', ')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
