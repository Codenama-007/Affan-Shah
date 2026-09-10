import { ExternalLink, Code } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="terminal-panel hover-glow transition-all duration-200" data-grid-item>
      <div className="flex items-center justify-between mb-3">
        <span className="text-[0.75rem] tracking-[0.2em] text-[#777777] uppercase">
          PROGRAM // {project.number}
        </span>
        <span
          className={`text-[0.75rem] tracking-[0.15em] uppercase px-2 py-0.5 border ${
            project.status === "ACTIVE"
              ? "border-[#FF8A24] text-[#FF8A24]"
              : project.status === "BUILDING"
              ? "border-[#FF6500] text-[#FF6500]"
              : "border-[#454545] text-[#777777]"
          }`}
        >
          {project.status}
        </span>
      </div>

      <div className="border-t border-[#454545] pt-3 mb-3" />

      <h3 className="text-[1rem] font-bold tracking-[0.1em] text-[#EAEAEA] uppercase mb-3">
        {project.title}
      </h3>

      <p className="text-[0.9rem] leading-relaxed text-[#EAEAEA]/70 mb-4">
        {project.description}
      </p>

      <div className="mb-4">
        <div className="text-[0.75rem] tracking-[0.2em] text-[#FF6500] uppercase mb-2 font-semibold">
          STACK
        </div>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[0.75rem] tracking-[0.1em] text-[#777777] border border-[#454545] px-2 py-0.5 uppercase"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-2">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[0.75rem] tracking-[0.1em] text-[#FF6500] uppercase hover:text-[#FF7A00] transition-colors"
          >
            <ExternalLink size={10} />
            INSPECT
          </a>
        )}
        {project.sourceUrl && (
          <a
            href={project.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[0.75rem] tracking-[0.1em] text-[#777777] uppercase hover:text-[#EAEAEA] transition-colors"
          >
            <Code size={10} />
            SOURCE
          </a>
        )}
      </div>
    </div>
  );
}
