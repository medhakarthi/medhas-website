export const TAB_IDS = ["about", "experience", "projects", "tools"] as const;

export type TabId = (typeof TAB_IDS)[number];

export const tabs: { id: TabId; label: string; path: string }[] = [
  { id: "about", label: "About Me", path: "medha.dev/about" },
  { id: "experience", label: "Experience", path: "medha.dev/experience" },
  { id: "projects", label: "Projects", path: "medha.dev/projects" },
  { id: "tools", label: "Tools", path: "medha.dev/tools" },
];
