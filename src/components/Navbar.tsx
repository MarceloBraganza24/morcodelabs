"use client";

import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { siteConfig } from "@/data/site";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
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
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-sm font-black text-slate-950 transition group-hover:scale-105">
            M
          </div>
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

        <button
          onClick={() => setOpen(!open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white md:hidden"
          aria-label="Abrir menú"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="container-labs pb-5 md:hidden">
          <div className="glass rounded-2xl p-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.header>
  );
}