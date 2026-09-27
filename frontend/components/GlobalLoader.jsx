import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { HOME_CRITICAL_IMAGES, ROUTE_CRITICAL_IMAGES, doBackgroundWarmup, warmImageSet } from "@/lib/routeCriticalAssets";
import useScrollLock from "@/lib/useScrollLock";

const CRITICAL_ASSET_TIMEOUT_MS = 2000;
// Reuse the existing critical-asset timeout as the slow-route fallback threshold.
const ROUTE_FALLBACK_MS = CRITICAL_ASSET_TIMEOUT_MS;

export default function GlobalLoader() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const hideTimerRef = useRef(null);
  const routeFallbackTimerRef = useRef(null);
  const activeNavigationIdRef = useRef(0);
  const activeRoutePathRef = useRef(null);

  useScrollLock(isLoading);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const clearTimers = () => {
      if (hideTimerRef.current) {
        window.clearTimeout(hideTimerRef.current);
        hideTimerRef.current = null;
      }

      if (routeFallbackTimerRef.current) {
        window.clearTimeout(routeFallbackTimerRef.current);
        routeFallbackTimerRef.current = null;
      }
    };

    const showLoader = () => {
      clearTimers();
      setIsLoading(true);
    };

    const hideLoader = () => {
      clearTimers();
      setIsLoading(false);
    };

    const resolveRouteAssets = (pathname) => {
      if (!pathname || pathname === "/") {
        return HOME_CRITICAL_IMAGES;
      }

      return ROUTE_CRITICAL_IMAGES[pathname] || [];
    };

    const finishRoute = (navigationId) => {
      if (navigationId !== null && activeNavigationIdRef.current !== navigationId) {
        return;
      }

      if (navigationId !== null) {
        activeRoutePathRef.current = null;
      }

      hideLoader();
    };

    const gateLoaderForRoute = (pathname, navigationId = null) => {
      if (navigationId === null) {
        showLoader();
      }

      const criticalAssets = resolveRouteAssets(pathname);
      const waitForCriticalAssets = warmImageSet(criticalAssets, CRITICAL_ASSET_TIMEOUT_MS);
      const finish = () => finishRoute(navigationId);

      hideTimerRef.current = window.setTimeout(() => {
        finish();
      }, CRITICAL_ASSET_TIMEOUT_MS);

      waitForCriticalAssets.then(() => {
        finish();
      }).catch(() => {
        finish();
      });
    };

    const handleRouteStart = (url) => {
      const nextPath = new URL(url, window.location.origin).pathname;
      const navigationId = activeNavigationIdRef.current + 1;
      activeNavigationIdRef.current = navigationId;
      activeRoutePathRef.current = nextPath;
      clearTimers();

      const criticalAssets = resolveRouteAssets(nextPath);
      if (criticalAssets.length) {
        warmImageSet(criticalAssets, CRITICAL_ASSET_TIMEOUT_MS);
      }

      routeFallbackTimerRef.current = window.setTimeout(() => {
        if (activeNavigationIdRef.current === navigationId) {
          setIsLoading(true);
        }
      }, ROUTE_FALLBACK_MS);
    };

    const handleRouteComplete = (url) => {
      const nextPath = url ? new URL(url, window.location.origin).pathname : router.pathname;
      if (activeRoutePathRef.current !== nextPath) {
        return;
      }

      gateLoaderForRoute(nextPath, activeNavigationIdRef.current);
    };

    const handleRouteError = (_error, url) => {
      const failedPath = url ? new URL(url, window.location.origin).pathname : null;
      if (failedPath && activeRoutePathRef.current !== failedPath) {
        return;
      }

      activeNavigationIdRef.current += 1;
      activeRoutePathRef.current = null;
      hideLoader();
    };

    if (router.isReady) {
      gateLoaderForRoute(router.pathname);
      doBackgroundWarmup();
    }

    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteComplete);
    router.events.on("routeChangeError", handleRouteError);

    return () => {
      activeNavigationIdRef.current += 1;
      clearTimers();
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteComplete);
      router.events.off("routeChangeError", handleRouteError);
    };
  }, [router.events, router.isReady]);

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
