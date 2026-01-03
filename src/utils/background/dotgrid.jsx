"use client";
import { useRef, useEffect, useCallback, useMemo } from "react";
import { gsap } from "gsap";
import "./DotGrid.css";

// REMOVED: InertiaPlugin (It causes crashes if you don't have a paid license)

const throttle = (func, limit) => {
  let lastCall = 0;
  return function (...args) {
    const now = performance.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);
    }
  };
};

function hexToRgb(hex) {
  const m = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (!m) return { r: 0, g: 0, b: 0 };
  return {
    r: parseInt(m[1], 16),
    g: parseInt(m[2], 16),
    b: parseInt(m[3], 16),
  };
}

const DotGrid = ({
  dotSize = 6, // Made smaller for a cleaner look
  gap = 15, // Wider gap for better performance
  baseColor = "#262626", // Default to white so it is visible on dark backgrounds
  activeColor = "#6366f1", // Indigo on hover
  proximity = 100,
  shockRadius = 150,
  shockStrength = 10,
  returnDuration = 2, // Faster return
  className = "",
  style,
}) => {
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);
  const dotsRef = useRef([]);
  const pointerRef = useRef({ x: 0, y: 0 });

  const baseRgb = useMemo(() => hexToRgb(baseColor), [baseColor]);
  const activeRgb = useMemo(() => hexToRgb(activeColor), [activeColor]);

  // Create the circle shape once
  const circlePath = useMemo(() => {
    if (typeof window === "undefined" || !window.Path2D) return null;
    const p = new window.Path2D();
    p.arc(0, 0, dotSize / 2, 0, Math.PI * 2);
    return p;
  }, [dotSize]);

  // Build the grid
  const buildGrid = useCallback(() => {
    const wrap = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const { width, height } = wrap.getBoundingClientRect();
    // Force canvas to match container size exactly
    if (width === 0 || height === 0) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = "100%";
    canvas.style.height = "100%";

    const ctx = canvas.getContext("2d");
    if (ctx) ctx.scale(dpr, dpr);

    const cols = Math.floor(width / gap);
    const rows = Math.floor(height / gap);

    // Center the grid
    const offsetX = (width - cols * gap) / 2;
    const offsetY = (height - rows * gap) / 2;

    const dots = [];
    for (let y = 0; y <= rows; y++) {
      for (let x = 0; x <= cols; x++) {
        dots.push({
          cx: offsetX + x * gap,
          cy: offsetY + y * gap,
          xOffset: 0,
          yOffset: 0,
          isAnimating: false,
        });
      }
    }
    dotsRef.current = dots;
  }, [dotSize, gap]);

  // Animation Loop
  useEffect(() => {
    if (!circlePath) return;
    let rafId;

    const draw = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);

      const px = pointerRef.current.x;
      const py = pointerRef.current.y;
      const proxSq = proximity * proximity;

      // Access ref value directly for speed
      const dots = dotsRef.current;

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        const ox = dot.cx + dot.xOffset;
        const oy = dot.cy + dot.yOffset;

        // Distance check for color
        const dx = dot.cx - px;
        const dy = dot.cy - py;
        const dsq = dx * dx + dy * dy;

        let fillStyle = baseColor;

        if (dsq < proxSq) {
          // Simple color blend based on distance
          const t = 1 - Math.sqrt(dsq) / proximity;
          const r = Math.round(baseRgb.r + (activeRgb.r - baseRgb.r) * t);
          const g = Math.round(baseRgb.g + (activeRgb.g - baseRgb.g) * t);
          const b = Math.round(baseRgb.b + (activeRgb.b - baseRgb.b) * t);
          fillStyle = `rgb(${r},${g},${b})`;
        }

        ctx.save();
        ctx.translate(ox, oy);
        ctx.fillStyle = fillStyle;
        ctx.fill(circlePath);
        ctx.restore();
      }

      rafId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(rafId);
  }, [proximity, baseColor, activeColor, baseRgb, activeRgb, circlePath]);

  // Resize Handler
  useEffect(() => {
    buildGrid();
    window.addEventListener("resize", buildGrid);
    return () => window.removeEventListener("resize", buildGrid);
  }, [buildGrid]);

  // Mouse Interaction
  useEffect(() => {
    const onMove = (e) => {
      const rect = wrapperRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      pointerRef.current = { x, y };

      // Simple repulsion effect
      for (const dot of dotsRef.current) {
        const dx = dot.cx - x;
        const dy = dot.cy - y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < shockRadius) {
          gsap.to(dot, {
            xOffset: (dx / dist) * shockStrength,
            yOffset: (dy / dist) * shockStrength,
            duration: 0.3,
            overwrite: "auto",
            onComplete: () => {
              // Spring back
              gsap.to(dot, {
                xOffset: 0,
                yOffset: 0,
                duration: returnDuration,
                ease: "elastic.out(1, 0.5)",
              });
            },
          });
        }
      }
    };

    const throttledMove = throttle(onMove, 30);
    window.addEventListener("mousemove", throttledMove);
    return () => window.removeEventListener("mousemove", throttledMove);
  }, [shockRadius, shockStrength, returnDuration]);

  return (
    <div
      ref={wrapperRef}
      className={`dot-grid-container ${className}`}
      style={{ width: "100%", height: "100%", ...style }}
    >
      <canvas ref={canvasRef} style={{ display: "block" }} />
    </div>
  );
};

export default DotGrid;
