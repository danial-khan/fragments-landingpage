"use client";

import { useEffect } from "react";
import { onCLS, onFCP, onINP, onLCP, onTTFB } from "web-vitals";
import { reportWebVital } from "@/lib/report-web-vitals";

/**
 * Registers Core Web Vitals observers (LCP, INP, CLS, FCP, TTFB).
 * Mount once in the root layout.
 */
export default function WebVitals() {
  useEffect(() => {
    onLCP(reportWebVital);
    onINP(reportWebVital);
    onCLS(reportWebVital);
    onFCP(reportWebVital);
    onTTFB(reportWebVital);
  }, []);

  return null;
}
