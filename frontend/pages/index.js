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


export default function Home() {

  const { company, services } = siteData;

  return (
    <div className="min-h-screen bg-ivory text-charcoal selection:bg-gold selection:text-charcoal">


      {/* =========================================================
          SEO
      ========================================================= */}

      <SEO
        title="Home"
        description="Knight Eyes Security Services (KESS) — PSARA-licensed security guarding, housekeeping, manpower outsourcing and on-the-job training in Pune, led by Indian Armed Forces veterans."
      />


      {/* =========================================================
          NAVBAR
      ========================================================= */}

      <Navbar />


      {/* =========================================================
          HERO
      ========================================================= */}

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


      {/* =========================================================
          STATS
      ========================================================= */}

      <StatBar />


      {/* =========================================================
          CORE SERVICES
      ========================================================= */}

      <section className="bg-ivory px-5 py-10 sm:px-8 sm:py-12 lg:py-16">

        <div className="mx-auto max-w-7xl">


          {/* -----------------------------------------------------
              HEADER
          ----------------------------------------------------- */}

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:gap-20">


            {/* LEFT */}

            <div>

              <p className="mb-7 font-display text-lg font-semibold uppercase tracking-[0.25em] text-charcoal sm:text-xl">
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

              <p className="max-w-md font-sans text-sm leading-6 text-charcoal-light sm:text-[15px] sm:leading-7">

                From guarding to housekeeping to trained manpower, KESS covers
                the full range of facility and personnel support for
                organisations that value discipline.

              </p>


              <Link
                href="/services"
                className="group mt-8 inline-flex w-fit items-center gap-3 font-display text-[11px] font-medium uppercase tracking-[0.2em] text-charcoal transition-colors duration-300 hover:text-gold"
              >

                View All Services

                <span className="text-base text-gold transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>

              </Link>

            </div>

          </div>


          {/* -----------------------------------------------------
              DIVIDER
          ----------------------------------------------------- */}

          <div className="my-10 h-px w-full bg-border sm:my-12 lg:my-14" />


          {/* -----------------------------------------------------
              SERVICE CARDS
          ----------------------------------------------------- */}

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


                  <p className="mt-5 max-w-[285px] font-sans text-[13px] leading-6 text-white/70">
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

 <ClientMarquee />
      {/* =========================================================
          WHY ORGANIZATIONS TRUST KESS
      ========================================================= */}

      <WhyTrustKESS />


      {/* =========================================================
          DIFFERENTIATOR
          
          Founder
          Training Framework + Shield
          Beyond Security
          Closing Statement
      ========================================================= */}

      <Differentiator />


      {/* =========================================================
          CLIENTS
      ========================================================= */}

      <ClientMarquee />


      {/* =========================================================
          FOOTER
      ========================================================= */}

      <Footer />


      {/* =========================================================
          FLOATING WHATSAPP
      ========================================================= */}

      <FloatingWhatsApp />

    </div>
  );
}