// Project data — production projects, not dummy
import Proyek1 from "/assets/proyek/proyek1.jpeg";
import Proyek2 from "/assets/proyek/proyek2.jpg";
import Proyek3 from "/assets/proyek/proyek3.jpg";
import Proyek4 from "/assets/proyek/proyek4.jpg";
import Proyek5 from "/assets/proyek/proyek5.jpeg";
// import Proyek6 from "/assets/proyek/proyek6.webp";

export const projects = [
  {
    id: "malika-pos",
    gambar: Proyek1,
    // Galeri screenshot produk & dashboard POS
    galeri: [
      Proyek1,
      "/assets/proyek/malika-pos/malika-pos-1.jpg",
      "/assets/proyek/malika-pos/malika-pos-2.jpg",
      "/assets/proyek/malika-pos/malika-pos-3.jpg",
      "/assets/proyek/malika-pos/malika-pos-4.jpg",
      "/assets/proyek/malika-pos/malika-pos-5.jpg",
      "/assets/proyek/malika-pos/malika-pos-6.jpg",
      "/assets/proyek/malika-pos/malika-pos-7.jpg"
    ],
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
    galeri: [
      Proyek2,
      "/assets/proyek/hr-threads/hr-threads-1.jpg",
      "/assets/proyek/hr-threads/hr-threads-2.jpg",
      "/assets/proyek/hr-threads/hr-threads-3.jpg",
      "/assets/proyek/hr-threads/hr-threads-4.jpg",
      "/assets/proyek/hr-threads/hr-threads-5.jpg"
    ],
    nama: "HR Threads Agent",
    role: "Web-Search RAG Architecture & AI Integration",
    desk: "Building an RAG-Based AI Agent for HR Content Using Telegram Approval Gate & the Meta Threads API",
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
    galeri: [
      Proyek3,
      "/assets/proyek/dental-wa/dental-wa-1.jpg",
      "/assets/proyek/dental-wa/dental-wa-2.jpg",
      "/assets/proyek/dental-wa/dental-wa-3.jpg"
    ],
    nama: "Dental WhatsApp Chatbot",
    role: "Backend Developer",
    desk: "An AI-Powered WhatsApp Chatbot with Function Calling and Anti-Hallucination Guardrails for Time Parsing to Automate Clinic Services.",
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
    galeri: [
      Proyek4,
      "/assets/proyek/wa-translator/wa-translator-1.jpg",
      "/assets/proyek/wa-translator/wa-translator-2.jpg",
      "/assets/proyek/wa-translator/wa-translator-3.jpg",
      "/assets/proyek/wa-translator/wa-translator-4.jpg",
      "/assets/proyek/wa-translator/wa-translator-5.jpg",
      "/assets/proyek/wa-translator/wa-translator-6.jpg",
      "/assets/proyek/wa-translator/wa-translator-7.jpg"
    ],
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
    galeri: [
      Proyek5,
      "/assets/proyek/sistem-pakar/sistem-pakar-1.jpg",
      "/assets/proyek/sistem-pakar/sistem-pakar-2.jpg",
      "/assets/proyek/sistem-pakar/sistem-pakar-3.jpg",
      "/assets/proyek/sistem-pakar/sistem-pakar-4.jpg",
      "/assets/proyek/sistem-pakar/sistem-pakar-5.jpg",
      "/assets/proyek/sistem-pakar/sistem-pakar-6.jpg",
      "/assets/proyek/sistem-pakar/sistem-pakar-7.jpg",
      "/assets/proyek/sistem-pakar/sistem-pakar-8.jpg",
      "/assets/proyek/sistem-pakar/sistem-pakar-9.jpg"
    ],
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
  }
];

export const stack = [
  { name: "JavaScript", icon: "SiJavascript" },
  { name: "TypeScript", icon: "SiTypescript" },
  { name: "Node.js", icon: "SiNodedotjs" },
  { name: "React", icon: "SiReact" },
  { name: "Python", icon: "SiPython" },
  { name: "Tailwind CSS", icon: "SiTailwindcss" },
  { name: "SQLite", icon: "SiSqlite" },
  { name: "Git & GitHub", icon: "SiGithub" }
];

export const aiSkills = [
  "Autonomous Agentic AI",
  "Web Development",
  "Web-search RAG Architecture",
  "Frontend Development",
  "Multi LLM Orchestration",
  "Prompt Engineering",
  "Human-in-the-Loop",
  "Deployment",
  "AI Function Calling",
  "Whatsapp Automation",
  "Anti-Hallucination Guardrails",
  "Chrome Extensions",
  "Real-time DOM Observation"
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
