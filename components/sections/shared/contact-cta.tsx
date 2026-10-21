import Image from "next/image";
import { getServices } from "@/lib/strapi/queries";
import { ContactForm } from "./contact-form";

/** "Get in Touch" contact details + form. `offset` adds top spacing when it opens a page (contact page). */
export async function ContactCta({ offset = false }: { offset?: boolean }) {
  const services = await getServices().catch(() => []);
  return (
    <section className={`section_cta${offset ? " is-offset" : ""}`}>
      <div className="section-gap">
        <div className="container-main">
          <div className="cta-wrapper">
            <div className="get-in-touch-block">
              <div className="get-in-touch-heding-block">
                <h2 data-reveal="up" className="heading-style-2 text-color-white">
                  Get in Touch
                </h2>
                <p data-reveal="up" data-delay="200" className="paragraph-small text-color-white">
                  Ready to start your roofing project? Contact us today for a free consultation and quote.
                </p>
              </div>
              <div data-reveal="up" data-delay="400" className="get-in-touch-content-block">
                <div className="get-in-touch-single-block">
                  <div className="get-in-touch-icon-block">
                    <Image
                      src="/images/Call-Icon.svg"
                      alt="get-in-touch-icon"
                      width={24}
                      height={24}
                      className="get-in-touch-icon"
                    />
                  </div>
                  <div className="get-in-touch-text-block">
                    <div className="label-medium text-color-white">Phone</div>
                    <a className="get-in-touch-link hover" href="tel:1300123456">
                      1300 123 456
                    </a>
                  </div>
                </div>
                <div className="get-in-touch-single-block">
                  <div className="get-in-touch-icon-block">
                    <Image
                      src="/images/Mail-Icon.svg"
                      alt="get-in-touch-icon"
                      width={24}
                      height={24}
                      className="get-in-touch-icon"
                    />
                  </div>
                  <div className="get-in-touch-text-block">
                    <div className="label-medium text-color-white">Email</div>
                    <a className="get-in-touch-link hover" href="mailto:info@roofpro.com.au">
                      info@roofpro.com.au
                    </a>
                  </div>
                </div>
                <div className="get-in-touch-single-block">
                  <div className="get-in-touch-icon-block">
                    <Image
                      src="/images/watch-Icon.svg"
                      alt="get-in-touch-icon"
                      width={24}
                      height={24}
                      className="get-in-touch-icon"
                    />
                  </div>
                  <div className="get-in-touch-text-block">
                    <div className="label-medium text-color-white">Business Hours</div>
                    <div className="get-in-touch-link">
                      Mon - Fri: 7:00 AM - 5:00 PM
                      <br />
                      Emergency available 24/7
                    </div>
                  </div>
                </div>
                <div className="get-in-touch-single-block">
                  <div className="get-in-touch-icon-block">
                    <Image
                      src="/images/Location-Icon.svg"
                      alt="get-in-touch-icon"
                      width={24}
                      height={24}
                      className="get-in-touch-icon"
                    />
                  </div>
                  <div className="get-in-touch-text-block">
                    <div className="label-medium text-color-white">Location</div>
                    <div className="get-in-touch-link">Brisbane, Queensland Servicing all Brisbane suburbs</div>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm services={services.map((s) => s.title)} />
          </div>
        </div>
      </div>
    </section>
  );
}
