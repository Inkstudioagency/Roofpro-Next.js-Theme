import Link from "next/link";

export function AboutBreadcrumb() {
  return (
    <section className="section_breadcrumb">
      <div className="section-gap hero">
        <div className="container-main">
          <div className="breadcrumb-wrapper">
            <div data-reveal="up" className="breadcrumb-link-block">
              <Link className="link-button text-color-white link-block" href="/">
                <div className="link-button-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M19 12H5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 5L5 12L12 19"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="button-text">Back to Home</div>
              </Link>
            </div>
            <div className="breadcrumb-content-block max-width-708">
              <div data-reveal="up" data-delay="200" className="breadcrumb-subtitle-block">
                <div className="breadcrumb-subtitle">About Us</div>
              </div>
              <div data-reveal="up" data-delay="400" className="breadcrumb-title-block">
                <h1 className="heading-style-2 text-color-white">
                  Building excellence in roofing solutions for over two decades
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
