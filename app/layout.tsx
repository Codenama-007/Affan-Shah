import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollAnimations from "@/components/Effects/ScrollAnimations";
import PageTransitionObserver from "@/components/Transitions/PageTransitionObserver";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CRTOverlay from "@/components/Effects/CRTOverlay";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://affanshahai.vercel.app"),

  title: {
    default: "Affan Shah | AI Engineer & Full-Stack Developer",
    template: "%s | Affan Shah",
  },

  description:
    "Affan Shah is an AI and full-stack developer building intelligent web applications, RAG systems, AI agents, and modern digital experiences using Python, Next.js, React, and TypeScript.",

  keywords: [
    "Affan Shah",
    "AI Engineer",
    "AI Developer",
    "AI Agents",
    "Full Stack Developer",
    "Full Stack AI Developer",
    "RAG Developer",
    "RAG Engineer",
    "Next.js Developer",
    "React Developer",
    "Python Developer",
    "Machine Learning Developer",
  ],

  authors: [{ name: "Affan Shah", url: "https://affanshahai.vercel.app" }],
  creator: "Affan Shah",
  publisher: "Affan Shah",

  alternates: {
    canonical: "https://affanshahai.vercel.app",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://affanshahai.vercel.app",
    siteName: "Affan Shah",
    title: "Affan Shah | AI Engineer & Full-Stack Developer",
    description:
      "AI and full-stack developer building intelligent applications, RAG systems, and modern web experiences.",
  },

  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "1QY909zXbWm-Y7tFOQaPMs4vTCBaZyUrsN4C8t3s9HU",
  },
};

const buildStamp = process.env.NEXT_PUBLIC_BUILD_STAMP ?? "dev";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${ibmPlexMono.variable} ${ibmPlexSans.variable} h-full`}
    >
      <body className="min-h-full antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:bg-amber focus:px-4 focus:py-3 focus:font-mono focus:text-xs focus:font-semibold focus:uppercase focus:tracking-[0.12em] focus:text-background"
        >
          Skip to content
        </a>
        <ScrollAnimations />
        <PageTransitionObserver />
        <CRTOverlay />
        <SmoothScroll>
          <Navbar buildStamp={buildStamp} />
          <div className="flex min-h-screen flex-col pt-12 lg:pl-[272px]">
            <main id="content" className="flex-1">
              {children}
            </main>
            <Footer buildStamp={buildStamp} />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
