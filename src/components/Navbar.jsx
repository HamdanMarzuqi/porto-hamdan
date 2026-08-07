import { useState, useEffect, useCallback } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { useLanguage } from "../context/useLanguage.js";

const sections = [
  { id: "beranda", key: "dashboard", num: "01" },
  { id: "tentang", key: "about", num: "02" },
  { id: "proyek", key: "project", num: "03" },
  { id: "skills", key: "skills", num: "04" },
  { id: "kontak", key: "contact", num: "05" }
];

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [active, setActive] = useState("beranda");

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 32);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elMap = {};
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) elMap[s.id] = el;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    Object.values(elMap).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Close mobile menu with exit animation
  const closeMenu = useCallback(() => {
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 300);
  }, []);

  const toggleMenu = useCallback(() => {
    if (open) {
      closeMenu();
    } else {
      setOpen(true);
    }
  }, [open, closeMenu]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "backdrop-blur-xl bg-ink-950/70 border-b border-ink-800/80"
          : "bg-transparent"
          }`}
      >
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a
              href="#beranda"
              className="logo-glow font-mono text-sm font-bold tracking-tight text-ink-50 hover:text-accent-400 transition-colors group flex items-center gap-2"
            >
              <span className="logo-symbol text-accent-500 transition-all">&gt;</span>
              <span>hamdan</span>
              <span className="logo-symbol text-accent-500 transition-all">.</span>
              <span className="text-ink-400 group-hover:text-accent-400 transition-colors">dev</span>
            </a>

            <nav className="hidden md:flex items-center gap-1">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={`group relative px-4 py-2 font-mono text-xs font-medium tracking-wider uppercase transition-colors ${active === s.id
                    ? "text-accent-400"
                    : "text-ink-400 hover:text-ink-50"
                    }`}
                >
                  <span className="text-ink-600 mr-1.5">{s.num}</span>
                  {t.nav[s.key]}
                  <span
                    className={`absolute left-4 right-4 -bottom-0.5 h-px transition-all duration-300 ${active === s.id
                      ? "bg-accent-500 opacity-100"
                      : "bg-ink-50 opacity-0 group-hover:opacity-30"
                      }`}
                  />
                </a>
              ))}
            </nav>

            <div className="hidden md:inline-flex items-center gap-1 mr-2 p-0.5 border border-ink-800 rounded-md font-mono text-[10px] uppercase tracking-wider" aria-label="Select language">
              {["en", "id"].map((code) => (
                <button key={code} type="button" onClick={() => setLanguage(code)} className={`px-1.5 py-1 rounded transition-colors ${language === code ? "bg-accent-500/15 text-accent-400" : "text-ink-500 hover:text-ink-200"}`} aria-pressed={language === code}>
                  {code.toUpperCase()}
                </button>
              ))}
            </div>
            <a
              href="https://github.com/HamdanMarzuqi"
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-ink-200 border border-ink-800 rounded-md hover:border-accent-500/50 hover:text-accent-400 transition-all group"
            >
              <span>github</span>
              <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-ink-100 hover:text-accent-400 transition-colors"
              aria-label="Toggle menu"
            >
              {open && !closing ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          className={`fixed inset-0 z-40 md:hidden bg-ink-950/95 backdrop-blur-xl pt-20 px-6 ${closing ? "mobile-menu-exit" : "mobile-menu-enter"
            }`}
        >
          <nav className="flex flex-col gap-2">
            {sections.map((s, i) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={closeMenu}
                className="group flex items-baseline gap-4 py-4 border-b border-ink-800 text-ink-100"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <span className="font-mono text-xs text-ink-500">{s.num}</span>
                <span className="text-2xl font-display font-semibold group-hover:text-accent-400 transition-colors">
                  {t.nav[s.key]}
                </span>
              </a>
            ))}
          </nav>
          <div className="mt-8 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink-500">
            <span>{t.nav.language}</span>
            {["en", "id"].map((code) => (
              <button key={code} type="button" onClick={() => setLanguage(code)} className={`px-2.5 py-1.5 rounded border transition-colors ${language === code ? "border-accent-500/60 bg-accent-500/10 text-accent-400" : "border-ink-800 text-ink-400"}`} aria-pressed={language === code}>
                {code.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
