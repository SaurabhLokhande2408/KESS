import Link from "next/link";
import Image from "next/image";
import siteData from "@/data/siteData.json";

/* ---------- Icons (inline SVG, matches WhyTrustKESS icon language) ---------- */
function MapPinIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ClockIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ShieldCheckIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function WhatsAppIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
    </svg>
  );
}

const QUICK_LINKS = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Services", "/services"],
  ["Training", "/training"],
];

const COMPANY_LINKS = [
  ["Gallery", "/gallery"],
  ["Clients", "/clients"],
  ["Careers", "/careers"],
  ,
];

export default function Footer() {
  const { company, contact, registration, about } = siteData;
  const year = new Date().getFullYear();
  const waLink = `https://wa.me/${contact.whatsapp}`;

  return (
    <footer className="relative bg-charcoal text-ivory/80">
      {/* Top accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-5">
              <div className="relative w-9 h-11 flex-shrink-0">
                <Image
                  src="/images/logo/logo.jpeg"
                  alt="KESS Shield Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-display text-2xl text-ivory leading-none">
                  {company.shortName}
                </p>
                <p className="text-[10px] uppercase tracking-[0.25em] text-gold/80 mt-1">
                  Knight Eyes Security
                </p>
              </div>
            </Link>

            <p className="text-gold text-xs uppercase tracking-[0.15em] mb-3">
              {company.tagline}
            </p>
            <p className="text-sm leading-relaxed text-ivory/55 max-w-sm line-clamp-4">
              {about.description}
            </p>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 border border-gold text-gold px-5 py-2.5 text-xs uppercase tracking-wide hover:bg-gold hover:text-charcoal transition-colors duration-200"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Chat with Us
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-5">
              Quick Links
            </p>
            <ul className="space-y-3 text-sm">
              {QUICK_LINKS.map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="inline-block text-ivory/65 hover:text-gold hover:translate-x-0.5 transition-all duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-5">
              Company
            </p>
            <ul className="space-y-3 text-sm">
              {COMPANY_LINKS.map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="inline-block text-ivory/65 hover:text-gold hover:translate-x-0.5 transition-all duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-5">
              Get in Touch
            </p>
            <ul className="space-y-4 text-sm text-ivory/65">
              <li className="flex gap-3">
                <MapPinIcon className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>{contact.headOffice.address}</span>
              </li>
              <li className="flex gap-3">
                <PhoneIcon className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  {contact.phone.map((p) => (
                    <a
                      key={p}
                      href={`tel:+91${p}`}
                      className="hover:text-gold transition-colors duration-200"
                    >
                      +91 {p}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex gap-3">
                <ClockIcon className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>{contact.officeHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Branches */}
        {contact.branches?.length > 0 && (
          <div className="mt-14 pt-8 border-t border-gold/10">
            <p className="text-xs uppercase tracking-[0.2em] text-gold/70 mb-4">
              Also Serving
            </p>
            <div className="flex flex-wrap gap-x-10 gap-y-2 text-sm text-ivory/45">
              <span className="text-ivory/65">{contact.headOffice.label}</span>
              {contact.branches.map((b) => (
                <span key={b.label}>{b.label}</span>
              ))}
            </div>
          </div>
        )}

        {/* Compliance badges */}
        <div className="mt-10 flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 border border-gold/25 bg-gold/5 text-ivory/70 text-[11px] uppercase tracking-wide px-3.5 py-2">
            <ShieldCheckIcon className="w-3.5 h-3.5 text-gold" />
            PSARA {registration.psara.state}: {registration.psara.number}
          </span>
          <span className="inline-flex items-center gap-2 border border-gold/25 bg-gold/5 text-ivory/70 text-[11px] uppercase tracking-wide px-3.5 py-2">
            PF: {registration.pfNumber}
          </span>
          <span className="inline-flex items-center gap-2 border border-gold/25 bg-gold/5 text-ivory/70 text-[11px] uppercase tracking-wide px-3.5 py-2">
            ESI: {registration.esiNumber}
          </span>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gold/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ivory/35">
          <p>© {year} {company.name}. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-gold/60" />
            PSARA Licensed &nbsp;&middot;&nbsp; {company.yearsInBusiness}+ Years of Trusted Protection
          </p>
        </div>
      </div>
    </footer>
  );
}