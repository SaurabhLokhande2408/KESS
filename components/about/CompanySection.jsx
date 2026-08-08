export default function CompanySection({ company, descriptionParagraphs }) {
  return (
    <section className="bg-stone-100 px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-200 shadow-[0_25px_60px_rgba(0,0,0,0.08)]">
          <img
            src="/images/guards-hero.jpg.jpeg"
            alt="Security guards standing together"
            className="h-[420px] w-full object-cover sm:h-[520px]"
          />
        </div>

        <div>
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.38em] text-amber-600">
            About us
          </p>
          <h2 className="mb-6 text-4xl font-black uppercase leading-none tracking-tight text-stone-900 sm:text-5xl">
            <span className="text-amber-600">About</span> the company
          </h2>

          <div className="space-y-6 text-lg leading-8 text-stone-700">
            {descriptionParagraphs.map((paragraph, index) => (
              <p key={index} className="font-serif text-stone-700/90">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
