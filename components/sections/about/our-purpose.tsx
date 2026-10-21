import Image from "next/image";
import { Tabs, type TabItem } from "@/components/ui/tabs";

const PURPOSE: TabItem[] = [
  {
    label: "Our Mission",
    panel: (
      <div className="our-purpose-tab-content-inner">
        <div className="our-purpose-text-block">
          <div className="our-purpose-icon-block">
            <div className="our-purpose-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.0013 29.3327C23.3651 29.3327 29.3346 23.3631 29.3346 15.9993C29.3346 8.63555 23.3651 2.66602 16.0013 2.66602C8.63751 2.66602 2.66797 8.63555 2.66797 15.9993C2.66797 23.3631 8.63751 29.3327 16.0013 29.3327Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 24C20.4183 24 24 20.4183 24 16C24 11.5817 20.4183 8 16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.9987 18.6673C17.4715 18.6673 18.6654 17.4734 18.6654 16.0007C18.6654 14.5279 17.4715 13.334 15.9987 13.334C14.5259 13.334 13.332 14.5279 13.332 16.0007C13.332 17.4734 14.5259 18.6673 15.9987 18.6673Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="our-purpose-title-block">
            <div className="paragraph-large text-weight-semi-bold text-color-black">Our Mission</div>
          </div>
          <div className="our-purpose-summary-block">
            <p className="paragraph-small">
              To deliver exceptional roofing solutions that protect and enhance properties across Brisbane, while
              building lasting relationships through honest communication, superior craftsmanship, and unwavering
              commitment to customer satisfaction. We strive to set the industry standard for quality, reliability, and
              professional service.
            </p>
          </div>
        </div>
        <div className="our-purpose-image-block">
          <div className="our-purpose-lg-image-block">
            <Image
              src="/images/our-purpose-image.jpg"
              alt="our-purpose-lg-image"
              width={474}
              height={409}
              className="our-purpose-lg-image"
            />
          </div>
          <div className="our-purpose-sm-image-block">
            <Image
              src="/images/our-purpose-image-1.jpg"
              alt="our-purpose-sm-image"
              width={230}
              height={193}
              className="our-purpose-sm-image"
            />
            <Image
              src="/images/our-purpose-image-2.jpg"
              alt="our-purpose-sm-image"
              width={230}
              height={193}
              className="our-purpose-sm-image"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "Our Vision",
    panel: (
      <div className="our-purpose-tab-content-inner">
        <div className="our-purpose-text-block">
          <div className="our-purpose-icon-block">
            <div className="our-purpose-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.0013 29.3327C23.3651 29.3327 29.3346 23.3631 29.3346 15.9993C29.3346 8.63555 23.3651 2.66602 16.0013 2.66602C8.63751 2.66602 2.66797 8.63555 2.66797 15.9993C2.66797 23.3631 8.63751 29.3327 16.0013 29.3327Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 24C20.4183 24 24 20.4183 24 16C24 11.5817 20.4183 8 16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.9987 18.6673C17.4715 18.6673 18.6654 17.4734 18.6654 16.0007C18.6654 14.5279 17.4715 13.334 15.9987 13.334C14.5259 13.334 13.332 14.5279 13.332 16.0007C13.332 17.4734 14.5259 18.6673 15.9987 18.6673Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="our-purpose-title-block">
            <div className="paragraph-large text-weight-semi-bold text-color-black">Our Vision</div>
          </div>
          <div className="our-purpose-summary-block">
            <p className="paragraph-small">
              To deliver exceptional roofing solutions that protect and enhance properties across Brisbane, while
              building lasting relationships through honest communication, superior craftsmanship, and unwavering
              commitment to customer satisfaction. We strive to set the industry standard for quality, reliability, and
              professional service.
            </p>
          </div>
        </div>
        <div className="our-purpose-image-block">
          <div className="our-purpose-lg-image-block">
            <Image
              src="/images/our-purpose-image-3.jpg"
              alt="our-purpose-lg-image"
              width={474}
              height={409}
              className="our-purpose-lg-image"
            />
          </div>
          <div className="our-purpose-sm-image-block">
            <Image
              src="/images/our-purpose-image-4.jpg"
              alt="our-purpose-sm-image"
              width={230}
              height={193}
              className="our-purpose-sm-image"
            />
            <Image
              src="/images/our-purpose-image-5.jpg"
              alt="our-purpose-sm-image"
              width={230}
              height={193}
              className="our-purpose-sm-image"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "Our Process",
    panel: (
      <div className="our-purpose-tab-content-inner">
        <div className="our-purpose-text-block">
          <div className="our-purpose-icon-block">
            <div className="our-purpose-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.0013 29.3327C23.3651 29.3327 29.3346 23.3631 29.3346 15.9993C29.3346 8.63555 23.3651 2.66602 16.0013 2.66602C8.63751 2.66602 2.66797 8.63555 2.66797 15.9993C2.66797 23.3631 8.63751 29.3327 16.0013 29.3327Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 24C20.4183 24 24 20.4183 24 16C24 11.5817 20.4183 8 16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.9987 18.6673C17.4715 18.6673 18.6654 17.4734 18.6654 16.0007C18.6654 14.5279 17.4715 13.334 15.9987 13.334C14.5259 13.334 13.332 14.5279 13.332 16.0007C13.332 17.4734 14.5259 18.6673 15.9987 18.6673Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="our-purpose-title-block">
            <div className="paragraph-large text-weight-semi-bold text-color-black">Our Process</div>
          </div>
          <div className="our-purpose-summary-block">
            <p className="paragraph-small">
              To deliver exceptional roofing solutions that protect and enhance properties across Brisbane, while
              building lasting relationships through honest communication, superior craftsmanship, and unwavering
              commitment to customer satisfaction. We strive to set the industry standard for quality, reliability, and
              professional service.
            </p>
          </div>
        </div>
        <div className="our-purpose-image-block">
          <div className="our-purpose-lg-image-block">
            <Image
              src="/images/our-purpose-image-9.jpg"
              alt="our-purpose-lg-image"
              width={474}
              height={409}
              className="our-purpose-lg-image"
            />
          </div>
          <div className="our-purpose-sm-image-block">
            <Image
              src="/images/our-purpose-image-10.jpg"
              alt="our-purpose-sm-image"
              width={230}
              height={193}
              className="our-purpose-sm-image"
            />
            <Image
              src="/images/our-purpose-image-11.jpg"
              alt="our-purpose-sm-image"
              width={230}
              height={193}
              className="our-purpose-sm-image"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "Our Statement",
    panel: (
      <div className="our-purpose-tab-content-inner">
        <div className="our-purpose-text-block">
          <div className="our-purpose-icon-block">
            <div className="our-purpose-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.0013 29.3327C23.3651 29.3327 29.3346 23.3631 29.3346 15.9993C29.3346 8.63555 23.3651 2.66602 16.0013 2.66602C8.63751 2.66602 2.66797 8.63555 2.66797 15.9993C2.66797 23.3631 8.63751 29.3327 16.0013 29.3327Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 24C20.4183 24 24 20.4183 24 16C24 11.5817 20.4183 8 16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.9987 18.6673C17.4715 18.6673 18.6654 17.4734 18.6654 16.0007C18.6654 14.5279 17.4715 13.334 15.9987 13.334C14.5259 13.334 13.332 14.5279 13.332 16.0007C13.332 17.4734 14.5259 18.6673 15.9987 18.6673Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="our-purpose-title-block">
            <div className="paragraph-large text-weight-semi-bold text-color-black">Our Statement</div>
          </div>
          <div className="our-purpose-summary-block">
            <p className="paragraph-small">
              To deliver exceptional roofing solutions that protect and enhance properties across Brisbane, while
              building lasting relationships through honest communication, superior craftsmanship, and unwavering
              commitment to customer satisfaction. We strive to set the industry standard for quality, reliability, and
              professional service.
            </p>
          </div>
        </div>
        <div className="our-purpose-image-block">
          <div className="our-purpose-lg-image-block">
            <Image
              src="/images/our-purpose-image-6.jpg"
              alt="our-purpose-lg-image"
              width={474}
              height={409}
              className="our-purpose-lg-image"
            />
          </div>
          <div className="our-purpose-sm-image-block">
            <Image
              src="/images/our-purpose-image-7.jpg"
              alt="our-purpose-sm-image"
              width={230}
              height={193}
              className="our-purpose-sm-image"
            />
            <Image
              src="/images/our-purpose-image-8.jpg"
              alt="our-purpose-sm-image"
              width={230}
              height={193}
              className="our-purpose-sm-image"
            />
          </div>
        </div>
      </div>
    ),
  },
];

function TabArrow() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M17.0005 7L7.00049 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.99951 7H16.9995V16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function OurPurpose() {
  return (
    <section className="section_our-purpose">
      <div className="section-gap">
        <div className="container-main">
          <div className="our-purpose-wrapper">
            <div className="section-heading-block">
              <div data-reveal="up" className="section-title-block max-width-250">
                <h2 className="heading-style-2">
                  What <span className="heading-style-2-ht">Drives Us</span>
                </h2>
              </div>
            </div>
            <div className="our-purpose-content-block">
              <Tabs prefix="our-purpose" items={PURPOSE} icon={<TabArrow />} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
