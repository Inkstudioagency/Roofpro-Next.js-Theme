import Image from "next/image";

export function Logos() {
  return (
    <section className="section_logo">
      <div className="section-gap top-lg">
        <div className="container-main">
          <div className="logo-wrapper">
            <div className="section-heading-block center-align">
              <div data-reveal="up" className="section-title-block">
                <div className="label-large text-align-center">Brands We Work With</div>
              </div>
            </div>
            <div data-reveal="up" data-delay="200" className="logo-content-block">
              <div className="sponsor-logo-row">
                <Image src="/images/Logo-2.svg" alt="sponsor-logo" width={144} height={33} className="sponsor-logo" />
                <Image src="/images/Logo-1.svg" alt="sponsor-logo" width={132} height={33} className="sponsor-logo" />
                <Image src="/images/Logo-4.svg" alt="sponsor-logo" width={148} height={33} className="sponsor-logo" />
                <Image src="/images/Logo.svg" alt="sponsor-logo" width={132} height={33} className="sponsor-logo" />
                <Image src="/images/Logo-3.svg" alt="sponsor-logo" width={131} height={33} className="sponsor-logo" />
                <Image src="/images/Logo-2.svg" alt="sponsor-logo" width={144} height={33} className="sponsor-logo" />
                <Image src="/images/Logo-1.svg" alt="sponsor-logo" width={132} height={33} className="sponsor-logo" />
                <Image src="/images/Logo-4.svg" alt="sponsor-logo" width={148} height={33} className="sponsor-logo" />
                <Image src="/images/Logo.svg" alt="sponsor-logo" width={132} height={33} className="sponsor-logo" />
                <Image src="/images/Logo-3.svg" alt="sponsor-logo" width={131} height={33} className="sponsor-logo" />
              </div>
              <div className="sponsor-logo-row">
                <Image src="/images/Logo-2.svg" alt="sponsor-logo" width={144} height={33} className="sponsor-logo" />
                <Image src="/images/Logo-1.svg" alt="sponsor-logo" width={132} height={33} className="sponsor-logo" />
                <Image src="/images/Logo-4.svg" alt="sponsor-logo" width={148} height={33} className="sponsor-logo" />
                <Image src="/images/Logo.svg" alt="sponsor-logo" width={132} height={33} className="sponsor-logo" />
                <Image src="/images/Logo-3.svg" alt="sponsor-logo" width={131} height={33} className="sponsor-logo" />
                <Image src="/images/Logo-2.svg" alt="sponsor-logo" width={144} height={33} className="sponsor-logo" />
                <Image src="/images/Logo-1.svg" alt="sponsor-logo" width={132} height={33} className="sponsor-logo" />
                <Image src="/images/Logo-4.svg" alt="sponsor-logo" width={148} height={33} className="sponsor-logo" />
                <Image src="/images/Logo.svg" alt="sponsor-logo" width={132} height={33} className="sponsor-logo" />
                <Image src="/images/Logo-3.svg" alt="sponsor-logo" width={131} height={33} className="sponsor-logo" />
              </div>
              <div className="logo-overlay-block"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
