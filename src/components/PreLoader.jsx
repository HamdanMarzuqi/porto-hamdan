import { useState, useEffect } from "react";

const PreLoader = () => {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const start = Date.now();
    const duration = 900;
    const tick = () => {
      const elapsed = Date.now() - start;
      const p = Math.min(100, (elapsed / duration) * 100);
      setProgress(p);
      if (p < 100) {
        requestAnimationFrame(tick);
      } else {
        // Start exit animation
        setExiting(true);
        setTimeout(() => setHidden(true), 500);
      }
    };
    requestAnimationFrame(tick);
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-ink-950 flex items-center justify-center ${
        exiting ? "preloader-exit" : ""
      }`}
    >
      <div className="w-72">
        <div className="flex items-center justify-between mb-3 font-mono text-xs">
          <span className="text-accent-400">initializing</span>
          <span className="text-ink-500 tabular-nums">
            {Math.floor(progress).toString().padStart(3, "0")}%
          </span>
        </div>
        <div className="h-px bg-ink-800 relative overflow-hidden rounded-full">
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent-600 to-accent-400 rounded-full"
            style={{
              width: `${progress}%`,
              transition: "width 100ms ease-out",
            }}
          />
        </div>
        <div className="mt-3 font-mono text-[10px] text-ink-600 uppercase tracking-widest">
          loading assets
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
