import { Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";
import SectionReveal from "./SectionReveal";

export default function Contact() {
  return (
    <section id="contacto" className="py-28">
      <div className="container-labs">
        <SectionReveal>
          <div className="glass relative overflow-hidden rounded-4xl p-8 md:p-14">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-purple-400/10 blur-3xl" />

            <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-center">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                  Contacto
                </p>
                <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
                  ¿Tenés una idea o querés mejorar tu negocio?
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                  Podemos convertir una idea, proceso o problema en una landing,
                  sistema, dashboard o producto digital listo para salir a
                  producción.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white px-5 py-4 font-semibold text-slate-950 transition hover:scale-[1.02]"
                >
                  <span className="flex items-center gap-3">
                    <MessageCircle size={20} />
                    Escribir por WhatsApp
                  </span>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 font-semibold text-white transition hover:bg-white/10"
                >
                  <span className="flex items-center gap-3">
                    <Mail size={20} />
                    Enviar email
                  </span>
                </a>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}