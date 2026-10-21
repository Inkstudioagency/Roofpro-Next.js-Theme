"use client";

import { useId, useState } from "react";
import { pressable } from "@/lib/pressable";
import { useCollapse } from "@/lib/use-collapse";

interface FaqItemProps {
  question: string;
  answer: string;
  delay: number;
}

export function FaqItem({ question, answer, delay }: FaqItemProps) {
  const [open, setOpen] = useState(false);
  const collapse = useCollapse(open);
  const id = useId();

  return (
    <div data-reveal="up" data-delay={delay || undefined} className={`faq-dropdown-block${open ? " is-open" : ""}`}>
      <div
        className="faq-dropdown-toggle"
        aria-expanded={open}
        aria-controls={id}
        {...pressable(() => setOpen((v) => !v))}
      >
        <div className="faq-dropdown-title-block">
          <div className="label-medium">{question}</div>
          <div className="faq-icon-block" aria-hidden="true">
            <div className="faq-icon-liner is-1" />
            <div className="faq-icon-liner is-2" />
          </div>
        </div>
      </div>
      <div id={id} className="faq-dropdown-content" role="region">
        <div className="faq-dropdown-ans-block" {...collapse}>
          <p className="paragraph-small title-text-color top-pd">{answer}</p>
        </div>
      </div>
      <div className="faq-dropdown-liner" />
    </div>
  );
}
