import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CurveLines from "@/components/CurveLines";
import siteData from "@/data/siteData.json";


export default function Contact() {
  const { contact } = siteData;

  return (
    <div className="bg-ivory min-h-screen text-charcoal">

      {/* ======================================================
          SEO
      ====================================================== */}

      <SEO
        title="Contact"
        description="Get in touch with Knight Eyes Security Services (KESS) in Pune. Call, WhatsApp, or send an enquiry for security, housekeeping or manpower services."
        path="/contact"
      />


      {/* ======================================================
          NAVBAR
      ====================================================== */}

      <Navbar />


      {/* ======================================================
          HERO
      ====================================================== */}

      <PageHero
        eyebrow="Get in Touch"
        title="Let's Talk About Your Security Requirement"
        description="Reach out for a quote, or send us your requirement and we'll get back within 24 hours."
        image="/images/team.jpg"
      />


      {/* ======================================================
          CONTACT SECTION
      ====================================================== */}

      <section className="relative overflow-hidden py-20 sm:py-24 px-5 sm:px-8">

        {/* Right decorative curves */}

        <CurveLines
          position="right"
          size="compact"
          density="fine"
          opacity={0.7}
          className="right-[-170px] bottom-[-60px] hidden lg:block"
        />

        {/* Left decorative curves */}

        <CurveLines
          position="left"
          size="compact"
          density="fine"
          opacity={0.35}
          className="left-[-190px] top-5 hidden xl:block"
        />


        <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">


          {/* ==================================================
              FORM
          ================================================== */}

          <div className="relative border border-border bg-white p-6 sm:p-8 lg:p-10 shadow-sm">

            <div className="absolute top-0 left-0 w-16 h-1 bg-gold" />

            <div className="mb-9">

              <div className="flex items-center gap-3 mb-4">

                <div className="w-10 h-10 flex items-center justify-center bg-ivory border border-border">

                  <Icon
                    name="send"
                    className="w-5 h-5 text-gold"
                  />

                </div>

                <span className="text-xs uppercase tracking-[0.16em] text-gold font-semibold">
                  Enquiry
                </span>

              </div>


              <h2 className="font-display text-2xl sm:text-3xl text-charcoal">
                Send an Enquiry
              </h2>


              <p className="mt-3 text-base leading-7 text-charcoal-light max-w-lg">
                Tell us what you need and our team will get in touch with you shortly.
              </p>

            </div>


            <ContactForm />

          </div>


          {/* ==================================================
              CONTACT INFORMATION
          ================================================== */}

          <div className="relative space-y-10 lg:pt-4">

            <div>

              <span className="text-xs uppercase tracking-[0.16em] text-gold font-semibold">
                KESS
              </span>

              <h2 className="font-display text-3xl sm:text-4xl text-charcoal mt-3">
                Let's connect.
              </h2>

              <p className="text-charcoal-light text-base leading-8 mt-4 max-w-md">
                Whether you need security personnel, housekeeping, or manpower support, we're here to understand your requirement.
              </p>

            </div>


            {/* ==================================================
                HEAD OFFICE
            ================================================== */}

            <div className="flex gap-4 border-t border-border pt-6">

              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-white border border-border">

                <Icon
                  name="map-pin"
                  className="w-5 h-5 text-gold"
                />

              </div>


              <div>

                <p className="font-medium text-sm text-charcoal">
                  {contact.headOffice.label}
                </p>

                <p className="text-charcoal-light text-base leading-7 mt-1">
                  {contact.headOffice.address}
                </p>

              </div>

            </div>


            {/* ==================================================
                BRANCHES
            ================================================== */}

            {contact.branches.map((branch) => (

              <div
                className="flex gap-4"
                key={branch.label}
              >

                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-white border border-border">

                  <Icon
                    name="map-pin"
                    className="w-5 h-5 text-gold"
                  />

                </div>


                <div>

                  <p className="font-medium text-sm text-charcoal">
                    {branch.label}
                  </p>

                  <p className="text-charcoal-light text-base leading-7 mt-1">
                    {branch.address}
                  </p>

                </div>

              </div>

            ))}


            {/* ==================================================
                PHONE
            ================================================== */}

            <div className="flex gap-4 pt-2">

              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-white border border-border">

                <Icon
                  name="phone"
                  className="w-5 h-5 text-gold"
                />

              </div>


              <div>

                <p className="font-medium text-sm text-charcoal mb-1">
                  Phone
                </p>

                {contact.phone.map((p) => (

                  <p
                    key={p}
                    className="text-charcoal-light text-base"
                  >

                    <a
                      href={`tel:+91${p}`}
                      className="hover:text-gold transition-colors"
                    >
                      +91 {p}
                    </a>

                  </p>

                ))}

              </div>

            </div>


            {/* ==================================================
                OFFICE HOURS
            ================================================== */}

            <div className="flex gap-4 pt-2">

              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-white border border-border">

                <Icon
                  name="clock"
                  className="w-5 h-5 text-gold"
                />

              </div>


              <div>

                <p className="font-medium text-sm text-charcoal">
                  Office Hours
                </p>

                <p className="text-charcoal-light text-base mt-1">
                  {contact.officeHours}
                </p>

              </div>

            </div>


            {/* ==================================================
                DECORATIVE FOOTER
            ================================================== */}

            <div className="hidden sm:flex items-center gap-3 pt-5">

              <span className="w-12 h-px bg-gold" />

              <span className="text-xs uppercase tracking-wide text-charcoal-light">
                Trusted • Professional • Responsive
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* ======================================================
          FOOTER
      ====================================================== */}

      <Footer />

      <FloatingWhatsApp />

    </div>
  );
}