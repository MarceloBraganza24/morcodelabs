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
              Soy desarrollador Full Stack MERN con formación universitaria en
              sistemas, experiencia en ecommerce, turneros y plataformas web,
              actualmente enfocado en productos modernos con Next.js,
              TypeScript, MongoDB y arquitecturas SaaS.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              Comencé desarrollando aplicaciones web con React, Node.js,
              Express y MongoDB, y actualmente trabajo con Next.js, App Router,
              TypeScript y arquitecturas modernas orientadas a productos
              escalables y sistemas web complejos.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              Además del desarrollo frontend y backend, también trabajo con
              despliegues, infraestructura cloud y gestión de dominios,
              utilizando herramientas como Google Cloud Platform, Cloud Run,
              AWS y Vercel para proyectos orientados a producción real.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="glass rounded-3xl p-8">
            <div className="space-y-8">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                  Formación
                </p>

                <div className="mt-5 space-y-5">
                  <div className="rounded-2xl border border-white/10 bg-white/3 p-5">
                    <p className="text-lg font-semibold text-white">
                      Analista Universitario en Sistemas
                    </p>

                    <p className="mt-2 text-sm text-slate-400">
                      Universidad Siglo XXI · Finalizado en 2022
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/3 p-5">
                    <p className="text-lg font-semibold text-white">
                      Desarrollo Full Stack MERN
                    </p>

                    <p className="mt-2 text-sm text-slate-400">
                      Coderhouse · React, Node.js, Express y MongoDB ·
                      Finalizado en 2024
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/3 p-5">
                    <p className="text-lg font-semibold text-white">
                      Experto Universitario en Hacking Ético
                    </p>

                    <p className="mt-2 text-sm text-slate-400">
                      UTN · Finalizado en 2022
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-8">
                <p className="mb-5 text-sm uppercase tracking-[0.2em] text-purple-300">
                  Tecnologías
                </p>

                <div className="flex flex-wrap gap-3">
                  {[
                    "Next.js",
                    "React",
                    "TypeScript",
                    "Node.js",
                    "MongoDB",
                    "Express",
                    "Tailwind CSS",
                    "Auth.js",
                    "Mongoose",
                    "Mercado Pago",
                    "Stripe",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/3 px-4 py-2 text-sm text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-10">
                  <p className="mb-5 text-sm uppercase tracking-[0.2em] text-cyan-300">
                    Infraestructura & Deploy
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {[
                      "Google Cloud Platform",
                      "Cloud Run",
                      "AWS",
                      "Vercel",
                      "Domain & Hosting Management",
                      "Production Deployments",
                      "Cloud Infrastructure",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/3 px-4 py-2 text-sm text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}