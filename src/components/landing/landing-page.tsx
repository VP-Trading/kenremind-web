"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

import { IntroSequence } from "~/components/landing/intro-sequence";
import {
  DownloadFinale,
  ExperienceScene,
  FaqScene,
  HeroScene,
  LanguageScene,
  PrivacyScene,
  ProductFlowScene,
  RulesScene,
} from "~/components/landing/scenes";
import { useLanguage } from "~/components/language-provider";
import { useMotion } from "~/components/motion/motion-provider";
import { SiteFooter } from "~/components/site/site-footer";
import { SiteHeader } from "~/components/site/site-header";

export function LandingPage() {
  const rootRef = useRef<HTMLElement>(null);
  const { language } = useLanguage();
  const { reducedMotion, refreshScroll } = useMotion();

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || reducedMotion) {
      refreshScroll();
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      const revealItems = gsap.utils.toArray<HTMLElement>(
        "[data-scene-reveal]",
      );
      revealItems.forEach((element) => {
        gsap.from(element, {
          y: 58,
          autoAlpha: 0,
          duration: 0.95,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 82%",
            once: false,
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.from(".faq-accordion__item", {
        y: 42,
        autoAlpha: 0,
        duration: 0.72,
        stagger: 0.09,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".faq-accordion",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      media.add("(min-width: 1024px)", () => {
        const heroMasks = gsap.utils.toArray<HTMLElement>(".hero-title__mask");
        const heroIntro = gsap.timeline({
          defaults: { ease: "power4.out" },
          onStart: () => gsap.set(heroMasks, { overflow: "hidden" }),
          onComplete: () => gsap.set(heroMasks, { overflow: "visible" }),
        });
        heroIntro
          .from(".hero-eyebrow", { y: 24, autoAlpha: 0, duration: 0.72 }, 0.1)
          .from(
            ".hero-title__line",
            { yPercent: 115, duration: 1.05, stagger: 0.08 },
            0.16,
          )
          .from(
            ".hero-description",
            { y: 34, autoAlpha: 0, duration: 0.8 },
            0.46,
          )
          .from(
            ".hero-actions > *",
            { y: 24, autoAlpha: 0, duration: 0.65, stagger: 0.08 },
            0.58,
          )
          .from(
            ".hero-phone",
            { y: 120, rotateY: -18, rotateZ: 5, autoAlpha: 0, duration: 1.25 },
            0.24,
          )
          .from(
            ".month-orbit",
            { scale: 0.76, rotate: -32, autoAlpha: 0, duration: 1.4 },
            0.28,
          )
          .from(
            ".hero-product__note",
            { scale: 0.82, autoAlpha: 0, duration: 0.55, stagger: 0.1 },
            0.82,
          );

        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".hero-scene",
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          })
          .to(
            ".hero-title__line",
            {
              xPercent: (index) => (index % 2 === 0 ? -16 : 16),
              autoAlpha: 0.2,
            },
            0,
          )
          .to(
            ".hero-phone",
            { y: 190, rotateY: 20, rotateZ: -4, scale: 0.86 },
            0,
          )
          .to(".month-orbit", { rotate: 88, scale: 1.42, autoAlpha: 0.18 }, 0)
          .to(".hero-product__note", { y: 50, autoAlpha: 0 }, 0);

        gsap.set([".experience-phone--02", ".experience-phone--03"], {
          autoAlpha: 0,
          y: 90,
          scale: 0.9,
        });
        gsap.set([".experience-copy--02", ".experience-copy--03"], {
          autoAlpha: 0,
          y: 42,
        });
        gsap.set(
          [".experience-progress__item--02", ".experience-progress__item--03"],
          {
            autoAlpha: 0.35,
            scale: 0.9,
          },
        );

        const experienceTimeline = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: ".experience-desktop",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        });

        experienceTimeline
          .to(".experience-phone--01", {
            xPercent: -38,
            rotateY: -18,
            rotateZ: -5,
            scale: 0.82,
            autoAlpha: 0.24,
            duration: 1,
          })
          .to(
            ".experience-copy--01",
            { y: -40, autoAlpha: 0, duration: 0.55 },
            0,
          )
          .to(
            ".experience-phone--02",
            { y: 0, scale: 1, autoAlpha: 1, duration: 1 },
            0.15,
          )
          .to(
            ".experience-copy--02",
            { y: 0, autoAlpha: 1, duration: 0.72 },
            0.28,
          )
          .to(
            ".experience-progress__item--01",
            { autoAlpha: 0.35, scale: 0.9, duration: 0.5 },
            0.15,
          )
          .to(
            ".experience-progress__item--02",
            { autoAlpha: 1, scale: 1, duration: 0.5 },
            0.15,
          )
          .to(".experience-date-rail", { xPercent: -18, duration: 1 }, 0)
          .to(
            ".experience-phone--02",
            {
              xPercent: -38,
              rotateY: -18,
              rotateZ: -5,
              scale: 0.82,
              autoAlpha: 0.24,
              duration: 1,
            },
            1.2,
          )
          .to(
            ".experience-copy--02",
            { y: -40, autoAlpha: 0, duration: 0.55 },
            1.2,
          )
          .to(
            ".experience-phone--03",
            { y: 0, scale: 1, autoAlpha: 1, duration: 1 },
            1.35,
          )
          .to(
            ".experience-copy--03",
            { y: 0, autoAlpha: 1, duration: 0.72 },
            1.48,
          )
          .to(
            ".experience-progress__item--02",
            { autoAlpha: 0.35, scale: 0.9, duration: 0.5 },
            1.35,
          )
          .to(
            ".experience-progress__item--03",
            { autoAlpha: 1, scale: 1, duration: 0.5 },
            1.35,
          )
          .to(".experience-date-rail", { xPercent: -36, duration: 1 }, 1.2);

        const rulesTrack = document.querySelector<HTMLElement>(".rules-track");
        if (rulesTrack) {
          gsap.to(rulesTrack, {
            x: () =>
              -Math.max(0, rulesTrack.scrollWidth - window.innerWidth + 112),
            ease: "none",
            scrollTrigger: {
              trigger: ".rules-scene",
              start: "top top",
              end: "bottom bottom",
              scrub: 0.85,
              invalidateOnRefresh: true,
            },
          });
        }

        gsap.from(".rule-panel", {
          y: 80,
          rotate: 2.5,
          autoAlpha: 0,
          stagger: 0.12,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".rules-track-wrap",
            start: "top 78%",
          },
        });

        const flowTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".product-flow__stage",
            start: "top 78%",
            end: "bottom 22%",
            scrub: 0.7,
          },
        });
        flowTimeline
          .from(
            ".flow-phone--create",
            { x: 170, y: 120, rotate: 0, scale: 0.72 },
            0,
          )
          .from(".flow-phone--home", { y: 180, scale: 0.82 }, 0)
          .from(
            ".flow-phone--calendar",
            { x: -170, y: 120, rotate: 0, scale: 0.72 },
            0,
          )
          .to(".product-flow__orbit", { rotate: 26, scale: 1.08 }, 0);

        gsap.from(".privacy-phone", {
          y: 160,
          rotateY: -20,
          rotateZ: 8,
          scale: 0.82,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".privacy-scene__product",
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        });
        gsap.from(".privacy-shield", {
          scale: 0.45,
          rotate: -24,
          autoAlpha: 0,
          duration: 1,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: ".privacy-scene__product",
            start: "top 72%",
            toggleActions: "play none none reverse",
          },
        });

        gsap.from(".privacy-fact", {
          x: -32,
          autoAlpha: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".privacy-facts",
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".language-scene",
              start: "top 72%",
              end: "bottom 28%",
              scrub: 0.7,
            },
          })
          .from(".language-sample--en", { xPercent: -42, autoAlpha: 0 }, 0)
          .from(".language-sample--am", { xPercent: 42, autoAlpha: 0 }, 0)
          .to(".language-scene__months", { xPercent: -20 }, 0);

        gsap.from(".finale-phone--back", {
          x: 180,
          y: 140,
          rotate: 4,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: ".download-finale", start: "top 72%" },
        });
        gsap.from(".finale-phone--front", {
          x: 260,
          y: 220,
          rotate: 9,
          duration: 1.25,
          ease: "power3.out",
          scrollTrigger: { trigger: ".download-finale", start: "top 72%" },
        });
      });

      media.add("(max-width: 1023px)", () => {
        gsap.from(".hero-phone", {
          y: 90,
          rotate: 4,
          autoAlpha: 0,
          duration: 1,
          ease: "power3.out",
        });
        gsap.from(".month-orbit", {
          scale: 0.8,
          rotate: -28,
          autoAlpha: 0,
          duration: 1.05,
          ease: "power3.out",
        });
      });
    }, root);

    const refreshTimer = window.setTimeout(refreshScroll, 180);
    window.addEventListener("load", refreshScroll, { once: true });

    return () => {
      window.clearTimeout(refreshTimer);
      window.removeEventListener("load", refreshScroll);
      media.revert();
      context.revert();
    };
  }, [language, reducedMotion, refreshScroll]);

  return (
    <main id="main-content" ref={rootRef} className="cinematic-site">
      <IntroSequence />
      <SiteHeader />
      <HeroScene language={language} />
      <ExperienceScene language={language} />
      <RulesScene language={language} />
      <ProductFlowScene language={language} />
      <PrivacyScene language={language} />
      <LanguageScene language={language} />
      <FaqScene language={language} />
      <DownloadFinale language={language} />
      <SiteFooter dark />
    </main>
  );
}
