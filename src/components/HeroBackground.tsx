"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useMemo } from "react";

export default function HeroBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 24,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 24,
  });

  useEffect(() => {
    const move = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  // PARTICLES ESTABLES
  const particles = useMemo(() => {
    return Array.from({ length: 28 }, (_, i) => ({
      id: i,
      left: `${(i * 13.37) % 100}%`,
      top: `${(i * 29.17) % 100}%`,
      size: (i % 3) + 1.5,
      duration: 8 + (i % 6),
      delay: i * 0.15,
      xMove: ((i % 5) - 2) * 10,
    }));
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="noise" />

      {/* Mouse spotlight */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
        }}
        className="absolute h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/10 blur-3xl"
      />

      {/* Grid */}
      <div className="hero-mask absolute inset-0 grid-bg opacity-80" />

      {/* Gradient blobs */}
      <div className="animate-float-slow absolute left-[8%] top-[18%] h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="animate-float-slow absolute right-[6%] top-[20%] h-96 w-96 rounded-full bg-purple-500/20 blur-3xl [animation-delay:2s]" />

      <div className="animate-pulse-glow absolute bottom-[8%] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      {/* Particles */}
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          initial={{
            opacity: 0,
            y: 0,
          }}
          animate={{
            opacity: [0, 0.7, 0],
            y: [-10, -80],
            x: [0, particle.xMove],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-cyan-200/60"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
        />
      ))}

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-slate-950 to-transparent" />
    </div>
  );
}