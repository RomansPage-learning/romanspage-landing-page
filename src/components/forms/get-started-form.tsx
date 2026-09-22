"use client";

import { useMemo, useState } from "react";

import { CheckIcon } from "@/components/landing/icons";
import { trackEvent } from "@/lib/analytics";
import { nigeriaStates } from "@/content/nigeria-locations";

type Status = "idle" | "submitting" | "success" | "error";

const staffRangeOptions = ["1–20 staff", "20–50 staff", "50+ staff"];
const packageOptions = ["Startup Plan", "SME Plan", "Not sure yet"];

type GetStartedFormProps = {
  defaultPackage?: string;
};

export function GetStartedForm({ defaultPackage }: GetStartedFormProps) {
  const [staffRange, setStaffRange] = useState<string>(staffRangeOptions[0]);
  const [packageInterest, setPackageInterest] = useState<string>(
    packageOptions.includes(defaultPackage || "") ? (defaultPackage as string) : packageOptions[2],
  );
  const [state, setState] = useState<string>("");
  const [lga, setLga] = useState<string>("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const lgaOptions = useMemo(
    () => nigeriaStates.find((item) => item.name === state)?.lgas ?? [],
    [state],
  );

  function onStateChange(nextState: string) {
    setState(nextState);
    setLga("");
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");
    setError(null);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      streetAddress: String(formData.get("streetAddress") || "").trim(),
      state,
      lga,
      staffRange,
      packageInterest,
      proposedStartDate: String(formData.get("proposedStartDate") || "").trim(),
      notes: String(formData.get("notes") || "").trim(),
      website: String(formData.get("website") || "").trim(),
    };

    try {
      const response = await fetch("/api/get-started", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const body = (await response.json().catch(() => null)) as
        | { message?: string }
        | null;

      if (!response.ok) {
        throw new Error(body?.message || "Something went wrong. Please try again.");
      }

      trackEvent({ event: "get_started_form_submitted", category: "hr", label: packageInterest });
      form.reset();
      setState("");
      setLga("");
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
        <h3>Request received</h3>
        <p>
          Thanks for reaching out. A member of our team will be in touch
          shortly to get you started.
        </p>
        <button
          type="button"
          className="btn btn-outline"
          style={{ height: 42 }}
          onClick={() => setStatus("idle")}
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="field-row">
        <div className="field">
          <label htmlFor="gs-name">Full name</label>
          <input
            id="gs-name"
            name="name"
            className="input"
            required
            placeholder="Jane Doe"
            autoComplete="name"
          />
        </div>
        <div className="field">
          <label htmlFor="gs-company">Company name</label>
          <input
            id="gs-company"
            name="company"
            className="input"
            required
            placeholder="Acme Ltd."
            autoComplete="organization"
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="gs-address">Company address</label>
        <input
          id="gs-address"
          name="streetAddress"
          className="input"
          required
          placeholder="Street address"
          autoComplete="street-address"
        />
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor="gs-state">State</label>
          <select
            id="gs-state"
            name="state"
            className="select"
            required
            value={state}
            onChange={(event) => onStateChange(event.target.value)}
          >
            <option value="" disabled>
              Select a state
            </option>
            {nigeriaStates.map((item) => (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="gs-lga">Local Government Area</label>
          <select
            id="gs-lga"
            name="lga"
            className="select"
            required
            disabled={!state}
            value={lga}
            onChange={(event) => setLga(event.target.value)}
          >
            <option value="" disabled>
              {state ? "Select an LGA" : "Select a state first"}
            </option>
            {lgaOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor="gs-email">Email address</label>
          <input
            id="gs-email"
            name="email"
            type="email"
            className="input"
            required
            placeholder="jane@company.com"
            autoComplete="email"
          />
        </div>
        <div className="field">
          <label htmlFor="gs-phone">Phone number</label>
          <input
            id="gs-phone"
            name="phone"
            type="tel"
            className="input"
            required
            placeholder="+234 800 000 0000"
            autoComplete="tel"
          />
        </div>
      </div>
      <div className="field">
        <label>How many staff do you currently have?</label>
        <div className="role-row" role="radiogroup" aria-label="Staff count">
          {staffRangeOptions.map((option) => (
            <button
              key={option}
              type="button"
              role="radio"
              aria-checked={staffRange === option}
              className={`role-btn${staffRange === option ? " active" : ""}`}
              onClick={() => setStaffRange(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <div className="field">
        <label>Which package are you interested in?</label>
        <div className="role-row" role="radiogroup" aria-label="Package interest">
          {packageOptions.map((option) => (
            <button
              key={option}
              type="button"
              role="radio"
              aria-checked={packageInterest === option}
              className={`role-btn${packageInterest === option ? " active" : ""}${
                option === "Not sure yet" ? " role-btn-wide" : ""
              }`}
              onClick={() => setPackageInterest(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <div className="field">
        <label htmlFor="gs-start-date">Proposed start date</label>
        <input id="gs-start-date" name="proposedStartDate" type="date" className="input" />
      </div>
      <div className="field">
        <label htmlFor="gs-notes">Anything else we should know?</label>
        <textarea
          id="gs-notes"
          name="notes"
          className="textarea"
          rows={4}
          placeholder="Give us a few clues about what you need…"
        />
      </div>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="gs-website">Website</label>
        <input id="gs-website" name="website" tabIndex={-1} autoComplete="off" />
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
        {status === "submitting" ? "Submitting…" : "Submit"}
      </button>
    </form>
  );
}
