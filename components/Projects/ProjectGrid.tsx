"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const categories = ["ALL", "WEB DEVELOPMENT", "AI / ML", "RAG", "AGENTIC AI"];

export default function ProjectGrid() {
  const [active, setActive] = useState("ALL");

  const filtered =
    active === "ALL"
      ? projects
      : projects.filter((p) => p.categories.includes(active));

  return (
    <div>
      {/* Category Filter */}
      <div className="mb-8">
        <div className="text-[0.8rem] tracking-[0.2em] text-[#777777] uppercase mb-3">
          SELECT CATEGORY
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-[0.8rem] tracking-[0.15em] uppercase px-3 py-1.5 border transition-all ${
                active === cat
                  ? "border-[#FF6500] text-[#FF6500] bg-[#FF6500]/10"
                  : "border-[#454545] text-[#777777] hover:border-[#FF6500]/50 hover:text-[#EAEAEA]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-grid>
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-[0.8rem] tracking-[0.15em] text-[#777777] uppercase">
          NO PROGRAMS FOUND IN THIS CATEGORY
        </div>
      )}
    </div>
  );
}
