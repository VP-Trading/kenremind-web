"use client";

import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type MotionContextValue = {
  reducedMotion: boolean;
  refreshScroll: () => void;
  scrollToHash: (hash: string) => void;
};

const MotionContext = createContext<MotionContextValue | undefined>(undefined);

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const anchorTweenRef = useRef<gsap.core.Tween | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointerQuery = window.matchMedia("(pointer: fine)");

    const syncMotionPreference = () => setReducedMotion(reducedQuery.matches);
    syncMotionPreference();
    reducedQuery.addEventListener("change", syncMotionPreference);

    if (!reducedMotion && !reducedQuery.matches && finePointerQuery.matches) {
      const lenis = new Lenis({
        duration: 1.05,
        smoothWheel: true,
        syncTouch: false,
        wheelMultiplier: 0.9,
      });

      const updateLenis = (time: number) => lenis.raf(time * 1000);
      lenis.on("scroll", () => ScrollTrigger.update());
      gsap.ticker.add(updateLenis);
      gsap.ticker.lagSmoothing(0);
      lenisRef.current = lenis;

      return () => {
        reducedQuery.removeEventListener("change", syncMotionPreference);
        gsap.ticker.remove(updateLenis);
        lenis.destroy();
        lenisRef.current = null;
        anchorTweenRef.current?.kill();
      };
    }

    return () => {
      reducedQuery.removeEventListener("change", syncMotionPreference);
      anchorTweenRef.current?.kill();
    };
  }, [reducedMotion]);

  useEffect(() => {
    let cancelled = false;
    void document.fonts.ready.then(() => {
      if (!cancelled) ScrollTrigger.refresh();
    });

    return () => {
      cancelled = true;
    };
  }, []);

  const refreshScroll = useCallback(() => {
    window.requestAnimationFrame(() => ScrollTrigger.refresh());
  }, []);

  const scrollToHash = useCallback(
    (hash: string) => {
      if (!hash.startsWith("#")) return;
      const target = document.querySelector<HTMLElement>(hash);
      if (!target) return;

      const headerValue = getComputedStyle(document.documentElement)
        .getPropertyValue("--header-height")
        .trim();
      const parsedHeaderHeight = Number.parseFloat(headerValue);
      const headerHeight = Number.isFinite(parsedHeaderHeight)
        ? parsedHeaderHeight
        : 0;
      const top = Math.max(
        0,
        window.scrollY + target.getBoundingClientRect().top - headerHeight - 16,
      );

      anchorTweenRef.current?.kill();
      window.history.pushState(null, "", hash);

      if (reducedMotion) {
        window.scrollTo({ top, behavior: "auto" });
        return;
      }

      if (lenisRef.current) {
        lenisRef.current.scrollTo(top, {
          duration: 1.15,
          force: true,
          onComplete: () => ScrollTrigger.refresh(),
        });
        return;
      }

      const proxy = { y: window.scrollY };
      anchorTweenRef.current = gsap.to(proxy, {
        y: top,
        duration: 1.05,
        ease: "power3.inOut",
        overwrite: true,
        onUpdate: () => window.scrollTo(0, proxy.y),
        onComplete: () => ScrollTrigger.refresh(),
      });
    },
    [reducedMotion],
  );

  const value = useMemo(
    () => ({ reducedMotion, refreshScroll, scrollToHash }),
    [reducedMotion, refreshScroll, scrollToHash],
  );

  return (
    <MotionContext.Provider value={value}>{children}</MotionContext.Provider>
  );
}

export function useMotion() {
  const context = useContext(MotionContext);
  if (!context) {
    throw new Error("useMotion must be used within MotionProvider");
  }
  return context;
}
