import { siteConfig } from "@/data/site";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container-labs flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <Image
            src="/branding/morcodelabs-logo-webp.webp"
            alt="MorCode Labs"
            width={78}
            height={78}
          />
          <p className="font-semibold text-white">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-slate-500">
            Software moderno para negocios que quieren crecer.
          </p>
        </div>

        <div className="flex flex-wrap gap-5 text-sm text-slate-400">
          <a href={siteConfig.github} className="hover:text-white" target="_blank">
            GitHub
          </a>
          <a href={siteConfig.linkedin} className="hover:text-white" target="_blank">
            LinkedIn
          </a>
          <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
            Email
          </a>
          <a href={siteConfig.domain} className="hover:text-white">
            MorCode Labs
          </a>
        </div>

        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}