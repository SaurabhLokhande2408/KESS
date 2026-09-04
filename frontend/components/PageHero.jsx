import Link from "next/link";
import India from "@svg-maps/india";
import CurveLines from "@/components/CurveLines";
/**
 * Split editorial hero — ivory left column, full-bleed photo right.
 *
 * <PageHero
 *   eyebrow="Built on Military Heritage."
 *   titleLines={["Honor. Discipline. Experience.", "The KESS Security Team"]}
 *   description="Providing Elite Corporate Protection with Military Precision."
 *   primaryCta={{ label: "Meet Our Leaders", href: "/about" }}
 *   secondaryCta={{ label: "Our Story", href: "/about#story" }}
 *   image="/images/team.jpg"
 *   badge="Built by Ex-Servicemen"
 * />
 */
export default function PageHero({
  eyebrow,
  title,
  titleLines,
  description,
  primaryCta,
  secondaryCta,
  image,
  imageAlt = "KESS security team",
  badge,
}) {
  const lines = titleLines || (title ? [title] : []);
  const badgeWords = badge ? badge.split(" ") : [];

  return (
    <section className="relative overflow-hidden bg-ivory text-charcoal border-b border-gold/30">
      <CurveLines
        position="right"
        variant="rising"
        opacity={0.7}
        className="right-[-190px] top-[-70px] hidden h-[380px] w-[700px] lg:block"
      />
      {/* decorative gold frame + diamonds */}
      <div className="pointer-events-none absolute inset-3 sm:inset-5 border border-gold shadow-[0_0_0_1px_rgba(0,0,0,0.35)]" />
      <div className="pointer-events-none absolute -left-6 top-1/3 h-16 w-16 rotate-45 border border-gold/50 bg-gold/10 hidden sm:block" />
      <div className="pointer-events-none absolute right-1/2 bottom-6 h-8 w-8 rotate-45 bg-gold/30 hidden lg:block" />

      <div className="relative z-10 mx-auto max-w-7xl grid lg:grid-cols-2 items-stretch">
        {/* LEFT: copy */}
        <div className="px-6 sm:px-12 lg:pl-16 lg:pr-10 py-10 sm:py-14 lg:py-16 flex flex-col justify-center">
          {eyebrow && (
            <p className="font-display italic text-charcoal text-sm sm:text-base tracking-wide mb-4">
              {eyebrow}
            </p>
          )}

          <h1 className="font-display uppercase font-normal leading-[0.95] tracking-tight text-charcoal text-[2rem] sm:text-5xl lg:text-[3.4rem]">
            {lines.map((line, i) => (
              <span key={i} className="block">
                {line}
                {i === lines.length - 1 && (
                  <span className="ml-2 inline-block h-1.5 w-1.5 rounded-full bg-gold align-super" />
                )}
              </span>
            ))}
          </h1>

          {description && (
            <p className="mt-6 max-w-md text-charcoal-light text-base sm:text-lg leading-8">
              {description}
            </p>
          )}

          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap items-center gap-6">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="bg-charcoal text-ivory px-7 py-3.5 uppercase tracking-[0.15em] text-xs font-semibold hover:bg-gold hover:text-charcoal transition-colors"
                >
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="uppercase tracking-[0.15em] text-xs font-medium text-charcoal-light underline underline-offset-4 decoration-gold hover:text-gold transition-colors"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}

          {badge && (
            <div className="mt-10 flex items-center gap-4">
              <svg
                viewBox={India.viewBox}
                className="h-16 w-14 text-charcoal/40"
                fill="currentColor"
                stroke="none"
                aria-hidden="true"
              >
                {India.locations.map((state) => (
                  <path key={state.id} d={state.path} />
                ))}
              </svg>
              <span className="relative inline-block border-2 border-gold bg-gold/15 px-5 py-2 text-center uppercase tracking-[0.12em] text-[11px] font-semibold text-charcoal leading-tight">
                {badgeWords.length > 2 ? (
                  <>
                    {badgeWords.slice(0, -1).join(" ")}
                    <br />
                    {badgeWords.slice(-1)}
                  </>
                ) : (
                  badge
                )}
              </span>
            </div>
          )}
        </div>

        {/* RIGHT: image */}
  <div className="relative min-h-[318px] sm:min-h-[420px] lg:min-h-[600px]">
  {image ? (
    <img
      src={image}
      alt={imageAlt}
      className="absolute top-[25px] left-[5px] right-[5px] bottom-[15px] h-[calc(100%-40px)] w-[calc(100%-0px)] object-cover object-center"
    />
  ) : (
    <div className="absolute inset-0 bg-charcoal" />
  )}

  {/* soft blend into the ivory column */}
  <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ivory to-transparent hidden lg:block" />
  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-ivory/80 to-transparent lg:hidden" />
</div>
      </div>
    </section>
  );
}