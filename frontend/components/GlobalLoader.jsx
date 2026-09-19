import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const MIN_LOADER_MS = 1000;

export default function GlobalLoader() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const minimumTimerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const criticalLoader = document.getElementById("kess-critical-loader");

    const clearMinimumTimer = () => {
      if (minimumTimerRef.current) {
        window.clearTimeout(minimumTimerRef.current);
        minimumTimerRef.current = null;
      }
    };

    const beginMinimumTimer = () => {
      clearMinimumTimer();
      minimumTimerRef.current = window.setTimeout(() => {
        setIsLoading(false);
        minimumTimerRef.current = null;
      }, MIN_LOADER_MS);
    };

    const activateReactLoader = () => {
      setIsLoading(true);
      beginMinimumTimer();

      requestAnimationFrame(() => {
        if (criticalLoader) {
          criticalLoader.classList.add("is-hidden");
        }
      });
    };

    const handlePageReady = () => {
      activateReactLoader();
    };

    const handleStateChange = () => {
      if (document.readyState === "complete") {
        handlePageReady();
      }
    };

    const handleWindowLoad = () => {
      handlePageReady();
    };

    const handleRouteStart = () => {
      setIsLoading(true);
      beginMinimumTimer();
    };

    const handleRouteComplete = () => {
      setIsLoading(true);
      beginMinimumTimer();
    };

    document.addEventListener("readystatechange", handleStateChange);
    window.addEventListener("load", handleWindowLoad, { once: true });
    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteComplete);
    router.events.on("routeChangeError", handleRouteComplete);

    return () => {
      clearMinimumTimer();
      document.removeEventListener("readystatechange", handleStateChange);
      window.removeEventListener("load", handleWindowLoad);
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteComplete);
      router.events.off("routeChangeError", handleRouteComplete);
    };
  }, [router.events]);

  return (
    <div
      aria-live="polite"
      aria-busy={isLoading}
      className={`loader-shell fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black transition-opacity duration-500 ease-out ${
        isLoading ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="loader-content flex flex-col items-center justify-center text-center">
        <div className="loader-frame relative flex items-center justify-center">
          <svg
            className="loader-ring absolute inset-0"
            viewBox="0 0 220 220"
            width="100%"
            height="100%"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="gold-ring-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FCF6BA" />
                <stop offset="20%" stopColor="#BF953F" />
                <stop offset="50%" stopColor="#FBF5B7" />
                <stop offset="80%" stopColor="#B38728" />
                <stop offset="100%" stopColor="#FCF6BA" />
              </linearGradient>
            </defs>
            <circle
              cx="110"
              cy="110"
              r="88"
              stroke="url(#gold-ring-gradient)"
              strokeWidth="3.5"
              fill="none"
            />
          </svg>

          <img
            src="/images/logo/kess_logo.png"
            alt="KESS logo"
            className="relative z-10 h-24 w-24 object-contain sm:h-28 sm:w-28 md:h-32 md:w-32"
            loading="eager"
          />
        </div>

        <div className="mt-7 flex flex-col items-center justify-center gap-3 text-center">
          <div className="loader-text tracking-[0.52em] text-[0.72rem] font-medium uppercase text-[#f5e7b2] sm:text-xs">
            LOADING
          </div>

          <div className="loader-dots flex items-center justify-center gap-2" aria-label="Loading progress">
            <span className="loader-dot" />
            <span className="loader-dot" />
            <span className="loader-dot" />
          </div>
        </div>
      </div>
    </div>
  );
}
