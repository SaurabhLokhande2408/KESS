import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MANIFESTO_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:ital,wght@0,300;0,400;0,600;0,700&display=swap');

  /* Warm Military Heritage light-mode visual tokens */
  .kess-manifesto {
    position: relative;
    padding: 6rem 1.5rem;
    background-color: #FAF8F5;
    overflow: hidden;
    border-top: 1px solid #E6DFD5;
    border-bottom: 1px solid #E6DFD5;
  }
  .kess-manifesto-bg {
    position: absolute;
    inset: 0;
    background-image:
      repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(212,175,55,0.035) 80px, rgba(212,175,55,0.035) 81px),
      repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(212,175,55,0.035) 80px, rgba(212,175,55,0.035) 81px);
    pointer-events: none;
  }
  .kess-manifesto-glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 30%, rgba(212,175,55,0.10) 0%, transparent 65%);
    pointer-events: none;
  }
  
  .kess-manifesto-inner {
    position: relative;
    z-index: 2;
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
  }

  /* Centered Hero Heading */
  .kess-hero-header {
    text-align: center;
    max-width: 900px;
    margin: 0 auto 3.5rem auto;
  }
  .kess-manifesto-label {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: clamp(1rem, 1.5vw, 1.25rem);
    font-weight: 700;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #D4AF37;
    margin-bottom: 1rem;
    opacity: 0;
    transform: translateY(20px);
  }
  .kess-manifesto-label::before,
  .kess-manifesto-label::after {
    content: '';
    display: block;
    width: 40px;
    height: 1px;
    background: #D4AF37;
  }

  .kess-differentiator-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(2.8rem, 6vw, 5.5rem);
    line-height: 0.95;
    letter-spacing: 2px;
    color: #1C2018;
    text-transform: uppercase;
    text-shadow: 0 0 20px rgba(212, 175, 55, 0.20);
    margin-bottom: 1.5rem;
    opacity: 0;
    transform: translateY(30px);
  }

  .kess-manifesto-text {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(1.8rem, 3vw, 2.8rem);
    line-height: 1;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #1C2018;
  }
  .kess-manifesto-line {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 0.25em;
    margin-bottom: 0.15em;
  }
  .kess-manifesto-word {
    display: inline-block;
    opacity: 0;
    transform: translate3d(0, 40px, -60px) rotateY(10deg);
    transform-origin: center bottom;
  }
  .kess-manifesto-word.accent {
    color: #D4AF37;
  }

  .kess-manifesto-body {
    margin: 1.5rem 0 0 0;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: clamp(1.2rem, 2vw, 1.5rem);
    font-weight: 400;
    line-height: 1.8;
    letter-spacing: 0.5px;
    color: #4A5240;
    opacity: 0;
  }
  .kess-manifesto-bullets {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    opacity: 0;
  }
  .kess-bullet-item {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: clamp(1.05rem, 1.8vw, 1.35rem);
    font-weight: 600;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    color: #1C2018;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    line-height: 1.5;
  }
  .kess-bullet-dot {
    width: 6px;
    height: 6px;
    background: #D4AF37;
    border-radius: 50%;
    box-shadow: 0 0 8px #D4AF37;
    flex-shrink: 0;
  }
  .kess-manifesto-cta {
    margin-top: 2rem;
    opacity: 0;
  }
  .kess-scan-line {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #D4AF37, transparent);
    opacity: 0;
    pointer-events: none;
  }

  /* High-Tech Rectangular Image Frame & Corner Brackets */
  .kess-frame-wrapper {
    position: relative;
    width: 100%;
    opacity: 0;
    transform: translateX(30px);
  }

  .kess-rect-frame {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 10;
    background: #FFFFFF;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #E6DFD5;
    box-shadow: 0 20px 40px rgba(28, 32, 24, 0.10), 0 0 25px rgba(212, 175, 55, 0.08);
    transition: border-color 0.4s ease, box-shadow 0.4s ease;
  }

  .kess-frame-wrapper:hover .kess-rect-frame {
    border-color: #D4AF37;
    box-shadow: 0 25px 50px rgba(28, 32, 24, 0.14), 0 0 35px rgba(212, 175, 55, 0.2);
  }

  .kess-frame-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.7s cubic-bezier(0.25, 1, 0.5, 1), filter 0.5s ease;
  }

  .kess-frame-wrapper:hover .kess-frame-img {
    transform: scale(1.05);
  }

  /* Tactical Overlay & Brackets */
  .kess-frame-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.6) 100%);
    pointer-events: none;
  }

  .kess-corner-bracket {
    position: absolute;
    width: 16px;
    height: 16px;
    border-color: #D4AF37;
    border-style: solid;
    pointer-events: none;
    z-index: 3;
    transition: all 0.3s ease;
  }

  .kess-corner-tl { top: -2px; left: -2px; border-width: 2px 0 0 2px; }
  .kess-corner-tr { top: -2px; right: -2px; border-width: 2px 2px 0 0; }
  .kess-corner-bl { bottom: -2px; left: -2px; border-width: 0 0 2px 2px; }
  .kess-corner-br { bottom: -2px; right: -2px; border-width: 0 2px 2px 0; }

  .kess-frame-wrapper:hover .kess-corner-bracket {
    width: 22px;
    height: 22px;
  }

  /* HUD Status Tag */
  .kess-hud-tag {
    position: absolute;
    bottom: 12px;
    left: 16px;
    z-index: 3;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 2px;
    color: #1C2018;
    background: #FAF8F5;
    border: 1px solid #D4AF37;
    padding: 4px 10px;
    border-radius: 4px;
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .kess-hud-dot {
    width: 6px;
    height: 6px;
    background-color: #D4AF37;
    border-radius: 50%;
    box-shadow: 0 0 6px #D4AF37;
  }

  @media (max-width: 1024px) {
    .kess-manifesto-line { justify-content: flex-start; }
  }
`;

const MANIFESTO_LINES = [
  [
    { text: "TACTICAL", accent: false },
    { text: "DISCIPLINE.", accent: true },
  ],
  [
    { text: "BLACK", accent: false },
    { text: "BELT", accent: false },
    { text: "MARTIAL", accent: true },
    { text: "ARTS", accent: true },
    { text: "&", accent: false },
    { text: "FIRE", accent: false },
    { text: "DRILLS.", accent: false },
  ],
];

export default function TrainingManifesto() {
  const manifestoContainerRef = useRef(null);
  const manifestoLabelRef = useRef(null);
  const manifestoTitleRef = useRef(null);
  const manifestoScanRef = useRef(null);
  const manifestoBodyRef = useRef(null);
  const manifestoBulletsRef = useRef(null);
  const manifestoCtaRef = useRef(null);
  const manifestoImageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: manifestoContainerRef.current,
          start: "top 75%",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(manifestoLabelRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      }, 0);

      tl.to(manifestoTitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      }, 0.1);

      tl.fromTo(
        manifestoScanRef.current,
        { top: "0%", opacity: 0.9 },
        { top: "100%", opacity: 0, duration: 1, ease: "power1.inOut" },
        0.2
      );

      tl.to(".kess-manifesto-word", {
        opacity: 1,
        transform: "translate3d(0,0,0) rotateY(0deg)",
        ease: "power2.inOut",
        stagger: 0.03,
      }, 0.3);

      tl.to(manifestoBodyRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power1.out",
      }, "-=0.2");

      tl.to(manifestoBulletsRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
      }, "-=0.3");

      tl.to(manifestoCtaRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
      }, "-=0.3");

      tl.to(manifestoImageRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
      }, 0.3);

    }, manifestoContainerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{MANIFESTO_CSS}</style>
      <section className="kess-manifesto" ref={manifestoContainerRef}>
        <div className="kess-manifesto-bg" />
      <div className="kess-manifesto-glow" />
      <div className="kess-scan-line" ref={manifestoScanRef} />

      <div className="kess-manifesto-inner">
        {/* CENTERED HERO HIGHLIGHT */}
        <div className="kess-hero-header">
          <div className="kess-manifesto-label" ref={manifestoLabelRef}>
            Our Core Strategic Edge
          </div>

          <h1 className="kess-differentiator-title" ref={manifestoTitleRef}>
            THE KESS DIFFERENTIATOR
          </h1>

          <div className="kess-manifesto-text">
            {MANIFESTO_LINES.map((line, li) => (
              <div key={li} className="kess-manifesto-line">
                {line.map((word, wi) => (
                  <span
                    key={wi}
                    className={`kess-manifesto-word${word.accent ? " accent" : ""}`}
                  >
                    {word.text}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* TWO-COLUMN CONTENT & IMAGE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: DETAIL CONTENT */}
          <div className="lg:col-span-7">
            <p className="kess-manifesto-body" ref={manifestoBodyRef}>
              Most security firms outsource basic guarding without continuous instruction. At KESS, our personnel undergo ongoing physical conditioning, emergency firefighting drills, and martial arts training under <strong>Mr. Som Borude</strong> (Black Belt Wu-Shu Kung Fu).
            </p>

            <div className="kess-manifesto-bullets" ref={manifestoBulletsRef}>
              <div className="kess-bullet-item">
                <span className="kess-bullet-dot" />
                Physical fitness & martial arts self-defense training
              </div>
              <div className="kess-bullet-item">
                <span className="kess-bullet-dot" />
                Live firefighting and disaster response protocols
              </div>
              <div className="kess-bullet-item">
                <span className="kess-bullet-dot" />
                Strict reporting hierarchies & zero-tolerance conduct policies
              </div>
            </div>

            <div className="kess-manifesto-cta" ref={manifestoCtaRef}>
              <Link
                href="/training"
                className="inline-block border border-gold text-gold hover:bg-gold hover:text-charcoal px-8 py-3.5 uppercase tracking-widest text-xs font-bold transition-all duration-300 shadow-lg hover:shadow-gold/20"
              >
                Explore Training Program &rarr;
              </Link>
            </div>
          </div>

          {/* RIGHT: TACTICAL RECTANGULAR FRAME */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="kess-frame-wrapper" ref={manifestoImageRef}>
              <div className="kess-corner-bracket kess-corner-tl" />
              <div className="kess-corner-bracket kess-corner-tr" />
              <div className="kess-corner-bracket kess-corner-bl" />
              <div className="kess-corner-bracket kess-corner-br" />

              <div className="kess-rect-frame">
                <img
                  src="/images/KESS-differentiator-homepage.png"
                  alt="KESS Guard Physical Training"
                  className="kess-frame-img brightness-105 contrast-110"
                />
                <div className="kess-frame-overlay" />
                <div className="kess-hud-tag">
                  <span className="kess-hud-dot" />
                  KESS ON-SITE DRILLS
                </div>
              </div>
            </div>
          </div>

        </div>
        </div>
      </section>
    </>
  );
}