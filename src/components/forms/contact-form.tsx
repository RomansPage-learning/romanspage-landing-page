"use client";

import type { FormEvent } from "react";
import { useEffect, useState } from "react";

import { trackEvent } from "@/lib/analytics";

type FormState = {
  status: "idle" | "submitting" | "success" | "error";
};

type ToastState = {
  visible: boolean;
  tone: "success" | "error";
  message: string;
};

const initialState: FormState = {
  status: "idle",
};

const initialToast: ToastState = {
  visible: false,
  tone: "success",
  message: "",
};

export function ContactForm() {
  const [state, setState] = useState<FormState>(initialState);
  const [toast, setToast] = useState<ToastState>(initialToast);

  useEffect(() => {
    if (!toast.visible) return;

    const timeout = window.setTimeout(() => {
      setToast((current) => ({ ...current, visible: false }));
    }, 4200);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [toast.visible]);

  async function onSubmit(formData: FormData) {
    setState({ status: "submitting" });

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      service: String(formData.get("service") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      website: String(formData.get("website") || "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { message: string };

      if (!response.ok) {
        setState({ status: "error" });
        setToast({
          visible: true,
          tone: "error",
          message: result.message || "Could not send your request. Please try again.",
        });
        return false;
      }

      trackEvent({
        event: "contact_form_submitted",
        category: "lead_generation",
        label: payload.service || "general",
      });

      setState({ status: "success" });
      setToast({
        visible: true,
        tone: "success",
        message: result.message || "Thanks. We will reach out shortly.",
      });
      return true;
    } catch {
      setState({ status: "error" });
      setToast({
        visible: true,
        tone: "error",
        message: "Network issue while sending your request. Please try again.",
      });
      return false;
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const submitted = await onSubmit(formData);

    if (submitted) {
      form.reset();
    }
  }

  return (
    <section className="section" aria-labelledby="contact-form-title">
      <div className="container stack-lg">
        <h2 id="contact-form-title">Send a message</h2>
        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <label>
            Name
            <input name="name" type="text" autoComplete="name" required minLength={2} maxLength={80} />
          </label>
          <label>
            Work email
            <input name="email" type="email" autoComplete="email" required maxLength={120} />
          </label>
          <label>
            Company
            <input name="company" type="text" autoComplete="organization" maxLength={120} />
          </label>
          <label>
            Service needed
            <select name="service" defaultValue="">
              <option value="" disabled>
                Select a service
              </option>
              <option value="recruitment">Recruitment</option>
              <option value="hr-consulting">HR Consulting</option>
              <option value="sme-hr-support">SME HR Support</option>
              <option value="training">Training</option>
              <option value="payroll">Payroll and HR Policies</option>
            </select>
          </label>
          <label className="full-width">
            Message
            <textarea name="message" required minLength={20} maxLength={2000} rows={6} />
          </label>
          <input name="website" type="text" tabIndex={-1} autoComplete="off" className="hp-field" aria-hidden="true" />
          <button
            className={`btn btn-primary full-width${state.status === "submitting" ? " btn-loading" : ""}`}
            type="submit"
            disabled={state.status === "submitting"}
          >
            {state.status === "submitting" ? (
              <>
                <span className="btn-loader" aria-hidden="true" />
                Sending...
              </>
            ) : (
              "Submit"
            )}
          </button>
          {toast.visible ? (
            <div
              className={`form-toast ${toast.tone}`}
              role="status"
              aria-live="polite"
              aria-atomic="true"
            >
              {toast.message}
            </div>
          ) : null}
        </form>
      </div>
    </section>
  );
}
