import Link from "next/link";

/* =========================================================
   PAGE HERO (Image Shifted Right to Reveal Logo - Dark Mode)
========================================================= */

export default function PageHero({
  eyebrow,
  title,
  titleLines,
  description,
  primaryCta,
  secondaryCta,
  image = "/images/images_used/hero_bg.png",
  imageAlt = "KESS security team",
}) {
  const lines = titleLines || (title ? [title] : []);

  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden border-b border-gold/30 bg-black sm:min-h-[90vh]">

      {/* BACKGROUND IMAGE & GRADIENT OVERLAY */}
      {image && (
        <>
          {/*
            Shifted Image:
            By setting it to right-0 and giving it a percentage width (e.g., xl:w-[80%]),
            we physically pull the image to the right. The left side becomes solid black,
            which pulls the logo out from under the text.
          */}
          <img
            src={image}
            alt={imageAlt}
            className="absolute inset-y-0 right-0 h-full w-full object-cover object-right sm:w-[95%] sm:object-left lg:w-[85%] xl:w-[80%]"
          />
          {/*
            Keep a lighter mobile overlay so the background remains visible,
            while still preserving contrast for the hero text.
          */}
          <div className="absolute inset-0 bg-black/60 sm:hidden" />
          <div className="absolute inset-y-0 left-0 hidden w-full bg-gradient-to-r from-black from-30% via-black/70 to-transparent sm:block md:w-[65%] lg:w-[50%] xl:w-[45%]" />
        </>
      )}

      {/* DECORATIVE ELEMENTS */}
      <CurveLines
        position="right"
        variant="rising"
        opacity={0.3}
        className="pointer-events-none absolute right-[-190px] top-[-70px] z-10 hidden h-[380px] w-[700px] lg:block"
      />

      {/* Extra empty-space accents: subtle circles, curves, and shield details */}
      <div className="pointer-events-none absolute inset-3 z-20 border border-[#b8902d] shadow-[0_0_0_1px_rgba(0,0,0,0.35)] sm:inset-5" />
      <div className="pointer-events-none absolute -left-6 top-1/3 z-20 hidden h-16 w-16 rotate-45 border border-[#b8902d]/80 bg-[#b8902d]/10 sm:block" />
      <div className="pointer-events-none absolute bottom-6 right-1/2 z-20 hidden h-8 w-8 rotate-45 bg-[#b8902d]/40 lg:block" />

      <div className="pointer-events-none absolute left-4 top-5 z-20 hidden h-10 w-10 items-center justify-center rounded-full border border-[#b8902d]/80 bg-[#b8902d]/10 sm:flex lg:left-8 lg:top-8">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#b8902d]" fill="none" stroke="currentColor" strokeWidth="1.7">
          <path d="M12 2.75l6.75 2.8v5.7c0 4.35-2.9 8.4-6.75 10.1-3.85-1.7-6.75-5.75-6.75-10.1v-5.7L12 2.75z" />
          <path d="M8.5 12.3l2.1 2.2 4.9-5.2" />
        </svg>
      </div>

      <div className="pointer-events-none absolute right-6 top-10 z-20 hidden h-28 w-28 rounded-full border border-[#b8902d]/75 sm:block lg:right-12" />
      <div className="pointer-events-none absolute right-14 top-20 z-20 hidden h-16 w-16 rounded-full border border-[#b8902d]/75 sm:block" />

      <div className="pointer-events-none absolute -right-10 bottom-8 z-20 hidden h-24 w-24 rotate-45 rounded-[30%] border border-[#b8902d]/75 sm:block" />
      <CurveLines
        position="left"
        variant="soft"
        opacity={0.24}
        className="pointer-events-none absolute -left-16 top-12 z-10 hidden h-40 w-52 rotate-[8deg] sm:block"
      />

      {/* HERO CONTENT */}
      <div className="relative z-30 mx-auto w-full max-w-[1600px] px-5 py-20 sm:px-10 sm:py-24 lg:px-16">
        <div className="max-w-[550px] xl:max-w-[620px]">
          {eyebrow && (
            <p className="mb-5 font-display text-[15px] font-bold italic tracking-[0.08em] text-white sm:text-base">
              {eyebrow}
            </p>
          )}

          <h1 className="font-display text-[2rem] font-semibold uppercase leading-[0.95] tracking-[-0.025em] text-white sm:text-5xl lg:text-[3.6rem]">
            {lines.map((line, i) => (
              <span key={i} className="block">
                {line}
                {i === lines.length - 1 && (
                  <span className="ml-2 inline-block h-2 w-2 align-baseline rounded-full bg-gold" />
                )}
              </span>
            ))}
          </h1>

          {description && (
            <p className="mt-8 text-[17px] font-medium leading-8 text-white/90 sm:text-lg">
              {description}
            </p>
          )}

          {(primaryCta || secondaryCta) && (
            <div className="mt-10 flex flex-wrap items-center gap-6 sm:gap-8">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="bg-white px-8 py-4 text-[15px] font-bold uppercase tracking-[0.15em] text-black shadow-lg transition-all hover:-translate-y-1 hover:bg-gold hover:text-black hover:shadow-xl"
                >
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="text-[15px] font-bold uppercase tracking-[0.15em] text-white underline decoration-gold decoration-2 underline-offset-8 transition-colors hover:text-gold"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CURVED LINE DECORATION (used internally by PageHero)
========================================================= */

function CurveLines({
  className = "",
  flip = false,
  opacity = 0.1,
  variant = "wide",
}) {
  const paths = {
    wide: {
      main: flip
        ? "M-80 240C70 70 170 60 300 145C385 200 445 115 580 15"
        : "M-80 35C70 205 170 215 300 130C385 75 445 160 580 255",

      second: flip
        ? "M-80 265C70 95 170 85 300 170C385 225 445 140 580 40"
        : "M-80 60C70 230 170 240 300 155C385 100 445 185 580 280",

      third: flip
        ? "M-80 290C70 120 170 110 300 195C385 250 445 165 580 65"
        : "M-80 85C70 255 170 265 300 180C385 125 445 210 580 305",
    },

    soft: {
      main: flip
        ? "M-100 210C40 95 145 75 265 130C380 182 445 135 590 45"
        : "M-100 50C40 165 145 185 265 130C380 78 445 125 590 215",

      second: flip
        ? "M-100 235C40 120 145 100 265 155C380 207 445 160 590 70"
        : "M-100 75C40 190 145 210 265 155C380 103 445 150 590 240",
    },

    tight: {
      main: flip
        ? "M-50 190C75 85 155 80 255 130C350 178 425 135 535 55"
        : "M-50 55C75 160 155 165 255 115C350 67 425 110 535 190",

      second: flip
        ? "M-50 215C75 110 155 105 255 155C350 203 425 160 535 80"
        : "M-50 80C75 185 155 190 255 140C350 92 425 135 535 215",
    },
  };

  const selected = paths[variant] || paths.wide;

  return (
    <svg
      viewBox="0 0 500 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none absolute select-none ${className}`}
      aria-hidden="true"
      style={{
        opacity,
      }}
    >
      <path
        d={selected.main}
        stroke="#111111"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />

      <path
        d={selected.second}
        stroke="#111111"
        strokeWidth="1"
        opacity="0.62"
        vectorEffect="non-scaling-stroke"
      />

      {selected.third && (
        <path
          d={selected.third}
          stroke="#111111"
          strokeWidth="1"
          opacity="0.32"
          vectorEffect="non-scaling-stroke"
        />
      )}
    </svg>
  );
}