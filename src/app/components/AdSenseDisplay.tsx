"use client";

import { useEffect, useRef } from "react";
import { ADSENSE_CLIENT_ID } from "../utils/adsenseConstants";

type Props = {
  /** Numeric ad unit slot from AdSense → Ads → By ad unit */
  slot: string;
  className?: string;
};

/**
 * One responsive display unit. Create units in AdSense and set env slots, e.g.
 * NEXT_PUBLIC_ADSENSE_SLOT_LANDING, NEXT_PUBLIC_ADSENSE_SLOT_FOOTER,
 * NEXT_PUBLIC_ADSENSE_SLOT_USER_PANEL. Reuse this component in your main app shell
 * for dashboard/sidebar ads with the user-panel slot.
 */
export default function AdSenseDisplay({ slot, className }: Props) {
  const pushedForSlot = useRef<string | null>(null);

  useEffect(() => {
    if (!slot) return;
    if (pushedForSlot.current === slot) return;
    pushedForSlot.current = slot;
    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch {
      pushedForSlot.current = null;
    }
  }, [slot]);

  if (!slot) return null;

  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: "block", textAlign: "center" }}
        data-ad-client={ADSENSE_CLIENT_ID}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
