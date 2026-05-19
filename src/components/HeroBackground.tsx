"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect } from "react";

const particles = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 8 + 8,
  delay: Math.random() * 4,
}));

export default function HeroBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 24 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 24 });

  useEffect(() => {
    const move = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="noise" />

      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
        }}
        className="absolute h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/10 blur-3xl"
      />

      <div className="hero-mask absolute inset-0 grid-bg opacity-80" />

      <div className="animate-float-slow absolute left-[8%] top-[18%] h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="animate-float-slow absolute right-[6%] top-[20%] h-96 w-96 rounded-full bg-purple-500/20 blur-3xl [animation-delay:2s]" />
      <div className="animate-pulse-glow absolute bottom-[8%] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 0.7, 0],
            y: [-10, -80],
            x: [0, Math.random() * 28 - 14],
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

      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950 to-transparent" />
    </div>
  );
}