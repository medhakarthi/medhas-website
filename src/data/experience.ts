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
    company: "MCAP",
    date: "May 2026 — Sep 2026",
    location: "Toronto, ON",
    description:
      "Traced data lineages as older datasets were retired, wrote efficient SQL to keep data accurate, built Power BI dashboards, and refined the team’s website UI while working with data engineers and architects.",
    technologies: ["SQL", "Power BI", "Excel"],
  },
  {
    id: "software-developer",
    role: "Software Developer",
    company: "Electrium Mobility",
    date: "Nov 2025 — Apr 2026",
    location: "Waterloo, ON",
    description:
      "Built and shipped features across the stack, improved UI responsiveness, and collaborated in an agile team. Focused on reliable code, clear communication, and polished user experiences.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
];
