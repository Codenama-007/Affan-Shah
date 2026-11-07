import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { site } from "@/data/site";
import PersonnelCard from "./PersonnelCard";

export default function Hero() {
  return (
    <section id="top" className="scroll-mt-16">
      <div className="shell-container pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="grid gap-12 xl:grid-cols-[minmax(0,1fr)_19rem] xl:items-start xl:gap-16">
          <div>
            <h1 className="display">Affan Shah</h1>

            <p className="mt-5 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-amber">
              AI engineer &amp; full-stack developer
            </p>

            <p className="lede mt-6">
              I build agentic AI systems — travel planners, market researchers,
              document assistants — and the full-stack products that make them
              usable.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/projects" className="btn">
                View the work
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
              <a href={site.cvPath} download className="btn-ghost">
                Download CV
                <Download size={14} aria-hidden="true" />
              </a>
            </div>
          </div>

          <PersonnelCard />
        </div>
      </div>
    </section>
  );
}
