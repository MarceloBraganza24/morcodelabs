import { techStack } from "@/data/site";
import SectionReveal from "./SectionReveal";

export default function TechStack() {
  return (
    <section className="border-y border-white/10 bg-white/2 py-20">
      <div className="container-labs">
        <SectionReveal>
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
                Stack
              </p>
              <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
                Tecnologías modernas para productos escalables.
              </h2>
            </div>
            <p className="max-w-md text-slate-400">
              Herramientas pensadas para velocidad, seguridad, mantenimiento y
              crecimiento.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-300 transition hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}