import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { HOME_CRITICAL_IMAGES, ROUTE_CRITICAL_IMAGES, doBackgroundWarmup, warmImageSet } from "@/lib/routeCriticalAssets";
import useScrollLock from "@/lib/useScrollLock";

const MAX_LOADER_MS = 2000;
const MIN_LOADER_MS = 1500;

export default function GlobalLoader() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const hideTimerRef = useRef(null);
  const minHideTimerRef = useRef(null);
  const loaderShownAtRef = useRef(Date.now());

  useScrollLock(isLoading);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const clearHideTimer = () => {
      if (hideTimerRef.current) {
        window.clearTimeout(hideTimerRef.current);
        hideTimerRef.current = null;
      }

      if (minHideTimerRef.current) {
        window.clearTimeout(minHideTimerRef.current);
        minHideTimerRef.current = null;
      }
    };

    const showLoader = () => {
      clearHideTimer();
      loaderShownAtRef.current = Date.now();
      setIsLoading(true);
    };

    const hideLoader = () => {
      clearHideTimer();
      setIsLoading(false);
    };

    const hideLoaderWithMinimum = () => {
      const elapsed = Date.now() - loaderShownAtRef.current;
      const remaining = Math.max(MIN_LOADER_MS - elapsed, 0);

      if (remaining > 0) {
        minHideTimerRef.current = window.setTimeout(() => {
          minHideTimerRef.current = null;
          hideLoader();
        }, remaining);
        return;
      }

      hideLoader();
    };

    const resolveRouteAssets = (pathname) => {
      if (!pathname || pathname === "/") {
        return HOME_CRITICAL_IMAGES;
      }

      return ROUTE_CRITICAL_IMAGES[pathname] || [];
    };

    const gateLoaderForRoute = (pathname) => {
      showLoader();
      const criticalAssets = resolveRouteAssets(pathname);
      const waitForCriticalAssets = warmImageSet(criticalAssets, 2000);
      hideTimerRef.current = window.setTimeout(() => {
        hideLoaderWithMinimum();
      }, MAX_LOADER_MS);

      waitForCriticalAssets.then(() => {
        hideLoaderWithMinimum();
      }).catch(() => {
        hideLoaderWithMinimum();
      });
    };

    const handleRouteStart = (url) => {
      const nextPath = new URL(url, window.location.origin).pathname;
      showLoader();
      const criticalAssets = resolveRouteAssets(nextPath);
      if (criticalAssets.length) {
        warmImageSet(criticalAssets, 2000);
      }
    };

    const handleRouteComplete = (url) => {
      const nextPath = url ? new URL(url, window.location.origin).pathname : router.pathname;
      gateLoaderForRoute(nextPath);
    };

    if (router.isReady) {
      gateLoaderForRoute(router.pathname);
      doBackgroundWarmup();
    }

    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteComplete);
    router.events.on("routeChangeError", handleRouteComplete);

    return () => {
      clearHideTimer();
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteComplete);
      router.events.off("routeChangeError", handleRouteComplete);
    };
  }, [router.events, router.isReady, router.pathname]);

  return (
    <div
      aria-live="polite"
      aria-busy={isLoading}
      className={`loader-shell fixed inset-0 z-[9999] flex h-dvh items-center justify-center overflow-hidden bg-black transition-opacity duration-500 ease-out ${
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

          <Image
            src="/images/logo/kess_logo.png"
            alt="KESS logo"
            width={112}
            height={112}
            priority
            className="relative z-10 h-24 w-24 object-contain sm:h-28 sm:w-28 md:h-32 md:w-32"
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
