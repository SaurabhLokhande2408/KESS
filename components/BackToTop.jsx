import Link from "next/link";

export default function BackToTop({ anchor = "#top" }) {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <Link
        href={anchor}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-amber-500 bg-amber-500 text-base font-bold text-stone-900 shadow-[0_10px_25px_rgba(212,175,55,0.35)] transition-transform duration-200 hover:scale-105"
        aria-label="Back to top"
      >
        ↑
      </Link>
    </div>
  );
}
