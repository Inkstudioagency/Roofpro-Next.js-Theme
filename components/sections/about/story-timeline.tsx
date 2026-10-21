"use client";

import { useEffect, useId, useRef, useState } from "react";
import { pressable } from "@/lib/pressable";
import { useCollapse } from "@/lib/use-collapse";

export interface StoryPoint {
  year: string;
  title: string;
  body: string[];
}

const GREY = [217, 217, 217];
const PRIMARY = [22, 92, 253];
/** scroll progress (0-1) at which each pointer finishes turning blue; the line grows from 0.2 to 0.6 */
const STOPS = [0, 0.2, 0.3, 0.45, 0.6];

const mix = (t: number) => `rgb(${GREY.map((g, i) => Math.round(g + (PRIMARY[i] - g) * t)).join(" ")})`;
const clamp = (v: number) => Math.min(1, Math.max(0, v));

/** Year-by-year story; the dashed timeline fills and the pointers light up as you scroll past it. */
export function StoryTimeline({ points }: { points: StoryPoint[] }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    const wrapper = el?.closest<HTMLElement>(".our-story-wrapper");
    if (!el || !wrapper) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = wrapper.getBoundingClientRect();
      // 0 when the wrapper's top enters the bottom of the viewport, 1 when its bottom leaves the top
      const progress = clamp((window.innerHeight - rect.top) / (window.innerHeight + rect.height));
      el.style.setProperty("--story-line", String(clamp((progress - 0.2) / 0.4)));
      el.querySelectorAll<HTMLElement>(".our-story-pointer-block").forEach((pointer, i) => {
        const from = STOPS[i] ?? STOPS.at(-2)!;
        const to = STOPS[i + 1] ?? STOPS.at(-1)!;
        const color = mix(clamp((progress - from) / (to - from)));
        pointer.style.borderColor = color;
        (pointer.firstElementChild as HTMLElement | null)?.style.setProperty("background-color", color);
      });
    };
    const onScroll = () => (frame ||= requestAnimationFrame(update));
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={root} className="our-story-content-block">
      {points.map((point, i) => (
        <StoryItem key={point.year} point={point} index={i + 1} />
      ))}
      <div className="our-story-liner-block" aria-hidden="true">
        <div className="our-story-ht-liner" style={{ height: "calc(var(--story-line, 0) * 100%)" }} />
      </div>
    </div>
  );
}

function StoryItem({ point, index }: { point: StoryPoint; index: number }) {
  const [open, setOpen] = useState(false);
  const collapse = useCollapse(open);
  const id = useId();

  return (
    <div className="our-story-point-block">
      <div
        className="our-story-point-heading-block"
        aria-expanded={open}
        aria-controls={id}
        {...pressable(() => setOpen((v) => !v))}
      >
        <div className="our-story-point-title-block">
          <div className="paragraph-large text-weight-semi-bold title-text-color">{point.year}</div>
          <p className="paragraph-small title-text-color text-weight-semi-bold">{point.title}</p>
        </div>
        <div className="our-story-point-icon-block" aria-hidden="true">
          <div className="our-story-point-icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path
                d="M28.3334 11.667L11.6667 28.3337"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.3334 11.667H28.3334V26.667"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className={`our-story-pointer-block is-${index}`} aria-hidden="true">
          <div className={`our-story-pointer is-${index}`} />
        </div>
      </div>
      <div id={id} className="our-story-point-summary-block" {...collapse}>
        <p className="paragraph-small top-pd-main">
          {point.body.map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
