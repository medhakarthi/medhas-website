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
      "Worked on data quality, SQL analysis, ETL workflows, and data lineage to make enterprise data easier to monitor, trace, and use.",
    technologies: ["SQL", "Power BI", "Excel"],
  },
  {
    id: "software-developer",
    role: "Software Developer",
    company: "Electrium Mobility",
    date: "Nov 2025 — Apr 2026",
    location: "Waterloo, ON",
    description:
      "Built and improved an internal request-tracking platform using React, TypeScript, Supabase, and PostgreSQL to help engineering teams manage work more efficiently.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "PostgreSQL", "Supabase"],
  },
];
