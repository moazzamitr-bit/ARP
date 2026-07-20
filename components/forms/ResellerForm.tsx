"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { brands } from "@/content/brands";
import { businessTypes, emirates } from "@/content/contact";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ResellerForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrors({});
    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/forms/reseller", {
      method: "POST",
      body: formData,
    });
    const result = (await response.json()) as {
      ok: boolean;
      errors?: Record<string, string>;
    };

    if (!response.ok || !result.ok) {
      setErrors(result.errors ?? { form: "Please review the form and try again." });
      setStatus("error");
      return;
    }

    form.reset();
    setStatus("success");
  }

  return (
    <form className="form-grid" onSubmit={handleSubmit} noValidate>
      <input className="honeypot" name="website" tabIndex={-1} autoComplete="off" />
      <Field label="Company Name" name="companyName" required error={errors.companyName} />
      <Field label="Contact Person" name="contactPerson" required error={errors.contactPerson} />
      <Field label="Email" name="email" type="email" required error={errors.email} />
      <Field label="Phone Number" name="phone" type="tel" required error={errors.phone} />
      <Select label="Emirate / City" name="city" required options={emirates} error={errors.city} />
      <Select label="Business Type" name="businessType" required options={businessTypes} error={errors.businessType} />
      <Select
        label="Interested Brands"
        name="brands"
        required
        options={brands.map((brand) => brand.name)}
        error={errors.brands}
      />
      <Field label="Product Categories" name="productCategories" required error={errors.productCategories} />
      <Field label="Existing Store or Business Website" name="businessWebsite" error={errors.businessWebsite} />
      <label className="field field-full">
        <span>Message</span>
        <textarea name="message" rows={4} placeholder="Tell us more about your business" />
      </label>
      <label className="checkbox-label field-full">
        <input type="checkbox" name="consent" aria-describedby={errors.consent ? "reseller-consent-error" : undefined} />
        <span>I agree to be contacted by ARP Group about this application.</span>
      </label>
      {errors.consent ? (
        <p id="reseller-consent-error" className="form-error field-full">
          {errors.consent}
        </p>
      ) : null}
      {errors.form ? <p className="form-error field-full">{errors.form}</p> : null}
      {status === "success" ? (
        <p className="form-success field-full" role="status">
          Thank you. Your application has been received.
        </p>
      ) : null}
      <Button className="field-full" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Submitting..." : "Submit Application"}
      </Button>
      <p className="form-note field-full">Our team will review your application and respond after internal review.</p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  const errorId = `${name}-error`;
  return (
    <label className="field">
      <span>
        {label}
        {required ? <b aria-hidden="true"> *</b> : null}
      </span>
      <input name={name} type={type} placeholder={label} aria-describedby={error ? errorId : undefined} />
      {error ? (
        <small id={errorId} className="form-error">
          {error}
        </small>
      ) : null}
    </label>
  );
}

function Select({
  label,
  name,
  options,
  required = false,
  error,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
  error?: string;
}) {
  const errorId = `${name}-error`;
  return (
    <label className="field">
      <span>
        {label}
        {required ? <b aria-hidden="true"> *</b> : null}
      </span>
      <select name={name} aria-describedby={error ? errorId : undefined} defaultValue="">
        <option value="" disabled>
          Select {label.toLowerCase()}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? (
        <small id={errorId} className="form-error">
          {error}
        </small>
      ) : null}
    </label>
  );
}
