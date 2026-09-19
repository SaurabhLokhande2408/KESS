import siteData from "@/data/siteData.json";

export const HOME_CRITICAL_IMAGES = [
  "/images/images_used/hero_bg.png",
  ...siteData.clients.map((client) => client.logo),
];

export const ROUTE_CRITICAL_IMAGES = {
  "/": HOME_CRITICAL_IMAGES,
  "/about": ["/images/team.jpg"],
  "/gallery": ["/images/images_used/g_bg.png"],
  "/clients": ["/images/clients%20_logos/The-Fern-Logo-PNG-01.webp"],
  "/services": ["/images/images_used/hero_bg.png"],
  "/training": ["/images/images_used/g_bg.png"],
  "/contact": ["/images/images_used/hero_bg.png"],
};

export function warmImage(url) {
  if (!url || typeof window === "undefined") {
    return Promise.resolve(false);
  }

  return new Promise((resolve) => {
    const image = new Image();
    image.decoding = "async";
    image.onload = () => {
      if (typeof image.decode === "function") {
        image.decode().then(() => resolve(true)).catch(() => resolve(true));
        return;
      }
      resolve(true);
    };
    image.onerror = () => resolve(false);
    image.src = url;
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

  const urls = [
    "/images/images_used/hero_bg.png",
    "/images/images_used/g_bg.png",
    "/images/team.jpg",
    "/images/logo/kess_logo.png",
    ...siteData.clients.map((client) => client.logo),
  ];

  const runner = () => {
    urls.forEach((url) => {
      if (!url) return;
      const image = new Image();
      image.decoding = "async";
      image.src = url;
    });
  };

  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(() => runner());
    return;
  }

  window.setTimeout(runner, 150);
}
