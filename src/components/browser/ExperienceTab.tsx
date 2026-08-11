import { experiences } from "@/data/experience";

export function ExperienceTab() {
  return (
    <div>
      <p className="section-kicker">✦ career.log</p>
      <h2 className="section-title">Experience</h2>
      <p className="section-desc">Roles that shaped me to become who I am today.</p>

      <ol className="relative mt-4 space-y-3 border-l-2 border-line pl-4">
        {experiences.map((item) => (
          <li key={item.id} className="relative">
            <span
              className="absolute top-2 -left-[1.35rem] size-2.5 border-2 border-line bg-pink-hot"
              aria-hidden="true"
            />
            <article className="retro-card">
              <div className="retro-card-bar">
                <span className="truncate">{item.company}.exe</span>
                <time className="shrink-0 font-mono text-[10px]">{item.date}</time>
              </div>
              <div className="p-3">
                <h3 className="font-pixel text-base text-text">{item.role}</h3>
                <p className="mt-0.5 font-mono text-[11px] text-pink-hot">
                  {item.company}
                  <span className="text-text-muted"> · {item.location}</span>
                </p>
                <p className="mt-2 text-[12px] leading-relaxed text-text-muted">{item.description}</p>
                <ul className="mt-2.5 flex flex-wrap gap-1.5" aria-label="Technologies used">
                  {item.technologies.map((tech) => (
                    <li key={tech} className="tag-chip">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
}
