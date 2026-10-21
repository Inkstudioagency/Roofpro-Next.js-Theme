import Image from "next/image";

export function About() {
  return (
    <section className="section_about">
      <div className="section-gap">
        <div className="container-main">
          <div className="about-wrapper">
            <div className="section-heading-block top-space-between bottom-pd-border">
              <div data-reveal="up" className="section-title-block max-width-430 mobile-large">
                <h2 className="heading-style-2 text-color-white">
                  About Our <span className="heading-style-2-wht">Roofing Services</span>
                </h2>
              </div>
              <div data-reveal="up" data-delay="200" className="section-summary-block max-width-600 mobile-lg">
                <p className="paragraph-small text-color-white">
                  With over 20 years of experience in the roofing industry, we&#x27;ve built a reputation for
                  excellence, reliability, and superior craftsmanship. Our team of certified professionals is dedicated
                  to protecting your home with the highest quality roofing solutions.
                </p>
              </div>
              <div data-inview="" className="liner-border-block"></div>
            </div>
            <div className="about-content-block">
              <div data-reveal="up" data-delay="400" className="about-image-block">
                <Image
                  src="/images/about-image-1.jpg"
                  alt="about-image"
                  width={537}
                  height={348}
                  sizes="100vw"
                  className="about-image"
                />
              </div>
              <div data-reveal="up" data-delay="600" className="about-stat-block">
                <div className="about-stat-title-block">
                  <div className="label-large text-color-white">Projects Completed</div>
                </div>
                <div className="about-stat-content-block">
                  <div data-inview="" className="about-stat-number-block">
                    <div className="stat-number-train-block down">
                      <div className="counter-number-block down">
                        <h2 className="counter-number">1</h2>
                        <h2 className="counter-number">5</h2>
                        <h2 className="counter-number">7</h2>
                        <h2 className="counter-number">6</h2>
                        <h2 className="counter-number">5</h2>
                      </div>
                    </div>
                    <div className="stat-number-train-block up">
                      <div className="counter-number-block up">
                        <h2 className="counter-number">0</h2>
                        <h2 className="counter-number">8</h2>
                        <h2 className="counter-number">9</h2>
                        <h2 className="counter-number">1</h2>
                        <h2 className="counter-number">4</h2>
                      </div>
                    </div>
                    <div className="stat-number-train-block down">
                      <div className="counter-number-block down">
                        <h2 className="counter-number">0</h2>
                        <h2 className="counter-number">8</h2>
                        <h2 className="counter-number">9</h2>
                        <h2 className="counter-number">1</h2>
                        <h2 className="counter-number">0</h2>
                      </div>
                    </div>
                    <h2 className="counter-number">+</h2>
                  </div>
                  <div className="paragraph-small text-color-white">
                    We provide reliable roofing solutions built on quality
                  </div>
                </div>
              </div>
              <div data-reveal="up" data-delay="800" className="about-stat-block">
                <div className="about-stat-title-block">
                  <div className="label-large text-color-white">Years Experience</div>
                </div>
                <div className="about-stat-content-block">
                  <div data-inview="" className="about-stat-number-block">
                    <div className="stat-number-train-block up">
                      <div className="counter-number-block up">
                        <h2 className="counter-number">2</h2>
                        <h2 className="counter-number">8</h2>
                        <h2 className="counter-number">9</h2>
                        <h2 className="counter-number">1</h2>
                        <h2 className="counter-number">4</h2>
                      </div>
                    </div>
                    <div className="stat-number-train-block down">
                      <div className="counter-number-block down">
                        <h2 className="counter-number">0</h2>
                        <h2 className="counter-number">8</h2>
                        <h2 className="counter-number">9</h2>
                        <h2 className="counter-number">1</h2>
                        <h2 className="counter-number">0</h2>
                      </div>
                    </div>
                    <h2 className="counter-number">+ Yr</h2>
                  </div>
                  <div className="paragraph-small text-color-white">
                    Our certified team delivers dependable roofing solutions
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
