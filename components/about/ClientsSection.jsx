export default function ClientsSection({ clients, accentWord = "TRUST" }) {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.38em] text-amber-600">
          Long association
        </p>
        <h2 className="mb-6 text-4xl font-black uppercase leading-none tracking-tight text-stone-900 sm:text-5xl">
          Clients of <span className="text-amber-600">{accentWord}</span>
        </h2>

        <p className="mx-auto max-w-5xl text-lg leading-8 text-stone-700">
          {clients.map((client, index) => (
            <span key={client.name}>
              <strong className="font-bold text-stone-900">{client.name}</strong>
              {index < clients.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-7xl overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-200 shadow-[0_25px_60px_rgba(0,0,0,0.08)]">
        <img
          src="/images/guards-hero.jpg.jpeg"
          alt="Security personnel guarding an entrance"
          className="h-[300px] w-full object-cover sm:h-[420px] lg:h-[500px]"
        />
      </div>
    </section>
  );
}
