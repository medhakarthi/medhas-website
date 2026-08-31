import { RetroProfileCard } from "@/components/browser/RetroProfileCard";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { siteConfig } from "@/data/site";
import Image from "next/image";
import type { ReactNode } from "react";

const socialLinks: {
  label: string;
  href: string;
  icon: ReactNode;
}[] = [
  {
    label: "GitHub",
    href: siteConfig.github,
    icon: <GitHubIcon size={13} />,
  },
  {
    label: "LinkedIn",
    href: siteConfig.linkedin,
    icon: <LinkedInIcon size={13} />,
  },
];

function PixelWaveHand() {
  return (
    <Image
      src="/wave-hand.png"
      alt=""
      width={175}
      height={192}
      unoptimized
      className="pixel-wave"
      aria-hidden="true"
    />
  );
}

export function AboutTab() {
  return (
    <div className="about-grid">
      <div>
        <p className="about-label">✦ {siteConfig.about.label} ✦</p>
        <h1 className="about-heading">
          {siteConfig.about.heading}
          <PixelWaveHand />
        </h1>
        <p className="about-subtitle">{siteConfig.about.subtitle}</p>
        <p className="about-body">{siteConfig.about.description}</p>
        <div className="about-divider" aria-hidden="true" />
        <div className="social-row">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
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
