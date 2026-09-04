import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const GALLERY_CATEGORIES = [
  {
    label: "KESS Team",
    images: [
      {
        src: "/images/team.jpg",
        alt: "KESS security personnel standing in formation",
      },
    ],
  },
  {
    label: "Leadership",
    images: [
      {
        src: "/images/founder-team/MrNamdevBhanudas%20Doke.png",
        alt: "Mr. Namdev Bhanudas Doke, Managing Director of KESS",
      },
    ],
  },
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      <SEO
        title="Gallery"
        description="A look at KESS personnel, leadership and the people behind Knight Eyes Security Services."
        path="/gallery"
      />
      <Navbar />

      <PageHero
        eyebrow="Gallery"
        title="On Site, In Training, On Duty"
        description="A look at KESS personnel and the leadership behind its security and facility services."
        image="/images/team.jpg"
        imageAlt="KESS security personnel standing in formation"
      />

      <main className="px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl space-y-14">
          {GALLERY_CATEGORIES.map((category) => (
            <section key={category.label}>
              <h2 className="mb-5 font-display text-2xl text-charcoal">
                {category.label}
              </h2>
              <div className="grid gap-5 sm:grid-cols-2">
                {category.images.map((image) => (
                  <div
                    key={image.src}
                    className="aspect-video overflow-hidden border border-border bg-white"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}