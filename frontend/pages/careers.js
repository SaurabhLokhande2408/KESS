import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import siteData from "@/data/siteData.json";
import { submitCareerApplication } from "@/src/api/careers";

import {
  getCountries,
  getCountryCallingCode,
  isValidPhoneNumber,
} from "libphonenumber-js";

/* =========================================================
   COUNTRY HELPERS
========================================================= */

// Get country names using the browser's built-in Intl API.
// This avoids hardcoding country names.
const displayNames = new Intl.DisplayNames(["en"], {
  type: "region",
});

const getCountryName = (countryCode) => {
  try {
    return displayNames.of(countryCode) || countryCode;
  } catch {
    return countryCode;
  }
};

// Convert ISO country code to flag emoji.
const getCountryFlag = (countryCode) => {
  return countryCode
    .toUpperCase()
    .split("")
    .map((char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
    .join("");
};

// All countries supported by libphonenumber-js.
// India is kept as the default.
const COUNTRIES = getCountries()
  .map((country) => ({
    code: country,
    name: getCountryName(country),
    callingCode: `+${getCountryCallingCode(country)}`,
    flag: getCountryFlag(country),
  }))
  .sort((a, b) => a.name.localeCompare(b.name));


/* =========================================================
   INITIAL FORM
========================================================= */

const initialForm = {
  name: "",
  email: "",
  country: "IN",
  countryCode: "+91",
  phone: "",
  age: "",
  position: "",
  ex_serviceman: "",
  education: "",
  experience: "",
  city: "",
  address: "",
  message: "",
};


export default function Careers() {
  const { careers } = siteData;

  const [form, setForm] = useState(initialForm);
  const [resume, setResume] = useState(null);

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");


  /* =========================================================
     HANDLE NORMAL INPUTS
  ========================================================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  };


  /* =========================================================
     HANDLE COUNTRY CHANGE
  ========================================================= */

  const handleCountryChange = (e) => {
    const country = e.target.value;

    const selectedCountry = COUNTRIES.find(
      (item) => item.code === country
    );

    setForm((prev) => ({
      ...prev,
      country,
      countryCode: selectedCountry?.callingCode || "",
      phone: "",
    }));

    setError("");
  };


  /* =========================================================
     HANDLE RESUME
     RESUME IS OPTIONAL
  ========================================================= */

  const handleResumeChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) {
      setResume(null);
      return;
    }

    // 5MB limit
    if (file.size > 5 * 1024 * 1024) {
      setError("Resume must be smaller than 5 MB.");
      e.target.value = "";
      setResume(null);
      return;
    }

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      setError("Please upload your resume as PDF, DOC, or DOCX.");
      e.target.value = "";
      setResume(null);
      return;
    }

    setResume(file);
    setError("");
  };


  /* =========================================================
     FORM VALIDATION
  ========================================================= */

  const validateForm = () => {
    if (!form.name.trim()) {
      return "Please enter your full name.";
    }

    if (!form.email.trim()) {
      return "Please enter your email address.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      return "Please enter a valid email address.";
    }

    if (!form.phone.trim()) {
      return "Please enter your phone number.";
    }

    // Proper international phone validation
    try {
      const fullPhoneNumber = `${form.countryCode}${form.phone}`;

      if (!isValidPhoneNumber(fullPhoneNumber, form.country)) {
        return "Please enter a valid phone number.";
      }
    } catch {
      return "Please enter a valid phone number.";
    }

    if (!form.age) {
      return "Please enter your age.";
    }

    if (Number(form.age) < 18) {
      return "Applicants must be 18 years or older.";
    }

    if (Number(form.age) > 70) {
      return "Please enter a valid age.";
    }

    if (!form.position) {
      return "Please select a position.";
    }

    if (!form.ex_serviceman) {
      return "Please select whether you are an ex-serviceman.";
    }

    if (!form.education.trim()) {
      return "Please enter your education.";
    }

    if (!form.experience.trim()) {
      return "Please enter your experience.";
    }

    if (!form.city.trim()) {
      return "Please enter your city.";
    }

    if (!form.address.trim()) {
      return "Please enter your present address.";
    }

    if (!form.message.trim()) {
      return "Please enter a short message.";
    }

    // IMPORTANT:
    // Resume is intentionally NOT validated because it is optional.

    return "";
  };


  /* =========================================================
     SUBMIT
  ========================================================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (status === "submitting") return;

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setStatus("submitting");
      setError("");

      const formData = new FormData();

      formData.append("name", form.name.trim());
      formData.append("email", form.email.trim());

      // Send country information
      formData.append("countryCode", form.countryCode);

      // Send the phone number in the format expected by backend.
      formData.append(
        "phone",
        `${form.countryCode}${form.phone.trim()}`
      );

      formData.append("age", form.age);
      formData.append("position", form.position);
      formData.append("ex_serviceman", form.ex_serviceman);
      formData.append("education", form.education.trim());
      formData.append("experience", form.experience.trim());
      formData.append("city", form.city.trim());
      formData.append("address", form.address.trim());
      formData.append("message", form.message.trim());

      /* -------------------------------------------------------
         RESUME IS OPTIONAL
         Only append it when the user actually selects one.
      ------------------------------------------------------- */

      if (resume) {
        formData.append("resume", resume);
      }

      await submitCareerApplication(formData);

      setStatus("success");
      setForm(initialForm);
      setResume(null);

      // Reset file input
      const fileInput = document.getElementById("resume");

      if (fileInput) {
        fileInput.value = "";
      }
    } catch (err) {
      console.error(err);

      setStatus("error");

      setError(
        err?.message ||
          "We could not submit your application. Please try again."
      );
    }
  };

  const handleSubmitAnother = () => {
    setStatus("idle");
    setError("");
    setForm(initialForm);
    setResume(null);

    const fileInput = document.getElementById("resume");

    if (fileInput) {
      fileInput.value = "";
    }

    document
      .getElementById("career-application")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };


  return (
    <div className="min-h-screen bg-ivory text-charcoal">

      <SEO
        title="Careers"
        description="Explore career opportunities with Knight Eyes Security Services."
        path="/careers"
      />

      <Navbar />


      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden border-b border-charcoal/10">

        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">

          <div className="max-w-4xl">

            <p className="mb-5 text-sm font-medium uppercase tracking-[0.28em] text-gold">
              Careers at KESS
            </p>

            <h1 className="font-display text-5xl leading-[0.95] tracking-tight text-charcoal sm:text-6xl lg:text-7xl">
              Build your career
              <br />
              with KESS.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-charcoal-light sm:text-xl">
              Join Knight Eyes Security Services and grow with a team built on
              discipline, training and professional service.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================================
          LATEST OPENING
      ========================================================= */}

      {careers?.latestOpening && (

        <section className="border-b border-charcoal/10 bg-white">

          <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12">

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

              <div>

                <p className="text-xs uppercase tracking-[0.22em] text-gold">
                  Latest Opening
                </p>

                <h2 className="mt-1 font-display text-2xl text-charcoal">
                  {careers.latestOpening.title}
                </h2>

                {careers.latestOpening.description && (

                  <p className="mt-1 text-base leading-6 text-charcoal-light">
                    {careers.latestOpening.description}
                  </p>

                )}

              </div>

              {careers.latestOpening.date && (

                <p className="text-sm uppercase tracking-wider text-charcoal/45">
                  {careers.latestOpening.date}
                </p>

              )}

            </div>

          </div>

        </section>

      )}


      {/* =========================================================
          APPLICATION AREA
      ========================================================= */}

      <main className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">

        <div className="grid items-start gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">


          {/* =====================================================
              LEFT SIDE
          ===================================================== */}

          <aside className="lg:sticky lg:top-28 lg:self-start">

            <p className="text-sm uppercase tracking-[0.25em] text-gold">
              Join the team
            </p>

            <h2 className="mt-4 font-display text-4xl leading-tight text-charcoal sm:text-5xl">
              We are looking for people who take their work seriously.
            </h2>

            <p className="mt-6 text-lg leading-8 text-charcoal-light">
              Whether you are starting your career or bringing years of
              experience, submit your application and our team will review
              your profile for suitable opportunities.
            </p>


            {careers?.benefits?.length > 0 && (

              <div className="mt-12 border-t border-charcoal/10 pt-8">

                <p className="mb-5 text-sm uppercase tracking-[0.2em] text-gold">
                  Working at KESS
                </p>

                <div className="space-y-6">

                  {careers.benefits.map((benefit, index) => (

                    <div
                      key={index}
                      className="flex gap-5 border-b border-charcoal/10 pb-5"
                    >

                      <span className="mt-1 text-sm text-gold">
                        0{index + 1}
                      </span>

                      <p className="text-base leading-7 text-charcoal-light">
                        {benefit}
                      </p>

                    </div>

                  ))}

                </div>

              </div>

            )}

          </aside>


          {/* =====================================================
              FORM
          ===================================================== */}

          <section id="career-application" className="border border-charcoal/10 bg-white">

            {/* FORM HEADER */}

            <div className="border-b border-charcoal/10 px-4 py-3 sm:px-6 sm:py-4">

              <p className="text-xs uppercase tracking-[0.2em] text-gold">
                Application
              </p>

              <h2 className="mt-1 font-display text-2xl text-charcoal sm:text-3xl">
                Submit your details
              </h2>

              <p className="mt-1 text-sm leading-6 text-charcoal-light">
                Fields marked with{" "}
                <span className="text-red-500">*</span> are required.
              </p>

            </div>


            <form
              onSubmit={handleSubmit}
              noValidate
              className="px-4 py-4 sm:px-6 sm:py-5"
            >


              {/* =================================================
                  SUCCESS
              ================================================= */}

              {status === "success" && (

                <section
                  aria-live="polite"
                  className="career-success mb-4 border border-gold/40 bg-ivory px-4 py-4 sm:px-5 sm:py-5"
                >

                  <div className="flex h-10 w-10 items-center justify-center border border-gold bg-gold text-charcoal">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path d="m5 12 4 4L19 6" />
                    </svg>
                  </div>

                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                    Application received
                  </p>

                  <h3 className="mt-2 font-display text-2xl leading-tight text-charcoal sm:text-3xl">
                    Application Sent Successfully
                  </h3>

                  <p className="mt-2 max-w-xl text-sm leading-7 text-charcoal-light">
                    Thank you for applying to KESS. Your application has been
                    received successfully. Our team will review your details
                    and get back to you if there is a suitable opportunity.
                  </p>

                  <button
                    type="button"
                    onClick={handleSubmitAnother}
                    className="mt-4 border border-charcoal px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-charcoal transition-colors duration-200 hover:bg-charcoal hover:text-ivory"
                  >
                    Submit Another Application
                  </button>

                </section>

              )}


              {/* =================================================
                  ERROR
              ================================================= */}

              {error && (

                <div className="mb-4 border border-red-500/30 bg-red-500/5 px-4 py-2">

                  <p className="text-sm leading-6 text-red-700">
                    {error}
                  </p>

                </div>

              )}


              <div className="space-y-2">


                {/* =================================================
                    NAME + EMAIL
                ================================================= */}

                <div className="grid gap-2 sm:grid-cols-2">

                  <FormField label="Full Name" required>

                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      autoComplete="name"
                      className="form-input"
                    />

                  </FormField>


                  <FormField label="Email" required>

                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      autoComplete="email"
                      className="form-input"
                    />

                  </FormField>

                </div>


                {/* =================================================
                    PHONE + AGE
                ================================================= */}

                <div className="grid gap-2 sm:grid-cols-2">


                  {/* PHONE */}

                  <FormField label="Phone Number" required>

                    <div className="flex">

                      <select
                        value={form.country}
                        onChange={handleCountryChange}
                        className="country-select"
                        aria-label="Country"
                      >

                        {COUNTRIES.map((item) => (

                          <option
                            key={item.code}
                            value={item.code}
                          >
                            {item.flag} {item.name} ({item.callingCode})
                          </option>

                        ))}

                      </select>


                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Phone number"
                        autoComplete="tel"
                        className="form-input !rounded-l-none"
                      />

                    </div>

                    <p className="mt-1 text-xs text-charcoal/45">
                      Select your country and enter your local phone number.
                    </p>

                  </FormField>


                  {/* AGE */}

                  <FormField label="Age" required>

                    <input
                      type="number"
                      name="age"
                      value={form.age}
                      onChange={handleChange}
                      min="18"
                      max="70"
                      placeholder="18 or above"
                      className="form-input"
                    />

                  </FormField>

                </div>


                {/* =================================================
                    POSITION
                ================================================= */}

                <FormField label="Position" required>

                  <select
                    name="position"
                    value={form.position}
                    onChange={handleChange}
                    className="form-input"
                  >

                    <option value="">
                      Select a position
                    </option>

                    {careers?.openings?.map((job) => (

                      <option
                        key={job.id}
                        value={job.title}
                      >
                        {job.title}
                        {job.location ? ` — ${job.location}` : ""}
                      </option>

                    ))}

                    <option value="General Application">
                      General Application
                    </option>

                  </select>

                </FormField>


                {/* =================================================
                    EX SERVICEMAN
                ================================================= */}

                <FormField label="Ex-Serviceman" required>

                  <select
                    name="ex_serviceman"
                    value={form.ex_serviceman}
                    onChange={handleChange}
                    className="form-input"
                  >

                    <option value="">
                      Select an option
                    </option>

                    <option value="Yes">
                      Yes
                    </option>

                    <option value="No">
                      No
                    </option>

                  </select>

                </FormField>


                {/* =================================================
                    EDUCATION + EXPERIENCE
                ================================================= */}

                <div className="grid gap-2 sm:grid-cols-2">

                  <FormField label="Education" required>

                    <input
                      type="text"
                      name="education"
                      value={form.education}
                      onChange={handleChange}
                      placeholder="Highest qualification"
                      className="form-input"
                    />

                  </FormField>


                  <FormField label="Experience" required>

                    <input
                      type="text"
                      name="experience"
                      value={form.experience}
                      onChange={handleChange}
                      placeholder="e.g. Fresher / 2 years"
                      className="form-input"
                    />

                  </FormField>

                </div>


                {/* =================================================
                    CITY
                ================================================= */}

                <FormField label="City" required>

                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="Current city"
                    autoComplete="address-level2"
                    className="form-input"
                  />

                </FormField>


                {/* =================================================
                    ADDRESS
                ================================================= */}

                <FormField label="Present Address" required>

                  <textarea
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="Enter your present address"
                    rows={2}
                    className="form-input resize-y"
                  />

                </FormField>


                {/* =================================================
                    MESSAGE
                ================================================= */}

                <FormField label="Message" required>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us briefly about yourself"
                    rows={3}
                    className="form-input resize-y"
                  />

                </FormField>


                {/* =================================================
                    RESUME — OPTIONAL
                ================================================= */}

                <FormField label="Resume (Optional)">

                  <div className="border border-dashed border-charcoal/25 bg-ivory/50 p-1">

                    <input
                      id="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleResumeChange}
                      className="block w-full text-sm text-charcoal-light file:mr-3 file:border-0 file:bg-charcoal file:px-4 file:py-1 file:text-xs file:font-medium file:uppercase file:tracking-wide file:text-ivory hover:file:bg-gold hover:file:text-charcoal"
                    />

                    <p className="mt-1 text-xs text-charcoal/45">
                      Optional · PDF, DOC or DOCX · Maximum 5 MB
                    </p>


                    {resume && (

                      <p className="mt-1 text-sm text-charcoal">

                        Selected:{" "}

                        <span className="font-medium">
                          {resume.name}
                        </span>

                      </p>

                    )}

                  </div>

                </FormField>


                {/* =================================================
                    SUBMIT
                ================================================= */}

                <div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full bg-gold px-5 py-2 text-sm font-medium uppercase tracking-[0.18em] text-charcoal transition-colors duration-200 hover:bg-gold/85 disabled:cursor-not-allowed disabled:opacity-60"
                  >

                    {status === "submitting"
                      ? "Submitting Application..."
                      : "Submit Application"}

                  </button>


                  <p className="mt-2 text-center text-xs leading-5 text-charcoal/40">
                    By submitting this application, you confirm that the
                    information provided is accurate.
                  </p>

                </div>

              </div>

            </form>

          </section>

        </div>

      </main>


      <Footer />

      <FloatingWhatsApp />


      {/* =========================================================
          LOCAL FORM STYLES
      ========================================================= */}

      <style jsx>{`

        .career-success {
          animation: careerSuccessReveal 500ms ease-out both;
        }

        @keyframes careerSuccessReveal {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .career-success {
            animation: none;
          }
        }

        .form-input {
          width: 100%;
          min-height: 36px;
          border: 1px solid rgba(30, 30, 25, 0.2);
          background: #faf8f5;
          padding: 0.3rem 0.7rem;
          font-size: 0.9rem;
          line-height: 1.4;
          color: #20231f;
          outline: none;
          border-radius: 0;
          transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            background-color 180ms ease;
        }

        .form-input::placeholder {
          color: rgba(30, 30, 25, 0.38);
        }

        .form-input:focus {
          border-color: #cba24a;
          box-shadow: 0 0 0 1px #cba24a;
          background: #ffffff;
        }

        textarea.form-input {
          min-height: 58px;
        }

        select.form-input {
          cursor: pointer;
        }

        .country-select {
          width: 130px;
          min-height: 36px;
          flex-shrink: 0;
          border: 1px solid rgba(30, 30, 25, 0.2);
          border-right: 0;
          background: #faf8f5;
          padding: 0.3rem 0.6rem;
          font-size: 0.85rem;
          color: #20231f;
          outline: none;
          cursor: pointer;
        }

        .country-select:focus {
          border-color: #cba24a;
          box-shadow: 0 0 0 1px #cba24a;
          z-index: 1;
        }

        @media (max-width: 640px) {
          .country-select {
            width: 115px;
            font-size: 0.78rem;
          }
        }

      `}</style>

    </div>
  );
}


/* =========================================================
   FORM FIELD
========================================================= */

function FormField({ label, required, children }) {

  return (

    <div>

      <label className="mb-1 block text-sm font-semibold tracking-wide text-charcoal">

        {label}

        {required && (

          <span
            className="ml-1 text-red-500"
            aria-hidden="true"
          >
            *
          </span>

        )}

      </label>

      {children}

    </div>
  );
}
