import { useEffect } from "react";

export default function useScrollLock(isLocked) {
  useEffect(() => {
    if (typeof document === "undefined") {
      return undefined;
    }

    const root = document.documentElement;
    const body = document.body;

    const previousBodyOverflow = body.style.overflow;
    const previousRootOverflow = root.style.overflow;
    const previousBodyHeight = body.style.height;
    const previousRootHeight = root.style.height;

    if (isLocked) {
      body.style.overflow = "hidden";
      root.style.overflow = "hidden";
      body.style.height = "100%";
      root.style.height = "100%";

      return () => {
        body.style.overflow = previousBodyOverflow;
        root.style.overflow = previousRootOverflow;
        body.style.height = previousBodyHeight;
        root.style.height = previousRootHeight;
      };
    }

    body.style.overflow = "";
    root.style.overflow = "";
    body.style.height = "";
    root.style.height = "";

    return undefined;
  }, [isLocked]);
}
