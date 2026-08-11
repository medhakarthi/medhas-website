"use client";

import { tabs, type TabId } from "@/data/tabs";
import { cn } from "@/lib/utils";

type BrowserTabsProps = {
  activeTab: TabId;
  onChange: (tab: TabId) => void;
};

function TabHeart() {
  return (
    <svg width="10" height="9" viewBox="0 0 10 9" fill="currentColor" aria-hidden="true">
      <path d="M5 8C5 8 1 5.2 1 3C1 1.6 2 1 3 1C3.8 1 4.4 1.4 5 2.1C5.6 1.4 6.2 1 7 1C8 1 9 1.6 9 3C9 5.2 5 8 5 8Z" />
    </svg>
  );
}

export function BrowserTabs({ activeTab, onChange }: BrowserTabsProps) {
  return (
    <div role="tablist" aria-label="Portfolio sections" className="tablist">
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={isActive}
            aria-controls={`panel-${tab.id}`}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onChange(tab.id)}
            onKeyDown={(event) => {
              const currentIndex = tabs.findIndex((t) => t.id === activeTab);
              let nextId: TabId | null = null;

              if (event.key === "ArrowRight") {
                event.preventDefault();
                nextId = tabs[(currentIndex + 1) % tabs.length].id;
              } else if (event.key === "ArrowLeft") {
                event.preventDefault();
                nextId = tabs[(currentIndex - 1 + tabs.length) % tabs.length].id;
              } else if (event.key === "Home") {
                event.preventDefault();
                nextId = tabs[0].id;
              } else if (event.key === "End") {
                event.preventDefault();
                nextId = tabs[tabs.length - 1].id;
              }

              if (nextId) {
                onChange(nextId);
                requestAnimationFrame(() => {
                  document.getElementById(`tab-${nextId}`)?.focus();
                });
              }
            }}
            className={cn("tab-btn", isActive ? "tab-btn--active" : "tab-btn--idle")}
          >
            {isActive && <TabHeart />}
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
