"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  type ReactNode,
} from "react";
import gsap from "gsap";

const OUT_DURATION = 0.16;
const IN_DURATION = 0.36;

/** Shared transition state, module scoped so the observer can reach the page. */
let exitHandler: (() => Promise<void>) | null = null;
let resetHandler: (() => void) | null = null;
let hasNavigated = false;

/** Called by the observer just before router.push(). */
export function markNavigation() {
  hasNavigated = true;
}

/** Runs the fade-out and resolves when the current page is hidden. */
export function playExit() {
  return exitHandler ? exitHandler() : Promise.resolve();
}

/** Safety net: restores the page if a navigation never lands. */
export function resetTransition() {
  resetHandler?.();
}

// Avoids the SSR warning for useLayoutEffect while still running before paint.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function PageTransition({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    // The navbar, CRT overlay and other fixed elements live inside this
    // wrapper, so only opacity is animated on it. Translating it would turn
    // it into a containing block and break `position: fixed`.
    const main = el.querySelector("main");
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // The first render comes pre-rendered from the server. Animating it would
    // flash the finished page and then re-fade it, so only client-side
    // navigations get the entrance.
    const animateIn = hasNavigated && !reduced;

    if (!animateIn) {
      gsap.set(el, { clearProps: "opacity" });
      if (main) gsap.set(main, { clearProps: "transform" });
    }

    const ctx = gsap.context(() => {
      if (!animateIn) return;

      gsap.fromTo(
        el,
        { opacity: 0 },
        {
          opacity: 1,
          duration: IN_DURATION,
          ease: "power2.out",
          overwrite: "auto",
        }
      );

      if (main) {
        gsap.fromTo(
          main,
          { y: 10 },
          {
            y: 0,
            duration: IN_DURATION,
            ease: "power2.out",
            overwrite: "auto",
            clearProps: "transform",
          }
        );
      }
    }, el);

    exitHandler = () =>
      new Promise<void>((resolve) => {
        if (reduced) {
          resolve();
          return;
        }

        const tl = gsap.timeline({ onComplete: () => resolve() });
        tl.to(el, { opacity: 0, duration: OUT_DURATION, ease: "power1.in" }, 0);
        if (main) {
          tl.to(
            main,
            { y: -6, duration: OUT_DURATION, ease: "power1.in" },
            0
          );
        }
      });

    resetHandler = () => {
      gsap.set(el, { opacity: 1 });
      if (main) gsap.set(main, { y: 0 });
    };

    return () => {
      ctx.revert();
      exitHandler = null;
      resetHandler = null;
    };
  }, []);

  return (
    <div ref={ref} data-page-transition>
      {children}
    </div>
  );
}
