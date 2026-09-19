import { useEffect, useMemo, useState } from "react";
import fs from "fs";
import path from "path";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const ALLOWED_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".gif",
]);

export async function getStaticProps() {
  const galleryDir = path.join(process.cwd(), "public", "images", "images_company");

  let images = [];

  if (fs.existsSync(galleryDir)) {
    images = fs
      .readdirSync(galleryDir)
      .filter((fileName) => ALLOWED_EXTENSIONS.has(path.extname(fileName).toLowerCase()))
      .map((fileName) => ({
        src: `/images/images_company/${fileName}`,
        alt: fileName.replace(/\.[^/.]+$/, "").replace(/[-_]+/g, " "),
      }));
  }

  return {
    props: {
      images,
    },
  };
}

export default function Gallery({ images = [] }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [visibleItems, setVisibleItems] = useState({});

  const selectedImage = useMemo(
    () => (selectedIndex !== null && images[selectedIndex] ? images[selectedIndex] : null),
    [images, selectedIndex]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setVisibleItems((previous) => ({
              ...previous,
              [index]: true,
            }));
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const cards = document.querySelectorAll(".gallery-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [images]);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }

      if (event.key === "ArrowRight") {
        setSelectedIndex((current) => {
          if (current === null) return 0;
          return (current + 1) % images.length;
        });
      }

      if (event.key === "ArrowLeft") {
        setSelectedIndex((current) => {
          if (current === null) return images.length - 1;
          return (current - 1 + images.length) % images.length;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [images.length, selectedIndex]);

  const openImage = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const showPrevious = () => {
    if (selectedIndex === null || images.length === 0) return;
    setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
  };

  const showNext = () => {
    if (selectedIndex === null || images.length === 0) return;
    setSelectedIndex((selectedIndex + 1) % images.length);
  };

  const heroImage = images[0]?.src || "/images/team.jpg";

  return (
    <div className="min-h-screen bg-[#F7F5EF] text-[#20241D]">
      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .reveal {
          animation: fadeUp 0.7s ease-out both;
        }

        .reveal-delay-1 { animation-delay: 0.08s; }
        .reveal-delay-2 { animation-delay: 0.14s; }
        .reveal-delay-3 { animation-delay: 0.2s; }

        .gallery-card {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease, box-shadow 0.3s ease, transform 0.3s ease;
          transform-origin: center;
        }

        .gallery-card.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        button {
          font: inherit;
        }
      `}</style>
      <SEO
        title="Gallery"
        description="A glimpse into KESS people, operations, training and security services."
        path="/gallery"
      />

      <Navbar />

      <PageHero
        eyebrow="Gallery"
        title="Our Gallery"
        description="A glimpse into our people, operations, training, and security services."
        image="/images/images_used/g_bg.png"
        imageAlt="KESS operations and personnel gallery"
      />

      <main className="px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="reveal reveal-delay-1 mb-10 flex items-center justify-between gap-4 border-b border-[#D7D0C2] pb-5">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8A7B5A]">
                KESS Visual Portfolio
              </p>
            </div>
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-[#5A5C54]">
              {images.length} images
            </div>
          </div>

          {images.length > 0 ? (
            <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
              {images.map((image, index) => (
                <button
                  key={`${image.src}-${index}`}
                  type="button"
                  data-index={index}
                  onClick={() => openImage(index)}
                  className={`gallery-card group relative mb-4 block w-full break-inside-avoid overflow-hidden border border-[#D7D0C2] bg-white text-left shadow-[0_10px_30px_rgba(32,36,29,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(32,36,29,0.08)] ${visibleItems[index] ? "is-visible" : ""}`}
                  aria-label={`Open gallery image ${index + 1}`}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="block h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
                      loading="lazy"
                      fetchPriority="low"
                      decoding="async"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-4 py-3 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F7F5EF]">
                        View image
                      </span>
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-white/10 text-lg leading-none">
                        ↗
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="reveal reveal-delay-2 rounded-sm border border-dashed border-[#D7D0C2] bg-white/60 p-10 text-center text-[#5A5C54]">
              No gallery images were found in the public image folder.
            </div>
          )}
        </div>
      </main>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#0E1114]/85 p-4 backdrop-blur-sm"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image preview"
        >
          <div className="relative w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 text-xl text-white transition hover:bg-black/50"
              aria-label="Close image preview"
            >
              ×
            </button>

            <div className="relative overflow-hidden rounded-sm border border-white/10 bg-black shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-h-[80vh] w-full object-contain"
                loading="lazy"
                fetchPriority="low"
                decoding="async"
              />
            </div>

            <div className="mt-4 flex items-center justify-between gap-4 text-white">
              <div className="text-sm uppercase tracking-[0.18em] text-white/80">
                {selectedImage.alt}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={showPrevious}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-lg transition hover:bg-white/10"
                  aria-label="Previous image"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-lg transition hover:bg-white/10"
                  aria-label="Next image"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}