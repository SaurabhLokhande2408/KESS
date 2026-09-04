"use client";

import React, { useEffect, useRef, useState } from "react";

/* ==========================================================================
   REVEAL — lightweight IntersectionObserver wrapper, no extra deps
   ========================================================================== */
function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

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
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ==========================================================================
   ICONS — small, muted, multi-tone marks that still read on a dark charcoal
   background. Kept restrained (gold + one accent) so the vibe stays corporate.
   ========================================================================== */
const IconBox = ({ bg, children }) => (
  <div
    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
    style={{ backgroundColor: bg }}
  >
    {children}
  </div>
);

const IcoPhysical = () => (
  <IconBox bg="rgba(199,154,46,0.12)">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M4 9v6M2 8v8" stroke="#C79A2E" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M20 9v6M22 8v8" stroke="#C79A2E" strokeWidth="1.8" strokeLinecap="round" />
      <rect x="6" y="7" width="3" height="10" rx="1" fill="#E8C874" />
      <rect x="15" y="7" width="3" height="10" rx="1" fill="#E8C874" />
      <path d="M9 12h6" stroke="#C79A2E" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  </IconBox>
);

const IcoCommand = () => (
  <IconBox bg="rgba(90,140,200,0.14)">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="8" y="3" width="8" height="14" rx="2" fill="#6FA0D8" />
      <path d="M11 20h2M12 17v3" stroke="#9CC0E8" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="7" r="1.4" fill="#0F2740" />
      <path d="M9.5 11h5" stroke="#0F2740" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  </IconBox>
);

const IcoFireAid = () => (
  <IconBox bg="rgba(214,86,58,0.14)">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 3c2 3-1 4-1 6.5a3 3 0 006 0C17 6 15 4 15 4s1 3-1 3.5C13.4 6.7 13 5 12 3z" fill="#D6563A" />
      <path d="M9 21c-1.5-4 .5-7 3-9 2.5 2 4.5 5 3 9-1 1-3 1.5-3 1.5S10 22 9 21z" fill="#EE7C58" />
      <path d="M12 14v5M9.8 16.2h4.4" stroke="#FAF8F5" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  </IconBox>
);

const IcoVip = () => (
  <IconBox bg="rgba(199,154,46,0.12)">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 3l7 2.6v5.4c0 4.4-3 8-7 9-4-1-7-4.6-7-9V5.6L12 3z" fill="none" stroke="#C79A2E" strokeWidth="1.6" />
      <circle cx="12" cy="10" r="2.2" fill="#E8C874" />
      <path d="M8.5 15c1-1.6 2-2.3 3.5-2.3s2.5.7 3.5 2.3" stroke="#E8C874" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </IconBox>
);

const IcoReport = () => (
  <IconBox bg="rgba(120,160,120,0.14)">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="6" y="3.5" width="12" height="17" rx="1.5" fill="#7FAE7F" opacity="0.85" />
      <rect x="9" y="2" width="6" height="3" rx="1" fill="#0F2740" opacity="0.4" />
      <path d="M8.5 10h7M8.5 13h7M8.5 16h4.5" stroke="#0F1A0F" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  </IconBox>
);

const IcoTraining = () => (
  <IconBox bg="rgba(199,154,46,0.12)">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M2 9l10-4 10 4-10 4-10-4z" fill="#E8C874" />
      <path d="M6 11v4c0 1.4 2.7 3 6 3s6-1.6 6-3v-4" stroke="#C79A2E" strokeWidth="1.5" fill="none" />
      <path d="M20 9v5" stroke="#C79A2E" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </IconBox>
);

const training = [
  { number: "01", title: "Physical Training", text: "Building physical readiness, discipline and the ability to handle demanding security duties.", Icon: IcoPhysical },
  { number: "02", title: "Control and Command", text: "Training personnel in punctuality, alertness, behaviour, discipline and controlled response.", Icon: IcoCommand },
  { number: "03", title: "Fire Response and First Aid", text: "Preparing personnel to respond to emergencies with fire fighting basics and first aid training.", Icon: IcoFireAid },
  { number: "04", title: "VIP Protection and Crowd Control", text: "Specialised preparation for VIP protection, crowd management and controlled security response.", Icon: IcoVip },
  { number: "05", title: "Reporting Systems", text: "Structured reporting and job specific procedures maintain accountability across every deployment.", Icon: IcoReport },
  { number: "06", title: "On the Job Training", text: "Practical training continues after deployment, helping personnel become more capable and confident.", Icon: IcoTraining },
];

const services = [
  "Security Services",
  "Labour Supply",
  "Supervisors",
  "Fitters",
  "Electricians",
  "Housekeeping",
  "Data Entry",
  "Office Assistants",
  "Lobby Assistants",
  "Receptionists",
  "Couriers and Runners",
  "Casual Labour",
];

const Differentiator = () => {
  return (
    <section className="bg-charcoal text-ivory border-t border-white/10">
      <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">

        {/* SECTION HEADER */}
        <Reveal className="grid grid-cols-1 gap-10 border-b border-white/10 pb-10 lg:grid-cols-[0.3fr_1fr] lg:gap-16 lg:pb-14">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Why KESS
          </p>
          <div>
            <h2 className="font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Discipline built into the foundation.
            </h2>
            <p className="mt-6 max-w-2xl font-sans text-base leading-8 text-white/60 sm:text-[17px]">
              Knight Eyes Security Services is built on the values of military
              service: discipline, preparedness, leadership and
              responsibility. Those principles shape the people KESS trains
              and the services it delivers.
            </p>
          </div>
        </Reveal>

        {/* FOUNDER */}
        <div className="mt-16 grid grid-cols-1 gap-10 border-b border-white/10 pb-16 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-4">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-white/10">
              <img
                src="/images/founder-team/MrNamdevBhanudas%20Doke.png"
                alt="Mr. Namdev Bhanudas Doke, Managing Director of KESS"
                className="h-full w-full object-cover object-center grayscale-[15%]"
              />
              <div className="absolute inset-x-0 bottom-0 border-t border-gold/40 bg-charcoal/90 px-5 py-4">
                <p className="font-sans text-[11px] uppercase tracking-[0.15em] text-gold">
                  Managing Director
                </p>
                <p className="mt-1 font-sans text-[11px] uppercase tracking-[0.15em] text-white/60">
                  Retired Indian Army
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-8 lg:pl-6">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              The Founder
            </p>
            <h3 className="mt-4 font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
              Mr. Namdev Bhanudas Doke
            </h3>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <p className="font-sans text-base leading-8 text-white/60 sm:text-[17px]">
                The leadership behind KESS brings distinguished military
                experience and a record of command across diverse formations.
                That background is the foundation for an organisation built
                on discipline and dependable execution.
              </p>
              <p className="font-sans text-base leading-8 text-white/60 sm:text-[17px]">
                Today, that philosophy extends beyond security. KESS supports
                organisations with trained manpower, housekeeping and other
                operational services, while holding the same standard of
                preparation and accountability.
              </p>
            </div>
          </Reveal>
        </div>

        {/* TRAINING FRAMEWORK */}
        <div className="mt-16 border-b border-white/10 pb-16">
          <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Training Framework
              </p>
              <h3 className="mt-4 font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
                Prepared before deployment.
              </h3>
            </div>
            <p className="max-w-sm font-sans text-base leading-7 text-white/50 sm:text-[17px]">
              A structured programme built to instil discipline, physical
              readiness and controlled response.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {training.map((item, i) => (
              <Reveal
                as="div"
                key={item.number}
                delay={(i % 3) * 80 + Math.floor(i / 3) * 60}
                className="bg-charcoal p-6 sm:p-7"
              >
                <div className="flex items-center gap-3">
                  <item.Icon />
                  <span className="font-sans text-xs font-semibold tracking-[0.15em] text-gold">
                    {item.number}
                  </span>
                </div>
                <h4 className="mt-4 font-serif text-xl leading-snug tracking-tight text-ivory">
                  {item.title}
                </h4>
                <p className="mt-3 font-sans text-base leading-7 text-white/50">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* SERVICES */}
        <div className="mt-16 pb-4">
          <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Beyond Security
              </p>
              <h3 className="mt-4 font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
                People for every operational need.
              </h3>
            </div>
            <p className="max-w-sm font-sans text-base leading-7 text-white/50 sm:text-[17px]">
              Security personnel, skilled and unskilled manpower, and
              housekeeping support for a wide range of requirements.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-3 lg:grid-cols-6">
            {services.map((service, index) => (
              <Reveal
                as="div"
                key={service}
                delay={(index % 6) * 50}
                className="bg-charcoal p-5"
              >
                <span className="block font-sans text-[10px] tracking-[0.1em] text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 font-serif text-base leading-tight text-white/80">
                  {service}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* CLOSING STATEMENT */}
        <Reveal className="mt-16 border-t border-white/10 pt-12">
          <p className="max-w-3xl font-serif text-2xl leading-snug tracking-tight text-white/85 sm:text-3xl">
            "Without threat there is no need of security, but with security
            there is no threat."
          </p>
          <div className="mt-6 flex items-center gap-3">
            <div className="h-px w-10 bg-gold" />
            <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-white/40">
              Knight Eyes Security Services
            </span>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Differentiator;