import { GitHubIcon } from "@/components/ui/SocialIcons";
import { projects } from "@/data/projects";
import { ExternalLink, Folder } from "lucide-react";

export function ProjectsTab() {
  return (
    <div>
      <p className="section-kicker">✦ ~/projects</p>
      <h2 className="section-title">Projects</h2>
      <p className="section-desc">Selected work spanning web apps, tools, and experiments.</p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {projects.map((project) => (
          <article key={project.id} className="retro-card flex flex-col">
            <div className="retro-card-bar">
              <span className="flex min-w-0 items-center gap-1.5 truncate">
                <Folder className="size-3 shrink-0" strokeWidth={2.5} aria-hidden="true" />
                {project.id}.proj
              </span>
              {project.status && (
                <span className="shrink-0 border border-line bg-panel px-1.5 py-px font-mono text-[9px]">
                  {project.status}
                </span>
              )}
            </div>
            <div className="flex flex-1 flex-col p-3">
              <h3 className="font-pixel text-base text-text">{project.name}</h3>
              <p className="mt-1.5 flex-1 text-[12px] leading-relaxed text-text-muted">
                {project.description}
              </p>
              <ul className="mt-2.5 flex flex-wrap gap-1.5" aria-label="Technologies">
                {project.technologies.map((tech) => (
                  <li key={tech} className="tag-chip">
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="mt-2.5 flex items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} on GitHub`}
                  className="inline-flex items-center gap-1 font-mono text-[11px] text-text-muted hover:text-pink-hot"
                >
                  <GitHubIcon size={12} />
                  GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} live demo`}
                    className="inline-flex items-center gap-1 font-mono text-[11px] text-text-muted hover:text-pink-hot"
                  >
                    <ExternalLink className="size-3" strokeWidth={2.5} aria-hidden="true" />
                    Live
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
