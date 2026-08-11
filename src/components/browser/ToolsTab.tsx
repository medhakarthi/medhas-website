import { techStack } from "@/data/skills";

export function ToolsTab() {
  return (
    <div>
      <p className="section-kicker">✦ toolkit.cfg</p>
      <h2 className="section-title">Tools</h2>
      <p className="section-desc">Languages, frameworks, and tools I reach for most often.</p>

      <div className="mt-4 space-y-3">
        {(Object.keys(techStack) as (keyof typeof techStack)[]).map((category) => (
          <section key={category} className="retro-card" aria-labelledby={`tools-${category}`}>
            <div className="retro-card-bar">
              <h3 id={`tools-${category}`}>{category}</h3>
            </div>
            <ul className="flex flex-wrap gap-1.5 p-3">
              {techStack[category].map((item) => (
                <li key={item} className="tag-chip">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
