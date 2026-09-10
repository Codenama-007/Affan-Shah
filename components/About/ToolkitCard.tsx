import { skills } from "@/data/skills";
import SkillBar from "./SkillBar";

export default function ToolkitCard({ category }: { category?: string }) {
  const displayCategories = category
    ? [category]
    : [...new Set(skills.map((s) => s.category))];

  return (
    <div className="terminal-panel" data-grid-item>
      {displayCategories.map((cat) => (
        <div key={cat}>
          <div className="text-[0.85rem] tracking-[0.2em] text-[#FF6500] uppercase mb-3 font-semibold">
            {cat}
          </div>
          <div className="space-y-3">
            {skills
              .filter((s) => s.category === cat)
              .map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[0.85rem] tracking-[0.1em] text-[#EAEAEA] uppercase">
                      {skill.name}
                    </span>
                    <span className="text-[0.8rem] tracking-[0.1em] text-[#777777]">
                      {skill.level}
                    </span>
                  </div>
                  <SkillBar level={skill.level} />
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
