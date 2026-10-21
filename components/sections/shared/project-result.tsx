interface ProjectResultProps {
  /** work detail pages pass the project's stats from Strapi; the about page shows the defaults */
  duration?: string | null;
  roofArea?: string | null;
  energySavings?: string | null;
  warranty?: string | null;
}

export function ProjectResult({ duration, roofArea, energySavings, warranty }: ProjectResultProps) {
  return (
    <section className="section_project-result">
      <div className="section-gap">
        <div className="container-main">
          <div className="project-result-wrapper">
            <div className="section-heading-block">
              <div data-reveal="up" className="section-title-block max-width-220">
                <h2 className="heading-style-2">
                  Project <span className="heading-style-2-ht">Results</span>
                </h2>
              </div>
            </div>
            <div data-reveal="up" data-delay="200" className="project-result-content-block">
              <div className="project-result-single-block">
                <div className="project-result-title-block">
                  <div className="paragraph-small">Project Duration</div>
                </div>
                <div className="project-result-number-block">
                  <div className="project-result-number">{duration ?? "12 Days"}</div>
                  <div className="project-result-icon">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_152_1789)">
                        <path
                          d="M22.6654 9.33398L9.33203 22.6673"
                          stroke="currentcolor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.668 9.33398H22.668V21.334"
                          stroke="currentcolor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_152_1789">
                          <rect width="32" height="32" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="project-result-single-block">
                <div className="project-result-title-block">
                  <div className="paragraph-small">Roof Area</div>
                </div>
                <div className="project-result-number-block">
                  <div className="project-result-number">{roofArea ?? "280m²"}</div>
                  <div className="project-result-icon">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_152_1789)">
                        <path
                          d="M22.6654 9.33398L9.33203 22.6673"
                          stroke="currentcolor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.668 9.33398H22.668V21.334"
                          stroke="currentcolor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_152_1789">
                          <rect width="32" height="32" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="project-result-single-block">
                <div className="project-result-title-block">
                  <div className="paragraph-small">Energy Savings</div>
                </div>
                <div className="project-result-number-block">
                  <div className="project-result-number">{energySavings ?? "25%"}</div>
                  <div className="project-result-icon">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_152_1789)">
                        <path
                          d="M22.6654 9.33398L9.33203 22.6673"
                          stroke="currentcolor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.668 9.33398H22.668V21.334"
                          stroke="currentcolor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_152_1789">
                          <rect width="32" height="32" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="project-result-single-block">
                <div className="project-result-title-block">
                  <div className="paragraph-small">Warranty</div>
                </div>
                <div className="project-result-number-block">
                  <div className="project-result-number">{warranty ?? "20 Years"}</div>
                  <div className="project-result-icon">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_152_1789)">
                        <path
                          d="M22.6654 9.33398L9.33203 22.6673"
                          stroke="currentcolor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.668 9.33398H22.668V21.334"
                          stroke="currentcolor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_152_1789">
                          <rect width="32" height="32" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
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
