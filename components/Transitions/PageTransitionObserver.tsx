"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  markNavigation,
  playExit,
  resetTransition,
} from "./PageTransition";

const SAFETY_TIMEOUT_MS = 1500;

function resolveDestination(anchor: HTMLAnchorElement) {
  // Let the browser own new tabs, downloads, external links and mail/tel.
  if (anchor.target && anchor.target !== "_self") return null;
  if (anchor.hasAttribute("download")) return null;

  const href = anchor.getAttribute("href");
  if (!href || href.startsWith("#")) return null;
  if (!href.startsWith("/")) return null;

  const url = new URL(href, window.location.href);
  if (url.origin !== window.location.origin) return null;

  // Same route (anchor links, filters, etc.) is not a page change.
  if (url.pathname === window.location.pathname) return null;

  return url.pathname + url.search + url.hash;
}

/**
 * Intercepts internal link clicks so the page can fade out before the App
 * Router swaps content. Back/forward are deliberately untouched: the router
 * updates natively and only the entrance animation plays.
 */
export default function PageTransitionObserver() {
  const router = useRouter();
  const pathname = usePathname();
  const busy = useRef(false);
  const safety = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented) return;
      if (
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target as Element | null;
      const anchor = target?.closest?.("a");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      if (busy.current) return;

      const destination = resolveDestination(anchor);
      if (!destination) return;

      event.preventDefault();
      busy.current = true;
      markNavigation();

      void playExit().then(() => {
        router.push(destination);

        // If the route never lands (offline, failed chunk), don't leave the
        // user staring at a transparent page.
        safety.current = setTimeout(() => {
          busy.current = false;
          resetTransition();
        }, SAFETY_TIMEOUT_MS);
      });
    };

    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      clearTimeout(safety.current);
    };
  }, [router]);

  // A completed navigation releases the guard.
  useEffect(() => {
    busy.current = false;
    clearTimeout(safety.current);
  }, [pathname]);

  return null;
}
