import { useState } from "react";
import siteData from "../data/siteData.json";
import BackToTop from "../components/BackToTop";

const titleOptions = ["Mr", "Mrs", "Ms"];

export default function EnquiryPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = Object.fromEntries(new FormData(form).entries());

    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to submit enquiry.");
      }

      setSubmitStatus(result.message || "Enquiry sent successfully.");
      form.reset();
    } catch (error) {
      setSubmitStatus(error.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const companyName = siteData.company?.name || "Knight Eyes Security Services";
  const address = siteData.contact?.headOffice?.address || "";
  const phone = siteData.contact?.phone?.[0] || "";
  const emails = siteData.contact?.emails?.length
    ? siteData.contact.emails
    : ["enquiry@knighteye.in"];

  return (
    <div id="top" className="min-h-screen bg-[#f4f2ec] text-[#111111]">
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="overflow-hidden rounded-[1.5rem] border border-black/10 bg-white shadow-[0_20px_70px_rgba(0,0,0,0.12)] lg:grid lg:grid-cols-[40%_60%]">
          <div className="bg-[#f2efe9] p-8 sm:p-10 lg:p-12">
            <div className="max-w-md">
              <h1 className="font-display text-3xl font-bold uppercase tracking-[0.12em] text-amber-500 sm:text-4xl">
                For Business Enquiries
              </h1>
              <div className="mt-4 h-[2px] w-24 bg-amber-500" />

              <div className="mt-8 space-y-6 text-sm leading-7 text-[#2c2c2c]">
                <div>
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#111111]">
                    Company
                  </p>
                  <p className="text-lg font-bold text-[#111111]">{companyName}</p>
                </div>

                <div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 text-amber-500">🏢</span>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#111111]">
                        Head Office
                      </p>
                      <p className="mt-1">{address}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 text-amber-500">✉️</span>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#111111]">
                        Email
                      </p>
                      <div className="mt-1 space-y-1">
                        {emails.map((email) => (
                          <a key={email} href={`mailto:${email}`} className="block hover:text-amber-600">
                            {email}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 text-amber-500">📞</span>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#111111]">
                        Phone
                      </p>
                      <p className="mt-1">+91 {phone}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#0f0f0f] p-8 text-white sm:p-10 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.24em] text-white">
                  Title <span className="text-red-400">*</span>
                </label>
                <select
                  name="title"
                  required
                  className="w-full rounded-lg border border-white/20 bg-white px-3 py-3 text-sm text-[#111111] outline-none transition focus:border-amber-500"
                >
                  <option value="">Select</option>
                  {titleOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.24em] text-white">
                    First Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="w-full rounded-lg border border-white/20 bg-white px-3 py-3 text-sm text-[#111111] outline-none transition focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.24em] text-white">
                    Last Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="w-full rounded-lg border border-white/20 bg-white px-3 py-3 text-sm text-[#111111] outline-none transition focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.24em] text-white">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-white/20 bg-white px-3 py-3 text-sm text-[#111111] outline-none transition focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.24em] text-white">
                    Phone <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    inputMode="numeric"
                    pattern="[0-9]{10}"
                    placeholder="10 Digit Phone Number"
                    className="w-full rounded-lg border border-white/20 bg-white px-3 py-3 text-sm text-[#111111] outline-none transition focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.24em] text-white">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="message"
                  minLength={40}
                  required
                  rows={6}
                  placeholder="Message (Minimum 40 Characters)"
                  className="w-full rounded-lg border border-white/20 bg-white px-3 py-3 text-sm text-[#111111] outline-none transition focus:border-amber-500"
                />
              </div>

              <label className="flex items-center gap-3 text-sm text-zinc-200">
                <input type="checkbox" name="notRobot" required className="h-4 w-4 accent-amber-500" />
                <span>I&apos;m not a robot</span>
              </label>

              {submitStatus ? (
                <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-200">
                  {submitStatus}
                </div>
              ) : null}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-full bg-amber-500 px-6 py-3 text-[11px] font-black uppercase tracking-[0.24em] text-[#111111] transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <BackToTop />
    </div>
  );
}
