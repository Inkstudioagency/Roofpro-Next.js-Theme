import { StrapiImage } from "@/components/ui/strapi-image";
import type { Service } from "@/lib/strapi/types";

const DEFAULT_SUMMARY =
  "Comprehensive roofing solutions that combine cutting-edge technology with traditional craftsmanship";

/** "What We Offer" grid of the service's offer points (text + icon from Strapi). */
export function ServiceOffers({ service }: { service: Service }) {
  return (
    <section className="section_what-offer">
      <div className="section-gap">
        <div className="container-main">
          <div className="what-offer-wrapper">
            <div className="section-heading-block bottom-space-between mobile-vflex">
              <div data-reveal="up" className="section-title-block max-width-210 mobile-fluid">
                <h2 className="heading-style-2">
                  What <span className="heading-style-2-ht">We Offer</span>
                </h2>
              </div>
              <div data-reveal="up" data-delay="200" className="section-summary-block max-width-500 tab-top-space">
                <p className="paragraph-small">{service.offerSummary || DEFAULT_SUMMARY}</p>
              </div>
            </div>
            {service.offers.length > 0 && (
              <div className="what-offer-content-block">
                <div className="what-offer-content-inner">
                  {service.offers.map((offer) => (
                    <div key={offer.id} className="what-offer-point-block">
                      <div className="what-offer-point-icon-block">
                        <StrapiImage media={offer.icon} className="what-offer-point-icon" alt="" />
                      </div>
                      <div className="what-offer-point-text-block">
                        <div className="label-medium">{offer.text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
