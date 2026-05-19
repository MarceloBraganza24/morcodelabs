import { processSteps } from "@/data/site";
import SectionReveal from "./SectionReveal";

export default function Process() {
  return (
    <section id="proceso" className="bg-white/2 py-28">
      <div className="container-labs">
        <SectionReveal>
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
              Proceso
            </p>
            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
              Del problema al producto funcionando.
            </h2>
          </div>
        </SectionReveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <SectionReveal key={step.title} delay={index * 0.07}>
              <div className="glass h-full rounded-3xl p-7">
                <p className="mb-10 text-5xl font-semibold tracking-[-0.08em] text-white/20">
                  {step.number}
                </p>
                <h3 className="mb-4 text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="leading-7 text-slate-400">
                  {step.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}