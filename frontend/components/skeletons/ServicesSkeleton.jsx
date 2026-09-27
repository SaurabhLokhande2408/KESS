import { SkeletonBlock, SkeletonLines } from "./SkeletonPrimitives";

function ServiceRow({ index }) {
  const reversed = index % 2 !== 0;

  return (
    <article className="group border-b border-border">
      <div className={`mx-auto grid max-w-7xl lg:grid-cols-2 ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <SkeletonBlock className="h-[270px] w-full sm:h-[320px] lg:h-[340px]" />
        <div className="flex min-h-[340px] flex-col justify-between px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-10">
          <div>
            <SkeletonBlock className="h-14 w-14 sm:h-16 sm:w-16" />
            <SkeletonLines count={2} widths={["w-[88%]", "w-[62%]"]} lineClassName="mt-3 h-8 sm:h-10" />
            <SkeletonBlock className="mt-5 h-px w-9 bg-gold" />
            <SkeletonLines count={3} widths={["w-full", "w-[92%]", "w-[70%]"]} lineClassName="h-3.5 sm:h-4" className="mt-5 max-w-xl" />
          </div>
          <div className="mt-7 flex items-center justify-end border-t border-border pt-4">
            <SkeletonBlock className="h-10 w-28" />
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ServicesSkeleton() {
  return (
    <div className="min-h-screen overflow-hidden bg-ivory text-charcoal">
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-24 lg:pb-24 lg:pt-28">
          <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
            <div className="space-y-6">
              <SkeletonBlock className="h-4 w-40" />
              <SkeletonLines count={3} widths={["w-[75%]", "w-[88%]", "w-[60%]"]} lineClassName="h-10 sm:h-14 lg:h-[4.5rem]" />
            </div>
            <div className="max-w-lg lg:pb-1">
              <SkeletonBlock className="mb-5 h-px w-10 bg-gold" />
              <SkeletonLines count={4} widths={["w-full", "w-[96%]", "w-[84%]", "w-[58%]"]} lineClassName="h-3.5 sm:h-4" />
              <SkeletonBlock className="mt-6 h-4 w-48" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[0.3fr_1fr] lg:gap-16">
          <SkeletonBlock className="h-4 w-48" />
          <div><SkeletonLines count={2} widths={["w-full", "w-[78%]"]} lineClassName="h-9 sm:h-12" /><SkeletonLines count={3} widths={["w-full", "w-[96%]", "w-[70%]"]} lineClassName="h-3.5" className="mt-5 max-w-2xl" /></div>
        </div>
      </section>

      <section className="border-t border-border">
        {Array.from({ length: 6 }, (_, index) => <ServiceRow key={index} index={index} />)}
      </section>

      <section className="px-5 py-8 sm:px-8 sm:py-10 lg:py-12">
        <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[0.6fr_1.4fr] lg:gap-12">
          <div><SkeletonBlock className="h-4 w-52" /><SkeletonLines count={3} widths={["w-[82%]", "w-[66%]", "w-[73%]"]} lineClassName="mt-4 h-8 sm:h-10" /><SkeletonLines count={3} lineClassName="h-3.5" className="mt-4 max-w-md" /></div>
          <div className="grid grid-cols-1 border-t border-border sm:grid-cols-2">
            {Array.from({ length: 12 }, (_, index) => <div key={index} className="flex items-center gap-3 border-b border-r border-border px-4 py-3"><SkeletonBlock className="h-3 w-5 shrink-0" /><SkeletonBlock className="h-4 w-3/4" /></div>)}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-[#eeeadf] px-5 py-12 sm:px-8 sm:py-14 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-9 lg:grid-cols-[0.6fr_1.4fr] lg:gap-16">
          <div><SkeletonLines count={2} widths={["w-[85%]", "w-[70%]"]} lineClassName="h-9 sm:h-12" /><SkeletonLines count={2} lineClassName="h-3.5" className="mt-5 max-w-md" /></div>
          <div className="border-t border-charcoal/15">
            {Array.from({ length: 7 }, (_, index) => <div key={index} className="grid grid-cols-[36px_1fr] gap-4 border-b border-charcoal/15 py-3.5 sm:grid-cols-[45px_1fr]"><SkeletonBlock className="h-3 w-5" /><SkeletonBlock className="h-4 w-[84%]" /></div>)}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <SkeletonBlock className="mb-8 h-9 w-[80%] sm:h-12" />
          <div className="grid border-t border-border sm:grid-cols-2">
            {Array.from({ length: 7 }, (_, index) => <div key={index} className="flex items-center justify-between border-b border-border py-4 pr-4 sm:pr-7"><div className="flex items-center gap-5"><SkeletonBlock className="h-3 w-5" /><SkeletonBlock className="h-5 w-52 max-w-[65vw]" /></div><SkeletonBlock className="h-4 w-4" /></div>)}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-charcoal text-ivory">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 sm:py-14 lg:grid-cols-[1fr_auto] lg:items-end lg:py-16">
          <div><SkeletonBlock dark className="h-4 w-36" /><SkeletonLines count={2} widths={["w-full", "w-[72%]"]} lineClassName="mt-5 h-10 sm:h-14 lg:h-16" dark /><SkeletonLines count={3} lineClassName="h-3.5" className="mt-6 max-w-xl" dark /></div>
          <SkeletonBlock dark className="h-5 w-40" />
        </div>
      </section>
    </div>
  );
}
