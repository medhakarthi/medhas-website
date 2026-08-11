"use client";

import { AboutTab } from "@/components/browser/AboutTab";
import { BrowserTabs } from "@/components/browser/BrowserTabs";
import { BrowserToolbar } from "@/components/browser/BrowserToolbar";
import { ExperienceTab } from "@/components/browser/ExperienceTab";
import { FloatingDecorations } from "@/components/browser/FloatingDecorations";
import { ProjectsTab } from "@/components/browser/ProjectsTab";
import { SparkleCursor } from "@/components/browser/SparkleCursor";
import { ToolsTab } from "@/components/browser/ToolsTab";
import { type TabId } from "@/data/tabs";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useRef, useState } from "react";

export function RetroBrowser() {
  const [activeTab, setActiveTab] = useState<TabId>("about");
  const [contentKey, setContentKey] = useState(0);
  const reduceMotion = useReducedMotion();
  const browserRef = useRef<HTMLDivElement>(null);

  const handleTabChange = useCallback((tab: TabId) => {
    setActiveTab(tab);
  }, []);

  const handleRefresh = useCallback(() => {
    setContentKey((key) => key + 1);
  }, []);

  return (
    <div className="page-shell">
      <FloatingDecorations />
      <SparkleCursor browserRef={browserRef} />

      <div ref={browserRef} id="portfolio" className="browser-shell">
        <div className="browser-titlebar">
          <div className="win-dots" aria-hidden="true">
            <span className="win-dot" />
            <span className="win-dot" />
            <span className="win-dot" />
          </div>
          <BrowserTabs activeTab={activeTab} onChange={handleTabChange} />
        </div>

        <BrowserToolbar activeTab={activeTab} onRefresh={handleRefresh} />

        <div className="browser-body">
          <div className="browser-page">
            <div className="browser-page-scroll">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeTab}-${contentKey}`}
                  role="tabpanel"
                  id={`panel-${activeTab}`}
                  aria-labelledby={`tab-${activeTab}`}
                  initial={reduceMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={reduceMotion ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {activeTab === "about" && <AboutTab />}
                  {activeTab === "experience" && <ExperienceTab />}
                  {activeTab === "projects" && <ProjectsTab />}
                  {activeTab === "tools" && <ToolsTab />}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const BrowserWindow = RetroBrowser;
