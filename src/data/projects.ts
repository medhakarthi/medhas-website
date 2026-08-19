export type Project = {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  live?: string;
  status?: "Featured" | "In Progress" | "Completed";
  featured?: boolean;
  accent: string;
};

export const projects: Project[] = [
  {
    id: "skillsprout",
    name: "SkillSprout",
    description:
      "An AI-powered app that turns vague career goals into structured weekly roadmaps.",
    technologies: ["OpenAI API", "TypeScript", "Next.js", "React", "HTML", "CSS"],
    github: "https://github.com/medhakarthi/SkillSprout",
    status: "Featured",
    featured: true,
    accent: "from-[#F7C6D9]/40 to-[#FFDCE8]/10",
  },
  {
    id: "books-for-kooks",
    name: "Books for Kooks",
    description: "A book discovery web application.",
    technologies: ["Python", "SQL", "HTML", "CSS", "Flask", "JavaScript", "PostgreSQL", "Supabase"],
    github: "https://github.com/medhakarthi/Books-For-Kooks",
    status: "Featured",
    featured: true,
    accent: "from-[#FFDCE8]/35 to-[#F7C6D9]/10",
  },
  {
    id: "parkpop",
    name: "ParkPop",
    description:
      "An iOS app that turns a forgotten parking spot into a map pin, live distance, and walking directions.",
    technologies: ["Swift", "SwiftUI", "MapKit", "Core Location"],
    github: "https://github.com/medhakarthi/ParkPop",
    status: "Completed",
    accent: "from-[#F7C6D9]/30 to-transparent",
  },
];
