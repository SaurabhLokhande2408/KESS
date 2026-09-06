export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl mb-12 ${alignClass}`}>
      {eyebrow && (
        <p className="text-gold uppercase tracking-[0.28em] text-xs font-semibold mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.04] text-charcoal">
        {title}
      </h2>
      {description && (
        <p className="text-charcoal-light text-base sm:text-[17px] mt-5 leading-8">
          {description}
        </p>
      )}
    </div>
  );
}
