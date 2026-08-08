export default function HeroSection({ company, founder, founderCredential }) {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <div className="mb-6 flex justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-amber-500/60 bg-amber-50 shadow-[0_0_30px_rgba(212,175,55,0.18)] sm:h-28 sm:w-28">
            <img
              src="/images/kess-shield.png.png"
              alt="KESS emblem"
              className="h-16 w-16 object-contain sm:h-20 sm:w-20"
            />
          </div>
        </div>

        <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-amber-500/40 bg-amber-50 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-amber-700">
          <span className="h-2 w-2 rounded-full bg-amber-500" />
          Trusted Protection Since {company.yearsInBusiness}
        </div>

        <h1 className="mx-auto max-w-4xl text-3xl font-black uppercase tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
          We take immense pride to be <span className="text-amber-600">the trusted security partner</span> for the past <span className="text-amber-600">{company.yearsInBusiness}</span> years
        </h1>

        <p className="mt-6 text-lg font-semibold text-stone-700 sm:text-xl">
          {company.name} was established by: <span className="text-stone-900">{founder.name}</span>
        </p>

        <p className="mt-3 text-lg italic text-stone-600 sm:text-xl">
          {founderCredential}
        </p>
      </div>
    </section>
  );
}
