import Link from "next/link";
import { ButtonLabel } from "@/components/ui/button-label";

export function QuoteCta() {
  return (
    <section className="section_cta-two">
      <div className="section-gap">
        <div className="container-main">
          <div data-reveal="up" data-delay="200" className="cta-two-wrapper">
            <div className="cta-two-content-block">
              <div className="cta-title-block max-width-380 mobile-full">
                <h2 className="heading-style-2 text-color-white">
                  Ready to Get <span className="heading-style-2-wht">Started?</span>
                </h2>
              </div>
              <div className="cta-summary-block">
                <p className="paragraph-small text-color-white _80">
                  Contact us today for a free consultation and quote for your residential roofing project.
                </p>
              </div>
            </div>
            <div className="cta-two-button-block">
              <Link className="white-button is-2 link-block" href="/contact">
                <ButtonLabel>Get Free Inspection</ButtonLabel>
              </Link>{" "}
              <a className="secondary-button is-outline-white link-block" href="tel:+(555)1234-5678">
                <ButtonLabel>Call Now</ButtonLabel>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
