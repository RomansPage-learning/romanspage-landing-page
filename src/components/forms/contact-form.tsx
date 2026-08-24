"use client";

import { useState } from "react";

import { CheckIcon } from "@/components/landing/icons";
import { practiceAreas } from "@/content/services";
import { trackEvent } from "@/lib/analytics";

type Status = "idle" | "submitting" | "success" | "error";

const serviceOptions = [
  ...practiceAreas.map((area) => ({ id: area.id, label: area.navLabel })),
  { id: "general", label: "Not sure / general enquiry" },
];

export function ContactForm() {
  const [service, setService] = useState<string>("general");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");
    setError(null);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      service,
      message: String(formData.get("message") || "").trim(),
      website: String(formData.get("website") || "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const body = (await response.json().catch(() => null)) as
        | { error?: string }
        | null;

      if (!response.ok) {
        throw new Error(body?.error || "Something went wrong. Please try again.");
      }

      trackEvent({ event: "contact_form_submitted", category: "contact", label: service });
      form.reset();
      setStatus("success");
    } catch (submissionError) {
      setStatus("error");
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="form-success" role="status">
        <div className="form-success-icon">
          <CheckIcon size={30} strokeWidth={2.2} />
        </div>
        <h3>Message sent</h3>
        <p>
          Thanks for reaching out. A member of our team will be in touch
          shortly.
        </p>
        <button
          type="button"
          className="btn btn-outline"
          style={{ height: 42 }}
          onClick={() => setStatus("idle")}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="field-row">
        <div className="field">
          <label htmlFor="contact-name">Full name</label>
          <input
            id="contact-name"
            name="name"
            className="input"
            required
            placeholder="Jane Doe"
            autoComplete="name"
          />
        </div>
        <div className="field">
          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            className="input"
            required
            placeholder="jane@company.com"
            autoComplete="email"
          />
        </div>
      </div>
      <div className="field">
        <label>What do you need help with?</label>
        <div className="role-row" role="radiogroup" aria-label="What do you need help with">
          {serviceOptions.map((option) => (
            <button
              key={option.id}
              type="button"
              role="radio"
              aria-checked={service === option.id}
              className={`role-btn${service === option.id ? " active" : ""}${
                option.id === "general" ? " role-btn-wide" : ""
              }`}
              onClick={() => setService(option.id)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
      <div className="field">
        <label htmlFor="contact-company">Company / organization</label>
        <input
          id="contact-company"
          name="company"
          className="input"
          placeholder="Acme Ltd. (optional)"
          autoComplete="organization"
        />
      </div>
      <div className="field">
        <label htmlFor="contact-message">How can we help?</label>
        <textarea
          id="contact-message"
          name="message"
          className="textarea"
          required
          rows={4}
          placeholder="Tell us a little about what you need…"
        />
      </div>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      {status === "error" && error ? (
        <p className="form-error" role="alert">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        className="form-submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
