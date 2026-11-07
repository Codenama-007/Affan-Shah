import type { Metadata } from "next";
import ProjectGrid from "@/components/Projects/ProjectGrid";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Affan Shah's projects: RAG systems, AI agents, machine learning pipelines, and full-stack web applications built with Python, Next.js, React, and FastAPI.",
  alternates: {
    canonical: "https://affanshahai.vercel.app/projects",
  },
};

export default function ProjectsPage() {
  const liveCount = projects.filter(
    (project) => project.status === "LIVE"
  ).length;
  const categoryCount = new Set(
    projects.flatMap((project) => project.categories)
  ).size;

  return (
    <section className="pb-20 pt-10 lg:pb-28 lg:pt-14">
      <div className="shell-container">
        <header className="section-head">
          <p className="section-label">Archive</p>
          <div>
            <h1 className="page-title">Projects.</h1>
            <p className="section-lede mt-4">
              The full record: twelve builds across retrieval, agents, and the
              web. Live demos and source are listed where they exist.
            </p>

            <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-3 border-y border-rule py-3 font-mono text-[0.62rem] uppercase tracking-[0.14em]">
              <div className="flex items-baseline gap-2">
                <dt className="text-muted">Records</dt>
                <dd className="text-foreground tabular-nums">
                  {String(projects.length).padStart(2, "0")}
                </dd>
              </div>
              <div className="flex items-baseline gap-2">
                <dt className="text-muted">Live</dt>
                <dd className="text-foreground tabular-nums">
                  {String(liveCount).padStart(2, "0")}
                </dd>
              </div>
              <div className="flex items-baseline gap-2">
                <dt className="text-muted">Categories</dt>
                <dd className="text-foreground tabular-nums">
                  {String(categoryCount).padStart(2, "0")}
                </dd>
              </div>
            </dl>
          </div>
        </header>

        <div className="mt-10">
          <ProjectGrid />
        </div>
      </div>
    </section>
  );
}
