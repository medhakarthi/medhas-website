import { RetroProfileCard } from "@/components/browser/RetroProfileCard";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { siteConfig } from "@/data/site";
import { Code2, FileText, Mail, Terminal } from "lucide-react";
import type { ReactNode } from "react";

const socialLinks: {
  label: string;
  href: string;
  external: boolean;
  icon: ReactNode;
}[] = [
  {
    label: "GitHub",
    href: siteConfig.github,
    external: true,
    icon: <GitHubIcon size={13} />,
  },
  {
    label: "LinkedIn",
    href: siteConfig.linkedin,
    external: true,
    icon: <LinkedInIcon size={13} />,
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    external: false,
    icon: <Mail className="size-3.5" strokeWidth={2.25} aria-hidden="true" />,
  },
  {
    label: "Resume",
    href: siteConfig.resumeUrl,
    external: true,
    icon: <FileText className="size-3.5" strokeWidth={2.25} aria-hidden="true" />,
  },
  {
    label: "Code",
    href: siteConfig.github,
    external: true,
    icon: <Code2 className="size-3.5" strokeWidth={2.25} aria-hidden="true" />,
  },
  {
    label: "Terminal",
    href: siteConfig.github,
    external: true,
    icon: <Terminal className="size-3.5" strokeWidth={2.25} aria-hidden="true" />,
  },
];

export function AboutTab() {
  return (
    <div className="about-grid">
      <div>
        <p className="about-label">✦ {siteConfig.about.label} ✦</p>
        <h1 className="about-heading">{siteConfig.about.heading}</h1>
        <p className="about-subtitle">{siteConfig.about.subtitle}</p>
        <p className="about-body">{siteConfig.about.description}</p>
        <div className="about-divider" aria-hidden="true" />
        <div className="social-row">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              aria-label={link.label}
              title={link.label}
              className="social-btn"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      <RetroProfileCard />
    </div>
  );
}
