import type { Metadata } from "next";
import Hero from "@/components/Hero/Hero";
import FeaturedProjects from "@/components/Projects/FeaturedProjects";
import About from "@/components/About/About";
import Education from "@/components/Education/Education";

export const metadata: Metadata = {
  title: "AI Engineer & Full-Stack Developer",
  description:
    "Affan Shah is an AI and full-stack developer building AI-powered applications, RAG systems, AI agents, and full-stack web experiences with Python, Next.js, React, and TypeScript.",
  alternates: {
    canonical: "https://affanshahai.vercel.app",
  },
  openGraph: {
    title: "Affan Shah | AI Engineer & Full-Stack Developer",
    description:
      "AI and full-stack developer building intelligent applications, RAG systems, and modern web experiences.",
  },
};

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Affan Shah",
  url: "https://affanshahai.vercel.app",
  email: "affanjavedshah@student.sfit.ac.in",
  jobTitle: "AI Engineer & Full-Stack Developer",
  knowsAbout: [
    "Artificial Intelligence",
    "Retrieval-Augmented Generation",
    "AI Agents",
    "Full-Stack Development",
    "Next.js",
    "React",
    "Python",
    "FastAPI",
    "Machine Learning",
    "Vector Databases",
  ],
  sameAs: [
    "https://github.com/Codenama-007",
    "https://www.linkedin.com/in/affanjavedshah",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <FeaturedProjects />
      <About />
      <Education />
    </>
  );
}
