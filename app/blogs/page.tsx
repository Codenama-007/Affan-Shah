import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Notes",
  description:
    "Working notes from Affan Shah on retrieval systems, AI agents, and full-stack development.",
};

export default function NotesPage() {
  return (
    <section className="pb-20 pt-10 lg:pb-28 lg:pt-14">
      <div className="shell-container">
        <header className="section-head">
          <p className="section-label">Notes</p>
          <div>
            <h1 className="page-title">Notes.</h1>
            <p className="section-lede mt-4">
              Working notes on retrieval, agents, and the parts of building
              software that do not fit in a project description.
            </p>
          </div>
        </header>

        <div className="mt-12 border-y border-rule py-12">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-amber">
            Nothing published yet
          </p>
          <p className="mt-4 max-w-[52ch] text-[1rem] leading-relaxed text-muted">
            I would rather publish one honest write-up than keep a shelf of
            empty cards. When the first note is ready, it will appear here.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/projects" className="btn">
              See the work
              <ArrowUpRight size={13} aria-hidden="true" />
            </Link>
            <Link href="/contact" className="btn-ghost">
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
