"use client";

import { gsap } from "gsap";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";

export function IntroSequence() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion) {
      setVisible(false);
      return;
    }

    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          document.documentElement.style.overflow = previousOverflow;
          setVisible(false);
        },
      });

      timeline
        .from("[data-intro-number]", {
          yPercent: 110,
          duration: 0.34,
          stagger: 0.05,
        })
        .from(
          "[data-intro-rule]",
          { scaleX: 0, transformOrigin: "left", duration: 0.36 },
          0.1,
        )
        .to(
          "[data-intro-number]",
          { yPercent: -115, duration: 0.28, stagger: 0.03, ease: "power3.in" },
          0.58,
        )
        .to(
          "[data-intro-date]",
          { yPercent: -110, duration: 0.3, ease: "power3.in" },
          0.62,
        )
        .fromTo(
          "[data-intro-logo]",
          { autoAlpha: 0, scale: 0.88 },
          { autoAlpha: 1, scale: 1, duration: 0.32 },
          0.75,
        )
        .to(
          root,
          { yPercent: -100, duration: 0.48, ease: "power4.inOut" },
          1.06,
        );
    }, root);

    return () => {
      context.revert();
      document.documentElement.style.overflow = previousOverflow;
    };
  }, []);

  if (!visible) return null;

  return (
    <div ref={rootRef} className="intro-sequence" aria-hidden="true">
      <div className="intro-sequence__grain" />
      <div className="intro-sequence__counter">
        <div className="intro-sequence__number-mask">
          <span data-intro-number>1</span>
          <span data-intro-number>3</span>
        </div>
        <span data-intro-date className="intro-sequence__date">
          months
        </span>
      </div>
      <div className="intro-sequence__year">
        <span data-intro-date>2018 EC</span>
        <span data-intro-rule className="intro-sequence__rule" />
        <span data-intro-date>one clear rhythm</span>
      </div>
      <div data-intro-logo className="intro-sequence__logo">
        <Image
          src="/brand/logo-icon.png"
          alt=""
          width={94}
          height={102}
          priority
        />
      </div>
    </div>
  );
}
