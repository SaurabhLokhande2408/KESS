import Image from "next/image";
import Link from "next/link";
import siteData from "../data/siteData.json";

export default function Hero({ heroTextRef, heroImgRef }) {
  const { company } = siteData;

  return (
    <section
      ref={heroImgRef}
      className="relative overflow-hidden border border-charcoal w-full"
      style={{ aspectRatio: "1252 / 626" }}
    >
      {/* Background image - fills section exactly, aspect-ratio matched so no
          unpredictable cropping happens at different screen widths */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-section.png"
          alt="KESS Guard Team"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "center center" }}
          sizes="100vw"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(28,32,24,0.35) 0%, rgba(28,32,24,0.15) 35%, transparent 55%)",
          }}
        />
      </div>

      {/* Text block - constrained to the left/empty image zone so the people
          side of the original photo stays unobstructed */}
      <div
        ref={heroTextRef}
        className="absolute z-10 top-1/2 -translate-y-1/2"
        style={{
          left: "clamp(16px, 3%, 60px)",
          width: "clamp(180px, 26%, 340px)",
          maxWidth: "340px",
        }}
      >
        <p
          className="text-[10px] sm:text-xs lg:text-sm italic text-ivory/90 font-medium uppercase tracking-[0.14em]"
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.35)" }}
        >
          Built on Military Heritage.
        </p>

        <h1
          className="mt-2 sm:mt-3 font-display font-black uppercase leading-[0.78] tracking-[-0.045em] text-ivory text-[clamp(2.5rem,4.75vw,4.9rem)] sm:text-[clamp(2.85rem,4.9vw,5.15rem)] lg:text-[clamp(3.35rem,4.55vw,5.25rem)]"
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.4)" }}
        >
          Honor. Discipline. Experience. The KESS Security Team
        </h1>

        <p
          className="mt-2 sm:mt-3 text-[11px] sm:text-sm lg:text-[15px] text-ivory/85 leading-[1.42] font-medium"
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.35)" }}
        >
          Providing Elite Corporate Protection with Military Precision.
        </p>

        <div className="mt-3 sm:mt-4 flex flex-col gap-2">
          <Link
            href="/about#leadership"
            className="bg-charcoal text-ivory border-2 border-gold/80 px-5 sm:px-6 py-3 sm:py-3.5 text-[10px] sm:text-xs lg:text-sm uppercase tracking-[0.16em] font-black rounded-sm hover:bg-gold hover:text-charcoal transition-all duration-300 text-center w-fit shadow-[0_0_0_1px_rgba(255,255,255,0.4),0_4px_14px_rgba(0,0,0,0.6)]"
          >
            Meet Our Leaders
          </Link>
          <Link
            href="/about"
            className="text-ivory text-[10px] sm:text-xs lg:text-sm uppercase tracking-[0.16em] underline underline-offset-6 decoration-gold font-black w-fit py-1 px-1 hover:text-gold transition-colors duration-300"
          >
            Our Story
          </Link>
        </div>

        <div className="mt-3 sm:mt-4">
          <span className="bg-gold text-charcoal text-[9px] sm:text-[10px] lg:text-xs font-black uppercase tracking-[0.14em] px-3 sm:px-4 py-1.5 sm:py-2 rounded-sm inline-block shadow-[0_2px_8px_rgba(0,0,0,0.18)] border border-charcoal/30">
            Built by Ex-Servicemen
          </span>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="absolute bottom-0 left-0 right-0 bg-ivory border-t border-border py-2 sm:py-3 px-4 sm:px-6 lg:px-10 flex items-center justify-between">
        <span className="relative inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6">
          <Image
            src="/images/kess-shield.png.png"
            alt=""
            width={24}
            height={24}
            className="object-contain"
            style={{ width: "auto", height: "auto" }}
          />
        </span>
        <span className="text-charcoal-light text-[9px] sm:text-[11px] lg:text-xs uppercase tracking-[0.15em]">
          Trust the Unit. Established for Excellence.
        </span>
      </div>
    </section>
  );
}