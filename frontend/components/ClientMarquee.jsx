import siteData from "@/data/siteData.json";

export default function ClientMarquee() {
  const { clients } = siteData;
  const getLogoSrc = (logo) =>
    logo.startsWith("/") ? logo : `/images/clients%20_logos/${logo}`;

  return (
    <section className="border-t border-border bg-ivory py-8 overflow-hidden">
      <p className="mb-6 text-center font-display font-bold uppercase tracking-[0.18em] text-charcoal text-sm sm:text-lg md:text-xl">
        Trusted By Industry Leaders
      </p>

      <div className="relative w-full overflow-hidden flex [mask-image:_linear-gradient(to_right,_transparent_0,_black_128px,_black_calc(100%-128px),_transparent_100%)]">
        <div className="flex w-max whitespace-nowrap animate-marquee">
          {[0, 1].map((track) => (
            <div key={track} className="flex shrink-0 gap-12">
              {clients.map((client, idx) => (
                <div
                  key={`${client.logo}-${idx}`}
                  className="flex h-[89px] w-[120px] shrink-0 items-center justify-center sm:h-[105px] sm:w-[150px]"
                >
                  <img
                    src={getLogoSrc(client.logo)}
                    alt={client.name || "KESS client logo"}
                    width={client.width}
                    height={client.height}
                    className="max-h-[68px] max-w-[110px] object-contain sm:max-h-[82px] sm:max-w-[130px]"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
