

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ==========================================================================
   STYLES
   ========================================================================== */
const KESS_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:ital,wght@0,300;0,400;0,600;0,700&display=swap');

  .kess-wrap { --ink:#12160F; --ink-soft:#4A5240; --paper:#FAF8F5; --line:#E6DFD5; --gold:#C79A2E; --gold-soft:rgba(199,154,46,.10); }

  /* ---------- shell ---------- */
  .kess-sec { position:relative; background:var(--paper); padding:6.5rem 1.5rem; overflow:hidden; }
  .kess-sec + .kess-sec { border-top:1px solid var(--line); }
  .kess-inner { position:relative; z-index:2; max-width:1240px; margin:0 auto; }
  .kess-rule-bg { position:absolute; inset:0; pointer-events:none;
    background-image:
      repeating-linear-gradient(90deg, transparent 0 119px, rgba(18,22,15,.035) 119px 120px);
  }

  /* ---------- headings ---------- */
  .kess-eyebrow { display:inline-flex; align-items:center; gap:.75rem; font-family:'Barlow Condensed',sans-serif;
    font-size:.82rem; font-weight:700; letter-spacing:4px; text-transform:uppercase; color:var(--gold);
    margin-bottom:1rem; opacity:0; transform:translateY(16px); }
  .kess-eyebrow::before { content:''; width:34px; height:1px; background:var(--gold); }

  .kess-h2 { font-family:'Bebas Neue',sans-serif; font-size:clamp(2.4rem,4.6vw,4rem); line-height:.98;
    letter-spacing:1.5px; color:var(--ink); text-transform:uppercase; margin:0 0 1rem;
    opacity:0; transform:translateY(24px); }
  .kess-h2 em { font-style:normal; color:var(--gold); }

  .kess-lede { font-family:'Barlow Condensed',sans-serif; font-size:clamp(1.02rem,1.5vw,1.18rem);
    line-height:1.65; color:var(--ink-soft); max-width:62ch; opacity:0; transform:translateY(18px); }

  .kess-head { max-width:820px; margin:0 0 3.25rem; }
  .kess-head--center { margin:0 auto 3.5rem; text-align:center; }
  .kess-head--center .kess-lede { margin-inline:auto; }

  /* ---------- veteran banner ---------- */
  .kess-vet-banner { display:grid; grid-template-columns:1fr; gap:1.5rem; align-items:center;
    background:linear-gradient(120deg,var(--gold-soft) 0%,#fff 55%); border:1px solid var(--line);
    border-left:3px solid var(--gold); border-radius:4px; padding:1.75rem 2rem; margin-bottom:3.25rem;
    box-shadow:0 14px 40px rgba(18,22,15,.06); opacity:0; transform:translateY(20px); }
  @media (min-width:900px){ .kess-vet-banner { grid-template-columns:1.1fr 1fr; gap:2.5rem; } }
  .kess-tag { font-family:'Barlow Condensed',sans-serif; font-size:.72rem; font-weight:700; letter-spacing:3px;
    text-transform:uppercase; color:#fff; background:var(--ink); padding:4px 10px; border-radius:2px; display:inline-block; }
  .kess-vet-title { font-family:'Bebas Neue',sans-serif; font-size:clamp(1.6rem,2.6vw,2.2rem); letter-spacing:1px;
    line-height:1.05; color:var(--ink); margin:.7rem 0 0; }
  .kess-vet-desc { font-family:'Barlow Condensed',sans-serif; font-size:1.03rem; line-height:1.6; color:var(--ink-soft); margin:0; }

  /* ---------- stats strip ---------- */
  .kess-stats { display:grid; grid-template-columns:repeat(2,1fr); gap:1px; background:var(--line);
    border:1px solid var(--line); border-radius:4px; overflow:hidden; margin-bottom:3.25rem; }
  @media (min-width:768px){ .kess-stats { grid-template-columns:repeat(4,1fr); } }
  .kess-stat { background:#fff; padding:1.5rem 1.25rem; text-align:center; opacity:0; transform:translateY(18px); }
  .kess-stat b { display:block; font-family:'Bebas Neue',sans-serif; font-size:2.2rem; color:var(--ink); letter-spacing:1px; }
  .kess-stat span { font-family:'Barlow Condensed',sans-serif; font-size:.8rem; letter-spacing:2.5px;
    text-transform:uppercase; color:var(--ink-soft); }

  /* ---------- pillars ---------- */
  .kess-grid { display:grid; grid-template-columns:1fr; gap:1px; background:var(--line);
    border:1px solid var(--line); border-radius:4px; overflow:hidden; }
  @media (min-width:700px){ .kess-grid { grid-template-columns:repeat(2,1fr); } }
  @media (min-width:1080px){ .kess-grid { grid-template-columns:repeat(4,1fr); } }

  .kess-card { background:#fff; padding:2rem 1.6rem; position:relative; transition:background .3s ease, transform .3s ease;
    opacity:0; transform:translateY(24px); }
  .kess-card::after { content:''; position:absolute; left:0; top:0; width:2px; height:0; background:var(--gold); transition:height .35s ease; }
  .kess-card:hover { background:#FFFDF8; }
  .kess-card:hover::after { height:100%; }
  .kess-card--featured { background:linear-gradient(160deg,var(--gold-soft),#fff 60%); }
  .kess-card--featured::after { height:100%; }

  .kess-ico { width:42px; height:42px; display:flex; align-items:center; justify-content:center;
    color:var(--gold); margin-bottom:1.1rem; }
  .kess-card-title { font-family:'Bebas Neue',sans-serif; font-size:1.28rem; letter-spacing:1px;
    text-transform:uppercase; color:var(--ink); margin:0 0 .45rem; }
  .kess-card-text { font-family:'Barlow Condensed',sans-serif; font-size:.99rem; line-height:1.55; color:var(--ink-soft); margin:0; }

  /* ---------- veterans photo wall ---------- */
  .kess-vets { display:grid; grid-template-columns:repeat(2,1fr); gap:1.25rem; }
  @media (min-width:720px){ .kess-vets { grid-template-columns:repeat(3,1fr); } }
  @media (min-width:1080px){ .kess-vets { grid-template-columns:repeat(4,1fr); gap:1.5rem; } }

  .kess-vet { position:relative; border:1px solid var(--line); border-radius:4px; overflow:hidden;
    background:#fff; opacity:0; transform:translateY(26px); transition:box-shadow .4s ease, border-color .4s ease; }
  .kess-vet:hover { border-color:var(--gold); box-shadow:0 18px 40px rgba(18,22,15,.12); }

  .kess-vet-img { position:relative; width:100%; aspect-ratio:3/4; overflow:hidden; background:#EFEBE4; }
  .kess-vet-img img { object-fit:cover; filter:grayscale(100%) contrast(105%); transition:transform .7s ease, filter .5s ease; }
  .kess-vet:hover .kess-vet-img img { transform:scale(1.05); filter:grayscale(0%); }
  .kess-vet-img::after { content:''; position:absolute; inset:0;
    background:linear-gradient(to top, rgba(10,12,8,.72) 0%, rgba(10,12,8,0) 55%); }

  .kess-vet-ribbon { position:absolute; z-index:3; top:12px; left:12px; font-family:'Barlow Condensed',sans-serif;
    font-size:.68rem; font-weight:700; letter-spacing:2px; text-transform:uppercase; color:var(--ink);
    background:var(--gold); padding:3px 9px; border-radius:2px; }
  .kess-vet-meta { position:absolute; z-index:3; bottom:0; left:0; right:0; padding:1rem 1.1rem; }
  .kess-vet-name { font-family:'Bebas Neue',sans-serif; font-size:1.22rem; letter-spacing:.6px; color:#fff; margin:0; }
  .kess-vet-rank { font-family:'Barlow Condensed',sans-serif; font-size:.78rem; letter-spacing:2px;
    text-transform:uppercase; color:#E4D9BC; margin:.15rem 0 0; }
  .kess-vet-foot { padding:.9rem 1.1rem; border-top:1px solid var(--line); font-family:'Barlow Condensed',sans-serif;
    font-size:.86rem; letter-spacing:1px; text-transform:uppercase; color:var(--ink-soft);
    display:flex; justify-content:space-between; gap:.5rem; }
  .kess-vet-foot b { color:var(--ink); font-weight:700; }

  /* ---------- leadership ---------- */
  .kess-lead-grid { display:grid; grid-template-columns:1fr; gap:2rem; max-width:1060px; margin:0 auto; }
  @media (min-width:860px){ .kess-lead-grid { grid-template-columns:repeat(2,1fr); gap:2.5rem; } }

  .kess-lead { background:#fff; border:1px solid var(--line); border-radius:4px; overflow:hidden;
    display:grid; grid-template-columns:1fr; opacity:0; transform:translateY(26px);
    transition:box-shadow .4s ease, border-color .4s ease; }
  .kess-lead:hover { border-color:var(--gold); box-shadow:0 20px 44px rgba(18,22,15,.10); }
  .kess-lead--vet { border-left:3px solid var(--gold); }
  .kess-lead-img { position:relative; width:100%; aspect-ratio:4/3; overflow:hidden; background:#EFEBE4; }
  .kess-lead-img img { object-fit:cover; filter:grayscale(35%); transition:transform .7s ease, filter .5s ease; }
  .kess-lead:hover .kess-lead-img img { transform:scale(1.04); filter:grayscale(0%); }
  .kess-lead-body { padding:1.9rem; }
  .kess-lead-name { font-family:'Bebas Neue',sans-serif; font-size:1.85rem; letter-spacing:.8px; color:var(--ink); margin:0; }
  .kess-lead-role { font-family:'Barlow Condensed',sans-serif; font-size:.85rem; font-weight:700; letter-spacing:2.5px;
    text-transform:uppercase; color:var(--gold); margin:.3rem 0 1rem; }
  .kess-lead-bio { font-family:'Barlow Condensed',sans-serif; font-size:1.03rem; line-height:1.6; color:var(--ink-soft); margin:0; }
`;

/* ==========================================================================
   ICONS
   ========================================================================== */
const Ico = ({ d, size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {d}
  </svg>
);

const ICONS = {
  shield: <path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5l8-3z" />,
  star: <><path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5l8-3z" /><path d="M12 8l1.4 2.9 3.1.4-2.3 2.2.6 3.1L12 15.2l-2.8 1.4.6-3.1L7.5 11.3l3.1-.4L12 8z" /></>,
  users: <><circle cx="9" cy="8" r="3.2" /><path d="M2.5 20a6.5 6.5 0 0113 0" /><path d="M16 5.5a3.2 3.2 0 010 6.4M17.5 20a6.4 6.4 0 00-2-4.6" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></>,
  doc: <><path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5z" /><path d="M14 3v5h5M9 13h6M9 17h4" /></>,
  award: <><circle cx="12" cy="9" r="5.2" /><path d="M8.5 13.6L7 22l5-2.6L17 22l-1.5-8.4" /></>,
  bolt: <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />,
  chart: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></>,
};

/* ==========================================================================
   DATA — replace names/photos/paths with your real assets
   ========================================================================== */
const TRUST_PILLARS = [
  { id: "army", title: "Ex-Servicemen Leadership", description: "Governed and guided by retired Indian Army personnel — tactical experience, military precision and uncompromised honour on every posting.", featured: true, icon: ICONS.star },
  { id: "psara", title: "PSARA Licensed", description: "Licensed under the Private Security Agencies (Regulation) Act — PSA/L/74/H/2020/MAY/3/92, Maharashtra.", icon: ICONS.doc },
  { id: "zero", title: "Zero Tolerance Policy", description: "Absolute integrity, strict confidentiality of client information, zero duty negligence and total sobriety on site.", icon: ICONS.shield },
  { id: "rapid", title: "Rapid Response", description: "24/7 centralised command protocols with real-time incident escalation for immediate tactical support.", icon: ICONS.bolt },
  { id: "clients", title: "Trusted At Scale", description: "Serving public sector companies, central railway hospitals and premium township infrastructure across Maharashtra.", icon: ICONS.users },
  { id: "compliance", title: "100% Compliance", description: "Full statutory compliance — PF, ESI, labour acts and rigorous onboarding documentation for every guard.", icon: ICONS.award },
  { id: "ops", title: "Committed Operations", description: "A responsive security operations desk supervised directly by leadership with hands-on defence-line background.", icon: ICONS.clock },
  { id: "decade", title: "A Decade of Excellence", description: "10+ years of operational stability, zero labour disputes and proven dependability on high-stakes accounts.", icon: ICONS.chart },
];

const STATS = [
  { value: "10+", label: "Years Operational" },
  { value: "60%", label: "Ex-Servicemen Force" },
  { value: "24/7", label: "Command Desk" },
  { value: "100%", label: "Statutory Compliance" },
];

const VETERANS = [
  {
    name: "Col. Rajiv Menon (Retd.)",
    rank: "Colonel, Indian Army",
    years: "28 Years of Service",
    role: "Head — Security Operations",
    img: "/images/guards-hero.jpg.jpeg",
  },
];


const LEADERSHIP = [
  { name: "Mr. Namdev Bhanudas Doke", role: "Managing Director · Retd. Indian Army", bio: "Brings decades of military command discipline, strategic field experience and operational rigour from Indian Army service to every KESS deployment.", image: "/images/KESS-differentiator-homepage.png", isVeteran: true },
  { name: "Mr. Mahesh Doke", role: "Chairman & Sales Director", bio: "A vision-driven entrepreneur leading enterprise growth, corporate client relations and multi-sector facility management across Maharashtra.", image: "/images/guards-hero.jpg.jpeg", isVeteran: false },
];

/* ==========================================================================
   SECTION 1 — WHY TRUST KESS
   ========================================================================== */
export function WhyTrustKESS() {
  const root = useRef(null);

  useEffect(() => {
    // Inject CSS if not already present
    const id = "kess-trust-leadership-styles";
    if (!document.getElementById(id)) {
      const tag = document.createElement("style");
      tag.id = id;
      tag.textContent = KESS_CSS;
      document.head.appendChild(tag);
    }
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: root.current, start: "top 78%", toggleActions: "play none none reverse" },
      });
      tl.to(".kess-eyebrow", { opacity: 1, y: 0, duration: .5, ease: "power2.out" }, 0)
        .to(".kess-h2", { opacity: 1, y: 0, duration: .6, ease: "power2.out" }, .08)
        .to(".kess-lede", { opacity: 1, y: 0, duration: .6, ease: "power2.out" }, .16)
        .to(".kess-vet-banner", { opacity: 1, y: 0, duration: .6, ease: "power2.out" }, .22)
        .to(".kess-stat", { opacity: 1, y: 0, duration: .45, stagger: .07, ease: "power2.out" }, .3)
        .to(".kess-card", { opacity: 1, y: 0, duration: .5, stagger: .06, ease: "power2.out" }, .38);
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div className="kess-wrap">
      <section className="kess-sec" ref={root}>
        <div className="kess-rule-bg" />
        <div className="kess-inner">
          <header className="kess-head">
            <p className="kess-eyebrow">Uncompromising Standards</p>
            <h2 className="kess-h2">Why Organizations <em>Trust KESS</em></h2>
            <p className="kess-lede">
              For over a decade KESS has safeguarded businesses, institutions and communities with
              integrity and precision. Led by retired military officers and built on rigorous training
              standards, we deliver security that stands the test of time.
            </p>
          </header>

          <div className="kess-vet-banner">
            <div>
              <span className="kess-tag">Military Foundation</span>
              <h3 className="kess-vet-title">Built on Ex-Servicemen Discipline &amp; Honour</h3>
            </div>
            <p className="kess-vet-desc">
              Our operational protocols are designed and audited by Indian Army veterans — instilling
              battlefield alertness, hierarchy-driven command and crisis preparedness into every guard on duty.
            </p>
          </div>

          <div className="kess-stats">
            {STATS.map((s) => (
              <div className="kess-stat" key={s.label}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>

          <div className="kess-grid">
            {TRUST_PILLARS.map((p) => (
              <article key={p.id} className={`kess-card${p.featured ? " kess-card--featured" : ""}`}>
                <div className="kess-ico"><Ico d={p.icon} /></div>
                <h3 className="kess-card-title">{p.title}</h3>
                <p className="kess-card-text">{p.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ==========================================================================
   SECTION 2 — EX-SERVICEMEN PHOTO WALL
   ========================================================================== */
export function VeteransWall() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: root.current, start: "top 80%", toggleActions: "play none none reverse" },
      });
      tl.to(root.current.querySelectorAll(".kess-eyebrow, .kess-h2, .kess-lede"),
          { opacity: 1, y: 0, duration: .55, stagger: .08, ease: "power2.out" }, 0)
        .to(".kess-vet", { opacity: 1, y: 0, duration: .6, stagger: .1, ease: "power2.out" }, .2);
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="kess-sec" ref={root}>
      <div className="kess-inner">
        <header className="kess-head kess-head--center">
          <p className="kess-eyebrow">Those Who Served</p>
          <h2 className="kess-h2">The Men Behind <em>The Uniform</em></h2>
          <p className="kess-lede">
            Veterans who served the nation, now serving your premises. Every deployment carries the
            discipline, alertness and accountability of a career in the Indian Armed Forces.
          </p>
        </header>

        <div className="kess-vets">
          {VETERANS.map((v) => (
            <figure className="kess-vet" key={v.name}>
              <span className="kess-vet-ribbon">★ Ex-Serviceman</span>
              <div className="kess-vet-img">
                <Image src={v.img} alt={`${v.name}, ${v.rank}`} fill sizes="(max-width:720px) 50vw, 25vw" />
                <figcaption className="kess-vet-meta">
                  <p className="kess-vet-name">{v.name}</p>
                  <p className="kess-vet-rank">{v.role}</p>
                </figcaption>
              </div>
              <div className="kess-vet-foot">
                <span>{v.rank}</span>
                <b>{v.years}</b>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   SECTION 3 — LEADERSHIP
   ========================================================================== */
export function LeadershipSection() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: root.current, start: "top 80%", toggleActions: "play none none reverse" },
      });
      tl.to(root.current.querySelectorAll(".kess-eyebrow, .kess-h2, .kess-lede"),
          { opacity: 1, y: 0, duration: .55, stagger: .08, ease: "power2.out" }, 0)
        .to(".kess-lead", { opacity: 1, y: 0, duration: .6, stagger: .14, ease: "power2.out" }, .2);
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="kess-sec" ref={root}>
      <div className="kess-inner">
        <header className="kess-head kess-head--center">
          <p className="kess-eyebrow">Leadership &amp; Management</p>
          <h2 className="kess-h2">Command From <em>The Front</em></h2>
          <p className="kess-lede">
            Guided by Indian Army veterans. Driven by entrepreneurial vision.
          </p>
        </header>

        <div className="kess-lead-grid">
          {LEADERSHIP.map((l) => (
            <article key={l.name} className={`kess-lead${l.isVeteran ? " kess-lead--vet" : ""}`}>
              <div className="kess-lead-img">
                <Image src={l.image} alt={`${l.name}, ${l.role}`} fill sizes="(max-width:860px) 100vw, 50vw" />
                {l.isVeteran && <span className="kess-vet-ribbon">★ Retd. Indian Army</span>}
              </div>
              <div className="kess-lead-body">
                <h3 className="kess-lead-name">{l.name}</h3>
                <p className="kess-lead-role">{l.role}</p>
                <p className="kess-lead-bio">{l.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   WRAPPER
   ========================================================================== */
export default function KessTrustAndLeadership() {
  useEffect(() => {
    const id = "kess-trust-leadership-styles";
    if (!document.getElementById(id)) {
      const tag = document.createElement("style");
      tag.id = id;
      tag.textContent = KESS_CSS;
      document.head.appendChild(tag);
    }
  }, []);

  return (
    <div className="kess-wrap">
      <WhyTrustKESS />
      <VeteransWall />
      <LeadershipSection />
    </div>
  );
}
