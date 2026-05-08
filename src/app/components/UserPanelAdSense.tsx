"use client";

import AdSenseDisplay from "./AdSenseDisplay";

const slot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_USER_PANEL ?? "";

/**
 * Sidebar-style unit (sticky on wide screens). Used on pricing here; copy this
 * component into your authenticated user-panel app and mount it in the layout
 * sidebar or secondary column with the same env var.
 */
export default function UserPanelAdSense() {
  if (!slot) return null;

  return (
    <div className="frag-card p-3 shadow-sm">
      <p className="mb-2 text-center text-[9px] font-bold uppercase tracking-[0.18em] text-textMuted sm:text-[10px]">
        Advertisement
      </p>
      <AdSenseDisplay
        slot={slot}
        className="min-h-[280px] w-full max-w-[300px] overflow-hidden"
      />
    </div>
  );
}
