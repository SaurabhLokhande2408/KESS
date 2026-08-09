import Image from "next/image";
import BackToTop from "../components/BackToTop";
import siteData from "../data/siteData.json";

const trainingPillars = siteData.training?.onTheJobIncludes || [];
const trainingImages = siteData.training?.images || [];
const programmeItems = siteData.training?.programme || [];
const aims = siteData.training?.broadAims || [];

export default function TrainingPage() {
  const trainer = siteData.training?.trainer || { name: "Som Borude", credential: "Black Belt in Wu-Shu Kung Fu" };
  const intro = siteData.training?.intro || "";
  const motto = siteData.training?.motto || "";
  const closing = siteData.training?.closing || "";

  return (
    <div id="top" className="min-h-screen bg-[#f6f1e8] text-stone-900">
      <section className="relative overflow-hidden border-b border-amber-500/20 bg-[#111111] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/images/training/formation-standing.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#111111]/75" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">
              KESS training ethos
            </p>
            <h1 className="text-4xl font-black uppercase leading-none tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span>On-the-Job</span>{" "}
              <span className="text-amber-500">Training Programme</span>
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-200">
              {trainingPillars.join(" • ")}
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[1.5rem] border border-amber-500/20 bg-[#111111] shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
            <div className="grid gap-0 md:grid-cols-[220px_1fr]">
              <div className="relative min-h-[220px] bg-stone-200">
                <Image
                  src="/images/training/team-lineup.jpg"
                  alt="Training instructor"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex items-center p-8 sm:p-10 lg:p-12">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
                    Trainer spotlight
                  </p>
                  <h2 className="mt-4 text-3xl font-black uppercase leading-tight tracking-tight text-white">
                    Led by Mr. {trainer.name}
                  </h2>
                  <p className="mt-3 text-lg text-zinc-300">— {trainer.credential}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-4 sm:px-8 lg:px-12 lg:py-8">
        <div className="mx-auto max-w-7xl">
          <div className="columns-1 gap-5 md:columns-2 xl:columns-3">
            {trainingImages.map((image, index) => (
              <div key={`${image}-${index}`} className="group mb-5 overflow-hidden rounded-[1.25rem] border border-stone-200 bg-white shadow-[0_10px_25px_rgba(0,0,0,0.04)]">
                <div className="relative overflow-hidden">
                  <Image
                    src={image}
                    alt={`Training photo ${index + 1}`}
                    width={800}
                    height={900}
                    className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
              Training programme
            </p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-none tracking-tight text-stone-900 sm:text-5xl">
              Building disciplined teams
            </h2>
            <p className="mt-6 text-lg leading-8 text-stone-700">{intro}</p>
          </div>

          <div className="rounded-[1.5rem] border border-stone-200 bg-white p-6 shadow-[0_18px_35px_rgba(0,0,0,0.04)] sm:p-8">
            <div className="space-y-4">
              {programmeItems.map((item, index) => (
                <div key={item} className="flex items-start gap-4 rounded-xl border border-stone-200 bg-stone-50 p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-stone-900">
                    {index + 1}
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-amber-600">✓</span>
                    <p className="text-base leading-7 text-stone-700">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111111] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="relative rounded-[1.5rem] border border-amber-500/25 bg-[#171717] px-6 py-12 text-center shadow-[0_20px_40px_rgba(0,0,0,0.15)] sm:px-10">
            <span className="absolute left-5 top-4 text-6xl font-semibold text-amber-500/80 leading-none">“</span>
            <span className="absolute right-5 top-4 text-6xl font-semibold text-amber-500/80 leading-none">”</span>
            <p className="mx-auto max-w-4xl text-2xl italic leading-relaxed text-amber-100 sm:text-3xl lg:text-4xl">
              {motto}
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
              Broad aims of training
            </p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-none tracking-tight text-stone-900 sm:text-5xl">
              Excellence in every drill
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {aims.map((aim, index) => {
              const label = aim.split(" ").slice(0, 3).join(" ");
              const rest = aim.replace(label, "").trim();

              return (
                <div
                  key={`${aim}-${index}`}
                  className="group rounded-[1.25rem] border border-stone-200 bg-white p-5 shadow-[0_10px_25px_rgba(0,0,0,0.04)] transition-transform duration-200 hover:-translate-y-1"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-lg font-black text-stone-900">
                      {index + 1}
                    </span>
                    <span className="text-amber-600">✦</span>
                  </div>

                  <h3 className="text-xl font-black uppercase leading-tight tracking-tight text-stone-900">
                    {label}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-stone-700">{rest}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[1.5rem] border border-l-4 border-amber-500 bg-[#111111] px-6 py-8 text-center shadow-[0_15px_30px_rgba(0,0,0,0.08)] sm:px-10">
            <p className="text-lg leading-8 text-zinc-200">{closing}</p>
          </div>
        </div>
      </section>

      <BackToTop />
    </div>
  );
}
