export type AnalyticsPayload = {
  event: string;
  category?: string;
  label?: string;
  value?: number;
};

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(payload: AnalyticsPayload) {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);

  if (typeof window.gtag === "function") {
    window.gtag("event", payload.event, {
      event_category: payload.category,
      event_label: payload.label,
      value: payload.value,
    });
  }
}
