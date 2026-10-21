import { StrapiImage } from "@/components/ui/strapi-image";
import type { Service } from "@/lib/strapi/types";

export function ServiceOverview({ service }: { service: Service }) {
  return (
    <section className="section_overview">
      <div className="section-gap">
        <div className="container-main">
          <div className="overview-wrapper">
            <div className="overview-content-block">
              <div data-reveal="up" className="section-title-block">
                <h2 className="heading-style-2">Overview</h2>
              </div>
              <div data-reveal="up" data-delay="200" className="section-summary-block top-space-lg">
                <p className="paragraph-small">{service.overview}</p>
              </div>
            </div>
            <div className="overview-image-block is-2">
              {(service.overviewImages ?? []).slice(0, 4).map((image, i) => (
                <div key={image.id} className={`overview-image-single-block is-${i + 1}`}>
                  <StrapiImage
                    media={image}
                    className="service-overview-image"
                    alt={`${service.title} overview ${i + 1}`}
                    sizes="(max-width: 767px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
