import Icon from "@/components/Icon";
import useReveal from "@/lib/useReveal";

export default function ServiceCard({ service, index }) {
  const ref = useReveal();
  const num = String(index + 1).padStart(2, "0");

  return (
    <div
      ref={ref}
      className="reveal border border-border bg-white p-6 hover:border-gold transition-colors duration-300"
      style={{ transitionDelay: `${(index % 4) * 80}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-11 h-11 rounded-full border border-gold/40 flex items-center justify-center text-gold">
          <Icon name={service.icon} className="w-5 h-5" />
        </div>
        <span className="font-display text-charcoal-light/40 text-2xl">{num}</span>
      </div>
      <h3 className="font-display text-lg text-charcoal mb-1.5">
        {service.title}
      </h3>
      <p className="text-charcoal-light text-base leading-7">
        {service.description}
      </p>
    </div>
  );
}
