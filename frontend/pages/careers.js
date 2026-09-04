import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/Icon";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import siteData from "@/data/siteData.json";

export default function Careers() {
  const { careers, contact } = siteData;

  return (
    <div className="bg-ivory min-h-screen text-charcoal">
      <SEO
        title="Careers"
        description="Join KESS as a security guard, housekeeping staff, or office assistant. Structured training and PF/ESI coverage included."
        path="/careers"
      />
      <Navbar />

      <PageHero
        eyebrow="Careers"
        title="Build a Career in Security & Facility Services"
        description={careers.whyWorkHere}
        image="/images/team.jpg"
      />

      <section className="py-14 sm:py-20 px-5 sm:px-8">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-10">
          <div>
            <SectionHeading eyebrow="Why KESS" title="What You Get" />
            <ul className="space-y-3">
              {careers.benefits.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-charcoal-light">
                  <Icon name="check" className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" strokeWidth={2.2} />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeading eyebrow="Current Openings" title="Open Positions" />
            <div className="space-y-3">
              {careers.openings.map((job) => (
                <div key={job.id} className="border border-border bg-white p-4 flex items-center justify-between">
                  <div>
                    <p className="font-display text-charcoal">{job.title}</p>
                    <p className="text-charcoal-light text-xs">{job.location} &middot; {job.type}</p>
                  </div>
                  <a
                    href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                      `Hi, I'd like to apply for the ${job.title} position.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-wide border border-gold text-gold px-3 py-1.5 hover:bg-gold hover:text-charcoal transition-colors"
                  >
                    Apply
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
