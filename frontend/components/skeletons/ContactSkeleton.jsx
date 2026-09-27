import { SkeletonBlock, SkeletonLines, SkeletonPageHero } from "./SkeletonPrimitives";

function ContactField() {
  return (
    <div className="space-y-2">
      <SkeletonBlock className="h-3 w-28" />
      <SkeletonBlock className="h-[50px] w-full border border-border bg-ivory" />
    </div>
  );
}

export default function ContactSkeleton() {
  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      <SkeletonPageHero titleWidths={["w-[88%]", "w-[72%]", "w-[54%]"]} descriptionLines={2} />

      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative border border-border bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="absolute left-0 top-0 h-1 w-16 bg-gold" />
            <div className="mb-9">
              <SkeletonBlock className="mb-4 h-10 w-36" />
              <SkeletonBlock className="h-8 w-3/4 sm:h-9" />
              <SkeletonLines count={2} widths={["w-full", "w-[76%]"]} lineClassName="h-3" className="mt-4 max-w-lg" />
            </div>
            <div className="space-y-6">
              {[0, 1, 2, 3].map((index) => <ContactField key={index} />)}
              <SkeletonBlock className="h-12 w-full bg-charcoal" />
              <SkeletonBlock className="mx-auto h-3 w-[80%]" />
            </div>
          </div>

          <div className="space-y-10 lg:pt-4">
            <div>
              <SkeletonBlock className="h-3 w-12" />
              <SkeletonBlock className="mt-4 h-9 w-64 max-w-full" />
              <SkeletonLines count={3} widths={["w-full", "w-[93%]", "w-[68%]"]} lineClassName="h-3" className="mt-5 max-w-md" />
            </div>
            {[0, 1, 2, 3, 4].map((index) => (
              <div key={index} className={`flex gap-4 ${index === 0 ? "border-t border-border pt-6" : ""}`}>
                <SkeletonBlock className="h-10 w-10 shrink-0 border border-border bg-white" />
                <div className="flex-1 space-y-3">
                  <SkeletonBlock className="h-3 w-28" />
                  <SkeletonLines count={index === 1 ? 2 : 1} widths={["w-[88%]", "w-[66%]"]} lineClassName="h-3" />
                </div>
              </div>
            ))}
            <SkeletonBlock className="hidden h-px w-56 bg-gold sm:block" />
          </div>
        </div>
      </section>
    </div>
  );
}
