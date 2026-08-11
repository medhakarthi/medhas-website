"use client";

import { tabs, type TabId } from "@/data/tabs";
import { ArrowLeft, ArrowRight, Lock, MoreVertical, RefreshCw, Star } from "lucide-react";

type BrowserToolbarProps = {
  activeTab: TabId;
  onRefresh: () => void;
};

export function BrowserToolbar({ activeTab, onRefresh }: BrowserToolbarProps) {
  const path = tabs.find((tab) => tab.id === activeTab)?.path ?? "medha.dev/about";

  return (
    <div className="browser-toolbar">
      <button type="button" aria-label="Back" disabled className="tb-btn">
        <ArrowLeft className="size-3.5" strokeWidth={2.5} aria-hidden="true" />
      </button>
      <button type="button" aria-label="Forward" disabled className="tb-btn">
        <ArrowRight className="size-3.5" strokeWidth={2.5} aria-hidden="true" />
      </button>
      <button type="button" aria-label="Refresh" onClick={onRefresh} className="tb-btn">
        <RefreshCw className="size-3.5" strokeWidth={2.5} aria-hidden="true" />
      </button>

      <div className="address-bar" aria-label="Address bar">
        <Lock className="size-3 shrink-0 text-line" strokeWidth={2.5} aria-hidden="true" />
        <span className="min-w-0 flex-1">{path}</span>
        <Star className="size-3 shrink-0 text-line-soft" strokeWidth={2.5} aria-hidden="true" />
      </div>

      <button type="button" aria-label="Browser menu" className="tb-btn">
        <MoreVertical className="size-3.5" strokeWidth={2.5} aria-hidden="true" />
      </button>
    </div>
  );
}
