export type Skill = {
  name: string;
  category: string;
  level: number;
};

export const skills: Skill[] = [
  // Frontend
  { name: "HTML", category: "Frontend", level: 90 },
  { name: "CSS", category: "Frontend", level: 85 },
  { name: "JavaScript", category: "Frontend", level: 80 },
  { name: "React.js", category: "Frontend", level: 80 },
  { name: "Next.js", category: "Frontend", level: 75 },
  { name: "Tailwind CSS", category: "Frontend", level: 80 },

  // Backend / Database
  { name: "Python", category: "Backend & Database", level: 90 },
  { name: "Node.js", category: "Backend & Database", level: 70 },
  { name: "FastAPI", category: "Backend & Database", level: 80 },
  { name: "Flask", category: "Backend & Database", level: 70 },
  { name: "PostgreSQL", category: "Backend & Database", level: 75 },
  { name: "MongoDB", category: "Backend & Database", level: 70 },

  // Data Science / ML
  { name: "TensorFlow", category: "Data Science & ML", level: 65 },
  { name: "Scikit-learn", category: "Data Science & ML", level: 75 },
  { name: "Pandas", category: "Data Science & ML", level: 80 },
  { name: "NumPy", category: "Data Science & ML", level: 80 },
  { name: "Matplotlib", category: "Data Science & ML", level: 75 },

  // AI Systems
  { name: "LangChain", category: "AI Systems", level: 70 },
  { name: "LangGraph", category: "AI Systems", level: 65 },
  { name: "LLM Integration", category: "AI Systems", level: 75 },
  { name: "RAG Pipelines", category: "AI Systems", level: 80 },
  { name: "Hugging Face", category: "AI Systems", level: 70 },
];
