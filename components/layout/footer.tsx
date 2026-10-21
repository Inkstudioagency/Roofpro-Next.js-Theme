import Link from "next/link";
import { NavLink } from "@/components/ui/nav-link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="section_footer">
      <div className="section-gap-sm">
        <div className="container-large">
          <div className="footer-wrapper">
            <div className="footer-content-block">
              <div className="footer-main-content-block">
                <div className="footer-info-content-block">
                  <div className="footer-summary-block">
                    <p className="paragraph-small text-color-white _80">
                      Your trusted partner in luxury real estate. Find your perfect home with us.
                    </p>
                  </div>
                  <div className="footer-social-info-block">
                    <a
                      className="footer-social-icon-block link-block"
                      href="https://fb.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="footer-social-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </a>{" "}
                    <a
                      className="footer-social-icon-block link-block"
                      href="https://x.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="footer-social-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M22 4.00002C22 4.00002 21.3 6.10002 20 7.40002C21.6 17.4 10.6 24.7 2 19C4.2 19.1 6.4 18.4 8 17C3 15.5 0.5 9.60002 3 5.00002C5.2 7.60002 8.6 9.10002 12 9.00002C11.1 4.80002 16 2.40002 19 5.20002C20.1 5.20002 22 4.00002 22 4.00002Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </a>{" "}
                    <a
                      className="footer-social-icon-block link-block"
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="footer-social-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M15.9997 11.3703C16.1231 12.2025 15.981 13.0525 15.5935 13.7993C15.206 14.5461 14.5929 15.1517 13.8413 15.53C13.0898 15.9082 12.2382 16.0399 11.4075 15.9062C10.5768 15.7726 9.80947 15.3804 9.21455 14.7855C8.61962 14.1905 8.22744 13.4232 8.09377 12.5925C7.96011 11.7619 8.09177 10.9102 8.47003 10.1587C8.84829 9.40716 9.45389 8.79404 10.2007 8.40654C10.9475 8.01904 11.7975 7.87689 12.6297 8.0003C13.4786 8.12619 14.2646 8.52176 14.8714 9.12861C15.4782 9.73545 15.8738 10.5214 15.9997 11.3703Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M17.5 6.5H17.51"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </a>{" "}
                    <a
                      className="footer-social-icon-block link-block"
                      href="https://linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="footer-social-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6 9H2V21H6V9Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="footer-link-content-block">
                  <div className="footer-link-block">
                    <div className="paragraph-xsmall text-color-white text-weight-semi-bold">QUICK LINKS</div>
                    <NavLink className="footer-link" href="/about">
                      About Us
                    </NavLink>{" "}
                    <NavLink className="footer-link" href="/services">
                      Our Services
                    </NavLink>{" "}
                    <NavLink className="footer-link" href="/contact">
                      Contact Us
                    </NavLink>{" "}
                    <NavLink className="footer-link" href="/our-work">
                      Our Work
                    </NavLink>{" "}
                    <Link className="footer-link" href="/#section_process">
                      Our Process
                    </Link>
                  </div>
                  <div className="footer-contact-info-block">
                    <div className="paragraph-xsmall text-color-white text-weight-semi-bold">QUICK LINKS</div>
                    <div className="footer-contact-single-block">
                      <div className="footer-contact-logo-block">
                        <div className="footer-contact-icon">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_152_766)">
                              <path
                                d="M3 7C3 6.46957 3.21071 5.96086 3.58579 5.58579C3.96086 5.21071 4.46957 5 5 5H19C19.5304 5 20.0391 5.21071 20.4142 5.58579C20.7893 5.96086 21 6.46957 21 7V17C21 17.5304 20.7893 18.0391 20.4142 18.4142C20.0391 18.7893 19.5304 19 19 19H5C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17V7Z"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M3 7L12 13L21 7"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_152_766">
                                <rect width="24" height="24" fill="currentColor" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                      <div className="footer-contact-text-block">
                        <div className="paragraph-xsmall text-color-white _80">Email Address</div>
                        <a className="footer-contact-link" href="mailto:example@dwell.com">
                          example@dwell.com
                        </a>
                      </div>
                    </div>
                    <div className="footer-contact-single-block">
                      <div className="footer-contact-logo-block">
                        <div className="footer-contact-icon">
                          <svg
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.75 0.75H6.75L8.75 5.75L6.25 7.25C7.32096 9.42153 9.07847 11.179 11.25 12.25L12.75 9.75L17.75 11.75V15.75C17.75 16.2804 17.5393 16.7891 17.1642 17.1642C16.7891 17.5393 16.2804 17.75 15.75 17.75C11.8493 17.513 8.17015 15.8565 5.40683 13.0932C2.6435 10.3298 0.98705 6.65074 0.75 2.75C0.75 2.21957 0.960714 1.71086 1.33579 1.33579C1.71086 0.960714 2.21957 0.75 2.75 0.75Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="footer-contact-text-block">
                        <div className="paragraph-xsmall text-color-white _80">Phone Number</div>
                        <a className="footer-contact-link" href="tel:+1(555)123-4567">
                          +1 (555) 123-4567
                        </a>
                      </div>
                    </div>
                    <div className="footer-contact-single-block">
                      <div className="footer-contact-logo-block">
                        <div className="footer-contact-icon">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_152_783)">
                              <path
                                d="M9 11C9 11.7956 9.31607 12.5587 9.87868 13.1213C10.4413 13.6839 11.2044 14 12 14C12.7956 14 13.5587 13.6839 14.1213 13.1213C14.6839 12.5587 15 11.7956 15 11C15 10.2044 14.6839 9.44129 14.1213 8.87868C13.5587 8.31607 12.7956 8 12 8C11.2044 8 10.4413 8.31607 9.87868 8.87868C9.31607 9.44129 9 10.2044 9 11Z"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M17.657 16.6567L13.414 20.8997C13.039 21.2743 12.5306 21.4848 12.0005 21.4848C11.4704 21.4848 10.962 21.2743 10.587 20.8997L6.343 16.6567C5.22422 15.5379 4.46234 14.1124 4.15369 12.5606C3.84504 11.0087 4.00349 9.40022 4.60901 7.93844C5.21452 6.47665 6.2399 5.22725 7.55548 4.34821C8.87107 3.46918 10.4178 3 12 3C13.5822 3 15.1289 3.46918 16.4445 4.34821C17.7601 5.22725 18.7855 6.47665 19.391 7.93844C19.9965 9.40022 20.155 11.0087 19.8463 12.5606C19.5377 14.1124 18.7758 15.5379 17.657 16.6567Z"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_152_783">
                                <rect width="24" height="24" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                      <div className="footer-contact-text-block">
                        <div className="paragraph-xsmall text-color-white _80">Address</div>
                        <div className="footer-contact-link hover-none">California DRE #01521930</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-logo-content-block">
                <Image
                  src="/images/RoofPro-Services.svg"
                  alt="RoofPro Services"
                  width={1343}
                  height={163}
                  className="footer-logo"
                />
              </div>
            </div>
            <div className="footer-bottom-block">
              <div className="copyright-text-block">
                <p className="paragraph-small text-color-white mobile-middle text-paragraph-regular">
                  © 2025 RoofPro Services All Rights Reserved.
                </p>
              </div>
              <div className="copyright-text-block">
                <p className="paragraph-small text-color-white mobile-middle text-paragraph-regular">
                  Powered By{" "}
                  <a className="credit-link" href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
                    Next.js
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
