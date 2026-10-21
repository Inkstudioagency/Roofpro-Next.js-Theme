"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

interface SliderProps {
  className: string;
  /** accessible name for the carousel region */
  label: string;
  children: ReactNode;
}

/**
 * Carousel matching the original template behaviour: slides sit side by side inside
 * `.slider-mask`, arrows (`.slider-arrow-left/right`) page through them (looping),
 * and `.slider-nav` gets one dot per page. Swipe is supported on touch devices.
 */
export function Slider({ className, label, children }: SliderProps) {
  const root = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState<number[]>([0]);

  const slides = useCallback(
    () => Array.from(root.current?.querySelectorAll<HTMLElement>(":scope > .slider-mask > .slide") ?? []),
    [],
  );

  // Work out where each page starts: a new page begins whenever the next slide
  // would no longer fit inside the visible mask.
  const measure = useCallback(() => {
    const mask = root.current?.querySelector<HTMLElement>(":scope > .slider-mask");
    const items = slides();
    if (!mask || !items.length) return;
    for (const el of items) el.style.transform = "";
    const maskWidth = mask.clientWidth;
    const base = items[0].offsetLeft;
    const lastEdge = items.at(-1)!.offsetLeft - base + items.at(-1)!.offsetWidth;
    const maxOffset = Math.max(0, lastEdge - maskWidth);
    const starts = [0];
    for (const el of items) {
      const left = el.offsetLeft - base;
      if (left + el.offsetWidth - starts.at(-1)! > maskWidth + 1 && starts.at(-1)! < maxOffset) {
        starts.push(Math.min(left, maxOffset));
      }
    }
    setPages(starts);
    setPage((p) => Math.min(p, starts.length - 1));
  }, [slides]);

  useEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (root.current) ro.observe(root.current);
    return () => ro.disconnect();
  }, [measure]);

  useEffect(() => {
    const offset = pages[page] ?? 0;
    const items = slides();
    const maskWidth = root.current?.querySelector<HTMLElement>(":scope > .slider-mask")?.clientWidth ?? 0;
    const base = items[0]?.offsetLeft ?? 0;
    for (const el of items) {
      el.style.transition = "transform 500ms ease";
      el.style.transform = offset ? `translateX(${-offset}px)` : "";
      // slides outside the visible page can't be focused or read by screen readers
      const left = el.offsetLeft - base - offset;
      el.inert = maskWidth > 0 && (left < -1 || left + el.offsetWidth > maskWidth + 1);
    }
  }, [page, pages, slides]);

  const go = useCallback((delta: number) => setPage((p) => (p + delta + pages.length) % pages.length), [pages.length]);

  // wire up the server-rendered arrows and dots
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.closest(".slider-arrow-left")) go(-1);
      else if (target.closest(".slider-arrow-right")) go(1);
      else {
        const dot = target.closest<HTMLElement>("[data-slider-dot]");
        if (dot) setPage(Number(dot.dataset.sliderDot));
      }
    };
    const onKey = (event: KeyboardEvent) => {
      const arrow = (event.target as HTMLElement).closest(".slider-arrow");
      if (!arrow || (event.key !== "Enter" && event.key !== " ")) return;
      event.preventDefault();
      go(arrow.classList.contains("slider-arrow-left") ? -1 : 1);
    };
    let startX: number | null = null;
    const onTouchStart = (event: TouchEvent) => (startX = event.touches[0].clientX);
    const onTouchEnd = (event: TouchEvent) => {
      if (startX === null) return;
      const dx = event.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
      startX = null;
    };
    el.addEventListener("click", onClick);
    el.addEventListener("keydown", onKey);
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd);
    return () => {
      el.removeEventListener("click", onClick);
      el.removeEventListener("keydown", onKey);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [go]);

  // render the dot navigation into .slider-nav
  useEffect(() => {
    const nav = root.current?.querySelector<HTMLElement>(":scope > .slider-nav");
    if (!nav) return;
    nav.replaceChildren(
      ...pages.map((_, i) => {
        const dot = document.createElement("div");
        dot.className = `slider-dot${i === page ? " is-active" : ""}`;
        dot.dataset.sliderDot = String(i);
        dot.setAttribute("role", "button");
        dot.setAttribute("aria-label", `Show slide ${i + 1} of ${pages.length}`);
        return dot;
      }),
    );
  }, [pages, page]);

  return (
    <div ref={root} className={className} role="region" aria-roledescription="carousel" aria-label={label}>
      {children}
    </div>
  );
}

interface SliderArrowProps {
  direction: "left" | "right";
  className: string;
  iconClassName?: string;
}

export function SliderArrow({ direction, className, iconClassName }: SliderArrowProps) {
  return (
    <div
      className={`${className} slider-arrow slider-arrow-${direction}`}
      role="button"
      tabIndex={0}
      aria-label={direction === "left" ? "previous slide" : "next slide"}
    >
      <div className={`${iconClassName ? `${iconClassName} ` : ""}slider-icon-${direction}`}>
        <Chevron direction={direction} />
      </div>
    </div>
  );
}

export function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d={direction === "left" ? "M10 3 5 8l5 5" : "M6 3l5 5-5 5"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
