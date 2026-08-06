// Project data production projects, not dummy
import Proyek1 from "/assets/proyek/proyek1.jpeg";
import Proyek2 from "/assets/proyek/proyek2.jpg";
import Proyek3 from "/assets/proyek/proyek3.jpg";
import Proyek4 from "/assets/proyek/proyek4.jpg";
import Proyek5 from "/assets/proyek/proyek5.jpeg";
import Proyek6 from "/assets/proyek/Proyek6.jpeg";

export const projects = [
  {
    id: "malika-pos",
    group: "web",
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
    desk: "Production POS with AI function calling, 7 tools connecting Groq Llama 3.3 70B to live sales data, menu analytics, and natural-language ops queries. Serving real transactions.",
    impact: [
      "Designed and built a custom Point-of-Sale (POS) system from scratch, deployed to SmarterASP.NET.",
      "Integrated Groq AI (Llama 3.3 70B) via function calling as a cashier assistant, with features including menu search, sales summary, expense reports, and menu recommendations.",
      "Built a real-time dashboard using Chart.js, featuring daily summaries, sales trends, best-selling menu items, payment methods, and weekly recaps.",
      "Built a 3-page SPA architecture: POS (live transactions + QR payments), Dashboard (analytics), and AI Chatbot.",
      "Integrated the Google Sheets API for menu names and prices; operators can update the menu without modifying the program.",
      "Managed daily operations at F&B outlets, from raw ingredient inventory and sales transactions to food service and customer communication."
    ],
    stack: ["Node.js", "Express", "SQLite", "Groq AI", "Chart.js", "Sheets API"],
    category: "AI & Web POS System",
    links: {
      github: "https://github.com/HamdanMarzuqi/Malika-Kebab-Management-System",
      demo: null
    },
    featured: true
  },
  {
    id: "hr-threads",
    group: "ai",
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
    role: "Web Search-Augmented-Generation Architecture & AI Integration",
    desk: "Building a Search-Augmented AI Agent for HR Content Using Telegram Approval Gate & the Meta Threads API",
    impact: [
      "Designed an end-to-end autonomous AI agent architecture to automate the scheduled creation and publication of HR content on Meta Threads. Generating content with 272 organic views (~8x the number of followers) on an account with only 34 followers.",
      "Implemented a dual-LLM pipeline (Claude & Gemini) with automatic fallback between providers and integration of the Tavily Search API for real-time news retrieval, ensuring content remains relevant to the latest HR news.",
      "Built a Human-in-the-Loop review gate via Telegram. The system sends drafts to admins for /approve, /edit, or /skip before publication, combining automation with human oversight.",
      "Designed a topic rotation engine with 40 HR topics and a 30-day recency window using SQLite to prevent content duplication, complete with runtime schedule management (/schedule, /setschedule) without requiring a restart or redeployment.",
      "Built a smart thread splitter that automatically partitions long content (>490 characters) into threaded replies according to Meta Threads API limitations.",
      "Deployed the system to Fly.io in a containerized environment with persistent volumes for SQLite and logs, along with a CI/CD pipeline via GitHub Actions."
    ],
    stack: ["Python", "Claude", "Gemini", "Tavily", "Telegram Bot", "Fly.io"],
    category: "AI Automation Agent",
    links: {
      github: "https://github.com/HamdanMarzuqi/hr-threads-agent",
      demo: null
    },
    featured: true
  },
  {
    id: "dental-wa",
    group: "ai",
    gambar: Proyek3,
    galeri: [
      Proyek3,
      "/assets/proyek/dental-wa/dental-wa-1.jpg",
      "/assets/proyek/dental-wa/dental-wa-2.jpg",
      "/assets/proyek/dental-wa/dental-wa-3.jpg"
    ],
    nama: "Dental WhatsApp Chatbot",
    role: "Backend Developer",
    desk: "An AI-Powered WhatsApp Chatbot with Function Calling and Structured RAG to Automate Clinic Services.",
    impact: [
      "Built an end-to-end WhatsApp AI chatbot to automate dental clinic scheduling. Patients can check doctors’ schedules by name, day, or office hours in real time.",
      "Implemented a Structured RAG (Retrieval-Augmented Generation) architecture via Function Calling using Groq Llama 3.3 70B. The AI autonomously decides when to retrieve schedule data from Google Sheets, then augments the results into the prompt to generate accurate and natural responses.",
      "Designed a dual-layer parameter extraction pipeline. Combining rule-based NLP (keyword & temporal resolver) with AI JSON extraction to ensure queries to the data source remain accurate.",
      "Performed iterative prompt engineering and systematic bug fixes to minimize hallucinated responses including deterministic JS overrides for AI extraction and constraint injection in system prompts."
    ],
    stack: ["Node.js", "Groq AI", "Gemini", "whatsapp-web.js", "Sheets API"],
    category: "AI & Chatbot",
    links: {
      github: "https://github.com/HamdanMarzuqi/Dental-appointment-scheduling",
      demo: null
    },
    featured: true
  },
  {
    id: "wa-translator",
    group: "web",
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
      "Workaround for the WhatsApp Lexical Editor and using a ClipboardEvent paste to populate the message input field, since execCommand is blocked by the WhatsApp React editor."
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
    group: "web",
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
      "Implemented the Forward Chaining method and inference engine matches a patient’s symptoms with a rule base to generate a diagnosis along with a match percentage.",
      "Designed a multi-table relational database (symptoms, diseases, rule base, consultations) with 3 user roles (admin, doctor, patient).",
      "Built a flexible knowledge base where rules can be added or modified without coding.",
      "System validity test: **90.9% agreement with doctors’ diagnoses** based on 22 patient medical record samples.",
      "Deployed to public hosting (sistempakarfc.eclipta.web.id)."
    ],
    stack: ["PHP", "MySQL", "Bootstrap 5"],
    category: "Web Development",
    links: {
      github: "https://github.com/HamdanMarzuqi/Sistem-Pakar_FC",
      demo: null
    },
    featured: false
  },
  {
    id: "infra-router",
    group: "ai",
    gambar: Proyek6,
    galeri: [
      Proyek6,
      "/assets/proyek/hermes-9router/hermes-9router-2.png",
      "/assets/proyek/hermes-9router/hermes-9router-3.png",
      "/assets/proyek/hermes-9router/hermes-9router-4.png",
      "/assets/proyek/hermes-9router/hermes-9router-1.png"
    ],
    nama: "Hermes Agent + 9Router Integration",
    role: "AI Infrastructure & System Integration",
    desk: "Deployed Hermes Agent as an autonomous AI assistant on local infrastructure with persistent memory, tool-use capabilities, and multi-platform messaging support (Telegram).",
    impact: [
      "Configured 9Router as an LLM proxy gateway implementing a 3-tier provider fallback (paid → cheap → free) for automatic failover when rate limits or outages occur on upstream APIs.",
      "Integrated Telegram bot as the primary interaction layer, enabling real-time queries routed through multiple free-tier LLM providers without manual provider switching.",
      "Designed a cost-optimized architecture that maintains AI agent uptime using exclusively free API tiers through intelligent routing and quota-aware fallback logic.",
      "Applied system integration patterns: client (Telegram) ↔ agent framework (Hermes) ↔ proxy gateway (9Router) ↔ multi-provider LLM backend."
    ],
    stack: ["Hermes Agent", "9Router", "Telegram Bot", "Multi-LLM"],
    category: "AI Infrastructure",
    links: {
      github: null,
      demo: null
    },
    featured: false
  },
  {
      id: "streetwear",
      group: "web",
      gambar: "/assets/proyek/streetwear/streetwear-1.jpg",
      galeri: [
        "/assets/proyek/streetwear/streetwear-1.jpg",
        "/assets/proyek/streetwear/streetwear-2.jpg",
        "/assets/proyek/streetwear/streetwear-3.jpg"
      ],
      nama: "StreetWear.co - E-Commerce Website",
    role: "AI & Fullstack Web Developer",
    desk: "Deployed a premium streetwear e-commerce platform with a Cyber-Brutalist aesthetic, built with Next.js 15 App Router, React 19, and TypeScript. It features interactive 3D animations, a real-time shopping cart system, JWT authentication, and payment gateway integrations with Stripe and PayPal.",
    impact: [
      "Building a streetwear e-commerce platform with Next.js 15 + TypeScript and React Server Components (RSC) architecture, including a product catalog, product detail pages, shopping cart, checkout flow, and user authentication (https://street-wear-co-web-9i8k.vercel.app/)",
      "Implemented an auto-saved shopping cart. Cart contents are retained even if the visitor closes their browser and returns later, without needing to log in.",
      "Developed a server-side multi-payment checkout flow (Stripe & PayPal) with server-side price recalculation to prevent price manipulation, combined with Zod input validation and React Hook Form on the checkout form.",
      "Designing a design system with Tailwind CSS (cyber-brutalist, dark mode), Framer Motion animations (3D tilt, glitch text), and Lenis smooth scrolling with a responsive UI."
    ],
    stack: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "Zustand"],
    category: "Web Development",
    links: {
      github: "https://github.com/HamdanMarzuqi/StreetWear.co_web",
      demo: "https://street-wear-co-web-9i8k.vercel.app/"
    },
    featured: false
  },
  {
    id: "luminara",
    group: "web",
    gambar: "/assets/proyek/luminara/luminara-1.jpg",
    galeri: [
      "/assets/proyek/luminara/luminara-1.jpg",
      "/assets/proyek/luminara/luminara-2.jpg",
      "/assets/proyek/luminara/luminara-3.jpg"
    ],
    nama: "Luminara Aesthetic Dental Clinic Website",
    role: "AI & Fullstack Web Developer",
    desk: "Personal project: Deployed a React + Vite-based dental clinic profile website featuring multilingual support (ID/EN), an online booking system integrated with the WhatsApp API, and scroll animations implemented using the Intersection Observer API alone, without any additional libraries.",
    impact: [
      "Built the Luminara Dental Clinic website using React 19 + Vite, implementing a component-based architecture with 12 modular sections (Hero, Treatments, Doctors, FAQ, etc.) (https://luminara-dental-clinic.vercel.app/)",
      "Implemented a multilingual system (Indonesian/English) using the React Context API and persistence via localStorage; all UI content switches languages in real time without a page reload.",
      "Built an online booking feature that generates automatically formatted messages and redirects users to the Admin’s WhatsApp via the Deep Link API, complete with validation for Indonesian phone number formats (08xxx/+62), client-side form validation, and protection against duplicate submissions."
    ],
    stack: ["React 19", "Vite", "Tailwind CSS"],
    category: "Web Development",
    links: {
      github: "https://github.com/HamdanMarzuqi/Luminara-Dental-Clinic",
      demo: "https://luminara-dental-clinic.vercel.app/"
    },
    featured: false
  },
  {
    id: "content-planner",
    group: "web",
    gambar: "/assets/proyek/content-planner/content-planner-1.jpg",
    galeri: [
      "/assets/proyek/content-planner/content-planner-1.jpg",
      "/assets/proyek/content-planner/content-planner-2.jpg",
      "/assets/proyek/content-planner/content-planner-3.jpg"
    ],
    nama: "Content Generator Dashboard - Google Apps Script + Google Sheets Scheduling Tool",
    role: "Web Developer & Google Workspace Integration",
    desk: "Personal project: Pokémon Content Planner Dashboard, a social media content management web app with a retro pixel-art aesthetic, is built using Vanilla JS + Web Audio API, integrated directly into Google Sheets as a database via Google Apps Script, and runs as a web app or as an embedded modal within a spreadsheet.",
    impact: [
      "Build a content management dashboard for 3+ social media platforms (Instagram, TikTok, YouTube, Threads, etc.) using Vanilla JS (use incognito mode if it fails: https://script.google.com/macros/s/AKfycbzYCvuOJYRNPDbBmewCUQTEAc_a4I3fSIWykxVLbhA_u9F7c7jRc7lJ0rRQkn250myX0A/exec)",
      "Integrate Google Apps Script as a backend server for form submissions, which then detects the Apps Script environment (window.google.script.run) and automatically syncs data to Google Sheets as a database.",
      "Design a retro pixel-art interface in the style of Pokémon games, with added sound effects for clicks, modal openings, and success chimes to combine gameplay and productivity, making it easy for users to manage their daily schedules."
    ],
    stack: ["Vanilla.js", "HTML/CSS", "Google Apps Script", "Google Sheets"],
    category: "Tools & Web Development",
    links: {
      github: "https://github.com/HamdanMarzuqi/Content-Planner-Dashboard-Social-Media-Scheduling-Tool-",
      demo: "https://script.google.com/macros/s/AKfycbzYCvuOJYRNPDbBmewCUQTEAc_a4I3fSIWykxVLbhA_u9F7c7jRc7lJ0rRQkn250myX0A/exec"
    },
    featured: false
  },
  {
    id: "car-rent",
    group: "web",
    gambar: "/assets/proyek/car-rent/car-rent-1.jpg",
    galeri: [
      "/assets/proyek/car-rent/car-rent-1.jpg",
      "/assets/proyek/car-rent/car-rent-2.jpg",
      "/assets/proyek/car-rent/car-rent-3.jpg"
    ],
    nama: "AlexandreCar Rent! - E-Commerce Website",
    role: "Web Developer",
    desk: "Personal Project: A modern car rental booking platform built with Next.js 16 App Router + TypeScript + Supabase (PostgreSQL), featuring a booking widget with real-time price estimates, Framer Motion spring physics animations, and REST API routes with Zod validation",
    impact: [
      "Build a one-page car rental company profile using Next.js 16 App Router + TypeScript, including a fleet catalog, rental packages, how it works, booking, testimonials, and contact information.",
      "Designing an interactive booking widget that includes selection of rental type (daily/weekly/monthly), pickup and drop-off locations, pickup and drop-off dates, and status feedback after submission.",
      "Building the /api/contact API route with server-side validation via Zod to validate renter contact information (name, email, phone number) before processing, then storing it in the database (Supabase) once configured.",
      "Design the user interface using Framer Motion for animations and the Tailwind CSS 4 design system—ensuring a responsive layout—and develop it with comprehensive documentation (PRD, architecture, schematics, security, design, and rules)."
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Zod"],
    category: "Web Development",
    links: {
      github: "https://github.com/HamdanMarzuqi/AlexandreCar_Rent-_website",
      demo: "https://alexandre-car-rent-website.vercel.app/"
    },
    featured: false
  },
  {
    id: "aws-affiliate",
    group: "ai",
    gambar: "/assets/proyek/aws-affiliate/aws-affiliate-1.jpg",
    galeri: [
      "/assets/proyek/aws-affiliate/aws-affiliate-1.jpg",
      "/assets/proyek/aws-affiliate/aws-affiliate-2.jpg",
      "/assets/proyek/aws-affiliate/aws-affiliate-3.jpg"
    ],
    nama: "AWS Affiliate Threads Agent",
    role: "Web Search-Augmented-Generation Architecture & AI Integration",
    desk: "A Python-based autonomous AI agent that automatically generates Amazon affiliate copy (for the U.S. market) using the Google Gemini and Tavily APIs, publishes it to the Meta Threads API, and implements a human-in-the-loop review process via a Telegram bot",
    impact: [
      "Build an automated AI agent based on Python and a Telegram bot that generates Amazon affiliate marketing content on the Threads platform, from product research and draft writing by an AI model to automated publication on Threads via the Meta Graph API.",
      "Design a human-in-the-loop workflow (human review gate), where AI-generated content drafts are sent to Telegram, reviewed and approved by an operator before being uploaded to Threads",
      "Integrating automated market research with the Tavily Search API to track trending products, a database of 527 products across 9 niches (tech, home office, lifestyle, etc.), and an SQLite database to store the history of all content ever created.",
      " Implementing compliance automation by automatically adding the #Ad tag (due to the U.S. market) to every Threads post and performing data searches via the Tavily API."
    ],
    stack: ["Python", "Telegram Bot API", "Meta Threads API", "Tavily", "LLM/ Gemini"],
    category: "AI Automation Agent",
    links: {
      github: "https://github.com/HamdanMarzuqi/AWS-Affiliate-Threads-Agent",
      demo: null
    },
    featured: false
  }
];

export const stack = [
  { name: "JavaScript", icon: "SiJavascript" },
  { name: "Express", icon: "SiExpress" },
  { name: "Node.js", icon: "SiNodedotjs" },
  { name: "React", icon: "SiReact" },
  { name: "Python", icon: "SiPython" },
  { name: "Tailwind CSS", icon: "SiTailwindcss" },
  { name: "SQLite", icon: "SiSqlite" },
  { name: "Git & GitHub", icon: "SiGithub" },
  { name: "Antigravity IDE", icon: "AntigravityIcon" },
  { name: "Cursor", icon: "CursorIcon" }
];

export const aiSkills = [
  "Autonomous Agentic AI",
  "Structured RAG",
  "Multi-LLM Orchestration",
  "AI Function Calling",
  "Human-in-the-Loop",
  "Anti-Hallucination Guardrails",
  "WhatsApp Automation",
  "Chrome Extensions"
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
    description: "4 production-deployed systems: POS System Website with AI Chatbot Integration, agentic content bot, Structured RAG chatbot, Chrome extension. All shipped to real users."
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
