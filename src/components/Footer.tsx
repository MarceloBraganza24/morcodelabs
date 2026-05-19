import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container-labs flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="font-semibold text-white">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-slate-500">
            Software moderno para negocios que quieren crecer.
          </p>
        </div>

        <div className="flex gap-5 text-sm text-slate-400">
          <a href={siteConfig.github} className="hover:text-white">
            GitHub
          </a>
          <a href={siteConfig.linkedin} className="hover:text-white">
            LinkedIn
          </a>
          <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
            Email
          </a>
        </div>

        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}