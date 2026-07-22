import { useState, useCallback, useRef } from "react";

/**
 * 3D Tilt effect hook — tracks mouse position over an element
 * and returns rotation transform values for a 3D perspective effect.
 *
 * @param {object} opts
 * @param {number} opts.maxTilt   max degrees of rotation (default 15)
 * @param {number} opts.scale     scale on hover (default 1.02)
 * @param {number} opts.speed     transition speed in ms (default 400)
 * @param {boolean} opts.glare    enable glare/shine effect (default true)
 *
 * @returns {{ ref, style, shineStyle, isHovering, onMouseMove, onMouseEnter, onMouseLeave }}
 */
export const useTilt3D = ({
  maxTilt = 15,
  scale = 1.02,
  speed = 400,
  glare = true,
} = {}) => {
  const ref = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  const onMouseMove = useCallback(
    (e) => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Normalized -1 to 1
      const normalX = (e.clientX - centerX) / (rect.width / 2);
      const normalY = (e.clientY - centerY) / (rect.height / 2);

      // Clamp
      const clampedX = Math.max(-1, Math.min(1, normalX));
      const clampedY = Math.max(-1, Math.min(1, normalY));

      setTilt({
        x: clampedY * -maxTilt, // rotate around X axis (vertical mouse → horizontal tilt)
        y: clampedX * maxTilt,  // rotate around Y axis (horizontal mouse → vertical tilt)
      });

      if (glare) {
        // Glare position as percentage
        setGlarePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    },
    [maxTilt, glare]
  );

  const onMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsHovering(false);
    setTilt({ x: 0, y: 0 });
    setGlarePos({ x: 50, y: 50 });
  }, []);

  // Main card transform
  const style = {
    transform: isHovering
      ? `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${scale}, ${scale}, ${scale})`
      : "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    transition: isHovering
      ? `transform ${speed * 0.5}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`
      : `transform ${speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`,
    transformStyle: "preserve-3d",
    willChange: isHovering ? "transform" : "auto",
  };

  // Shine/glare overlay style
  const shineStyle = glare
    ? {
        background: isHovering
          ? `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(167, 139, 250, 0.25) 0%, rgba(139, 92, 246, 0.08) 40%, transparent 70%)`
          : "none",
        opacity: isHovering ? 1 : 0,
        transition: `opacity ${speed}ms ease`,
      }
    : {};

  // Shadow that moves opposite to tilt for depth
  const shadowStyle = {
    boxShadow: isHovering
      ? `${tilt.y * -1.5}px ${tilt.x * 1.5}px 40px -10px rgba(139, 92, 246, 0.35),
         0 0 0 1px rgba(139, 92, 246, 0.2),
         0 20px 60px -15px rgba(0, 0, 0, 0.5)`
      : "0 0 0 1px rgba(139, 92, 246, 0.2), 0 0 40px -10px rgba(139, 92, 246, 0.3)",
    transition: `box-shadow ${speed}ms ease`,
  };

  return {
    ref,
    style,
    shineStyle,
    shadowStyle,
    isHovering,
    onMouseMove,
    onMouseEnter,
    onMouseLeave,
  };
};
