export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI & ML' | 'Web Development' | 'Data Analytics';
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  features: string[];
  architecture?: string[];
  githubUrl: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  highlights: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  category: string;
  skills: {
    name: string;
    level: string;
    highlight?: string;
  }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialNote?: string;
  skillsCovered: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  scoreLabel: string;
  badge?: string;
}

export interface Workshop {
  title: string;
  organizer: string;
  year: string;
  highlight: string;
}

export interface Achievement {
  title: string;
  event: string;
  year: string;
  category: string;
}

export interface Language {
  name: string;
  fluency: string[];
}

export const PERSONAL_INFO = {
  name: 'Krishna Kumari K R',
  shortName: 'Krishna Kumari',
  title: 'Final-year B.E. CSE Student | Aspiring Software Engineer',
  institution: 'University College of Engineering, Nagercoil',
  universityAffiliation: 'Constituent College of Anna University',
  degree: 'B.E. Computer Science and Engineering',
  batch: 'Pursuing (Class of 2026)',
  cgpa: '8.65',
  location: 'Nagercoil / Suchindrum, Tamil Nadu, India',
  email: 'ravikumarbama8@gmail.com',
  phone: '7530082262',
  phoneFormatted: '+91 75300 82262',
  github: 'https://github.com/Krishnakumari-14',
  githubUser: 'Krishnakumari-14',
  linkedin: 'https://linkedin.com/in/krishna-kumari-k-r-18211337b',
  avatar: '/public/passport.jpeg',
  resumePdfUrl: '/public/resume.pdf',
  professionalSummary:
    'Final-year B.E. Computer Science and Engineering student with knowledge of Python, programming fundamentals, data analysis, and software development concepts. Familiar with problem-solving, analytical thinking, and developing academic projects. Eager to learn new technologies, enhance technical skills, and contribute to organizational growth in an entry-level IT role.',
  keyHighlights: [
    { label: 'Academic Standing', value: '8.65 CGPA', detail: 'University College of Engg, Nagercoil' },
    { label: 'School Record', value: '100% SSLC', detail: 'School First in Academic Score' },
    { label: 'Internships', value: '2 Completed', detail: 'Adroit Tech & Appin Tech' },
    { label: 'Certifications', value: '5 Verified', detail: 'Infosys, IBM, TCS, Naan Mudhalvan' },
  ],
};

export const EDUCATION_LIST: EducationItem[] = [
  {
    degree: 'B.E. Computer Science and Engineering',
    institution: 'University College of Engineering, Nagercoil',
    location: 'Nagercoil, Tamil Nadu',
    period: 'Pursuing (2022 – 2026)',
    score: '8.65',
    scoreLabel: 'CGPA',
    badge: 'Undergraduate',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'S.M.S.M. Higher Secondary School, Suchindrum',
    location: 'Suchindrum, Tamil Nadu',
    period: '2023',
    score: '93.16%',
    scoreLabel: 'Board Score',
    badge: 'Academic Distinction',
  },
  {
    degree: 'Secondary School Leaving Certificate (SSLC)',
    institution: 'S.M.S.M. Higher Secondary School, Suchindrum',
    location: 'Suchindrum, Tamil Nadu',
    period: '2021',
    score: '100%',
    scoreLabel: 'Perfect Score',
    badge: 'School First Rank',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming',
    category: 'programming',
    skills: [
      { name: 'C', level: 'Proficient', highlight: 'Pointers, memory management, algorithms, data structures' },
      { name: 'Python', level: 'Advanced', highlight: 'Scripting, Flask, automation, Pandas, NumPy data workflows' },
    ],
  },
  {
    title: 'Web Development',
    category: 'web',
    skills: [
      { name: 'HTML', level: 'Advanced', highlight: 'Semantic structure, accessibility, modern standards' },
      { name: 'CSS', level: 'Advanced', highlight: 'Responsive layouts, Flexbox, Grid, custom styling' },
      { name: 'JavaScript', level: 'Intermediate', highlight: 'DOM manipulation, ES6+, event-driven UI logic' },
    ],
  },
  {
    title: 'Testing & Methodologies',
    category: 'testing',
    skills: [
      { name: 'Software Testing', level: 'Proficient', highlight: 'Manual testing, test cases, defect logging, regression' },
      { name: 'SDLC', level: 'Proficient', highlight: 'Software Development Life Cycle principles & phases' },
      { name: 'STLC', level: 'Proficient', highlight: 'Software Testing Life Cycle from requirements to closure' },
      { name: 'Agile Methodology', level: 'Proficient', highlight: 'Sprint planning, user stories, iterative delivery' },
    ],
  },
  {
    title: 'Data Analytics',
    category: 'data',
    skills: [
      { name: 'Pandas', level: 'Advanced', highlight: 'Data cleaning, series & dataframe transformations' },
      { name: 'NumPy', level: 'Advanced', highlight: 'Numerical array operations, multidimensional math' },
      { name: 'IBM Cognos Analytics', level: 'Proficient', highlight: 'Enterprise BI dashboards, reporting & data modules' },
      { name: 'Data Visualization', level: 'Proficient', highlight: 'Translating metrics into clear visual executive reports' },
    ],
  },
  {
    title: 'AI & ML',
    category: 'ai',
    skills: [
      { name: 'AI & ML Fundamentals', level: 'Intermediate', highlight: 'Supervised learning concepts, evaluation metrics' },
      { name: 'Data Preprocessing', level: 'Intermediate', highlight: 'Feature engineering, normalization, dataset curation' },
      { name: 'Model Development', level: 'Intermediate', highlight: 'Hands-on training, tuning, and evaluation exercises' },
    ],
  },
  {
    title: 'Tools & DevOps',
    category: 'tools',
    skills: [
      { name: 'GitHub', level: 'Advanced', highlight: 'Version control, repositories, collaboration, commits' },
      { name: 'Jenkins', level: 'Intermediate', highlight: 'CI/CD pipeline automation & build triggers' },
    ],
  },
];

export const SOFT_SKILLS = [
  'Communication',
  'Teamwork',
  'Problem Solving',
  'Adaptability',
  'Time Management',
  'Quick Learning',
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'appin-internship',
    role: 'AI & ML Intern',
    company: 'Appin Technology',
    location: 'Internship',
    period: 'Jun 2026 – Jul 2026',
    type: 'Industry Internship',
    highlights: [
      'Practiced AI and Machine Learning fundamentals, core mathematical principles, and model architectures.',
      'Completed hands-on practical exercises in exploratory data preprocessing and feature normalization.',
      'Engaged in end-to-end model development and performance validation using standard evaluation metrics.',
    ],
    technologies: ['Python', 'AI/ML Fundamentals', 'Data Preprocessing', 'Model Development'],
  },
  {
    id: 'adroit-internship',
    role: 'Data Analytics Virtual Intern',
    company: 'Adroit Technologies',
    location: 'Virtual Internship',
    period: 'Mar 2026 – Apr 2026',
    type: 'Virtual Internship',
    highlights: [
      'Worked with Python, Pandas, and NumPy to ingest, cleanse, and structure complex tabular datasets.',
      'Designed insightful data visualizations and analytical workflows to uncover trends and patterns.',
      'Prepared structured analytical reports and summaries communicating findings clearly.',
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Data Visualization', 'Analytics Workflows', 'Reporting'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'ai-expense-tracker',
    title: 'AI Expense Tracker',
    subtitle: 'Daily Expense Tracking & Predictive Spending Insights',
    category: 'AI & ML',
    description:
      'Built a web application in Python, Flask, HTML, and CSS to record and manage daily expenses, featuring integrated expense categorization and an intuitive dashboard to analyze spending patterns.',
    longDescription:
      'The AI Expense Tracker helps individuals seamlessly log daily financial expenditures and view categorical breakdowns. Built with Python and Flask with clean HTML/CSS frontend templates, the system automates expense categorization, tracks historical transactions, and presents intuitive dashboard visualizations to help users understand their spending behaviors.',
    technologies: ['Python', 'Flask', 'HTML', 'CSS', 'GitHub'],
    image: '/src/assets/images/project_expense_tracker_1793459516376.jpg',
    features: [
      'Built a web application to record and manage daily expenses',
      'Integrated expense categorization and transaction history tracking',
      'Created an intuitive dashboard to analyze spending patterns',
      'Structured clean Python Flask backend for lightweight reliable deployment',
      'Version controlled and hosted on GitHub',
    ],
    githubUrl: 'https://github.com/Krishnakumari-14',
  },
  {
    id: 'stationery-shop-website',
    title: 'Stationery Shop Website',
    subtitle: 'Static E-Commerce Platform for Stationery Products',
    category: 'Web Development',
    description:
      'Designed a static e-commerce platform using HTML and CSS to showcase stationery products with structured sections for convenient browsing and optimized accessibility.',
    longDescription:
      'A responsive, static e-commerce platform developed using pure HTML and CSS to display an array of stationery essentials, writing instruments, and creative supplies. Features structured product catalogs for frictionless navigation and refined layouts optimized for cross-device usability and instant page loading.',
    technologies: ['HTML', 'CSS', 'GitHub', 'Responsive Design'],
    image: '/src/assets/images/project_stationery_shop_1793459518085.jpg',
    features: [
      'Designed a static e-commerce platform to showcase stationery products',
      'Structured product sections for convenient browsing and discovery',
      'Optimized page layouts for improved accessibility and usability',
      'Clean vanilla markup for blazing-fast loading speeds',
      'Maintained on GitHub with semantic code structure',
    ],
    githubUrl: 'https://github.com/Krishnakumari-14',
  },
  {
    id: 'swiftroute-logistics',
    title: 'SwiftRoute Logistics – Delivery & Fleet Analytics',
    subtitle: 'Fleet Dashboards, Breakdowns & Delivery Route Performance',
    category: 'Data Analytics',
    description:
      'Created business intelligence dashboards using IBM Cognos Analytics to track deliveries, vehicle breakdowns, and fuel costs, preparing reports to analyze driver ratings and route efficiency.',
    longDescription:
      'An enterprise-grade business intelligence and telemetry analytics solution created with IBM Cognos Analytics. It aggregates trip metrics, monitor vehicle breakdowns, tracks fuel expenditure, and generates executive-ready reports evaluating delivery performance, driver ratings, and route optimization.',
    technologies: ['IBM Cognos Analytics', 'Data Visualization', 'Reporting', 'GitHub'],
    image: '/src/assets/images/project_fleet_analytics_1793459518656.jpg',
    features: [
      'Created dashboards to track deliveries, vehicle breakdowns, and fuel costs',
      'Prepared reports to analyze delivery performance, driver ratings, and route efficiency',
      'Leveraged IBM Cognos Analytics multi-dimensional metrics and visualization tools',
      'Designed KPI scorecards for transportation operations monitoring',
    ],
    githubUrl: 'https://github.com/Krishnakumari-14',
  },
];

// Exact verified certifications from Krishna Kumari K R's resume:
export const CERTIFICATIONS: Certification[] = [
  {
    id: 'infosys-software-testing',
    title: 'Software Testing',
    issuer: 'Infosys',
    year: '2026',
    credentialNote: 'Infosys Springboard Verified',
    skillsCovered: ['Manual Testing', 'Test Case Design', 'STLC', 'Defect Management'],
  },
  {
    id: 'ibm-frontend',
    title: 'Front-End Technologies',
    issuer: 'IBM',
    year: '2026',
    credentialNote: 'IBM SkillsBuild Professional Certification',
    skillsCovered: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web Layouts'],
  },
  {
    id: 'tcs-yep',
    title: 'Youth Employment Program',
    issuer: 'TCS (Tata Consultancy Services)',
    year: '2026',
    credentialNote: 'TCS Corporate Readiness & Professional Excellence',
    skillsCovered: ['Corporate Readiness', 'Communication', 'Workplace Culture', 'IT Problem Solving'],
  },
  {
    id: 'infosys-agile',
    title: 'Agile Methodology',
    issuer: 'Infosys',
    year: '2025',
    credentialNote: 'Infosys Springboard Verified',
    skillsCovered: ['Scrum Framework', 'Sprint Execution', 'Agile Ceremonies', 'User Story Mapping'],
  },
  {
    id: 'naan-mudhalvan-devops',
    title: 'DevOps',
    issuer: 'Naan Mudhalvan',
    year: '2025',
    credentialNote: 'Tamil Nadu Skill Development Corporation (TNSDC)',
    skillsCovered: ['CI/CD Foundations', 'Jenkins', 'GitHub Workflows', 'Automation Basics'],
  },
];

export const WORKSHOPS: Workshop[] = [
  {
    title: 'Lean Startup & Minimum Viable Product (MVP)',
    organizer: "Institution's Innovation Council",
    year: '2026',
    highlight: 'Ideation, MVP prototyping, customer discovery, and product-market testing frameworks.',
  },
  {
    title: 'Building Careers in AI',
    organizer: 'EduCAP Tech',
    year: '2025',
    highlight: 'Industry landscape, AI/ML career roadmaps, real-world implementations, and emerging tech stacks.',
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'First Prize — Detectives and Chronicles',
    event: 'College Technical Symposium',
    year: '2026',
    category: 'Technical & Problem Solving',
  },
  {
    title: 'First Prize — Group Dance',
    event: 'College Cultural Fest',
    year: '2025',
    category: 'Cultural & Team Collaboration',
  },
  {
    title: 'School First in Academic Score',
    event: 'S.M.S.M. Higher Secondary School',
    year: '2024 / 2021',
    category: 'Academic Excellence (100% SSLC, 93.16% HSC)',
  },
];

export const LANGUAGES: Language[] = [
  { name: 'Tamil', fluency: ['Read', 'Write', 'Speak', 'Listen'] },
  { name: 'English', fluency: ['Read', 'Write', 'Speak', 'Listen'] },
  { name: 'Malayalam', fluency: ['Listen'] },
];
