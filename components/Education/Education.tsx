import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="shell-section scroll-mt-16">
      <div className="shell-container">
        <header className="section-head">
          <p className="section-label">Background</p>
          <div>
            <h2 className="section-title">Education.</h2>
            <p className="section-lede mt-4">
              Coursework in computer engineering, applied to shipped projects.
            </p>
          </div>
        </header>

        <div className="mt-10 border-t border-rule">
          {education.map((record) => (
            <div
              key={record.id}
              className="grid gap-3 py-6 md:grid-cols-[10rem_1fr] md:gap-8"
            >
              <p className="font-mono text-[0.78rem] tabular-nums tracking-[0.04em] text-muted">
                {record.period}
              </p>
              <div>
                <h3 className="text-[1.05rem] font-semibold tracking-[-0.01em]">
                  {record.program}
                </h3>
                <p className="mt-1 text-[0.88rem] text-muted">
                  {record.institution}, {record.location}
                </p>
                <p className="mt-3 font-mono text-[0.64rem] uppercase tracking-[0.14em] text-amber">
                  {record.status}
                </p>
              </div>
            </div>
          ))}

          <div className="grid gap-3 border-t border-rule py-6 md:grid-cols-[10rem_1fr] md:gap-8">
            <p className="font-mono text-[0.78rem] tracking-[0.04em] text-muted">
              Self-directed
            </p>
            <div>
              <h3 className="text-[1.05rem] font-semibold tracking-[-0.01em]">
                Applied AI practice
              </h3>
              <p className="mt-1 max-w-xl text-[0.88rem] leading-relaxed text-muted">
                Retrieval pipelines, LangGraph agents, and full-stack products
                built outside the syllabus.
              </p>
              <Link
                href="/projects"
                className="mt-2 inline-flex min-h-11 items-center gap-1.5 font-mono text-[0.66rem] uppercase tracking-[0.14em] text-amber transition-colors hover:text-amber-bright"
              >
                Open the project archive
                <ArrowUpRight size={12} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
