import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AFFAN SHAH // DEVELOPER TERMINAL",
  description:
    "Full Stack Developer & AI/ML Engineer — Building practical software systems at the intersection of full-stack development and AI.",
  keywords: [
    "Affan Shah",
    "Full Stack Developer",
    "AI Engineer",
    "RAG",
    "Next.js",
    "Python",
    "Affan Bhai" ,
    "affan bhai" ,
    "aFFan " ,
    "AffAAn"
  ],
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
