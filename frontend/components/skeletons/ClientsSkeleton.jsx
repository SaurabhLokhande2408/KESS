import { SkeletonBlock, SkeletonLines } from "./SkeletonPrimitives";

export default function ClientsSkeleton() {
  return (
    <div className="clients-page min-h-screen overflow-hidden bg-[#F7F5EF] text-[#20241D]">
      <section className="relative flex min-h-[calc(100vh-54px)] items-center overflow-hidden px-5 sm:px-8">
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-54px)] w-full max-w-7xl items-center">
          <div className="w-full py-24 sm:py-28">
            <SkeletonBlock className="mb-8 h-4 w-48" />
            <div className="flex max-w-[1080px] flex-col gap-3">
              <SkeletonBlock className="h-12 w-[78%] sm:h-20 lg:h-28" />
              <SkeletonBlock className="h-12 w-[66%] sm:h-20 lg:h-28" />
            </div>
            <div className="mt-12 grid max-w-5xl gap-10 lg:mt-16 lg:grid-cols-[1fr_auto] lg:items-end">
              <SkeletonLines count={3} widths={["w-full", "w-[92%]", "w-[70%]"]} lineClassName="h-4 sm:h-5" className="max-w-2xl" />
              <div className="flex items-center gap-5">
                <SkeletonBlock className="h-14 w-px bg-gold" />
                <div className="space-y-3"><SkeletonBlock className="h-10 w-16" /><SkeletonBlock className="h-3 w-32" /></div>
              </div>
            </div>
            <div className="mt-16 flex items-center gap-5">
              <SkeletonBlock className="h-14 w-[2px] bg-gold" />
              <SkeletonBlock className="h-4 w-52" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#20251E] px-5 py-10 sm:px-8 lg:py-12">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-8 gap-y-3 sm:justify-between">
          {[0, 1, 2].map((index) => <SkeletonBlock key={index} dark className="h-4 w-28" />)}
          <SkeletonBlock dark className="hidden h-4 w-20 sm:block" />
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 border-b border-[#20241D]/10 pb-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div className="space-y-5"><SkeletonBlock className="h-4 w-56" /><SkeletonBlock className="h-9 w-[92%] sm:h-12 lg:h-14" /></div>
          </div>
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 17 }, (_, index) => (
              <article key={index} className="flex min-h-[210px] flex-col border-b border-r border-[#20241D]/10 p-[18px_12px] sm:min-h-[250px] sm:p-6 sm:px-7">
                <div className="flex min-h-[135px] flex-1 items-center justify-center sm:min-h-[165px]">
                  <SkeletonBlock className="h-[74px] w-[88%] sm:h-[96px] sm:w-[90%]" />
                </div>
                <SkeletonBlock className="mx-auto mt-2 h-3 w-3/4" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#20251E] px-5 py-24 text-[#F7F5EF] sm:px-8 sm:py-32">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="w-full max-w-xl space-y-5 lg:w-1/2">
            <SkeletonBlock dark className="h-3 w-32" />
            <SkeletonLines count={2} widths={["w-full", "w-[83%]"]} lineClassName="h-7 sm:h-8" dark />
          </div>
          <div className="flex w-full flex-col items-start border-[#F7F5EF]/10 lg:w-1/2 lg:border-l lg:pl-12">
            <SkeletonLines count={3} widths={["w-full", "w-[94%]", "w-[70%]"]} lineClassName="h-3" className="max-w-md" dark />
            <SkeletonBlock dark className="mt-6 h-4 w-44" />
          </div>
        </div>
      </section>
    </div>
  );
}
