// ============================================================
// Central data file – Senthuran Arulselvam Portfolio
// Edit this file to update all portfolio content.
// ============================================================

// ── Personal Information ────────────────────────────────────
export const personalInfo = {
  name: 'Senthuran Arulselvam',
  shortName: 'Senthuran',
  location: 'Colombo, Sri Lanka',
  email: 'senthuranarulselvam@gmail.com',
  linkedin: 'https://www.linkedin.com/in/arulselvam-senthuran-197a4a3a9/',
  github: 'https://github.com/arulselvamsenthuran-sys',
  phone: '0743357708',
  roles: [
    'Full-Stack Developer',
    'Software Developer',
    'DevOps Enthusiast',
    'Computer Engineering Undergraduate',
  ],
  heroIntro:
    'Computer Engineering undergraduate passionate about building practical software solutions through web technologies and modern development tools.',
  aboutIntro:
    'I am a third-year Computer Engineering undergraduate at the University of Sri Jayewardenepura, passionate about building practical software solutions through full-stack development and modern technologies.',
  // Actual file on disk: profile.jpeg
  profileImage: '/images/profile.jpeg',
  resumePath: '/Senthuran_Arulselvam_Resume.pdf',
};

// ── Education ───────────────────────────────────────────────
export interface EducationEntry {
  id: string;
  level: string;          // e.g. "Undergraduate Degree"
  degree: string;
  institution: string;
  department?: string;
  minor?: string;
  period?: string;        // Optional — not all entries have a date range
  gpa?: string;
  status?: string;
  highlights?: string[];  // For A/L results etc.
}

export const educationList: EducationEntry[] = [
  {
    id: 'usjp',
    level: 'Undergraduate Degree',
    degree: 'Bachelor of Science of Engineering (Honours)',
    institution: 'University of Sri Jayewardenepura, Colombo, Sri Lanka',
    department: 'Computer Engineering',
    minor: 'Minor in Data Management',
    period: 'February 2024 – Present',
    gpa: '3.1 / 4.0',
    status: 'Currently Enrolled',
  },
  {
    id: 'jaffna-college',
    level: 'GCE Advanced Level',
    degree: 'Physical Science Stream',
    institution: 'Jaffna College, Vaddukoddai, Jaffna',
    highlights: [
      'Combined Mathematics – A',
      'Physics – A',
      'Chemistry – B',
    ],
  },
];

// ── Projects ────────────────────────────────────────────────
export interface Project {
  id: string;
  title: string;
  category: string;
  duration: string;
  /** Three concise bullet points describing the project */
  descriptionPoints: string[];
  image: string;
  tags: string[];
  /**
   * Set to a real URL to show the GitHub button.
   * Set to null to hide the button (no invented URLs).
   */
  github: string | null;
  live?: string;
}

export const projects: Project[] = [
  {
    id: 'vehicle-data-management',
    title: 'Vehicle Data Management System',
    category: 'Individual Project – Data Management',
    duration: 'Ongoing',
    descriptionPoints: [
      'Developing a centralised web-based system to manage car profiles, diagnostic assessments, inspection results, and maintenance records.',
      'Implementing an MLP-based machine learning classifier to analyse available vehicle diagnostic data and suggest supported fault categories for cars.',
      'Integrating diagnostic information with mechanic inspection records to support fault verification and improve vehicle data traceability.',
    ],
    image: '/images/vehicle-data-management.jpg',  // ← file not yet added; placeholder shows until uploaded
    tags: ['React.js', 'Python', 'MySQL', 'Scikit-learn', 'Git', 'GitHub'],
    github: null, // Add real repo URL when available
  },
  {
    id: 'personal-finance',
    title: 'Personal Financial Decision Support System',
    category: 'Personal Full-Stack Project',
    duration: 'May 2026 – October 2026',
    descriptionPoints: [
      'Developed a full-stack web application to analyse financial transactions and support financial decisions using historical data and scenario simulations.',
      'Implemented transaction deduplication, double-entry bookkeeping, and deterministic financial analysis to evaluate cash flow, savings, and liquidity risks.',
      'Integrated Google Gemini AI for contextual financial explanations with secure authentication, prompt injection protection, and persistent conversational history.',
    ],
    image: '/images/personal-finance.jpg',           // ← file not yet added; placeholder shows until uploaded
    tags: ['React.js', 'Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Gemini API', 'Docker'],
    github: null, // Add real repo URL when available
  },
  {
    id: 'neuro-player',
    title: 'Neuro Player – AI-Powered Desktop Media Player',
    category: 'Team Project – Semester 4',
    duration: 'September 2025 – February 2026',
    descriptionPoints: [
      'Developed an AI-powered desktop media player using Electron and React.js, integrating video playback with automated code extraction and timestamp-based speech transcription.',
      'Implemented an interactive video Region of Interest (ROI) scanning system using Tesseract.js OCR and Google Gemini Vision to extract code from programming tutorials.',
      'Built a fault-tolerant speech transcription pipeline using Python, faster-whisper, and FFmpeg with background processing, pause/resume functionality, and transcription recovery.',
    ],
    image: '/images/neuro-player.png',              // ← actual file on disk is .png
    tags: ['React.js', 'Electron', 'Node.js', 'Vite', 'Python', 'Tesseract.js', 'Whisper', 'Gemini API', 'Groq API'],
    // GitHub profile used because individual repo URL is unavailable
    github: 'https://github.com/arulselvamsenthuran-sys',
  },
  {
    id: 'autonomous-chair',
    title: 'IoT-Based Autonomous Chair Rearrangement System',
    category: 'Team Project – Semester 5',
    duration: 'March 2026 – June 2026',
    descriptionPoints: [
      'Developed an IoT-based autonomous robotic chair system that automatically returns a displaced chair to its predefined parking position using a single clap trigger.',
      'Implemented computer vision-based chair localisation using OpenCV and ArUco markers, with A* path planning and obstacle-aware path replanning.',
      'Integrated ESP32-based motor control, MQTT communication, gyroscope-based rotation control, and ultrasonic obstacle detection for autonomous movement.',
    ],
    image: '/images/autonomous-chair.png',           // ← actual file on disk is .png
    tags: ['Python', 'OpenCV', 'A* Pathfinding', 'ESP32', 'C++', 'MQTT', 'ArUco Markers'],
    github: null, // Add real repo URL when available
  },
  {
    id: 'color-slicer',
    title: 'Color Slicer Game',
    category: 'Team Project – Semester 3',
    duration: 'April 2025 – June 2025',
    descriptionPoints: [
      'Developed a dynamic reflex-based game featuring a player-controlled box that slices randomly generated, colour-changing balls.',
      'Applied Object-Oriented Programming principles to organise game components and implement game logic.',
      'Implemented real-time game state management to support interactive gameplay.',
    ],
    image: '/images/color-slicer.jpg',
    tags: ['C++', 'Object-Oriented Programming (OOP)'],
    github: null, // Add real repo URL when available
  },
];

// ── Skills ──────────────────────────────────────────────────
export interface Skill {
  name: string;
  /**
   * Proficiency level 0–100.
   * Leave undefined until you decide your self-assessed levels.
   * The skill bar renders at 0% when undefined.
   */
  level?: number;
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    label: 'Programming Languages',
    skills: [
      { name: 'C++', level: 90 },
      { name: 'Java', level: 80 },
      { name: 'Python', level: 70 },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend Development',
    skills: [
      { name: 'HTML5', level: 80 },
      { name: 'CSS3', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'React.js', level: 75 },
      { name: 'Next.js', level: 80 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Spring Boot', level: 70 },
      { name: 'FastAPI', level: 85 },
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    skills: [
      { name: 'MySQL', level: 90 },
      { name: 'PostgreSQL', level: 70 },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Technologies',
    skills: [
      { name: 'Git', level: 80 },
      { name: 'GitHub', level: 85 },
      { name: 'Docker', level: 75 },
      { name: 'VS Code', level: 90 },
      { name: 'IntelliJ IDEA', level: 80 },
    ],
  },
];

/** Areas of active interest – shown as a banner in the Skills section */
export const areasOfInterest: string[] = [
  'DevOps',
  'Artificial Intelligence',
  'Machine Learning',
];
