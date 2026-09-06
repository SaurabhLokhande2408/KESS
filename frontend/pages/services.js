import { useEffect, useRef } from "react";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CurveLines from "@/components/CurveLines";

import siteData from "@/data/siteData.json";

/* =========================================================
   REVEAL ANIMATION
========================================================= */

function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const transforms = {
    up: "translateY(18px)",
    left: "translateX(-18px)",
    right: "translateX(18px)",
    none: "none",
  };

  return (
    <div
      ref={ref}
      style={{
        "--reveal-transform": transforms[direction],
        transitionDelay: `${delay}ms`,
      }}
      className={`reveal ${className}`}
    >
      {children}
    </div>
  );
}

/* =========================================================
   COLORFUL SVG ICONS
========================================================= */

const SecurityIcon = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-14 w-14 sm:h-16 sm:w-16"
    aria-hidden="true"
  >
    <path
      d="M32 5L53 13V28C53 42 44.5 53.5 32 59C19.5 53.5 11 42 11 28V13L32 5Z"
      fill="#E9F2FF"
    />

    <path
      d="M32 8L50 15V28C50 40.5 42.5 50.5 32 55.5C21.5 50.5 14 40.5 14 28V15L32 8Z"
      stroke="#2563EB"
      strokeWidth="2"
    />

    <path
      d="M23 31L29 37L41 24"
      stroke="#16A34A"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <circle
      cx="48"
      cy="14"
      r="5"
      fill="#F59E0B"
    />
  </svg>
);

const HousekeepingIcon = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-14 w-14 sm:h-16 sm:w-16"
    aria-hidden="true"
  >
    <path
      d="M18 49L35 21L48 29L31 57L18 49Z"
      fill="#DDF7F2"
    />

    <path
      d="M35 21L48 29L31 57L18 49L35 21Z"
      stroke="#0F766E"
      strokeWidth="2"
    />

    <path
      d="M21 45L34 52"
      stroke="#14B8A6"
      strokeWidth="4"
      strokeLinecap="round"
    />

    <path
      d="M46 10L47.5 15L52 16.5L47.5 18L46 23L44.5 18L40 16.5L44.5 15L46 10Z"
      fill="#F59E0B"
    />

    <path
      d="M55 28L56 31L59 32L56 33L55 36L54 33L51 32L54 31L55 28Z"
      fill="#3B82F6"
    />
  </svg>
);

const ManpowerIcon = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-14 w-14 sm:h-16 sm:w-16"
    aria-hidden="true"
  >
    <circle
      cx="32"
      cy="18"
      r="8"
      fill="#8B5CF6"
    />

    <circle
      cx="14"
      cy="27"
      r="6"
      fill="#3B82F6"
    />

    <circle
      cx="50"
      cy="27"
      r="6"
      fill="#F97316"
    />

    <path
      d="M17 53C17 41 23 34 32 34C41 34 47 41 47 53"
      fill="#EDE9FE"
    />

    <path
      d="M32 34C41 34 47 41 47 53H17C17 41 23 34 32 34Z"
      stroke="#7C3AED"
      strokeWidth="2"
    />

    <path
      d="M4 51C4 43 8 38 14 38C18 38 21 40 23 44"
      stroke="#2563EB"
      strokeWidth="2"
      strokeLinecap="round"
    />

    <path
      d="M41 44C43 40 46 38 50 38C56 38 60 43 60 51"
      stroke="#EA580C"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const TrainingIcon = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-14 w-14 sm:h-16 sm:w-16"
    aria-hidden="true"
  >
    <path
      d="M9 24L32 12L55 24L32 36L9 24Z"
      fill="#EDE9FE"
      stroke="#7C3AED"
      strokeWidth="2"
    />

    <path
      d="M19 29V40C26 46 38 46 45 40V29"
      stroke="#3B82F6"
      strokeWidth="2"
    />

    <path
      d="M55 24V39"
      stroke="#F59E0B"
      strokeWidth="3"
      strokeLinecap="round"
    />

    <circle
      cx="55"
      cy="44"
      r="3"
      fill="#F59E0B"
    />

    <path
      d="M26 24L32 27L38 24"
      stroke="#8B5CF6"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

const ProtectionIcon = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-14 w-14 sm:h-16 sm:w-16"
    aria-hidden="true"
  >
    <circle
      cx="32"
      cy="19"
      r="8"
      fill="#FEE2E2"
    />

    <path
      d="M17 55C17 42 23 34 32 34C41 34 47 42 47 55"
      fill="#EFF6FF"
      stroke="#2563EB"
      strokeWidth="2"
    />

    <path
      d="M44 12L55 16V24C55 32 50.5 38 44 41C37.5 38 33 32 33 24V16L44 12Z"
      fill="#FEE2E2"
      stroke="#EF4444"
      strokeWidth="2"
    />

    <path
      d="M39 25L42.5 28.5L49 21"
      stroke="#16A34A"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EventsIcon = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-14 w-14 sm:h-16 sm:w-16"
    aria-hidden="true"
  >
    <circle
      cx="32"
      cy="16"
      r="6"
      fill="#8B5CF6"
    />

    <circle
      cx="14"
      cy="24"
      r="5"
      fill="#3B82F6"
    />

    <circle
      cx="50"
      cy="24"
      r="5"
      fill="#F97316"
    />

    <path
      d="M20 51C20 39 25 32 32 32C39 32 44 39 44 51"
      fill="#EDE9FE"
    />

    <path
      d="M20 51C20 39 25 32 32 32C39 32 44 39 44 51"
      stroke="#7C3AED"
      strokeWidth="2"
    />

    <path
      d="M4 49C4 40 8 34 14 34C18 34 21 36 23 40"
      stroke="#2563EB"
      strokeWidth="2"
    />

    <path
      d="M41 40C43 36 46 34 50 34C56 34 60 40 60 49"
      stroke="#EA580C"
      strokeWidth="2"
    />

    <path
      d="M28 8L29 11L32 12L29 13L28 16L27 13L24 12L27 11L28 8Z"
      fill="#F59E0B"
    />
  </svg>
);

/* =========================================================
   ARROW
========================================================= */

const Arrow = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
    aria-hidden="true"
  >
    <path d="M5 19L19 5" />
    <path d="M8 5H19V16" />
  </svg>
);

/* =========================================================
   SERVICE IMAGE
========================================================= */

function ServiceImage({
  image,
  title,
  number,
}) {
  return (
    <div
      className="
        service-image
        group
        relative
        h-[270px]
        overflow-hidden
        sm:h-[320px]
        lg:h-[340px]
      "
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          transition-transform
          duration-[900ms]
          ease-out
          group-hover:scale-[1.035]
        "
      />

      {/* Soft image overlay */}
      <div
        className="
          absolute
          inset-0
          bg-charcoal/0
          transition-colors
          duration-500
          group-hover:bg-charcoal/10
        "
      />

      {/* Number */}
      <div
        className="
          absolute
          left-4
          top-4
          flex
          h-10
          w-10
          items-center
          justify-center
          bg-charcoal/75
          text-[9px]
          tracking-[0.15em]
          text-gold
          backdrop-blur-sm
        "
      >
        {number}
      </div>

      {/* Hover reveal */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          translate-y-full
          bg-charcoal/75
          px-5
          py-3
          backdrop-blur-sm
          transition-transform
          duration-500
          group-hover:translate-y-0
        "
      >
        <p className="text-[9px] uppercase tracking-[0.2em] text-ivory/80">
          Knight Eyes Security Services
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function Services() {
  const {
    services = [],
    manpowerCategories = [],
    training = {},
  } = siteData;

  /* =======================================================
     ICONS
  ======================================================= */

  const iconList = [
    SecurityIcon,
    HousekeepingIcon,
    ManpowerIcon,
    TrainingIcon,
    ProtectionIcon,
    EventsIcon,
  ];

  /* =======================================================
     TEMPORARY SERVICE IMAGES
     Replace these later with KESS-specific images.
  ======================================================= */

  const imageList = [
    "https://images.unsplash.com/photo-1560252829-804f1aedf1be?auto=format&fit=crop&w=1400&q=85",

    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",

    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85",

    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=85",

    "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1400&q=85",

    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=85",
  ];

  /* =======================================================
     SERVICES
  ======================================================= */

  const serviceItems = services
    .slice(0, 6)
    .map((service, index) => ({
      ...service,
      Icon: iconList[index],
      image: imageList[index],
    }));

  return (
    <div className="min-h-screen overflow-hidden bg-ivory text-charcoal">

      {/* =====================================================
          SEO
      ===================================================== */}

      <SEO
        title="Services"
        description="Security, housekeeping, manpower outsourcing, training and specialised security services by Knight Eyes Security Services."
        path="/services"
      />

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <Navbar />

      <main>

        {/* ===================================================
            HERO
        =================================================== */}

        <section className="relative overflow-hidden border-b border-border">

          <CurveLines
            className="
              right-[-180px]
              top-[-30px]
              hidden
              h-[390px]
              w-[720px]
              text-black
              lg:block
            "
          />

          <div
            className="
              relative
              mx-auto
              max-w-7xl
              px-5
              pb-16
              pt-20
              sm:px-8
              sm:pb-20
              sm:pt-24
              lg:pb-24
              lg:pt-28
            "
          >

            <div
              className="
                grid
                items-end
                gap-8
                lg:grid-cols-[1.2fr_0.8fr]
                lg:gap-14
              "
            >

              {/* HERO TITLE */}

              <Reveal direction="left">

                <div>

                  <p
                    className="
                      mb-5
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.28em]
                      text-gold
                    "
                  >
                    Our Services
                  </p>

                  <h1
                    className="
                      max-w-5xl
                      font-display
                      text-[3.7rem]
                      font-normal
                      leading-[0.9]
                      tracking-[-0.045em]
                      sm:text-[5rem]
                      lg:text-[6.5rem]
                    "
                  >
                    Security,
                    <br />
                    manpower &
                    <br />

                    <span className="italic text-gold">
                      support.
                    </span>
                  </h1>

                </div>

              </Reveal>

              {/* HERO DESCRIPTION */}

              <Reveal
                direction="right"
                delay={100}
              >

                <div className="max-w-lg lg:pb-1">

                  <div className="mb-5 h-px w-10 bg-gold" />

                  <p
                    className="
                      text-[16px]
                      leading-[1.75]
                      text-charcoal-light
                      sm:text-[17px]
                    "
                  >
                    Knight Eyes Security Services provides security,
                    housekeeping, manpower outsourcing and training
                    services for different client requirements.
                  </p>

                  <Link
                    href="/contact"
                    className="
                      group
                      mt-6
                      inline-flex
                      items-center
                      gap-3
                      border-b
                      border-charcoal
                      pb-2
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      transition-colors
                      duration-300
                      hover:border-gold
                      hover:text-gold
                    "
                  >
                    Discuss your requirement

                    <span
                      className="
                        transition-transform
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                    >
                      <Arrow />
                    </span>

                  </Link>

                </div>

              </Reveal>

            </div>

          </div>
        </section>

        {/* ===================================================
            INTRO
        =================================================== */}

        <section
          className="
            relative
            overflow-hidden
            px-5
            py-20
            sm:px-8
            sm:py-24
            lg:py-28
          "
        >

          <CurveLines
            flip
            className="
              left-[-230px]
              top-[-50px]
              h-[350px]
              w-[650px]
              text-black
            "
          />

          <div className="relative mx-auto max-w-7xl">

            <div
              className="
                grid
                gap-7
                lg:grid-cols-[0.3fr_1fr]
                lg:gap-16
              "
            >

              <Reveal direction="left">

                <p
                  className="
                    pt-2
                    text-[10px]
                    uppercase
                    tracking-[0.28em]
                    text-gold
                  "
                >
                  What KESS Provides
                </p>

              </Reveal>

              <Reveal delay={80}>

                <div>

                  <h2
                    className="
                      max-w-4xl
                      font-display
                      text-[2.5rem]
                      font-normal
                      leading-[0.98]
                      tracking-[-0.035em]
                      sm:text-[3.5rem]
                      lg:text-[4rem]
                    "
                  >
                    Practical services for
                    <br />

                    <span className="italic text-gold">
                      day-to-day operations.
                    </span>
                  </h2>

                  <p
                    className="
                      mt-5
                      max-w-2xl
                      text-[16px]
                      leading-[1.75]
                      text-charcoal-light
                      sm:text-[17px]
                    "
                  >
                    From security personnel and housekeeping staff
                    to manpower outsourcing and training, KESS
                    provides services structured around client needs.
                  </p>

                </div>

              </Reveal>

            </div>

          </div>

        </section>

        {/* ===================================================
            SERVICES
        =================================================== */}

        <section className="border-t border-border">

          {serviceItems.map((service, index) => {

            const reversed = index % 2 !== 0;
            const Icon = service.Icon;

            return (
              <article
                key={service.title || index}
                className="
                  group
                  relative
                  overflow-hidden
                  border-b
                  border-border
                "
              >

                {/* Flowing background lines */}

                {index % 2 === 1 && (
                  <CurveLines
                    flip
                    position="left"
                    className="
                      bottom-[-50px]
                      left-[-200px]
                      hidden
                      h-[330px]
                      w-[620px]
                      text-black
                      lg:block
                    "
                  />
                )}

                <div
                  className={`
                    relative
                    mx-auto
                    grid
                    max-w-7xl
                    lg:grid-cols-2
                    ${
                      reversed
                        ? "lg:[&>*:first-child]:order-2"
                        : ""
                    }
                  `}
                >

                  {/* IMAGE */}

                  <Reveal
                    direction={
                      reversed
                        ? "right"
                        : "left"
                    }
                  >

                    <ServiceImage
                      image={service.image}
                      title={service.title}
                      number={String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    />

                  </Reveal>

                  {/* CONTENT */}

                  <Reveal
                    direction={
                      reversed
                        ? "left"
                        : "right"
                    }
                    delay={80}
                  >

                    <div
                      className="
                        flex
                        min-h-[340px]
                        flex-col
                        justify-between
                        px-5
                        py-8
                        sm:px-8
                        sm:py-10
                        lg:min-h-[340px]
                        lg:px-12
                        lg:py-10
                      "
                    >

                      {/* TOP */}

                      <div>

                        <div
                          className="
                            flex
                            items-start
                            justify-between
                            gap-5
                          "
                        >

                          <p
                            className="
                              pt-2
                              text-[9px]
                              font-semibold
                              uppercase
                              tracking-[0.25em]
                              text-gold
                            "
                          >
                            {service.eyebrow ||
                              `0${index + 1} / SERVICE`}
                          </p>

                          {/* ICON */}

                          {Icon && (
                            <div
                              className="
                                shrink-0
                                transition-transform
                                duration-500
                                group-hover:-translate-y-1
                              "
                            >
                              <Icon />
                            </div>
                          )}

                        </div>

                        {/* TITLE */}

                        <h2
                          className="
                            mt-4
                            max-w-xl
                            font-display
                            text-[2.5rem]
                            font-normal
                            leading-[0.95]
                            tracking-[-0.035em]
                            transition-transform
                            duration-500
                            group-hover:translate-x-1
                            sm:text-[3.1rem]
                          "
                        >
                          {service.title}
                        </h2>

                        <div className="mt-5 h-px w-9 bg-gold" />

                        {/* DESCRIPTION */}

                        <p
                          className="
                            mt-5
                            max-w-xl
                            text-[16px]
                            leading-[1.75]
                            text-charcoal-light
                            sm:text-[17px]
                          "
                        >
                          {service.description}
                        </p>

                      </div>

                      {/* BOTTOM */}

                      <div
                        className="
                          mt-7
                          flex
                          items-center
                          justify-between
                          border-t
                          border-border
                          pt-4
                        "
                      >

                        <span
                          className="
                            text-[9px]
                            uppercase
                            tracking-[0.2em]
                            text-charcoal-light/60
                          "
                        >
                          KESS Services
                        </span>

                        <Link
                          href="/contact"
                          className="
                            group/link
                            inline-flex
                            items-center
                            gap-2
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-[0.18em]
                            transition-colors
                            hover:text-gold
                          "
                        >
                          Enquire

                          <span
                            className="
                              transition-transform
                              duration-300
                              group-hover/link:-translate-y-0.5
                              group-hover/link:translate-x-0.5
                            "
                          >
                            <Arrow />
                          </span>

                        </Link>

                      </div>

                    </div>

                  </Reveal>

                </div>

              </article>
            );
          })}

        </section>

        {/* ===================================================
            MANPOWER OUTSOURCING
        =================================================== */}

        <section
          className="
            relative
            overflow-hidden
            px-5
            py-12
            sm:px-8
            sm:py-14
            lg:py-16
          "
        >

          <CurveLines
            className="
              right-[-210px]
              top-[10px]
              h-[390px]
              w-[700px]
              text-black
            "
          />

          <div className="relative mx-auto max-w-7xl">

            <div
              className="
                grid
                gap-9
                lg:grid-cols-[0.6fr_1.4fr]
                lg:gap-16
              "
            >

              {/* LEFT */}

              <Reveal direction="left">

                <div>

                  <p
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.28em]
                      text-gold
                    "
                  >
                    Manpower Outsourcing
                  </p>

                  <h2
                    className="
                      mt-4
                      max-w-xl
                      font-display
                      text-[2.8rem]
                      font-normal
                      leading-[0.95]
                      tracking-[-0.035em]
                      sm:text-[3.6rem]
                    "
                  >
                    People for
                    <br />
                    different
                    <br />

                    <span className="italic text-gold">
                      requirements.
                    </span>
                  </h2>

                  <p
                    className="
                      mt-5
                      max-w-md
                      text-[16px]
                      leading-[1.75]
                      text-charcoal-light
                    "
                  >
                    KESS provides manpower across different
                    categories according to client requirements.
                  </p>

                </div>

              </Reveal>

              {/* RIGHT */}

              <Reveal
                direction="right"
                delay={80}
              >

                <div>

                  {/* CATEGORY LIST */}

                  <div className="border-t border-border">

                    {manpowerCategories.map(
                      (category, index) => (

                        <div
                          key={category}
                          className="
                            group/item
                            flex
                            items-center
                            justify-between
                            border-b
                            border-border
                            py-3.5
                            transition-colors
                            hover:bg-charcoal/[0.025]
                          "
                        >

                          <div className="flex items-center gap-5">

                            <span
                              className="
                                text-[9px]
                                tracking-[0.18em]
                                text-gold
                              "
                            >
                              {String(index + 1).padStart(
                                2,
                                "0"
                              )}
                            </span>

                            <span
                              className="
                                text-[16px]
                                text-charcoal-light
                                transition-all
                                duration-300
                                group-hover/item:translate-x-1
                                group-hover/item:text-charcoal
                                sm:text-[17px]
                              "
                            >
                              {category}
                            </span>

                          </div>

                          <span
                            className="
                              text-charcoal-light/30
                              transition-all
                              duration-300
                              group-hover/item:translate-x-1
                              group-hover/item:text-gold
                            "
                          >
                            <Arrow />
                          </span>

                        </div>

                      )
                    )}

                  </div>

                  {/* ADDITIONAL CATEGORIES */}

                  <div
                    className="
                      mt-6
                      grid
                      border-y
                      border-border
                      sm:grid-cols-3
                    "
                  >

                    {[
                      "Supervisors",
                      "Fitters",
                      "Electricians",
                    ].map((item, index) => (

                      <div
                        key={item}
                        className="
                          border-b
                          border-border
                          px-4
                          py-4
                          last:border-b-0
                          sm:border-b-0
                          sm:border-r
                          sm:last:border-r-0
                        "
                      >

                        <span
                          className="
                            text-[9px]
                            tracking-[0.18em]
                            text-gold
                          "
                        >
                          0{index + 1}
                        </span>

                        <p
                          className="
                            mt-2
                            font-display
                            text-[19px]
                          "
                        >
                          {item}
                        </p>

                      </div>

                    ))}

                  </div>

                  <p
                    className="
                      mt-5
                      max-w-xl
                      text-[15px]
                      leading-[1.7]
                      text-charcoal-light
                    "
                  >
                    Labour supply is also part of the manpower
                    service offering for client requirements.
                  </p>

                </div>

              </Reveal>

            </div>

          </div>

        </section>

        {/* ===================================================
            TRAINING
        =================================================== */}

        <section
          className="
            relative
            overflow-hidden
            border-y
            border-border
            bg-[#eeeadf]
          "
        >

          <CurveLines
            flip
            className="
              bottom-[-60px]
              left-[-180px]
              h-[350px]
              w-[620px]
              text-black
            "
          />

          <div
            className="
              relative
              mx-auto
              max-w-7xl
              px-5
              py-12
              sm:px-8
              sm:py-14
              lg:py-16
            "
          >

            <div
              className="
                grid
                gap-9
                lg:grid-cols-[0.6fr_1.4fr]
                lg:gap-16
              "
            >

              {/* LEFT */}

              <Reveal direction="left">

                <div>

                  <p
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.28em]
                      text-gold
                    "
                  >
                    Training
                  </p>

                  <h2
                    className="
                      mt-4
                      max-w-xl
                      font-display
                      text-[2.8rem]
                      font-normal
                      leading-[0.95]
                      tracking-[-0.035em]
                      sm:text-[3.6rem]
                    "
                  >
                    Training for
                    <br />

                    <span className="italic text-gold">
                      prepared personnel.
                    </span>
                  </h2>

                  <p
                    className="
                      mt-5
                      max-w-md
                      text-[16px]
                      leading-[1.75]
                      text-charcoal-light
                    "
                  >
                    Training forms an important part of preparing
                    personnel for their responsibilities.
                  </p>

                </div>

              </Reveal>

              {/* RIGHT */}

              <Reveal
                direction="right"
                delay={80}
              >

                <div>

                  <div className="border-t border-charcoal/15">

                    {training.programme?.map(
                      (item, index) => (

                        <div
                          key={item}
                          className="
                            group/training
                            grid
                            grid-cols-[36px_1fr]
                            gap-4
                            border-b
                            border-charcoal/15
                            py-3.5
                            sm:grid-cols-[45px_1fr]
                          "
                        >

                          <span
                            className="
                              pt-1
                              text-[9px]
                              tracking-[0.18em]
                              text-gold
                            "
                          >
                            {String(index + 1).padStart(
                              2,
                              "0"
                            )}
                          </span>

                          <p
                            className="
                              text-[15px]
                              leading-[1.7]
                              text-charcoal-light
                              transition-transform
                              duration-300
                              group-hover/training:translate-x-1
                              sm:text-[16px]
                            "
                          >
                            {item}
                          </p>

                        </div>

                      )
                    )}

                  </div>

                  {/* TRAINER */}

                  {training.trainer && (
                    <div
                      className="
                        mt-5
                        border-t
                        border-charcoal/15
                        pt-4
                      "
                    >

                      <p
                        className="
                          text-[9px]
                          uppercase
                          tracking-[0.2em]
                          text-gold
                        "
                      >
                        Trainer
                      </p>

                      <p
                        className="
                          mt-2
                          font-display
                          text-[22px]
                        "
                      >
                        {training.trainer.name}
                      </p>

                      <p
                        className="
                          mt-1
                          text-[13px]
                          text-charcoal-light
                        "
                      >
                        {training.trainer.credential}
                      </p>

                    </div>
                  )}

                </div>

              </Reveal>

            </div>

          </div>

        </section>

        {/* ===================================================
            SECTORS
        =================================================== */}

        <section
          className="
            relative
            overflow-hidden
            px-5
            py-12
            sm:px-8
            sm:py-14
            lg:py-16
          "
        >

          <CurveLines
            className="
              right-[-220px]
              top-[-80px]
              h-[350px]
              w-[650px]
              text-black
            "
          />

          <div className="relative mx-auto max-w-7xl">

            <Reveal>

              <div
                className="
                  mb-8
                  grid
                  gap-5
                  lg:grid-cols-[0.6fr_1.4fr]
                  lg:gap-16
                "
              >

                <p
                  className="
                    pt-2
                    text-[10px]
                    uppercase
                    tracking-[0.28em]
                    text-gold
                  "
                >
                  Areas We Serve
                </p>

                <h2
                  className="
                    max-w-4xl
                    font-display
                    text-[2.8rem]
                    font-normal
                    leading-[0.95]
                    tracking-[-0.035em]
                    sm:text-[3.6rem]
                    lg:text-[4.1rem]
                  "
                >
                  Services across
                  <br />

                  <span className="italic text-gold">
                    different environments.
                  </span>
                </h2>

              </div>

            </Reveal>

            <Reveal delay={80}>

              <div
                className="
                  grid
                  border-t
                  border-border
                  sm:grid-cols-2
                "
              >

                {[
                  "Commercial",
                  "Hotels & Restaurants",
                  "Retailers",
                  "Residential",
                  "Banking Firms",
                  "IT Firms",
                  "Hospitals",
                ].map((sector, index) => (

                  <div
                    key={sector}
                    className="
                      group/sector
                      flex
                      items-center
                      justify-between
                      border-b
                      border-border
                      py-4
                      pr-4
                      transition-colors
                      hover:bg-charcoal/[0.025]
                      sm:pr-7
                    "
                  >

                    <div className="flex items-center gap-5">

                      <span
                        className="
                          text-[9px]
                          tracking-[0.18em]
                          text-gold
                        "
                      >
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <span
                        className="
                          font-display
                          text-[19px]
                          transition-transform
                          duration-300
                          group-hover/sector:translate-x-1
                          sm:text-[21px]
                        "
                      >
                        {sector}
                      </span>

                    </div>

                    <span
                      className="
                        text-charcoal-light/30
                        transition-all
                        duration-300
                        group-hover/sector:translate-x-1
                        group-hover/sector:text-gold
                      "
                    >
                      <Arrow />
                    </span>

                  </div>

                ))}

              </div>

            </Reveal>

          </div>

        </section>

        {/* ===================================================
            CTA
        =================================================== */}

        <section
          className="
            relative
            overflow-hidden
            border-t
            border-border
            bg-charcoal
            text-ivory
          "
        >

          <CurveLines
            flip
            color="#FAF8F5"
            className="
              right-[-150px]
              top-[-50px]
              h-[370px]
              w-[680px]
              text-ivory
            "
          />

          <div
            className="
              relative
              mx-auto
              max-w-7xl
              px-5
              py-12
              sm:px-8
              sm:py-14
              lg:py-16
            "
          >

            <div
              className="
                grid
                gap-8
                lg:grid-cols-[1fr_auto]
                lg:items-end
              "
            >

              {/* CTA TEXT */}

              <Reveal direction="left">

                <div>

                  <p
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.28em]
                      text-gold
                    "
                  >
                    Need a Service?
                  </p>

                  <h2
                    className="
                      mt-4
                      max-w-4xl
                      font-display
                      text-[2.8rem]
                      font-normal
                      leading-[0.95]
                      tracking-[-0.035em]
                      sm:text-[4rem]
                    "
                  >
                    Tell us what your organisation

                    <span className="italic text-gold">
                      {" "}
                      needs.
                    </span>
                  </h2>

                  <p
                    className="
                      mt-5
                      max-w-xl
                      text-[16px]
                      leading-[1.7]
                      text-ivory/65
                    "
                  >
                    Get in touch with KESS to discuss your security,
                    housekeeping or manpower requirements.
                  </p>

                </div>

              </Reveal>

              {/* CTA BUTTON */}

              <Reveal
                direction="right"
                delay={80}
              >

                <Link
                  href="/contact"
                  className="
                    group
                    inline-flex
                    w-fit
                    items-center
                    gap-3
                    border-b
                    border-ivory/50
                    pb-2
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    transition-colors
                    hover:border-gold
                    hover:text-gold
                  "
                >
                  Contact KESS

                  <span
                    className="
                      transition-transform
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  >
                    <Arrow />
                  </span>

                </Link>

              </Reveal>

            </div>

          </div>

        </section>

      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />

      <FloatingWhatsApp />

      {/* =====================================================
          GLOBAL REVEAL CSS
      ===================================================== */}

      <style jsx global>{`

        /* -----------------------------------------------
           SCROLL REVEAL
        ------------------------------------------------ */

        .reveal {
          opacity: 0;
          transform: var(--reveal-transform);

          transition:
            opacity 650ms ease-out,
            transform 650ms ease-out;

          will-change:
            opacity,
            transform;
        }

        .reveal.is-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        /* -----------------------------------------------
           IMAGE HOVER
        ------------------------------------------------ */

        .service-image img {
          backface-visibility: hidden;
        }

        /* -----------------------------------------------
           REDUCED MOTION
        ------------------------------------------------ */

        @media (prefers-reduced-motion: reduce) {

          .reveal {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }

          .service-image img {
            transition: none !important;
          }

        }

        /* -----------------------------------------------
           MOBILE CURVES
        ------------------------------------------------ */

        @media (max-width: 768px) {

          .reveal {
            transform: translateY(12px);
          }

        }

      `}</style>

    </div>
  );
}