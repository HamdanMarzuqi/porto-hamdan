import { useState, useEffect } from "react";
import { FiX, FiChevronLeft, FiChevronRight, FiGithub, FiCheckCircle } from "react-icons/fi";

const ProjectModal = ({ project, onClose, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Fallback ke project.gambar jika galeri kosong
  const images = project?.galeri && project.galeri.length > 0 ? project.galeri : [project?.gambar];

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [project, initialIndex]);

  // Lock body scroll saat modal terbuka
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  // Keyboard navigation & escape listener
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      } else if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, images.length, onClose]);

  if (!project) return null;

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-ink-950/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-5xl bg-ink-900 border border-ink-800 rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Modal */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-ink-800 bg-ink-950/60">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 bg-ink-900 border border-ink-800 rounded font-mono text-[10px] uppercase tracking-widest text-accent-400">
              {project.category}
            </span>
            <h2 id="modal-title" className="font-display font-bold text-lg text-ink-50 truncate max-w-xs sm:max-w-md">
              {project.nama}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-ink-400 hover:text-accent-400 transition-colors"
                aria-label="View on GitHub"
              >
                <FiGithub size={18} />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-2 text-ink-400 hover:text-ink-50 hover:bg-ink-800 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <FiX size={20} />
            </button>
          </div>
        </div>

        {/* Modal Main Body (Scrollable) */}
        <div className="overflow-y-auto flex-1 p-4 sm:p-6 space-y-6">
          {/* Main Image Lightbox Viewer */}
          <div className="relative aspect-[16/9] w-full bg-ink-950 rounded-lg border border-ink-800 overflow-hidden flex items-center justify-center group">
            <img
              src={images[currentIndex]}
              alt={`${project.nama} screenshot ${currentIndex + 1}`}
              className="w-full h-full object-contain select-none transition-all duration-300"
            />

            {/* Navigation Buttons (Only if multiple images) */}
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-ink-950/80 border border-ink-700 text-ink-100 hover:text-accent-400 hover:border-accent-500/50 transition-all opacity-80 hover:opacity-100 backdrop-blur-sm"
                  aria-label="Previous screenshot"
                >
                  <FiChevronLeft size={22} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-ink-950/80 border border-ink-700 text-ink-100 hover:text-accent-400 hover:border-accent-500/50 transition-all opacity-80 hover:opacity-100 backdrop-blur-sm"
                  aria-label="Next screenshot"
                >
                  <FiChevronRight size={22} />
                </button>
              </>
            )}

            {/* Counter Badge */}
            <div className="absolute bottom-3 right-3 px-3 py-1 bg-ink-950/80 backdrop-blur-sm border border-ink-800 rounded font-mono text-xs text-ink-300">
              {currentIndex + 1} / {images.length}
            </div>
          </div>

          {/* Thumbnails Row (if multiple images) */}
          {images.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-thin">
              {images.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative shrink-0 w-20 h-14 rounded-md overflow-hidden border-2 transition-all ${
                    idx === currentIndex
                      ? "border-accent-400 scale-105 shadow-md shadow-accent-500/20 opacity-100"
                      : "border-ink-800 opacity-50 hover:opacity-100 hover:border-ink-600"
                  }`}
                >
                  <img
                    src={imgUrl}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Project Info & Impact Details */}
          <div className="pt-2 border-t border-ink-800/80 space-y-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-accent-500 mb-1">
                {project.role}
              </p>
              <p className="text-sm text-ink-300 leading-relaxed">{project.desk}</p>
            </div>

            {project.impact && project.impact.length > 0 && (
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-ink-400 mb-2">
                  Highlights & Implementation:
                </h4>
                <ul className="grid sm:grid-cols-2 gap-2.5">
                  {project.impact.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-ink-300 bg-ink-950/40 p-2.5 rounded border border-ink-800/50">
                      <FiCheckCircle className="text-accent-400 shrink-0 mt-0.5" size={13} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Stack Tags */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.stack?.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-ink-300 border border-ink-800 rounded bg-ink-950/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
