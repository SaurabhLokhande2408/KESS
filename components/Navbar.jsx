import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import siteData from "../data/siteData.json";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Training", href: "/training" },
  { label: "Gallery", href: "/gallery" },
  { label: "Clients", href: "/clients" },
  { label: "Enquiry", href: "/enquiry" },
  { label: "Careers", href: "/careers" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const dropdowns = {
    About: [
      { label: "Our Story", href: "/about" },
      { label: "Leadership", href: "/about#leadership" },
      { label: "Ex-Servicemen Legacy", href: "/about#legacy" },
    ],
    Services: siteData.services.slice(0, 5).map((service) => ({
      label: service.title,
      href: `/services#${service.id}`,
    })),
    Training: [
      { label: "Firefighting", href: "/training#firefighting" },
      { label: "Martial Arts / Kung-Fu", href: "/training#martial-arts" },
      { label: "Physical Fitness", href: "/training#fitness" },
    ],
  };

  return (
    <header className="sticky top-0 z-50 bg-charcoal/95 backdrop-blur border-b border-gold/20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-12 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/kess-shield.png.png"
              alt="KESS Shield Logo"
              fill
              sizes="40px"
              className="object-contain"
              priority
            />
          </div>
          <span className="font-display text-2xl tracking-wide text-ivory">
            KESS
          </span>
          <span className="hidden sm:block h-6 w-px bg-gold/30" />
          <span className="hidden sm:block text-xs uppercase tracking-[0.2em] text-gold/80">
            KNIGHT EYES SECURITY
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const lowerLabel = link.label.toLowerCase();

            if (lowerLabel === "home" || lowerLabel === "gallery" || lowerLabel === "clients" || lowerLabel === "careers") {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm uppercase tracking-wide text-ivory/80 hover:text-gold transition-colors duration-200"
                >
                  {link.label}
                </Link>
              );
            }

            const dropdownLabel = link.label === "About" ? "About" : link.label === "Services" ? "Services" : link.label === "Training" ? "Training" : null;

            if (!dropdownLabel) {
              return null;
            }

            return (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setActiveDropdown(dropdownLabel)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 text-sm uppercase tracking-wide text-ivory/80 hover:text-gold transition-colors duration-200"
                  aria-expanded={activeDropdown === dropdownLabel}
                  onClick={() => {
                    setActiveDropdown((current) => (current === dropdownLabel ? null : dropdownLabel));
                  }}
                >
                  <span>{link.label}</span>
                  <span aria-hidden="true" className="text-[10px]">▾</span>
                </button>

                {activeDropdown === dropdownLabel && (
                  <div className="absolute left-1/2 top-full z-50 mt-3 w-72 -translate-x-1/2 rounded-sm bg-charcoal border border-gold/20 py-2 shadow-xl transition-all duration-200 ease-out">
                    {dropdowns[dropdownLabel].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block py-2 px-4 text-sm uppercase tracking-wide text-ivory/80 hover:text-gold transition-all duration-150 hover:bg-gold/10"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* CTA button (desktop) */}
        <Link
          href="/contact"
          className="hidden lg:inline-block border border-gold text-gold px-5 py-2 text-sm uppercase tracking-wide hover:bg-gold hover:text-charcoal transition-colors duration-200"
        >
          GET A QUOTE
        </Link>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-gold transition-transform duration-200 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gold transition-opacity duration-200 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gold transition-transform duration-200 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile nav panel */}
      {isOpen && (
        <nav className="lg:hidden bg-charcoal border-t border-gold/20 px-5 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-ivory/90 uppercase tracking-wide text-sm hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 text-center border border-gold text-gold px-5 py-2 text-sm uppercase tracking-wide"
          >
            Get a Quote
          </Link>
        </nav>
      )}
    </header>
  );
}