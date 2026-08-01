"use client";

import { useReportWebVitals } from "next/web-vitals";

/**
 * RUM de Core Web Vitals (LCP, INP, CLS, etc.).
 * - Consola en desarrollo.
 * - gtag si NEXT_PUBLIC_GA_MEASUREMENT_ID.
 * - sendBeacon si NEXT_PUBLIC_ANALYTICS_ENDPOINT.
 */
export default function WebVitals() {
  useReportWebVitals((metric) => {
    const payload = {
      name: metric.name,
      value: metric.value,
      id: metric.id,
      label: metric.label,
    };

    if (process.env.NODE_ENV === "development") {
      console.info("[web-vital]", payload);
    }

    const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    if (gaId && typeof window !== "undefined") {
      const w = window as Window & {
        gtag?: (...args: unknown[]) => void;
      };
      w.gtag?.("event", metric.name, {
        value: Math.round(
          metric.name === "CLS" ? metric.value * 1000 : metric.value
        ),
        event_label: metric.id,
        non_interaction: true,
      });
    }

    const endpoint = process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT;
    if (endpoint && typeof navigator !== "undefined") {
      const body = JSON.stringify(payload);
      if (navigator.sendBeacon) {
        navigator.sendBeacon(endpoint, body);
      } else {
        void fetch(endpoint, {
          method: "POST",
          body,
          keepalive: true,
          headers: { "Content-Type": "application/json" },
        });
      }
    }
  });

  return null;
}
