import React, { useState } from 'react';
import { X, Download, Copy, Check, ExternalLink, Code2, Globe } from 'lucide-react';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const getStandaloneHtmlCode = () => {
    return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Krishna Kumari K R | Software Engineer & B.E. CSE Student</title>
  <meta name="description" content="Portfolio of Krishna Kumari K R, final-year B.E. Computer Science & Engineering student at UCE Nagercoil (CGPA 8.65).">
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #0b0f19;
      --card-bg: rgba(15, 23, 42, 0.7);
      --border: rgba(51, 65, 85, 0.6);
      --accent: #10b981;
      --accent-cyan: #06b6d4;
      --text: #f1f5f9;
      --text-muted: #94a3b8;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      background-color: var(--bg);
      color: var(--text);
      line-height: 1.6;
      overflow-x: hidden;
    }
    a { color: inherit; text-decoration: none; }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }
    
    /* Header */
    header {
      position: fixed; top: 0; left: 0; right: 0; z-index: 50;
      background: rgba(11, 15, 25, 0.85); backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border); padding: 1rem 0;
    }
    .header-wrap { display: flex; align-items: center; justify-content: space-between; }
    .brand { font-weight: 800; font-size: 1.15rem; display: flex; align-items: center; gap: 0.5rem; }
    .brand-dot { width: 10px; height: 10px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 10px var(--accent); }
    nav { display: flex; align-items: center; gap: 1.5rem; }
    nav a { font-size: 0.875rem; color: var(--text-muted); transition: color 0.2s; }
    nav a:hover { color: #fff; }
    .btn-resume {
      background: var(--accent); color: #0b0f19; font-weight: 700; font-size: 0.8rem;
      padding: 0.5rem 1rem; border-radius: 0.5rem; border: none; cursor: pointer; transition: 0.2s;
    }
    .btn-resume:hover { filter: brightness(1.1); }

    /* Hero */
    .hero { padding: 8rem 0 5rem; }
    .hero-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 3rem; align-items: center; }
    @media (max-width: 900px) {
      .hero-grid { grid-template-columns: 1fr; text-align: center; }
      nav { display: none; }
    }
    .hero-kicker {
      display: inline-flex; align-items: center; gap: 0.5rem; font-family: 'JetBrains Mono', monospace;
      font-size: 0.75rem; padding: 0.35rem 0.75rem; background: rgba(15, 23, 42, 0.8);
      border: 1px solid rgba(16, 185, 129, 0.4); border-radius: 999px; color: var(--accent); margin-bottom: 1.2rem;
    }
    .hero-title { font-size: clamp(2.2rem, 4vw, 3.5rem); font-weight: 800; line-height: 1.15; margin-bottom: 1rem; }
    .gradient-text { background: linear-gradient(135deg, #10b981, #06b6d4, #6366f1); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .hero-subtitle { font-size: 1.2rem; color: var(--text-muted); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; }
    .typing-dots { display: inline-flex; gap: 4px; margin-left: 0.5rem; }
    .dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); animation: pulse 1.4s infinite ease-in-out; }
    .dot:nth-child(2) { animation-delay: 0.2s; background: var(--accent-cyan); }
    .dot:nth-child(3) { animation-delay: 0.4s; background: #6366f1; }
    @keyframes pulse { 0%, 80%, 100% { opacity: 0.3; transform: scale(0.8); } 40% { opacity: 1; transform: scale(1.3); } }
    .hero-desc { color: var(--text-muted); font-size: 1rem; max-width: 600px; margin-bottom: 1.8rem; }
    .hero-ctas { display: flex; gap: 1rem; flex-wrap: wrap; }
    .btn-primary { background: var(--accent); color: #0b0f19; font-weight: 700; padding: 0.75rem 1.5rem; border-radius: 0.75rem; font-size: 0.9rem; transition: 0.2s; }
    .btn-secondary { background: rgba(30, 41, 59, 0.8); border: 1px solid var(--border); color: #fff; padding: 0.75rem 1.5rem; border-radius: 0.75rem; font-size: 0.9rem; transition: 0.2s; }
    
    /* Photo Card */
    .photo-frame {
      position: relative; width: 280px; height: 280px; margin: 0 auto;
      padding: 6px; background: rgba(15, 23, 42, 0.8); border-radius: 1.5rem; border: 1px solid var(--border);
      box-shadow: 0 0 30px rgba(16, 185, 129, 0.25);
    }
    .photo-frame img { width: 100%; height: 100%; object-fit: cover; border-radius: 1.2rem; }

    /* Metric Strip */
    .metric-strip { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; padding: 3rem 0; border-top: 1px solid var(--border); }
    .metric-card { background: var(--card-bg); border: 1px solid var(--border); padding: 1.5rem; border-radius: 1rem; }
    .metric-val { font-size: 2rem; font-weight: 800; font-family: 'JetBrains Mono', monospace; color: #fff; }
    .metric-label { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin-top: 0.25rem; }

    /* Sections */
    section { padding: 5rem 0; border-top: 1px solid var(--border); }
    .sec-header { margin-bottom: 2.5rem; }
    .sec-kicker { font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: var(--accent); text-transform: uppercase; margin-bottom: 0.5rem; }
    .sec-title { font-size: 2rem; font-weight: 800; }
    .sec-desc { color: var(--text-muted); margin-top: 0.5rem; max-width: 650px; }

    /* Cards Grid */
    .grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; }
    .card { background: var(--card-bg); border: 1px solid var(--border); padding: 1.75rem; border-radius: 1rem; transition: border-color 0.2s; }
    .card:hover { border-color: rgba(16, 185, 129, 0.6); }

    /* Footer */
    footer { padding: 3rem 0; border-top: 1px solid var(--border); text-align: center; color: var(--text-muted); font-size: 0.85rem; }
  </style>
</head>
<body>
  <header>
    <div class="container header-wrap">
      <div class="brand">
        <span class="brand-dot"></span>
        <span>Krishna Kumari K R</span>
      </div>
      <nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#certifications">Certifications</a>
        <a href="#contact">Contact</a>
      </nav>
      <a href="#contact" class="btn-resume">Get In Touch</a>
    </div>
  </header>

  <main>
    <section class="hero">
      <div class="container hero-grid">
        <div>
          <div class="hero-kicker">CGPA 8.65 · Final-year B.E. Computer Science</div>
          <h1 class="hero-title">Hi, I'm <span class="gradient-text">Krishna Kumari K R</span></h1>
          <div class="hero-subtitle">
            <span>Final-year B.E. CSE Student | Aspiring Software Engineer</span>
            <span class="typing-dots"><span class="dot"></span><span class="dot"></span><span class="dot"></span></span>
          </div>
          <p class="hero-desc">
            Computer Science and Engineering undergraduate at University College of Engineering, Nagercoil. Specialized in C, Python, Software Testing (STLC/SDLC), and Data Analytics.
          </p>
          <div class="hero-ctas">
            <a href="#contact" class="btn-primary">Get In Touch</a>
            <a href="#projects" class="btn-secondary">View Featured Projects</a>
          </div>
        </div>
        <div>
          <div class="photo-frame">
            <img src="passport.jpeg" alt="Krishna Kumari K R">
          </div>
        </div>
      </div>
      <div class="container">
        <div class="metric-strip">
          <div class="metric-card"><div class="metric-val">8.65</div><div class="metric-label">CGPA / 10.0 Scale</div></div>
          <div class="metric-card"><div class="metric-val">2</div><div class="metric-label">Industry Internships</div></div>
          <div class="metric-card"><div class="metric-val">3+</div><div class="metric-label">Featured Projects</div></div>
          <div class="metric-card"><div class="metric-val">4</div><div class="metric-label">Technical Certifications</div></div>
        </div>
      </div>
    </section>

    <section id="about">
      <div class="container">
        <div class="sec-header">
          <div class="sec-kicker">01. Academic Profile</div>
          <h2 class="sec-title">Academic Background & Education</h2>
        </div>
        <div class="card">
          <h3 style="font-size:1.3rem; margin-bottom:0.5rem;">University College of Engineering, Nagercoil</h3>
          <p style="color:var(--accent-cyan); font-weight:600; font-size:0.9rem;">Bachelor of Engineering (B.E.) in Computer Science & Engineering (2022 - 2026)</p>
          <p style="margin-top:0.5rem; color:var(--text-muted);">Affiliation: A Constituent College of Anna University, Chennai | Cumulative GPA: 8.65 / 10.0</p>
          <p style="margin-top:1rem; font-size:0.9rem;">Coursework: Data Structures & Algorithms, Database Management Systems (DBMS), Operating Systems, Computer Networks, Software Engineering & Testing, Object-Oriented Analysis.</p>
        </div>
      </div>
    </section>

    <section id="skills">
      <div class="container">
        <div class="sec-header">
          <div class="sec-kicker">02. Skills</div>
          <h2 class="sec-title">Categorized Technical Competencies</h2>
        </div>
        <div class="grid-3">
          <div class="card">
            <h4>Programming</h4>
            <p style="color:var(--text-muted); font-size:0.85rem; margin-top:0.5rem;">C, Python, JavaScript, SQL</p>
          </div>
          <div class="card">
            <h4>Web Development</h4>
            <p style="color:var(--text-muted); font-size:0.85rem; margin-top:0.5rem;">HTML5, CSS3, JavaScript (ES6+), Responsive Design</p>
          </div>
          <div class="card">
            <h4>Testing & Methodologies</h4>
            <p style="color:var(--text-muted); font-size:0.85rem; margin-top:0.5rem;">Software Testing, SDLC, STLC, Agile Methodology, Test Case Design</p>
          </div>
          <div class="card">
            <h4>Data Analytics</h4>
            <p style="color:var(--text-muted); font-size:0.85rem; margin-top:0.5rem;">Pandas, NumPy, IBM Cognos Analytics, Data Visualization</p>
          </div>
          <div class="card">
            <h4>AI & Machine Learning</h4>
            <p style="color:var(--text-muted); font-size:0.85rem; margin-top:0.5rem;">AI & ML Fundamentals, Data Preprocessing, Model Evaluation</p>
          </div>
          <div class="card">
            <h4>Tools & DevOps</h4>
            <p style="color:var(--text-muted); font-size:0.85rem; margin-top:0.5rem;">GitHub, Git, Jenkins, VS Code, Linux CLI</p>
          </div>
        </div>
      </div>
    </section>

    <section id="experience">
      <div class="container">
        <div class="sec-header">
          <div class="sec-kicker">03. Experience</div>
          <h2 class="sec-title">Internships</h2>
        </div>
        <div class="grid-3">
          <div class="card">
            <span style="font-family:'JetBrains Mono'; font-size:0.75rem; color:var(--accent);">Jun 2026 - Jul 2026</span>
            <h3 style="margin-top:0.25rem;">AI & ML Intern</h3>
            <p style="color:var(--accent-cyan); font-size:0.85rem; font-weight:600;">Appin Technology</p>
            <p style="color:var(--text-muted); font-size:0.85rem; margin-top:0.5rem;">Constructed supervised learning pipelines in Python, applied feature engineering and evaluated classification models.</p>
          </div>
          <div class="card">
            <span style="font-family:'JetBrains Mono'; font-size:0.75rem; color:var(--accent);">Mar 2026 - Apr 2026</span>
            <h3 style="margin-top:0.25rem;">Data Analytics Virtual Intern</h3>
            <p style="color:var(--accent-cyan); font-size:0.85rem; font-weight:600;">Adroit Technologies</p>
            <p style="color:var(--text-muted); font-size:0.85rem; margin-top:0.5rem;">Analyzed tabular data with Pandas and NumPy, authored executive KPI dashboards and uncovered statistical patterns.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="projects">
      <div class="container">
        <div class="sec-header">
          <div class="sec-kicker">04. Projects</div>
          <h2 class="sec-title">Featured Projects</h2>
        </div>
        <div class="grid-3">
          <div class="card">
            <span style="font-family:'JetBrains Mono'; font-size:0.75rem; color:var(--accent);">Python · Flask · HTML · CSS · GitHub</span>
            <h3 style="margin:0.5rem 0;">AI Expense Tracker</h3>
            <p style="color:var(--text-muted); font-size:0.85rem;">Intelligent budget assistant providing automated expense classification, monthly spend forecasts, and dynamic visual analytics.</p>
          </div>
          <div class="card">
            <span style="font-family:'JetBrains Mono'; font-size:0.75rem; color:var(--accent);">HTML5 · CSS3 · JavaScript · GitHub</span>
            <h3 style="margin:0.5rem 0;">Stationery Shop Website</h3>
            <p style="color:var(--text-muted); font-size:0.85rem;">Modern, ultra-fast online stationery catalog with live category filtering, interactive product modals, and persistent cart calculation.</p>
          </div>
          <div class="card">
            <span style="font-family:'JetBrains Mono'; font-size:0.75rem; color:var(--accent);">IBM Cognos · Python · Data Viz</span>
            <h3 style="margin:0.5rem 0;">SwiftRoute Logistics</h3>
            <p style="color:var(--text-muted); font-size:0.85rem;">Enterprise fleet analytics and route optimization dashboard assessing delivery SLA adherence, driver compliance, and fuel consumption.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="certifications">
      <div class="container">
        <div class="sec-header">
          <div class="sec-kicker">05. Credentials</div>
          <h2 class="sec-title">Certifications</h2>
        </div>
        <div class="grid-3">
          <div class="card">
            <h4>IBM Cognos Analytics Enterprise Reporting</h4>
            <p style="color:var(--text-muted); font-size:0.85rem; margin-top:0.25rem;">IBM Academic Initiative (2026)</p>
          </div>
          <div class="card">
            <h4>Python for Data Science & AI Essentials</h4>
            <p style="color:var(--text-muted); font-size:0.85rem; margin-top:0.25rem;">Coursera / Academic (2025)</p>
          </div>
          <div class="card">
            <h4>Software Testing Foundations & STLC</h4>
            <p style="color:var(--text-muted); font-size:0.85rem; margin-top:0.25rem;">Quality Assurance Academy (2025)</p>
          </div>
          <div class="card">
            <h4>Version Control with Git & GitHub</h4>
            <p style="color:var(--text-muted); font-size:0.85rem; margin-top:0.25rem;">GitHub Global Campus (2024)</p>
          </div>
        </div>
      </div>
    </section>

    <section id="contact">
      <div class="container">
        <div class="sec-header">
          <div class="sec-kicker">06. Contact</div>
          <h2 class="sec-title">Get In Touch</h2>
          <p class="sec-desc">Actively exploring entry-level Software Development Engineer (SDE) roles and internships.</p>
        </div>
        <div class="card" style="max-width:600px;">
          <p><strong>Email:</strong> <a href="mailto:krishnakumari.kr.cse@gmail.com" style="color:var(--accent);">krishnakumari.kr.cse@gmail.com</a></p>
          <p style="margin-top:0.5rem;"><strong>Location:</strong> Nagercoil, Tamil Nadu, India</p>
          <p style="margin-top:0.5rem;"><strong>College:</strong> University College of Engineering, Nagercoil (Anna Univ)</p>
          <div style="margin-top:1.5rem; display:flex; gap:1rem;">
            <a href="mailto:krishnakumari.kr.cse@gmail.com" class="btn-primary">Send Email</a>
            <a href="https://github.com/krishnakumari-kr" target="_blank" class="btn-secondary">GitHub Profile</a>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="container">
      <p>© 2026 Krishna Kumari K R. Built with plain HTML, modern CSS & vanilla JS.</p>
    </div>
  </footer>
</body>
</html>`;
  };

  const handleDownloadStandalone = () => {
    const code = getStandaloneHtmlCode();
    const blob = new Blob([code], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'index.html';
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(getStandaloneHtmlCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div
        className="relative w-full max-w-2xl rounded-2xl bg-[#0f172a] border border-slate-800 shadow-2xl p-6 sm:p-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Vercel Static Site Package
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                100% Plain HTML, CSS & Vanilla JS (Zero heavy frameworks)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-6 space-y-4">
          <p className="text-sm text-slate-300 leading-relaxed">
            As requested, here is the standalone, ultra-fast static edition crafted specifically for instant loading and 1-click drag-and-drop deployment on <strong className="text-white">Vercel</strong> or <strong className="text-white">GitHub Pages</strong> with <strong>zero dependencies or npm build steps</strong>!
          </p>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-xs font-mono text-slate-300">
            <div className="text-emerald-400 font-bold">How to deploy to Vercel in 30 seconds:</div>
            <p>1. Click <strong>"Download Standalone index.html"</strong> below.</p>
            <p>2. Keep <code className="text-cyan-400">passport.jpeg</code> in the same folder as <code className="text-cyan-400">index.html</code>.</p>
            <p>3. Go to <a href="https://vercel.com/new" target="_blank" rel="noreferrer" className="text-white underline">vercel.com/new</a> and drag & drop the folder or push to GitHub.</p>
            <p>4. It goes live worldwide in seconds!</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={handleDownloadStandalone}
              className="flex-1 py-3 px-4 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(16,185,129,0.25)]"
            >
              <Download className="w-4 h-4" />
              <span>Download Standalone index.html</span>
            </button>
            <button
              onClick={handleCopyCode}
              className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs flex items-center justify-center gap-2 transition-colors border border-slate-700"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Raw HTML Code</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
