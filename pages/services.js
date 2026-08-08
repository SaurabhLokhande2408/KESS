import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import siteData from "../data/siteData.json";

export default function ServicesPage() {
  const services = siteData.services || [];
  const servedTo = siteData.servedTo || [];

  return (
    <div id="top" className="min-h-screen bg-stone-100 text-stone-900">
      <Navbar />

      <section className="relative overflow-hidden border-b border-amber-500/20 bg-[#111111] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/images/guards-hero.jpg.jpeg')" }} />
        <div className="absolute inset-0 bg-[#111111]/75" />

        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-black uppercase leading-none tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-white">Our</span>{" "}
            <span className="text-amber-500">Services</span>
          </h1>
        </div>
      </section>

      <section className="bg-stone-100 px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.id} className="rounded-[1.5rem] border border-stone-200 bg-white p-4 shadow-[0_12px_30px_rgba(0,0,0,0.04)] sm:p-5">
              <div className="overflow-hidden rounded-xl border border-gray-300 bg-stone-50">
                <Image
                  src={service.image || "/images/kess-shield.png.png"}
                  alt={service.title}
                  width={800}
                  height={500}
                  className="h-56 w-full object-cover sm:h-64"
                />
              </div>

              <h2 className="mt-5 text-center text-3xl font-black uppercase tracking-tight text-stone-900">
                {service.title}
              </h2>

              <p className="mt-3 text-center text-base leading-7 text-gray-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-black uppercase leading-none tracking-tight text-stone-900 sm:text-5xl">
            We Serve To
          </h2>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {servedTo.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-amber-500 bg-amber-50 px-4 py-2 text-sm font-semibold text-stone-900"
              >
                <span className="text-amber-600">◈</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="fixed bottom-5 right-5 z-50">
        <Link
          href="#top"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-amber-500 bg-amber-500 text-base font-bold text-stone-900 shadow-[0_10px_25px_rgba(212,175,55,0.35)] transition-transform duration-200 hover:scale-105"
          aria-label="Back to top"
        >
          ↑
        </Link>
      </div>
    </div>
  );
}
