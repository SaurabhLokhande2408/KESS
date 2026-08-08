import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
              className="object-contain"
              priority
            />
          </div>
          <span className="font-display text-2xl tracking-wide text-ivory">
            KESS
          </span>
          <span className="hidden sm:block h-6 w-px bg-gold/30" />
          <span className="hidden sm:block text-xs uppercase tracking-[0.2em] text-gold/80">
            Knight Eyes Security
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-wide text-ivory/80 hover:text-gold transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA button (desktop) */}
        <Link
          href="/contact"
          className="hidden lg:inline-block border border-gold text-gold px-5 py-2 text-sm uppercase tracking-wide hover:bg-gold hover:text-charcoal transition-colors duration-200"
        >
          Get a Quote
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