import Link from "next/link";
import { BlocksRenderer } from "@/components/ui/blocks-renderer";
import { ButtonLabel } from "@/components/ui/button-label";
import type { Work } from "@/lib/strapi/types";

export function WorkDetails({ work }: { work: Work }) {
  return (
    <section className="section_project-details">
      <div className="section-gap">
        <div className="container-main">
          <div className="project-details-wrapper">
            <div data-reveal="up" data-delay="400" className="project-details-cta-block">
              <div className="project-details-cta-text-block">
                <h2 className="heading-style-2 text-color-white h3">
                  Ready to Get <span className="heading-style-2-wht">Started?</span>
                </h2>
                <p className="paragraph-small text-color-white">
                  Contact us today for a free consultation and quote for your residential roofing project.
                </p>
              </div>
              <div className="project-details-cta-button-block">
                <Link className="white-button is-2 link-block" href="/contact">
                  <ButtonLabel>Get Free Inspection</ButtonLabel>
                </Link>{" "}
                <a className="white-button is-3 link-block" href="tel:+(555)0123456789">
                  <ButtonLabel>Call Now</ButtonLabel>
                </a>
              </div>
            </div>
            <div className="project-details-content-wrapper">
              <div data-reveal="up" data-delay="600" className="project-details-text-block">
                <div className="project-details-text rich-text">
                  <BlocksRenderer content={work.body} />
                </div>
              </div>
              <div data-reveal="up" data-delay="200" className="project-details-summary-block">
                <div className="label-large">Summary</div>
                <p className="paragraph-small text-weight-medium text-color-primary">{work.summary}</p>
              </div>
              <div data-reveal="up" data-delay="600" className="project-details-tag-block">
                {work.detailTags.map((tag) => (
                  <div key={tag.id} className="project-details-single-tag">
                    {tag.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
