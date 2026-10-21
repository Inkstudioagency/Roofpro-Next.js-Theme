import Image from "next/image";

const DEFAULT_SUMMARY = "Partnering with us means access to premium craftsmanship and unmatched expertise";
const DEFAULT_BENEFITS = [
  "Increase property value curb appeal",
  "Custom designs to match your vision",
  "Extended warranty coverage",
  "Licensed and insured professionals",
  "Quality materials from trusted brands",
  "Competitive pricing",
];

interface KeyBenefitsProps {
  /** service detail pages pass the service's own summary and benefit list from Strapi */
  summary?: string | null;
  benefits?: string[];
}

export function KeyBenefits({ summary, benefits }: KeyBenefitsProps) {
  const points = benefits?.length ? benefits : DEFAULT_BENEFITS;
  return (
    <section className="section_key-benefit">
      <div className="section-gap">
        <div className="container-main">
          <div className="key-benefit-wrapper">
            <div className="section-heading-block bottom-space-between bottom-space">
              <div data-reveal="up" className="section-title-block max-width-210">
                <h2 className="heading-style-2 text-color-white">
                  Key <span className="heading-style-2-wht">Benefits</span>
                </h2>
              </div>
              <div data-reveal="up" data-delay="200" className="section-summary-block max-width-400">
                <p className="paragraph-small text-color-white _80">{summary ?? DEFAULT_SUMMARY}</p>
              </div>
            </div>
            <div className="key-benefit-content-block">
              {points.map((text, i) => (
                <div key={`${i}-${text}`} className="key-benefit-point-block">
                  <div className="key-benefit-icon-block">
                    <Image
                      src="/images/Key-Benefit-Icon.svg"
                      alt=""
                      width={32}
                      height={32}
                      className="key-benefit-icon"
                    />
                  </div>
                  <div className="key-benefit-text-block">
                    <div className="paragraph-small text-color-white">{text}</div>
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
