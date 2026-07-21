"use client";

import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

import { useLanguage } from "~/components/language-provider";
import { useMotion } from "~/components/motion/motion-provider";
import { SiteFooter } from "~/components/site/site-footer";
import { SiteHeader } from "~/components/site/site-header";
import type { LegalCopy, LegalPageContent } from "~/content/legal";

const tx = (value: LegalCopy, language: "en" | "am") => value[language];

type LegalPageShellProps = {
  content: LegalPageContent;
  documentLabel: string;
};

export function LegalPageShell({
  content,
  documentLabel,
}: LegalPageShellProps) {
  const { language } = useLanguage();
  const { reducedMotion, refreshScroll } = useMotion();
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || reducedMotion) {
      refreshScroll();
      return;
    }

    const context = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
      timeline
        .from(".legal-hero__meta > *", {
          y: 18,
          autoAlpha: 0,
          duration: 0.6,
          stagger: 0.08,
        })
        .from(".legal-hero h1", { y: 54, autoAlpha: 0, duration: 0.95 }, 0.12)
        .from(
          ".legal-hero__calendar",
          { rotate: -10, scale: 0.72, autoAlpha: 0, duration: 1 },
          0.18,
        )
        .from(".legal-hero > p", { y: 28, autoAlpha: 0, duration: 0.75 }, 0.4)
        .from(
          ".legal-section",
          { y: 36, autoAlpha: 0, duration: 0.65, stagger: 0.08 },
          0.56,
        );
    }, root);

    refreshScroll();
    return () => context.revert();
  }, [language, reducedMotion, refreshScroll]);

  return (
    <div ref={rootRef} className="legal-page">
      <SiteHeader />
      <main id="main-content">
        <header className="legal-hero">
          <div className="legal-hero__meta">
            <span>{tx(content.badge, language)}</span>
            <span>{tx(content.updatedLabel, language)}</span>
          </div>
          <div className="legal-hero__title-row">
            <h1>{tx(content.title, language)}</h1>
            <div className="legal-hero__calendar" aria-hidden="true">
              <strong>13</strong>
              <span>{language === "am" ? "ወራት" : "months"}</span>
            </div>
          </div>
          <p>{tx(content.subtitle, language)}</p>
        </header>

        <article className="legal-document" aria-label={documentLabel}>
          {content.sections.map((section) => (
            <section className="legal-section" key={section.title.en}>
              <h2>{tx(section.title, language)}</h2>
              <p>{tx(section.body, language)}</p>
            </section>
          ))}
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
