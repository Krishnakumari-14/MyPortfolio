import React, { useState } from 'react';
import { Search, Code, Globe, ShieldCheck, BarChart3, Cpu, Wrench, CheckCircle } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterTabs = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'programming', label: 'Programming' },
    { id: 'web', label: 'Web Development' },
    { id: 'testing', label: 'Testing & Agile' },
    { id: 'data', label: 'Data Analytics' },
    { id: 'ai', label: 'AI & ML' },
    { id: 'tools', label: 'DevOps & Tools' },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'programming':
        return <Code className="w-4 h-4 text-emerald-400" />;
      case 'web':
        return <Globe className="w-4 h-4 text-cyan-400" />;
      case 'testing':
        return <ShieldCheck className="w-4 h-4 text-emerald-400" />;
      case 'data':
        return <BarChart3 className="w-4 h-4 text-indigo-400" />;
      case 'ai':
        return <Cpu className="w-4 h-4 text-cyan-400" />;
      case 'tools':
        return <Wrench className="w-4 h-4 text-emerald-400" />;
      default:
        return <Code className="w-4 h-4 text-emerald-400" />;
    }
  };

  const filteredCategories = SKILL_CATEGORIES.filter((group) => {
    if (activeCategory !== 'all' && group.category !== activeCategory) {
      return false;
    }
    if (searchQuery.trim() === '') return true;
    const query = searchQuery.toLowerCase();
    const matchesGroup = group.title.toLowerCase().includes(query);
    const matchesSkill = group.skills.some((s) =>
      s.name.toLowerCase().includes(query) || (s.highlight && s.highlight.toLowerCase().includes(query))
    );
    return matchesGroup || matchesSkill;
  });

  return (
    <section id="skills" className="py-24 relative border-t border-slate-900 bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-cyan-400 tracking-wider uppercase mb-2">
              <span>02. Technical Competencies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Tools, languages, and quality engineering frameworks.
            </h2>
            <p className="mt-3 text-base text-slate-400">
              Categorized proficiency across core programming, web architecture, automated testing, data intelligence, and CI pipelines.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Filter skills (e.g., Python, STLC)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-xs rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-mono"
            />
          </div>
        </div>

        {/* Functional Category Filter Tabs (Zero-Pill interactive segmented control) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {filterTabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-slate-800 text-emerald-400 border border-emerald-500/30 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900 border border-transparent'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group) => (
            <div
              key={group.title}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all hover:bg-slate-900/60 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-800">
                  <div className="p-2 rounded-lg bg-slate-800/80">
                    {getCategoryIcon(group.category)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {group.title}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-400">
                      {group.skills.length} Competencies
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="group/item">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-semibold text-slate-200 group-hover/item:text-emerald-400 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[11px] font-mono text-slate-400">
                          {skill.level}
                        </span>
                      </div>
                      {skill.highlight && (
                        <p className="text-[11px] text-slate-400 leading-tight">
                          {skill.highlight}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Indicator */}
              <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Practiced & Validated</span>
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
