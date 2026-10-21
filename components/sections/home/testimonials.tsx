import Image from "next/image";

export function Testimonials() {
  return (
    <section className="section_testimonial">
      <div className="section-gap">
        <div className="container-main">
          <div className="testimonial-wrapper">
            <div className="section-heading-block bottom-space-between">
              <div data-reveal="up" className="section-title-block max-width-380 mobile-lg">
                <h2 className="heading-style-2">
                  What Our <span className="heading-style-2-ht">Customers Say</span>
                </h2>
              </div>
              <div data-reveal="up" data-delay="200" className="section-summary-block max-width-400">
                <p className="paragraph-small">Don&#x27;t just take our word for it—hear from our satisfied clients</p>
              </div>
            </div>
            <div className="testimonial-content-block">
              <div data-reveal="up" data-delay="400" className="testimonial-left-block">
                <div className="testimonial-rating-block">
                  <div className="client-review-block">
                    <div className="label-large text-color-white">Clients Review (95+)</div>
                  </div>
                  <div className="rating-info-block">
                    <div className="heading-style-1 text-color-white">4.9</div>
                    <div className="rating-star-block">
                      <Image
                        src="/images/testimonial-rating-icon.svg"
                        alt="rating-star-icon"
                        width={24}
                        height={24}
                        className="rating-star-icon"
                      />
                      <Image
                        src="/images/testimonial-rating-icon.svg"
                        alt="rating-star-icon"
                        width={24}
                        height={24}
                        className="rating-star-icon"
                      />
                      <Image
                        src="/images/testimonial-rating-icon.svg"
                        alt="rating-star-icon"
                        width={24}
                        height={24}
                        className="rating-star-icon"
                      />
                      <Image
                        src="/images/testimonial-rating-icon.svg"
                        alt="rating-star-icon"
                        width={24}
                        height={24}
                        className="rating-star-icon"
                      />
                      <Image
                        src="/images/testimonial-rating-icon-2.svg"
                        alt="rating-star-icon"
                        width={24}
                        height={24}
                        className="rating-star-icon"
                      />
                    </div>
                    <p className="paragraph-small text-color-white">
                      Trusted by hundreds of happy clients - our 4.9-star rating reflects top-quality of roofing.
                    </p>
                  </div>
                </div>
              </div>
              <div className="testimonial-right-block">
                <div data-reveal="up" data-delay="600" className="testimonial-card-block">
                  <div className="testimonial-card-content-block">
                    <Image
                      src="/images/testimonial-icon.svg"
                      alt="testimonial-icon"
                      width={18}
                      height={17}
                      className="testimonial-icon"
                    />
                    <p className="paragraph-regular text-weight-regular title-text-color">
                      Fast, reliable, and excellent workmanship. They transformed our roof in just a few days!
                    </p>
                  </div>
                  <div className="testimonial-card-client-block">
                    <div className="testimonial-client-avatar-block">
                      <Image
                        src="/images/testimonial-avatar-1_1testimonial-avatar-1.jpg"
                        alt="testimonial-client-avatar"
                        width={56}
                        height={56}
                        className="testimonial-client-avatar"
                      />
                    </div>
                    <div className="testimonial-client-info-block">
                      <div className="label-medium">Michael Chen</div>
                      <div className="testimonial-card-star-block">
                        <Image
                          src="/images/testimonial-star-icon.svg"
                          alt="testimonial-card-star-icon"
                          width={20}
                          height={20}
                          className="testimonial-card-star-icon"
                        />
                        <Image
                          src="/images/testimonial-star-icon.svg"
                          alt="testimonial-card-star-icon"
                          width={20}
                          height={20}
                          className="testimonial-card-star-icon"
                        />
                        <Image
                          src="/images/testimonial-star-icon.svg"
                          alt="testimonial-card-star-icon"
                          width={20}
                          height={20}
                          className="testimonial-card-star-icon"
                        />
                        <Image
                          src="/images/testimonial-star-icon.svg"
                          alt="testimonial-card-star-icon"
                          width={20}
                          height={20}
                          className="testimonial-card-star-icon"
                        />
                        <Image
                          src="/images/testimonial-star-icon-2.svg"
                          alt="testimonial-card-star-icon"
                          width={20}
                          height={20}
                          className="testimonial-card-star-icon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div data-reveal="up" data-delay="600" className="testimonial-card-block">
                  <div className="testimonial-card-content-block">
                    <Image
                      src="/images/testimonial-icon.svg"
                      alt="testimonial-icon"
                      width={18}
                      height={17}
                      className="testimonial-icon"
                    />
                    <p className="paragraph-regular text-weight-regular title-text-color">
                      Professional team, fair pricing, and quality results. Highly recommend for any roofing needs.
                    </p>
                  </div>
                  <div className="testimonial-card-client-block">
                    <div className="testimonial-client-avatar-block">
                      <Image
                        src="/images/ImageWithFallback-1.svg"
                        alt="testimonial-client-avatar"
                        width={56}
                        height={56}
                        className="testimonial-client-avatar"
                      />
                    </div>
                    <div className="testimonial-client-info-block">
                      <div className="label-medium">Wade Warren</div>
                      <div className="testimonial-card-star-block">
                        <Image
                          src="/images/testimonial-star-icon.svg"
                          alt="testimonial-card-star-icon"
                          width={20}
                          height={20}
                          className="testimonial-card-star-icon"
                        />
                        <Image
                          src="/images/testimonial-star-icon.svg"
                          alt="testimonial-card-star-icon"
                          width={20}
                          height={20}
                          className="testimonial-card-star-icon"
                        />
                        <Image
                          src="/images/testimonial-star-icon.svg"
                          alt="testimonial-card-star-icon"
                          width={20}
                          height={20}
                          className="testimonial-card-star-icon"
                        />
                        <Image
                          src="/images/testimonial-star-icon.svg"
                          alt="testimonial-card-star-icon"
                          width={20}
                          height={20}
                          className="testimonial-card-star-icon"
                        />
                        <Image
                          src="/images/testimonial-star-icon-2.svg"
                          alt="testimonial-card-star-icon"
                          width={20}
                          height={20}
                          className="testimonial-card-star-icon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div data-reveal="up" data-delay="600" className="testimonial-card-block">
                  <div className="testimonial-card-content-block">
                    <Image
                      src="/images/testimonial-icon.svg"
                      alt="testimonial-icon"
                      width={18}
                      height={17}
                      className="testimonial-icon"
                    />
                    <p className="paragraph-regular text-weight-regular title-text-color">
                      Outstanding service from start to finish. They fixed our leak and the roof looks amazing!
                    </p>
                  </div>
                  <div className="testimonial-card-client-block">
                    <div className="testimonial-client-avatar-block">
                      <Image
                        src="/images/ImageWithFallback-2.svg"
                        alt="testimonial-client-avatar"
                        width={56}
                        height={56}
                        className="testimonial-client-avatar"
                      />
                    </div>
                    <div className="testimonial-client-info-block">
                      <div className="label-medium">Michael Chen</div>
                      <div className="testimonial-card-star-block">
                        <Image
                          src="/images/testimonial-star-icon.svg"
                          alt="testimonial-card-star-icon"
                          width={20}
                          height={20}
                          className="testimonial-card-star-icon"
                        />
                        <Image
                          src="/images/testimonial-star-icon.svg"
                          alt="testimonial-card-star-icon"
                          width={20}
                          height={20}
                          className="testimonial-card-star-icon"
                        />
                        <Image
                          src="/images/testimonial-star-icon.svg"
                          alt="testimonial-card-star-icon"
                          width={20}
                          height={20}
                          className="testimonial-card-star-icon"
                        />
                        <Image
                          src="/images/testimonial-star-icon.svg"
                          alt="testimonial-card-star-icon"
                          width={20}
                          height={20}
                          className="testimonial-card-star-icon"
                        />
                        <Image
                          src="/images/testimonial-star-icon-2.svg"
                          alt="testimonial-card-star-icon"
                          width={20}
                          height={20}
                          className="testimonial-card-star-icon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div data-reveal="up" data-delay="600" className="testimonial-card-block">
                  <div className="testimonial-card-content-block">
                    <Image
                      src="/images/testimonial-icon.svg"
                      alt="testimonial-icon"
                      width={18}
                      height={17}
                      className="testimonial-icon"
                    />
                    <p className="paragraph-regular text-weight-regular title-text-color">
                      Professional team, fair pricing, and quality results. Highly recommend for any roofing needs.
                    </p>
                  </div>
                  <div className="testimonial-card-client-block">
                    <div className="testimonial-client-avatar-block">
                      <Image
                        src="/images/ImageWithFallback.svg"
                        alt="testimonial-client-avatar"
                        width={56}
                        height={56}
                        className="testimonial-client-avatar"
                      />
                    </div>
                    <div className="testimonial-client-info-block">
                      <div className="label-medium">Wade Warren</div>
                      <div className="testimonial-card-star-block">
                        <Image
                          src="/images/testimonial-star-icon.svg"
                          alt="testimonial-card-star-icon"
                          width={20}
                          height={20}
                          className="testimonial-card-star-icon"
                        />
                        <Image
                          src="/images/testimonial-star-icon.svg"
                          alt="testimonial-card-star-icon"
                          width={20}
                          height={20}
                          className="testimonial-card-star-icon"
                        />
                        <Image
                          src="/images/testimonial-star-icon.svg"
                          alt="testimonial-card-star-icon"
                          width={20}
                          height={20}
                          className="testimonial-card-star-icon"
                        />
                        <Image
                          src="/images/testimonial-star-icon.svg"
                          alt="testimonial-card-star-icon"
                          width={20}
                          height={20}
                          className="testimonial-card-star-icon"
                        />
                        <Image
                          src="/images/testimonial-star-icon-2.svg"
                          alt="testimonial-card-star-icon"
                          width={20}
                          height={20}
                          className="testimonial-card-star-icon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
