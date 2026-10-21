import Image from "next/image";
import { Chevron, Slider } from "@/components/ui/slider";

export function ProcessSteps() {
  return (
    <section className="section_process is-2">
      <div className="section-gap">
        <div className="container-main">
          <div className="process-wrapper-two">
            <div className="process-heading-block">
              <div data-reveal="up" className="section-title-block">
                <h2 className="heading-style-2">
                  Our Roofing <span className="heading-style-2-ht">Process</span>
                </h2>
              </div>
              <div data-reveal="up" data-delay="200" className="section-summary-block top-space-lg">
                <p className="paragraph-small">A streamlined, transparent process designed for your peace of mind</p>
              </div>
            </div>
            <div className="process-content-block-two is-desktop">
              <div data-reveal="up" data-delay="400" className="process-card-block-two">
                <div className="process-card-icon-block-two">
                  <Image
                    src="/images/Process-Icon-1.svg"
                    alt="process-card-icon-two"
                    width={40}
                    height={40}
                    className="process-card-icon-two"
                  />
                </div>
                <div className="process-card-content-block-two">
                  <h3 className="label-xlarge">
                    Licensed <br />
                    Contractor
                  </h3>
                  <p className="paragraph-small">Queensland Building &amp; Construction Commission</p>
                </div>
              </div>
              <div data-reveal="up" data-delay="400" className="process-card-block-two">
                <div className="process-card-icon-block-two">
                  <Image
                    src="/images/Process-Icon-2.svg"
                    alt="process-card-icon-two"
                    width={40}
                    height={40}
                    className="process-card-icon-two"
                  />
                </div>
                <div className="process-card-content-block-two">
                  <h3 className="label-xlarge">
                    Fully <br />
                    Insured
                  </h3>
                  <p className="paragraph-small">$20M Public Liability Coverage</p>
                </div>
              </div>
              <div data-reveal="up" data-delay="400" className="process-card-block-two">
                <div className="process-card-icon-block-two">
                  <Image
                    src="/images/Process-Icon-3.svg"
                    alt="process-card-icon-two"
                    width={40}
                    height={40}
                    className="process-card-icon-two"
                  />
                </div>
                <div className="process-card-content-block-two">
                  <h3 className="label-xlarge">
                    Master <br />
                    Roofers
                  </h3>
                  <p className="paragraph-small">Association Member Since 2005</p>
                </div>
              </div>
              <div data-reveal="up" data-delay="400" className="process-card-block-two">
                <div className="process-card-icon-block-two">
                  <Image
                    src="/images/Process-Icon-4.svg"
                    alt="process-card-icon-two"
                    width={40}
                    height={40}
                    className="process-card-icon-two"
                  />
                </div>
                <div className="process-card-content-block-two">
                  <h3 className="label-xlarge">
                    Safety <br />
                    Certified
                  </h3>
                  <p className="paragraph-small">WorkSafe Queensland Compliant</p>
                </div>
              </div>
            </div>
            <div className="process-content-block-two is-mobile">
              <Slider className="process-slider-block slider" label="process">
                <div data-reveal="up" data-delay="400" className="process-slider-mask slider-mask">
                  <div className="process-slide-block slide">
                    <div className="process-card-block-two">
                      <div className="process-card-icon-block-two">
                        <Image
                          src="/images/Process-Icon-1.svg"
                          alt="process-card-icon-two"
                          width={40}
                          height={40}
                          className="process-card-icon-two"
                        />
                      </div>
                      <div className="process-card-content-block-two">
                        <h3 className="label-xlarge">
                          Licensed <br />
                          Contractor
                        </h3>
                        <p className="paragraph-small">Queensland Building &amp; Construction Commission</p>
                      </div>
                    </div>
                  </div>
                  <div className="process-slide-block slide">
                    <div className="process-card-block-two">
                      <div className="process-card-icon-block-two">
                        <Image
                          src="/images/Process-Icon-2.svg"
                          alt="process-card-icon-two"
                          width={40}
                          height={40}
                          className="process-card-icon-two"
                        />
                      </div>
                      <div className="process-card-content-block-two">
                        <h3 className="label-xlarge">
                          Fully <br />
                          Insured
                        </h3>
                        <p className="paragraph-small">$20M Public Liability Coverage</p>
                      </div>
                    </div>
                  </div>
                  <div className="process-slide-block slide">
                    <div className="process-card-block-two">
                      <div className="process-card-icon-block-two">
                        <Image
                          src="/images/Process-Icon-3.svg"
                          alt="process-card-icon-two"
                          width={40}
                          height={40}
                          className="process-card-icon-two"
                        />
                      </div>
                      <div className="process-card-content-block-two">
                        <h3 className="label-xlarge">
                          Master <br />
                          Roofers
                        </h3>
                        <p className="paragraph-small">Association Member Since 2005</p>
                      </div>
                    </div>
                  </div>
                  <div className="process-slide-block slide">
                    <div className="process-card-block-two">
                      <div className="process-card-icon-block-two">
                        <Image
                          src="/images/Process-Icon-4.svg"
                          alt="process-card-icon-two"
                          width={40}
                          height={40}
                          className="process-card-icon-two"
                        />
                      </div>
                      <div className="process-card-content-block-two">
                        <h3 className="label-xlarge">
                          Safety <br />
                          Certified
                        </h3>
                        <p className="paragraph-small">WorkSafe Queensland Compliant</p>
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
