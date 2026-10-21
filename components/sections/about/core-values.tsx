import Image from "next/image";
import { Chevron, Slider } from "@/components/ui/slider";

export function CoreValues() {
  return (
    <section className="section_core-values">
      <div className="section-gap">
        <div className="container-main">
          <div className="process-wrapper">
            <div className="section-heading-block bottom-space-between">
              <div data-reveal="up" className="section-title-block max-width-250">
                <h2 className="heading-style-2">
                  Our Core <span className="heading-style-2-ht">Values</span>
                </h2>
              </div>
              <div data-reveal="up" data-delay="200" className="section-summary-block max-width-330">
                <p className="paragraph-small">
                  The principles that guide every decision we make and every roof we install
                </p>
              </div>
            </div>
            <div className="process-content-block is-2 is-desktop">
              <div className="process-card-block is-2">
                <div className="process-card-content-block is-2">
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
                  </div>
                  <div className="process-card-bottom-block">
                    <div className="label-large">Integrity</div>
                    <p className="paragraph-small">
                      We operate with complete transparency, providing honest assessments and fair pricing. Our word is
                      our bond, and we stand behind every project we complete.
                    </p>
                  </div>
                </div>
              </div>
              <div className="process-card-block is-2">
                <div className="process-card-content-block is-2">
                  <div className="process-card-top-block">
                    <div className="process-card-icon-block">
                      <Image
                        src="/images/Values-Icon-2.svg"
                        alt="process-card-icon"
                        width={40}
                        height={40}
                        className="process-card-icon"
                      />
                    </div>
                  </div>
                  <div className="process-card-bottom-block">
                    <div className="label-large">Excellence</div>
                    <p className="paragraph-small">
                      We pursue the highest standards in everything we do, from material selection to installation
                      techniques. Mediocrity is never acceptable.
                    </p>
                  </div>
                </div>
              </div>
              <div className="process-card-block is-2">
                <div className="process-card-content-block is-2">
                  <div className="process-card-top-block">
                    <div className="process-card-icon-block">
                      <Image
                        src="/images/Values-Icon-3.svg"
                        alt="process-card-icon"
                        width={40}
                        height={40}
                        className="process-card-icon"
                      />
                    </div>
                  </div>
                  <div className="process-card-bottom-block">
                    <div className="label-large">Teamwork</div>
                    <p className="paragraph-small">
                      Our success is built on collaboration, mutual respect, and the combined expertise of our skilled
                      professionals working toward common goals.
                    </p>
                  </div>
                </div>
              </div>
              <div className="process-card-block is-2">
                <div className="process-card-content-block is-2">
                  <div className="process-card-top-block">
                    <div className="process-card-icon-block">
                      <Image
                        src="/images/Values-Icon-4.svg"
                        alt="process-card-icon"
                        width={40}
                        height={40}
                        className="process-card-icon"
                      />
                    </div>
                  </div>
                  <div className="process-card-bottom-block">
                    <div className="label-large">Customer Care</div>
                    <p className="paragraph-small">
                      We treat every property as if it were our own, delivering service with empathy, respect, and
                      genuine concern for our clients&#x27; satisfaction.
                    </p>
                  </div>
                </div>
              </div>
              <div className="process-card-block is-2">
                <div className="process-card-content-block is-2">
                  <div className="process-card-top-block">
                    <div className="process-card-icon-block">
                      <Image
                        src="/images/Values-Icon-5.svg"
                        alt="process-card-icon"
                        width={40}
                        height={40}
                        className="process-card-icon"
                      />
                    </div>
                  </div>
                  <div className="process-card-bottom-block">
                    <div className="label-large">Safety</div>
                    <p className="paragraph-small">
                      The wellbeing of our team and clients is paramount. We maintain rigorous safety protocols and
                      never compromise on protective measures.
                    </p>
                  </div>
                </div>
              </div>
              <div className="process-card-block is-2">
                <div className="process-card-content-block is-2">
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
                  </div>
                  <div className="process-card-bottom-block">
                    <div className="label-large">Innovation</div>
                    <p className="paragraph-small">
                      We embrace new technologies and methods that improve quality, efficiency, and sustainability in
                      roofing solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="process-content-block is-2 is-mobile">
              <Slider className="process-slider-block slider" label="process">
                <div data-reveal="up" data-delay="400" className="process-slider-mask slider-mask">
                  <div className="process-slide-block slide">
                    <div className="process-card-block is-2">
                      <div className="process-card-content-block is-2">
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
                        </div>
                        <div className="process-card-bottom-block">
                          <div className="label-large">Integrity</div>
                          <p className="paragraph-small">
                            We operate with complete transparency, providing honest assessments and fair pricing. Our
                            word is our bond, and we stand behind every project we complete.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="process-slide-block slide">
                    <div className="process-card-block is-2">
                      <div className="process-card-content-block is-2">
                        <div className="process-card-top-block">
                          <div className="process-card-icon-block">
                            <Image
                              src="/images/Values-Icon-2.svg"
                              alt="process-card-icon"
                              width={40}
                              height={40}
                              className="process-card-icon"
                            />
                          </div>
                        </div>
                        <div className="process-card-bottom-block">
                          <div className="label-large">Excellence</div>
                          <p className="paragraph-small">
                            We pursue the highest standards in everything we do, from material selection to installation
                            techniques. Mediocrity is never acceptable.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="process-slide-block slide">
                    <div className="process-card-block is-2">
                      <div className="process-card-content-block is-2">
                        <div className="process-card-top-block">
                          <div className="process-card-icon-block">
                            <Image
                              src="/images/Values-Icon-3.svg"
                              alt="process-card-icon"
                              width={40}
                              height={40}
                              className="process-card-icon"
                            />
                          </div>
                        </div>
                        <div className="process-card-bottom-block">
                          <div className="label-large">Teamwork</div>
                          <p className="paragraph-small">
                            Our success is built on collaboration, mutual respect, and the combined expertise of our
                            skilled professionals working toward common goals.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="process-slide-block slide">
                    <div className="process-card-block is-2">
                      <div className="process-card-content-block is-2">
                        <div className="process-card-top-block">
                          <div className="process-card-icon-block">
                            <Image
                              src="/images/Values-Icon-4.svg"
                              alt="process-card-icon"
                              width={40}
                              height={40}
                              className="process-card-icon"
                            />
                          </div>
                        </div>
                        <div className="process-card-bottom-block">
                          <div className="label-large">Customer Care</div>
                          <p className="paragraph-small">
                            We treat every property as if it were our own, delivering service with empathy, respect, and
                            genuine concern for our clients&#x27; satisfaction.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="process-slide-block slide">
                    <div className="process-card-block is-2">
                      <div className="process-card-content-block is-2">
                        <div className="process-card-top-block">
                          <div className="process-card-icon-block">
                            <Image
                              src="/images/Values-Icon-5.svg"
                              alt="process-card-icon"
                              width={40}
                              height={40}
                              className="process-card-icon"
                            />
                          </div>
                        </div>
                        <div className="process-card-bottom-block">
                          <div className="label-large">Safety</div>
                          <p className="paragraph-small">
                            The wellbeing of our team and clients is paramount. We maintain rigorous safety protocols
                            and never compromise on protective measures.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="process-slide-block slide">
                    <div className="process-card-block is-2">
                      <div className="process-card-content-block is-2">
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
                        </div>
                        <div className="process-card-bottom-block">
                          <div className="label-large">Innovation</div>
                          <p className="paragraph-small">
                            We embrace new technologies and methods that improve quality, efficiency, and sustainability
                            in roofing solutions.
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
