export type Project = {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  live: string;
  status?: "Featured" | "In Progress" | "Completed";
  featured?: boolean;
  accent: string;
};

export const projects: Project[] = [
  {
    id: "screenshot-brain",
    name: "Screenshot Brain",
    description:
      "An intelligent screenshot organizer that uses AI to tag, search, and resurface visual memories with ease.",
    technologies: ["Next.js", "TypeScript", "OpenAI", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    status: "Featured",
    featured: true,
    accent: "from-[#F7C6D9]/40 to-[#FFDCE8]/10",
  },
  {
    id: "books-for-kooks",
    name: "Books for Kooks",
    description:
      "A cozy book discovery platform for readers who want quirky recommendations and community lists.",
    technologies: ["React", "Node.js", "SQLite", "CSS"],
    github: "https://github.com",
    live: "https://example.com",
    status: "Featured",
    featured: true,
    accent: "from-[#FFDCE8]/35 to-[#F7C6D9]/10",
  },
  {
    id: "skillsprout",
    name: "SkillSprout",
    description:
      "A learning tracker that helps students grow skills with milestones, streaks, and project-based goals.",
    technologies: ["Python", "Flask", "Firebase", "JavaScript"],
    github: "https://github.com",
    live: "https://example.com",
    status: "Completed",
    accent: "from-[#F7C6D9]/30 to-transparent",
  },
  {
    id: "noise-classifier",
    name: "Noise Classifier",
    description:
      "A machine learning project that classifies environmental sounds for smarter audio insights.",
    technologies: ["Python", "TensorFlow", "NumPy", "Jupyter"],
    github: "https://github.com",
    live: "https://example.com",
    status: "Completed",
    accent: "from-[#FFDCE8]/25 to-transparent",
  },
  {
    id: "muffle-bubble",
    name: "Muffle Bubble",
    description:
      "A focus companion app that softens digital distractions and creates a calmer study bubble.",
    technologies: ["React", "FastAPI", "TypeScript", "Figma"],
    github: "https://github.com",
    live: "https://example.com",
    status: "In Progress",
    accent: "from-[#F7C6D9]/25 to-transparent",
  },
];
