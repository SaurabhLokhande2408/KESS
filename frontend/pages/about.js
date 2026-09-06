import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CurveLines from "@/components/CurveLines";
import siteData from "@/data/siteData.json";

export default function About() {
  const { about, leadership, company, registration } = siteData;

  return (
    <div className="bg-ivory min-h-screen text-charcoal">
      <SEO
        title="About Us"
        description="Learn about Knight Eyes Security Services (KESS) — our mission, vision, and the ex-servicemen leadership behind a decade of security and facility services in Pune."
        path="/about"
      />
      <Navbar />

      <PageHero
        eyebrow="Our Story"
        title="A Decade of Discipline, Trust and Service"
        description={about.description}
        image="/images/team.jpg"
      />

      <section className="relative overflow-hidden py-20 sm:py-24 px-5 sm:px-8">
        <CurveLines
          position="right"
          size="compact"
          density="fine"
          opacity={0.75}
          className="right-[-160px] bottom-[-80px] hidden sm:block"
        />
        <div className="relative z-10 max-w-5xl mx-auto grid sm:grid-cols-2 gap-10">
          <div className="border border-border bg-white p-8">
            <h3 className="font-display text-xl text-gold mb-3">Our Mission</h3>
            <p className="text-charcoal-light text-base leading-8">{about.mission}</p>
          </div>
          <div className="border border-border bg-white p-8">
            <h3 className="font-display text-xl text-gold mb-3">Our Vision</h3>
            <p className="text-charcoal-light text-base leading-8">{about.vision}</p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 px-5 sm:px-8 bg-charcoal text-ivory">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="Leadership & Management"
            title="Guided by Indian Army Veterans"
            description="KESS is led by people who understand discipline first-hand, not just as a business term."
          />
          <div className="grid sm:grid-cols-2 gap-8">
            {leadership.map((person) => (
              <div key={person.name} className="border border-gold/20 p-7">
                <h3 className="font-display text-lg text-gold">
                  {person.name}
                </h3>
                <p className="text-ivory/50 text-xs font-medium uppercase tracking-[0.12em] mb-3">
                  {person.role}
                </p>
                <p className="text-ivory/70 text-base leading-8">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            eyebrow="Compliance"
            title="Registered, Licensed, Accountable"
            align="center"
          />
          <div className="grid sm:grid-cols-3 gap-6 text-sm">
            <div className="border border-border bg-white p-6">
              <p className="text-charcoal-light text-xs font-medium uppercase tracking-[0.12em] mb-2">PSARA ({registration.psara.state})</p>
              <p className="font-display text-charcoal">{registration.psara.number}</p>
            </div>
            <div className="border border-border bg-white p-6">
              <p className="text-charcoal-light text-xs font-medium uppercase tracking-[0.12em] mb-2">PF Number</p>
              <p className="font-display text-charcoal">{registration.pfNumber}</p>
            </div>
            <div className="border border-border bg-white p-6">
              <p className="text-charcoal-light text-xs font-medium uppercase tracking-[0.12em] mb-2">ESI Number</p>
              <p className="font-display text-charcoal">{registration.esiNumber}</p>
            </div>
          </div>
          <p className="text-charcoal-light text-sm mt-4">
            {company.yearsInBusiness}+ years in business, serving {company.citiesServed}+ cities across Maharashtra.
          </p>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
