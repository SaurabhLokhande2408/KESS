import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/Icon";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import siteData from "@/data/siteData.json";

export default function Training() {
  const { training } = siteData;

  return (
    <div className="bg-ivory min-h-screen text-charcoal">
      <SEO
        title="Training & Standards"
        description="KESS guards go through structured physical training, firefighting drills and martial arts under a black belt Wu-Shu Kung Fu instructor — a differentiator most security firms don't offer."
        path="/training"
      />
      <Navbar />

      <PageHero
        eyebrow="Our Differentiator"
        title="Trained Guards. Not Just Uniformed Ones."
        description="Most security firms outsource basic guarding without continuous instruction. At KESS, personnel go through ongoing physical conditioning, firefighting drills and martial arts training."
        image="/images/team.jpg"
      />

      <section className="py-14 sm:py-20 px-5 sm:px-8">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-8 items-start">
          <div>
            <SectionHeading
              eyebrow="Programme"
              title="What the Training Covers"
            />
            <ul className="space-y-3">
              {training.programme.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-charcoal-light">
                  <Icon name="check" className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" strokeWidth={2.2} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-gold/40 bg-white p-6">
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold mb-2">
              Lead Instructor
            </p>
            <h3 className="font-display text-2xl text-charcoal mb-1">
              {training.trainer.name}
            </h3>
            <p className="text-charcoal-light text-sm mb-5">
              {training.trainer.credential}
            </p>
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold mb-2">
              What This Achieves
            </p>
            <ul className="space-y-2">
              {training.aims.map((aim) => (
                <li key={aim} className="text-charcoal-light text-sm leading-relaxed">
                  &bull; {aim}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
