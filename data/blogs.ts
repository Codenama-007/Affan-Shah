export type Blog = {
  id: string;
  number: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  url?: string;
};

export const blogs: Blog[] = [
  {
    id: "building-pdf-rag",
    number: "001",
    title: "HOW I BUILT A PDF RAG SYSTEM",
    category: "AI / RAG",
    date: "2026-08-15",
    excerpt:
      "A deep dive into building a production-ready RAG pipeline for PDF question-answering using FastAPI and vector search.",
  },
  {
    id: "nextjs-tva-portfolio",
    number: "002",
    title: "BUILDING A TVA-INSPIRED PORTFOLIO",
    category: "WEB DEVELOPMENT",
    date: "2026-09-01",
    excerpt:
      "How I designed and built a retro-futuristic terminal-style portfolio using Next.js and Tailwind CSS.",
  },
  {
    id: "langgraph-agents",
    number: "003",
    title: "INTRODUCTION TO LANGGRAPH AGENTS",
    category: "AI SYSTEMS",
    date: "2026-07-20",
    excerpt:
      "Getting started with LangGraph for building stateful, multi-step AI agent workflows.",
  },
];
