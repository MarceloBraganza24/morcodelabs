"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { siteConfig } from "@/data/site";
import Image from "next/image";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#selected-work", label: "Proyectos" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/60 backdrop-blur-xl"
    >
      <nav className="container-labs flex h-20 items-center justify-between">
        <a href="#" className="group flex items-center gap-3">
          <Image
            src="/branding/morcodelabs-logo-webp.webp"
            alt="MorCode Labs"
            width={56}
            height={56}
          />

          <div>
            <p className="text-sm font-semibold tracking-wide text-white">
              {siteConfig.name}
            </p>
            <p className="text-xs text-slate-400">Software Studio</p>
          </div>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contacto"
            className="rounded-full border border-white/10 bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:scale-105"
          >
            Trabajemos
          </a>
        </div>

        <motion.button
          onClick={() => setOpen((prev) => !prev)}
          whileTap={{ scale: 0.92 }}
          className="relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5 text-white backdrop-blur transition hover:bg-white/10 md:hidden"
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="close"
                initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                transition={{ duration: 0.2 }}
              >
                <X size={20} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ opacity: 0, rotate: 90, scale: 0.6 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: -90, scale: 0.6 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={20} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -16, filter: "blur(10px)" }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="container-labs pb-5 md:hidden"
          >
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  transition: {
                    staggerChildren: 0.06,
                    delayChildren: 0.04,
                  },
                },
                closed: {
                  transition: {
                    staggerChildren: 0.04,
                    staggerDirection: -1,
                  },
                },
              }}
              className="glass overflow-hidden rounded-2xl p-2 shadow-2xl shadow-cyan-950/20"
            >
              {links.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  variants={{
                    open: { opacity: 1, x: 0 },
                    closed: { opacity: 0, x: -12 },
                  }}
                  transition={{ duration: 0.22 }}
                  className="block rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.a
                href="#contacto"
                onClick={() => setOpen(false)}
                variants={{
                  open: { opacity: 1, x: 0 },
                  closed: { opacity: 0, x: -12 },
                }}
                transition={{ duration: 0.22 }}
                className="mt-2 block rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-slate-950"
              >
                Trabajemos
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}