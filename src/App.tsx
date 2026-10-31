import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ExportModal } from './components/ExportModal';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [exportOpen, setExportOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 relative selection:bg-emerald-500/20 selection:text-emerald-300">
      {/* Ambient background grid */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />

      {/* Main App Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar
          onOpenResume={() => setResumeOpen(true)}
          onOpenExport={() => setExportOpen(true)}
        />

        <main className="flex-grow">
          <Hero onOpenResume={() => setResumeOpen(true)} />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
        </main>

        <Footer />
      </div>

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      <ExportModal
        isOpen={exportOpen}
        onClose={() => setExportOpen(false)}
      />
    </div>
  );
}
