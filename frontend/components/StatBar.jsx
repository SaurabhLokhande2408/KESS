import { useEffect, useRef, useState } from "react";

const statData = [
  { label: "Years in Business", value: 10, suffix: "+" },
  { label: "Corporate Clients", value: 26, suffix: "+" },
  { label: "Cities Served", value: 3, suffix: "+" },
  { label: "Zero Tolerance Policy", value: 100, suffix: "%" },
];

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

export default function StatBar() {
  const sectionRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [counts, setCounts] = useState(statData.map(() => 0));

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let rafId;
    const startTime = performance.now();
    const duration = 2000;

    const tick = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = easeOutCubic(progress);

      setCounts(
        statData.map((stat) => Math.round(eased * stat.value))
      );

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafId);
  }, [started]);

  return (
    <section ref={sectionRef} className="border-b border-border bg-ivory">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 sm:py-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {statData.map((stat, index) => (
          <div key={stat.label}>
            <p className="font-display text-2xl sm:text-3xl text-gold">
              {counts[index]}
              {stat.suffix}
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
