import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import siteData from "@/data/siteData.json";

export default function Contact() {
  const { contact } = siteData;

  return (
    <div className="bg-ivory min-h-screen text-charcoal">
      <SEO
        title="Contact"
        description="Get in touch with Knight Eyes Security Services (KESS) in Pune. Call, WhatsApp, or send an enquiry for security, housekeeping or manpower services."
        path="/contact"
      />
      <Navbar />

      <PageHero
        eyebrow="Get in Touch"
        title="Let's Talk About Your Security Requirement"
        description="Reach out for a quote, or send us your requirement and we'll get back within 24 hours."
        image="/images/team.jpg"
      />

      <section className="py-14 sm:py-20 px-5 sm:px-8">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-10">
          <div className="border border-border bg-white p-6 sm:p-8">
            <h2 className="font-display text-xl text-charcoal mb-5">Send an Enquiry</h2>
            <ContactForm />
          </div>

          <div className="space-y-6">
            <div className="flex gap-3">
              <Icon name="map-pin" className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-sm text-charcoal">{contact.headOffice.label}</p>
                <p className="text-charcoal-light text-sm">{contact.headOffice.address}</p>
              </div>
            </div>

            {contact.branches.map((branch) => (
              <div className="flex gap-3" key={branch.label}>
                <Icon name="map-pin" className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm text-charcoal">{branch.label}</p>
                  <p className="text-charcoal-light text-sm">{branch.address}</p>
                </div>
              </div>
            ))}

            <div className="flex gap-3">
              <Icon name="phone" className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <div>
                {contact.phone.map((p) => (
                  <p key={p} className="text-charcoal-light text-sm">
                    <a href={`tel:+91${p}`} className="hover:text-gold transition-colors">
                      +91 {p}
                    </a>
                  </p>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <Icon name="clock" className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <p className="text-charcoal-light text-sm">{contact.officeHours}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
