import { useState, useEffect } from "react";
import { useScrollReveal } from "./hooks/useScrollReveal.js";

import { FiArrowDown, FiArrowUpRight, FiArrowUp, FiGithub, FiZap, FiCpu, FiServer, FiBox, FiMaximize2, FiImage, FiCode, FiExternalLink } from "react-icons/fi";
import { SiReact, SiNodedotjs, SiTailwindcss, SiPython, SiJavascript, SiExpress, SiSqlite, SiGithub } from "react-icons/si";
import { projects, stack, aiSkills, experience } from "./data";
import ProjectModal from "./components/ProjectModal.jsx";
import HeroImage from "/assets/Hamdan_Red_Background.png";
import { useLanguage } from "./context/useLanguage.js";

// Custom SVG Icons for Antigravity IDE & Cursor AI Editor
const CursorIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" fillOpacity="0.95" />
    <path d="M2 7V17L12 22V12L2 7Z" fill="currentColor" fillOpacity="0.55" />
    <path d="M22 7V17L12 22V12L22 7Z" fill="currentColor" fillOpacity="0.75" />
  </svg>
);

const AntigravityIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="12" cy="12" r="3.5" fill="currentColor" />
    <ellipse cx="12" cy="12" rx="9" ry="4" stroke="currentColor" strokeWidth="1.6" transform="rotate(-30 12 12)" />
    <ellipse cx="12" cy="12" rx="9" ry="4" stroke="currentColor" strokeWidth="1.6" strokeDasharray="14 3" transform="rotate(30 12 12)" strokeOpacity="0.7" />
    <circle cx="12" cy="3" r="1" fill="currentColor" />
    <circle cx="5" cy="18" r="0.8" fill="currentColor" fillOpacity="0.8" />
    <circle cx="19" cy="18" r="0.8" fill="currentColor" fillOpacity="0.8" />
  </svg>
);

const stackIconMap = {
  SiJavascript, SiExpress, SiNodedotjs, SiReact,
  SiPython, SiTailwindcss, SiSqlite, SiGithub,
  AntigravityIcon, CursorIcon
};

const TYPED_WORDS = ["Web Developer", "Enthusiast in Agentic AI & Automation"];

// ─── Typewriter Hook ───
const useTypewriter = (words, speed = 80, pause = 1800) => {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = charIdx + 1;
        setText(current.slice(0, next));
        if (next === current.length) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCharIdx(next);
        }
      } else {
        const next = charIdx - 1;
        setText(current.slice(0, next));
        if (next <= 0) {
          setDeleting(false);
          setWordIdx((w) => (w + 1) % words.length);
          setCharIdx(0);
        } else {
          setCharIdx(next);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return text;
};

// ─── Scroll To Top Hook ───
const useScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setShow(window.scrollY > 400);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return { show, scrollToTop };
};


// ─── Project Card ───
const ProjectCard = ({ project, index, onOpenModal, t }) => {
  const reveal = useScrollReveal({ animation: "fade-up", delay: Math.min(index * 80, 300) });
  const imageCount = project.galeri && project.galeri.length > 0 ? project.galeri.length : 1;

  return (
    <article
      ref={reveal.ref}
      className={`group card min-w-[72vw] md:min-w-0 snap-center rounded-lg overflow-hidden flex flex-col transition-transform duration-300 active:scale-[0.985] md:hover:-translate-y-1 md:hover:shadow-[0_18px_45px_-24px_rgba(139,92,246,0.65)] ${reveal.cls}`}
      style={reveal.style}
    >
      <div
        className="relative aspect-[16/9] overflow-hidden bg-ink-900 border-b border-ink-800/80 cursor-pointer"
        onClick={() => onOpenModal(project)}
      >
        <img
          src={project.gambar}
          alt={project.nama}
          loading="lazy"
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500"
        />
        {/* Gallery Image Count Badge */}
        <div className="absolute top-3 right-3 px-2 py-1 bg-ink-950/80 backdrop-blur-sm border border-ink-800 rounded font-mono text-[10px] text-ink-300 flex items-center gap-1 opacity-90 group-hover:opacity-100 group-hover:border-accent-500/50 transition-all">
          <FiImage size={12} className="text-accent-400" />
          <span>{imageCount} {t.projects.photos}</span>
        </div>

        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-ink-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-ink-100 font-mono text-xs">
          <span className="px-3 py-1.5 bg-ink-950/90 border border-ink-700 rounded-md backdrop-blur-sm flex items-center gap-1.5 shadow-lg group-hover:scale-105 transition-transform">
            <FiMaximize2 size={13} className="text-accent-400" />
            <span>{t.projects.viewPicture}</span>
          </span>
        </div>
      </div>

      <div className="p-3.5 md:p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3
            className="text-base md:text-lg font-display font-semibold leading-snug text-ink-50 group-hover:text-accent-400 transition-colors cursor-pointer line-clamp-2"
            onClick={() => onOpenModal(project)}
          >
            {project.nama}
          </h3>
          <div className="flex items-center shrink-0 gap-1 pt-0.5">
            {project.links?.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 text-ink-400 hover:text-accent-400 transition-colors"
                aria-label="Open live demo"
                title="Live demo"
              >
                <FiExternalLink size={16} />
              </a>
            )}
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 p-1.5 text-ink-400 hover:text-accent-400 transition-colors"
                aria-label="View source on GitHub"
              >
                <FiGithub size={16} />
              </a>
            )}
          </div>
        </div>

        <p className="font-mono text-[10px] uppercase tracking-widest text-ink-500 mb-3">
          {project.role}
        </p>

        <p className="text-xs md:text-sm text-ink-300 leading-relaxed mb-3 md:mb-4 line-clamp-3">{project.desk}</p>

        <button
          onClick={() => onOpenModal(project)}
          className="inline-flex items-center gap-1.5 text-[11px] md:text-xs font-mono uppercase tracking-wider text-accent-400 hover:text-accent-300 transition-colors mb-3 md:mb-5 w-fit"
          aria-label={`${t.projects.readMore} ${project.nama}`}
        >
          {t.projects.readMore}
          <FiArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>

        <div className="mt-auto flex flex-wrap gap-1 pt-3 md:pt-4 border-t border-ink-800/80">
          {project.stack.map((s) => (
            <span
              key={s}
              className="px-2 py-0.5 md:px-2.5 md:py-1 font-mono text-[9px] md:text-[10px] uppercase tracking-wider text-ink-400 border border-ink-800 rounded bg-ink-950/40"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

// ─── App ───
const App = () => {
  const { language, t } = useLanguage();
  const typed = useTypewriter(language === "id" ? ["Web Developer", "Penggemar Agentic AI & Otomasi"] : TYPED_WORDS);
  const { show: showScrollTop, scrollToTop } = useScrollToTop();
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [projectTab, setProjectTab] = useState("all");

  const sortByDemo = (projectList) =>
    [...projectList].sort((a, b) => {
      const aHasDemo = Boolean(a.links?.demo);
      const bHasDemo = Boolean(b.links?.demo);
      return Number(bHasDemo) - Number(aHasDemo);
    });

  const aiProjects = sortByDemo(projects.filter((p) => p.group === "ai"));
  const webProjects = sortByDemo(projects.filter((p) => p.group === "web"));
  const allProjects = sortByDemo(projects);
  const visibleProjects =
    projectTab === "ai" ? aiProjects : projectTab === "web" ? webProjects : allProjects;
  const projectTabs = [
    { id: "all", label: t.projects.all, count: projects.length },
    { id: "ai", label: t.projects.ai, count: aiProjects.length },
    { id: "web", label: t.projects.web, count: webProjects.length },
  ];

  // Scroll reveal each ref is attached to its own element
  const aboutSection = useScrollReveal({ animation: "fade-up", delay: 0 });
  const aboutTitle = useScrollReveal({ animation: "fade-up", delay: 80 });
  const aboutText1 = useScrollReveal({ animation: "fade-up", delay: 120 });
  const aboutText2 = useScrollReveal({ animation: "fade-up", delay: 160 });
  const aboutText3 = useScrollReveal({ animation: "fade-up", delay: 200 });
  const aboutExp = useScrollReveal({ animation: "fade-up", delay: 240 });

  const proyekHeader = useScrollReveal({ animation: "fade-up", delay: 0 });

  const skillsTitle = useScrollReveal({ animation: "fade-up", delay: 0 });
  const skillsDesc = useScrollReveal({ animation: "fade-up", delay: 60 });
  const skillsGrid = useScrollReveal({ animation: "fade-up", delay: 100 });
  const skillsAI = useScrollReveal({ animation: "fade-up", delay: 160 });
  const skillsFocus = useScrollReveal({ animation: "fade-up", delay: 220 });

  const kontakHeader = useScrollReveal({ animation: "fade-up", delay: 0 });
  const kontakForm = useScrollReveal({ animation: "fade-up", delay: 120 });

  return (
    <>
      {/* Ambient Background Gradient Orbs */}
      <div className="ambient-bg" aria-hidden="true" />

      {/* Hero */}
      <section
        id="beranda"
        className="relative pt-32 pb-20 md:pt-40 md:pb-32 grid-bg overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-transparent to-ink-950 pointer-events-none" />
        <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 border border-ink-800 rounded-full bg-ink-900/50 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot" />
                <span className="font-mono text-[11px] text-ink-300 uppercase tracking-widest">
                  {t.hero.availability}
                </span>
              </div>

              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gradient leading-[1.05] mb-6">
                Hamdan Akbar
                <br />
                <span className="text-gradient-accent">Marzuqi, S.Kom.</span>
              </h1>

              <div className="font-mono text-base sm:text-lg text-ink-300 mb-6 h-7">
                <span className="text-ink-500">$</span>{" "}
                <span className="text-accent-400">{typed}</span>
                <span className="cursor-blink"></span>
              </div>

              <p className="text-base text-ink-400 leading-relaxed max-w-xl mb-10">
                {t.hero.intro} <span className="text-ink-200">Universitas 'Aisyiyah Yogyakarta</span>{t.hero.introAfter}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#proyek"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 bg-ink-50 text-ink-950 text-sm font-medium rounded-md hover:bg-accent-400 hover:text-ink-950 transition-all duration-300"
                >
                  <span>{t.hero.viewProjects}</span>
                  <FiArrowDown className="transition-transform group-hover:translate-y-0.5" size={14} />
                </a>
                <a
                  href="#kontak"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-ink-800 text-ink-200 text-sm font-medium rounded-md hover:border-accent-500/60 hover:text-accent-400 transition-all duration-300"
                >
                  <span>{t.hero.getInTouch}</span>
                  <FiArrowUpRight size={14} />
                </a>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
                {[
                  { num: "8+", label: t.hero.projectsFinished },
                  { num: "3+", label: t.hero.providers },
                  { num: "90.9%", label: t.hero.thesis }
                ].map((s) => (
                  <div key={s.label} className="border-l border-ink-800 pl-3">
                    <div className="font-display text-2xl font-bold text-ink-50">{s.num}</div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-ink-500 mt-0.5">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative lg:justify-self-end">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto animate-float">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-600/20 to-transparent blur-2xl" />
                <div className="relative w-full h-full rounded-2xl overflow-hidden hero-image-border">
                  <img
                    src={HeroImage}
                    alt="Hamdan Akbar Marzuqi"
                    loading="eager"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 px-3 py-1.5 bg-ink-950 border border-accent-500/40 rounded-md font-mono text-[10px] uppercase tracking-widest text-accent-400 glow-accent">
                  <span className="text-emerald-400">●</span> 24/7
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* About */}
      <section id="tentang" className="py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <div ref={aboutSection.ref} className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className={`font-mono text-xs uppercase tracking-widest text-accent-400 mb-4 ${aboutSection.cls}`}
                style={aboutSection.style}>
                <span className="text-ink-500">02</span> — {t.about.label}
              </p>
              <h2
                ref={aboutTitle.ref}
                className={`font-display text-4xl md:text-5xl font-bold text-ink-50 leading-tight ${aboutTitle.cls}`}
                style={aboutTitle.style}
              >
                {t.about.title}
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-5 text-ink-300 leading-relaxed">
              <p
                ref={aboutText1.ref}
                className={aboutText1.cls}
                style={aboutText1.style}
              >
                {t.about.p1}<span className="text-ink-50">{t.about.p1Strong}</span>
              </p>
              <p
                ref={aboutText2.ref}
                className={aboutText2.cls}
                style={aboutText2.style}
              >
                {t.about.p2}
              </p>
              <p
                ref={aboutText3.ref}
                className={aboutText3.cls}
                style={aboutText3.style}
              >
                {t.about.p3Before}<span className="text-accent-400">Agentic AI Integration</span>{t.about.p3After}
              </p>

              <div
                ref={aboutExp.ref}
                className={`pt-6 grid sm:grid-cols-2 gap-4 ${aboutExp.cls}`}
                style={aboutExp.style}
              >
                {experience.map((e, i) => (
                  <div key={i} className="timeline-item py-1">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-accent-500 mb-1">
                      {e.period}
                    </p>
                    <p className="font-medium text-ink-100">{e.role}</p>
                    <p className="text-sm text-ink-500 mb-1">{e.company}</p>
                    <p className="text-xs text-ink-400 leading-relaxed">{e.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Projects */}
      <section id="proyek" className="py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <div
            ref={proyekHeader.ref}
            className={`flex items-end justify-between flex-wrap gap-6 mb-16 ${proyekHeader.cls}`}
            style={proyekHeader.style}
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-accent-400 mb-4">
                <span className="text-ink-500">03</span> — {t.projects.label}
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-ink-50 leading-tight">
                {t.projects.titleBefore}
                <br />
                <span className="text-gradient-accent">{t.projects.titleAfter}</span>
              </h2>
            </div>
            <a
              href="https://github.com/HamdanMarzuqi"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 px-4 py-2 border border-ink-800 rounded-md text-sm text-ink-300 hover:border-accent-500/60 hover:text-accent-400 transition-all font-mono"
            >
              <FiGithub size={14} />
              <span>{t.projects.allRepos}</span>
              <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={12} />
            </a>
          </div>

          {/* Category filter tabs */}
          <div className="flex flex-col items-stretch gap-1.5 mb-8 md:mb-12 md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-2">
            {projectTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setProjectTab(tab.id)}
                className={`group inline-flex w-full md:w-auto items-center justify-center gap-2 px-3.5 md:px-4 py-2 rounded-full border font-mono text-[10px] md:text-xs uppercase tracking-widest transition-all duration-300 ${projectTab === tab.id
                  ? "border-accent-500/70 bg-accent-500/10 text-accent-400 shadow-[0_0_20px_-6px_rgba(168,85,247,0.5)]"
                  : "border-ink-800 text-ink-400 hover:border-accent-500/40 hover:text-ink-200"
                  }`}
              >
                {tab.id === "ai" && <FiCpu size={13} />}
                {tab.id === "web" && <FiCode size={13} />}
                {tab.id === "all" && <FiBox size={13} />}
                <span>{tab.label}</span>
                <span
                  className={`px-1.5 py-0.5 rounded text-[10px] leading-none ${projectTab === tab.id
                    ? "bg-accent-500/20 text-accent-300"
                    : "bg-ink-800/80 text-ink-500 group-hover:text-ink-300"
                    }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          <div key={projectTab} className="flex md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none -mx-4 px-4 md:mx-0 md:px-0">
            {visibleProjects.map((p, i) => (
              <ProjectCard
                key={p.id}
                project={p}
                t={t}
                index={i}
                onOpenModal={(proj) => setActiveModalProject(proj)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Skills */}
      <section id="skills" className="py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p
                ref={skillsTitle.ref}
                className={`font-mono text-xs uppercase tracking-widest text-accent-400 mb-4 ${skillsTitle.cls}`}
                style={skillsTitle.style}
              >
                <span className="text-ink-500">04</span> — {t.skills.label}
              </p>
              <h2
                className={`font-display text-4xl md:text-5xl font-bold text-ink-50 leading-tight ${skillsTitle.cls}`}
                style={skillsTitle.style}
              >
                {t.skills.title}
              </h2>
              <p
                ref={skillsDesc.ref}
                className={`mt-6 text-ink-400 leading-relaxed ${skillsDesc.cls}`}
                style={skillsDesc.style}
              >
                {t.skills.desc}
              </p>
            </div>

            <div className="lg:col-span-8 space-y-10">
              <div ref={skillsGrid.ref}>
                <p className="font-mono text-[10px] uppercase tracking-widest text-ink-500 mb-4 flex items-center gap-2">
                  <FiServer size={12} /> {t.skills.tech}
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3">
                  {stack.map((s, i) => {
                    const Icon = stackIconMap[s.icon];
                    return (
                      <div
                        key={s.name}
                        className={`group card p-2.5 sm:p-4 rounded-md flex flex-col items-start gap-1.5 sm:gap-2 transition-all duration-700 ease-out ${skillsGrid.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} hover:-translate-y-0.5`}
                        style={skillsGrid.visible ? { transitionDelay: `${100 + i * 60}ms` } : {}}
                      >
                        <div className="text-ink-300 group-hover:text-accent-400 transition-colors">
                          {Icon && <Icon size={18} className="sm:w-5 sm:h-5" />}
                        </div>
                        <div>
                          <div className="text-[11px] sm:text-sm font-medium leading-tight text-ink-100">{s.name}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div ref={skillsAI.ref}>
                <p className="font-mono text-[10px] uppercase tracking-widest text-ink-500 mb-4 flex items-center gap-2">
                  <FiCpu size={12} /> {t.skills.capabilities}
                </p>
                <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                  {aiSkills.map((skill, i) => (
                    <div
                      key={skill}
                      className={`flex items-center gap-2 px-2.5 py-2 sm:gap-3 sm:px-4 sm:py-3 border border-ink-800 rounded-md bg-ink-900/30 transition-all duration-700 ease-out hover:border-accent-500/40 ${skillsAI.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                      style={skillsAI.visible ? { transitionDelay: `${i * 60}ms` } : {}}
                    >
                      <FiZap className="text-accent-500 shrink-0" size={12} />
                      <span className="text-[11px] sm:text-sm leading-tight text-ink-200">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                ref={skillsFocus.ref}
                className={`card p-4 sm:p-6 rounded-lg ${skillsFocus.cls}`}
                style={skillsFocus.style}
              >
                <div className="flex items-start gap-4">
                  <FiBox className="text-accent-500 mt-1 shrink-0" size={20} />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-accent-400 mb-2">
                      {t.skills.focus}
                    </p>
                    <p className="text-xs sm:text-base text-ink-200 leading-relaxed">
                      {t.skills.focusText}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Contact */}
      <section id="kontak" className="py-24 md:py-32">
        <div className="container mx-auto max-w-3xl px-6 lg:px-8">
          <div
            ref={kontakHeader.ref}
            className={`text-center mb-12 ${kontakHeader.cls}`}
            style={kontakHeader.style}
          >
            <p className="font-mono text-xs uppercase tracking-widest text-accent-400 mb-4">
              <span className="text-ink-500">05</span> — {t.contact.label}
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink-50 leading-tight">
              {t.contact.title}
            </h2>
            <p className="mt-4 text-ink-400 max-w-lg mx-auto">
              {t.contact.desc}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <a
              href="https://wa.me/6281905554785?text=Halo%20Hamdan%2C%20saya%20tertarik%20dengan%20portfolio%20Tuan."
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 border border-ink-800 bg-ink-900/60 text-ink-100 text-sm font-medium rounded-md hover:border-emerald-500/40 hover:text-emerald-300 transition-all duration-300"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.057 21.785h-.004c-1.832 0-3.63-.493-5.205-1.428l-.373-.221-3.867 1.013 1.033-3.77-.243-.387a9.864 9.864 0 01-1.51-5.26c.002-5.45 4.436-9.884 9.889-9.884 2.641 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm0-19.78c-5.456 0-9.886 4.43-9.886 9.886 0 1.737.464 3.442 1.346 4.957l-1.43 5.235 5.358-1.405a9.78 9.78 0 004.61 1.165c5.456 0 9.886-4.43 9.886-9.886 0-2.641-1.027-5.122-2.892-6.989a9.83 9.83 0 00-6.992-2.963z" />
              </svg>
              <span>{t.contact.whatsapp}</span>
              <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={14} />
            </a>
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink-600">
              {t.contact.or}
            </span>
          </div>

          <form
            ref={kontakForm.ref}
            action="https://formsubmit.co/hamdanmarzuqi001@gmail.com"
            method="POST"
            className={`card p-8 sm:p-10 rounded-lg space-y-6 ${kontakForm.cls}`}
            style={kontakForm.style}
            autoComplete="off"
          >
            <input type="hidden" name="_subject" value="New portfolio contact" />
            <input type="text" name="_honey" style={{ display: "none" }} />

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-ink-500 mb-2">{t.contact.name}</label>
                <input
                  type="text" name="nama" required placeholder={t.contact.namePlaceholder}
                  className="w-full bg-transparent border-b border-ink-800 py-2 text-ink-100 placeholder-ink-600 focus:border-accent-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-ink-500 mb-2">{t.contact.email}</label>
                <input
                  type="email" name="email" required placeholder="you@domain.com"
                  className="w-full bg-transparent border-b border-ink-800 py-2 text-ink-100 placeholder-ink-600 focus:border-accent-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block font-mono text-[10px] uppercase tracking-widest text-ink-500 mb-2">{t.contact.message}</label>
              <textarea
                name="pesan" rows={4} required placeholder={t.contact.messagePlaceholder}
                className="w-full bg-transparent border-b border-ink-800 py-2 text-ink-100 placeholder-ink-600 focus:border-accent-500 focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
              <p className="font-mono text-[10px] uppercase tracking-widest text-ink-600">
                {t.contact.reply}
              </p>
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-ink-50 text-ink-950 text-sm font-medium rounded-md hover:bg-accent-400 transition-all duration-300"
              >
                <span>{t.contact.send}</span>
                <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={14} />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`scroll-top-btn ${showScrollTop ? "visible" : ""}`}
        aria-label="Scroll to top"
      >
        <FiArrowUp size={18} />
      </button>

      {/* Lightbox Screenshot Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        t={t}
      />
    </>
  );
};

export default App;
