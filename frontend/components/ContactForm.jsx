import { useState } from "react";
import siteData from "@/data/siteData.json";

const SERVICE_OPTIONS = siteData.services.map((s) => s.title);

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    service: SERVICE_OPTIONS[0],
    message: "",
  });

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = [
      `New enquiry from the website:`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `City: ${form.city}`,
      `Service: ${form.service}`,
      form.message ? `Message: ${form.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${siteData.contact.whatsapp}?text=${encodeURIComponent(
      text
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const inputClass =
    "w-full border border-border bg-white px-4 py-2.5 text-sm text-charcoal placeholder:text-charcoal-light/50 focus:border-gold outline-none transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs uppercase tracking-wide text-charcoal-light mb-1 block">
            Full Name
          </label>
          <input
            required
            className={inputClass}
            value={form.name}
            onChange={update("name")}
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="text-xs uppercase tracking-wide text-charcoal-light mb-1 block">
            Phone Number
          </label>
          <input
            required
            className={inputClass}
            value={form.phone}
            onChange={update("phone")}
            placeholder="10-digit mobile number"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs uppercase tracking-wide text-charcoal-light mb-1 block">
            City
          </label>
          <input
            required
            className={inputClass}
            value={form.city}
            onChange={update("city")}
            placeholder="e.g. Pune"
          />
        </div>
        <div>
          <label className="text-xs uppercase tracking-wide text-charcoal-light mb-1 block">
            Service Required
          </label>
          <select className={inputClass} value={form.service} onChange={update("service")}>
            {SERVICE_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="text-xs uppercase tracking-wide text-charcoal-light mb-1 block">
          Message (optional)
        </label>
        <textarea
          className={inputClass}
          rows={4}
          value={form.message}
          onChange={update("message")}
          placeholder="Tell us a bit about your requirement"
        />
      </div>

      <button
        type="submit"
        className="bg-gold text-charcoal px-7 py-3 uppercase tracking-wider text-xs font-semibold hover:bg-charcoal hover:text-ivory transition-colors"
      >
        Send Enquiry via WhatsApp
      </button>
      <p className="text-xs text-charcoal-light/70">
        This opens WhatsApp with your details pre-filled — no account or backend needed yet.
      </p>
    </form>
  );
}
