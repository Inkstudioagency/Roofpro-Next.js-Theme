import Image from "next/image";
import type { Work } from "@/lib/strapi/types";

// reveal delays from the original design: 0.2s, 0.4s, then 0.6s for the rest
const delayFor = (i: number) => [200, 400][i] ?? 600;

export function WorkFeatures({ work }: { work: Work }) {
  return (
    <section className="section_features">
      <div className="section-gap">
        <div className="container-main">
          <div className="features-wrapper">
            <div className="features-heading-block">
              <div data-reveal="up" className="section-title-block max-width-300">
                <h2 className="heading-style-2">
                  Project <span className="heading-style-2-ht">Features</span>
                </h2>
              </div>
            </div>
            <div className="features-content-block">
              {work.features.map((feature, i) => (
                <div key={feature.id} data-reveal="up" data-delay={delayFor(i)} className="features-point-block">
                  <div className="features-point-title-block">
                    <Image
                      src="/images/Features-Icon.svg"
                      alt=""
                      width={32}
                      height={32}
                      className="fratures-pointer-icon"
                    />
                    <p className="text-color-black">{feature.text}</p>
                  </div>
                  <div className="features-point-icon-block">
                    <div className="features-arrow-icon">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_152_1478)">
                          <path
                            d="M22.6663 9.33398L9.33301 22.6673"
                            stroke="#131B33"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10.667 9.33398H22.667V21.334"
                            stroke="#131B33"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_152_1478">
                            <rect width="32" height="32" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
