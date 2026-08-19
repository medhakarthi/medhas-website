import { siteConfig } from "@/data/site";
import Image from "next/image";

export function RetroProfileCard() {
  return (
    <aside className="profile-exe">
      <div className="profile-titlebar">
        <span>PROFILE.EXE</span>
        <div className="profile-ctrls" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
      </div>

      <div className="profile-body">
        <div className="profile-grid" aria-hidden="true" />
        <span className="pixel-sparkle" style={{ top: 14, left: 18 }}>
          ✦
        </span>
        <span className="pixel-sparkle" style={{ top: 28, right: 22, animationDelay: "0.8s" }}>
          ✦
        </span>
        <span className="pixel-sparkle" style={{ bottom: 58, left: 28, animationDelay: "1.4s" }}>
          ✦
        </span>

        <div className="profile-avatar">
          <Image
            src="/medha.png"
            alt={siteConfig.name}
            fill
            sizes="180px"
            priority
            className="profile-avatar-img"
          />
        </div>
        <h2 className="profile-name">{siteConfig.name}</h2>
        <p className="profile-role">CS @ Waterloo</p>
        <p className="profile-status">✧ {siteConfig.about.status} ✧</p>
      </div>
    </aside>
  );
}
