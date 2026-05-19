import SectionReveal from "./SectionReveal";

export default function About() {
  return (
    <section className="py-28">
      <div className="container-labs grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <SectionReveal>
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Sobre MorCode Labs
            </p>
            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
              Una marca personal con mentalidad de software studio.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-400">
              MorCode Labs nace para crear productos digitales modernos,
              minimalistas y funcionales. La idea no es solamente programar
              pantallas, sino construir soluciones que ayuden a negocios reales
              a vender mejor, organizarse mejor y escalar.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-400">
              Como desarrollador MERN, el enfoque está puesto en crear sistemas
              web completos: frontend, backend, base de datos, autenticación,
              roles, pagos, dashboards, integraciones y deploy.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="glass rounded-3xl p-8">
            <div className="space-y-6">
              <div>
                <p className="text-sm text-slate-500">Enfoque</p>
                <p className="mt-1 text-xl font-semibold text-white">
                  SaaS, sistemas web y productos digitales
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Estilo</p>
                <p className="mt-1 text-xl font-semibold text-white">
                  Moderno, minimalista y escalable
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Objetivo</p>
                <p className="mt-1 text-xl font-semibold text-white">
                  Resolver problemas reales con tecnología
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}