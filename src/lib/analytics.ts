// Google Analytics 4 — Crown Security Agencies (crownsecuritysolutions.com)
// The Measurement ID is public by design (it appears in every page's HTML).
export const GA_MEASUREMENT_ID = "G-6E1XTNHJKR";

type GtagParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params: GtagParams = {}) {
  if (typeof window === "undefined" || !GA_MEASUREMENT_ID || !window.gtag) return;
  window.gtag("event", name, params);
}
