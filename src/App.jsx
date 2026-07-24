import { useState, useEffect, useRef } from "react";
import { useScrollReveal } from "./hooks/useScrollReveal.js";

import { FiArrowDown, FiArrowUpRight, FiArrowUp, FiGithub, FiZap, FiCpu, FiServer, FiBox, FiCheckCircle, FiMaximize2, FiImage } from "react-icons/fi";
import { SiReact, SiNodedotjs, SiTailwindcss, SiPython, SiJavascript, SiTypescript, SiSqlite, SiGithub } from "react-icons/si";
import { projects, stack, aiSkills, experience } from "./data";
import ProjectModal from "./components/ProjectModal.jsx";
import HeroImage from "/assets/Hamdan_Red_Background.png";

const TYPED_WORDS = ["Web Developer", "Agentic AI Developer"];

const stackIconMap = {
  SiJavascript, SiTypescript, SiNodedotjs, SiReact,
  SiPython, SiTailwindcss, SiSqlite, SiGithub
};

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
const ProjectCard = ({ project, featured = false, index, onOpenModal }) => {
  const reveal = useScrollReveal({ animation: "fade-up", delay: Math.min(index * 80, 300) });
  const imageCount = project.galeri && project.galeri.length > 0 ? project.galeri.length : 1;

  return (
    <article
      ref={reveal.ref}
      className={`group card rounded-lg overflow-hidden flex flex-col ${reveal.cls} hover:-translate-y-1`}
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
        <div className="absolute top-3 left-3 px-2 py-1 bg-ink-950/80 backdrop-blur-sm border border-ink-800 rounded font-mono text-[10px] uppercase tracking-widest text-accent-400">
          {project.category}
        </div>

        {/* Gallery Image Count Badge */}
        <div className="absolute top-3 right-3 px-2 py-1 bg-ink-950/80 backdrop-blur-sm border border-ink-800 rounded font-mono text-[10px] text-ink-300 flex items-center gap-1 opacity-90 group-hover:opacity-100 group-hover:border-accent-500/50 transition-all">
          <FiImage size={12} className="text-accent-400" />
          <span>{imageCount} Foto</span>
        </div>

        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-ink-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-ink-100 font-mono text-xs">
          <span className="px-3 py-1.5 bg-ink-950/90 border border-ink-700 rounded-md backdrop-blur-sm flex items-center gap-1.5 shadow-lg group-hover:scale-105 transition-transform">
            <FiMaximize2 size={13} className="text-accent-400" />
            <span>View the picture</span>
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3
            className="text-xl font-display font-semibold text-ink-50 group-hover:text-accent-400 transition-colors cursor-pointer"
            onClick={() => onOpenModal(project)}
          >
            {project.nama}
          </h3>
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

        <p className="font-mono text-[10px] uppercase tracking-widest text-ink-500 mb-3">
          {project.role}
        </p>

        <p className="text-sm text-ink-300 leading-relaxed mb-4">{project.desk}</p>

        <ul className="space-y-1.5 mb-5">
          {project.impact.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-ink-400">
              <FiCheckCircle className="text-accent-500 shrink-0 mt-0.5" size={12} />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-4 border-t border-ink-800/80">
          {project.stack.map((s) => (
            <span
              key={s}
              className="px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ink-300 border border-ink-800 rounded bg-ink-900/50"
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
  const typed = useTypewriter(TYPED_WORDS);
  const { show: showScrollTop, scrollToTop } = useScrollToTop();
  const [activeModalProject, setActiveModalProject] = useState(null);

  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  // Scroll reveal — each ref is attached to its own element
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
                  Open to opportunities
                </span>
              </div>

              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gradient leading-[1.05] mb-6">
                Hamdan Akbar
                <br />
                <span className="text-gradient-accent">Marzuqi.</span>
              </h1>

              <div className="font-mono text-base sm:text-lg text-ink-300 mb-6 h-7">
                <span className="text-ink-500">$</span>{" "}
                <span className="text-accent-400">{typed}</span>
                <span className="cursor-blink"></span>
              </div>

              <p className="text-base text-ink-400 leading-relaxed max-w-xl mb-10">
                Fresh graduate from <span className="text-ink-200">Universitas 'Aisyiyah Yogyakarta</span>.
                I build production full-stack web applications and integrate agentic AI systems that ship
                to real users — POS, content agents, chatbots.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#proyek"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 bg-ink-50 text-ink-950 text-sm font-medium rounded-md hover:bg-accent-400 hover:text-ink-950 transition-all duration-300"
                >
                  <span>View projects</span>
                  <FiArrowDown className="transition-transform group-hover:translate-y-0.5" size={14} />
                </a>
                <a
                  href="#kontak"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-ink-800 text-ink-200 text-sm font-medium rounded-md hover:border-accent-500/60 hover:text-accent-400 transition-all duration-300"
                >
                  <span>Get in touch</span>
                  <FiArrowUpRight size={14} />
                </a>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
                {[
                  { num: "4+", label: "Production projects" },
                  { num: "3+", label: "LLM providers integrated" },
                  { num: "90.9%", label: "Thesis validation" }
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
                <span className="text-ink-500">02</span> — About
              </p>
              <h2
                ref={aboutTitle.ref}
                className={`font-display text-4xl md:text-5xl font-bold text-ink-50 leading-tight ${aboutTitle.cls}`}
                style={aboutTitle.style}
              >
                Builder mindset, operator experience.
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-5 text-ink-300 leading-relaxed">
              <p
                ref={aboutText1.ref}
                className={aboutText1.cls}
                style={aboutText1.style}
              >
                Having operated an F&B business for over 4 years while building software, I’ve learned that business operations and software engineering share the same core principle: <span className="text-ink-50">ship it, measure it, iterate it.</span>
              </p>
              <p
                ref={aboutText2.ref}
                className={aboutText2.cls}
                style={aboutText2.style}
              >
                A graduate of Information Technology (GPA 3.56/4.00) with strong analytical and systematic thinking skills. Experienced in building full-stack web applications and integrating AI/LLM into production systems using Node.js, React, Python, REST APIs, and many more. A fast learner who is adaptable with proven ability to manage projects independently from concept to deployment. Highly motivated to continue developing, confident that my combination of technical skills and hands-on project experience makes me ready to make a real contribution as a Full-Stack Developer, Web Developer, or AI Engineer in a professional work environment.
              </p>
              <p
                ref={aboutText3.ref}
                className={aboutText3.cls}
                style={aboutText3.style}
              >
                I think in systems. Every feature I build is a function, every function is a tool, every
                tool connects to a real action. That's what <span className="text-accent-400">Agentic AI Integration</span> means
                in practice.
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
                <span className="text-ink-500">03</span> — Selected work
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-ink-50 leading-tight">
                Practical solutions,
                <br />
                <span className="text-gradient-accent">built to solve real problems.</span>
              </h2>
            </div>
            <a
              href="https://github.com/HamdanMarzuqi"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 px-4 py-2 border border-ink-800 rounded-md text-sm text-ink-300 hover:border-accent-500/60 hover:text-accent-400 transition-all font-mono"
            >
              <FiGithub size={14} />
              <span>all repos</span>
              <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={12} />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {featured.map((p, i) => (
              <ProjectCard
                key={p.id}
                project={p}
                featured
                index={i}
                onOpenModal={(proj) => setActiveModalProject(proj)}
              />
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {other.map((p, i) => (
              <ProjectCard
                key={p.id}
                project={p}
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
                <span className="text-ink-500">04</span> — Stack
              </p>
              <h2
                className={`font-display text-4xl md:text-5xl font-bold text-ink-50 leading-tight ${skillsTitle.cls}`}
                style={skillsTitle.style}
              >
                Tools, not toys.
              </h2>
              <p
                ref={skillsDesc.ref}
                className={`mt-6 text-ink-400 leading-relaxed ${skillsDesc.cls}`}
                style={skillsDesc.style}
              >
                Technologies and frameworks I use to build functional AI integration system & web applications to solve real-world problems.
              </p>
            </div>

            <div className="lg:col-span-8 space-y-10">
              <div ref={skillsGrid.ref}>
                <p className="font-mono text-[10px] uppercase tracking-widest text-ink-500 mb-4 flex items-center gap-2">
                  <FiServer size={12} /> Tech stack
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {stack.map((s, i) => {
                    const Icon = stackIconMap[s.icon];
                    return (
                      <div
                        key={s.name}
                        className={`group card p-4 rounded-md flex flex-col items-start gap-2 transition-all duration-700 ease-out ${skillsGrid.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                          } hover:-translate-y-0.5`}
                        style={skillsGrid.visible ? { transitionDelay: `${100 + i * 60}ms` } : {}}
                      >
                        <div className="text-ink-300 group-hover:text-accent-400 transition-colors">
                          {Icon && <Icon size={20} />}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-ink-100">{s.name}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div ref={skillsAI.ref}>
                <p className="font-mono text-[10px] uppercase tracking-widest text-ink-500 mb-4 flex items-center gap-2">
                  <FiCpu size={12} /> Technical Capabilities & AI Integration
                </p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {aiSkills.map((skill, i) => (
                    <div
                      key={skill}
                      className={`flex items-center gap-3 px-4 py-3 border border-ink-800 rounded-md bg-ink-900/30 transition-all duration-700 ease-out hover:border-accent-500/40 ${skillsAI.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                      style={skillsAI.visible ? { transitionDelay: `${i * 60}ms` } : {}}
                    >
                      <FiZap className="text-accent-500 shrink-0" size={14} />
                      <span className="text-sm text-ink-200">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                ref={skillsFocus.ref}
                className={`card p-6 rounded-lg ${skillsFocus.cls}`}
                style={skillsFocus.style}
              >
                <div className="flex items-start gap-4">
                  <FiBox className="text-accent-500 mt-1 shrink-0" size={20} />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-accent-400 mb-2">
                      Current focus
                    </p>
                    <p className="text-ink-200 leading-relaxed">
                      Building autonomous AI agents with Human-in-the-Loop approval, web development, frontend development, Web-Search RAG, and multi-tool function calling. Currently exploring <span className="text-ink-50">LangGraph</span> multi-agent orchestration and expanding WhatsApp & POS automation into scalable AI workflows.
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
              <span className="text-ink-500">05</span> — Get in touch
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink-50 leading-tight">
              Have a system to build?
            </h2>
            <p className="mt-4 text-ink-400 max-w-lg mx-auto">
              Open to full-time roles in AI engineering, full-stack development, or contract work on agentic systems.
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
              <span>Chat on WhatsApp</span>
              <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={14} />
            </a>
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink-600">
              or use the form below
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
                <label className="block font-mono text-[10px] uppercase tracking-widest text-ink-500 mb-2">Name</label>
                <input
                  type="text" name="nama" required placeholder="Your name"
                  className="w-full bg-transparent border-b border-ink-800 py-2 text-ink-100 placeholder-ink-600 focus:border-accent-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-ink-500 mb-2">Email</label>
                <input
                  type="email" name="email" required placeholder="you@domain.com"
                  className="w-full bg-transparent border-b border-ink-800 py-2 text-ink-100 placeholder-ink-600 focus:border-accent-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block font-mono text-[10px] uppercase tracking-widest text-ink-500 mb-2">Message</label>
              <textarea
                name="pesan" rows={4} required placeholder="Send me a message about anything..."
                className="w-full bg-transparent border-b border-ink-800 py-2 text-ink-100 placeholder-ink-600 focus:border-accent-500 focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
              <p className="font-mono text-[10px] uppercase tracking-widest text-ink-600">
                Replies within 24h · Yogyakarta, GMT+7
              </p>
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-ink-50 text-ink-950 text-sm font-medium rounded-md hover:bg-accent-400 transition-all duration-300"
              >
                <span>Send message</span>
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
      />
    </>
  );
};

export default App;
