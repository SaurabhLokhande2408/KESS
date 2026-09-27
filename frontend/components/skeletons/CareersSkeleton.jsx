import { SkeletonBlock, SkeletonLines } from "./SkeletonPrimitives";

function FormSlot({ className = "" }) {
  return (
    <div className={`space-y-1.5 ${className}`}>
      <SkeletonBlock className="h-3 w-28" />
      <SkeletonBlock className="h-9 w-full border border-charcoal/20 bg-ivory" />
    </div>
  );
}

export default function CareersSkeleton() {
  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      <section className="border-b border-charcoal/10">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
          <div className="max-w-4xl space-y-6">
            <SkeletonBlock className="h-4 w-48" />
            <SkeletonLines count={2} widths={["w-[78%]", "w-[56%]"]} lineClassName="h-10 sm:h-14 lg:h-16" />
            <SkeletonLines count={2} widths={["w-full", "w-[70%]"]} lineClassName="h-4" className="mt-7 max-w-2xl" />
          </div>
        </div>
      </section>

      <section className="border-b border-charcoal/10 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12">
          <div className="space-y-3">
            <SkeletonBlock className="h-3 w-40" />
            <SkeletonBlock className="h-6 w-80 max-w-full" />
            <SkeletonLines count={2} widths={["w-full", "w-[82%]"]} lineClassName="h-3" className="max-w-3xl" />
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid items-start gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <aside className="lg:sticky lg:top-28">
            <SkeletonBlock className="h-3 w-32" />
            <SkeletonLines count={3} widths={["w-full", "w-[93%]", "w-[78%]"]} lineClassName="h-8 sm:h-10" className="mt-4" />
            <SkeletonLines count={3} widths={["w-full", "w-[95%]", "w-[68%]"]} lineClassName="h-3.5" className="mt-6" />
            <div className="mt-12 border-t border-charcoal/10 pt-8">
              <SkeletonBlock className="mb-5 h-3 w-36" />
              <div className="space-y-6">
                {Array.from({ length: 6 }, (_, index) => (
                  <div key={index} className="flex gap-5 border-b border-charcoal/10 pb-5">
                    <SkeletonBlock className="h-3 w-5 shrink-0" />
                    <SkeletonLines count={2} widths={["w-full", "w-[70%]"]} lineClassName="h-3" className="flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <section className="border border-charcoal/10 bg-white">
            <div className="border-b border-charcoal/10 px-4 py-3 sm:px-6 sm:py-4">
              <SkeletonBlock className="h-3 w-24" />
              <SkeletonBlock className="mt-2 h-7 w-64 max-w-full" />
              <SkeletonBlock className="mt-2 h-3 w-56 max-w-full" />
            </div>
            <div className="space-y-2 px-4 py-4 sm:px-6 sm:py-5">
              <div className="grid gap-2 sm:grid-cols-2"><FormSlot /><FormSlot /></div>
              <div className="grid gap-2 sm:grid-cols-2">
                <div className="space-y-1.5"><SkeletonBlock className="h-3 w-32" /><div className="flex"><SkeletonBlock className="h-9 w-[130px] shrink-0 border border-charcoal/20 bg-ivory max-[640px]:w-[115px]" /><SkeletonBlock className="h-9 flex-1 border border-charcoal/20 bg-ivory" /></div><SkeletonBlock className="h-3 w-[85%]" /></div>
                <FormSlot />
              </div>
              <FormSlot />
              <FormSlot />
              <div className="grid gap-2 sm:grid-cols-2"><FormSlot /><FormSlot /></div>
              <FormSlot />
              <FormSlot />
              <div className="space-y-1.5"><SkeletonBlock className="h-3 w-32" /><SkeletonBlock className="h-[58px] w-full border border-charcoal/20 bg-ivory" /></div>
              <div className="space-y-1.5"><SkeletonBlock className="h-3 w-36" /><SkeletonBlock className="h-[58px] w-full border border-dashed border-charcoal/20 bg-ivory" /><SkeletonBlock className="h-3 w-56" /></div>
              <SkeletonBlock className="h-9 w-full bg-gold" />
              <SkeletonBlock className="mx-auto h-3 w-[86%]" />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
