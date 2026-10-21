"use server";

import { createSubmission } from "@/lib/strapi/queries";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  /** fields that failed validation, so the form can mark them aria-invalid */
  invalid?: Array<"name" | "email">;
};

const field = (data: FormData, name: string, max = 256) =>
  String(data.get(name) ?? "")
    .trim()
    .slice(0, max);

/** Stores a contact form submission in Strapi (Content Manager > Contact submission). */
export async function submitContact(_prev: ContactState, data: FormData): Promise<ContactState> {
  // honeypot: real visitors never see or fill this field
  if (field(data, "company")) return { status: "success" };

  const submission = {
    name: field(data, "name"),
    email: field(data, "email"),
    phone: field(data, "phone"),
    service: field(data, "service"),
    message: field(data, "message", 5000),
  };
  const invalid: NonNullable<ContactState["invalid"]> = [];
  if (!submission.name) invalid.push("name");
  if (!/^\S+@\S+\.\S+$/.test(submission.email)) invalid.push("email");
  if (invalid.length) {
    return { status: "error", message: "Please enter your name and a valid email address.", invalid };
  }

  try {
    if (await createSubmission(submission)) return { status: "success" };
    // no CMS connected (built-in content mode): nowhere to store the message
    return {
      status: "error",
      message: "Online messages aren't available right now. Please email us at info@roofpro.com.au.",
    };
  } catch (error) {
    console.error("[contact] could not save submission:", error);
    return { status: "error" };
  }
}
