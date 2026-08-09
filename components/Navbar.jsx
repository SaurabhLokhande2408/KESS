
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
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-charcoal/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative h-12 w-10 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
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
          <span className="hidden h-6 w-px bg-gold/30 sm:block" />
          <span className="hidden text-xs uppercase tracking-[0.2em] text-gold/80 sm:block">
            KNIGHT EYES SECURITY
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const lowerLabel = link.label.toLowerCase();

            if (
              lowerLabel === "home" ||
              lowerLabel === "gallery" ||
              lowerLabel === "clients" ||
              lowerLabel === "careers"
            ) {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm uppercase tracking-wide text-ivory/80 transition-colors duration-200 hover:text-gold"
                >
                  {link.label}
                </Link>
              );
            }

            const dropdownLabel =
              link.label === "About"
                ? "About"
                : link.label === "Services"
                  ? "Services"
                  : link.label === "Training"
                    ? "Training"
                    : null;

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
                  className="flex items-center gap-1 text-sm uppercase tracking-wide text-ivory/80 transition-colors duration-200 hover:text-gold"
                  aria-expanded={activeDropdown === dropdownLabel}
                  onClick={() => {
                    setActiveDropdown((current) =>
                      current === dropdownLabel ? null : dropdownLabel
                    );
                  }}
                >
                  <span>{link.label}</span>
                  <span aria-hidden="true" className="text-[10px]">
                    ▾
                  </span>
                </button>

                {activeDropdown === dropdownLabel && (
                  <div className="absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3">
                    <div className="rounded-sm border border-gold/20 bg-charcoal py-2 shadow-xl transition-all duration-200 ease-out">
                      {dropdowns[dropdownLabel].map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-sm uppercase tracking-wide text-ivory/80 transition-all duration-150 hover:bg-gold/10 hover:text-gold"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* CTA button (desktop) */}
        <Link
          href="/enquiry"
          className="hidden lg:inline-block border border-gold px-5 py-2 text-sm uppercase tracking-wide text-gold transition-colors duration-200 hover:bg-gold hover:text-charcoal"
        >
          CONTACT US
        </Link>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
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
        <nav className="flex flex-col gap-5 border-t border-gold/20 bg-charcoal px-5 py-6 lg:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm uppercase tracking-wide text-ivory/90 transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/enquiry"
            onClick={() => setIsOpen(false)}
            className="mt-2 border border-gold px-5 py-2 text-center text-sm uppercase tracking-wide text-gold"
          >
            Contact Us
          </Link>
        </nav>
      )}
    </header>
  );
}

