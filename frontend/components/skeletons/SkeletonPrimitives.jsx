export function SkeletonBlock({ className = "", dark = false, style }) {
  return (
    <span
      aria-hidden="true"
      className={`skeleton-block${dark ? " skeleton-block-dark" : ""} ${className}`}
      style={style}
    />
  );
}

export function SkeletonLines({
  count = 2,
  widths = [],
  className = "",
  lineClassName = "h-3",
  dark = false,
}) {
  return (
    <span aria-hidden="true" className={`flex flex-col gap-3 ${className}`}>
      {Array.from({ length: count }, (_, index) => (
        <SkeletonBlock
          key={index}
          dark={dark}
          className={`${lineClassName} ${widths[index] || (index === count - 1 ? "w-3/4" : "w-full")}`}
        />
      ))}
    </span>
  );
}

export function SkeletonPageHero({
  titleWidths = ["w-11/12", "w-3/4"],
  descriptionLines = 3,
  ctaWidths = [],
}) {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden border-b border-gold/30 bg-black sm:min-h-[90vh]">
      <SkeletonBlock
        dark
        className="absolute inset-y-0 right-0 h-full w-[125%] opacity-60 sm:w-[95%] lg:w-[85%] xl:w-[80%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20 sm:hidden" />
      <div className="absolute inset-y-0 left-0 hidden w-full bg-gradient-to-r from-black from-30% via-black/70 to-transparent sm:block md:w-[65%] lg:w-[50%] xl:w-[45%]" />
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 py-20 sm:px-10 sm:py-24 lg:px-16">
        <div className="max-w-[550px] xl:max-w-[620px]">
          <SkeletonBlock className="mb-5 h-3 w-36 sm:w-44" />
          <div className="flex flex-col gap-3">
            {titleWidths.map((width, index) => (
              <SkeletonBlock
                key={`${width}-${index}`}
                className={`h-8 sm:h-12 lg:h-14 ${width}`}
              />
            ))}
          </div>
          <SkeletonLines
            count={descriptionLines}
            widths={["w-full", "w-[92%]", "w-[76%]"]}
            lineClassName="h-3.5 sm:h-4"
            className="mt-8 max-w-lg"
            dark
          />
          {ctaWidths.length > 0 && (
            <div className="mt-10 flex flex-wrap items-center gap-6 sm:gap-8">
              {ctaWidths.map((width, index) => (
                <SkeletonBlock
                  key={`${width}-${index}`}
                  dark
                  className={`h-12 ${width}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
