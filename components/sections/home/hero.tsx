import Link from "next/link";
import Image from "next/image";
import { ButtonLabel } from "@/components/ui/button-label";

export function Hero() {
  return (
    <section className="section_hero">
      <div className="section-gap hero">
        <div className="container-main">
          <div className="hero-wrapper">
            <div className="hero-content-block">
              <div className="hero-text-block">
                <div data-reveal="up" className="hero-title-block">
                  <h1 className="heading-style-1">Reliable Roofing Services for Your Home</h1>
                </div>
                <div data-reveal="up" data-delay="200" className="hero-summary-block">
                  <p className="paragraph-small">
                    Expert residential &amp; commercial roofing services backed by quality materials, certified
                    professionals, and long-term warranties.
                  </p>
                </div>
                <div data-reveal="up" data-delay="400" className="hero-button-block">
                  <Link className="primary-button link-block" href="/contact">
                    <ButtonLabel>Get Free Inspection</ButtonLabel>
                  </Link>{" "}
                  <a className="secondary-button link-block" href="tel:+(555)0123456789">
                    <ButtonLabel>Call Now</ButtonLabel>
                  </a>
                </div>
              </div>
              <div className="hero-rating-block">
                <div className="hero-rating-avatar-block">
                  <Image
                    src="/images/avatar-01_1avatar-01.png"
                    alt="hero-rating-avatar"
                    width={56}
                    height={56}
                    className="hero-rating-avatar is-1"
                    data-reveal="right"
                    data-delay="600"
                  />
                  <Image
                    src="/images/avatar-02_1avatar-02.png"
                    alt="hero-rating-avatar"
                    width={56}
                    height={56}
                    className="hero-rating-avatar"
                    data-reveal="right"
                    data-delay="650"
                  />
                  <Image
                    src="/images/avatar-03_1avatar-03.png"
                    alt="hero-rating-avatar"
                    width={56}
                    height={56}
                    className="hero-rating-avatar"
                    data-reveal="right"
                    data-delay="700"
                  />
                </div>
                <div data-reveal="right" data-delay="800" className="hero-rating-info-block">
                  <div className="hero-rating-star-block">
                    <Image
                      src="/images/Star-Icon.svg"
                      alt="hero-rating-star"
                      width={16}
                      height={16}
                      className="hero-rating-star"
                    />
                    <Image
                      src="/images/Star-Icon.svg"
                      alt="hero-rating-star"
                      width={16}
                      height={16}
                      className="hero-rating-star"
                    />
                    <Image
                      src="/images/Star-Icon.svg"
                      alt="hero-rating-star"
                      width={16}
                      height={16}
                      className="hero-rating-star"
                    />
                    <Image
                      src="/images/Star-Icon.svg"
                      alt="hero-rating-star"
                      width={16}
                      height={16}
                      className="hero-rating-star"
                    />
                    <Image
                      src="/images/Star-Icon.svg"
                      alt="hero-rating-star"
                      width={16}
                      height={16}
                      className="hero-rating-star"
                    />
                  </div>
                  <p className="paragraph-xxsmall text-color-title-color">Rated 4.9/5 from 1200+ reviews</p>
                </div>
              </div>
            </div>
            <div className="hero-image-block">
              <Image
                src="/images/hero-image-5.webp"
                alt="hero-image"
                width={2166}
                height={2271}
                sizes="100vw"
                className="hero-image"
                data-inview=""
              />
              <div className="hero-image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
