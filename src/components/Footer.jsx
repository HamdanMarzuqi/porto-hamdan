import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="mt-16">
      {/* Gradient divider instead of plain border */}
      <div className="section-divider" />
      <div className="container mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <a href="#beranda" className="logo-glow font-mono text-sm font-bold text-ink-50 inline-flex items-center gap-2">
              <span className="logo-symbol text-accent-500">&gt;</span>
              <span>hamdan</span>
              <span className="logo-symbol text-accent-500">.</span>
              <span className="text-ink-400">dev</span>
            </a>
            <p className="mt-4 text-sm text-ink-400 leading-relaxed max-w-xs">
              Building production-grade web apps and agentic AI systems. Open to opportunities.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-ink-500 mb-4">Navigate</h4>
            <ul className="space-y-2 text-sm">
              {[
                ["#beranda", "Dashboard"],
                ["#tentang", "About"],
                ["#proyek", "Project"],
                ["#skills", "Skills"],
                ["#kontak", "Contact"]
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="text-ink-300 hover:text-accent-400 transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-ink-500 mb-4">Connect</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://github.com/HamdanMarzuqi"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-ink-300 hover:text-accent-400 transition-colors group"
              >
                <FiGithub size={16} />
                <span>HamdanMarzuqi</span>
                <FiArrowUpRight className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" size={12} />
              </a>
              <a
                href="https://linkedin.com/in/hamdanmarzuqi"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-ink-300 hover:text-accent-400 transition-colors group"
              >
                <FiLinkedin size={16} />
                <span>Hamdan Akbar Marzuqi</span>
                <FiArrowUpRight className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" size={12} />
              </a>
              <a
                href="mailto:hamdanmarzuqi001@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-ink-300 hover:text-accent-400 transition-colors"
              >
                <FiMail size={16} />
                <span>hamdanmarzuqi001@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ink-800/80 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-xs font-mono text-ink-500">
            © 2026 — Built with React 19, Vite, Tailwind v4
          </p>
          <p className="text-xs font-mono text-ink-500 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot" />
            Open to opportunities
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
