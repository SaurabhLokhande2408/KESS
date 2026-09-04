import { useState } from "react";
import { AsYouType, isValidPhoneNumber } from "libphonenumber-js";
import Icon from "@/components/Icon";
import { submitContactEnquiry } from "@/src/api/contact";

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

  // ============================================================
  // HANDLE INPUT
  // ============================================================

  const handleChange = (event) => {
    const { name, value } = event.target;

    // Phone formatting using libphonenumber-js
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

  // ============================================================
  // SUBMIT FORM
  // ============================================================

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus({
      type: "",
      message: "",
    });

    // ----------------------------------------------------------
    // NAME
    // ----------------------------------------------------------

    if (!formData.name.trim()) {
      setStatus({
        type: "error",
        message: "Please enter your name.",
      });
      return;
    }

    // ----------------------------------------------------------
    // EMAIL
    // ----------------------------------------------------------

    if (!formData.email.trim()) {
      setStatus({
        type: "error",
        message: "Please enter your email address.",
      });
      return;
    }

    // ----------------------------------------------------------
    // PHONE
    // ----------------------------------------------------------

    if (!formData.phone.trim()) {
      setStatus({
        type: "error",
        message: "Please enter your phone number.",
      });
      return;
    }

    // Validate Indian phone number
    if (!isValidPhoneNumber(formData.phone, "IN")) {
      setStatus({
        type: "error",
        message: "Please enter a valid 10-digit phone number.",
      });
      return;
    }

    // ----------------------------------------------------------
    // SERVICE
    // ----------------------------------------------------------

    if (!formData.service_required.trim()) {
      setStatus({
        type: "error",
        message: "Please enter the service you require.",
      });
      return;
    }

    // ----------------------------------------------------------
    // SEND
    // ----------------------------------------------------------

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
    <form onSubmit={handleSubmit} className="space-y-5">

      {/* ========================================================
          NAME
      ======================================================== */}

      <div>
        <label
          htmlFor="contact-name"
          className="block text-sm font-medium text-charcoal mb-2"
        >
          Name
        </label>

        <div className="relative">
          <Icon
            name="user"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold pointer-events-none"
          />

          <input
            id="contact-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            autoComplete="name"
            disabled={isSubmitting}
            className="w-full border border-border bg-ivory text-charcoal placeholder:text-charcoal-light pl-12 pr-4 py-3.5 outline-none transition-all duration-200 focus:border-gold focus:ring-1 focus:ring-gold disabled:opacity-60"
          />
        </div>
      </div>


      {/* ========================================================
          EMAIL
      ======================================================== */}

      <div>
        <label
          htmlFor="contact-email"
          className="block text-sm font-medium text-charcoal mb-2"
        >
          Email
        </label>

        <div className="relative">
          <Icon
            name="mail"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold pointer-events-none"
          />

          <input
            id="contact-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="company@gmail.com"
            autoComplete="email"
            disabled={isSubmitting}
            className="w-full border border-border bg-ivory text-charcoal placeholder:text-charcoal-light pl-12 pr-4 py-3.5 outline-none transition-all duration-200 focus:border-gold focus:ring-1 focus:ring-gold disabled:opacity-60"
          />
        </div>
      </div>


      {/* ========================================================
          PHONE
      ======================================================== */}

      <div>
        <label
          htmlFor="contact-phone"
          className="block text-sm font-medium text-charcoal mb-2"
        >
          Phone Number
        </label>

        <div className="relative">
          <Icon
            name="phone"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold pointer-events-none"
          />

          <input
            id="contact-phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="xxxxxxxxxx"
            autoComplete="tel"
            inputMode="numeric"
            maxLength={14}
            disabled={isSubmitting}
            className="w-full border border-border bg-ivory text-charcoal placeholder:text-charcoal-light pl-12 pr-4 py-3.5 outline-none transition-all duration-200 focus:border-gold focus:ring-1 focus:ring-gold disabled:opacity-60"
          />
        </div>

        <p className="mt-1.5 text-xs text-charcoal-light">
          Enter a valid 10-digit Indian phone number.
        </p>
      </div>


      {/* ========================================================
          SERVICE REQUIRED
      ======================================================== */}

      <div>
        <label
          htmlFor="contact-service"
          className="block text-sm font-medium text-charcoal mb-2"
        >
          Service Required
        </label>

        <div className="relative">
          <Icon
            name="briefcase"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold pointer-events-none"
          />

          <input
            id="contact-service"
            type="text"
            name="service_required"
            value={formData.service_required}
            onChange={handleChange}
            placeholder="Security Services"
            disabled={isSubmitting}
            className="w-full border border-border bg-ivory text-charcoal placeholder:text-charcoal-light pl-12 pr-4 py-3.5 outline-none transition-all duration-200 focus:border-gold focus:ring-1 focus:ring-gold disabled:opacity-60"
          />
        </div>
      </div>


      {/* ========================================================
          STATUS
      ======================================================== */}

      {status.message && (
        <div
          className={
            status.type === "success"
              ? "flex items-start gap-3 border border-green-200 bg-green-50 text-green-800 px-4 py-3 text-sm"
              : "flex items-start gap-3 border border-red-200 bg-red-50 text-red-700 px-4 py-3 text-sm"
          }
        >
          <Icon
            name={
              status.type === "success"
                ? "check-circle"
                : "alert-circle"
            }
            className="w-5 h-5 flex-shrink-0 mt-0.5"
          />

          <p>{status.message}</p>
        </div>
      )}


      {/* ========================================================
          SUBMIT
      ======================================================== */}

      <button
        type="submit"
        disabled={isSubmitting}
        className="group w-full flex items-center justify-center gap-3 bg-charcoal text-white px-6 py-3.5 font-medium transition-all duration-300 hover:bg-gold hover:text-charcoal disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <span className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />

            Sending Enquiry...
          </>
        ) : (
          <>
            Send Enquiry

            <Icon
              name="arrow-right"
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
            />
          </>
        )}
      </button>


      <p className="text-xs text-charcoal-light text-center">
        Our team will get back to you regarding your requirement.
      </p>

    </form>
  );
}