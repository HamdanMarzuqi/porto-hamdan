// Project data — production projects, not dummy
import Proyek1 from "/assets/proyek/proyek1.webp";
import Proyek2 from "/assets/proyek/proyek2.webp";
import Proyek3 from "/assets/proyek/proyek3.webp";
import Proyek4 from "/assets/proyek/proyek4.webp";
import Proyek5 from "/assets/proyek/proyek5.webp";
import Proyek6 from "/assets/proyek/proyek6.webp";

export const projects = [
  {
    id: "malika-pos",
    gambar: Proyek1,
    nama: "Malika Smart Booth POS System",
    role: "Full-Stack Developer & AI Integration",
    desk: "Production POS with AI function calling — 7 tools connecting Groq Llama 3.3 70B to live sales data, menu analytics, and natural-language ops queries. Serving real transactions.",
    impact: [
      "Designed and built a custom Point-of-Sale (POS) system from scratch, deployed to SmarterASP.NET.",
      "Integrated Groq AI (Llama 3.3 70B) via function calling as a cashier assistant, with features including menu search, sales summary, expense reports, and menu recommendations.",
      "Built a real-time dashboard using Chart.js, featuring daily summaries, sales trends, best-selling menu items, payment methods, and weekly recaps.",
      "Built a 3-page SPA architecture: POS (live transactions + QR payments), Dashboard (analytics), and AI Chatbot.",
      "Integrated the Google Sheets API for menu names and prices; operators can update the menu without modifying the program.",
      "Managed daily operations at F&B outlets, from raw ingredient inventory and sales transactions to food service and customer communication."
    ],
    stack: ["Node.js", "Express", "SQLite", "Groq", "Chart.js"],
    category: "AI & Web POS System",
    links: {
      github: "https://github.com/HamdanMarzuqi/Malika-Kebab-Management-System",
      demo: null
    },
    featured: true
  },
  {
    id: "hr-threads",
    gambar: Proyek2,
    nama: "HR Threads Agent",
    role: "AI Agent Developer",
    desk: "Autonomous content agent generating HR posts, running dual-LLM review gate via Telegram, and publishing to Meta Threads on schedule. Survives fly.io free tier.",
    impact: [
      "Designed an end-to-end autonomous AI agent architecture to automate the scheduled creation and publication of HR content on Meta Threads—generating content with 272 organic views (~8x the number of followers) on an account with only 34 followers.",
      "Implemented a dual-LLM pipeline (Claude & Gemini) with automatic fallback between providers and integration of the Tavily Search API for real-time news retrieval, ensuring content remains relevant to the latest HR news.",
      "Built a Human-in-the-Loop review gate via Telegram — the system sends drafts to admins for /approve, /edit, or /skip before publication, combining automation with human oversight.",
      "Designed a topic rotation engine with 40 HR topics and a 30-day recency window using SQLite to prevent content duplication, complete with runtime schedule management (/schedule, /setschedule) without requiring a restart or redeployment.",
      "Built a smart thread splitter that automatically partitions long content (>490 characters) into threaded replies according to Meta Threads API limitations.",
      "Deployed the system to Fly.io (Singapore) in a containerized environment with persistent volumes for SQLite and logs, along with a CI/CD pipeline via GitHub Actions."
    ],
    stack: ["Python", "Claude", "Gemini", "Tavily", "Fly.io"],
    category: "Agentic AI",
    links: {
      github: "https://github.com/HamdanMarzuqi/hr-threads-agent",
      demo: null
    },
    featured: true
  },
  {
    id: "dental-wa",
    gambar: Proyek3,
    nama: "Dental WhatsApp Chatbot",
    role: "RAG & Backend Developer",
    desk: "WhatsApp chatbot for dental clinic scheduling with RAG over Google Sheets, function calling for appointment ops, and anti-hallucination guardrails on time parsing.",
    impact: [
      "Built an end-to-end WhatsApp AI chatbot to automate dental clinic scheduling—patients can check doctors’ schedules by name, day, or office hours in real time.",
      "Implemented a RAG (Retrieval-Augmented Generation) architecture via Function Calling using Groq Llama 3.3 70B — the AI autonomously decides when to retrieve schedule data from Google Sheets, then augments the results into the prompt to generate accurate and natural responses.",
      "Designed a dual-layer parameter extraction pipeline — combining rule-based NLP (keyword & temporal resolver) with AI JSON extraction to ensure queries to the data source remain accurate.",
      "Performed iterative prompt engineering and systematic bug fixes to minimize hallucinated responses — including deterministic JS overrides for AI extraction and constraint injection in system prompts."
    ],
    stack: ["Node.js", "Groq", "whatsapp-web.js", "Sheets API"],
    category: "AI & Chatbot",
    links: {
      github: "https://github.com/HamdanMarzuqi/Dental-appointment-scheduling",
      demo: null
    },
    featured: true
  },
  {
    id: "wa-translator",
    gambar: Proyek4,
    nama: "WhatsApp Web Translator",
    role: "Frontend / Extension Dev",
    desk: "Chrome extension translating WhatsApp Web messages in place. MutationObserver-driven, free Google Translate API, MV3 with CRXJS bundler.",
    impact: [
      "Developed a Chrome extension to translate WhatsApp Web messages in real time with an ON/OFF toggle, without an API key.",
      "Implemented a MutationObserver on the WhatsApp DOM to detect new messages in real time, and injected a “Translate” button into each chat bubble.",
      "Designed a 3-state toggle per message: original → translated → original, with an in-memory cache to avoid repeated requests within a chat.",
      "Workaround for the WhatsApp Lexical Editor — using a ClipboardEvent paste to populate the message input field, since execCommand is blocked by the WhatsApp React editor."
    ],
    stack: ["React 19", "Vite", "Tailwind", "CRXJS"],
    category: "Frontend",
    links: {
      github: "https://github.com/HamdanMarzuqi/whatsapp-web-translator",
      demo: null
    },
    featured: false
  },
  {
    id: "sistem-pakar",
    gambar: Proyek5,
    nama: "Expert System for Heart Disease",
    role: "Research & Backend",
    desk: "Web-based expert system for early heart disease detection using Forward Chaining. Thesis project, validated 90.9% against medical records at RS Muhammadiyah Lamongan.",
    impact: [
      "Developed a web-based expert system (PHP Native, MySQL, Bootstrap 5) for the early detection of heart disease at Muhammadiyah Hospital in Lamongan.",
      "Implemented the Forward Chaining method—the inference engine matches a patient’s symptoms with a rule base to generate a diagnosis along with a match percentage.",
      "Designed a multi-table relational database (symptoms, diseases, rule base, consultations) with 3 user roles (admin, doctor, patient).",
      "Built a flexible knowledge base—rules can be added or modified without coding.",
      "System validity test: **90.9% agreement with doctors’ diagnoses** based on 22 patient medical record samples.",
      "Deployed to public hosting (sistempakarfc.eclipta.web.id)."
    ],
    stack: ["PHP", "MySQL", "Bootstrap 5"],
    category: "Backend & Logic",
    links: {
      github: "https://github.com/HamdanMarzuqi/Sistem-Pakar_FC",
      demo: null
    },
    featured: false
  },
  {
    id: "infra-router",
    gambar: Proyek6,
    nama: "Multi-Provider AI Router",
    role: "AI Infrastructure",
    desk: "Personal AI infrastructure: 9Router as OpenAI-compatible proxy, custom provider mapping, and 3-tier fallback (subscription → cheap → free) for uninterrupted agent uptime.",
    impact: [
      "Subscription → Cheap → Free fallback",
      "Custom OpenAI-compatible provider",
      "Multi-model orchestration"
    ],
    stack: ["9Router", "Agent Router", "OpenAI API", "Hermes"],
    category: "AI Infrastructure",
    links: {
      github: null,
      demo: null
    },
    featured: false
  }
];

export const stack = [
  { name: "JavaScript", level: "Primary", icon: "SiJavascript" },
  { name: "TypeScript", level: "Working", icon: "SiTypescript" },
  { name: "Node.js", level: "Primary", icon: "SiNodedotjs" },
  { name: "React", level: "Primary", icon: "SiReact" },
  { name: "Python", level: "Working", icon: "SiPython" },
  { name: "Tailwind CSS", level: "Primary", icon: "SiTailwindcss" },
  { name: "SQLite", level: "Working", icon: "SiSqlite" },
  { name: "Git & GitHub", level: "Primary", icon: "SiGithub" }
];

export const aiSkills = [
  "Function Calling",
  "RAG Pipelines",
  "Agentic Loops",
  "Prompt Engineering",
  "Multi-LLM Routing",
  "Anti-hallucination Guards"
];

export const experience = [
  {
    role: "Owner & Operator",
    company: "Malika Kebab",
    period: "2021 — Present",
    description: "Operating an F&B business while building its digital systems. End-to-end ownership from inventory to online presence."
  },
  {
    role: "Agentic AI Integration & Web Developer",
    company: "Self-Directed Portfolio",
    period: "2025 — Present",
    description: "4 production-deployed systems — POS with AI, agentic content bot, RAG chatbot, Chrome extension. All shipped to real users."
  },
  {
    role: "MBKM Student Exchange",
    company: "Universitas Muhammadiyah Magelang",
    period: "2023",
    description: "Cross-campus program, exposing to different engineering pedagogy and team dynamics."
  },
  {
    role: "IT Intern",
    company: "RS Muhammadiyah Lamongan",
    period: "2024",
    description: "Hospital IT operations, system support, and contributing to internal tooling. Site of my undergraduate thesis validation."
  }
];
