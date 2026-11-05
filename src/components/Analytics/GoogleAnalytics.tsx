"use client";

import Script from "next/script";
import { useEffect } from "react";
import { GA_MEASUREMENT_ID, trackEvent } from "@/lib/analytics";

// Loads GA4 and records taps on phone and email links anywhere on the site.
export default function GoogleAnalytics() {
  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest?.("a[href^='tel:'], a[href^='mailto:']") as HTMLAnchorElement | null;
      if (!link) return;

      const href = link.getAttribute("href") || "";
      const page = window.location.pathname;

      if (href.startsWith("tel:")) {
        trackEvent("phone_call_click", { phone_number: href.slice(4), page_path: page });
      } else {
        trackEvent("email_click", { email_address: href.slice(7).split("?")[0], page_path: page });
      }
    };

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
      </Script>
    </>
  );
}
