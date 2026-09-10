export type Project = {
  id: string;
  number: string;
  title: string;
  description: string;
  categories: string[];
  technologies: string[];
  status: "ACTIVE" | "BUILDING" | "ARCHIVED";
  demoUrl?: string;
  sourceUrl?: string;
};

export const projects: Project[] = [
  {
    id: "pdf-intelligence",
    number: "001",
    title: "PDF INTELLIGENCE SYSTEM",
    description:
      "RAG-powered PDF question-answering application. Upload documents and ask questions against their content using vector search and LLM.",
    categories: ["AI / ML", "RAG"],
    technologies: ["Python", "FastAPI", "React", "RAG", "LLM"],
    status: "ACTIVE",
    demoUrl: "#",
    sourceUrl: "#",
  },
  {
    id: "ai-coding-assistant",
    number: "002",
    title: "AI CODING ASSISTANT",
    description:
      "An AI-powered coding assistant that helps developers write, review, and debug code using LLM and RAG pipelines.",
    categories: ["AI / ML", "RAG"],
    technologies: ["Python", "RAG", "MongoDB", "LangChain"],
    status: "ACTIVE",
    demoUrl: "#",
    sourceUrl: "#",
  },
  {
    id: "connexus",
    number: "003",
    title: "CONNEXUS",
    description:
      "Real-time communication platform with instant messaging, file sharing, and collaborative workspace features.",
    categories: ["Web Development"],
    technologies: ["Flask", "Socket.IO", "React", "PostgreSQL"],
    status: "ACTIVE",
    demoUrl: "#",
    sourceUrl: "#",
  },
  {
    id: "ml-classifier",
    number: "004",
    title: "ML CLASSIFIER",
    description:
      "Machine learning classification pipeline for multi-class text classification with deployment-ready inference API.",
    categories: ["AI / ML"],
    technologies: ["Python", "TensorFlow", "Scikit-learn", "FastAPI"],
    status: "ACTIVE",
    sourceUrl: "#",
  },
  {
    id: "rag-chatbot",
    number: "005",
    title: "RAG CHATBOT",
    description:
      "Conversational AI chatbot with retrieval-augmented generation, context-aware responses, and conversation memory.",
    categories: ["AI / ML", "RAG"],
    technologies: ["Python", "LangChain", "OpenAI", "ChromaDB"],
    status: "BUILDING",
  },
  {
    id: "portfolio-terminal",
    number: "006",
    title: "PORTFOLIO TERMINAL",
    description:
      "This very website — a TVA-inspired retro-futuristic developer terminal built with Next.js and Tailwind CSS.",
    categories: ["Web Development"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    status: "ACTIVE",
    sourceUrl: "#",
  },
  {
    id: "agent-orchestrator",
    number: "007",
    title: "AGENT ORCHESTRATOR",
    description:
      "Multi-agent AI system using LangGraph for orchestrating complex workflows with tool-calling and state management.",
    categories: ["AI / ML", "Agentic AI"],
    technologies: ["Python", "LangGraph", "LangChain", "FastAPI"],
    status: "BUILDING",
  },
  {
    id: "doc-parser",
    number: "008",
    title: "DOC PARSER",
    description:
      "Intelligent document parser that extracts, structures, and summarizes content from PDFs, images, and scanned documents.",
    categories: ["AI / ML", "RAG"],
    technologies: ["Python", "FastAPI", "OCR", "LLM"],
    status: "ACTIVE",
    sourceUrl: "#",
  },
];
