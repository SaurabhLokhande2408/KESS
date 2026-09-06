import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import StatBar from "@/components/StatBar";
import ClientMarquee from "@/components/ClientMarquee";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

import WhyTrustKESS from "@/components/WhyTrustKESS";
import Differentiator from "@/components/Differentiator";

import siteData from "@/data/siteData.json";

/* =========================================================
   CURVED LINE DECORATION
   ---------------------------------------------------------
   Very subtle architectural curves.
   These live ONLY in negative space.
========================================================= */

function CurveLines({
  className = "",
  flip = false,
  opacity = 0.1,
  variant = "wide",
}) {
  const paths = {
    wide: {
      main: flip
        ? "M-80 240C70 70 170 60 300 145C385 200 445 115 580 15"
        : "M-80 35C70 205 170 215 300 130C385 75 445 160 580 255",

      second: flip
        ? "M-80 265C70 95 170 85 300 170C385 225 445 140 580 40"
        : "M-80 60C70 230 170 240 300 155C385 100 445 185 580 280",

      third: flip
        ? "M-80 290C70 120 170 110 300 195C385 250 445 165 580 65"
        : "M-80 85C70 255 170 265 300 180C385 125 445 210 580 305",
    },

    soft: {
      main: flip
        ? "M-100 210C40 95 145 75 265 130C380 182 445 135 590 45"
        : "M-100 50C40 165 145 185 265 130C380 78 445 125 590 215",

      second: flip
        ? "M-100 235C40 120 145 100 265 155C380 207 445 160 590 70"
        : "M-100 75C40 190 145 210 265 155C380 103 445 150 590 240",
    },

    tight: {
      main: flip
        ? "M-50 190C75 85 155 80 255 130C350 178 425 135 535 55"
        : "M-50 55C75 160 155 165 255 115C350 67 425 110 535 190",

      second: flip
        ? "M-50 215C75 110 155 105 255 155C350 203 425 160 535 80"
        : "M-50 80C75 185 155 190 255 140C350 92 425 135 535 215",
    },
  };

  const selected = paths[variant] || paths.wide;

  return (
    <svg
      viewBox="0 0 500 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none absolute select-none ${className}`}
      aria-hidden="true"
      style={{
        opacity,
      }}
    >
      <path
        d={selected.main}
        stroke="#111111"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />

      <path
        d={selected.second}
        stroke="#111111"
        strokeWidth="1"
        opacity="0.62"
        vectorEffect="non-scaling-stroke"
      />

      {selected.third && (
        <path
          d={selected.third}
          stroke="#111111"
          strokeWidth="1"
          opacity="0.32"
          vectorEffect="non-scaling-stroke"
        />
      )}
    </svg>
  );
}

/* =========================================================
   SMALL CORNER CURVE
   ---------------------------------------------------------
   Used when we only have a small amount of whitespace.
========================================================= */

function CornerCurve({
  className = "",
  flip = false,
}) {
  return (
    <svg
      viewBox="0 0 360 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none absolute select-none ${className}`}
      aria-hidden="true"
    >
      <path
        d={
          flip
            ? "M-20 160C70 45 145 25 220 70C275 102 315 72 380 15"
            : "M-20 20C70 135 145 155 220 110C275 78 315 108 380 165"
        }
        stroke="#111111"
        strokeWidth="1"
        opacity="0.09"
        vectorEffect="non-scaling-stroke"
      />

      <path
        d={
          flip
            ? "M-20 178C70 63 145 43 220 88C275 120 315 90 380 33"
            : "M-20 38C70 153 145 173 220 128C275 96 315 126 380 183"
        }
        stroke="#111111"
        strokeWidth="1"
        opacity="0.055"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/* =========================================================
   HOME
========================================================= */

export default function Home() {
  const { company, services } = siteData;

  return (
    <div className="min-h-screen overflow-hidden bg-ivory text-charcoal selection:bg-gold selection:text-charcoal">

      {/* =====================================================
          SEO
      ===================================================== */}

      <SEO
        title="Home"
        description="Knight Eyes Security Services (KESS) — PSARA-licensed security guarding, housekeeping, manpower outsourcing and on-the-job training in Pune, led by Indian Armed Forces veterans."
      />

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <Navbar />

      <main>

        {/* =====================================================
            HERO
            -----------------------------------------------------
            Curve intentionally pushed into upper-right negative
            space. It stays behind the hero content.
        ===================================================== */}

        <section className="relative overflow-hidden">

          <CurveLines
            className="
              right-[-170px]
              top-[-65px]
              hidden
              h-[360px]
              w-[650px]
              lg:block
            "
            variant="wide"
            opacity={0.07}
          />

          <div className="relative z-10">
            <PageHero
              eyebrow="Built on Military Heritage."
              titleLines={[
                "Honor. Discipline. Experience.",
                "The KESS Security Team",
              ]}
              description={
                company.subTagline ||
                "Providing elite corporate protection with military precision."
              }
              primaryCta={{
                label: "Meet Our Leaders",
                href: "/about",
              }}
              secondaryCta={{
                label: "Our Story",
                href: "/about#story",
              }}
              image="/images/team.jpg"
              imageAlt="KESS security personnel standing in formation"
              badge="Built by Ex-Servicemen"
            />
          </div>

        </section>

        {/* =====================================================
            STATS
            -----------------------------------------------------
            Keep this clean. No unnecessary decoration.
        ===================================================== */}

        <StatBar />

        {/* =====================================================
            CORE SERVICES
        ===================================================== */}

        <section className="relative overflow-hidden bg-ivory px-5 py-16 sm:px-8 sm:py-24 lg:py-28">

          {/* Large curve lives behind the upper-right whitespace */}
          <CurveLines
            className="
              pointer-events-none
              right-[-190px]
              top-[-95px]
              hidden
              h-[390px]
              w-[680px]
              lg:block
            "
            variant="wide"
            opacity={0.075}
          />

          <div className="relative z-10 mx-auto max-w-7xl">

            {/* -------------------------------------------------
                HEADER
            ------------------------------------------------- */}

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:gap-20">

              {/* LEFT */}

              <div>

                <p className="mb-6 font-display text-sm font-semibold uppercase tracking-[0.25em] text-charcoal sm:text-base">
                  What We Offer
                </p>

                <h2 className="max-w-4xl font-serif text-[3.4rem] font-normal leading-[0.92] tracking-[-0.045em] text-charcoal sm:text-[4.5rem] lg:text-[5.2rem]">
                  Protection built around

                  <br />

                  <span className="italic text-gold">
                    your priorities.
                  </span>
                </h2>

              </div>

              {/* RIGHT */}

              <div className="flex flex-col justify-end lg:pb-2">

                <p className="max-w-md font-sans text-base leading-8 text-charcoal-light sm:text-[17px]">
                  From guarding to housekeeping to trained manpower, KESS covers
                  the full range of facility and personnel support for
                  organisations that value discipline.
                </p>

                <Link
                  href="/services"
                  className="group mt-10 inline-flex w-fit items-center gap-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-charcoal transition-colors duration-300 hover:text-gold"
                >
                  View All Services

                  <span className="text-base text-gold transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </Link>

              </div>

            </div>

            {/* -------------------------------------------------
                DIVIDER
            ------------------------------------------------- */}

            <div className="my-12 h-px w-full bg-border sm:my-16 lg:my-20" />

            {/* -------------------------------------------------
                SERVICE CARDS

                NO CURVES INSIDE THESE.
                Keeping them visually clean makes the curves
                elsewhere feel intentional.
            ------------------------------------------------- */}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {[
                {
                  number: "01",
                  title: "Security Services",
                  description:
                    "Trained, disciplined personnel for corporate, commercial, residential, banking, IT, and public-sector environments.",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-6 w-6"
                    >
                      <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  ),
                },

                {
                  number: "02",
                  title: "Housekeeping Services",
                  description:
                    "Professional housekeeping support built around dependable standards and seamless daily operations.",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-6 w-6"
                    >
                      <rect x="6" y="5" width="12" height="16" rx="1" />
                      <path d="M9 5V3h6v2" />
                      <path d="M9 9h6M9 13h6M9 17h4" />
                    </svg>
                  ),
                },

                {
                  number: "03",
                  title: "Manpower Outsourcing",
                  description:
                    "Skilled and unskilled personnel, from supervisors and electricians to office and lobby assistants.",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-6 w-6"
                    >
                      <circle cx="9" cy="8" r="3" />
                      <circle cx="17" cy="9" r="2.5" />
                      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
                      <path d="M15 14c3.3 0 6 2.2 6 5" />
                    </svg>
                  ),
                },

                {
                  number: "04",
                  title: "Training & Compliance",
                  description:
                    "Rigorous on-the-job preparation, reporting systems, and statutory compliance for every deployment.",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-6 w-6"
                    >
                      <rect x="5" y="8" width="14" height="12" rx="2" />
                      <path d="M9 8V6a3 3 0 016 0v2" />
                      <circle cx="12" cy="14" r="1" />
                    </svg>
                  ),
                },
              ].map((service) => (

                <div
                  key={service.number}
                  className="
                    group
                    relative
                    flex
                    min-h-[390px]
                    flex-col
                    overflow-hidden
                    bg-charcoal
                    px-7
                    py-7
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:shadow-[0_20px_50px_rgba(28,32,24,0.12)]
                    sm:min-h-[410px]
                    lg:min-h-[390px]
                    lg:px-8
                    lg:py-8
                  "
                >

                  {/* Top row */}

                  <div className="flex items-center justify-between">

                    <span className="font-display text-[11px] font-medium tracking-[0.2em] text-gold">
                      {service.number}
                    </span>

                    <span className="text-gold transition-transform duration-500 group-hover:scale-110">
                      {service.icon}
                    </span>

                  </div>

                  {/* Divider */}

                  <div className="mt-7 h-px w-full bg-white/15 transition-colors duration-500 group-hover:bg-gold/30" />

                  {/* Content */}

                  <div className="mt-auto">

                    <h3 className="max-w-[250px] font-serif text-[1.9rem] font-normal leading-[1.02] tracking-[-0.025em] text-ivory sm:text-[2rem]">
                      {service.title}
                    </h3>

                    <p className="mt-5 max-w-[285px] font-sans text-base leading-7 text-white/70">
                      {service.description}
                    </p>

                  </div>

                  {/* Arrow */}

                  <div className="mt-8">

                    <span
                      className="
                        inline-flex
                        text-xl
                        text-gold
                        transition-all
                        duration-500
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    >
                      ↗
                    </span>

                  </div>

                  {/* Hover line */}

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold transition-all duration-500 group-hover:w-full" />

                </div>

              ))}

            </div>

            {/* Bottom divider */}

            <div className="mt-8 h-px w-full bg-border" />

          </div>

        </section>

        {/* =====================================================
            CLIENT MARQUEE
            -----------------------------------------------------
            Keep this section clean because the marquee itself
            already provides movement.
        ===================================================== */}

        <ClientMarquee />

        {/* =====================================================
            WHY ORGANIZATIONS TRUST KESS
            -----------------------------------------------------
            Curve placed in the unused side of the section.
        ===================================================== */}

        <section className="relative overflow-hidden">

          <CurveLines
            className="
              left-[-210px]
              top-[10px]
              hidden
              h-[390px]
              w-[680px]
              lg:block
            "
            flip
            variant="soft"
            opacity={0.06}
          />

          <div className="relative z-10">
            <WhyTrustKESS />
          </div>

        </section>

        {/* =====================================================
            DIFFERENTIATOR
            -----------------------------------------------------
            Large background curve.
        ===================================================== */}

        <section className="relative overflow-hidden">

          <CornerCurve
            className="
              right-[-90px]
              top-[-30px]
              hidden
              h-[300px]
              w-[500px]
              lg:block
            "
            flip
          />

          <CurveLines
            className="
              bottom-[-170px]
              left-[-180px]
              hidden
              h-[360px]
              w-[620px]
              lg:block
            "
            variant="tight"
            opacity={0.055}
          />

          <div className="relative z-10">
            <Differentiator />
          </div>

        </section>

        {/* =====================================================
            SECOND CLIENT MARQUEE
            -----------------------------------------------------
            Existing structure retained.
        ===================================================== */}

        <ClientMarquee />

        {/* =====================================================
            FOOTER
        ===================================================== */}

        <Footer />

      </main>

      {/* =====================================================
          FLOATING WHATSAPP
      ===================================================== */}

      <FloatingWhatsApp />

      {/* =====================================================
          RESPONSIVE CURVE TUNING
      ===================================================== */}

      <style jsx global>{`

        /*
          Prevent decorative SVGs from ever becoming interactive.
        */

        svg[aria-hidden="true"] {
          pointer-events: none;
        }

        /*
          On smaller screens, keep the curves extremely subtle.
          We don't want them competing with typography.
        */

        @media (max-width: 1023px) {

          .curve-mobile-safe {
            opacity: 0.045;
          }

        }

        /*
          Respect reduced-motion preferences even if future
          decorative motion is introduced.
        */

        @media (prefers-reduced-motion: reduce) {

          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
          }

        }

      `}</style>

    </div>
  );
}