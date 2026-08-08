import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ==========================================================================
   SHARED STYLES
   ========================================================================== */
const PAGE_SECTIONS_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:ital,wght@0,300;0,400;0,600;0,700&display=swap');

  /* ---------- SECTION 1: WHY TRUST KESS ---------- */
  .kess-trust-section {
    position: relative;
    padding: 6rem 1.5rem;
    background-color: #0b0b0b;
    overflow: hidden;
    border-top: 1px solid rgba(212, 175, 55, 0.2);
    border-bottom: 1px solid rgba(212, 175, 55, 0.2);
  }

  .kess-trust-bg-grid {
    position: absolute;
    inset: 0;
    background-image:
      repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(212,175,55,0.015) 80px, rgba(212,175,55,0.015) 81px),
      repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(212,175,55,0.015) 80px, rgba(212,175,55,0.015) 81px);
    pointer-events: none;
  }

  .kess-trust-glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 20%, rgba(212, 175, 55, 0.07) 0%, transparent 70%);
    pointer-events: none;
  }

  .kess-trust-inner {
    position: relative;
    z-index: 2;
    max-width: 1280px;
    margin: 0 auto;
  }

  .kess-trust-header {
    text-align: center;
    max-width: 850px;
    margin: 0 auto 3rem auto;
  }

  .kess-trust-tagline {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 0.95rem;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #D4AF37;
    margin-bottom: 1rem;
    opacity: 0;
    transform: translateY(20px);
  }

  .kess-trust-tagline::before,
  .kess-trust-tagline::after {
    content: '';
    display: block;
    width: 35px;
    height: 1px;
    background: #D4AF37;
  }

  .kess-trust-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(2.8rem, 5.5vw, 4.8rem);
    line-height: 0.95;
    letter-spacing: 2px;
    color: #D4AF37;
    text-transform: uppercase;
    text-shadow: 0 0 20px rgba(212, 175, 55, 0.2);
    margin-bottom: 1.25rem;
    opacity: 0;
    transform: translateY(30px);
  }

  .kess-trust-description {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: clamp(1.05rem, 1.8vw, 1.25rem);
    font-weight: 400;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.8);
    opacity: 0;
    transform: translateY(20px);
  }

  /* Ex-Servicemen Strategic Banner */
  .kess-veteran-banner {
    background: linear-gradient(135deg, rgba(212, 175, 55, 0.12) 0%, rgba(17, 17, 17, 0.95) 100%);
    border: 1.5px solid #D4AF37;
    border-radius: 8px;
    padding: 1.5rem 2rem;
    margin-bottom: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1.5rem;
    box-shadow: 0 10px 30px rgba(0,0,0,0.6), inset 0 0 15px rgba(212,175,55,0.08);
    opacity: 0;
    transform: translateY(25px);
  }

  .kess-veteran-badge-tag {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 3px;
    color: #0b0b0b;
    background: #D4AF37;
    padding: 4px 12px;
    border-radius: 3px;
    text-transform: uppercase;
    display: inline-block;
    margin-bottom: 0.5rem;
  }

  .kess-veteran-banner-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    color: #FFFFFF;
    letter-spacing: 1px;
    line-height: 1;
  }

  .kess-veteran-banner-desc {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1.05rem;
    color: rgba(255, 255, 255, 0.85);
    max-width: 750px;
  }

  /* 2-Column Grid Layout */
  .kess-trust-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
  }

  @media (min-width: 768px) {
    .kess-trust-grid {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 3.5rem;
      row-gap: 2.5rem;
    }
  }

  .kess-trust-card {
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
    padding: 1.5rem;
    background: rgba(17, 17, 17, 0.6);
    border: 1px solid rgba(212, 175, 55, 0.15);
    border-radius: 8px;
    backdrop-filter: blur(8px);
    transition: all 0.3s ease;
    opacity: 0;
    transform: translateY(30px);
    position: relative;
  }

  /* Special Highlight for Ex-Servicemen Card */
  .kess-trust-card-featured {
    background: linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(20, 20, 20, 0.9) 100%);
    border: 1.5px solid rgba(212, 175, 55, 0.6);
    box-shadow: 0 0 20px rgba(212, 175, 55, 0.15);
  }

  .kess-trust-card:hover {
    border-color: rgba(212, 175, 55, 0.8);
    background: rgba(22, 22, 22, 0.9);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(212, 175, 55, 0.2);
    transform: translateY(-2px);
  }

  .kess-trust-icon-box {
    flex-shrink: 0;
    width: 60px;
    height: 60px;
    border-radius: 8px;
    background: rgba(212, 175, 55, 0.08);
    border: 1px solid rgba(212, 175, 55, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #D4AF37;
    transition: all 0.3s ease;
  }

  .kess-trust-card-featured .kess-trust-icon-box {
    background: #D4AF37;
    color: #0b0b0b;
    box-shadow: 0 0 15px rgba(212, 175, 55, 0.4);
  }

  .kess-trust-card:hover .kess-trust-icon-box {
    background: #D4AF37;
    color: #0b0b0b;
    box-shadow: 0 0 15px rgba(212, 175, 55, 0.4);
  }

  .kess-trust-card-content {
    flex: 1;
  }

  .kess-trust-card-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.5rem;
    letter-spacing: 1px;
    color: #f5f5f0;
    margin-bottom: 0.35rem;
    text-transform: uppercase;
  }

  .kess-trust-card-text {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.75);
  }

  .kess-card-corner {
    position: absolute;
    width: 8px;
    height: 8px;
    border-color: #D4AF37;
    border-style: solid;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .kess-corner-tl { top: -1px; left: -1px; border-width: 2px 0 0 2px; }
  .kess-corner-tr { top: -1px; right: -1px; border-width: 2px 2px 0 0; }
  .kess-corner-bl { bottom: -1px; left: -1px; border-width: 0 0 2px 2px; }
  .kess-corner-br { bottom: -1px; right: -1px; border-width: 0 2px 2px 0; }

  .kess-trust-card:hover .kess-card-corner,
  .kess-trust-card-featured .kess-card-corner {
    opacity: 1;
  }

  /* ---------- SECTION 2: LEADERSHIP SECTION ---------- */
  .kess-leadership-section {
    position: relative;
    padding: 6rem 1.5rem;
    background-color: #080808;
    overflow: hidden;
  }

  .kess-leadership-header {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 4rem auto;
  }

  .kess-leadership-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(2.8rem, 5vw, 4.5rem);
    line-height: 0.95;
    letter-spacing: 2px;
    color: #D4AF37;
    text-transform: uppercase;
    text-shadow: 0 0 20px rgba(212, 175, 55, 0.2);
    margin-bottom: 1rem;
    opacity: 0;
    transform: translateY(30px);
  }

  .kess-leadership-sub {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1.15rem;
    color: rgba(255, 255, 255, 0.75);
    text-transform: uppercase;
    letter-spacing: 2px;
    opacity: 0;
    transform: translateY(20px);
  }

  .kess-leadership-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 3rem;
    max-width: 1100px;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    .kess-leadership-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .kess-leader-card {
    background: #111111;
    border: 1px solid rgba(212, 175, 55, 0.2);
    border-radius: 8px;
    overflow: hidden;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.4s ease;
    position: relative;
  }

  .kess-leader-card-veteran {
    border: 1.5px solid #D4AF37;
    box-shadow: 0 0 25px rgba(212, 175, 55, 0.15);
  }

  .kess-leader-card:hover {
    border-color: rgba(212, 175, 55, 0.8);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.8), 0 0 25px rgba(212, 175, 55, 0.25);
  }

  .kess-leader-image-wrapper {
    position: relative;
    width: 100%;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    background: #181818;
  }

  .kess-veteran-tag-overlay {
    position: absolute;
    top: 12px;
    left: 12px;
    z-index: 3;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 2px;
    color: #0b0b0b;
    background: #D4AF37;
    padding: 4px 10px;
    border-radius: 3px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .kess-leader-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(20%) contrast(105%);
    transition: transform 0.6s ease, filter 0.6s ease;
  }

  .kess-leader-card:hover .kess-leader-img {
    transform: scale(1.04);
    filter: grayscale(0%) contrast(110%);
  }

  .kess-leader-info {
    padding: 2rem;
  }

  .kess-leader-name {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 2rem;
    letter-spacing: 1px;
    color: #f5f5f0;
    margin-bottom: 0.25rem;
  }

  .kess-leader-role {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: #D4AF37;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 1rem;
  }

  .kess-leader-bio {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1.05rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.75);
  }
`;

/* ==========================================================================
   DATA STRUCTURES
   ========================================================================== */
const TRUST_PILLARS = [
  {
    id: "army-discipline",
    title: "Ex-Servicemen Leadership & Honor",
    description: "Governed and directly guided by retired Indian Army personnel, bringing battlefield tactical experience, military precision, and uncompromised honor to every posting[cite: 1].",
    featured: true,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    id: "satisfaction",
    title: "Client Satisfaction & Reach",
    description: "Trusted security partner serving major public sector companies, central railway hospitals, and prestigious township infrastructures across Maharashtra[cite: 1].",
    featured: false,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    id: "committed",
    title: "Committed to Protect You",
    description: "Supported by a highly responsive security operations team guided directly by leadership with hands-on defense line background[cite: 1].",
    featured: false,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: "zero-tolerance",
    title: "Zero Tolerance Policy",
    description: "Strict non-negotiable standards enforcing absolute integrity, non-disclosure of client info, zero duty negligence, and total sobriety[cite: 1].",
    featured: false,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="m4.93 4.93 14.14 14.14" />
      </svg>
    ),
  },
  {
    id: "quick-support",
    title: "Rapid Emergency Response",
    description: "24/7 centralized command protocols and real-time incident escalation systems ensuring immediate tactical support in times of crisis[cite: 1].",
    featured: false,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    id: "compliance",
    title: "100% Statutory Compliance",
    description: "Full compliance with state labor statutory acts, PF, ESI, and rigorous administrative onboarding documentation for complete peace of mind[cite: 1].",
    featured: false,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    id: "psara",
    title: "PSARA Licensed & Certified",
    description: "Fully licensed authority under the Private Security Agencies (Regulation) Act (PSARA, Maharashtra: PSA/L/74/H/2020/MAY/3/92)[cite: 1].",
    featured: false,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="14" x="3" y="5" rx="2" />
        <path d="M7 15h4" />
        <path d="M15 15h2" />
        <path d="M7 11h2" />
      </svg>
    ),
  },
  {
    id: "decade-track-record",
    title: "A Decade of Excellence",
    description: "Over 10 years of consistent operational stability, zero labor union disputes, and proven dependability across high-stakes sector accounts[cite: 1].",
    featured: false,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

const LEADERSHIP_MEMBERS = [
  {
    name: "Mr. Namdev Bhanudas Doke",
    role: "Managing Director (Retd. Indian Army)",
    bio: "Brings decades of military command discipline, strategic field experience, and operational rigor from service in the Indian Army to direct all KESS security deployments[cite: 1].",
    image: "/images/KESS-differentiator-homepage.png",
    isVeteran: true,
  },
  {
    name: "Mr. Mahesh Doke",
    role: "Chairman & Sales Director",
    bio: "A vision-driven entrepreneur leading enterprise growth, corporate client relations, and multi-sector facility management across key infrastructure zones in Maharashtra[cite: 1].",
    image: "/images/guards-hero.jpg.jpeg",
    isVeteran: false,
  },
];

/* ==========================================================================
   COMPONENT 1: WHY TRUST KESS
   ========================================================================== */
export function WhyTrustKESS() {
  const trustSectionRef = useRef(null);
  const tagRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const bannerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: trustSectionRef.current,
          start: "top 75%",
          end: "bottom bottom",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(tagRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, 0);
      tl.to(titleRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, 0.1);
      tl.to(descRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, 0.2);
      tl.to(bannerRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, 0.25);
      tl.to(".kess-trust-card", { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out" }, 0.3);
    }, trustSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{PAGE_SECTIONS_CSS}</style>
      <section className="kess-trust-section" ref={trustSectionRef}>
        <div className="kess-trust-bg-grid" />
        <div className="kess-trust-glow" />

        <div className="kess-trust-inner">
          <div className="kess-trust-header">
            <div className="kess-trust-tagline" ref={tagRef}>
              Uncompromising Standards
            </div>

            <h2 className="kess-trust-title" ref={titleRef}>
              WHY ORGANIZATIONS TRUST KESS
            </h2>

            <p className="kess-trust-description" ref={descRef}>
              For over a decade, KESS has safeguarded businesses, communities, and institutions with integrity and precision[cite: 1]. Guided by retired military leadership and driven by rigorous training standards, we provide security solutions that inspire confidence and stand the test of time[cite: 1].
            </p>
          </div>

          {/* VETERAN DISCIPLINE HIGHLIGHT BANNER */}
          <div className="kess-veteran-banner" ref={bannerRef}>
            <div>
              <span className="kess-veteran-badge-tag">Military Foundation</span>
              <h3 className="kess-veteran-banner-title">BUILT ON EX-SERVICEMEN DISCIPLINE & HONOR</h3>
              <p className="kess-veteran-banner-desc">
                Our operational protocols are designed and monitored by Indian Army veterans, instilling battlefield alertness, hierarchy-driven command, and crisis preparedness into every security guard on duty[cite: 1].
              </p>
            </div>
          </div>

          <div className="kess-trust-grid">
            {TRUST_PILLARS.map((pillar) => (
              <div 
                className={`kess-trust-card${pillar.featured ? " kess-trust-card-featured" : ""}`} 
                key={pillar.id}
              >
                <div className="kess-card-corner kess-corner-tl" />
                <div className="kess-card-corner kess-corner-tr" />
                <div className="kess-card-corner kess-corner-bl" />
                <div className="kess-card-corner kess-corner-br" />

                <div className="kess-trust-icon-box">{pillar.icon}</div>

                <div className="kess-trust-card-content">
                  <h3 className="kess-trust-card-title">{pillar.title}</h3>
                  <p className="kess-trust-card-text">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ==========================================================================
   COMPONENT 2: LEADERSHIP SECTION
   ========================================================================== */
export function LeadershipSection() {
  const leadershipRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: leadershipRef.current,
          start: "top 75%",
          end: "bottom bottom",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(titleRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, 0);
      tl.to(subRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, 0.1);
      tl.to(".kess-leader-card", { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out" }, 0.2);
    }, leadershipRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="kess-leadership-section" ref={leadershipRef}>
      <div className="kess-trust-inner">
        <div className="kess-leadership-header">
          <h2 className="kess-leadership-title" ref={titleRef}>
            LEADERSHIP & MANAGEMENT
          </h2>
          <div className="kess-leadership-sub" ref={subRef}>
            Guided by Indian Army Veterans. Driven by Entrepreneurial Vision[cite: 1].
          </div>
        </div>

        <div className="kess-leadership-grid">
          {LEADERSHIP_MEMBERS.map((leader, i) => (
            <div 
              className={`kess-leader-card${leader.isVeteran ? " kess-leader-card-veteran" : ""}`} 
              key={i}
            >
              <div className="kess-card-corner kess-corner-tl" />
              <div className="kess-card-corner kess-corner-tr" />
              <div className="kess-card-corner kess-corner-bl" />
              <div className="kess-card-corner kess-corner-br" />

              <div className="kess-leader-image-wrapper">
                {leader.isVeteran && (
                  <div className="kess-veteran-tag-overlay">
                    ★ RETD. INDIAN ARMY
                  </div>
                )}
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="kess-leader-img"
                  unoptimized
                />
              </div>

              <div className="kess-leader-info">
                <h3 className="kess-leader-name">{leader.name}</h3>
                <div className="kess-leader-role">{leader.role}</div>
                <p className="kess-leader-bio">{leader.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   PARENT CONTAINER COMPONENT
   ========================================================================== */
export default function KessTrustAndLeadershipWrapper() {
  useEffect(() => {
    const id = "kess-combined-page-styles";
    if (!document.getElementById(id)) {
      const tag = document.createElement("style");
      tag.id = id;
      tag.textContent = PAGE_SECTIONS_CSS;
      document.head.appendChild(tag);
    }
    return () => document.getElementById(id)?.remove();
  }, []);

  return (
    <>
      {/* 1. WHY ORGANIZATIONS TRUST KESS */}
      <WhyTrustKESS />

      {/* 2. LEADERSHIP & MANAGEMENT SECTION */}
      <LeadershipSection />
    </>
  );
}