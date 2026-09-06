import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

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
  const router = useRouter();

  const isActive = (href) => {
    if (href === "/") {
      return router.pathname === "/";
    }

    return router.pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="border-b border-white/[0.08] bg-[#07111F]/95 backdrop-blur-2xl">
        <div className="mx-auto flex h-[82px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">

          {/* Logo */}
          <Link
            href="/"
            className="group relative flex items-center"
            aria-label="KESS Home"
          >
            <img
              src="/images/logo/logo.jpeg"
              alt="KESS - Knight Eyes Security"
              className="h-11 w-auto object-contain transition-all duration-500 group-hover:opacity-85 sm:h-12"
            />

            <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#C8A96B] transition-all duration-500 group-hover:w-full" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <div className="flex items-center rounded-full border border-white/[0.06] bg-white/[0.025] px-2 py-1.5">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${
                      active
                        ? "text-[#C8A96B]"
                        : "text-[#AEB8C6] hover:text-[#F4F1EA]"
                    }`}
                  >
                    {link.label}

                    <span
                      className={`absolute bottom-0.5 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#C8A96B] transition-all duration-300 ${
                        active
                          ? "w-5 opacity-100"
                          : "w-0 opacity-0"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Desktop Contact Button */}
          <Link
            href="/contact"
            className="group hidden items-center gap-3 rounded-sm bg-[#C8A96B] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#07111F] transition-all duration-300 hover:bg-[#D7BC83] hover:shadow-[0_8px_30px_rgba(200,169,107,0.15)] lg:flex"
          >
            <span>Contact Us</span>

            <svg
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 8H13M9 4L13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="relative flex h-11 w-11 items-center justify-center rounded-sm border border-white/10 bg-white/[0.025] transition-all duration-300 hover:border-[#C8A96B]/40 lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            <div className="relative h-5 w-5">
              <span
                className={`absolute left-0 top-0 h-px w-5 bg-[#C8A96B] transition-all duration-300 ${
                  isOpen ? "top-2 rotate-45" : ""
                }`}
              />

              <span
                className={`absolute left-0 top-2 h-px w-5 bg-[#C8A96B] transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />

              <span
                className={`absolute left-0 top-4 h-px w-5 bg-[#C8A96B] transition-all duration-300 ${
                  isOpen ? "top-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-b border-[#C8A96B]/10 bg-[#07111F]/98 backdrop-blur-2xl transition-all duration-500 ease-in-out lg:hidden ${
          isOpen
            ? "max-h-[700px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-5 py-7 sm:px-8">

          <div className="divide-y divide-white/[0.06]">
            {NAV_LINKS.map((link, index) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`group flex items-center justify-between py-5 transition-all duration-300 ${
                    active
                      ? "text-[#C8A96B]"
                      : "text-[#AEB8C6] hover:text-[#F4F1EA]"
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <span className="text-[10px] font-medium tracking-[0.15em] text-white/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-xs font-medium uppercase tracking-[0.2em]">
                      {link.label}
                    </span>
                  </div>

                  <svg
                    className="h-4 w-4 text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#C8A96B]"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 8H13M9 4L13 8L9 12"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              );
            })}
          </div>

          {/* Mobile Contact Button */}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-8 flex items-center justify-center gap-3 rounded-sm bg-[#C8A96B] px-5 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#07111F] transition-all duration-300 hover:bg-[#D7BC83]"
          >
            <span>Contact Us</span>

            <svg
              className="h-3.5 w-3.5"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 8H13M9 4L13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          {/* Brand Detail */}
          <div className="mt-7 flex items-center gap-4">
            <span className="h-px flex-1 bg-white/[0.06]" />

            <span className="text-[8px] uppercase tracking-[0.3em] text-white/20">
              Knight Eyes Security
            </span>

            <span className="h-px flex-1 bg-white/[0.06]" />
          </div>
        </nav>
      </div>
    </header>
  );
}