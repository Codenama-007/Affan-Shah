"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import type { ProjectCategory } from "@/data/projects";
import ProjectRow from "./ProjectRow";

// Derived from the data so a new category can never silently drop out of the
// filter. The old hardcoded list did not match the actual project data.
const categories: ("All" | ProjectCategory)[] = [
  "All",
  ...Array.from(new Set(projects.flatMap((project) => project.categories))),
];

export default function ProjectGrid() {
  const [active, setActive] = useState<"All" | ProjectCategory>("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((project) => project.categories.includes(active));

  return (
    <div>
      <div className="flex flex-col gap-3 border-b border-rule pb-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted">
          Filter by category
        </p>
        <div
          className="flex flex-wrap gap-1.5"
          role="group"
          aria-label="Filter projects by category"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={active === category}
              className={`min-h-11 border px-3 font-mono text-[0.62rem] uppercase tracking-[0.12em] transition-colors ${
                active === category
                  ? "border-amber bg-amber/10 text-amber"
                  : "border-line text-muted hover:border-amber hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-4 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-dim">
        {filtered.length} of {projects.length} records shown
      </p>

      <div className="mt-2 border-b border-rule">
        {filtered.map((project) => (
          <ProjectRow key={project.id} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="border-b border-rule py-10 text-[0.88rem] text-muted">
          No projects in this category yet.
        </div>
      )}
    </div>
  );
}
