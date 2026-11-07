export type SkillGroup = {
  category: string;
  items: string[];
};

/**
 * Tools grouped by where they sit in a system. No invented proficiency
 * percentages: the projects are the evidence.
 */
export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML / CSS",
    ],
  },
  {
    category: "Backend & data",
    items: [
      "Python",
      "FastAPI",
      "Node.js",
      "Flask",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    category: "Machine learning",
    items: [
      "Scikit-learn",
      "TensorFlow",
      "Pandas",
      "NumPy",
      "Matplotlib",
    ],
  },
  {
    category: "AI systems",
    items: [
      "LangChain",
      "LangGraph",
      "RAG pipelines",
      "LLM integration",
      "Vector search",
      "Hugging Face",
    ],
  },
];
