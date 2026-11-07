import { skillGroups } from "@/data/skills";

const focus = [
  "Retrieval pipelines and evaluation for document-heavy products.",
  "Agentic workflows with LangGraph, tool use, and state.",
  "Full-stack product work in Next.js and FastAPI.",
];

export default function About() {
  return (
    <section id="profile" className="shell-section scroll-mt-16">
      <div className="shell-container">
        <header className="section-head">
          <p className="section-label">Profile</p>
          <div>
            <h2 className="section-title max-w-[22ch]">
              I build the retrieval layer, then the product around it.
            </h2>
            <p className="section-lede mt-4">
              Full-stack engineering with an applied AI focus. The interface is
              part of the system, not a wrapper added at the end.
            </p>
          </div>
        </header>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
          <div className="body-copy">
            <p>
              I build full-stack products and the AI systems inside them. Most
              of my work sits in retrieval and agents: document pipelines,
              vector search, and LangGraph workflows that turn a model into
              something a user can actually operate.
            </p>
            <p>
              On the product side I work in <strong>React, Next.js,
              TypeScript</strong>, and <strong>Python / FastAPI</strong>. I care
              about the unglamorous parts — state, errors, latency, and
              interfaces that stay legible when the model is wrong.
            </p>
            <p>
              I am finishing a B.E. in Computer Engineering at St. Francis
              Institute of Technology in Mumbai, and going deeper into agentic
              architectures, retrieval quality, and production LLM tooling.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-[0.78rem] font-semibold uppercase tracking-[0.14em]">
              Current focus
            </h3>
            <ul className="mt-4 border-t border-rule">
              {focus.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 border-b border-rule py-3.5 text-[0.88rem] leading-relaxed text-foreground/80"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.55rem] h-1 w-1 shrink-0 bg-amber"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-5 flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-success">
              <span className="status-dot" aria-hidden="true" />
              Available for work
            </p>
          </div>
        </div>

        <div className="mt-14">
          <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-rule pb-3">
            <h3 className="font-mono text-[0.78rem] font-semibold uppercase tracking-[0.14em]">
              Capabilities
            </h3>
            <p className="meta">Grouped by layer</p>
          </div>

          <dl>
            {skillGroups.map((group) => (
              <div
                key={group.category}
                className="grid gap-2 border-b border-rule py-4 sm:grid-cols-[10rem_1fr] sm:gap-8"
              >
                <dt className="font-mono text-[0.64rem] uppercase tracking-[0.14em] text-muted">
                  {group.category}
                </dt>
                <dd className="text-[0.86rem] leading-relaxed text-foreground/80">
                  {group.items.join(" / ")}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
