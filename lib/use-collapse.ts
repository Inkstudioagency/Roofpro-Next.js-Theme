"use client";

import { useLayoutEffect, useRef } from "react";

/**
 * Animates an element's height between 0 and its natural height.
 * Spread the returned props onto the collapsible element; styles live in motion.css ([data-collapse]).
 */
export function useCollapse<T extends HTMLElement = HTMLDivElement>(open: boolean) {
  const ref = useRef<T>(null);
  const first = useRef(true);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (first.current) {
      first.current = false;
      el.style.height = open ? "auto" : "";
      return;
    }

    if (open) {
      el.style.height = `${el.scrollHeight}px`;
      const done = () => {
        el.style.height = "auto";
        el.removeEventListener("transitionend", done);
      };
      el.addEventListener("transitionend", done);
      return () => el.removeEventListener("transitionend", done);
    }

    // from auto -> fixed px -> 0 so the transition has a start value
    el.style.height = `${el.scrollHeight}px`;
    void el.offsetHeight;
    el.style.height = "0px";
  }, [open]);

  return { ref, "data-collapse": open ? "open" : "closed" } as const;
}
