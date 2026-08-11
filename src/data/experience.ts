export type Experience = {
  id: string;
  role: string;
  company: string;
  date: string;
  location: string;
  description: string;
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    id: "data-intern",
    role: "Data Intern",
    company: "Company Name",
    date: "May 2025 — Aug 2025",
    location: "Remote / City, Country",
    description:
      "Worked with datasets, built analysis pipelines, and helped turn insights into actionable product recommendations. Collaborated with engineers and analysts on clean, well-documented deliverables.",
    technologies: ["Python", "SQL", "Pandas", "Excel"],
  },
  {
    id: "software-developer",
    role: "Software Developer",
    company: "Organization Name",
    date: "Jan 2025 — Apr 2025",
    location: "Waterloo, ON",
    description:
      "Built and shipped features across the stack, improved UI responsiveness, and collaborated in an agile team. Focused on reliable code, clear communication, and polished user experiences.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
];
