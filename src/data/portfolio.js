export const profile = {
  name: 'Nikita Kar',
  title: 'Full-Stack Engineer',
  statement: 'I build scalable, full-stack products.',
  tagline:
    'Software engineer at CallHub, working across Django, PostgreSQL, AWS, and React.',
  location: 'Bengaluru, India',
  email: 'nikitakar101102@gmail.com',
  phone: '+91 6009780633',
  github: 'https://github.com/avocadocodes',
  linkedin: 'https://linkedin.com/in/nikitakar20212002',
  availability: 'Available for opportunities',
  // Drop your PDF into the /public folder with this exact name to enable the download button.
  resume: 'Nikita_Kar_Resume.pdf',
}

export const heroTags = [
  'Django / DRF',
  'PostgreSQL',
  'AWS + Docker',
  'Distributed Systems',
  'AI-assisted workflows',
  'React',
]

export const about = [
  "I'm a software engineer with about 1.5 years of experience building backend services that hold up under real load, currently at CallHub in Bengaluru.",
  'My day-to-day is Django REST Framework and PostgreSQL on AWS: designing APIs, tuning queries for latency, and lately building the backend that powers AI-assisted workflows. I also enjoy the frontend, and I have shipped full-stack products end to end with React.',
  'I care about clean, reliable systems, and I like owning a problem from database to UI.',
]

export const skills = [
  { group: 'Languages', items: ['Java', 'Python', 'SQL', 'JavaScript'] },
  { group: 'Backend', items: ['Django', 'Django REST Framework', 'REST APIs', 'Node.js', 'Express'] },
  { group: 'Frontend', items: ['React.js', 'Redux', 'TailwindCSS'] },
  { group: 'Cloud & DevOps', items: ['AWS', 'Docker', 'Kafka', 'Redis', 'CI/CD'] },
  { group: 'Databases', items: ['PostgreSQL', 'MongoDB', 'DynamoDB'] },
  { group: 'Core CS', items: ['Distributed Systems', 'Query Optimization', 'Data Structures & Algorithms', 'OOP', 'RDBMS'] },
]

export const experience = [
  {
    role: 'Software Engineer',
    company: 'CallHub (Gaglers)',
    period: 'Feb 2025 - Present',
    location: 'Bengaluru, Karnataka',
    points: [
      'Built and maintained scalable backend services with Django REST Framework and PostgreSQL, exposing REST APIs consumed across multiple applications, deployed as containerized services on AWS with Docker.',
      'Optimized PostgreSQL queries through indexing, joins, and query tuning to improve API response times, while writing unit tests and contributing to CI/CD workflows.',
      'Designed backend services powering AI-assisted workflows: reusable APIs, better observability, and automated deployment pipelines for internal developer experiences.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Ericsson',
    period: 'May 2024 - Sep 2024',
    location: 'Bengaluru, Karnataka',
    points: [
      'Developed Java-based backend automation for 5G network management by processing operational network data, reducing routine processing time by 90%.',
      'Worked on a zero-touch network management system, increasing team productivity by 25% through streamlined workflows.',
      'Analyzed operational datasets to identify production issues, improving troubleshooting success by 95% and reducing downtime by 40%.',
    ],
  },
]

export const projects = [
  {
    name: 'Cohere',
    blurb:
      'A real-time collaboration platform where teams open a Space (a document, a whiteboard, or a live-run code IDE) and edit together live. Conflict-free multiplayer sync via CRDTs over WebSockets, live cursors and presence, sandboxed code execution streamed to a shared terminal, and full email/password auth.',
    stack: ['React', 'Node.js', 'Express', 'Socket.IO', 'MongoDB', 'Yjs (CRDT)', 'JWT'],
    period: '2026',
    links: [
      { label: 'Live App', url: 'https://cohere-nikita.netlify.app' },
      { label: 'GitHub', url: 'https://github.com/avocadocodes/cohere' },
    ],
  },
  {
    name: 'Groundwork',
    blurb:
      'A multi-tenant SaaS team workspace with Kanban boards and async reports, and an "Ask your workspace" AI copilot that answers only from an organization\'s own tasks and documents, cites the exact sources it used, and refuses to answer when it is not sure instead of hallucinating.',
    stack: ['React', 'Django REST', 'PostgreSQL', 'Celery', 'Redis', 'JWT', 'Groq'],
    period: '2026',
    links: [
      { label: 'Live App', url: 'https://groundwork-nikita.netlify.app' },
      { label: 'GitHub', url: 'https://github.com/avocadocodes/saas-project-api' },
    ],
  },
  {
    name: 'Convene',
    blurb:
      'A browser video-meeting platform (WebRTC) with multi-party calls, screen sharing, in-call chat, presence, and active-speaker detection, plus grounded AI meeting notes that summarize only what was actually said, with each action item backed by a quote from the transcript.',
    stack: ['React', 'WebRTC', 'FastAPI', 'python-socketio', 'Groq'],
    period: '2026',
    links: [
      { label: 'Live App', url: 'https://convene-nikita.netlify.app' },
      { label: 'GitHub', url: 'https://github.com/avocadocodes/convene' },
    ],
  },
  {
    name: 'RAG Document Q&A API',
    blurb:
      'A self-verifying retrieval system: ask questions over your documents and get answers built only from your files, with citations. A per-claim faithfulness check verifies every sentence against the sources and flags anything not actually supported.',
    stack: ['Django REST', 'PostgreSQL + pgvector', 'Sentence-Transformers', 'Hybrid search + reranking'],
    period: '2026',
    links: [{ label: 'GitHub', url: 'https://github.com/avocadocodes/rag-docs-api' }],
  },
  {
    name: 'HealthVault',
    blurb:
      'An e-health monitoring platform for real-time patient management with role-based access for doctors and patients, calendar scheduling, appointment booking, and a real-time analytics dashboard.',
    stack: ['React.js', 'Express.js', 'Redux', 'TailwindCSS', 'MongoDB', 'REST APIs'],
    period: 'Jan 2025 - Present',
    links: [{ label: 'GitHub', url: 'https://github.com/avocadocodes' }],
  },
  {
    name: 'Wallet-wiz',
    blurb:
      'A secure payments platform to send, receive, and request money. Transactions are tracked with unique IDs for integrity, with Redux-optimized state and real-time email notifications via Nodemailer.',
    stack: ['React.js', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'Vercel', 'Render'],
    period: 'Jul 2024 - Aug 2024',
    links: [{ label: 'GitHub', url: 'https://github.com/avocadocodes' }],
  },
]

export const achievements = [
  {
    title: 'LeetCode',
    detail: 'Solved 500+ problems. Highest contest rating: 1672.',
  },
  {
    title: 'Google Girl Hackathon',
    detail: 'Top 400 out of 26,000 participants (top 1.5%).',
  },
  {
    title: 'Myntra WeForShe Hackathon',
    detail: 'Shortlisted in the top 8% of teams at the Ideation Round.',
  },
]

export const education = {
  school: 'Indian Institute of Information Technology, Ranchi',
  degree: 'B.Tech in Computer Science and Engineering',
  period: 'Dec 2021 - May 2025',
  score: 'CGPA: 8.48',
}
