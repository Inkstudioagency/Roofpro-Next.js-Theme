import { ExpertiseCard } from "./expertise-card";

const SUMMARY =
  "Our corrugated and ribbed metal panel systems offer exceptional strength-to-weight ratios, superior water shedding capabilities, and enhanced structural integrity.";

const CARDS = [
  { title: "Corrugated and Ribbed", image: "/images/experts-image-4.jpg" },
  { title: "Blue Scope Certified", image: "/images/experts-image-1.jpg" },
  { title: "Metal Roof design", image: "/images/experts-image-3.jpg" },
  { title: "Energy Cool Metal Roofing", image: "/images/experts-image-2.jpg" },
];

export function Expertise() {
  return (
    <section className="section_expertise">
      <div className="section-gap">
        <div className="container-main">
          <div className="expertise-wrapper">
            <div className="section-heading-block bottom-space-between">
              <div data-reveal="up" className="section-title-block max-width-380 mobile-lg">
                <h2 className="heading-style-2">
                  Experts in <span className="heading-style-2-ht">Metal Roofing</span>
                </h2>
              </div>
              <div data-reveal="up" data-delay="200" className="section-summary-block max-width-480">
                <p className="paragraph-small">
                  Expert residential &amp; commercial roofing services backed by quality materials, certified
                  professionals, and long-term warranties.
                </p>
              </div>
            </div>
            <div className="expertise-content-block">
              {CARDS.map((card, i) => (
                <ExpertiseCard
                  key={card.title}
                  number={String(i + 1).padStart(2, "0")}
                  title={card.title}
                  summary={SUMMARY}
                  image={card.image}
                  href="/services"
                  last={i === CARDS.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
