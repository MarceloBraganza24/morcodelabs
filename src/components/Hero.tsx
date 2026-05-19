"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { siteConfig } from "@/data/site";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-32">
      <HeroBackground />

      <div className="container-labs relative z-10 flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur"
        >
          <Sparkles size={16} className="text-cyan-300" />
          Desarrollo web, SaaS y productos digitales
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 36, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl text-balance text-5xl font-semibold tracking-[-0.06em] text-white md:text-7xl lg:text-8xl"
        >
          Creamos software moderno para negocios que quieren{" "}
          <span className="text-gradient">crecer.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.85,
            delay: 0.22,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-7 max-w-2xl text-pretty text-base leading-8 text-slate-300 md:text-lg"
        >
          {siteConfig.name} desarrolla plataformas SaaS, ecommerce,
          marketplaces, dashboards y sistemas web modernos utilizando Next.js,
          TypeScript, MongoDB y arquitecturas escalables orientadas a productos
          reales.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.85,
            delay: 0.34,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#contacto"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-slate-950 transition hover:scale-105"
          >
            Empezar un proyecto
            <ArrowRight
              size={17}
              className="transition group-hover:translate-x-1"
            />
          </a>

          <a
            href="#selected-work"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            Ver proyectos
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.45,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          {[
            "Full Stack MERN",
            "Next.js",
            "TypeScript",
            "MongoDB",
            "SaaS",
            "Ecommerce",
            "Marketplaces",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/4 px-4 py-2 text-sm text-slate-300 backdrop-blur"
            >
              {item}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 42, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.58,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="glass mt-16 w-full max-w-4xl rounded-3xl p-4 shadow-2xl shadow-cyan-950/20"
        >
          <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-5 text-left">
            <div className="mb-5 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <div className="font-mono text-sm leading-7 text-slate-300">
              <p>
                <span className="text-purple-300">const</span>{" "}
                <span className="text-cyan-300">morcodeLabs</span> = {"{"}
              </p>

              <p className="pl-5">
                services: [&quot;SaaS&quot;, &quot;Landing Pages&quot;,
                &quot;Ecommerce&quot;, &quot;Dashboards&quot;],
              </p>

              <p className="pl-5">
                stack: [&quot;Next.js&quot;, &quot;TypeScript&quot;,
                &quot;MongoDB&quot;, &quot;Tailwind&quot;],
              </p>

              <p className="pl-5">
                focus: &quot;software útil, moderno y escalable&quot;,
              </p>

              <p>{"}"}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}