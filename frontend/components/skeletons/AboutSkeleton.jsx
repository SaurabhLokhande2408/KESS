import { SkeletonBlock, SkeletonLines, SkeletonPageHero } from "./SkeletonPrimitives";

export default function AboutSkeleton() {
  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      <SkeletonPageHero titleWidths={["w-[92%]", "w-[80%]", "w-[58%]"]} descriptionLines={3} />

      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 sm:grid-cols-2">
          {[0, 1].map((index) => (
            <div key={index} className="border border-border bg-white p-8">
              <SkeletonBlock className="mb-5 h-5 w-32" />
              <SkeletonLines count={5} widths={["w-full", "w-full", "w-[94%]", "w-[84%]", "w-[60%]"]} lineClassName="h-3.5" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-charcoal px-5 py-20 text-ivory sm:px-8 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 max-w-2xl space-y-4">
            <SkeletonBlock dark className="h-3 w-40" />
            <SkeletonBlock dark className="h-9 w-[85%] sm:h-11" />
            <SkeletonLines count={2} widths={["w-full", "w-[70%]"]} lineClassName="h-3" dark />
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {[0, 1].map((index) => (
              <div key={index} className="border border-gold/20 p-7">
                <SkeletonBlock dark className="h-5 w-3/4" />
                <SkeletonBlock dark className="mb-4 mt-3 h-3 w-40" />
                <SkeletonLines count={4} widths={["w-full", "w-[94%]", "w-[85%]", "w-[66%]"]} lineClassName="h-3" dark />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 flex flex-col items-center gap-4">
            <SkeletonBlock className="h-3 w-28" />
            <SkeletonBlock className="h-9 w-[85%] sm:h-11" />
          </div>
          <div className="grid grid-cols-1 gap-6 text-center sm:grid-cols-3">
            {[0, 1, 2].map((index) => (
              <div key={index} className="border border-border bg-white p-6">
                <SkeletonBlock className="mx-auto mb-3 h-3 w-28" />
                <SkeletonBlock className="mx-auto h-5 w-full" />
              </div>
            ))}
          </div>
          <SkeletonBlock className="mx-auto mt-5 h-3 w-[78%]" />
        </div>
      </section>
    </div>
  );
}
