import Navbar from "@/components/Navbar";
import ProjectGrid from "@/components/Projects/ProjectGrid";
import Footer from "@/components/Footer";
import CRTOverlay from "@/components/Effects/CRTOverlay";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Affan Shah's projects: RAG systems, AI agents, machine learning pipelines, and full-stack web applications built with Python, Next.js, React, and FastAPI.",
  alternates: {
    canonical: "https://affanshahai.vercel.app/projects",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <CRTOverlay />
      <Navbar />
      <main className="pt-16">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-10">
              <div className="text-[0.8rem] tracking-[0.3em] text-[#777777] uppercase mb-2">
                PROJECT DATABASE
              </div>
              <div className="text-[0.8rem] tracking-[0.2em] text-[#777777] uppercase mb-4">
                ACCESSING DEVELOPER PROJECT ARCHIVE
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[0.8rem] tracking-[0.15em] text-[#EAEAEA] uppercase">
                  TOTAL PROGRAMS: 08
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A24]" />
                  <span className="text-[0.7rem] tracking-[0.15em] text-[#FF8A24] uppercase">
                    ONLINE
                  </span>
                </span>
              </div>
            </div>

            <ProjectGrid />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
