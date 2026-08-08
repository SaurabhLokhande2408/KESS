export default function VisionSection({ vision }) {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div className="order-2 overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-200 shadow-[0_25px_60px_rgba(0,0,0,0.08)] lg:order-1">
          <img
            src="/images/guards-hero.jpg.jpeg"
            alt="KESS security operations team"
            className="h-[360px] w-full object-cover sm:h-[450px]"
          />
        </div>

        <div className="order-1 lg:order-2">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.38em] text-amber-600">
            Forward looking
          </p>
          <h2 className="mb-6 text-4xl font-black uppercase leading-none tracking-tight text-stone-900 sm:text-5xl">
            Our <span className="text-amber-600">vision</span>
          </h2>

          <p className="text-lg leading-8 text-stone-700 sm:text-xl">
            {vision}
          </p>
        </div>
      </div>
    </section>
  );
}
