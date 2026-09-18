import Link from "next/link";
import Image from "next/image";
import siteData from "@/data/siteData.json";
import CurveLines from "@/components/CurveLines";
import GoogleMap from "@/components/GoogleMap";

/* =========================================================
   ICONS
========================================================= */

function MapPinIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ClockIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ShieldCheckIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function ArrowIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function WhatsAppIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M.057 24l1.687-6.163a11.86 11.86 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24Zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981Zm11.497-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.867-2.03-.966-.272-.099-.47-.149-.669.149-.198.297-.768.966-.941 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.058-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.496.099-.198.05-.372-.025-.52-.074-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.478s1.065 2.874 1.213 3.072c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.693.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413Z" />
    </svg>
  );
}


/* =========================================================
   NAVIGATION
========================================================= */

const QUICK_LINKS = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Services", "/services"],
  ["Training", "/training"],
];

const COMPANY_LINKS = [
  ["Gallery", "/gallery"],
  ["Clients", "/clients"],
  ["Careers", "/careers"],
];


/* =========================================================
   FOOTER
========================================================= */

export default function Footer() {
  const {
    company,
    contact,
    registration,
    about,
  } = siteData;

  const year = new Date().getFullYear();

  const waLink = `https://wa.me/${contact.whatsapp}`;

  return (
    <footer className="relative overflow-hidden bg-charcoal text-ivory">

      {/* =====================================================
          SUBTLE SECURITY BACKGROUND
      ===================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        aria-hidden="true"
      >
        <div className="absolute right-[-180px] top-[60px] h-[500px] w-[500px] rounded-full border border-ivory" />
        <div className="absolute right-[-130px] top-[110px] h-[400px] w-[400px] rounded-full border border-ivory" />
        <div className="absolute right-[-80px] top-[160px] h-[300px] w-[300px] rounded-full border border-ivory" />
      </div>

      <CurveLines
        position="left"
        size="compact"
        density="fine"
        opacity={0.28}
        color="#FAF8F5"
        className="left-[-160px] bottom-[-100px] hidden sm:block"
      />

      {/* TOP ACCENT */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent" />


      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">


        {/* ===================================================
            BRAND + CTA
        =================================================== */}

        <section className="py-6 sm:py-8 lg:py-10">

          {/* CTA */}

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-1">
                Need Reliable People On Site?
              </p>

              <h3 className="font-display text-2xl sm:text-3xl font-bold leading-tight text-ivory">
                Let's talk about your requirements.
              </h3>
            </div>

            <div className="flex flex-wrap gap-3 shrink-0">

              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 border border-gold bg-gold px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-charcoal transition-all duration-300 hover:bg-transparent hover:text-gold"
              >
                Get in Touch

                <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>


              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 border border-ivory/15 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-ivory transition-all duration-300 hover:border-gold hover:text-gold"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </a>

            </div>

          </div>

        </section>


        {/* ===================================================
            LINKS + CONTACT
        =================================================== */}

        <section className="border-t border-ivory/10 py-6 sm:py-8">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[0.55fr_0.55fr_1.9fr] gap-6 lg:gap-8">


            {/* QUICK LINKS */}

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold mb-3">
                Quick Links
              </p>

              <ul>

                {QUICK_LINKS.map(([label, href]) => (

                  <li
                    key={href}
                    className="border-b border-ivory/10"
                  >

                    <Link
                      href={href}
                      className="group flex items-center justify-between py-2 text-sm font-semibold text-ivory/90 transition-colors duration-200 hover:text-gold"
                    >

                      <span>
                        {label}
                      </span>

                      <ArrowIcon
                        className="h-4 w-4 text-gold/0 -translate-x-2 transition-all duration-200 group-hover:translate-x-0 group-hover:text-gold"
                      />

                    </Link>

                  </li>

                ))}

              </ul>

            </div>


            {/* COMPANY */}

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold mb-3">
                Company
              </p>

              <ul>

                {COMPANY_LINKS.map(([label, href]) => (

                  <li
                    key={href}
                    className="border-b border-ivory/10"
                  >

                    <Link
                      href={href}
                      className="group flex items-center justify-between py-2 text-sm font-semibold text-ivory/90 transition-colors duration-200 hover:text-gold"
                    >

                      <span>
                        {label}
                      </span>

                      <ArrowIcon
                        className="h-4 w-4 text-gold/0 -translate-x-2 transition-all duration-200 group-hover:translate-x-0 group-hover:text-gold"
                      />

                    </Link>

                  </li>

                ))}

              </ul>

            </div>


            {/* CONTACT */}

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold mb-3">
                Get in Touch
              </p>


              <div className="grid sm:grid-cols-2 gap-5">


                {/* DETAILS */}

                <div className="space-y-3">


                  {/* ADDRESS */}

                  <div className="flex gap-3">

                    <MapPinIcon className="h-4 w-4 shrink-0 text-gold mt-0.5" />

                    <div>

                      <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-[0.17em] text-ivory/50">
                        Head Office
                      </p>

                      <p className="text-xs font-medium leading-snug text-ivory">
                        {contact.headOffice.address}
                      </p>

                    </div>

                  </div>


                  {/* PHONE */}

                  <div className="flex gap-3">

                    <PhoneIcon className="h-4 w-4 shrink-0 text-gold mt-0.5" />

                    <div>

                      <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-[0.17em] text-ivory/50">
                        Call Us
                      </p>

                      <div className="flex flex-col">

                        {contact.phone.map((phone) => (

                          <a
                            key={phone}
                            href={`tel:+91${phone}`}
                            className="text-xs font-medium leading-snug text-ivory transition-colors hover:text-gold"
                          >
                            +91 {phone}
                          </a>

                        ))}

                      </div>

                    </div>

                  </div>


                  {/* HOURS */}

                  <div className="flex gap-3">

                    <ClockIcon className="h-4 w-4 shrink-0 text-gold mt-0.5" />

                    <div>

                      <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-[0.17em] text-ivory/50">
                        Office Hours
                      </p>

                      <p className="text-xs font-medium leading-snug text-ivory">
                        {contact.officeHours}
                      </p>

                    </div>

                  </div>

                </div>


                {/* MAP */}

                <div>

                  <div className="mb-1.5 flex items-center justify-between">

                    <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-ivory/50">
                      Find Our Office
                    </p>

                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />

                  </div>

                  <GoogleMap
                    address={contact.headOffice.address}
                    height={150}
                    className="border border-ivory/15 opacity-90 transition-opacity duration-300 hover:opacity-100"
                  />

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ===================================================
            SERVICE LOCATIONS
        =================================================== */}

        <section className="border-t border-ivory/10 py-5 sm:py-6">

          <div className="mb-4">

            <p className="text-sm font-semibold uppercase tracking-[0.20em] text-gold sm:text-base">
              Service Locations
            </p>

          </div>

          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-6">

            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ivory/80 sm:text-sm">
              <span className="text-gold">Head Office</span> — Pune
            </p>

            <span className="hidden h-4 w-px bg-ivory/15 lg:block" aria-hidden="true" />

            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ivory/80 sm:text-sm">
              <span className="text-gold">Branches</span> — Pune, Ahmednagar
            </p>

          </div>

        </section>


        {/* ===================================================
            COMPLIANCE
        =================================================== */}

        <section className="border-t border-ivory/10 pt-6 pb-6">

          <div className="mb-4 flex items-center gap-2.5">

            <ShieldCheckIcon className="h-4 w-4 text-gold" />

            <p className="text-sm font-semibold uppercase tracking-[0.20em] text-gold sm:text-base">
              Compliance & Registration
            </p>

          </div>


          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">

            {/* PSARA */}

            <div className="border-ivory/15 py-2 lg:border-r lg:pr-6">

              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ivory/60 sm:text-sm">
                PSARA
              </p>

              <p className="mt-2 text-base font-semibold text-ivory sm:text-lg">
                {registration.psara.state}
              </p>

              <p className="mt-1 text-sm font-medium text-ivory/70 break-all sm:text-base">
                {registration.psara.number}
              </p>

            </div>


            {/* PF */}

            <div className="border-ivory/15 py-2 lg:border-r lg:px-6">

              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ivory/60 sm:text-sm">
                Provident Fund
              </p>

              <p className="mt-2 text-base font-semibold text-ivory break-all sm:text-lg">
                {registration.pfNumber}
              </p>

            </div>


            {/* ESI */}

            <div className="border-ivory/15 py-2 lg:border-r lg:px-6">

              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ivory/60 sm:text-sm">
                ESI
              </p>

              <p className="mt-2 text-base font-semibold text-ivory break-all sm:text-lg">
                {registration.esiNumber}
              </p>

            </div>


            {/* GSTIN */}

            <div className="py-2 lg:pl-6">

              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ivory/60 sm:text-sm">
                GSTIN
              </p>

              <p className="mt-2 text-base font-semibold text-ivory break-all sm:text-lg">
                {registration?.gstin || "To be updated"}
              </p>

            </div>

          </div>

        </section>

      </div>


      {/* =====================================================
          FINAL BAR
    ===================================================== */}

      <div className="border-t border-ivory/10">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-3">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">

            <p className="text-[11px] font-medium text-ivory/50">
              © {year} {company.name}. All rights reserved.
            </p>


            <div className="flex items-center gap-2.5">

              <span className="h-1.5 w-1.5 rounded-full bg-gold" />

              <p className="text-[9px] font-semibold uppercase tracking-[0.13em] text-ivory/60">
                PSARA Licensed
              </p>

              <span className="text-ivory/30">
                •
              </span>

              <p className="text-[9px] font-semibold uppercase tracking-[0.13em] text-ivory/60">
                {company.yearsInBusiness}+ Years of Trusted Protection
              </p>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}