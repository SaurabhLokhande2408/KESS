export default function CurveLines({
  position = "right",
  size = "wide",
  opacity = 1,
  flip = false,
  rotate = 0,
  density = "soft",
  variant = "flow",
  color = "#111111",
  className = "",
}) {
  const viewBox = variant === "rising" ? "0 0 760 380" : "0 0 700 360";
  const paths = variant === "rising"
    ? [
        "M-80 310C80 95 205 55 350 145C470 220 545 190 820 10",
        "M-80 338C80 123 205 83 350 173C470 248 545 218 820 38",
        "M-80 366C80 151 205 111 350 201C470 276 545 246 820 66",
      ]
    : [
        "M-80 45C95 250 205 295 350 210C470 140 545 145 760 330",
        "M-80 70C95 275 205 320 350 235C470 165 545 170 760 355",
        "M-80 95C95 300 205 345 350 260C470 190 545 195 760 380",
      ];
  const strokeOpacity = density === "fine"
    ? [0.08, 0.05, 0.03]
    : [0.12, 0.075, 0.045];
  const transform = `${flip ? "scaleX(-1) " : ""}rotate(${rotate}deg)`;
  const positionClass = className.includes("left-") || className.includes("right-")
    ? ""
    : position === "left"
      ? "left-0"
      : "right-0";
  const sizeClass = className.includes("h-") || className.includes("w-")
    ? ""
    : size === "compact"
      ? "h-[240px] w-[460px]"
      : size === "tall"
        ? "h-[440px] w-[760px]"
        : "h-[360px] w-[680px]";

  return (
    <svg
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      className={`pointer-events-none absolute ${positionClass} ${sizeClass} ${className}`}
      style={{ opacity, transform, transformOrigin: "center" }}
    >
      {paths.map((path, index) => (
        <path
          key={path}
          d={path}
          stroke={color}
          strokeWidth={index === 0 ? "1.1" : index === 1 ? "0.9" : "0.75"}
          opacity={strokeOpacity[index]}
        />
      ))}
    </svg>
  );
}
