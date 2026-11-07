import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";

const rows: { label: string; value: string; note?: string }[] = [
  { label: "Name", value: site.name },
  { label: "Role", value: "AI engineer / full-stack" },
  { label: "Based", value: site.location },
  {
    label: "Program",
    value: "B.E. Computer Engineering",
    note: "2023 — 2027",
  },
  { label: "Focus", value: "RAG, agents, product UI" },
];

export default function PersonnelCard() {
  return (
    <aside aria-label="Personnel record" className="panel self-start">
      <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3">
        <h2 className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-dim">
          Personnel record
        </h2>
        <span className="flex items-center gap-1.5 font-mono text-[0.56rem] uppercase tracking-[0.12em] text-success">
          <span className="status-dot" aria-hidden="true" />
          Open
        </span>
      </div>

      <dl>
        {rows.map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-[5rem_minmax(0,1fr)] gap-3 border-b border-rule px-4 py-3 last:border-b-0"
          >
            <dt className="pt-0.5 font-mono text-[0.58rem] uppercase tracking-[0.12em] text-dim">
              {row.label}
            </dt>
            <dd className="text-[0.8rem] leading-relaxed text-foreground">
              {row.value}
              {row.note && (
                <span className="mt-0.5 block font-mono text-[0.58rem] uppercase tracking-[0.1em] text-muted">
                  {row.note}
                </span>
              )}
            </dd>
          </div>
        ))}
      </dl>

      <div className="border-t border-line px-4 py-4">
        <p className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-dim">
          Currently building
        </p>
        <Link
          href="/projects#trip-pilot-ai"
          className="mt-1 flex min-h-11 items-center justify-between gap-3 text-[0.9rem] font-medium text-foreground transition-colors hover:text-amber"
        >
          Trip Pilot AI
          <ArrowUpRight size={13} aria-hidden="true" className="text-amber" />
        </Link>
        <p className="mt-1 text-[0.78rem] leading-relaxed text-muted">
          A LangGraph travel agent with tool-based research.
        </p>
      </div>
    </aside>
  );
}
