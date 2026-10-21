import type { CSSProperties } from "react";
import Link from "next/link";
import { mediaUrl } from "@/lib/strapi/client";
import type { Work } from "@/lib/strapi/types";

const formatDate = (iso: string | null) =>
  iso
    ? new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).format(
        new Date(iso),
      )
    : null;

export function WorkHero({ work }: { work: Work }) {
  const style = work.mainImage
    ? ({ "--bg-image": `url("${mediaUrl(work.mainImage.url)}")` } as CSSProperties)
    : undefined;
  return (
    <section className="section_breadcrumb work" style={style}>
      <div className="section-gap hero is-relative">
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
              <div className="breadcrumb-info-block">
                <div className="breadcrumb-single-info-block">
                  <div className="breadcrumb-info-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M16.6673 8.33464C16.6673 12.4955 12.0515 16.8288 10.5015 18.1671C10.3571 18.2757 10.1813 18.3344 10.0007 18.3344C9.81999 18.3344 9.64421 18.2757 9.49982 18.1671C7.94982 16.8288 3.33398 12.4955 3.33398 8.33464C3.33398 6.56653 4.03636 4.87083 5.28661 3.62059C6.53685 2.37035 8.23254 1.66797 10.0007 1.66797C11.7688 1.66797 13.4645 2.37035 14.7147 3.62059C15.9649 4.87083 16.6673 6.56653 16.6673 8.33464Z"
                        stroke="white"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 10.832C11.3807 10.832 12.5 9.71274 12.5 8.33203C12.5 6.95132 11.3807 5.83203 10 5.83203C8.61929 5.83203 7.5 6.95132 7.5 8.33203C7.5 9.71274 8.61929 10.832 10 10.832Z"
                        stroke="white"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="paragraph-small text-color-white">{work.location}</div>
                </div>
                <div className="breadcrumb-single-info-block">
                  <div className="breadcrumb-info-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.66602 1.66797V5.0013"
                        stroke="white"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.334 1.66797V5.0013"
                        stroke="white"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.8333 3.33203H4.16667C3.24619 3.33203 2.5 4.07822 2.5 4.9987V16.6654C2.5 17.5858 3.24619 18.332 4.16667 18.332H15.8333C16.7538 18.332 17.5 17.5858 17.5 16.6654V4.9987C17.5 4.07822 16.7538 3.33203 15.8333 3.33203Z"
                        stroke="white"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2.5 8.33203H17.5"
                        stroke="white"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="paragraph-small text-color-white">{formatDate(work.projectDate)}</div>
                </div>
                <div className="breadcrumb-single-info-block">
                  <div className="breadcrumb-info-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15.8327 17.5V15.8333C15.8327 14.9493 15.4815 14.1014 14.8564 13.4763C14.2312 12.8512 13.3834 12.5 12.4993 12.5H7.49935C6.61529 12.5 5.76745 12.8512 5.14233 13.4763C4.5172 14.1014 4.16602 14.9493 4.16602 15.8333V17.5"
                        stroke="white"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.99935 9.16667C11.8403 9.16667 13.3327 7.67428 13.3327 5.83333C13.3327 3.99238 11.8403 2.5 9.99935 2.5C8.1584 2.5 6.66602 3.99238 6.66602 5.83333C6.66602 7.67428 8.1584 9.16667 9.99935 9.16667Z"
                        stroke="white"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="paragraph-small text-color-white">{work.client}</div>
                </div>
              </div>
            </div>
            <div className="breadcrumb-content-block is-4">
              <div className="breadcrumb-heading-block is-2 max-width-764">
                <div data-reveal="up" data-delay="200" className="breadcrumb-subtitle-block is-2">
                  <div className="breadcrumb-subtitle">Our Work</div>
                  <div className="breadcrumb-subtitle">{work.tag}</div>
                </div>
                <div data-reveal="up" data-delay="400" className="breadcrumb-title-block">
                  <h1 className="heading-style-2 text-color-white">{work.detailTitle ?? work.title}</h1>
                </div>
              </div>
              <div data-reveal="up" data-delay="600" className="breadcrumb-summary-block max-width-460">
                <p className="paragraph-small text-color-white">{work.detailDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="breadcrumb-bg-overlay"></div>
    </section>
  );
}
