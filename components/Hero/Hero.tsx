import Link from "next/link";
import Typewriter from "./Typewriter";
import FlipCard from "./FlipCard";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left — Text */}
          <div className="flex-1 text-center lg:text-left">
            <div className="text-[0.8rem] tracking-[0.3em] text-[#777777] uppercase mb-2">
              TEMPORAL AUTHORITY
            </div>
            <div className="text-[0.8rem] tracking-[0.3em] text-[#777777] uppercase mb-8">
              DEVELOPER RECORD
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.1em] text-[#EAEAEA] uppercase mb-6">
              AFFAN SHAH
            </h1>

            <div className="space-y-1 mb-8">
              <div className="text-[0.9rem] tracking-[0.2em] text-[#FF6500] uppercase">
                FULL STACK DEVELOPER
              </div>
              <div className="text-[0.9rem] tracking-[0.2em] text-[#FF6500] uppercase">
                AI / ML ENGINEER
              </div>
            </div>

            <div className="text-[1rem] sm:text-base tracking-wide mb-8 min-h-[1.5em]">
              <Typewriter />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/projects" className="terminal-btn text-center">
                [ VIEW PROJECTS ]
              </Link>
              <Link href="/contact" className="terminal-btn text-center">
                [ CONTACT ME ]
              </Link>
            </div>
          </div>

          {/* Right — Flip Card */}
          <div className="flex-shrink-0">
            <FlipCard />
          </div>
        </div>
      </div>
    </section>
  );
}
