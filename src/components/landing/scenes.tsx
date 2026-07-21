"use client";

import {
  ArrowDown,
  ArrowRight,
  BellRing,
  CalendarDays,
  Check,
  Languages,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

import { LanguageToggle } from "~/components/language-toggle";
import type { Language } from "~/components/language-provider";
import { useMotion } from "~/components/motion/motion-provider";
import { useStoreDownload } from "~/components/site/store-download-provider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import {
  ethiopianMonths,
  experienceSteps,
  faqs,
  privacyFacts,
  reminderRules,
  tx,
} from "~/content/marketing";

type SceneProps = { language: Language };

const phoneScreens = {
  hero: "/brand/mocks/home-ios-2026-07.webp",
  home: "/brand/mocks/home-ios-2026-07.webp",
  create: "/brand/mocks/create-reminder-ios-2026-07.webp",
  calendar: "/brand/mocks/calendar-view-ios-2026-07.webp",
  settings: "/brand/mocks/settings-ios-2026-07.webp",
} as const;

function PhoneMock({
  src,
  alt,
  className = "",
  priority = false,
  width = 767,
  height = 1600,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      fetchPriority={priority ? "high" : "auto"}
      sizes="(max-width: 640px) 58vw, (max-width: 1024px) 32vw, 360px"
      className={`phone-mock ${className}`}
    />
  );
}

export function HeroScene({ language }: SceneProps) {
  const { openStore } = useStoreDownload();
  const { scrollToHash } = useMotion();

  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollToHash("#features");
  };

  return (
    <section id="top" className="hero-scene" aria-labelledby="hero-title">
      <div className="hero-scene__noise" aria-hidden="true" />
      <div
        className="hero-scene__date hero-scene__date--top"
        aria-hidden="true"
      >
        <span>13</span>
        <span>{language === "am" ? "ወራት" : "months"}</span>
      </div>
      <div
        className="hero-scene__date hero-scene__date--side"
        aria-hidden="true"
      >
        <span>2018</span>
        <span>EC</span>
      </div>

      <div className="hero-scene__content">
        <div className="hero-scene__copy">
          <p className="scene-eyebrow hero-eyebrow">
            <span />
            {language === "am"
              ? "13 ወራት። አንድ ግልጽ ሂደት።"
              : "13 months. One clear rhythm."}
          </p>
          <h1 id="hero-title" className="hero-title">
            <span className="hero-title__mask">
              <span className="hero-title__line">
                {language === "am" ? "የኢትዮጵያ" : "Your Ethiopian"}
              </span>
            </span>
            <span className="hero-title__mask">
              <span className="hero-title__line">
                {language === "am" ? "ቀን መቁጠሪያዎ፣" : "calendar, right"}
              </span>
            </span>
            <span className="hero-title__mask">
              <span className="hero-title__line hero-title__line--accent">
                {language === "am" ? "በትክክል በሰዓቱ።" : "on time."}
              </span>
            </span>
          </h1>
          <p className="hero-description">
            {language === "am"
              ? "አንድ ጊዜ እና ተደጋጋሚ ማሳሰቢያዎችን በኢትዮጵያ ቀናት ያቅዱ፣ ከመሣሪያዎ ቀን መቁጠሪያ ጋር ያመሳስሉ እና ዝርዝሮቹን በስልክዎ ላይ ያቆዩ።"
              : "Plan one-time and recurring reminders in Ethiopian dates, sync them with your device calendar, and keep the details on your phone."}
          </p>
          <div className="hero-actions">
            <button
              type="button"
              className="button-primary"
              onClick={openStore}
            >
              {language === "am" ? "KenRemindን ያግኙ" : "Get KenRemind"}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <a href="#features" onClick={handleScroll} className="button-quiet">
              {language === "am" ? "እንዴት እንደሚሰራ" : "See how it works"}
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div
          className="hero-product"
          aria-label={
            language === "am"
              ? "የKenRemind መተግበሪያ እይታ"
              : "KenRemind app preview"
          }
        >
          <div className="month-orbit" aria-hidden="true">
            <div className="month-orbit__ring" />
            {ethiopianMonths.map((month, index) => (
              <span
                key={month.en}
                className="month-orbit__item"
                style={{ "--month-index": index } as CSSProperties}
              >
                {tx(month, language)}
              </span>
            ))}
            <span className="month-orbit__core">13</span>
          </div>
          <div className="hero-phone-wrap">
            <PhoneMock
              src={phoneScreens.hero}
              alt={
                language === "am"
                  ? "የKenRemind መነሻ ገጽ"
                  : "KenRemind home screen"
              }
              className="hero-phone"
              priority
              width={767}
              height={1600}
            />
          </div>
          <div
            className="hero-product__note hero-product__note--date"
            aria-hidden="true"
          >
            <CalendarDays className="h-4 w-4" />
            <span>{language === "am" ? "14 ሐምሌ" : "14 Hamle"}</span>
          </div>
          <div
            className="hero-product__note hero-product__note--private"
            aria-hidden="true"
          >
            <LockKeyhole className="h-4 w-4" />
            <span>{language === "am" ? "በመሣሪያ ላይ" : "On-device"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ExperienceScene({ language }: SceneProps) {
  return (
    <section
      id="features"
      className="experience-scene anchor-section"
      aria-labelledby="experience-title"
    >
      <div className="experience-scene__intro" data-scene-reveal>
        <p className="scene-eyebrow scene-eyebrow--dark">
          {language === "am" ? "የቀን መቁጠሪያ ሞተር" : "The calendar engine"}
        </p>
        <h2 id="experience-title">
          {language === "am"
            ? "ጊዜ በእርስዎ ቀን መቁጠሪያ መናገር አለበት።"
            : "Time should speak your calendar."}
        </h2>
        <p>
          {language === "am"
            ? "KenRemind ከመስከረም እስከ ጳጉሜ ያለውን ሂደት ይረዳል፤ ስለዚህ ቀኖችን እንደሚጠቀሙባቸው ማቀድ ይችላሉ።"
            : "KenRemind understands the rhythm from Meskerem through Pagume, so you can plan in the dates you already use."}
        </p>
      </div>

      <div
        className="experience-desktop"
        aria-label={
          language === "am" ? "የመተግበሪያ ሂደት" : "App experience sequence"
        }
      >
        <div className="experience-sticky">
          <div className="experience-progress" aria-hidden="true">
            {experienceSteps.map((step) => (
              <span
                key={step.number}
                className={`experience-progress__item experience-progress__item--${step.number}`}
              >
                {step.number}
              </span>
            ))}
          </div>
          <div className="experience-copy-stage">
            {experienceSteps.map((step) => (
              <article
                key={step.number}
                className={`experience-copy experience-copy--${step.number}`}
              >
                <p>{tx(step.eyebrow, language)}</p>
                <h3>{tx(step.title, language)}</h3>
                <span>{tx(step.description, language)}</span>
              </article>
            ))}
          </div>
          <div className="experience-phone-stage">
            <div className="experience-phone-stage__halo" aria-hidden="true" />
            {experienceSteps.map((step) => (
              <PhoneMock
                key={step.number}
                src={step.screen}
                alt={tx(step.alt, language)}
                className={`experience-phone experience-phone--${step.number}`}
              />
            ))}
          </div>
          <div className="experience-date-rail" aria-hidden="true">
            {ethiopianMonths.map((month) => (
              <span key={month.en}>{tx(month, language)}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="experience-mobile">
        {experienceSteps.map((step) => (
          <article
            key={step.number}
            className="experience-mobile__step"
            data-scene-reveal
          >
            <div className="experience-mobile__copy">
              <span>{step.number}</span>
              <p>{tx(step.eyebrow, language)}</p>
              <h3>{tx(step.title, language)}</h3>
              <div>{tx(step.description, language)}</div>
            </div>
            <PhoneMock
              src={step.screen}
              alt={tx(step.alt, language)}
              className={`experience-mobile__phone experience-mobile__phone--${step.number}`}
            />
          </article>
        ))}
      </div>
    </section>
  );
}

export function RulesScene({ language }: SceneProps) {
  return (
    <section
      id="rules"
      className="rules-scene anchor-section"
      aria-labelledby="rules-title"
    >
      <div className="rules-scene__wash" aria-hidden="true" />
      <div className="rules-sticky">
        <div className="rules-heading" data-scene-reveal>
          <p className="scene-eyebrow scene-eyebrow--dark">
            {language === "am" ? "የማሳሰቢያ ደንቦች" : "Reminder rules"}
          </p>
          <h2 id="rules-title">
            {language === "am" ? "ሂደቱን አንድ ጊዜ ያዘጋጁ።" : "Set the rhythm once."}
          </h2>
          <p>
            {language === "am"
              ? "ቀኑን ይምረጡ። መድገሚያውን ይወስኑ። KenRemind ከዚያ በኋላ ያሉትን ቀናት ያስተናግዳል።"
              : "Choose the date. Decide the cadence. KenRemind handles every date after that."}
          </p>
        </div>
        <div className="rules-track-wrap">
          <div className="rules-track">
            {reminderRules.map((rule) => (
              <article key={rule.marker} className="rule-panel">
                <div className="rule-panel__top">
                  <span>{rule.marker}</span>
                  <CalendarDays className="h-5 w-5" aria-hidden="true" />
                </div>
                <p className="rule-panel__date">{tx(rule.date, language)}</p>
                <h3>{tx(rule.title, language)}</h3>
                <p>{tx(rule.description, language)}</p>
                <div className="rule-panel__line" aria-hidden="true">
                  <span />
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="rules-count" aria-hidden="true">
          <span>01</span>
          <div />
          <span>04</span>
        </div>
      </div>
    </section>
  );
}

export function ProductFlowScene({ language }: SceneProps) {
  return (
    <section className="product-flow" aria-labelledby="product-flow-title">
      <div className="product-flow__header" data-scene-reveal>
        <p className="scene-eyebrow">
          {language === "am" ? "አንድ የተረጋጋ ሂደት" : "One calm flow"}
        </p>
        <h2 id="product-flow-title">
          {language === "am"
            ? "ከማሳሰቢያ ወደ ቀን መቁጠሪያ፣ ያለ የአእምሮ ስሌት።"
            : "From reminder to calendar, without the mental math."}
        </h2>
      </div>
      <div className="product-flow__stage">
        <div className="product-flow__orbit" aria-hidden="true">
          <span>HOME</span>
          <span>CREATE</span>
          <span>CALENDAR</span>
        </div>
        <PhoneMock
          src={phoneScreens.create}
          alt={language === "am" ? "የማሳሰቢያ መፍጠሪያ" : "Create reminder"}
          className="flow-phone flow-phone--create"
        />
        <PhoneMock
          src={phoneScreens.home}
          alt={language === "am" ? "የመነሻ ገጽ" : "Home dashboard"}
          className="flow-phone flow-phone--home"
        />
        <PhoneMock
          src={phoneScreens.calendar}
          alt={language === "am" ? "የቀን መቁጠሪያ ገጽ" : "Calendar view"}
          className="flow-phone flow-phone--calendar"
        />
      </div>
      <div className="product-flow__foot" data-scene-reveal>
        <span>{language === "am" ? "ይፍጠሩ" : "Create"}</span>
        <ArrowRight aria-hidden="true" />
        <span>{language === "am" ? "ያቅዱ" : "Schedule"}</span>
        <ArrowRight aria-hidden="true" />
        <span>{language === "am" ? "ያስታውሱ" : "Remember"}</span>
      </div>
    </section>
  );
}

export function PrivacyScene({ language }: SceneProps) {
  return (
    <section
      id="privacy"
      className="privacy-scene anchor-section"
      aria-labelledby="privacy-title"
    >
      <div className="privacy-scene__grid">
        <div className="privacy-scene__copy" data-scene-reveal>
          <p className="scene-eyebrow">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            {language === "am" ? "ግላዊነት በንድፉ ውስጥ" : "Privacy in the design"}
          </p>
          <h2 id="privacy-title">
            {language === "am"
              ? "በንድፉ ግላዊ። በነባሪ ግልጽ።"
              : "Private by design. Clear by default."}
          </h2>
          <p className="privacy-scene__lede">
            {language === "am"
              ? "ማሳሰቢያዎችዎ በስልክዎ ላይ ይቆያሉ። እርስዎ የሚቆጣጠሩትን ቅንብር እና ግልጽ የትንታኔ ወሰኖች ያገኛሉ።"
              : "Your reminders stay on your phone, with controls you can understand and analytics boundaries you can see."}
          </p>
          <div className="privacy-facts">
            {privacyFacts.map((fact, index) => (
              <article key={fact.title.en} className="privacy-fact">
                <span>0{index + 1}</span>
                <div>
                  <h3>{tx(fact.title, language)}</h3>
                  <p>{tx(fact.description, language)}</p>
                </div>
              </article>
            ))}
          </div>
          <Link href="/privacy" className="button-light">
            {language === "am" ? "ሙሉ ፖሊሲውን ያንብቡ" : "Read the full policy"}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="privacy-scene__product">
          <div className="privacy-shield" aria-hidden="true">
            <ShieldCheck />
          </div>
          <PhoneMock
            src={phoneScreens.settings}
            alt={
              language === "am"
                ? "የKenRemind የግላዊነት ቅንብሮች"
                : "KenRemind privacy settings"
            }
            className="privacy-phone"
          />
          <div className="privacy-scene__status" aria-hidden="true">
            <span />
            {language === "am" ? "የተጠበቀ" : "Protected"}
          </div>
        </div>
      </div>
    </section>
  );
}

export function LanguageScene({ language }: SceneProps) {
  return (
    <section className="language-scene" aria-labelledby="language-title">
      <div className="language-scene__months" aria-hidden="true">
        {[...ethiopianMonths, ...ethiopianMonths].map((month, index) => (
          <span key={`${month.en}-${index}`}>{tx(month, language)}</span>
        ))}
      </div>
      <div className="language-scene__content" data-scene-reveal>
        <div className="language-scene__icon" aria-hidden="true">
          <Languages />
        </div>
        <p className="scene-eyebrow scene-eyebrow--dark">
          {language === "am" ? "በቋንቋዎ" : "In your language"}
        </p>
        <h2 id="language-title">
          {language === "am"
            ? "እንግሊዝኛ ወይም አማርኛ። ተመሳሳይ የተረጋጋ ሂደት።"
            : "English or Amharic. The same calm flow."}
        </h2>
        <p>
          {language === "am"
            ? "የቀን መቁጠሪያዎን እና ማሳሰቢያዎችዎን በሚመችዎ ቋንቋ ያንብቡ።"
            : "Read your calendar and manage reminders in the language that feels most natural."}
        </p>
        <LanguageToggle className="language-scene__toggle" />
      </div>
      <div className="language-scene__sample" aria-hidden="true">
        <p className="language-sample language-sample--en">
          10 Yekatit 2018 EC
        </p>
        <p className="language-sample language-sample--am">10 የካቲት 2018 ዓ.ም</p>
      </div>
    </section>
  );
}

export function FaqScene({ language }: SceneProps) {
  return (
    <section
      id="faq"
      className="faq-scene anchor-section"
      aria-labelledby="faq-title"
    >
      <div className="faq-marquee" aria-hidden="true">
        <div>
          <span>Questions?</span>
          <Sparkles />
          <span>ጥያቄዎች?</span>
          <Sparkles />
          <span>Questions?</span>
          <Sparkles />
        </div>
      </div>
      <div className="faq-scene__content">
        <div className="faq-scene__heading" data-scene-reveal>
          <p className="scene-eyebrow">FAQ / 07</p>
          <h2 id="faq-title">
            {language === "am"
              ? "ጥያቄዎች፣ ያለ ግምት።"
              : "Questions, without the guesswork."}
          </h2>
        </div>
        <Accordion type="single" collapsible className="faq-accordion">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question.en}
              value={`faq-${index}`}
              className="faq-accordion__item"
            >
              <span className="faq-accordion__number">0{index + 1}</span>
              <AccordionTrigger>{tx(faq.question, language)}</AccordionTrigger>
              <AccordionContent>{tx(faq.answer, language)}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export function DownloadFinale({ language }: SceneProps) {
  const { openStore } = useStoreDownload();

  return (
    <section className="download-finale" aria-labelledby="download-title">
      <div className="download-finale__ring" aria-hidden="true">
        {ethiopianMonths.map((month) => (
          <span key={month.en}>{tx(month, language)}</span>
        ))}
      </div>
      <div className="download-finale__content" data-scene-reveal>
        <p className="scene-eyebrow">
          {language === "am"
            ? "የእርስዎ ቀናት። የእርስዎ ሂደት።"
            : "Your dates. Your rhythm."}
        </p>
        <h2 id="download-title">
          {language === "am"
            ? "ቀናትዎን ያቆዩ። ሂደትዎን ያቆዩ።"
            : "Keep your dates. Keep your rhythm."}
        </h2>
        <p>
          {language === "am"
            ? "KenRemind አሁን በApple App Store እና Google Play ላይ ይገኛል።"
            : "KenRemind is available now on the Apple App Store and Google Play."}
        </p>
        <button type="button" className="button-finale" onClick={openStore}>
          {language === "am" ? "KenRemindን ያውርዱ" : "Download KenRemind"}
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </button>
        <div className="download-finale__availability">
          <span>
            <Check /> App Store
          </span>
          <span>
            <Check /> Google Play
          </span>
        </div>
      </div>
      <div className="download-finale__phones" aria-hidden="true">
        <PhoneMock
          src={phoneScreens.calendar}
          alt=""
          className="finale-phone finale-phone--back"
        />
        <PhoneMock
          src={phoneScreens.home}
          alt=""
          className="finale-phone finale-phone--front"
        />
      </div>
      <div className="download-finale__spark" aria-hidden="true">
        <BellRing />
      </div>
    </section>
  );
}
