import Image from "next/image";
import { Chevron, Slider } from "@/components/ui/slider";

export function Process() {
  return (
    <section className="section_process" id="section_process">
      <div className="section-gap">
        <div className="container-main">
          <div className="process-wrapper">
            <div className="section-heading-block bottom-space-between">
              <div data-reveal="up" className="section-title-block max-width-430">
                <h2 className="heading-style-2">
                  Our Roofing <span className="heading-style-2-ht">Process</span>
                </h2>
              </div>
              <div data-reveal="up" data-delay="200" className="section-summary-block max-width-300">
                <p className="paragraph-small">A streamlined, transparent process designed for your peace of mind</p>
              </div>
            </div>
            <div className="process-content-block is-desktop">
              <div data-reveal="up" data-delay="400" className="process-card-block image">
                <div className="process-card-image-block">
                  <Image
                    src="/images/process-card-image.jpg"
                    alt="process-card-image"
                    width={406}
                    height={398}
                    className="process-card-image"
                  />
                </div>
              </div>
              <div data-reveal="up" data-delay="400" className="process-card-block is-1">
                <div className="process-card-content-block is-1">
                  <div className="process-card-top-block">
                    <div className="process-card-icon-block">
                      <Image
                        src="/images/Icon.svg"
                        alt="process-card-icon"
                        width={40}
                        height={40}
                        className="process-card-icon"
                      />
                    </div>
                    <div className="label-medium">Step 1</div>
                  </div>
                  <div className="process-card-bottom-block">
                    <div className="label-large">Initial Consultation</div>
                    <p className="paragraph-small">
                      Contact us for a free consultation. We discuss your needs, timeline, and budget.
                    </p>
                  </div>
                </div>
              </div>
              <div data-reveal="up" data-delay="400" className="process-card-block is-1">
                <div className="process-card-content-block is-1">
                  <div className="process-card-top-block">
                    <div className="process-card-icon-block">
                      <Image
                        src="/images/Icon-1.svg"
                        alt="process-card-icon"
                        width={40}
                        height={40}
                        className="process-card-icon"
                      />
                    </div>
                    <div className="label-medium">Step 2</div>
                  </div>
                  <div className="process-card-bottom-block">
                    <div className="label-large">Free Inspection</div>
                    <p className="paragraph-small">
                      Contact us for a free consultation. We discuss your needs, timeline, and budget.
                    </p>
                  </div>
                </div>
              </div>
              <div data-reveal="up" data-delay="400" className="process-card-block is-1">
                <div className="process-card-content-block is-1">
                  <div className="process-card-top-block">
                    <div className="process-card-icon-block">
                      <Image
                        src="/images/Icon-2.svg"
                        alt="process-card-icon"
                        width={40}
                        height={40}
                        className="process-card-icon"
                      />
                    </div>
                    <div className="label-medium">Step 3</div>
                  </div>
                  <div className="process-card-bottom-block">
                    <div className="label-large">Detailed Quote</div>
                    <p className="paragraph-small">
                      Contact us for a free consultation. We discuss your needs, timeline, and budget.
                    </p>
                  </div>
                </div>
              </div>
              <div data-reveal="up" data-delay="400" className="process-card-block is-1">
                <div className="process-card-content-block is-1">
                  <div className="process-card-top-block">
                    <div className="process-card-icon-block">
                      <Image
                        src="/images/Icon-3.svg"
                        alt="process-card-icon"
                        width={40}
                        height={40}
                        className="process-card-icon"
                      />
                    </div>
                    <div className="label-medium">Step 4</div>
                  </div>
                  <div className="process-card-bottom-block">
                    <div className="label-large">Professional Installation</div>
                    <p className="paragraph-small">
                      Contact us for a free consultation. We discuss your needs, timeline, and budget.
                    </p>
                  </div>
                </div>
              </div>
              <div data-reveal="up" data-delay="400" className="process-card-block is-1">
                <div className="process-card-content-block is-1">
                  <div className="process-card-top-block">
                    <div className="process-card-icon-block">
                      <Image
                        src="/images/Icon-4.svg"
                        alt="process-card-icon"
                        width={40}
                        height={40}
                        className="process-card-icon"
                      />
                    </div>
                    <div className="label-medium">Step 5</div>
                  </div>
                  <div className="process-card-bottom-block">
                    <div className="label-large">Quality Assurance</div>
                    <p className="paragraph-small">
                      Contact us for a free consultation. We discuss your needs, timeline, and budget.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="process-content-block is-mobile">
              <Slider className="process-slider-block slider" label="process">
                <div data-reveal="up" data-delay="400" className="process-slider-mask slider-mask">
                  <div className="process-slide-block slide">
                    <div className="process-card-block">
                      <div className="process-card-content-block is-1">
                        <div className="process-card-top-block">
                          <div className="process-card-icon-block">
                            <Image
                              src="/images/Icon.svg"
                              alt="process-card-icon"
                              width={40}
                              height={40}
                              className="process-card-icon"
                            />
                          </div>
                          <div className="label-medium">Step 1</div>
                        </div>
                        <div className="process-card-bottom-block">
                          <div className="label-large">Initial Consultation</div>
                          <p className="paragraph-small">
                            Contact us for a free consultation. We discuss your needs, timeline, and budget.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="process-slide-block slide">
                    <div className="process-card-block">
                      <div className="process-card-content-block is-1">
                        <div className="process-card-top-block">
                          <div className="process-card-icon-block">
                            <Image
                              src="/images/Icon-1.svg"
                              alt="process-card-icon"
                              width={40}
                              height={40}
                              className="process-card-icon"
                            />
                          </div>
                          <div className="label-medium">Step 2</div>
                        </div>
                        <div className="process-card-bottom-block">
                          <div className="label-large">Free Inspection</div>
                          <p className="paragraph-small">
                            Contact us for a free consultation. We discuss your needs, timeline, and budget.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="process-slide-block slide">
                    <div className="process-card-block">
                      <div className="process-card-content-block is-1">
                        <div className="process-card-top-block">
                          <div className="process-card-icon-block">
                            <Image
                              src="/images/Icon-2.svg"
                              alt="process-card-icon"
                              width={40}
                              height={40}
                              className="process-card-icon"
                            />
                          </div>
                          <div className="label-medium">Step 3</div>
                        </div>
                        <div className="process-card-bottom-block">
                          <div className="label-large">Detailed Quote</div>
                          <p className="paragraph-small">
                            Contact us for a free consultation. We discuss your needs, timeline, and budget.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="process-slide-block slide">
                    <div className="process-card-block">
                      <div className="process-card-content-block is-1">
                        <div className="process-card-top-block">
                          <div className="process-card-icon-block">
                            <Image
                              src="/images/Icon-3.svg"
                              alt="process-card-icon"
                              width={40}
                              height={40}
                              className="process-card-icon"
                            />
                          </div>
                          <div className="label-medium">Step 4</div>
                        </div>
                        <div className="process-card-bottom-block">
                          <div className="label-large">Professional Installation</div>
                          <p className="paragraph-small">
                            Contact us for a free consultation. We discuss your needs, timeline, and budget.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="process-slide-block slide">
                    <div className="process-card-block">
                      <div className="process-card-content-block is-1">
                        <div className="process-card-top-block">
                          <div className="process-card-icon-block">
                            <Image
                              src="/images/Icon-4.svg"
                              alt="process-card-icon"
                              width={40}
                              height={40}
                              className="process-card-icon"
                            />
                          </div>
                          <div className="label-medium">Step 5</div>
                        </div>
                        <div className="process-card-bottom-block">
                          <div className="label-large">Quality Assurance</div>
                          <p className="paragraph-small">
                            Contact us for a free consultation. We discuss your needs, timeline, and budget.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="process-slider-arrow left slider-arrow slider-arrow-left"
                  role="button"
                  tabIndex={0}
                  aria-label="previous slide"
                >
                  <div className="slider-icon-left">
                    <Chevron direction="left" />
                  </div>
                </div>
                <div
                  className="process-slider-arrow right slider-arrow slider-arrow-right"
                  role="button"
                  tabIndex={0}
                  aria-label="next slide"
                >
                  <div className="slider-icon-right">
                    <Chevron direction="right" />
                  </div>
                </div>
                <div className="display-none slider-nav"></div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
