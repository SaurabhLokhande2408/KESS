import siteData from "@/data/siteData.json";

export default function StatBar() {
  const { company, clients } = siteData;

  const stats = [
    { label: "Years in Business", value: `${company.yearsInBusiness}+` },
    { label: "Corporate Clients", value: `${clients.length}+` },
    { label: "Cities Served", value: `${company.citiesServed}+` },
    { label: "Zero Tolerance Policy", value: "100%" },
  ];

  return (
    <section className="border-b border-border bg-ivory">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 sm:py-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-display text-2xl sm:text-3xl text-gold">
              {stat.value}
            </p>
            <p className="text-charcoal-light text-[11px] sm:text-xs uppercase tracking-wide mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
