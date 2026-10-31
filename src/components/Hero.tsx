import React, { useState, useEffect } from 'react';
import { Download, Mail, Github, Linkedin, MapPin, Award, CheckCircle2, Phone, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import passportPhoto from '../assets/passport.jpeg';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [photoLoaded, setPhotoLoaded] = useState(false);
  const [tagIndex, setTagIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const rotatingTitles = [
    'Aspiring Software Engineer',
    'Python & C Programmer',
    'Software Testing & STLC Specialist',
    'Data Analytics & ML Practitioner',
  ];

  // Smooth typewriter effect inspired by msenthil.com
  useEffect(() => {
    const currentFullText = rotatingTitles[tagIndex];
    const typingSpeed = isDeleting ? 35 : 70;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentFullText.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentFullText.length) {
          // Pause at end of word
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedText(currentFullText.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setTagIndex((prev) => (prev + 1) % rotatingTitles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, tagIndex, rotatingTitles]);

  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Screen Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Academic trust badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs text-slate-300 shadow-sm backdrop-blur">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10b981]" />
              <span className="font-mono text-emerald-400 font-semibold">CGPA 8.65</span>
              <span className="text-slate-600">·</span>
              <span>Final-year B.E. Computer Science</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white text-balance leading-[1.12]">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400">Krishna Kumari K R</span>
            </h1>

            {/* Animated Subtitle with glowing Three-Dot Typing Animation */}
            <div className="flex flex-wrap items-center gap-2 text-base sm:text-lg md:text-xl font-medium text-slate-300 min-h-[36px]">
              <span>Final-year B.E. CSE Student</span>
              <span className="text-slate-600">|</span>
              <span className="text-emerald-400 font-semibold">
                {displayedText}
                <span className="inline-block w-0.5 h-5 bg-emerald-400 ml-0.5 align-middle animate-pulse" />
              </span>

              {/* Glowing Three-Dot Typing Loader */}
              <div
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/90 border border-slate-800 ml-1 shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                title="Active Developer Status"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 dot-1 shadow-[0_0_8px_#10b981]" />
                <span className="w-2 h-2 rounded-full bg-cyan-400 dot-2 shadow-[0_0_8px_#06b6d4]" />
                <span className="w-2 h-2 rounded-full bg-indigo-400 dot-3 shadow-[0_0_8px_#6366f1]" />
              </div>
            </div>

            {/* Concise Bio Pitch from Verified Resume */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed text-balance">
              {PERSONAL_INFO.professionalSummary}
            </p>

            {/* Quick Location & Campus Info */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-1">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Nagercoil / Suchindrum, Tamil Nadu</span>
              </span>
              <span className="text-slate-700">·</span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>University College of Engineering, Nagercoil</span>
              </span>
            </div>

            {/* Quick CTA Buttons & Social Links */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                {/* Direct download of user's PDF resume */}
                <a
                  href="/resume.pdf"
                  download="Krishnakumari_KR_Resume.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 transition-all duration-200 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] active:scale-95"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </a>

                {/* View Resume in interactive modal */}
                <button
                  onClick={onOpenResume}
                  className="px-3.5 py-3.5 text-xs font-mono text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl transition-colors"
                  title="Preview Full Resume"
                >
                  View
                </button>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-600 transition-all duration-200 active:scale-95"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 ml-1 text-slate-400" />
              </a>

              {/* Social Icon Links */}
              <div className="flex items-center gap-2 sm:ml-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-800 transition-colors"
                  aria-label="GitHub Profile"
                  title="github.com/Krishnakumari-14"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-slate-700 hover:bg-slate-800 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-slate-700 hover:bg-slate-800 transition-colors"
                  aria-label="Call Krishna Kumari"
                  title={PERSONAL_INFO.phoneFormatted}
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Real Passport Photo with Modern Glowing Frame (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Outer Glowing Accent Ring (emerald/cyan neon) */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-500 via-cyan-500 to-indigo-500 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse" />

              {/* Photo Frame Card */}
              <div className="relative rounded-2xl p-2.5 bg-[#0d1424] border border-slate-800 shadow-2xl backdrop-blur-sm">
                <div className="relative w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-96 rounded-xl overflow-hidden bg-slate-900">
                  {/* Real Passport Photo from Attachment (bundled asset with root fallback) */}
                  <img
                    src={passportPhoto}
                    alt="Passport photo of Krishna Kumari K R"
                    referrerPolicy="no-referrer"
                    onLoad={() => setPhotoLoaded(true)}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/passport.jpeg';
                    }}
                  />

                  {/* Top-Right Badge Overlay */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-950/85 backdrop-blur-md border border-slate-700/60 text-[11px] font-mono font-medium text-emerald-400 flex items-center gap-1.5 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Open to Work</span>
                  </div>

                  {/* Bottom Caption Overlay */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/95 via-slate-950/75 to-transparent p-4 text-left">
                    <p className="text-white text-base font-bold tracking-wide">
                      Krishna Kumari K R
                    </p>
                    <p className="text-xs text-slate-300 font-mono">
                      B.E. CSE · Anna University
                    </p>
                  </div>
                </div>

                {/* Floating Info Strip below photo */}
                <div className="mt-2.5 px-3 py-2 rounded-lg bg-slate-900/90 border border-slate-800/80 flex items-center justify-between text-xs text-slate-300 font-mono">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Anna Univ Constituent</span>
                  </span>
                  <span className="text-emerald-400 font-bold">8.65 CGPA</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Metric Strip (Placed right below hero split per Section 2.B rules) */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {PERSONAL_INFO.keyHighlights.map((item) => (
            <div
              key={item.label}
              className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-all hover:bg-slate-900/70 group text-left"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight group-hover:text-emerald-400 transition-colors">
                {item.value}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-1">
                {item.label}
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                {item.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
