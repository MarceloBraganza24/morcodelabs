import { services } from "@/data/site";
import SectionReveal from "./SectionReveal";
import { ArrowUpRight } from "lucide-react";

export default function Services() {
  return (
    <section id="servicios" className="py-28">
      <div className="container-labs">
        <SectionReveal>
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Servicios
            </p>
            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
              Soluciones digitales para negocios reales.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-400">
              Desde una landing profesional hasta una plataforma SaaS completa
              con usuarios, pagos, roles, dashboards e integraciones.
            </p>
          </div>
        </SectionReveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <SectionReveal key={service.title} delay={index * 0.05}>
              <article className="group glass h-full rounded-3xl p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-300/30 hover:bg-white/[0.07]">
                <div className="mb-10 flex items-center justify-between">
                  <span className="text-sm text-slate-500">
                    0{index + 1}
                  </span>
                  <ArrowUpRight className="text-slate-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300" />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="leading-7 text-slate-400">
                  {service.description}
                </p>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}