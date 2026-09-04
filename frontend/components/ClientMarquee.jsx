import siteData from "@/data/siteData.json";

export default function ClientMarquee() {
  const { clients } = siteData;
  const getLogoSrc = (logo) =>
    logo.startsWith("/") ? logo : `/images/clients/${logo}`;

  return (
    <section className="border-t border-border py-6 bg-ivory overflow-hidden">
      <p className="text-center text-charcoal-light uppercase tracking-[0.3em] text-[10px] mb-6">
        Trusted By Industry Leaders
      </p>

      <div className="relative w-full overflow-hidden flex [mask-image:_linear-gradient(to_right,_transparent_0,_black_128px,_black_calc(100%-128px),_transparent_100%)]">
        <div className="flex w-max whitespace-nowrap animate-marquee">
          {[0, 1].map((track) => (
            <div key={track} className="flex shrink-0 gap-12">
              {clients.map((client, idx) => (
                <div
                  key={`${client.logo}-${idx}`}
                  className="h-[89px] sm:h-[105px] flex shrink-0 items-center"
                >
                  <img
                    src={getLogoSrc(client.logo)}
                    alt={client.name || "KESS client logo"}
                    width={client.width}
                    height={client.height}
                    className="h-full w-auto object-contain"
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
