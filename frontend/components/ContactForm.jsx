import { useState } from "react";
import { AsYouType, isValidPhoneNumber } from "libphonenumber-js";
import Icon from "@/components/Icon";
import { submitContactEnquiry } from "@/src/api/contact";

function Field({
  id,
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
  icon,
  autoComplete,
  inputMode,
  maxLength,
  disabled,
  hint,
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-charcoal">
        {label}
      </label>

      <div className="relative">
        <Icon
          name={icon}
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gold"
        />

        <input
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          inputMode={inputMode}
          maxLength={maxLength}
          disabled={disabled}
          className="w-full border border-border bg-ivory py-3.5 pl-12 pr-4 text-charcoal placeholder:text-charcoal-light outline-none transition-all duration-200 focus:border-gold focus:ring-1 focus:ring-gold disabled:opacity-60"
        />
      </div>

      {hint ? <p className="mt-2 text-sm text-charcoal-light">{hint}</p> : null}
    </div>
  );
}

function StatusMessage({ status }) {
  if (!status.message) return null;

  return (
    <div
      className={
        status.type === "success"
          ? "flex items-start gap-3 border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800"
          : "flex items-start gap-3 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
      }
    >
      <Icon
        name={status.type === "success" ? "check-circle" : "alert-circle"}
        className="mt-0.5 h-5 w-5 flex-shrink-0"
      />

      <p>{status.message}</p>
    </div>
  );
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service_required: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "phone") {
      const formattedPhone = new AsYouType("IN").input(value);

      setFormData((previous) => ({
        ...previous,
        phone: formattedPhone,
      }));
    } else {
      setFormData((previous) => ({
        ...previous,
        [name]: value,
      }));
    }

    if (status.type === "error") {
      setStatus({
        type: "",
        message: "",
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus({
      type: "",
      message: "",
    });

    if (!formData.name.trim()) {
      setStatus({
        type: "error",
        message: "Please enter your name.",
      });
      return;
    }

    if (!formData.email.trim()) {
      setStatus({
        type: "error",
        message: "Please enter your email address.",
      });
      return;
    }

    if (!formData.phone.trim()) {
      setStatus({
        type: "error",
        message: "Please enter your phone number.",
      });
      return;
    }

    if (!isValidPhoneNumber(formData.phone, "IN")) {
      setStatus({
        type: "error",
        message: "Please enter a valid 10-digit phone number.",
      });
      return;
    }

    if (!formData.service_required.trim()) {
      setStatus({
        type: "error",
        message: "Please enter the service you require.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitContactEnquiry(formData);

      setStatus({
        type: "success",
        message:
          result.message ||
          "Your enquiry has been submitted successfully.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        service_required: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message ||
          "Unable to send your enquiry. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Field
        id="contact-name"
        label="Name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        icon="user"
        autoComplete="name"
        disabled={isSubmitting}
      />

      <Field
        id="contact-email"
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="company@gmail.com"
        icon="mail"
        autoComplete="email"
        disabled={isSubmitting}
      />

      <Field
        id="contact-phone"
        label="Phone Number"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        placeholder="xxxxxxxxxx"
        icon="phone"
        autoComplete="tel"
        inputMode="numeric"
        maxLength={14}
        disabled={isSubmitting}
        hint="Enter a valid 10-digit Indian phone number."
      />

      <Field
        id="contact-service"
        label="Service Required"
        name="service_required"
        type="text"
        value={formData.service_required}
        onChange={handleChange}
        placeholder="Security Services"
        icon="briefcase"
        disabled={isSubmitting}
      />

      <StatusMessage status={status} />

      <button
        type="submit"
        disabled={isSubmitting}
        className="group flex w-full items-center justify-center gap-3 bg-charcoal px-6 py-3.5 font-medium text-white transition-all duration-300 hover:bg-gold hover:text-charcoal disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <span className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
            Sending Enquiry...
          </>
        ) : (
          <>
            Send Enquiry
            <Icon
              name="arrow-right"
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
            />
          </>
        )}
      </button>

      <p className="text-center text-sm text-charcoal-light">
        Our team will get back to you regarding your requirement.
      </p>
    </form>
  );
}