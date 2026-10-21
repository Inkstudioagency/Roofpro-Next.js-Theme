import { StoryTimeline, type StoryPoint } from "./story-timeline";

const STORY: StoryPoint[] = [
  {
    year: "2018",
    title: "Office Setup",
    body: [
      "Founded in 2018, our roofing company began with a simple mission: to provide Brisbane homeowners and businesses with honest, high-quality roofing services they could trust. What started as a small family-run operation has grown into one of the region's most respected roofing contractors.",
      "Over the past 8 years, we've completed more than 500 projects, from simple residential repairs to complex commercial installations. Our success is built on a foundation of exceptional craftsmanship, transparent pricing, and genuine care for our clients' needs.Today, we're proud to lead the industry with innovative roofing solutions, sustainable practices, and a team of certified professionals who share our commitment to excellence. Every roof we install or repair is a testament to our dedication to protecting what matters most to our clients.",
    ],
  },
  {
    year: "2020",
    title: "Award Winning",
    body: [
      "In 2020, our commitment to quality and customer satisfaction was officially recognized when we received multiple industry awards for excellence in roofing services. These achievements reflected not only our technical expertise but also our dedication to delivering projects on time and within budget.",
      "The recognition strengthened our reputation across Brisbane and surrounding regions, helping us build stronger partnerships with suppliers, contractors, and commercial clients. It also motivated our team to continuously raise the bar in craftsmanship, safety standards, and innovative roofing solutions.",
      "Winning these awards was more than a milestone — it was proof that our values of integrity, reliability, and precision set us apart in a competitive market.",
    ],
  },
  {
    year: "2025",
    title: "Rescale Office",
    body: [
      "By 2025, the rapid growth of our operations required a larger and more advanced workspace. We expanded and relocated to a modern office facility designed to support our growing team and streamline project management processes.",
      "The new office allowed us to enhance internal collaboration, invest in upgraded technology, and improve overall operational efficiency. With a dedicated client consultation space and improved logistics coordination, we were able to deliver an even smoother service experience from initial inquiry to project completion.",
      "This expansion marked a significant step forward, positioning us for long-term scalability and stronger service coverage across the region.",
    ],
  },
  {
    year: "2026",
    title: "Reconstruction",
    body: [
      "In 2026, we undertook a major reconstruction initiative focused on innovation and structural excellence. This phase represented our evolution from a traditional roofing contractor to a comprehensive roofing solutions provider.",
      "We integrated advanced materials, sustainable building practices, and modern engineering techniques into our services. Our reconstruction projects showcased our ability to handle complex structural upgrades, full roof replacements, and large-scale commercial restorations with precision and durability.",
      "This milestone reaffirmed our mission: to protect, strengthen, and future-proof every property we work on while maintaining the highest standards of workmanship and client care.",
    ],
  },
];

export function OurStory() {
  return (
    <section className="section_our-story">
      <div className="section-gap">
        <div className="container-main">
          <div className="our-story-wrapper">
            <div data-reveal="up" data-delay="200" className="our-story-left-block">
              <h2>Our Story</h2>
            </div>
            <div data-reveal="up" data-delay="400" className="our-story-right-block">
              <StoryTimeline points={STORY} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
