import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import siteData from "@/data/siteData.json";

export default function Services() {
  const { services, manpowerCategories } = siteData;

  return (
    <div className="bg-ivory min-h-screen text-charcoal">
      <SEO
        title="Services"
        description="Security guarding, housekeeping, manpower outsourcing, VIP protection and on-the-job training services from KESS in Pune, Maharashtra."
        path="/services"
      />
      <Navbar />

      <PageHero
        eyebrow="What We Offer"
        title="Security & Facility Services, Built on Discipline"
        description="Every service KESS delivers is backed by trained, compliant personnel and clear reporting standards."
        image="/images/team.jpg"
      />

      <section className="py-14 sm:py-20 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, idx) => (
              <ServiceCard service={service} index={idx} key={service.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 px-5 sm:px-8 bg-charcoal text-ivory">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Manpower Outsourcing"
            title="Staff Categories We Supply"
            description="Fully compliant staffing across roles — recruited, trained and documented by KESS."
          />
          <ul className="grid sm:grid-cols-2 gap-3">
            {manpowerCategories.map((cat) => (
              <li key={cat} className="border border-gold/20 px-4 py-3 text-sm text-ivory/80">
                {cat}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-14 sm:py-16 px-5 sm:px-8 text-center">
        <h2 className="font-display text-2xl sm:text-3xl text-charcoal mb-3">
          Need a service that isn't listed here?
        </h2>
        <p className="text-charcoal-light text-sm mb-6">
          KESS builds custom staffing and security arrangements for corporate, residential and institutional clients.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-gold text-charcoal px-7 py-3 uppercase tracking-wider text-xs font-semibold hover:bg-charcoal hover:text-ivory transition-colors"
        >
          Talk to Us
        </Link>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
