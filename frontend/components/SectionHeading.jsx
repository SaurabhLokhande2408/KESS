export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl mb-10 ${alignClass}`}>
      {eyebrow && (
        <p className="text-gold uppercase tracking-[0.3em] text-[11px] font-medium mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-charcoal">
        {title}
      </h2>
      {description && (
        <p className="text-charcoal-light text-base sm:text-[17px] mt-4 leading-8">
          {description}
        </p>
      )}
    </div>
  );
}
