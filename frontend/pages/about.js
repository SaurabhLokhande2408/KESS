import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
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

      <section className="py-14 sm:py-20 px-5 sm:px-8">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-8">
          <div className="border border-border bg-white p-7">
            <h3 className="font-display text-xl text-gold mb-2">Our Mission</h3>
            <p className="text-charcoal-light text-sm leading-relaxed">{about.mission}</p>
          </div>
          <div className="border border-border bg-white p-7">
            <h3 className="font-display text-xl text-gold mb-2">Our Vision</h3>
            <p className="text-charcoal-light text-sm leading-relaxed">{about.vision}</p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 px-5 sm:px-8 bg-charcoal text-ivory">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="Leadership & Management"
            title="Guided by Indian Army Veterans"
            description="KESS is led by people who understand discipline first-hand, not just as a business term."
          />
          <div className="grid sm:grid-cols-2 gap-6">
            {leadership.map((person) => (
              <div key={person.name} className="border border-gold/20 p-6">
                <h3 className="font-display text-lg text-gold">
                  {person.name}
                </h3>
                <p className="text-ivory/50 text-[10px] uppercase tracking-wide mb-2">
                  {person.role}
                </p>
                <p className="text-ivory/70 text-sm leading-relaxed">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            eyebrow="Compliance"
            title="Registered, Licensed, Accountable"
            align="center"
          />
          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            <div className="border border-border bg-white p-5">
              <p className="text-charcoal-light text-[10px] uppercase tracking-wide mb-1">PSARA ({registration.psara.state})</p>
              <p className="font-display text-charcoal">{registration.psara.number}</p>
            </div>
            <div className="border border-border bg-white p-5">
              <p className="text-charcoal-light text-[10px] uppercase tracking-wide mb-1">PF Number</p>
              <p className="font-display text-charcoal">{registration.pfNumber}</p>
            </div>
            <div className="border border-border bg-white p-5">
              <p className="text-charcoal-light text-[10px] uppercase tracking-wide mb-1">ESI Number</p>
              <p className="font-display text-charcoal">{registration.esiNumber}</p>
            </div>
          </div>
          <p className="text-charcoal-light text-xs mt-4">
            {company.yearsInBusiness}+ years in business, serving {company.citiesServed}+ cities across Maharashtra.
          </p>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
