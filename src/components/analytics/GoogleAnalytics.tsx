"use client";

/**
 * GA4 global : scripts chargés avec `next/script` (afterInteractive) pour ne pas bloquer le SSR
 * ni le premier affichage. `usePathname` + Suspense pour les vues de page en navigation client.
 */

import Script from "next/script";
import { Suspense, useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { GA_MEASUREMENT_ID, trackPageView } from "@/lib/gtag";

/** Suit les changements d’URL après la première vue (déjà couverte par gtag config initial). */
function GaRouteListener() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirst = useRef(true);

  useEffect(() => {
    const query = searchParams.toString();
    const path = query ? `${pathname}?${query}` : pathname;

    if (isFirst.current) {
      isFirst.current = false;
      return;
    }

    trackPageView(path);
  }, [pathname, searchParams]);

  return null;
}

export function GoogleAnalytics() {
  return (
    <>
      {/* Chargement asynchrone du bundle gtag.js officiel */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      {/* Initialisation dataLayer + gtag + config (première page vue) */}
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: true });
        `}
      </Script>
      <Suspense fallback={null}>
        <GaRouteListener />
      </Suspense>
    </>
  );
}
