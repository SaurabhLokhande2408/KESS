import { SkeletonBlock, SkeletonPageHero } from "./SkeletonPrimitives";

const GALLERY_IMAGE_DIMENSIONS = [
  [1447, 1087],
  [1448, 1086],
  [1086, 1448],
  [1448, 1086],
  [1868, 842],
  [1448, 1086],
  [1448, 1086],
  [955, 1647],
  [1448, 1086],
  [1448, 1086],
  [1672, 941],
  [1448, 1086],
  [1448, 1086],
  [1448, 1086],
  [1448, 1086],
  [1370, 1148],
  [1448, 1086],
  [552, 327],
  [543, 320],
  [1600, 1200],
  [1448, 1086],
  [1868, 842],
  [1672, 941],
];

export default function GallerySkeleton() {
  return (
    <div className="min-h-screen bg-[#F7F5EF] text-[#20241D]">
      <SkeletonPageHero titleWidths={["w-3/4", "w-1/2"]} descriptionLines={2} />
      <main className="px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-center justify-between gap-4 border-b border-[#D7D0C2] pb-5">
            <SkeletonBlock className="h-3 w-44" />
            <SkeletonBlock className="h-3 w-20" />
          </div>
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {GALLERY_IMAGE_DIMENSIONS.map(([width, height], index) => (
              <SkeletonBlock
                key={index}
                className="mb-4 w-full break-inside-avoid border border-[#D7D0C2] bg-white"
                style={{ aspectRatio: `${width} / ${height}` }}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
