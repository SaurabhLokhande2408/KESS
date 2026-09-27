import { getImageProps } from "next/image";
import siteData from "@/data/siteData.json";

const HERO_IMAGE_SIZES = "(max-width: 768px) 100vw, 80vw";

export const HOME_CRITICAL_IMAGES = ["/images/images_used/hero_bg.webp"];

export const ROUTE_CRITICAL_IMAGES = {
  "/": HOME_CRITICAL_IMAGES,
  "/about": ["/images/team.jpg"],
  "/gallery": ["/images/images_used/g_bg.png"],
  "/clients": [],
  "/services": [],
  "/training": [],
  "/contact": ["/images/images_used/hero_bg.webp"],
};

function getOptimizedSourcePath(source) {
  try {
    const sourceUrl = new URL(source, window.location.origin);
    if (sourceUrl.pathname === "/_next/image") {
      const originalSource = sourceUrl.searchParams.get("url");
      return originalSource
        ? new URL(originalSource, window.location.origin).pathname
        : "";
    }
    return sourceUrl.pathname;
  } catch {
    return "";
  }
}

function findRenderedImage(url) {
  const expectedPath = getOptimizedSourcePath(url);
  if (!expectedPath) return null;

  return Array.from(document.images).find((image) => {
    const sources = [image.currentSrc, image.src];
    if (image.srcset) {
      sources.push(
        ...image.srcset
          .split(",")
          .map((candidate) => candidate.trim().split(/\s+/)[0])
      );
    }

    return sources.some((source) => getOptimizedSourcePath(source) === expectedPath);
  });
}

export function warmImage(url) {
  if (!url || typeof window === "undefined" || typeof document === "undefined") {
    return Promise.resolve(false);
  }

  const image = findRenderedImage(url);
  if (!image) return Promise.resolve(true);

  const waitForDecode = () => {
    if (typeof image.decode === "function") {
      return image.decode().then(() => true).catch(() => true);
    }
    return Promise.resolve(true);
  };

  if (image.complete) {
    return image.naturalWidth > 0 ? waitForDecode() : Promise.resolve(false);
  }

  return new Promise((resolve) => {
    const finish = (loaded) => {
      image.removeEventListener("load", handleLoad);
      image.removeEventListener("error", handleError);
      if (loaded) {
        waitForDecode().then(resolve);
      } else {
        resolve(false);
      }
    };
    const handleLoad = () => finish(true);
    const handleError = () => finish(false);

    image.addEventListener("load", handleLoad, { once: true });
    image.addEventListener("error", handleError, { once: true });
  });
}

export function warmImageSet(urls = [], timeoutMs = 2000) {
  const unique = [...new Set((urls || []).filter(Boolean))];

  if (!unique.length || typeof window === "undefined") {
    return Promise.resolve(true);
  }

  const timeoutPromise = new Promise((resolve) => {
    window.setTimeout(() => resolve(false), timeoutMs);
  });

  const loadPromise = Promise.all(unique.map((url) => warmImage(url))).then(() => true);

  return Promise.race([loadPromise, timeoutPromise]);
}

export function doBackgroundWarmup() {
  if (typeof window === "undefined") return;

  const connection = window.navigator.connection;
  if (
    connection?.saveData ||
    connection?.effectiveType === "slow-2g" ||
    connection?.effectiveType === "2g"
  ) {
    return;
  }

  const images = [
    { src: "/images/images_used/hero_bg.webp", width: 1920, height: 1280, sizes: HERO_IMAGE_SIZES },
    { src: "/images/images_used/g_bg.png", width: 1920, height: 1280, sizes: HERO_IMAGE_SIZES },
    { src: "/images/team.jpg", width: 1920, height: 1280, sizes: HERO_IMAGE_SIZES },
    { src: "/images/logo/kess_logo.webp", width: 112, height: 112 },
    ...siteData.clients.map((client) => ({
      src: client.logo,
      width: client.width || 150,
      height: client.height || 80,
      sizes: "(max-width: 640px) 110px, 150px",
    })),
  ];

  const runner = () => {
    const currentConnection = window.navigator.connection;
    if (
      currentConnection?.saveData ||
      currentConnection?.effectiveType === "slow-2g" ||
      currentConnection?.effectiveType === "2g"
    ) {
      return;
    }

    images.forEach(({ src, width, height, sizes }) => {
      if (!src) return;
      const { props } = getImageProps({
        src,
        width,
        height,
        sizes,
        alt: "",
      });
      const image = new Image();
      image.decoding = "async";
      if (props.sizes) image.sizes = props.sizes;
      if (props.srcSet) image.srcset = props.srcSet;
      image.src = props.src;
    });
  };

  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(() => runner());
    return;
  }

  window.setTimeout(runner, 150);
}
