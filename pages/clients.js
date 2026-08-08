import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import siteData from "../data/siteData.json";

export default function ClientsPage() {
  return (
    <div id="top" className="min-h-screen bg-stone-100 text-stone-900">
      <Navbar />

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-4xl font-black uppercase leading-none tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
            <span>Some of our</span>{" "}
            <span className="text-amber-600">esteemed</span>{" "}
            <span className="text-amber-600">clients:</span>
          </h1>
        </div>

        <div className="mx-auto mt-12 grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {siteData.clients.map((client) => (
            <div
              key={client.name}
              className="group rounded-2xl border border-stone-200 bg-white p-5 shadow-[0_12px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
            >
              <div className="flex h-44 items-center justify-center overflow-hidden rounded-xl border border-stone-100 bg-stone-50 p-4">
                <Image
                  src={client.logo || "/images/kess-shield.png.png"}
                  alt={client.name}
                  width={260}
                  height={160}
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          ))}
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
