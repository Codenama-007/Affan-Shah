import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-heading">EDUCATION RECORD</div>
        <div className="terminal-panel" data-reveal>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[15px] top-0 bottom-0 w-px bg-[#FF6500]/30" />

            <div className="space-y-8">
              {education.map((edu) => (
                <div key={edu.id} className="relative pl-10">
                  <div className="absolute left-0 top-0 text-[0.8rem] tracking-[0.15em] text-[#FF6500] font-bold">
                    {edu.year}
                  </div>

                  <div className="absolute left-[12px] top-[3px] w-[7px] h-[7px] rounded-full bg-[#FF6500] border-2 border-[#0A0A0A]" />

                  <div className="text-[0.8rem] tracking-[0.2em] text-[#777777] uppercase mb-2">
                    {edu.number}{" // "}{edu.title}
                  </div>

                  <div className="border border-[#454545] bg-[#050505] p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <div className="text-[0.95rem] tracking-[0.1em] text-[#EAEAEA] uppercase font-semibold">
                        {edu.institution}
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            edu.status === "COMPLETED"
                              ? "bg-[#FF8A24]"
                              : "bg-[#FF6500] animate-pulse"
                          }`}
                        />
                        <span className="text-[0.7rem] tracking-[0.15em] text-[#FF8A24] uppercase">
                          {edu.status}
                        </span>
                      </div>
                    </div>
                    <div className="text-[0.7rem] tracking-[0.1em] text-[#777777] uppercase">
                      {edu.program}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
