import { Slider, SliderArrow } from "@/components/ui/slider";
import { SiteNav } from "./site-nav";

const TAGLINE = "Most Trusted Metal Roofing";

export function Header() {
  return (
    <header data-reveal="down" className="section_header">
      <div className="navbar nav">
        <div className="nav-inner-block">
          <div className="nav-top-block">
            {/* desktop: three taglines in a row */}
            <div className="nav-top-content-block is-1">
              <div className="nav-top-icon">
                <CheckIcon />
              </div>
              <div className="paragraph-xsmall text-color-white">{TAGLINE}</div>
              <div className="nav-top-icon">
                <SparkIcon />
              </div>
              <div className="paragraph-xsmall text-color-white">{TAGLINE}</div>
              <div className="nav-top-icon">
                <SparkIcon />
              </div>
              <div className="paragraph-xsmall text-color-white">{TAGLINE}</div>
            </div>

            {/* mobile: one tagline at a time */}
            <div className="nav-top-content-block is-2">
              <Slider className="nav-top-slider-block slider" label="Highlights">
                <div className="nav-top-slider-mask slider-mask">
                  {[CheckIcon, SparkIcon, SparkIcon].map((Icon, i) => (
                    <div key={i} className="nav-top-slide slide">
                      <div className="nav-slide-content">
                        <div className="nav-top-icon">
                          <Icon />
                        </div>
                        <div className="paragraph-xsmall text-color-white">{TAGLINE}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <SliderArrow
                  direction="left"
                  className="nav-top-slider-arrow"
                  iconClassName="nav-top-slider-arrow-icon"
                />
                <SliderArrow
                  direction="right"
                  className="nav-top-slider-arrow"
                  iconClassName="nav-top-slider-arrow-icon"
                />
                <div className="display-none slider-nav" />
              </Slider>
            </div>
          </div>

          <SiteNav />
        </div>
      </div>
    </header>
  );
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M7.5 9.16667L10 11.6667L16.6667 5"
        stroke="white"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6673 10.0007V15.0006C16.6673 15.4427 16.4917 15.8666 16.1792 16.1792C15.8666 16.4917 15.4427 16.6673 15.0006 16.6673H5.00065C4.55862 16.6673 4.1347 16.4917 3.82214 16.1792C3.50958 15.8666 3.33398 15.4427 3.33398 15.0006V5.00065C3.33398 4.55862 3.50958 4.1347 3.82214 3.82214C4.1347 3.50958 4.55862 3.33398 5.00065 3.33398H12.5007"
        stroke="white"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M6 0L7.18794 4.81206L12 6L7.18794 7.18794L6 12L4.81206 7.18794L0 6L4.81206 4.81206L6 0Z" fill="white" />
    </svg>
  );
}
