import Image from "next/image";
import { Slider } from "@/components/ui/slider";

export function OurTeam() {
  return (
    <section className="section_our-team">
      <div className="section-gap">
        <div className="container-main">
          <div className="our-team-wrapper">
            <div className="our-team-heading-block">
              <div data-reveal="up" className="section-title-block max-width-220 mobile-sm">
                <h2 className="heading-style-2">
                  Our <span className="heading-style-2-ht">Team</span>
                </h2>
              </div>
              <div data-reveal="up" data-delay="200" className="section-summary-block top-space-lg">
                <p className="paragraph-small">
                  The principles that guide every decision we make and every roof we install
                </p>
              </div>
            </div>
            <div className="our-team-content-block">
              <Slider className="our-team-slider-block slider" label="our team">
                <div data-reveal="up" data-delay="400" className="our-team-slider-mask slider-mask">
                  <div className="our-team-slide slide">
                    <div className="team-slide-content-block">
                      <div className="team-image-block">
                        <Image
                          src="/images/Team-Member-Image-3-1.jpg"
                          alt="our-team-image"
                          width={377}
                          height={569}
                          className="our-team-image"
                        />
                        <div className="team-image-overlay-block"></div>
                      </div>
                      <div className="team-content-block">
                        <h3 className="label-xlarge text-color-white">Michael Anderson</h3>
                        <p className="label-medium text-color-white">Founder &amp; CEO</p>
                      </div>
                    </div>
                  </div>
                  <div className="our-team-slide slide">
                    <div className="team-slide-content-block">
                      <div className="team-image-block">
                        <Image
                          src="/images/Team-Member-Image-3.jpg"
                          alt="our-team-image"
                          width={377}
                          height={569}
                          className="our-team-image"
                        />
                        <div className="team-image-overlay-block"></div>
                      </div>
                      <div className="team-content-block">
                        <h3 className="label-xlarge text-color-white">Emma Thompson</h3>
                        <p className="label-medium text-color-white">Project Coordinator</p>
                      </div>
                    </div>
                  </div>
                  <div className="our-team-slide slide">
                    <div className="team-slide-content-block">
                      <div className="team-image-block">
                        <Image
                          src="/images/Team-Member-Image-1.jpg"
                          alt="our-team-image"
                          width={377}
                          height={569}
                          className="our-team-image"
                        />
                        <div className="team-image-overlay-block"></div>
                      </div>
                      <div className="team-content-block">
                        <h3 className="label-xlarge text-color-white">David Chen</h3>
                        <p className="label-medium text-color-white">Lead Installer</p>
                      </div>
                    </div>
                  </div>
                  <div className="our-team-slide slide">
                    <div className="team-slide-content-block is-4">
                      <div className="team-image-block">
                        <Image
                          src="/images/team-image-3.jpg"
                          alt="our-team-image"
                          width={377}
                          height={569}
                          className="our-team-image"
                        />
                        <div className="team-image-overlay-block"></div>
                      </div>
                      <div className="team-content-block">
                        <h3 className="label-xlarge text-color-white">Sarah Mitchell</h3>
                        <p className="label-medium text-color-white">Operations Manager</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-reveal="up"
                  data-delay="400"
                  className="our-team-slider-arrow bottom slider-arrow slider-arrow-left"
                  role="button"
                  tabIndex={0}
                  aria-label="previous slide"
                >
                  <div className="our-team-slider-icon">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_152_1897)">
                        <path
                          d="M20 8L12 16L20 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_152_1897">
                          <rect width="32" height="32" fill="currentColor" transform="matrix(-1 0 0 1 32 0)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div
                  data-reveal="up"
                  data-delay="400"
                  className="our-team-slider-arrow right bottom slider-arrow slider-arrow-right"
                  role="button"
                  tabIndex={0}
                  aria-label="next slide"
                >
                  <div className="our-team-slider-icon">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_152_1901)">
                        <path
                          d="M12 8L20 16L12 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_152_1901">
                          <rect width="32" height="32" fill="currentColor" />
                        </clipPath>
                      </defs>
                    </svg>
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
