import Link from "next/link";
import HeroSection from "../components/about/HeroSection";
import CompanySection from "../components/about/CompanySection";
import ClientsSection from "../components/about/ClientsSection";
import MissionSection from "../components/about/MissionSection";
import VisionSection from "../components/about/VisionSection";
import LeadershipSection from "../components/about/LeadershipSection";
import siteData from "../data/siteData.json";

export default function AboutPage() {
  const { company, leadership, about, clients, training } = siteData;
  const founder = leadership[0] || { name: "Namdev Bhanudas Doke" };
  const founderCredential = "Retired Major from the Indian Army. A leader committed to discipline, vigilance, and service.";

  const descriptionParagraphs = about.description
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  const broadAims = training?.broadAims || training?.aims || [];

  return (
    <div id="top" className="min-h-screen bg-stone-50 text-stone-900 relative">
      <HeroSection company={company} founder={founder} founderCredential={founderCredential} />
      <CompanySection company={company} descriptionParagraphs={descriptionParagraphs} />
      <ClientsSection clients={clients} accentWord="TRUST" />
      <MissionSection mission={about.mission} />
      <div className="bg-stone-100 px-5 py-4 text-center sm:px-8 lg:px-12">
        <p className="mx-auto max-w-4xl text-lg font-serif italic text-stone-700 sm:text-2xl">
          “{about.motto}”
        </p>
      </div>
      <div className="bg-white px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.38em] text-amber-600">
            Broad aims
          </p>
          <ul className="space-y-3 text-base leading-7 text-stone-700 sm:text-lg">
            {broadAims.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-amber-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <LeadershipSection leaders={leadership} />
      <VisionSection vision={about.vision} />

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
