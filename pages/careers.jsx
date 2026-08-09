import { useMemo, useState } from "react";
import siteData from "../data/siteData.json";

const titleOptions = ["Mr", "Mrs", "Ms"];
const exServicemanOptions = ["Yes", "No"];

export default function CareersPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const positionOptions = useMemo(() => {
    const openings = siteData.careers?.openings?.map((opening) => opening.title) || [];
    const serviceTitles = siteData.services?.map((service) => service.title) || [];
    const fallback = [
      "Security Guard",
      "Supervisor",
      "Fitter",
      "Electrician",
      "Housekeeping",
    ];

    return [...new Set([...openings, ...serviceTitles, ...fallback])];
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = Object.fromEntries(new FormData(form).entries());

    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const response = await fetch("/api/careers-apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to submit application.");
      }

      setSubmitStatus(result.message || "Application sent successfully.");
      form.reset();
    } catch (error) {
      setSubmitStatus(error.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#111111] text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/guards-hero.jpg.jpeg')" }}
      />
      <div className="absolute inset-0 bg-[#111111]/80" />

      <div className="relative z-10 mx-auto max-w-4xl px-5 py-10 sm:px-8 lg:px-10 lg:py-16">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-black uppercase leading-none tracking-tight sm:text-5xl">
            <span className="text-white">Apply</span> <span className="text-amber-500">Today</span>
          </h1>
          <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-200">
            Start an exciting career with us
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-3xl rounded-[1.5rem] border border-white/10 bg-black/30 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-6 lg:p-8"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="md:col-span-2">
              <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                Title <span className="text-red-400">*</span>
              </label>
              <select
                name="title"
                required
                className="w-full rounded-lg border border-white/20 bg-white px-3 py-2.5 text-sm text-black outline-none transition focus:border-amber-500"
              >
                <option value="">Select</option>
                {titleOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-lg border border-white/20 bg-white px-3 py-2.5 text-sm text-black outline-none transition focus:border-amber-500"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-lg border border-white/20 bg-white px-3 py-2.5 text-sm text-black outline-none transition focus:border-amber-500"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                Tel. <span className="text-red-400">*</span>
              </label>
              <input
                type="tel"
                name="tel"
                required
                className="w-full rounded-lg border border-white/20 bg-white px-3 py-2.5 text-sm text-black outline-none transition focus:border-amber-500"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                Are you an Ex-Serviceman? <span className="text-red-400">*</span>
              </label>
              <select
                name="exServiceman"
                required
                className="w-full rounded-lg border border-white/20 bg-white px-3 py-2.5 text-sm text-black outline-none transition focus:border-amber-500"
              >
                <option value="">Select</option>
                {exServicemanOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                Position <span className="text-red-400">*</span>
              </label>
              <select
                name="position"
                required
                className="w-full rounded-lg border border-white/20 bg-white px-3 py-2.5 text-sm text-black outline-none transition focus:border-amber-500"
              >
                <option value="">Select</option>
                {positionOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                Age <span className="text-red-400">*</span>
              </label>
              <input
                type="number"
                name="age"
                min="18"
                required
                className="w-full rounded-lg border border-white/20 bg-white px-3 py-2.5 text-sm text-black outline-none transition focus:border-amber-500"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                Education <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="education"
                required
                className="w-full rounded-lg border border-white/20 bg-white px-3 py-2.5 text-sm text-black outline-none transition focus:border-amber-500"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                Experience <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="experience"
                required
                className="w-full rounded-lg border border-white/20 bg-white px-3 py-2.5 text-sm text-black outline-none transition focus:border-amber-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                City <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="city"
                required
                className="w-full rounded-lg border border-white/20 bg-white px-3 py-2.5 text-sm text-black outline-none transition focus:border-amber-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                Address <span className="text-red-400">*</span>
              </label>
              <textarea
                name="address"
                rows="3"
                required
                placeholder="Present Address"
                className="w-full rounded-lg border border-white/20 bg-white px-3 py-2.5 text-sm text-black outline-none transition focus:border-amber-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                Message
              </label>
              <textarea
                name="message"
                rows="3"
                placeholder="Message"
                className="w-full rounded-lg border border-white/20 bg-white px-3 py-2.5 text-sm text-black outline-none transition focus:border-amber-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="flex items-center gap-3 text-sm text-zinc-200">
                <input type="checkbox" name="notRobot" required className="h-4 w-4 accent-amber-500" />
                <span>I'm not a robot</span>
              </label>
            </div>
          </div>

          {submitStatus ? (
            <p className="mt-5 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-200">
              {submitStatus}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 w-full rounded-lg bg-amber-500 px-4 py-3 text-xs font-black uppercase tracking-[0.2em] text-[#111111] transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
}
