import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import siteData from "@/data/siteData.json";

export default function Clients() {
  const { clients } = siteData;

  return (
    <div className="bg-ivory min-h-screen text-charcoal">
      <SEO
        title="Our Clients"
        description="KESS serves corporate, institutional and residential clients including Hindustan Petroleum, Central Railway Hospital Pune, and Amanora Park Town."
        path="/clients"
      />
      <Navbar />

      <PageHero
        eyebrow="Clients"
        title="Trusted Across Sectors"
        description="From public-sector energy companies to hospitals and premium townships, KESS has served a wide range of institutions for over a decade."
        image="/images/team.jpg"
      />

      <section className="py-14 sm:py-20 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {clients.map((client) => (
            <div
              key={client.name}
              className="border border-border bg-white p-5 flex items-center justify-center text-center min-h-[110px]"
            >
              <p className="text-charcoal-light text-sm font-medium">{client.name}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
