import { useEffect, useRef, useState, useCallback } from "react";

/**
 * Reveal element when it enters the viewport.
 * Pure IntersectionObserver — no scroll listeners, no layout thrash.
 *
 * USAGE:
 *   const reveal = useScrollReveal({ delay: 100 });
 *   <div ref={reveal.ref} className={reveal.cls}>...</div>
 *
 * Returns: { ref, visible, cls }
 * - ref: attach to the element you want observed
 * - visible: boolean for conditional logic
 * - cls: ready-made className string (transition + show/hide)
 */
export const useScrollReveal = ({ animation = "fade-up", delay = 0, threshold = 0.15 } = {}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const variants = {
    "fade-up":    { init: "opacity-0 translate-y-8",  show: "opacity-100 translate-y-0" },
    "fade-left":  { init: "opacity-0 -translate-x-8", show: "opacity-100 translate-x-0" },
    "fade-right": { init: "opacity-0 translate-x-8",  show: "opacity-100 translate-x-0" },
    "scale":      { init: "opacity-0 scale-95",       show: "opacity-100 scale-100" },
  };

  const v = variants[animation] || variants["fade-up"];

  // Compute the class string — consumers just do className={reveal.cls}
  const cls = [
    "transition-all duration-700 ease-out",
    visible ? v.show : v.init,
  ].join(" ");

  // Style with delay — only apply when visible to avoid stale transforms
  const style = visible ? { transitionDelay: `${delay}ms` } : {};

  return { ref, visible, cls, style };
};

/**
 * Staggered reveal for children of a container.
 * Each child reveals with incrementing delay.
 */
export const useStaggerReveal = (count, { animation = "fade-up", staggerMs = 80 } = {}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const variants = {
    "fade-up":    { init: "opacity-0 translate-y-8",  show: "opacity-100 translate-y-0" },
    "fade-left":  { init: "opacity-0 -translate-x-6", show: "opacity-100 translate-x-0" },
    "fade-right": { init: "opacity-0 translate-x-6",  show: "opacity-100 translate-x-0" },
    "scale":      { init: "opacity-0 scale-90",       show: "opacity-100 scale-100" },
  };
  const v = variants[animation] || variants["fade-up"];

  const getChildProps = useCallback((i) => {
    const show = visible ? v.show : v.init;
    const delay = visible ? { transitionDelay: `${i * staggerMs}ms` } : {};
    const base = "transition-all duration-700 ease-out";
    return { className: `${base} ${show}`, style: delay };
  }, [visible, v, staggerMs]);

  return { ref, visible, getChildProps };
};
