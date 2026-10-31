import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, Code2 } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0d1424] border border-slate-800 shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#0d1424]/95 backdrop-blur border-b border-slate-800">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400">
              {project.category}
            </span>
            <h3 className="text-xl font-bold text-white">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Project Image Preview */}
          <div className="relative rounded-xl overflow-hidden border border-slate-800 aspect-video bg-slate-900">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Resilient CSS Fallback container
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-4 text-xs font-mono text-slate-300">
              {project.subtitle}
            </div>
          </div>

          {/* Deep Description */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Project Overview
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
              Key Capabilities & Engineering Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* System Architecture */}
          {project.architecture && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                <span>System Architecture</span>
              </h4>
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/90 font-mono text-xs text-slate-300 space-y-2">
                {project.architecture.map((layer, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-cyan-400">›</span>
                    <span>{layer}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used (Zero-Pill format) */}
          <div className="pt-2 border-t border-slate-800">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Technology Stack
            </h4>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-300">
              {project.technologies.map((tech, idx) => (
                <React.Fragment key={tech}>
                  <span className="text-emerald-400 font-medium">{tech}</span>
                  {idx < project.technologies.length - 1 && (
                    <span className="text-slate-600">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="sticky bottom-0 px-6 py-4 bg-[#0d1424]/95 backdrop-blur border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            Close
          </button>
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>View Source on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
