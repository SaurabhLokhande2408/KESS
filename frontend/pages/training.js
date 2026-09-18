import { useEffect, useRef, useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

import siteData from "@/data/siteData.json";

export default function Training() {
  const { training } = siteData;

  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="training-page min-h-screen overflow-hidden bg-[#F7F5EF] text-[#20241D]">

      {/* ============================================================
          SEO
          ============================================================ */}

      <SEO
        title="Training & Standards"
        description="KESS provides practical training to security personnel in discipline, physical fitness, emergency response, first aid, firefighting, reporting and crowd control."
        path="/training"
      />

      <Navbar />

      <main>

        {/* ============================================================
            HERO
            ============================================================ */}

        <section className="relative min-h-[calc(100vh-54px)] overflow-hidden px-5 sm:px-8">

          {/* LEFT CURVES */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <svg
              className="training-left-curves"
              viewBox="0 0 900 900"
              fill="none"
            >
              <path d="M-160 80C130 0 390 90 475 300C560 510 430 690 190 730C20 758 20 850 200 990" />
              <path d="M-175 135C115 45 360 125 445 315C525 495 410 645 175 695C30 725 35 815 220 960" />
              <path d="M-190 195C100 95 335 160 415 330C490 485 390 600 160 655C40 680 50 775 235 920" />
              <path d="M-205 255C85 145 305 195 385 350C445 470 365 560 145 615C55 640 70 730 250 875" />
            </svg>
          </div>


          {/* RIGHT TRAINING VISUAL */}

          <div
            aria-hidden="true"
            className="training-visual"
          >

            <svg
              className="training-visual-curves"
              viewBox="0 0 760 760"
              fill="none"
            >
              <path d="M780 35C555 5 315 80 250 260C185 440 320 535 520 550C680 562 730 650 605 770" />
              <path d="M780 100C575 70 355 125 300 280C250 430 370 500 535 520C670 535 710 610 610 720" />
              <path d="M780 165C595 140 400 180 350 305C310 425 410 475 555 495C660 510 695 570 625 665" />
              <path d="M780 230C615 210 445 235 405 335C370 420 450 460 575 475C650 485 675 530 640 600" />
            </svg>


            {/* TRAINING MARK */}

            <div className="training-mark">

              <div className="training-ring training-ring-one" />
              <div className="training-ring training-ring-two" />

              <svg
                viewBox="0 0 240 240"
                className="training-icon"
                fill="none"
              >

                {/* Shield */}

                <path
                  d="
                    M120 20
                    L205 50
                    V116
                    C205 171 172 211 120 240
                    C68 211 35 171 35 116
                    V50
                    L120 20Z
                  "
                  stroke="currentColor"
                  strokeWidth="3"
                />

                {/* Person / guard */}

                <circle
                  cx="120"
                  cy="88"
                  r="18"
                  stroke="currentColor"
                  strokeWidth="3"
                />

                <path
                  d="
                    M82 160
                    C85 132 98 119 120 119
                    C142 119 155 132 158 160
                  "
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* Ground line */}

                <path
                  d="M73 177H167"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

              </svg>

            </div>

          </div>


          {/* HERO CONTENT */}

          <div className="relative z-10 mx-auto flex min-h-[calc(100vh-54px)] max-w-7xl items-center">

            <div className="w-full py-24 sm:py-28">

              {/* EYEBROW */}

              <div className="training-reveal training-delay-1 mb-8 flex items-center gap-5">

                <span className="h-px w-16 bg-[#C6A348]" />

                <span className=" kess-eyebrow text-[1.85rem] font-bold uppercase tracking-[0.28em] text-[#555B50]">
                  Training & Standards
                </span>

              </div>


              {/* HEADLINE */}

              <h1 className="training-reveal training-delay-2 max-w-[1000px] font-display text-[4rem] font-medium leading-[0.91] tracking-[-0.045em] text-[#20241D] sm:text-6xl md:text-7xl lg:text-[7.1rem]">

                We train people

                <br />

                to stay calm,

                <br />

                alert and ready.

              </h1>


              {/* DESCRIPTION */}

              <div className="training-reveal training-delay-3 mt-12 max-w-5xl sm:mt-16">

                <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

                  <p className="max-w-2xl text-[15px] leading-7 text-[#555B50] sm:text-lg sm:leading-8">

                    A security guard needs more than a uniform. Our training
                    helps every person understand their duty, stay disciplined,
                    handle emergencies and respond when it matters.

                  </p>


                  {/* TRAINING STAT */}

                  <div className="flex items-center gap-5">

                    <span className="h-14 w-px bg-[#C6A348]" />

                    <div>

                      <p className="font-display text-4xl leading-none text-[#20241D]">
                        360°
                      </p>

                      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#656B60]">
                        Practical training

                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ============================================================
            INTRO STRIP
            ============================================================ */}

        <section className="relative overflow-hidden bg-[#20251E] px-5 py-12 sm:px-8">

          <div className="mx-auto flex max-w-7xl flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex max-w-2xl items-start gap-5">

              <span className="mt-1 h-9 w-px shrink-0 bg-[#C6A348]" />

              <p className="text-sm leading-7 text-[#F7F5EF]/70 sm:text-[15px]">

                Good security starts with good preparation. We teach our
                personnel how to behave professionally, recognise problems
                early and respond without panic.

              </p>

            </div>


            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F7F5EF]/40">

              Discipline • Alertness • Responsibility

            </div>

          </div>

        </section>


        {/* ============================================================
            WHAT WE TEACH (Compact Dense Grid Cards - Cleaned)
            ============================================================ */}

        <section
          ref={sectionRef}
          className="relative overflow-hidden px-5 py-10 sm:px-8 sm:py-12"
        >

          {/* DECORATIVE CURVE */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-[430px] top-[50px] h-[900px] w-[900px]"
          >

            <svg
              viewBox="0 0 900 900"
              className="h-full w-full"
              fill="none"
            >

              <path
                d="M900 100C650 25 380 100 320 300C260 500 420 610 620 620C770 628 815 720 680 850"
                stroke="rgba(80,84,73,0.16)"
                strokeWidth="1"
              />

              <path
                d="M900 165C670 100 430 155 375 325C325 480 460 560 640 575C760 585 800 660 700 785"
                stroke="rgba(80,84,73,0.12)"
                strokeWidth="0.7"
              />

              <path
                d="M900 230C690 170 480 210 430 350C395 460 500 525 660 545C750 555 780 610 720 720"
                stroke="rgba(80,84,73,0.09)"
                strokeWidth="0.5"
              />

            </svg>

          </div>


          <div className="relative z-10 mx-auto max-w-7xl">

            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#20241D]/10 pb-6 gap-6">

              <div>
                
                <h2 className="font-display text-[2.4rem] font-semibold tracking-[-0.025em] text-[#20241D] sm:text-[3rem]">
                  Training for <span className="text-[#B3923D]">prepared personnel.</span>
                </h2>
              </div>


              <p className="max-w-md text-[15px] font-medium leading-[1.5] text-[#50554C]">
                Our programme focuses on the everyday skills a guard needs, along with the confidence to deal with unexpected situations.
              </p>

            </div>


            {/* COMPACT DENSE GRID */}

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {training.programme.map((item, index) => {
                return (
                  <div
                    key={item}
                    className="group relative flex flex-col justify-center rounded-xl border border-[#20241D]/10 bg-white/50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C6A348]/50 hover:bg-white hover:shadow-md"
                    style={{
                      transitionDelay: `${index * 40}ms`,
                      minHeight: "110px",
                    }}
                  >
                    <div>
                      <h3 className="text-[16px] font-semibold leading-snug text-[#20241D] transition-colors duration-300 group-hover:text-[#B3923D]">
                        {item
                          .replace(/\s*\(.*?\)/g, "")
                          .replace(/\s*\/\s*/g, " / ")
                          .replace(/^Basic training for security personnel/i, "Basic training")
                          .replace(/^First-aid /i, "First-aid /")
                          .replace(/^Bodyguard and /i, "Bodyguard & ")
                          .replace(/^On-the-job training programme/i, "On-the-job training")
                          .replace(/^Reporting systems/i, "Reporting systems")
                          .replace(/^Physical training/i, "Physical training")
                          .replace(/^Crowd control/i, "Crowd control")}
                      </h3>
                    </div>
                  </div>
                );
              })}

            </div>

          </div>

        </section>


        {/* ============================================================
            BIG IMMERSIVE IMAGE SHOWCASE SECTION (3 Large Photos - Completely Cleaned of Text/CTAs)
            ============================================================ */}

        <section className="relative overflow-hidden bg-[#20251E]/[0.04] px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
               
                <h2 className="mt-2 font-display text-3xl font-semibold sm:text-5xl text-[#20241D]">
                  Training in Action
                </h2>
              </div>
            </div>

            {/* BIG IMAGE SHOWCASE GRID (Supports 3 large cards) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[0, 1, 2].map((idx) => (
                <div 
                  key={idx} 
                  className="group relative overflow-hidden rounded-3xl border border-[#20241D]/15 bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-[#C6A348]/40"
                >
                  {/* Large Immersive Image Frame Slot */}
                  <div className="relative h-[400px] sm:h-[460px] w-full bg-[#E5E2D9] overflow-hidden flex items-center justify-center">
                    
                    {/* Subtle grid pattern overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(#20241D_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

                    {/* Placeholder branding watermark */}
                    <div className="absolute inset-0 flex items-center justify-center text-[#555B50]/20 font-display text-8xl tracking-widest select-none pointer-events-none">
                      KESS
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ============================================================
            WHAT TRAINING ACHIEVES (Redesigned to remove empty left space)
            ============================================================ */}

        <section className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-20 lg:py-24">

          <div aria-hidden="true" className="training-result-pattern pointer-events-none absolute bottom-[-180px] right-[-150px] h-[620px] w-[620px]">
            <svg viewBox="0 0 620 620" className="h-full w-full" fill="none">
              <path d="M310 48 500 116v150c0 132-79 235-190 306-111-71-190-174-190-306V116L310 48Z" />
              <path d="M310 92 458 145v119c0 102-60 184-148 244-88-60-148-142-148-244V145L310 92Z" />
              <path d="M310 139 418 178v84c0 75-43 137-108 187-65-50-108-112-108-187v-84L310 139Z" />
              <path d="M76 310h468M112 258h396M112 362h396" />
            </svg>
          </div>

          <div className="relative z-10 mx-auto max-w-7xl">

            {/* HEADER ALIGNED TOP TO REMOVE LEFT SPACE */}
            <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#20241D]/10 pb-8">
              <div className="max-w-2xl">
               
                <h2 className="mt-4 font-display text-4xl leading-[1.04] tracking-[-0.025em] text-[#20241D] sm:text-5xl">
                  What this means for our clients.
                </h2>
              </div>
              <p className="max-w-md text-[15px] font-medium leading-[1.6] text-[#50554C]">
                The goal is simple: people who know what they are doing,
                know how to behave and know how to react when something
                goes wrong.
              </p>
            </div>

            {/* FULL WIDTH GRID FOR RESULTS */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {training.aims.map((aim, index) => {

                const simpleAims = [
                  {
                    title: "Professional behaviour",
                    text: "Guards understand workplace manners, communication and how to deal with people respectfully.",
                  },
                  {
                    title: "Physical readiness",
                    text: "Personnel are prepared for long and physically demanding shifts.",
                  },
                  {
                    title: "Confidence in emergencies",
                    text: "Training helps guards stay calm and make sensible decisions during unexpected situations.",
                  },
                  {
                    title: "Fire & first-aid awareness",
                    text: "Personnel learn basic steps to take during fires, accidents and other emergencies.",
                  },
                  {
                    title: "Team discipline",
                    text: "Clear instructions, responsibility and teamwork are built into the training.",
                  },
                ];

                const content = simpleAims[index];

                return (
                  <div
                    key={aim}
                    className="training-result-row group relative flex flex-col justify-center rounded-2xl border border-[#20241D]/10 bg-white/50 p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C6A348]/40 hover:bg-white hover:shadow-md"
                  >

                    <div className="flex items-start gap-4">

                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#C6A348] transition-transform duration-300 group-hover:scale-150" />

                      <div>

                        <h3 className="font-display text-[1.4rem] font-medium leading-tight text-[#20241D] transition-colors duration-300 group-hover:text-[#B3923D]">
                          {content?.title || "Prepared for the job"}
                        </h3>

                        <p className="mt-3 text-[14.5px] leading-relaxed text-[#646A5F]">
                          {content?.text || aim}
                        </p>

                      </div>

                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </section>

      </main>


      <Footer />

      <FloatingWhatsApp />


      {/* ============================================================
          STYLES
          ============================================================ */}

      <style jsx>{`

        /* ==========================================================
           HERO REVEAL
           ========================================================== */

        .training-reveal {
          opacity: 0;

          transform: translateY(28px);

          animation:
            trainingReveal
            1s
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }


        .training-delay-1 {
          animation-delay: 0.08s;
        }


        .training-delay-2 {
          animation-delay: 0.18s;
        }


        .training-delay-3 {
          animation-delay: 0.34s;
        }


        .training-delay-4 {
          animation-delay: 0.5s;
        }


        @keyframes trainingReveal {

          to {
            opacity: 1;

            transform: translateY(0);
          }

        }


        /* ==========================================================
           LEFT CURVES
           ========================================================== */

        .training-left-curves {
          position: absolute;

          left: -150px;

          bottom: -350px;

          width: 900px;

          height: 900px;

          opacity: 0.7;

          animation:
            trainingCurveFloat
            16s
            ease-in-out
            infinite;
        }


        .training-left-curves path {
          stroke: rgba(82, 86, 76, 0.20);

          stroke-linecap: round;
        }


        @keyframes trainingCurveFloat {

          0%,
          100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(14px, -10px);
          }

        }


        /* ==========================================================
           RIGHT VISUAL
           ========================================================== */

        .training-visual {
          position: absolute;

          right: -20px;

          top: 50%;

          width: 720px;

          height: 720px;

          transform: translateY(-43%);

          pointer-events: none;

          z-index: 1;

          opacity: 0;

          animation:
            trainingVisualReveal
            1.4s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.55s
            forwards;
        }


        .training-visual-curves {
          position: absolute;

          inset: 0;

          width: 100%;

          height: 100%;

          animation:
            trainingCurvesFloat
            15s
            ease-in-out
            infinite;
        }


        .training-visual-curves path {
          stroke: rgba(82, 86, 76, 0.17);

          stroke-linecap: round;
        }


        @keyframes trainingVisualReveal {

          from {
            opacity: 0;

            transform:
              translateY(-43%)
              translateX(35px);
          }

          to {
            opacity: 1;

            transform:
              translateY(-43%)
              translateX(0);
          }

        }


        @keyframes trainingCurvesFloat {

          0%,
          100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(-10px, 8px);
          }

        }


        /* ==========================================================
           TRAINING MARK
           ========================================================== */

        .training-mark {
          position: absolute;

          left: 50%;

          top: 50%;

          width: 290px;

          height: 330px;

          transform:
            translate(-50%, -50%);

          display: flex;

          align-items: center;

          justify-content: center;

          color: rgba(72, 76, 67, 0.55);

          animation:
            trainingMarkFloat
            8s
            ease-in-out
            infinite;
        }


        .training-ring {
          position: absolute;

          left: 50%;

          top: 50%;

          border-radius: 50%;

          transform:
            translate(-50%, -50%);

          border: 1px solid rgba(198, 163, 72, 0.18);
        }


        .training-ring-one {
          width: 330px;

          height: 330px;
        }


        .training-ring-two {
          width: 265px;

          height: 265px;

          border-color: rgba(198, 163, 72, 0.11);
        }


        .training-icon {
          position: relative;

          z-index: 2;

          width: 165px;

          transition:
            transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }


        .training-visual:hover .training-icon {
          transform: scale(1.05);
        }


        @keyframes trainingMarkFloat {

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


        /* ==========================================================
           SCROLL INDICATOR
           ========================================================== */

        .training-scroll-line {
          animation:
            trainingScroll
            2.5s
            ease-in-out
            infinite;
        }


        @keyframes trainingScroll {

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


        .training-result-pattern {
          color: rgba(32, 36, 29, 0.14);
          opacity: 0;
          animation: trainingPatternReveal 1.2s ease-out 0.2s forwards;
        }


        .training-result-pattern svg {
          overflow: visible;
        }


        .training-result-pattern path {
          stroke: currentColor;
          stroke-linecap: round;
          stroke-linejoin: round;
        }


        .training-result-pattern path:nth-child(2) {
          opacity: 0.65;
        }


        .training-result-pattern path:nth-child(3) {
          stroke: #c6a348;
          opacity: 0.55;
        }


        .training-result-pattern path:last-child {
          stroke-width: 0.7;
          stroke-dasharray: 2 10;
          opacity: 0.55;
        }


        @keyframes trainingPatternReveal {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }


        /* ==========================================================
           TABLET
           ========================================================== */

        @media (max-width: 1100px) {

          .training-visual {
            right: -250px;

            width: 650px;

            height: 650px;

            opacity: 0.5;
          }

        }


        /* ==========================================================
           MOBILE
           ========================================================== */

        @media (max-width: 900px) {

          .training-visual {
            right: -350px;

            top: 60%;

            width: 600px;

            height: 600px;

            opacity: 0.32;
          }


          .training-mark {
            width: 240px;

            height: 280px;
          }


          .training-icon {
            width: 135px;
          }


          .training-ring-one {
            width: 270px;

            height: 270px;
          }


          .training-ring-two {
            width: 215px;

            height: 215px;
          }

        }


        /* ==========================================================
           SMALL MOBILE
           ========================================================== */

        @media (max-width: 640px) {

          .training-left-curves {
            left: -500px;

            bottom: -300px;
          }


          .training-visual {
            right: -420px;

            top: 62%;

            opacity: 0.23;
          }

        }


        /* ==========================================================
           REDUCED MOTION
           ========================================================== */

        @media (prefers-reduced-motion: reduce) {

          .training-reveal,
          .training-left-curves,
          .training-visual,
          .training-visual-curves,
          .training-mark,
          .training-scroll-line {
            animation: none !important;

            transition: none !important;
          }


          .training-result-pattern {
            transform: scale(0.72);
            transform-origin: bottom right;
            opacity: 0.7;
          }


          .training-reveal,
          .training-visual {
            opacity: 1 !important;

            transform: none !important;
          }


          .training-result-pattern {
            animation: none !important;
            opacity: 0.7 !important;
            transform: none !important;
          }

        }

      `}</style>

    </div>
  );
}