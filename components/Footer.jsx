import Link from "next/link";
import siteData from "../data/siteData.json";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Training", href: "/training" },
  { label: "Gallery", href: "/gallery" },
  { label: "Clients", href: "/clients" },
  { label: "Enquiry", href: "/enquiry" },
  { label: "Careers", href: "/careers" },
];

const placeholderPages = ["/services", "/gallery", "/clients", "/enquiry", "/careers"];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const registrationText = `PSARA Reg. No: ${siteData.registration.psara.number} | PF: ${siteData.registration.pfNumber} | ESI: ${siteData.registration.esiNumber}`;
  const address = siteData.contact.headOffice.address;
  const mapQuery = encodeURIComponent(address);

  return (
    <footer className="relative mt-0 overflow-hidden bg-[#111111] text-white">
      <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: "url('/images/guards-hero.jpg.jpeg')" }} />
      <div className="absolute inset-0 bg-[#111111]/80" />

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <h3 className="mb-5 text-lg font-bold uppercase tracking-[0.12em] text-amber-500">
                {siteData.company.name}
              </h3>

              <div className="space-y-4 text-sm leading-7 text-zinc-300">
                <div className="flex gap-3">
                  <span className="mt-1 text-amber-500">📍</span>
                  <span>{address}</span>
                </div>

                <div className="space-y-2">
                  {siteData.contact.phone.map((phone) => (
                    <div key={phone} className="flex gap-3">
                      <span className="mt-1 text-amber-500">📞</span>
                      <span>+91 {phone}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  {siteData.contact.emails && siteData.contact.emails.length > 0 ? (
                    siteData.contact.emails.map((email) => (
                      <div key={email} className="flex gap-3">
                        <span className="mt-1 text-amber-500">✉️</span>
                        <span>{email}</span>
                      </div>
                    ))
                  ) : (
                    <div className="flex gap-3">
                      <span className="mt-1 text-amber-500">✉️</span>
                      <span className="text-zinc-400">Email to be confirmed</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-5 text-lg font-bold uppercase tracking-[0.12em] text-amber-500">
                Useful Links
              </h3>

              <nav className="space-y-3 text-sm text-zinc-200">
                {navLinks.map((link, index) => (
                  <div key={link.href} className="border-b border-dotted border-zinc-600/80 pb-2 last:border-b-0 last:pb-0">
                    <Link href={link.href} className="inline-block transition-colors hover:text-amber-400">
                      {link.label}
                    </Link>
                  </div>
                ))}
              </nav>
            </div>

            <div>
              <div className="mb-5 flex items-center justify-between gap-3">
                <h3 className="text-lg font-bold uppercase tracking-[0.12em] text-amber-500">
                  Location - Pune
                </h3>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/5 shadow-[0_0_20px_rgba(0,0,0,0.25)]">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute left-3 top-3 z-10 inline-flex items-center gap-2 rounded-full border border-white/60 bg-black/20 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm transition-colors hover:bg-black/35"
                >
                  Open in Maps ↗
                </a>

                <iframe
                  title="KESS Head Office Map"
                  src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                  className="h-[220px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-700/80 bg-[#0a0a0a]">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4 text-[11px] uppercase tracking-[0.12em] text-zinc-400 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
            <div>
              COPYRIGHT {currentYear} © KNIGHTEYE.IN ALL RIGHTS RESERVED
            </div>
            <div>
              PSARA Reg. No: {siteData.registration.psara.number} | PF: {siteData.registration.pfNumber} | ESI: {siteData.registration.esiNumber}
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-amber-400 bg-amber-500 text-xl font-bold text-[#111111] shadow-[0_10px_25px_rgba(212,175,55,0.35)] transition-transform hover:scale-105"
      >
        ↑
      </button>
    </footer>
  );
}
