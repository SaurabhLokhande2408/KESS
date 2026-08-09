import Link from "next/link";

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <div className="mx-auto max-w-4xl px-5 py-20 text-center">
        <h1 className="text-4xl font-black uppercase tracking-tight text-amber-500">Gallery</h1>
        <p className="mt-4 text-lg text-zinc-300">This is a placeholder gallery page.</p>
        <Link href="/" className="mt-6 inline-block rounded-full border border-amber-500 px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
          Back Home
        </Link>
      </div>
    </div>
  );
}
