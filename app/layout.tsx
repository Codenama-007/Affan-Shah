import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
};

import SmoothScroll from "@/components/SmoothScroll";
import ScrollAnimations from "@/components/Effects/ScrollAnimations";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${ibmPlexMono.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <ScrollAnimations />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
