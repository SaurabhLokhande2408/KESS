import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

import siteData from "@/data/siteData.json";

export default function Clients() {
  const { clients, company } = siteData;

  const [visibleClients, setVisibleClients] = useState(new Set());
  const clientRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const index = Number(entry.target.dataset.index);

          setVisibleClients((previous) => {
            const next = new Set(previous);
            next.add(index);
            return next;
          });

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    clientRefs.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="clients-page min-h-screen overflow-hidden bg-[#F7F5EF] text-[#20241D]">

      {/* SEO */}

      <SEO
        title="Our Clients"
        description="Knight Eyes Security Services provides dependable security, housekeeping and manpower solutions to corporate, institutional and residential organisations."
        path="/clients"
      />

      {/* NAVBAR */}

      <Navbar />

      <main>

        {/* ============================================================
            HERO
            ============================================================ */}

        <section className="relative min-h-[calc(100vh-54px)] overflow-hidden px-5 sm:px-8">

          {/* LEFT-SIDE BACKGROUND CURVES */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <svg
              className="hero-curves hero-curves-left"
              viewBox="0 0 1000 1000"
              fill="none"
            >
              <path d="M-180 120C120 30 390 125 485 345C575 555 445 735 200 775C15 805 5 920 190 1080" />
              <path d="M-195 175C105 75 365 160 455 360C540 550 420 690 185 735C20 770 25 875 205 1035" />
              <path d="M-210 230C90 120 340 190 425 375C505 540 395 650 170 700C30 730 45 830 220 985" />
              <path d="M-220 290C70 170 315 220 395 390C465 530 370 610 155 665C45 695 65 790 235 935" />
              <path d="M-230 350C55 225 285 250 365 405C425 525 345 580 145 635C60 660 85 750 250 885" />
            </svg>
          </div>


          {/* RIGHT-SIDE SECURITY VISUAL */}

          <div
            aria-hidden="true"
            className="hero-security-visual"
          >

            <svg
              className="security-curves"
              viewBox="0 0 760 760"
              fill="none"
            >
              <path d="M760 40C545 8 300 85 238 260C176 435 320 535 520 545C685 553 730 650 610 760" />
              <path d="M760 105C565 72 345 130 290 285C238 430 365 500 540 515C675 527 710 605 615 705" />
              <path d="M760 170C585 140 390 180 340 310C300 425 405 475 560 490C660 500 690 560 625 650" />
              <path d="M760 235C605 210 435 235 395 335C365 415 445 455 575 468C650 476 670 520 635 590" />
            </svg>


            <div className="hero-shield">

              <div className="shield-ring shield-ring-outer" />
              <div className="shield-ring shield-ring-inner" />

              <svg
                className="shield-icon"
                viewBox="0 0 240 280"
                fill="none"
              >

                <path
                  d="
                    M120 15
                    L211 48
                    V121
                    C211 183 174 231 120 261
                    C66 231 29 183 29 121
                    V48
                    L120 15Z
                  "
                  stroke="currentColor"
                  strokeWidth="3"
                />

                <path
                  d="
                    M120 38
                    L187 63
                    V120
                    C187 169 160 207 120 232
                    C80 207 53 169 53 120
                    V63
                    L120 38Z
                  "
                  stroke="currentColor"
                  strokeWidth="1"
                />

                <path
                  d="
                    M120 82
                    L127 103
                    H149
                    L131 116
                    L138 138
                    L120 125
                    L102 138
                    L109 116
                    L91 103
                    H113
                    L120 82Z
                  "
                  fill="currentColor"
                />

                <path
                  d="M120 151V193"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                <path
                  d="M105 175H135"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

              </svg>


              <div className="shield-caption">
                <span>PROTECTION</span>
                <span>VIGILANCE</span>
                <span>DISCIPLINE</span>
              </div>

            </div>

          </div>


          {/* HERO CONTENT */}

          <div className="relative z-10 mx-auto flex min-h-[calc(100vh-54px)] max-w-7xl items-center">

            <div className="w-full py-24 sm:py-28">

              {/* EYEBROW */}

              <div className="hero-reveal hero-delay-1 mb-8 flex items-center gap-5">

                <span className="h-px w-16 bg-[#C6A348]" />

                <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#3F453C]">
                  Our Clients
                </span>

              </div>


              {/* MAIN HEADLINE */}

              <h1 className="hero-reveal hero-delay-2 max-w-[1080px] font-display text-[4rem] font-medium leading-[0.9] tracking-[-0.045em] text-[#20241D] sm:text-6xl md:text-7xl lg:text-[7.3rem]">

                Trusted by

                <br />

                organisations

              </h1>


              {/* DESCRIPTION + YEARS */}

              <div className="hero-reveal hero-delay-3 mt-12 max-w-5xl sm:mt-16">

                <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

                  <p className="max-w-2xl text-base font-medium leading-7 text-[#454B42] sm:text-lg sm:leading-8">

                    {company.name} has supported corporate, institutional and
                    residential environments with disciplined people,
                    structured operations and dependable service.

                  </p>


                  {/* YEARS */}

                  <div className="flex items-center gap-5">

                    <span className="h-14 w-px bg-[#C6A348]" />

                    <div>

                      <p className="font-display text-5xl leading-none text-[#20241D]">
                        {company.yearsInBusiness}
                      </p>

                      <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#454B42]">
                        Years of service
                      </p>

                    </div>

                  </div>

                </div>

              </div>


              {/* SCROLL INDICATOR */}

              <div className="hero-reveal hero-delay-4 mt-16 flex items-center gap-5 text-sm font-bold uppercase tracking-[0.28em] text-[#4A5047]">

                <span className="relative h-14 w-[2px] overflow-hidden bg-[#C8C5BC]">
                  <span className="scroll-line absolute left-0 top-0 h-7 w-[2px] bg-[#C6A348]" />
                </span>

                <div className="flex items-center gap-4">

                  <span>
                    Explore our clients
                  </span>

                  <span className="animate-bounce text-2xl font-bold text-[#C6A348]">
                    ↓
                  </span>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ============================================================
            DARK INTRO STRIP
            ============================================================ */}

        <section className="relative overflow-hidden bg-[#20251E] px-5 py-10 sm:px-8 lg:py-12">

          <div className="mx-auto max-w-7xl">

            <div className="flex items-center justify-between">

              <div className="flex flex-wrap items-center gap-x-35 gap-y-3">

                <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#F7F5EF]/85">
                  Corporate
                </span>

                <span className="text-[#C6A348]">
                  •
                </span>

                <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#F7F5EF]/85">
                  Institutional
                </span>

                <span className="text-[#C6A348]">
                  •
                </span>

                <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#F7F5EF]/85">
                  Residential
                </span>

              </div>


              <div className="hidden items-center gap-3 sm:flex">

                <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#F7F5EF]/55">
                  Explore
                </span>

                <span className="text-lg leading-none text-[#C6A348]">
                  ↓
                </span>

              </div>

            </div>

          </div>

        </section>


        {/* ============================================================
            CLIENT LOGOS
            ============================================================ */}

        <section className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32">

          {/* RIGHT-SIDE DECORATIVE CURVES */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-[420px] top-[-50px] h-[1050px] w-[1050px]"
          >

            <svg
              viewBox="0 0 1000 1000"
              className="h-full w-full -scale-x-100"
              fill="none"
            >

              <path
                d="M-100 100C230 -20 540 85 630 330C720 575 515 760 245 805C50 835 50 940 260 1050"
                stroke="rgba(80,84,73,0.22)"
                strokeWidth="1"
              />

              <path
                d="M-115 165C210 45 500 140 590 350C675 550 490 710 230 760C70 795 75 895 275 1010"
                stroke="rgba(80,84,73,0.18)"
                strokeWidth="0.75"
              />

              <path
                d="M-130 230C195 110 460 195 550 375C625 530 460 665 215 720C90 750 100 850 290 965"
                stroke="rgba(80,84,73,0.14)"
                strokeWidth="0.55"
              />

              <path
                d="M-140 295C180 175 425 245 510 395C575 515 430 625 200 680C105 705 125 805 310 920"
                stroke="rgba(80,84,73,0.11)"
                strokeWidth="0.4"
              />

            </svg>

          </div>


          {/* CONTENT */}

          <div className="relative z-10 mx-auto max-w-7xl">

            {/* SECTION HEADING */}

            <div className="grid gap-8 border-b border-[#20241D]/10 pb-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">

              <div>

                <p className="mb-5 text-xs font-bold uppercase tracking-[0.26em] text-[#9B7A2F]">
                  Organisations we serve
                </p>

                <h2 className="max-w-2xl font-display text-4xl leading-[1.02] tracking-[-0.025em] text-[#20241D] sm:text-5xl lg:text-6xl">
                  A decade of dependable partnerships.
                </h2>

              </div>

            </div>


            {/* LOGO GRID */}

            <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">

              {clients.map((client, index) => {

                const isVisible = visibleClients.has(index);

                return (
                  <article
                    key={`${client.logo}-${index}`}
                    ref={(element) => {
                      clientRefs.current[index] = element;
                    }}
                    data-index={index}
                    className={`client-item ${
                      isVisible ? "client-visible" : ""
                    }`}
                  >

                    <div className="client-logo-area">

                      <div className="client-glow" />

                      <img
                        src={client.logo}
                        alt={
                          client.name?.trim()
                            ? client.name
                            : `KESS client ${index + 1}`
                        }
                        loading="lazy"
                        className="client-logo"
                      />

                    </div>


                    {client.name?.trim() && (
                      <div className="client-name">
                        {client.name}
                      </div>
                    )}

                  </article>
                );

              })}

            </div>

          </div>

        </section>


        {/* ============================================================
            CTA
            ============================================================ */}

        <section className="relative overflow-hidden bg-[#20251E] px-5 py-24 text-[#F7F5EF] sm:px-8 sm:py-32">

          {/* CTA CURVES */}

          <svg
            aria-hidden="true"
            className="cta-curves pointer-events-none absolute -right-[12%] -top-[35%] h-[850px] w-[850px]"
            viewBox="0 0 850 850"
            fill="none"
          >

            <path
              d="M900 80C630 0 340 105 315 300C290 495 490 565 665 585C810 600 830 700 650 850"
              stroke="rgba(247,245,239,0.09)"
              strokeWidth="1"
            />

            <path
              d="M900 145C650 65 390 150 365 320C340 480 515 540 680 560C800 575 820 655 690 790"
              stroke="rgba(247,245,239,0.07)"
              strokeWidth="0.75"
            />

            <path
              d="M900 210C675 135 440 200 415 345C395 475 540 520 695 540C795 555 815 615 720 735"
              stroke="rgba(247,245,239,0.05)"
              strokeWidth="0.55"
            />

          </svg>


          {/* CTA CONTENT */}

          <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">

            <div className="max-w-3xl">

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C6A348]">
                Work with KESS
              </p>

              <h2 className="mt-5 font-display text-4xl leading-[1.04] sm:text-5xl lg:text-6xl">
                Looking for a dependable security or manpower partner?
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-[#F7F5EF]/60 sm:text-base">
                Tell us about your organisation, site and requirements. We
                will work with you to build the right deployment.
              </p>

            </div>


            {/* CTA LINK */}

            <Link
              href="/contact"
              className="group flex w-fit items-center gap-5 border-b border-[#C6A348] pb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#F7F5EF] transition-all duration-500 hover:gap-8"
            >

              Discuss your requirements

              <span className="text-lg leading-none text-[#C6A348]">
                →
              </span>

            </Link>

          </div>

        </section>

      </main>


      {/* FOOTER */}

      <Footer />

      <FloatingWhatsApp />


      {/* ============================================================
          PAGE STYLES
          ============================================================ */}

      <style jsx>{`

        /* ============================================================
           HERO REVEAL
           ============================================================ */

        .hero-reveal {
          opacity: 0;

          transform: translateY(28px);

          animation:
            heroReveal
            1s
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }


        .hero-delay-1 {
          animation-delay: 0.08s;
        }


        .hero-delay-2 {
          animation-delay: 0.18s;
        }


        .hero-delay-3 {
          animation-delay: 0.34s;
        }


        .hero-delay-4 {
          animation-delay: 0.5s;
        }


        @keyframes heroReveal {

          to {
            opacity: 1;
            transform: translateY(0);
          }

        }


        /* ============================================================
           LEFT HERO CURVES
           ============================================================ */

        .hero-curves {
          position: absolute;
          pointer-events: none;
        }


        .hero-curves-left {
          left: -170px;

          bottom: -320px;

          width: 1000px;
          height: 1000px;

          opacity: 0.7;

          animation:
            curveFloat
            16s
            ease-in-out
            infinite;
        }


        .hero-curves path {
          stroke: rgba(82, 86, 76, 0.24);

          stroke-linecap: round;

          vector-effect: non-scaling-stroke;
        }


        .hero-curves-left path:nth-child(1) {
          stroke-width: 1.1;
        }


        .hero-curves-left path:nth-child(2) {
          stroke-width: 0.8;
        }


        .hero-curves-left path:nth-child(3) {
          stroke-width: 0.65;
        }


        .hero-curves-left path:nth-child(4) {
          stroke-width: 0.5;
        }


        .hero-curves-left path:nth-child(5) {
          stroke-width: 0.35;
        }


        @keyframes curveFloat {

          0%,
          100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(16px, -12px);
          }

        }


        /* ============================================================
           RIGHT SECURITY VISUAL
           ============================================================ */

        .hero-security-visual {
          position: absolute;

          right: -20px;

          top: 50%;

          width: 720px;
          height: 720px;

          transform: translateY(-42%);

          pointer-events: none;

          z-index: 1;

          opacity: 0;

          animation:
            securityVisualReveal
            1.4s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.55s
            forwards;
        }


        /* ============================================================
           SECURITY CURVES
           ============================================================ */

        .security-curves {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          overflow: visible;

          opacity: 0.75;

          animation:
            securityCurvesFloat
            14s
            ease-in-out
            infinite;
        }


        .security-curves path {
          stroke: rgba(82, 86, 76, 0.18);

          stroke-linecap: round;

          vector-effect: non-scaling-stroke;
        }


        .security-curves path:nth-child(1) {
          stroke-width: 1.15;
        }


        .security-curves path:nth-child(2) {
          stroke-width: 0.85;
        }


        .security-curves path:nth-child(3) {
          stroke-width: 0.6;
        }


        .security-curves path:nth-child(4) {
          stroke-width: 0.4;
        }


        /* ============================================================
           SHIELD
           ============================================================ */

        .hero-shield {
          position: absolute;

          left: 50%;
          top: 50%;

          width: 285px;
          height: 330px;

          transform: translate(-50%, -50%);

          display: flex;

          align-items: center;
          justify-content: center;

          color: rgba(72, 76, 67, 0.58);

          animation:
            shieldFloat
            8s
            ease-in-out
            infinite;
        }


        .shield-ring {
          position: absolute;

          left: 50%;
          top: 50%;

          border-radius: 50%;

          transform: translate(-50%, -50%);

          border: 1px solid rgba(198, 163, 72, 0.20);
        }


        .shield-ring-outer {
          width: 330px;
          height: 330px;
        }


        .shield-ring-inner {
          width: 270px;
          height: 270px;

          border-color: rgba(198, 163, 72, 0.13);
        }


        /* ============================================================
           SHIELD ICON
           ============================================================ */

        .shield-icon {
          position: relative;

          z-index: 3;

          width: 175px;
          height: auto;

          opacity: 0.82;

          filter:
            drop-shadow(
              0 15px 25px rgba(32, 36, 29, 0.05)
            );

          transition:
            transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
            opacity 0.7s ease;
        }


        .hero-security-visual:hover .shield-icon {
          transform: scale(1.045);

          opacity: 0.95;
        }


        /* ============================================================
           SHIELD CAPTION
           ============================================================ */

        .shield-caption {
          position: absolute;

          bottom: -4px;

          left: 50%;

          transform: translateX(-50%);

          display: flex;

          gap: 12px;

          white-space: nowrap;

          font-size: 9px;

          font-weight: 700;

          letter-spacing: 0.18em;

          color: rgba(55, 60, 53, 0.62);
        }


        .shield-caption span {
          display: flex;

          align-items: center;

          gap: 12px;
        }


        .shield-caption span:not(:last-child)::after {
          content: "";

          width: 2px;
          height: 2px;

          border-radius: 50%;

          background: #C6A348;
        }


        /* ============================================================
           SECURITY VISUAL ANIMATION
           ============================================================ */

        @keyframes securityVisualReveal {

          0% {
            opacity: 0;

            transform:
              translateY(-38%)
              translateX(35px);
          }

          100% {
            opacity: 1;

            transform:
              translateY(-42%)
              translateX(0);
          }

        }


        @keyframes shieldFloat {

          0%,
          100% {
            transform:
              translate(-50%, -50%);
          }

          50% {
            transform:
              translate(-50%, calc(-50% - 7px));
          }

        }


        @keyframes securityCurvesFloat {

          0%,
          100% {
            transform:
              translate(0, 0);
          }

          50% {
            transform:
              translate(-12px, 8px);
          }

        }


        /* ============================================================
           SCROLL INDICATOR
           ============================================================ */

        .scroll-line {
          animation:
            scrollLine
            2.5s
            ease-in-out
            infinite;
        }


        @keyframes scrollLine {

          0% {
            transform: translateY(-14px);
            opacity: 0;
          }

          30% {
            opacity: 1;
          }

          70% {
            opacity: 1;
          }

          100% {
            transform: translateY(45px);
            opacity: 0;
          }

        }


        /* ============================================================
           CLIENT GRID
           ============================================================ */

        .client-item {
          min-height: 250px;

          display: flex;

          flex-direction: column;

          padding: 24px 28px;

          border-right:
            1px solid rgba(32, 36, 29, 0.09);

          border-bottom:
            1px solid rgba(32, 36, 29, 0.09);

          opacity: 0;

          transform: translateY(32px);

          transition:
            opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }


        .client-visible {
          opacity: 1;

          transform: translateY(0);
        }


        .client-item:nth-child(4n + 2) {
          transition-delay: 0.06s;
        }


        .client-item:nth-child(4n + 3) {
          transition-delay: 0.12s;
        }


        .client-item:nth-child(4n + 4) {
          transition-delay: 0.18s;
        }


        /* ============================================================
           LOGO AREA
           ============================================================ */

        .client-logo-area {
          position: relative;

          flex: 1;

          min-height: 165px;

          display: flex;

          align-items: center;
          justify-content: center;

          overflow: hidden;
        }


        .client-glow {
          position: absolute;

          width: 130px;
          height: 130px;

          left: 50%;
          top: 50%;

          transform:
            translate(-50%, -50%)
            scale(0.8);

          border-radius: 50%;

          background:
            rgba(198, 163, 72, 0.055);

          filter: blur(28px);

          opacity: 0;

          transition:
            opacity 0.7s ease,
            transform 0.7s ease;
        }


        /* ============================================================
           CLIENT LOGO
           ============================================================ */

        .client-logo {
          position: relative;

          z-index: 2;

          display: block;

          max-width: 90%;
          max-height: 130px;

          width: auto;
          height: auto;

          object-fit: contain;

          filter: none;

          opacity: 1;

          transform: scale(1);

          transition:
            transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
        }


        .client-item:hover .client-logo {
          transform: scale(1.08);
        }


        .client-item:hover .client-glow {
          opacity: 1;

          transform:
            translate(-50%, -50%)
            scale(1.1);
        }


        /* ============================================================
           CLIENT NAME
           ============================================================ */

        .client-name {
          min-height: 30px;

          padding-top: 10px;

          text-align: center;

          font-size: 12px;

          font-weight: 700;

          letter-spacing: 0.11em;

          line-height: 1.4;

          text-transform: uppercase;

          color: #20241D;
        }


        /* ============================================================
           CTA CURVES
           ============================================================ */

        .cta-curves {
          animation:
            ctaDrift
            18s
            ease-in-out
            infinite;
        }


        @keyframes ctaDrift {

          0%,
          100% {
            transform:
              translate(0, 0);
          }

          50% {
            transform:
              translate(-16px, 12px);
          }

        }


        /* ============================================================
           TABLET
           ============================================================ */

        @media (max-width: 1100px) {

          .hero-security-visual {
            right: -230px;

            width: 650px;
            height: 650px;

            opacity: 0.55;
          }

        }


        /* ============================================================
           MOBILE
           ============================================================ */

        @media (max-width: 900px) {

          .hero-security-visual {
            right: -360px;

            top: 58%;

            width: 600px;
            height: 600px;

            opacity: 0.42;
          }


          .hero-shield {
            width: 230px;
            height: 280px;
          }


          .shield-icon {
            width: 135px;
          }


          .shield-ring-outer {
            width: 270px;
            height: 270px;
          }


          .shield-ring-inner {
            width: 220px;
            height: 220px;
          }


          .shield-caption {
            display: none;
          }

        }


        /* ============================================================
           SMALL MOBILE
           ============================================================ */

        @media (max-width: 640px) {

          .hero-curves-left {
            left: -500px;

            bottom: -300px;
          }


          .hero-security-visual {
            right: -410px;

            top: 62%;

            opacity: 0.28;
          }


          .client-item {
            min-height: 210px;

            padding:
              18px 12px;
          }


          .client-logo-area {
            min-height: 135px;
          }


          .client-logo {
            max-width: 88%;

            max-height: 100px;
          }

        }


        /* ============================================================
           REDUCED MOTION
           ============================================================ */

        @media (prefers-reduced-motion: reduce) {

          .hero-reveal,
          .hero-curves,
          .hero-security-visual,
          .security-curves,
          .shield-ring,
          .hero-shield,
          .shield-icon,
          .scroll-line,
          .cta-curves,
          .client-item,
          .client-logo,
          .client-glow {
            animation: none !important;

            transition: none !important;
          }


          .hero-reveal,
          .hero-security-visual,
          .client-item {
            opacity: 1 !important;

            transform: none !important;
          }

        }

      `}</style>

    </div>
  );
}