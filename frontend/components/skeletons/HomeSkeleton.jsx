import { SkeletonBlock, SkeletonLines, SkeletonPageHero } from "./SkeletonPrimitives";

function StatSkeleton() {
  return (
    <section className="border-b border-border bg-ivory">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-6 text-center sm:grid-cols-4 sm:px-8 sm:py-8">
        {Array.from({ length: 4 }, (_, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <SkeletonBlock className="h-8 w-20 sm:h-9" />
            <SkeletonBlock className="h-3 w-28" />
          </div>
        ))}
      </div>
    </section>
  );
}

function MarqueeSkeleton() {
  return (
    <section className="overflow-hidden border-t border-border bg-ivory py-8">
      <div className="mx-auto mb-6 h-4 w-56 max-w-[70%] skeleton-block" />
      <div className="relative flex w-full overflow-hidden">
        <div className="animate-marquee flex w-max whitespace-nowrap">
          {[0, 1].map((track) => (
            <div key={track} className="flex shrink-0 gap-12">
              {Array.from({ length: 17 }, (_, index) => (
                <SkeletonBlock
                  key={index}
                  className="h-[89px] w-[120px] shrink-0 sm:h-[105px] sm:w-[150px]"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeServicesSkeleton() {
  return (
    <section className="bg-ivory px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:gap-20">
          <div>
            <SkeletonBlock className="mb-6 h-3 w-32" />
            <SkeletonLines count={2} widths={["w-[94%]", "w-[72%]"]} lineClassName="h-10 sm:h-14 lg:h-16" />
          </div>
          <div className="flex flex-col justify-end gap-5 lg:pb-2">
            <SkeletonLines count={3} widths={["w-full", "w-[93%]", "w-[72%]"]} lineClassName="h-3.5" />
            <SkeletonBlock className="mt-4 h-4 w-40" />
          </div>
        </div>
        <div className="my-12 h-px bg-border sm:my-16 lg:my-20" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }, (_, index) => (
            <div key={index} className="flex min-h-[390px] flex-col bg-charcoal px-7 py-7 sm:min-h-[410px] lg:min-h-[390px] lg:px-8 lg:py-8">
              <SkeletonBlock dark className="ml-auto h-11 w-11 rounded-full" />
              <SkeletonBlock dark className="mt-7 h-px w-full" />
              <div className="mt-auto space-y-5">
                <SkeletonLines count={2} widths={["w-[88%]", "w-[60%]"]} lineClassName="h-7" dark />
                <SkeletonLines count={3} widths={["w-full", "w-[90%]", "w-[70%]"]} lineClassName="h-3.5" dark />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 h-px bg-border" />
      </div>
    </section>
  );
}

function TrustSkeleton() {
  return (
    <section className="bg-[#faf8f5] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-5">
          <SkeletonBlock className="h-3 w-64 max-w-full" />
          <SkeletonBlock className="h-9 w-[min(34rem,90%)] sm:h-12" />
          <SkeletonLines count={3} widths={["w-full", "w-[94%]", "w-[72%]"]} lineClassName="h-3.5" className="w-full max-w-3xl items-center" />
        </div>
        <div className="mt-14 grid grid-cols-1 divide-y md:mt-20 md:grid-cols-2 md:divide-y-0">
          {Array.from({ length: 8 }, (_, index) => (
            <div key={index} className="flex gap-6 border-t border-black/10 px-4 py-8 sm:px-6 md:py-10">
              <SkeletonBlock className="h-[90px] w-[90px] shrink-0 rounded-full md:h-[104px] md:w-[104px]" />
              <div className="flex-1 space-y-4 pt-1">
                <SkeletonBlock className="h-6 w-3/4" />
                <SkeletonBlock className="h-px w-10" />
                <SkeletonLines count={3} widths={["w-full", "w-[94%]", "w-[65%]"]} lineClassName="h-3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DifferentiatorSkeleton() {
  return (
    <section className="border-t border-white/10 bg-charcoal text-ivory">
      <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SkeletonBlock dark className="h-10 w-[70%] sm:h-14" />
            <SkeletonBlock dark className="mt-6 h-6 w-[58%]" />
            <SkeletonBlock dark className="mt-3 h-3 w-52" />
            <SkeletonLines count={4} widths={["w-full", "w-[95%]", "w-[91%]", "w-[66%]"]} lineClassName="h-3.5" className="mt-6 max-w-xl" dark />
            <div className="mt-7 grid grid-cols-1 gap-8 border-t border-white/10 pt-6 sm:grid-cols-2">
              {[0, 1].map((item) => (
                <div key={item} className="flex gap-4 border-b border-white/10 pb-4 sm:border-b-0 sm:pb-0">
                  <SkeletonBlock dark className="h-11 w-11 shrink-0 rounded-full" />
                  <div className="flex-1 space-y-3">
                    <SkeletonBlock dark className="h-4 w-3/4" />
                    <SkeletonLines count={2} widths={["w-full", "w-[75%]"]} lineClassName="h-3" dark />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mx-auto w-full max-w-[28rem] lg:col-span-5 lg:max-w-[32rem]">
            <SkeletonBlock dark className="aspect-[4/5] w-full" />
          </div>
        </div>
        <div className="mt-16 border-b border-white/10 pb-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-4"><SkeletonBlock dark className="h-3 w-44" /><SkeletonBlock dark className="h-8 w-72 max-w-full" /></div>
            <SkeletonLines count={2} widths={["w-full", "w-[72%]"]} lineClassName="h-3" className="w-full max-w-sm" dark />
          </div>
          <div className="mt-10 grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }, (_, index) => <div key={index} className="space-y-4 bg-charcoal p-6 sm:p-7"><SkeletonBlock dark className="h-12 w-12 rounded-full" /><SkeletonBlock dark className="h-5 w-3/4" /><SkeletonLines count={3} lineClassName="h-3" dark /></div>)}
          </div>
        </div>
        <div className="mt-16 pb-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div className="space-y-4"><SkeletonBlock dark className="h-3 w-40" /><SkeletonBlock dark className="h-8 w-80 max-w-full" /></div><SkeletonLines count={2} widths={["w-full", "w-[75%]"]} lineClassName="h-3" className="w-full max-w-[30rem]" dark /></div>
          <div className="mt-10 grid grid-cols-2 gap-px border border-white/10 bg-white/10 sm:grid-cols-3 lg:grid-cols-6">
            {Array.from({ length: 12 }, (_, index) => <div key={index} className="bg-charcoal p-5"><SkeletonBlock dark className="h-5 w-full" /></div>)}
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-12"><SkeletonLines count={2} widths={["w-full", "w-[70%]"]} lineClassName="h-6 sm:h-8" className="max-w-3xl" dark /><SkeletonBlock dark className="mt-6 h-3 w-56" /></div>
      </div>
    </section>
  );
}

export default function HomeSkeleton() {
  return (
    <div className="min-h-screen overflow-hidden bg-ivory text-charcoal">
      <SkeletonPageHero
        titleWidths={["w-[92%]", "w-[74%]"]}
        descriptionLines={3}
        ctaWidths={["w-32", "w-28"]}
      />
      <StatSkeleton />
      <HomeServicesSkeleton />
      <MarqueeSkeleton />
      <TrustSkeleton />
      <DifferentiatorSkeleton />
      <MarqueeSkeleton />
    </div>
  );
}
