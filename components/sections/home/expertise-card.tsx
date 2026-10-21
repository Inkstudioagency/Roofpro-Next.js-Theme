"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useState, type MouseEvent } from "react";
import { ButtonArrow, ButtonLabel } from "@/components/ui/button-label";
import { useCollapse } from "@/lib/use-collapse";

export interface ExpertiseCardProps {
  number: string;
  title: string;
  summary: string;
  image: string;
  href: string;
  last?: boolean;
}

/** Click a card to reveal its summary, link and image; click again to close. */
export function ExpertiseCard({ number, title, summary, image, href, last }: ExpertiseCardProps) {
  const [open, setOpen] = useState(false);
  const summaryCollapse = useCollapse(open);
  const imageCollapse = useCollapse(open);
  const id = useId();

  const onCardClick = (event: MouseEvent) => {
    // links inside the card navigate; the heading button handles keyboard toggling itself
    if ((event.target as HTMLElement).closest("a, button")) return;
    setOpen((v) => !v);
  };

  return (
    <div
      data-reveal="up"
      data-delay="400"
      className={`expertise-card-block${last ? " last" : ""}${open ? " is-open" : ""}`}
      onClick={onCardClick}
    >
      <div className="expertise-card-content-block">
        <div className="expertise-card-number-block">
          <div className="paragraph-small text-color-black text-weight-semi-bold">{number}</div>
        </div>
        <div className="expertise-card-text-block">
          <div className="expertise-card-heading-block">
            <h3 className="heading-style-4">
              <button
                type="button"
                className="button-reset"
                aria-expanded={open}
                aria-controls={id}
                onClick={() => setOpen((v) => !v)}
              >
                {title}
              </button>
            </h3>
          </div>
          <div id={id} className="expertise-card-summary-block" {...summaryCollapse}>
            <p className="paragraph-small top-pd">{summary}</p>
            <div className="expertise-card-button-block">
              <Link className="secondary-button has-icon link-block" href={href} tabIndex={open ? undefined : -1}>
                <ButtonLabel>View Service</ButtonLabel>
                <ButtonArrow />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="expertise-card-image-block" {...imageCollapse}>
        <div className="expertise-card-image-inner">
          <Image src={image} alt="" width={488} height={316} className="expertise-card-image" />
        </div>
      </div>
      <div className="expertise-card-icon-block" aria-hidden="true">
        <div className="expertise-card-icon">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path
              d="M28.333 11.666L11.6663 28.3327"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.333 11.666H28.333V26.666"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
