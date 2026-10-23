"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let lenis: Lenis | null = null;

/** Shared instance, so navigation can drive the same scroll animation. */
export function getLenis() {
  return lenis;
}

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const instance = new Lenis({
      // lerp is the frame-rate independent glide. When it is set, Lenis
      // ignores duration/easing, so the old 1.2s easing config was dead code.
      lerp: 0.09,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
      // Native touch inertia feels better than emulating it on mobile.
      syncTouch: false,
      // Driven by GSAP's ticker below so scroll and reveal animations share
      // exactly one clock.
      autoRaf: false,
      stopInertiaOnNavigate: true,
      // Lenis forces 1:1 scrolling when the user prefers reduced motion.
      respectReducedMotion: true,
    });

    lenis = instance;

    const raf = (time: number) => instance.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Keep ScrollTrigger in step with the smoothed position instead of the
    // native scroll event, which trails by a frame.
    const syncScrollTrigger = () => ScrollTrigger.update();
    instance.on("scroll", syncScrollTrigger);

    return () => {
      instance.off("scroll", syncScrollTrigger);
      gsap.ticker.remove(raf);
      gsap.ticker.lagSmoothing(500, 33);
      instance.destroy();
      lenis = null;
    };
  }, []);

  return <>{children}</>;
}
