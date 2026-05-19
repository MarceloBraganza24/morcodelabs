import { projects } from "@/data/site";
import SectionReveal from "./SectionReveal";

export default function Projects() {
  return (
    <section id="proyectos" className="py-28">
      <div className="container-labs">
        <SectionReveal>
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
              Portfolio técnico
            </p>
            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
              Sistemas, SaaS y productos digitales.
            </h2>
          </div>
        </SectionReveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <SectionReveal key={project.title} delay={index * 0.06}>
              <article className="group glass relative min-h-75 overflow-hidden rounded-3xl p-7 transition duration-300 hover:-translate-y-2 hover:border-purple-300/30">
                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl transition group-hover:bg-cyan-400/20" />

                <div className="relative z-10">
                  <span className="mb-8 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-cyan-200">
                    {project.status}
                  </span>

                  <h3 className="mb-4 text-2xl font-semibold tracking-[-0.03em] text-white">
                    {project.title}
                  </h3>

                  <p className="mb-8 leading-7 text-slate-400">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}