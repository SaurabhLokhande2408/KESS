const fallbackImages = [
  "/images/guards-hero.jpg.jpeg",
  "/images/KESS-differentiator-homepage.png",
];

export default function LeadershipSection({ leaders }) {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-center text-[11px] font-bold uppercase tracking-[0.38em] text-amber-600">
          Our team
        </p>
        <h2 className="mb-10 text-center text-4xl font-black uppercase leading-none tracking-tight text-stone-900 sm:text-5xl">
          Leadership
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {leaders.map((member, index) => (
            <div key={member.name} className="flex items-center gap-5 rounded-[1.5rem] border border-stone-200 bg-stone-50 p-5 shadow-[0_15px_40px_rgba(0,0,0,0.04)]">
              <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-amber-500 bg-stone-200 sm:h-28 sm:w-28">
                <img
                  src={member.image || fallbackImages[index % fallbackImages.length]}
                  alt={member.name}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = fallbackImages[index % fallbackImages.length];
                  }}
                />
              </div>
              <div>
                <p className="text-xl font-bold uppercase tracking-tight text-stone-900">
                  Mr. {member.name.replace("Namdev Bhanudas Doke", "Namdev Bhanudas Doke").replace("Mahesh Doke", "Mahesh Doke")}
                </p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
