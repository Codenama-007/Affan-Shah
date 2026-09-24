import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Education from "@/components/Education/Education";
import ContactForm from "@/components/Contact/ContactForm";
import Footer from "@/components/Footer";
import CRTOverlay from "@/components/Effects/CRTOverlay";

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
      <CRTOverlay />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <section id="contact" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="section-heading">OPEN COMMUNICATION CHANNEL</div>
            <div className="max-w-2xl" data-reveal>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
