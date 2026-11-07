import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectRow from "./ProjectRow";

export default function FeaturedProjects() {
  const featured = projects.filter((project) => project.featured).slice(0, 3);
  const liveCount = projects.filter((project) => project.status === "LIVE").length;

  return (
    <section id="work" className="shell-section">
      <div className="shell-container">
        <header className="section-head" data-reveal>
          <p className="section-label">Selected work</p>
          <div>
            <h2 className="section-title max-w-[24ch]">
              Three projects, three kinds of system.
            </h2>
            <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
              <p className="section-lede">
                The archive holds {projects.length} projects; {liveCount} are
                live. These three show the range: retrieval, agents, and
                interface craft.
              </p>
              <Link href="/projects" className="link-action mb-[-0.6rem]">
                All {projects.length} projects
                <ArrowUpRight size={12} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </header>

        <div className="mt-8 border-b border-rule">
          {featured.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
