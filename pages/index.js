import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import Navbar from "../components/Navbar";
import TrainingManifesto from "../components/TrainingManifesto";
import siteData from "../data/siteData.json";
import { WhyTrustKESS } from "@/components/WhyTrustKESS";

export default function Home() {
  const { company, services, clients, leadership } = siteData;

  const overlayRef = useRef(null);
  const shieldRef = useRef(null);
  const shieldTextRef = useRef(null);
  const heroImgRef = useRef(null);
  const heroTextRef = useRef(null);

  // Take only the first 4 services to fit a 2x2 grid on screen
  const displayedServices = services.slice(0, 4);

  // Fallback security images in case siteData doesn't specify an image per service
  const serviceImages = [
    "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=1200&q=80",
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80",
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80",
  ];

  useEffect(() => {
    // Prevent scrolling while intro plays
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      onComplete: () => {
        // Unlock page scrolling after sequence completes
        document.body.style.overflow = "auto";
      },
    });

    // Initial hidden/scaled states
    gsap.set(shieldRef.current, { scale: 0.6, opacity: 0 });
    gsap.set(shieldTextRef.current, { y: 20, opacity: 0 });
    gsap.set(heroImgRef.current, { scale: 1.15, opacity: 0 });
    gsap.set(heroTextRef.current.children, { y: 30, opacity: 0 });

    // Intro Animation Sequence
    tl.to(shieldRef.current, {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: "back.out(1.4)",
    })
      .to(
        shieldTextRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
        },
        "-=0.4"
      )
      // Fade out intro shield overlay
      .to(overlayRef.current, {
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
        onComplete: () => {
          if (overlayRef.current) overlayRef.current.style.display = "none";
        },
      })
      // Reveal Guard Image Background
      .to(
        heroImgRef.current,
        {
          opacity: 0.35,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
        },
        "-=0.6"
      )
      // Stagger existing Hero Text elements
      .to(
        heroTextRef.current.children,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
        },
        "-=0.8"
      );

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="bg-charcoal min-h-screen text-ivory selection:bg-gold selection:text-charcoal relative">
      {/* 1. ON-LOAD ANIMATION OVERLAY */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-charcoal"
      >
        <img
          ref={shieldRef}
          src="/images/kess-shield.png.png"
          alt="Knight Eyes Security Emblem"
          className="w-32 sm:w-40 h-auto drop-shadow-[0_0_25px_rgba(212,175,55,0.35)]"
        />
        <h2
          ref={shieldTextRef}
          className="mt-4 font-display text-gold tracking-[0.25em] uppercase text-xs sm:text-sm text-center px-4"
        >
          Knight Eyes Security Services
        </h2>
      </div>

      <Navbar />

      {/* 2. HERO SECTION WITH IMAGE REVEAL */}
      <section className="relative overflow-hidden border-b border-gold/20 min-h-[80vh] flex items-center justify-center">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            ref={heroImgRef}
            src="/images/guards-hero.jpg.jpeg"
            alt="KESS Guard Team"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 via-charcoal/70 to-charcoal" />
        </div>

        {/* Hero Content */}
        <div
          ref={heroTextRef}
          className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20 text-center"
        >
          <p className="text-gold uppercase tracking-[0.3em] text-xs sm:text-sm mb-3 font-medium">
            {company.yearsInBusiness}+ Years of Trusted Protection
          </p>
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl text-ivory leading-tight max-w-3xl mx-auto">
            {company.tagline}
          </h1>
          <p className="text-ivory/80 mt-4 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Security guarding, housekeeping, manpower outsourcing, and
            rigorous on-the-job training — led by ex-servicemen who take
            vigilance seriously.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/contact"
              className="bg-gold text-charcoal px-7 py-3 uppercase tracking-wider text-xs font-semibold hover:bg-gold-light transition-all shadow-lg shadow-gold/10 hover:shadow-gold/20 text-center"
            >
              Request a Quote
            </Link>
            <Link
              href="/services"
              className="border border-ivory/30 backdrop-blur-sm text-ivory px-7 py-3 uppercase tracking-wider text-xs font-medium hover:border-gold hover:text-gold transition-colors text-center"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* 3. TRUST STATS */}
      <section className="border-b border-gold/20 relative z-10 bg-charcoal">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-8 sm:py-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { label: "Years in Business", value: `${company.yearsInBusiness}+` },
            { label: "Corporate Clients", value: `${clients.length}+` },
            { label: "Cities Served", value: "3+" },
            { label: "Zero Tolerance Policy", value: "100%" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-2xl sm:text-3xl text-gold">
                {stat.value}
              </p>
              <p className="text-ivory/60 text-[11px] sm:text-xs uppercase tracking-wide mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CORE SERVICES SECTION (COMPACT 2x2 GRID) */}
      <section className="relative bg-charcoal py-12 sm:py-16 px-5 sm:px-8 lg:px-12 overflow-hidden border-b border-gold/20">
        <div 
          className="absolute inset-0 pointer-events-none opacity-20 z-0"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(212, 175, 55, 0.05) 3px, rgba(212, 175, 55, 0.05) 4px)`
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-baseline justify-between gap-3 mb-8 pb-4 border-b border-gold/20">
            <div className="flex items-center gap-3">
              <span className="font-display text-[10px] tracking-[0.25em] uppercase text-gold border border-gold/30 px-2.5 py-0.5 bg-charcoal-light/50">
                At KESS we offer:
              </span>
              <h2 className="font-display text-2xl sm:text-4xl text-ivory uppercase tracking-wider">
                Core Services
              </h2>
            </div>
            <Link
              href="/services"
              className="font-display text-xs tracking-widest text-gold hover:underline uppercase"
            >
              View All Services &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {displayedServices.map((service, idx) => {
              const formattedNum = String(idx + 1).padStart(2, "0");
              const bgImage = service.image || serviceImages[idx % serviceImages.length];

              return (
                <Link
                  href="/services"
                  key={service.id || idx}
                  className="group relative bg-charcoal-light h-[260px] sm:h-[280px] overflow-hidden flex flex-col justify-between p-6 sm:p-7 border border-gold/15 hover:border-gold/60 transition-all duration-300 cursor-pointer"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500 ease-out z-0"
                    style={{ backgroundImage: `url(${bgImage})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent z-0" />

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gold group-hover:w-full transition-all duration-300 ease-out z-20" />

                  <div className="relative z-10 flex items-start justify-end">
                    <span className="font-display text-3xl sm:text-4xl text-ivory/80 drop-shadow-md group-hover:text-gold transition-colors duration-300">
                      {formattedNum}
                    </span>
                  </div>

                  <div className="relative z-10 pr-6">
                    <h3 className="font-display text-xl sm:text-2xl text-ivory uppercase tracking-wider mb-1.5 drop-shadow-md group-hover:text-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-ivory/90 text-xs sm:text-sm font-light leading-relaxed line-clamp-2 drop-shadow-sm">
                      {service.description}
                    </p>
                  </div>

                  <div className="absolute bottom-6 right-6 text-2xl text-ivory/80 group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 z-10 hidden sm:block">
                    ↗
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. KEY DIFFERENTIATOR: TRAINING & STANDARDS */}
      <TrainingManifesto />
<WhyTrustKESS/>
      {/* 6. WHY KESS / LEADERSHIP */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-12 sm:py-16">
        <div className="text-center mb-8">
          <p className="text-gold uppercase tracking-[0.3em] text-[11px] mb-1.5">
            Leadership & Foundation
          </p>
          <h2 className="font-display text-2xl sm:text-3xl text-ivory">
            Led By Discipline. Backed By Experience.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {leadership.map((person) => (
            <div
              key={person.name}
              className="border border-gold/15 p-6 bg-charcoal-light/40"
            >
              <h3 className="font-display text-lg text-gold">
                {person.name}
              </h3>
              <p className="text-ivory/50 text-[10px] uppercase tracking-wide mb-2">
                {person.role}
              </p>
              <p className="text-ivory/70 text-xs sm:text-sm leading-relaxed">
                {person.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CLIENTS MARQUEE / STRIP */}
      <section className="border-t border-gold/20 py-10 bg-charcoal overflow-hidden">
        <p className="text-center text-gold uppercase tracking-[0.3em] text-[10px] mb-6">
          Trusted By Industry Leaders
        </p>
        
        <div className="relative w-full overflow-hidden flex [mask-image:_linear-gradient(to_right,_transparent_0,_black_128px,_black_calc(100%-128px),_transparent_100%)]">
          <div className="flex gap-12 whitespace-nowrap animate-marquee">
            {clients.concat(clients).map((client, idx) => (
              <span
                key={`${client.name}-${idx}`}
                className="text-ivory/40 text-xs sm:text-sm font-medium uppercase tracking-wider hover:text-gold transition-colors cursor-default"
              >
                {client.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FLOATING QUICK ACTION BAR */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-3">
        <a
          href="https://wa.me/919000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-3 rounded-full shadow-xl hover:scale-110 transition-transform flex items-center justify-center"
          aria-label="Contact via WhatsApp"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}