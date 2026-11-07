import { ArrowUpRight, Code } from "lucide-react";
import type { Project } from "@/data/projects";

const statusLabel: Record<Project["status"], string> = {
  LIVE: "Live",
  IN_PROGRESS: "In build",
};

export default function ProjectRow({ project }: { project: Project }) {
  const demoUrl =
    project.demoUrl && project.demoUrl !== "#" ? project.demoUrl : null;
  const sourceUrl =
    project.sourceUrl && project.sourceUrl !== "#" ? project.sourceUrl : null;
  const live = project.status === "LIVE";

  const actionClass =
    "inline-flex min-h-11 flex-1 items-center justify-between gap-2 border border-line px-3 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-muted transition-colors hover:border-amber hover:text-amber lg:w-full lg:flex-none";

  return (
    <article
      id={project.id}
      className="scroll-mt-20 border-t border-rule first:border-t-0"
    >
      <div className="grid gap-4 py-6 lg:grid-cols-[3.5rem_minmax(0,1fr)_10rem] lg:gap-8 lg:py-7">
        <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-2">
          <span className="font-mono text-[0.64rem] tracking-[0.12em] text-dim tabular-nums">
            {project.number}
          </span>
          <span
            className={`flex items-center gap-1.5 font-mono text-[0.56rem] uppercase tracking-[0.12em] ${
              live ? "text-success" : "text-amber"
            }`}
          >
            <span
              aria-hidden="true"
              className={
                live
                  ? "status-dot"
                  : "h-1.5 w-1.5 rounded-full border border-amber"
              }
            />
            {statusLabel[project.status]}
          </span>
        </div>

        <div>
          <h3 className="text-[1.05rem] font-semibold tracking-[-0.01em] text-foreground">
            {project.title}
          </h3>
          <p className="mt-2 max-w-[64ch] text-[0.88rem] leading-relaxed text-muted">
            {project.description}
          </p>
          <p className="mt-3 font-mono text-[0.58rem] uppercase leading-relaxed tracking-[0.1em] text-dim">
            {project.technologies.join(" / ")}
          </p>
        </div>

        <div className="flex flex-wrap items-start gap-2 lg:flex-col">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={actionClass}
            >
              Live demo
              <ArrowUpRight size={11} aria-hidden="true" />
            </a>
          )}
          {sourceUrl && (
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={actionClass}
            >
              Source
              <Code size={11} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
