"use client";

import { useEffect, useRef, useState } from "react";

/* ==========================================================================
   THEME — matches the rest of the KESS site (Bebas Neue / Barlow Condensed,
   ink / gold / paper tokens used in the other sections)
   ========================================================================== */
const TRUST_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:ital,wght@0,300;0,400;0,600;0,700&display=swap');
  .kess-trust { --ink:#12160F; --ink-soft:#4A5240; --paper:#FAF8F5; --line:rgba(18,22,15,0.12); --gold:#C79A2E; }
  .kess-trust h2, .kess-trust h3 { font-family:'Bebas Neue',sans-serif; letter-spacing:.5px; }
  .kess-trust p, .kess-trust span.kess-eyebrow, .kess-trust .kess-desc { font-family:'Barlow Condensed',sans-serif; }
`;

const PAPER = "var(--paper)";
const INK = "var(--ink)";
const SAGE = "var(--ink-soft)";
const GOLD = "var(--gold)";

/* ==========================================================================
   ICONS — self contained inline SVGs, no external asset paths, each with
   its own real color (not tinted to a single theme color) inside a soft
   tinted roundel so they read as big, premium, full color marks
   ========================================================================== */
function IconShell({ bg, children }) {
  return (
    <div
      className="flex h-[90px] w-[90px] shrink-0 items-center justify-center rounded-full transition-transform duration-500 ease-out group-hover:scale-110 md:h-[104px] md:w-[104px]"
      style={{ backgroundColor: bg }}
    >
      {children}
    </div>
  );
}

const Officer = () => (
  <IconShell bg="#EFE6D3">
    <svg width="52" height="52" viewBox="0 0 64 64">
      <circle cx="32" cy="24" r="11" fill="#E8B08A" />
      <path d="M20 22a12 12 0 0124 0c0-2-10-8-12-8s-12 6-12 8z" fill="#2B2A28" />
      <path d="M10 54c2-11 10-17 22-17s20 6 22 17z" fill="#8A6D2E" />
      <rect x="26" y="41" width="12" height="7" rx="1.5" fill="#C79A2E" />
      <circle cx="32" cy="44.5" r="1.6" fill="#7A3B3B" />
    </svg>
  </IconShell>
);

const License = () => (
  <IconShell bg="#DCEFEA">
    <svg width="52" height="52" viewBox="0 0 64 64">
      <rect x="8" y="16" width="48" height="32" rx="4" fill="#1F8A80" />
      <rect x="8" y="16" width="48" height="32" rx="4" fill="none" stroke="#0F5E56" strokeWidth="1.5" />
      <circle cx="20" cy="32" r="7" fill="#FAF8F5" />
      <path d="M17 32l2 2.4 4-5" stroke="#C79A2E" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="32" y="25" width="18" height="3" rx="1.5" fill="#FAF8F5" />
      <rect x="32" y="32" width="18" height="3" rx="1.5" fill="#BFE6DF" />
      <rect x="32" y="39" width="12" height="3" rx="1.5" fill="#BFE6DF" />
    </svg>
  </IconShell>
);

const Stop = () => (
  <IconShell bg="#FBE1DC">
    <svg width="52" height="52" viewBox="0 0 64 64">
      <circle cx="32" cy="32" r="24" fill="#E5432E" />
      <path d="M22 34v-8a10 10 0 0120 0v8" fill="none" stroke="#FAF8F5" strokeWidth="4" strokeLinecap="round" />
      <rect x="22" y="30" width="20" height="14" rx="4" fill="#FAF8F5" />
      <path d="M15 44l34-24" stroke="#FAF8F5" strokeWidth="4" strokeLinecap="round" />
    </svg>
  </IconShell>
);

const Dispatch = () => (
  <IconShell bg="#DCE6F7">
    <svg width="52" height="52" viewBox="0 0 64 64">
      <circle cx="32" cy="26" r="11" fill="#3D6BC7" />
      <path d="M17 26a15 15 0 0130 0" fill="none" stroke="#22407F" strokeWidth="3" strokeLinecap="round" />
      <rect x="14" y="26" width="6" height="10" rx="2" fill="#22407F" />
      <rect x="44" y="26" width="6" height="10" rx="2" fill="#22407F" />
      <rect x="26" y="40" width="12" height="16" rx="2" fill="#F5B942" />
      <path d="M38 46h6a3 3 0 013 3v3a3 3 0 01-3 3h-6" fill="none" stroke="#8A6412" strokeWidth="2" />
    </svg>
  </IconShell>
);

const LocationTrust = () => (
  <IconShell bg="#DCEAF7">
    <svg width="52" height="52" viewBox="0 0 64 64">
      <path d="M32 6c-10 0-18 7.8-18 18.5C14 39 32 58 32 58s18-19 18-33.5C50 13.8 42 6 32 6z" fill="#3477C7" />
      <circle cx="32" cy="24" r="9" fill="#FAF8F5" />
      <circle cx="32" cy="20.5" r="3.4" fill="#3477C7" />
      <path d="M25 29c1.5-3 4-4.5 7-4.5s5.5 1.5 7 4.5" fill="#3477C7" />
    </svg>
  </IconShell>
);

const Compliance = () => (
  <IconShell bg="#FBE1DC">
    <svg width="52" height="52" viewBox="0 0 64 64">
      <circle cx="32" cy="32" r="22" fill="none" stroke="#C4342A" strokeWidth="3" strokeDasharray="4 3" />
      <circle cx="32" cy="32" r="15" fill="none" stroke="#C4342A" strokeWidth="2" />
      <text x="32" y="29" textAnchor="middle" fontSize="9" fontWeight="700" fill="#C4342A" fontFamily="Arial">100%</text>
      <text x="32" y="40" textAnchor="middle" fontSize="6" fontWeight="700" fill="#C4342A" fontFamily="Arial">COMPLIANT</text>
    </svg>
  </IconShell>
);

const Radar = () => (
  <IconShell bg="#DCEEE0">
    <svg width="52" height="52" viewBox="0 0 64 64">
      <rect x="10" y="14" width="44" height="30" rx="3" fill="#1B2E22" />
      <rect x="14" y="18" width="36" height="22" rx="1" fill="#0E3D22" />
      <circle cx="32" cy="29" r="9" fill="none" stroke="#3ED67A" strokeWidth="1.2" opacity="0.7" />
      <circle cx="32" cy="29" r="5" fill="none" stroke="#3ED67A" strokeWidth="1.2" opacity="0.85" />
      <path d="M32 29L40 24" stroke="#3ED67A" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="32" cy="29" r="1.6" fill="#3ED67A" />
      <rect x="26" y="46" width="12" height="4" rx="1.5" fill="#1B2E22" />
    </svg>
  </IconShell>
);

const Medal = () => (
  <IconShell bg="#F6E9CC">
    <svg width="52" height="52" viewBox="0 0 64 64">
      <path d="M24 8l6 16h-12z" fill="#C4342A" />
      <path d="M40 8l-6 16h12z" fill="#8C2A22" />
      <circle cx="32" cy="38" r="16" fill="#E3B23C" />
      <circle cx="32" cy="38" r="11" fill="none" stroke="#8A6412" strokeWidth="1.5" />
      <path d="M32 31l2.4 4.9 5.4.7-3.9 3.8.9 5.4-4.8-2.6-4.8 2.6.9-5.4-3.9-3.8 5.4-.7z" fill="#8A6412" />
    </svg>
  </IconShell>
);

const items = [
  { Icon: Officer, title: "Ex-Servicemen Leadership", description: "Governed and guided by retired Indian Army personnel, tactical experience, military precision and uncompromised honour on every posting." },
  { Icon: License, title: "PSARA Licensed", description: "Licensed under the Private Security Agencies (Regulation) Act. License No. PSA/L/74/H/2020/MAY/3/92, Maharashtra." },
  { Icon: Stop, title: "Zero Tolerance Policy", description: "Absolute integrity, strict confidentiality of client information, zero duty negligence and total sobriety on site." },
  { Icon: Dispatch, title: "Rapid Response", description: "24/7 centralised command protocols with real-time incident escalation for immediate tactical support." },
  { Icon: LocationTrust, title: "Trusted At Scale", description: "Serving public sector companies, central railway hospitals and premium township infrastructure across Maharashtra." },
  { Icon: Compliance, title: "100% Compliance", description: "Full statutory compliance: PF, ESI, labour acts and rigorous onboarding documentation for every guard." },
  { Icon: Radar, title: "Committed Operations", description: "A responsive security operations desk supervised directly by leadership with hands-on defence-line background." },
  { Icon: Medal, title: "A Decade Of Excellence", description: "10+ years of operational stability, zero labour disputes and proven dependability on high-stakes accounts." },
];

function Row({ item, index }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  const { Icon } = item;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <li
      ref={ref}
      style={{
        transitionDelay: `${(index % 2) * 90 + Math.floor(index / 2) * 60}ms`,
        borderColor: "var(--line)",
      }}
      className={`group flex items-start gap-6 rounded-xl px-4 py-8 transition-all duration-700 ease-out hover:bg-black/[0.035] sm:px-6 md:py-10 ${
        shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <Icon />
      <div className="pt-1">
        <h3
          className="text-[1.5rem] font-normal uppercase leading-tight tracking-wide md:text-[1.7rem]"
          style={{ color: INK }}
        >
          {item.title}
        </h3>
        <span
          className="mt-3 block h-px w-10 transition-all duration-500 group-hover:w-16"
          style={{ backgroundColor: GOLD, opacity: 0.7 }}
        />
        <p className="kess-desc mt-3 max-w-[38ch] text-[1.02rem] leading-relaxed" style={{ color: SAGE }}>
          {item.description}
        </p>
      </div>
    </li>
  );
}

export default function WhyTrustKess() {
  useEffect(() => {
    const id = "kess-trust-fonts";
    if (!document.getElementById(id)) {
      const tag = document.createElement("style");
      tag.id = id;
      tag.textContent = TRUST_CSS;
      document.head.appendChild(tag);
    }
  }, []);

  return (
    <section aria-labelledby="why-trust-kess" className="kess-trust py-20 md:py-28" style={{ backgroundColor: PAPER }}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <header className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10" style={{ backgroundColor: GOLD }} />
            <span className="kess-eyebrow text-[0.75rem] font-semibold uppercase tracking-[0.28em]" style={{ color: GOLD }}>
              Uncompromising Standards
            </span>
          </div>
          <h2
            id="why-trust-kess"
            className="mt-6 text-[2.4rem] uppercase leading-[0.98] tracking-wide sm:text-[3rem] md:text-[3.6rem]"
            style={{ color: INK }}
          >
            Why Organizations Trust KESS
          </h2>
          <p className="kess-desc mt-5 max-w-2xl text-lg leading-relaxed md:text-xl" style={{ color: SAGE }}>
            For over a decade, KESS Security has safeguarded businesses, institutions and
            townships with integrity and precision, led by military veterans who hold every
            posting to a soldier's standard.
          </p>
        </header>

        <ul className="mt-14 grid grid-cols-1 gap-x-14 divide-y md:mt-20 md:grid-cols-2 md:[&>li:nth-child(-n+2)]:border-t-0 md:[&>li:nth-child(2n)]:border-l md:[&>li:nth-child(2n+1)]:border-t md:[&>li]:border-t-0" style={{ borderColor: "var(--line)" }}>
          {items.map((item, i) => (
            <Row key={item.title} item={item} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}