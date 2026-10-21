import Link from "next/link";
import { EmptyState } from "@/components/ui/empty-state";
import { Chevron, Slider } from "@/components/ui/slider";
import { StrapiImage } from "@/components/ui/strapi-image";
import { getWorks } from "@/lib/strapi/queries";
import type { Work } from "@/lib/strapi/types";

interface WorkListProps {
  /** `page` shows every project (our-work page); `home` shows the first five */
  variant?: "home" | "page";
}

/** "Our Work Showcase": a 2-up then 3-up grid on desktop, a slider on mobile. */
export async function WorkList({ variant = "home" }: WorkListProps) {
  const works = await getWorks();
  const shown = variant === "home" ? works.slice(0, 5) : works;
  const [featured, rest] = [shown.slice(0, 2), shown.slice(2)];

  return (
    <section className={`section_our-work${variant === "page" ? " is-2" : ""}`}>
      <div className="section-gap">
        <div className="container-main">
          <div className="our-work-wrapper">
            <div className="section-heading-block bottom-space-between">
              <div data-reveal="up" className="section-title-block max-width-300">
                <h2 className="heading-style-2">
                  Our Work <span className="heading-style-2-ht">Showcase</span>
                </h2>
              </div>
              <div data-reveal="up" data-delay="200" className="section-summary-block max-width-400">
                <p className="paragraph-small">Browse our portfolio of completed roofing projects across Brisbane</p>
              </div>
            </div>

            {shown.length === 0 ? (
              <EmptyState />
            ) : (
              <>
                <div className="our-work-content-block is-desktop">
                  <div className="our-work-collection-block">
                    <div className="our-work-collection-list" role="list">
                      {featured.map((work) => (
                        <WorkCard key={work.documentId} work={work} />
                      ))}
                    </div>
                  </div>
                  {rest.length > 0 && (
                    <div className="our-work-collection-block top-gap">
                      <div className="our-work-collection-list is-2" role="list">
                        {rest.map((work) => (
                          <WorkCard key={work.documentId} work={work} reveal={variant === "home"} />
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="our-work-content-block is-mobile">
                  <Slider className="our-work-slider-block slider" label="Our work">
                    <div data-reveal="up" data-delay="400" className="our-work-slider-mask slider-mask">
                      {shown.map((work) => (
                        <div key={work.documentId} className="our-work-slide-block slide">
                          <div className="our-work-collection-block">
                            <div className="our-work-collection-list" role="list">
                              <WorkCard work={work} reveal={false} />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div
                      className="our-work-slider-arrow left slider-arrow slider-arrow-left"
                      role="button"
                      tabIndex={0}
                      aria-label="previous slide"
                    >
                      <div className="slider-icon-left">
                        <Chevron direction="left" />
                      </div>
                    </div>
                    <div
                      className="our-work-slider-arrow right slider-arrow slider-arrow-right"
                      role="button"
                      tabIndex={0}
                      aria-label="next slide"
                    >
                      <div className="slider-icon-right">
                        <Chevron direction="right" />
                      </div>
                    </div>
                    <div className="display-none slider-nav" />
                  </Slider>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkCard({ work, reveal = true }: { work: Work; reveal?: boolean }) {
  const href = `/our-work/${work.slug}`;
  return (
    <div className="our-work-collection-item" role="listitem">
      <div {...(reveal ? { "data-reveal": "up", "data-delay": "400" } : {})} className="our-work-item-block">
        <Link className="our-work-item-image-block link-block" href={href} tabIndex={-1} aria-hidden="true">
          <StrapiImage
            media={work.thumbnail}
            className="our-work-item-thumbnail"
            alt=""
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </Link>
        <div className="our-work-item-content-block">
          <div className="our-work-item-text-block">
            {work.tag && <div className="our-work-item-tag">{work.tag}</div>}
            <Link className="our-work-item-title-block link-block" href={href}>
              <h3 className="label-xlarge hover line-clamp-2">{work.title}</h3>
            </Link>
            <p>{work.cardDescription}</p>
          </div>
          <div className="our-work-item-button-block">
            <Link className="link-button link-block" href={href} aria-label={`Read more about ${work.title}`}>
              <div className="button-text lg">Read More</div>
              <div className="link-button-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12H19"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 5L19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
