import type { Metric } from "web-vitals";

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, string | number | boolean | undefined>,
    ) => void;
  }
}

/**
 * Sends Core Web Vitals to optional sinks:
 * - `NEXT_PUBLIC_WEB_VITALS_ENDPOINT`: same-origin POST (JSON) or sendBeacon
 * - `window.gtag` when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set (load GA separately)
 * - `NODE_ENV === "development"`: console.debug
 */
export function reportWebVital(metric: Metric): void {
  if (process.env.NODE_ENV === "development") {
    console.debug(`[web-vitals] ${metric.name}`, {
      value: metric.value,
      rating: metric.rating,
      id: metric.id,
      delta: metric.delta,
    });
  }

  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  if (typeof window !== "undefined" && gaId && typeof window.gtag === "function") {
    const value =
      metric.name === "CLS"
        ? Math.round(metric.value * 1000)
        : Math.round(metric.value);
    window.gtag("event", metric.name, {
      event_category: "Web Vitals",
      event_label: metric.id,
      value,
      non_interaction: true,
    });
  }

  const endpoint = process.env.NEXT_PUBLIC_WEB_VITALS_ENDPOINT;
  if (!endpoint || typeof navigator === "undefined") return;

  const body = JSON.stringify({
    name: metric.name,
    value: metric.value,
    rating: metric.rating,
    id: metric.id,
    delta: metric.delta,
    navigationType: metric.navigationType,
  });

  try {
    if (navigator.sendBeacon) {
      const ok = navigator.sendBeacon(
        endpoint,
        new Blob([body], { type: "application/json" }),
      );
      if (ok) return;
    }
  } catch {
    /* fall through to fetch */
  }

  void fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => {});
}
