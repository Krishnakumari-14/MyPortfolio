import React from 'react';
import { X, Printer, Download, FileText, ExternalLink, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, SKILL_CATEGORIES, CERTIFICATIONS, EDUCATION_LIST, WORKSHOPS, ACHIEVEMENTS, LANGUAGES, SOFT_SKILLS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#0f172a] border border-slate-800 shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Action Header (hidden on print) */}
        <div className="no-print sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0f172a]/95 backdrop-blur border-b border-slate-800">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-emerald-400" />
            <span className="text-sm font-bold text-white font-mono">
              Curriculum Vitae · Krishna Kumari K R
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Direct download of verified uploaded PDF */}
            <a
              href="/resume.pdf"
              download="Krishnakumari_KR_Resume_final.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-400 hover:bg-emerald-300 text-slate-950 transition-colors shadow-sm"
              title="Download Original PDF Resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
              title="Print via Browser Dialog"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted ATS Resume Document */}
        <div className="p-8 sm:p-12 bg-white text-slate-900 font-sans print:p-0">
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-5 mb-6 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight uppercase">
              Krishna Kumari K R
            </h1>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-xs text-slate-700 mt-2 font-mono">
              <span>{PERSONAL_INFO.phone}</span>
              <span>•</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-900 font-semibold underline">
                {PERSONAL_INFO.email}
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-slate-900 underline">
                github.com/Krishnakumari-14
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-slate-900 underline">
                linkedin.com/in/krishna-kumari-k-r-18211337b
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <section className="mb-6">
            <h2 className="text-xs font-bold tracking-wider uppercase text-slate-950 border-b-2 border-slate-900 pb-1 mb-2 font-mono">
              Professional Summary
            </h2>
            <p className="text-xs text-slate-800 leading-relaxed text-justify">
              {PERSONAL_INFO.professionalSummary}
            </p>
          </section>

          {/* Education */}
          <section className="mb-6">
            <h2 className="text-xs font-bold tracking-wider uppercase text-slate-950 border-b-2 border-slate-900 pb-1 mb-2 font-mono">
              Education
            </h2>
            <div className="space-y-2 text-xs text-slate-800">
              <div className="flex justify-between items-start">
                <div>
                  <strong>B.E. Computer Science and Engineering</strong> — University College of Engineering, Nagercoil
                </div>
                <div className="text-right font-mono font-semibold shrink-0">
                  Pursuing | CGPA: 8.65
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <strong>HSC</strong> — S.M.S.M. Higher Secondary School, Suchindrum
                </div>
                <div className="text-right font-mono font-semibold shrink-0">
                  2023 | 93.16%
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <strong>SSLC</strong> — S.M.S.M. Higher Secondary School, Suchindrum
                </div>
                <div className="text-right font-mono font-semibold shrink-0">
                  2021 | 100%
                </div>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="mb-6">
            <h2 className="text-xs font-bold tracking-wider uppercase text-slate-950 border-b-2 border-slate-900 pb-1 mb-2 font-mono">
              Technical Skills
            </h2>
            <div className="space-y-1 text-xs text-slate-800 leading-relaxed">
              <p><strong>Programming:</strong> C, Python</p>
              <p><strong>Web:</strong> HTML, CSS, JavaScript</p>
              <p><strong>Testing:</strong> Software Testing, SDLC, STLC, Agile Methodology</p>
              <p><strong>Data Analytics:</strong> Pandas, NumPy, IBM Cognos Analytics, Data Visualization</p>
              <p><strong>AI & ML:</strong> AI & ML Fundamentals</p>
              <p><strong>Tools:</strong> GitHub, Jenkins</p>
            </div>
          </section>

          {/* Internship Experience */}
          <section className="mb-6">
            <h2 className="text-xs font-bold tracking-wider uppercase text-slate-950 border-b-2 border-slate-900 pb-1 mb-2 font-mono">
              Internship Experience
            </h2>
            <div className="space-y-3 text-xs text-slate-800">
              <div>
                <div className="flex justify-between items-start font-semibold">
                  <span>Data Analytics Virtual Intern — Adroit Technologies</span>
                  <span className="font-mono text-slate-600">Mar 2026 – Apr 2026</span>
                </div>
                <p className="text-slate-700 mt-0.5">• Worked with Python, Pandas, NumPy, data visualization, analytics workflows, and reporting.</p>
              </div>
              <div>
                <div className="flex justify-between items-start font-semibold">
                  <span>AI & ML Intern — Appin Technology</span>
                  <span className="font-mono text-slate-600">Jun 2026 – Jul 2026</span>
                </div>
                <p className="text-slate-700 mt-0.5">• Practiced AI/ML fundamentals, introductory exercises, data preprocessing, and model development.</p>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-6">
            <h2 className="text-xs font-bold tracking-wider uppercase text-slate-950 border-b-2 border-slate-900 pb-1 mb-2 font-mono">
              Projects
            </h2>
            <div className="space-y-3 text-xs text-slate-800">
              <div>
                <div className="font-semibold flex items-center justify-between">
                  <span>AI Expense Tracker | Python, Flask, HTML, CSS | GitHub</span>
                </div>
                <ul className="list-disc list-inside text-slate-700 mt-0.5 space-y-0.5">
                  <li>Built a web application to record and manage daily expenses.</li>
                  <li>Integrated expense categorization and transaction history tracking.</li>
                  <li>Created an intuitive dashboard to analyze spending patterns.</li>
                </ul>
              </div>

              <div>
                <div className="font-semibold flex items-center justify-between">
                  <span>Stationery Shop Website | HTML, CSS | GitHub</span>
                </div>
                <ul className="list-disc list-inside text-slate-700 mt-0.5 space-y-0.5">
                  <li>Designed a static e-commerce platform to showcase stationery products.</li>
                  <li>Structured product sections for convenient browsing.</li>
                  <li>Optimized page layouts for improved accessibility and usability.</li>
                </ul>
              </div>

              <div>
                <div className="font-semibold flex items-center justify-between">
                  <span>SwiftRoute Logistics – Delivery & Fleet Analytics | IBM Cognos Analytics | GitHub</span>
                </div>
                <ul className="list-disc list-inside text-slate-700 mt-0.5 space-y-0.5">
                  <li>Created dashboards to track deliveries, vehicle breakdowns, and fuel costs.</li>
                  <li>Prepared reports to analyze delivery performance, driver ratings, and route efficiency.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-6">
            <h2 className="text-xs font-bold tracking-wider uppercase text-slate-950 border-b-2 border-slate-900 pb-1 mb-2 font-mono">
              Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs text-slate-800">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="flex items-center gap-1.5">
                  <span className="font-bold text-slate-900">•</span>
                  <span>{cert.issuer} — {cert.title} ({cert.year})</span>
                </div>
              ))}
            </div>
          </section>

          {/* Soft Skills */}
          <section className="mb-6">
            <h2 className="text-xs font-bold tracking-wider uppercase text-slate-950 border-b-2 border-slate-900 pb-1 mb-2 font-mono">
              Soft Skills
            </h2>
            <p className="text-xs text-slate-800">
              {SOFT_SKILLS.join(', ')}
            </p>
          </section>

          {/* Workshops & Achievements */}
          <section className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xs font-bold tracking-wider uppercase text-slate-950 border-b-2 border-slate-900 pb-1 mb-2 font-mono">
                Workshops
              </h2>
              <ul className="text-xs text-slate-800 space-y-1">
                {WORKSHOPS.map((w, i) => (
                  <li key={i} className="list-disc list-inside">
                    <strong>{w.title}</strong> — {w.organizer} ({w.year})
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xs font-bold tracking-wider uppercase text-slate-950 border-b-2 border-slate-900 pb-1 mb-2 font-mono">
                Achievements
              </h2>
              <ul className="text-xs text-slate-800 space-y-1">
                {ACHIEVEMENTS.map((a, i) => (
                  <li key={i} className="list-disc list-inside">
                    <strong>{a.title}</strong> — {a.event}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Languages */}
          <section>
            <h2 className="text-xs font-bold tracking-wider uppercase text-slate-950 border-b-2 border-slate-900 pb-1 mb-2 font-mono">
              Languages
            </h2>
            <p className="text-xs text-slate-800">
              Tamil: Read, Write, Speak, Listen | English: Read, Write, Speak, Listen | Malayalam: Listen
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
