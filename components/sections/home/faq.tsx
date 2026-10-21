import { FaqItem } from "./faq-item";

const ANSWER =
  "We work with founders, startups, SMEs, and established brands across diverse industries. Whether you're launching a new idea, scaling an existing product, or redesigning your digital presence, we tailor our process to fit your needs. Our clients include tech companies, service providers, e-commerce businesses, healthcare startups, real estate agencies, and creative entrepreneurs.";

const FAQS = [
  "What type of clients do you work with?",
  "What services do you offer?",
  "How long does a project take to complete?",
  "What is your design process?",
  "Do you provide development services too?",
  "Can you redesign my existing app or website?",
  "How do you guarantee design quality?",
  "What if I don’t know exactly what I need?",
].map((question) => ({ question, answer: ANSWER }));

// reveal delays from the original design: 0.2s, 0.4s, then 0.6s for the rest
const delayFor = (i: number) => [200, 400][i] ?? 600;

export function Faq() {
  return (
    <section className="section_faq" id="section_faq">
      <div className="section-gap">
        <div className="container-main">
          <div className="faq-wrapper">
            <div className="faq-heading-block">
              <div className="section-heading-block">
                <div data-reveal="up" className="section-title-block max-width-490">
                  <h2 className="heading-style-2">
                    Frequently Asked <span className="heading-style-2-ht">Questions</span>
                  </h2>
                </div>
                <div data-reveal="up" data-delay="200" className="section-summary-block max-width-490 top-space">
                  <p className="paragraph-small">
                    Everything you need to know about our product, pricing, features, and support - all in one place.
                  </p>
                </div>
              </div>
            </div>
            <div className="faq-content-block">
              {FAQS.map((faq, i) => (
                <FaqItem key={faq.question} question={faq.question} answer={faq.answer} delay={delayFor(i)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
