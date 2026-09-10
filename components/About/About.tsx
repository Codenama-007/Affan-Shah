import ToolkitCard from "./ToolkitCard";

const toolkitCategories = [
  "Frontend",
  "Backend & Database",
  "Data Science & ML",
  "AI Systems",
];

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-heading">ABOUT THE DEVELOPER</div>

        <div className="flex flex-col gap-8 lg:gap-12">
          {/* About Text */}
          <div className="terminal-panel" data-reveal>
            <div className="text-[0.85rem] tracking-[0.2em] text-[#FF6500] uppercase mb-4 font-semibold">
              ABOUT ME
            </div>
            <div className="space-y-4 text-[1rem] leading-relaxed text-[#EAEAEA]/80">
              <p>
                I am a developer focused on building full-stack applications
                and AI systems. My work spans from crafting responsive web
                interfaces to engineering RAG pipelines and LLM-powered tools.
              </p>
              <p>
                I enjoy working with modern web technologies, backend systems,
                and the rapidly evolving field of artificial intelligence. Every
                project I build is designed to solve a real problem with
                practical engineering.
              </p>
              <p>
                Currently focused on full-stack development with React and
                Next.js, while deepening my expertise in AI systems including
                RAG, LangGraph, and agentic architectures.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A24]" />
              <span className="text-[0.7rem] tracking-[0.15em] text-[#FF8A24] uppercase">
                AVAILABLE FOR WORK
              </span>
            </div>
          </div>

          {/* System Toolkit */}
          <div>
            <div className="section-heading mb-4">SYSTEM TOOLKIT</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" data-grid>
              {toolkitCategories.map((cat) => (
                <ToolkitCard key={cat} category={cat} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
