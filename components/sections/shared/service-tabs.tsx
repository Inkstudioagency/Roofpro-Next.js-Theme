"use client";

import Link from "next/link";
import { useState } from "react";
import { StrapiImage } from "@/components/ui/strapi-image";
import { pressable } from "@/lib/pressable";
import type { Service } from "@/lib/strapi/types";

/** Service titles on the left; the selected service's images and summary show on the right. */
export function ServiceTabs({ services }: { services: Service[] }) {
  const [active, setActive] = useState(0);
  const last = services.length - 1;

  return (
    <>
      {services.map((service, i) => {
        const n = i === last && i > 0 ? 4 : Math.min(i + 1, 3);
        const selected = i === active;
        const panelId = `service-panel-${service.slug}`;
        return (
          <div key={service.documentId} className="service-collection-block">
            <div className="service-collection-list" role="list">
              <div className="service-collection-item" role="listitem">
                <div className="service-item-block">
                  <div
                    className={`service-item-title-block is-${n}${selected ? " is-active" : ""}`}
                    aria-expanded={selected}
                    aria-controls={panelId}
                    {...pressable(() => setActive(i))}
                  >
                    <div className="service-title-text-block">
                      <div className="service-item-icon-block">
                        <StrapiImage media={service.icon} className={`service-item-icon is-${n}`} alt="" />
                        <StrapiImage media={service.hoverIcon} className={`service-hover-icon is-${n}`} alt="" />
                      </div>
                      <h3 className={`label-medium is-${n}`}>{service.title}</h3>
                    </div>
                    <div className="service-title-icon-block" aria-hidden="true">
                      <div className={`service-title-icon is-${n}`}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                          <path
                            d="M22.6663 9.33398L9.33301 22.6673"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10.667 9.33398H22.667V21.334"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div id={panelId} className={`service-item-content-block is-${n}${selected ? " is-active" : ""}`}>
                    <div className="service-item-image-block">
                      {[service.thumbnailOne, service.thumbnailTwo].map((media, k) => (
                        <div key={k} className={`service-item-single-image-block is-${k + 1}`}>
                          <StrapiImage
                            media={media}
                            className="service-item-single-image"
                            sizes="(max-width: 767px) 50vw, 300px"
                          />
                          {i === 0 && <div data-inview="" className="image-overlay" />}
                        </div>
                      ))}
                    </div>
                    <div className="service-item-text-block">
                      <h3 className="heading-style-5">{service.title}</h3>
                      <p className="paragraph-small">{service.description}</p>
                      <Link className="service-link-button" href={`/services/${service.slug}`}>
                        View Service
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
