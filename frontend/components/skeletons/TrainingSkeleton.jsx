import { SkeletonBlock, SkeletonLines } from "./SkeletonPrimitives";

export default function TrainingSkeleton() {
  return (
    <div className="training-page min-h-screen overflow-hidden bg-[#F7F5EF] text-[#20241D]">
      <section className="relative flex min-h-[calc(100vh-54px)] items-center overflow-hidden px-5 sm:px-8">
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-54px)] max-w-7xl items-center">
          <div className="w-full py-24 sm:py-28">
            <SkeletonBlock className="mb-8 h-4 w-56" />
            <SkeletonLines count={3} widths={["w-[75%]", "w-[70%]", "w-[62%]"]} lineClassName="h-12 sm:h-20 lg:h-28" />
            <div className="mt-12 grid max-w-5xl gap-10 sm:mt-16 lg:grid-cols-[1fr_auto] lg:items-end">
              <SkeletonLines count={4} widths={["w-full", "w-[96%]", "w-[92%]", "w-[72%]"]} lineClassName="h-3.5 sm:h-4" className="max-w-2xl" />
              <div className="flex items-center gap-5"><SkeletonBlock className="h-14 w-px bg-gold" /><div className="space-y-3"><SkeletonBlock className="h-9 w-24" /><SkeletonBlock className="h-3 w-40" /></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#20251E] px-5 py-12 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
          <SkeletonLines count={4} widths={["w-full", "w-[94%]", "w-[88%]", "w-[72%]"]} lineClassName="h-3" className="max-w-2xl" dark />
          <SkeletonBlock dark className="h-3 w-64 max-w-full" />
        </div>
      </section>

      <section className="px-5 py-10 sm:px-8 sm:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 border-b border-[#20241D]/10 pb-6 md:flex-row md:items-end">
            <SkeletonBlock className="h-9 w-[72%] sm:h-12" />
            <SkeletonLines count={3} widths={["w-full", "w-[90%]", "w-[70%]"]} lineClassName="h-3" className="max-w-md" />
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 7 }, (_, index) => <div key={index} className="flex min-h-[110px] flex-col justify-center border border-[#20241D]/10 bg-white/50 p-6 shadow-sm"><SkeletonBlock className="h-4 w-[82%]" /></div>)}
          </div>
        </div>
      </section>

      <section className="bg-[#20251E]/[0.04] px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SkeletonBlock className="mb-12 h-9 w-64 max-w-full sm:h-12" />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {[0, 1, 2].map((index) => <SkeletonBlock key={index} className="h-[400px] w-full rounded-3xl border border-[#20241D]/15 bg-white shadow-md sm:h-[460px]" />)}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 border-b border-[#20241D]/10 pb-8 md:flex-row md:items-end">
            <SkeletonBlock className="h-10 w-[82%] sm:h-12" />
            <SkeletonLines count={3} widths={["w-full", "w-[92%]", "w-[68%]"]} lineClassName="h-3" className="max-w-md" />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 5 }, (_, index) => <div key={index} className="flex min-h-[130px] items-start gap-4 rounded-2xl border border-[#20241D]/10 bg-white/50 p-6 sm:p-7"><SkeletonBlock className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-gold" /><div className="flex-1 space-y-4"><SkeletonBlock className="h-5 w-3/4" /><SkeletonLines count={3} widths={["w-full", "w-[92%]", "w-[68%]"]} lineClassName="h-3" /></div></div>)}
          </div>
        </div>
      </section>
    </div>
  );
}
