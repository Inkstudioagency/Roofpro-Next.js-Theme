"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const OUT_CUBIC = "cubic-bezier(0.215, 0.61, 0.355, 1)";
const OUT_QUART = "cubic-bezier(0.165, 0.84, 0.44, 1)";
const IN_OUT_CUBIC = "cubic-bezier(0.645, 0.045, 0.355, 1)";

type Play = (el: HTMLElement, delay: number) => void;

const run = (el: Element, keyframes: Keyframe[], options: KeyframeAnimationOptions) =>
  el.animate(keyframes, { fill: "forwards", ...options });

/** Entrance animations, keyed by data-reveal value. Start states live in motion.css. */
const REVEALS: Record<string, Play> = {
  up: (el, delay) => {
    run(el, [{ opacity: 0 }, { opacity: 1 }], { duration: 400, delay, easing: OUT_CUBIC });
    run(el, [{ transform: "translate3d(0, 80px, 0)" }, { transform: "none" }], {
      duration: 800,
      delay,
      easing: OUT_CUBIC,
    });
    run(el, [{ filter: "blur(15px)" }, { filter: "blur(0)" }], { duration: 1000, delay, easing: OUT_CUBIC });
  },
  down: (el) =>
    run(el, [{ transform: "translate3d(0, -100px, 0)" }, { transform: "none" }], { duration: 800, easing: OUT_CUBIC }),
  right: (el, delay) =>
    run(
      el,
      [
        { opacity: 0, transform: "translate3d(100px, 0, 0)" },
        { opacity: 1, transform: "none" },
      ],
      { duration: 1000, delay, easing: OUT_QUART },
    ),
};

/** In-view effects for [data-inview] elements, keyed by class name. */
const EFFECTS: Record<string, Play> = {
  "hero-image": (el) =>
    run(el, [{ transform: "scale(1.1)" }, { transform: "none" }], { duration: 1000, easing: OUT_CUBIC }),
  "image-overlay": (el) =>
    run(el, [{ transform: "scale3d(1, 1, 1)" }, { transform: "scale3d(1, 0, 1)" }], {
      duration: 1000,
      easing: IN_OUT_CUBIC,
    }),
  "liner-border-block": (el) =>
    run(el, [{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }], {
      duration: 600,
      delay: 400,
      easing: IN_OUT_CUBIC,
    }),
  "about-stat-number-block": (el) => {
    el.querySelectorAll(".counter-number-block.down").forEach((c) =>
      run(c, [{ transform: "translateY(100px)" }, { transform: "none" }], {
        duration: 1800,
        delay: 200,
        easing: "ease",
      }),
    );
    el.querySelectorAll(".counter-number-block.up").forEach((c) =>
      run(c, [{ transform: "translateY(-100px)" }, { transform: "none" }], {
        duration: 1800,
        delay: 200,
        easing: "ease",
      }),
    );
  },
  "logo-content-block": (el) =>
    el.querySelectorAll(".sponsor-logo-row").forEach((row) =>
      row.animate([{ transform: "translateX(0)" }, { transform: "translateX(-100%)" }], {
        duration: 50000,
        iterations: Infinity,
      }),
    ),
};

const SELECTOR = "[data-reveal], [data-inview]";

function play(el: HTMLElement) {
  const reveal = el.dataset.reveal;
  if (reveal) REVEALS[reveal]?.(el, Number(el.dataset.delay ?? 0));
  if (el.dataset.inview !== undefined) {
    for (const cls of el.classList) EFFECTS[cls]?.(el, 0);
  }
}

/**
 * Plays the template's scroll-triggered animations once each element scrolls 5% into view.
 * Uses the Web Animations API so the DOM React hydrates is never modified.
 */
export function InView() {
  const pathname = usePathname();

  useEffect(() => {
    // switches off the reveal failsafe in a11y.css (an attribute React does not manage)
    document.documentElement.dataset.motion = "ready";

    // motion.css shows everything in its final state for reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const seen = new WeakSet<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.unobserve(entry.target);
          play(entry.target as HTMLElement);
        }
      },
      { rootMargin: "0px 0px -5% 0px" },
    );

    const observe = (el: Element) => {
      if (seen.has(el)) return;
      seen.add(el);
      observer.observe(el);
    };
    const observeAll = (root: ParentNode) => root.querySelectorAll(SELECTOR).forEach(observe);
    observeAll(document);

    // streamed and client-rendered markup can arrive after this effect runs
    const mutations = new MutationObserver((records) => {
      for (const record of records) {
        record.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node.matches(SELECTOR)) observe(node);
          observeAll(node);
        });
      }
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, [pathname]);

  return null;
}
