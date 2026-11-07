import Link from "next/link";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { site } from "@/data/site";

export default function Footer({ buildStamp }: { buildStamp: string }) {
  return (
    <footer className="border-t border-rule">
      <div className="shell-container py-14 lg:py-20">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <h2 className="section-title max-w-[20ch] lg:text-[2.4rem]">
              Open to AI and full-stack roles.
            </h2>
            <p className="section-lede mt-4 max-w-[54ch]">
              If you are building retrieval, agent, or product systems and need
              someone who can own the path from pipeline to interface, I would
              like to hear about it.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link href="/contact" className="btn">
              Start a conversation
              <ArrowUpRight size={13} aria-hidden="true" />
            </Link>
            <a href={`mailto:${site.email}`} className="btn-ghost">
              <Mail size={13} aria-hidden="true" />
              Email
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-rule pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-1.5 font-mono text-[0.68rem] tracking-[0.1em] text-muted uppercase transition-colors hover:text-amber"
            >
              GitHub
              <ArrowUpRight size={10} aria-hidden="true" />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-1.5 font-mono text-[0.68rem] tracking-[0.1em] text-muted uppercase transition-colors hover:text-amber"
            >
              LinkedIn
              <ArrowUpRight size={10} aria-hidden="true" />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex min-h-11 items-center gap-1.5 font-mono text-[0.68rem] tracking-[0.1em] text-muted uppercase transition-colors hover:text-amber"
            >
              <Mail size={11} aria-hidden="true" />
              Email
            </a>
            <a
              href={site.cvPath}
              download
              className="inline-flex min-h-11 items-center gap-1.5 font-mono text-[0.68rem] tracking-[0.1em] text-muted uppercase transition-colors hover:text-amber"
            >
              <Download size={11} aria-hidden="true" />
              CV
            </a>
          </div>

          <p className="font-mono text-[0.6rem] leading-relaxed tracking-[0.1em] text-muted uppercase sm:text-right">
            © {new Date().getFullYear()} {site.name} · {site.location}
            <span className="mt-1 block text-dim">Build {buildStamp}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
