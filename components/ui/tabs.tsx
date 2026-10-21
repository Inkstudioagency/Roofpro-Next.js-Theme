"use client";

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

export interface TabItem {
  label: string;
  panel: ReactNode;
}

interface TabsProps {
  items: TabItem[];
  /** design-system prefix, e.g. "our-purpose" -> our-purpose-tab-block / -tab-menu / -tab-link / ... */
  prefix: string;
  icon?: ReactNode;
}

/** Accessible tabs (arrow keys move between tabs) using the template's tab markup. */
export function Tabs({ items, prefix, icon }: TabsProps) {
  const [active, setActive] = useState(0);
  const id = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (event: KeyboardEvent) => {
    const delta = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[event.key];
    if (!delta) return;
    event.preventDefault();
    const next = (active + delta + items.length) % items.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className={`${prefix}-tab-block tabs`}>
      <div className={`${prefix}-tab-menu tab-menu`} role="tablist" onKeyDown={onKeyDown}>
        {items.map((item, i) => (
          <button
            key={item.label}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`${id}-tab-${i}`}
            aria-selected={i === active}
            aria-controls={`${id}-panel-${i}`}
            tabIndex={i === active ? 0 : -1}
            className={`${prefix}-tab-link link-block tab-link button-reset${i === active ? " is-current" : ""}`}
            onClick={() => setActive(i)}
          >
            <div className="tab-link-text">{item.label}</div>
            {icon && <div className="tab-link-icon">{icon}</div>}
          </button>
        ))}
      </div>
      <div className={`${prefix}-tab-content tab-content`}>
        {items.map((item, i) => (
          <div
            key={item.label}
            role="tabpanel"
            id={`${id}-panel-${i}`}
            aria-labelledby={`${id}-tab-${i}`}
            hidden={i !== active}
            className={`${prefix}-tab-pane tab-pane${i === active ? " is-active" : ""}`}
          >
            {item.panel}
          </div>
        ))}
      </div>
    </div>
  );
}
