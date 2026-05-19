import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { selectedWork } from "@/data/site";
import SectionReveal from "./SectionReveal";

export default function SelectedWork() {
  return (
    <section id="selected-work" className="relative py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_38%)]" />

      <div className="container-labs relative z-10">
        <SectionReveal>
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Selected Work
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
              Proyectos que muestran producto, diseño y ejecución.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Sistemas, plataformas SaaS y productos digitales desarrollados con
              foco en arquitectura, experiencia de usuario, performance y
              escalabilidad.
            </p>
          </div>
        </SectionReveal>

        <div className="space-y-10">
          {selectedWork.map((project, index) => {
            const mainImage = project.images[0];
            const secondaryImages = project.images.slice(1, 4);

            return (
              <SectionReveal key={project.title} delay={index * 0.08}>
                <article className="group glass overflow-hidden rounded-4x1 p-4 transition duration-500 hover:-translate-y-1 hover:border-cyan-300/30">
                  <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr] xl:items-center">
                    <div className="space-y-4">
                      <div className="project-image-fallback relative aspect-16/10 overflow-hidden rounded-3x1 border border-white/10">
                        <Image
                          src={mainImage}
                          alt={`${project.title} - vista principal`}
                          fill
                          sizes="(max-width: 1280px) 100vw, 60vw"
                          className="object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent" />

                        <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-xs font-medium text-white backdrop-blur">
                          {project.status}
                        </div>
                      </div>

                      {secondaryImages.length > 0 && (
                        <div className="grid gap-4 md:grid-cols-3">
                          {secondaryImages.map((image, imageIndex) => (
                            <div
                              key={image}
                              className="project-image-fallback relative aspect-16/10 overflow-hidden rounded-2xl border border-white/10 bg-slate-900"
                            >
                              <Image
                                src={image}
                                alt={`${project.title} - captura ${
                                  imageIndex + 2
                                }`}
                                fill
                                sizes="(max-width: 768px) 100vw, 20vw"
                                className="object-cover object-top transition duration-500 hover:scale-105"
                              />

                              <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 to-transparent opacity-70" />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="p-3 md:p-6">
                      <div className="mb-5 flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-cyan-200">
                          {project.category}
                        </span>

                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-sm text-slate-400 transition hover:text-white"
                          >
                            Ver online <ArrowUpRight size={15} />
                          </a>
                        )}
                      </div>

                      <h3 className="text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
                        {project.title}
                      </h3>

                      <p className="mt-5 leading-8 text-slate-300">
                        {project.description}
                      </p>

                      <p className="mt-4 leading-8 text-slate-500">
                        {project.longDescription}
                      </p>

                      <div className="mt-7 grid gap-3 sm:grid-cols-3">
                        {project.metrics.map((metric) => (
                          <div
                            key={metric}
                            className="rounded-2xl border border-white/10 bg-white/3 p-4 text-sm font-medium text-white"
                          >
                            {metric}
                          </div>
                        ))}
                      </div>

                      <div className="mt-7 space-y-3">
                        {project.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-3 text-sm text-slate-300"
                          >
                            <CheckCircle2 size={17} className="shrink-0 text-cyan-300" />
                            {feature}
                          </div>
                        ))}
                      </div>

                      <div className="mt-7 flex flex-wrap gap-2">
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
                  </div>
                </article>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}