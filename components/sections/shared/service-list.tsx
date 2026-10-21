import { EmptyState } from "@/components/ui/empty-state";
import { getServices } from "@/lib/strapi/queries";
import { ServiceTabs } from "./service-tabs";

/** "Construction Services" — every service from Strapi as selectable tabs. */
export async function ServiceList({ showHeading = true }: { showHeading?: boolean }) {
  const services = await getServices();
  const variant = showHeading ? "" : " is-no-heading";

  return (
    <section className="section_service">
      <div className="section-gap">
        <div className="container-main">
          <div className="service-wrapper">
            <div className={`service-heading-block${variant}`}>
              <div data-reveal="up" className="section-title-block">
                <h2 className="heading-style-2">
                  Construction <span className="heading-style-2-ht">Services</span>
                </h2>
              </div>
              <div data-reveal="up" data-delay="200" className="section-summary-block top-space-lg mobile-sm">
                <p className="paragraph-small">Professional roofing solutions for every type of building</p>
              </div>
            </div>
            <div data-reveal="up" data-delay="400" className={`service-content-block${variant}`}>
              {services.length ? <ServiceTabs services={services} /> : <EmptyState />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
