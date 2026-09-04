import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

// Drop real photos into /public/images and update the paths below.
// Kept as plain <img> (not next/image) so swapping files needs no code change.
const GALLERY_CATEGORIES = [
  {
    label: "Training",
    images: ["/images/gallery-training-1.jpg", "/images/gallery-training-2.jpg"],
  },
  {
    label: "Corporate Deployments",
    images: ["/images/gallery-corporate-1.jpg", "/images/gallery-corporate-2.jpg"],
  },
  {
    label: "Residential Townships",
    images: ["/images/gallery-residential-1.jpg", "/images/gallery-residential-2.jpg"],
  },
];

export default function Gallery() {
  return (
    <div className="bg-ivory min-h-screen text-charcoal">
      <SEO
        title="Gallery"
        description="Photos of KESS security guards on duty, training sessions, and deployments across corporate and residential sites."
        path="/gallery"
      />
      <Navbar />

      <PageHero
        eyebrow="Gallery"
        title="On Site, In Training, On Duty"
        description="A look at KESS personnel across training sessions and live deployments."
        image="/images/team.jpg"
      />

      <section className="py-14 sm:py-20 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto space-y-14">
          {GALLERY_CATEGORIES.map((cat) => (
            <div key={cat.label}>
              <h2 className="font-display text-xl text-charcoal mb-4">{cat.label}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {cat.images.map((src) => (
                  <div
                    key={src}
                    className="aspect-video bg-white border border-border overflow-hidden flex items-center justify-center"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={cat.label}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.nextSibling.style.display = "flex";
                      }}
                    />
                    <div className="hidden w-full h-full items-center justify-center text-charcoal-light/40 text-xs uppercase tracking-wide">
                      Add photo: {src}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
