"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitContact, type ContactState } from "@/app/actions/contact";

const initial: ContactState = { status: "idle" };

export function ContactForm({ services }: { services: string[] }) {
  const [state, action, pending] = useActionState(submitContact, initial);
  const done = state.status === "success";
  const success = useRef<HTMLDivElement>(null);
  const invalid = (name: "name" | "email") =>
    state.invalid?.includes(name) ? ({ "aria-invalid": true, "aria-describedby": "contact-error" } as const) : {};

  // the form is replaced by the confirmation, so move focus there instead of losing it
  useEffect(() => {
    if (done) success.current?.focus();
  }, [done]);

  return (
    <div data-reveal="up" data-delay="600" className="contact-form-block form-block">
      {!done && (
        <form className="contact-form" action={action} aria-label="Contact form">
          <div className="contact-form-content">
            <div className="contact-form-title-block">
              <h3 className="heading-style-3 text-weight-semi-bold">Contact Details</h3>
            </div>
            <div className="contact-form-row">
              <div className="form-field-block">
                <label className="label-regular" htmlFor="contact-name">
                  Your Full Name
                </label>
                <input
                  className="form-text-field form-input"
                  maxLength={256}
                  name="name"
                  placeholder="e.g. John Doe"
                  type="text"
                  id="contact-name"
                  autoComplete="name"
                  required
                  {...invalid("name")}
                />
              </div>
              <div className="form-field-block">
                <label className="label-regular" htmlFor="contact-email">
                  Your Email Address
                </label>
                <input
                  className="form-text-field form-input"
                  maxLength={256}
                  name="email"
                  placeholder="Enter Email Address"
                  type="email"
                  id="contact-email"
                  autoComplete="email"
                  required
                  {...invalid("email")}
                />
              </div>
            </div>
            <div className="contact-form-row">
              <div className="form-field-block">
                <label className="label-regular" htmlFor="contact-phone">
                  Your Phone Number
                </label>
                <input
                  className="form-text-field form-input"
                  maxLength={256}
                  name="phone"
                  placeholder="Enter Phone Number"
                  type="tel"
                  id="contact-phone"
                  autoComplete="tel"
                  required
                />
              </div>
              <div className="form-field-block">
                <label className="label-regular" htmlFor="contact-service">
                  Service Required
                </label>
                <select
                  className="form-text-field select form-input form-select"
                  id="contact-service"
                  name="service"
                  defaultValue=""
                >
                  <option value="">None</option>
                  {services.map((title) => (
                    <option key={title} value={title}>
                      {title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-field-block">
              <label className="label-regular" htmlFor="contact-message">
                Message
              </label>
              <textarea
                className="form-text-field lg form-input"
                id="contact-message"
                name="message"
                maxLength={5000}
                placeholder="Write message"
              />
            </div>
            {/* honeypot for bots; hidden from people and assistive tech */}
            <div className="visually-hidden" aria-hidden="true">
              <label htmlFor="contact-company">Company</label>
              <input id="contact-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <div className="contact-form-button-block">
              <button className="primary-button form button-base" type="submit" disabled={pending}>
                {pending ? "Please wait..." : "Submit"}
              </button>
            </div>
          </div>
        </form>
      )}
      <div
        ref={success}
        tabIndex={-1}
        className="success-message form-success"
        role="status"
        style={done ? { display: "block" } : undefined}
      >
        <div>Thank you! Your submission has been received!</div>
      </div>
      <div
        id="contact-error"
        className="error-message form-error"
        role="alert"
        style={state.status === "error" ? { display: "block" } : undefined}
      >
        <div>{state.message ?? "Oops! Something went wrong while submitting the form."}</div>
      </div>
    </div>
  );
}
