"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import {
  ArrowRight,
  BellRing,
  CalendarCheck,
  CalendarDays,
  CheckCircle2,
  CloudOff,
  House,
  Languages,
  Plus,
  Repeat2,
  Settings2,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

import { BrandLogo } from "~/components/brand-logo";
import { LanguageToggle } from "~/components/language-toggle";
import { useLanguage, type Language } from "~/components/language-provider";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";

type Localized = {
  en: string;
  am: string;
};

const navItems = [
  { label: { en: "Features", am: "ባህሪያት" }, href: "/#features" },
  { label: { en: "Rules", am: "ደንቦች" }, href: "/#rules" },
  { label: { en: "Privacy", am: "ግላዊነት" }, href: "/#privacy" },
  { label: { en: "FAQ", am: "ጥያቄዎች" }, href: "/#faq" },
];

const featureCards = [
  {
    title: {
      en: "Ethiopian calendar scheduling",
      am: "የኢትዮጵያ ቀን መቁጠሪያ መርሃ ግብር",
    },
    description: {
      en: "Plan reminders by Ethiopian day, month, or year with rules built for how you already track time.",
      am: "እርስዎ ቀን የሚቆጥሩበትን መንገድ በመከተል በኢትዮጵያ ቀን፣ ወር ወይም ዓመት ማሳሰቢያዎችን ያቅዱ።",
    },
    icon: CalendarDays,
    tone: "bg-[#DDE9D8] text-[#1F4B36]",
  },
  {
    title: { en: "Flexible repeat rules", am: "ተለዋዋጭ የመድገም ደንቦች" },
    description: {
      en: "Choose one-time, monthly, yearly, or every X days. KenRemind handles each next date automatically.",
      am: "አንድ ጊዜ፣ ወርሃዊ፣ ዓመታዊ ወይም በየ X ቀናት ይምረጡ። KenRemind ቀጣዩን ቀን በራስ-ሰር ያስተናግዳል።",
    },
    icon: Repeat2,
    tone: "bg-[#F5EBD2] text-[#1F4B36]",
  },
  {
    title: { en: "Private on-device storage", am: "በመሣሪያ ላይ የሚቀመጥ ግላዊ መረጃ" },
    description: {
      en: "Your reminder content stays on your phone. No cloud account or server sync is required.",
      am: "የማሳሰቢያዎ ይዘት በስልክዎ ላይ ይቀመጣል። የደመና መለያ ወይም የሰርቨር ማመሳሰል አያስፈልግም።",
    },
    icon: ShieldCheck,
    tone: "bg-[#F4E0E4] text-[#1F4B36]",
  },
  {
    title: { en: "Reliable local notifications", am: "አስተማማኝ አካባቢያዊ ማሳወቂያዎች" },
    description: {
      en: "Stay ahead with notifications that continue to work while offline and away from the app.",
      am: "ከመተግበሪያው ውጭ ወይም ከኢንተርኔት ሲቋረጥም የሚሰሩ ማሳወቂያዎችን ያግኙ።",
    },
    icon: BellRing,
    tone: "bg-[#DCE8F6] text-[#1F4B36]",
  },
  {
    title: { en: "Calendar sync ready", am: "የቀን መቁጠሪያ ማመሳሰል ዝግጁ" },
    description: {
      en: "Push reminders to your device calendar so your full plan stays in one place.",
      am: "ሁሉም እቅድዎ በአንድ ቦታ እንዲቆይ ማሳሰቢያዎችን ወደ መሣሪያ ቀን መቁጠሪያዎ ያስገቡ።",
    },
    icon: CalendarCheck,
    tone: "bg-[#DDE9D8] text-[#1F4B36]",
  },
  {
    title: { en: "English + Amharic", am: "እንግሊዝኛ + አማርኛ" },
    description: {
      en: "Switch language instantly and manage reminders in the wording you prefer.",
      am: "ቋንቋውን ወዲያውኑ ቀይሩ እና ማሳሰቢያዎችን በሚመችዎ ቃላት ያስተዳድሩ።",
    },
    icon: Languages,
    tone: "bg-[#DCE8F6] text-[#1F4B36]",
  },
];

const reminderRules = [
  {
    title: { en: "One-time dates", am: "አንድ ጊዜ ቀናት" },
    description: {
      en: "Perfect for events, paydays, and special moments.",
      am: "ለዝግጅቶች፣ የደመወዝ ቀናት እና ልዩ ጊዜያት ተስማሚ ነው።",
    },
    color: "bg-[#F5EBD2]",
    icon: CalendarCheck,
  },
  {
    title: { en: "Monthly Ethiopian", am: "ወርሃዊ ኢትዮጵያዊ" },
    description: {
      en: "For recurring bills and obligations tied to Ethiopian months.",
      am: "ከኢትዮጵያ ወራት ጋር የተያያዙ የተደጋጋሚ ክፍያዎች እና ግዴታዎች ለማስተዳደር።",
    },
    color: "bg-[#DDE9D8]",
    icon: CalendarDays,
  },
  {
    title: { en: "Yearly Ethiopian", am: "ዓመታዊ ኢትዮጵያዊ" },
    description: {
      en: "Birthdays, holidays, and annual celebrations without guesswork.",
      am: "ልደቶችን፣ በዓላትን እና ዓመታዊ አከባበሮችን ያለ ግምት ያስታውሱ።",
    },
    color: "bg-[#F4E0E4]",
    icon: CalendarCheck,
  },
  {
    title: { en: "Every X days", am: "በየ X ቀናት" },
    description: {
      en: "Custom intervals for meds, rituals, or spaced tasks.",
      am: "ለመድሀኒት፣ ልምዶች ወይም በክፍተት የሚደረጉ ስራዎች ብጁ ክፍተት።",
    },
    color: "bg-[#DCE8F6]",
    icon: Repeat2,
  },
];

const faqs = [
  {
    question: {
      en: "Does KenRemind store my reminder data in the cloud?",
      am: "KenRemind የማሳሰቢያ መረጃዬን በደመና ላይ ያከማቻል?",
    },
    answer: {
      en: "No. Reminder content stays on your device and is never uploaded to KenRemind servers.",
      am: "አይደለም። የማሳሰቢያ ይዘት በመሣሪያዎ ላይ ብቻ ይቀመጣል እና ወደ KenRemind ሰርቨሮች አይላክም።",
    },
  },
  {
    question: {
      en: "Can I use both Gregorian and Ethiopian dates?",
      am: "የግሪጎሪያን እና የኢትዮጵያ ቀናትን በአንድ ላይ መጠቀም እችላለሁ?",
    },
    answer: {
      en: "KenRemind is optimized for Ethiopian dates, with tools that keep you aligned with local calendar rhythm.",
      am: "KenRemind በኢትዮጵያ ቀናት ላይ የተመቻቸ ሲሆን ከአካባቢያዊ የቀን መቁጠሪያ ሂደት ጋር እንዲመሳሰሉ ያግዛል።",
    },
  },
  {
    question: {
      en: "What happens if I change my phone?",
      am: "ስልኬን ከቀየርሁ ምን ይሆናል?",
    },
    answer: {
      en: "Because data is on-device, you can export or re-create reminders on your new phone when needed.",
      am: "መረጃው በመሣሪያ ላይ ስለሚገኝ፣ ሲያስፈልግ በአዲሱ ስልክዎ ማሳሰቢያዎችን ማስመጣት ወይም እንደገና መፍጠር ይችላሉ።",
    },
  },
  {
    question: {
      en: "Is it available in Amharic?",
      am: "በአማርኛ ይገኛል?",
    },
    answer: {
      en: "Yes. You can switch between English and Amharic anytime.",
      am: "አዎ። በማንኛውም ጊዜ በእንግሊዝኛ እና በአማርኛ መካከል መቀየር ይችላሉ።",
    },
  },
];

const orbitChips = [
  {
    label: { en: "Home", am: "መነሻ" },
    icon: House,
    className: "-left-8 top-16 md:-left-14 lg:-left-20",
    tone: "bg-[#DDE9D8] text-[#1F4B36]",
    motionClass: "hero-chip-motion-a [animation-delay:0s]",
    entryDelay: "0.28s",
  },
  {
    label: { en: "Create", am: "ፍጠር" },
    icon: Plus,
    className: "right-4 top-10 md:-right-10 lg:-right-16",
    tone: "bg-[#F4E0E4] text-[#1F4B36]",
    motionClass: "hero-chip-motion-b [animation-delay:-1.1s]",
    entryDelay: "0.36s",
  },
  {
    label: { en: "Calendar", am: "ቀን መቁጠሪያ" },
    icon: CalendarDays,
    className: "left-2 bottom-16 md:-left-8 lg:-left-12",
    tone: "bg-[#DCE8F6] text-[#1F4B36]",
    motionClass: "hero-chip-motion-c [animation-delay:-0.6s]",
    entryDelay: "0.44s",
  },
  {
    label: { en: "Settings", am: "ቅንብሮች" },
    icon: Settings2,
    className: "right-2 bottom-14 md:-right-6 lg:-right-12",
    tone: "bg-[#F5EBD2] text-[#1F4B36]",
    motionClass: "hero-chip-motion-a [animation-delay:-1.6s]",
    entryDelay: "0.5s",
  },
];

const heroScreens = {
  home: "/brand/mocks/home-ios.png",
  create: "/brand/mocks/create-reminder-ios.png",
  calendar: "/brand/mocks/calendar-view-ios.png",
  settings: "/brand/mocks/settings-ios.png",
};

const tx = (value: Localized, language: Language) => value[language];

type MotionState = "pre" | "in" | "out";
type DevicePlatform = "ios" | "android" | "desktop";

const APP_STORE_URL = "https://apps.apple.com/us/app/kenremind-ethiopian-reminder/id6758899285";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.vp.kenremind&pli=1";

function detectStorePlatform(): DevicePlatform {
  if (typeof window === "undefined") {
    return "desktop";
  }

  const userAgent = window.navigator.userAgent;
  const platform = window.navigator.platform;
  const maxTouchPoints = window.navigator.maxTouchPoints ?? 0;
  const isAndroid = /Android/i.test(userAgent);
  const isIOS =
    /iPhone|iPad|iPod/i.test(userAgent) ||
    (platform === "MacIntel" && maxTouchPoints > 1);

  if (isIOS) return "ios";
  if (isAndroid) return "android";
  return "desktop";
}

function useSectionMotion(visibleRatio = 0.28) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [motion, setMotion] = useState<MotionState>("pre");

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setMotion("in");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        const isVisible = entry.intersectionRatio >= visibleRatio;
        setMotion((prev) => {
          if (isVisible) return "in";
          if (prev === "pre") return "pre";
          return "out";
        });
      },
      {
        threshold: [0, 0.12, 0.24, 0.36, 0.52, 0.7],
        rootMargin: "-10% 0px -12% 0px",
      },
    );

    observer.observe(sectionEl);
    return () => observer.disconnect();
  }, [visibleRatio]);

  return { ref: sectionRef, motion };
}

export default function Home() {
  const { language } = useLanguage();
  const featuresMotion = useSectionMotion(0.28);
  const rulesMotion = useSectionMotion(0.24);
  const privacyMotion = useSectionMotion(0.26);
  const faqMotion = useSectionMotion(0.22);
  const ctaMotion = useSectionMotion(0.22);
  const [isStoreChooserOpen, setStoreChooserOpen] = useState(false);
  const getAppLabel = language === "am" ? "አፕ ያግኙ" : "Get the app";

  useEffect(() => {
    if (!isStoreChooserOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setStoreChooserOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isStoreChooserOpen]);

  const openDesktopStore = (url: string) => {
    const popup = window.open(url, "_blank", "noopener,noreferrer");
    if (!popup) {
      window.location.assign(url);
    }
    setStoreChooserOpen(false);
  };

  const handleGetAppClick = () => {
    const platform = detectStorePlatform();

    if (platform === "ios") {
      window.location.assign(APP_STORE_URL);
      return;
    }

    if (platform === "android") {
      window.location.assign(PLAY_STORE_URL);
      return;
    }

    if (platform === "desktop") {
      setStoreChooserOpen(true);
    }
  };

  return (
    <main className="relative overflow-x-clip bg-background pt-[calc(var(--header-offset)+0.25rem)]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-24 h-[26rem] w-[26rem] animate-[drift_20s_ease-in-out_infinite] rounded-full bg-[#CFDCC7]/55 blur-[130px]" />
        <div className="absolute right-[-8rem] top-[-4rem] h-[30rem] w-[30rem] animate-[drift_24s_ease-in-out_infinite] rounded-full bg-[#DCE8F6]/55 blur-[140px]" />
        <div className="absolute bottom-[-16rem] left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 animate-[drift_22s_ease-in-out_infinite] rounded-full bg-[#F4E0E4]/45 blur-[130px]" />
      </div>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="inline-flex items-center">
            <BrandLogo priority />
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-muted-foreground md:flex">
            {navItems.map((item) => (
              <Link key={item.href} className="transition hover:text-foreground" href={item.href}>
                {tx(item.label, language)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              size="sm"
              type="button"
              onClick={handleGetAppClick}
              className="hidden md:inline-flex"
            >
              {getAppLabel}
            </Button>
            <LanguageToggle className="hidden sm:inline-flex" />
          </div>
        </div>
      </header>

      <section className="relative z-10 pb-24 pt-10 sm:pt-14">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Badge
              variant="default"
              className="mx-auto w-fit border-white/90 bg-white/90 text-foreground shadow-sm animate-[fade-in_0.8s_ease-out] [animation-fill-mode:both]"
            >
              {language === "am" ? "ለኢትዮጵያ ቀናት የተሰራ" : "Built for Ethiopian dates"}
            </Badge>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-foreground animate-[fade-up_0.95s_ease-out] [animation-fill-mode:both] sm:text-5xl lg:text-6xl">
              {language === "am"
                ? "በኢትዮጵያ የቀን መቁጠሪያ ላይ አንድም ጊዜ አትቀር።"
                : "Never miss a moment on the Ethiopian calendar."}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground animate-[fade-up_0.95s_ease-out] [animation-delay:0.12s] [animation-fill-mode:both]">
              {language === "am"
                ? "KenRemind ለኢትዮጵያ የጊዜ አቆጣጠር የተዘጋጀ የተረጋጋ የማሳሰቢያ መተግበሪያ ነው። አንድ ጊዜ ወይም ተደጋጋሚ ማሳሰቢያዎችን ያቅዱ፣ ከመሣሪያዎ የቀን መቁጠሪያ ጋር ያስማሙ፣ እና ሁሉንም መረጃ በስልክዎ ላይ ግላዊ ያድርጉ።"
                : "KenRemind is a calm reminder app made for Ethiopian timekeeping. Plan one-time or recurring reminders, sync with your device calendar, and keep everything private on your phone."}
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4 animate-[fade-up_0.95s_ease-out] [animation-delay:0.2s] [animation-fill-mode:both]">
              <Button size="lg" type="button" onClick={handleGetAppClick}>
                <span className="flex items-center gap-2">
                  {getAppLabel} <ArrowRight className="h-4 w-4" />
                </span>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/#features">
                  {language === "am" ? "ባህሪያትን ይመልከቱ" : "Explore features"}
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative mx-auto mt-14 w-full max-w-5xl">
            <div className="absolute left-1/2 top-[78%] h-24 w-10/12 -translate-x-1/2 rounded-full bg-black/30 blur-3xl animate-[shadow-breathe_6.5s_ease-in-out_infinite]" />

            {orbitChips.map((chip) => {
              const Icon = chip.icon;
              return (
                <div
                  key={chip.label.en}
                  className={`absolute z-20 hidden md:flex ${chip.className} animate-[fade-up_0.7s_ease-out] [animation-fill-mode:both]`}
                  style={{ animationDelay: chip.entryDelay }}
                >
                  <div
                    className={`flex h-16 min-w-16 items-center justify-center gap-2 rounded-2xl border border-white/80 px-3.5 shadow-md backdrop-blur ${chip.tone} ${chip.motionClass}`}
                  >
                    <Icon className="h-[22px] w-[22px]" />
                    <span className="hidden text-sm font-semibold text-foreground/90 xl:inline">
                      {tx(chip.label, language)}
                    </span>
                  </div>
                </div>
              );
            })}

            <div className="relative h-[32rem] sm:h-[37rem] md:h-[42rem] lg:h-[44rem]">
              <div className="pointer-events-none absolute inset-x-[10%] top-[12%] h-[65%] animate-[drift_18s_ease-in-out_infinite] rounded-full bg-[radial-gradient(circle,rgba(226,232,246,0.65)_0%,rgba(226,232,246,0.06)_68%,transparent_100%)] blur-3xl" />
              <div className="pointer-events-none absolute left-1/2 top-[78%] h-24 w-10/12 -translate-x-1/2 rounded-full bg-black/25 blur-3xl animate-[shadow-breathe_6.5s_ease-in-out_infinite]" />

              <div className="absolute left-1/2 top-[8%] z-20 w-[185px] -translate-x-1/2 animate-[phone-main_10.5s_ease-in-out_infinite] sm:w-[220px] md:w-[252px] lg:w-[268px]">
                <Image
                  src={heroScreens.home}
                  alt={language === "am" ? "የመነሻ ገጽ iOS ሞክ" : "KenRemind home iOS mock"}
                  width={772}
                  height={1600}
                  className="h-auto w-full drop-shadow-[0_30px_40px_rgba(8,12,10,0.38)]"
                  priority
                />
              </div>

              <div className="absolute left-[10%] top-[36%] z-10 hidden w-[132px] animate-[phone-tilt-left_11.2s_ease-in-out_infinite] sm:block md:w-[158px] lg:w-[172px]">
                <Image
                  src={heroScreens.create}
                  alt={language === "am" ? "አዲስ ማሳሰቢያ ፍጠር iOS ሞክ" : "Create reminder iOS mock"}
                  width={772}
                  height={1600}
                  className="h-auto w-full drop-shadow-[0_24px_30px_rgba(10,15,13,0.35)]"
                />
              </div>

              <div className="absolute right-[10%] top-[35%] z-10 hidden w-[132px] animate-[phone-tilt-right_12s_ease-in-out_infinite] sm:block md:w-[158px] lg:w-[172px]">
                <Image
                  src={heroScreens.calendar}
                  alt={language === "am" ? "የቀን መቁጠሪያ እይታ iOS ሞክ" : "Calendar view iOS mock"}
                  width={772}
                  height={1600}
                  className="h-auto w-full drop-shadow-[0_24px_30px_rgba(10,15,13,0.35)]"
                />
              </div>

              <div className="pointer-events-none absolute left-1/2 top-[62%] z-30 w-[98px] -translate-x-[8%] animate-[phone-settings_13s_ease-in-out_infinite] sm:w-[116px] md:w-[130px] lg:w-[140px]">
                <Image
                  src={heroScreens.settings}
                  alt={language === "am" ? "ቅንብሮች iOS ሞክ" : "Settings iOS mock"}
                  width={772}
                  height={1600}
                  className="h-auto w-full drop-shadow-[0_26px_34px_rgba(10,15,13,0.35)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        ref={featuresMotion.ref}
        data-motion={featuresMotion.motion}
        className="features-motion relative z-10 scroll-mt-[calc(var(--header-offset)+1rem)] py-24"
      >
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="features-intro mx-auto max-w-2xl text-center">
            <Badge variant="muted" className="mx-auto w-fit">
              {language === "am" ? "ባህሪያት" : "Features"}
            </Badge>
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
              {language === "am"
                ? "ፕሪሚየም ስሜት፣ ተግባራዊ የማሳሰቢያ መሳሪያዎች።"
                : "Premium feel, practical reminder tools."}
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              {language === "am"
                ? "KenRemind ቀላል እና የተጠናከረ ልምድ በመጠበቅ ብዙ ሰዎች የሚፈልጉትን የመርሃ ግብር ፍላጎቶች ይሸፍናል።"
                : "KenRemind keeps the experience focused and lightweight while covering every schedule pattern most people need."}
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.title.en}
                  className="features-card border-border/70 bg-white/80 transition-shadow duration-300 hover:shadow-[0_24px_48px_-34px_rgba(18,32,24,0.6)]"
                  style={
                    {
                      "--feature-enter-delay": `${120 + index * 90}ms`,
                      "--feature-exit-delay": `${(featureCards.length - index - 1) * 45}ms`,
                    } as CSSProperties
                  }
                >
                  <CardHeader className="flex flex-row items-start gap-4">
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${feature.tone}`}
                    >
                      <Icon className="h-[22px] w-[22px]" />
                    </div>
                    <div className="space-y-2">
                      <CardTitle className="text-xl">{tx(feature.title, language)}</CardTitle>
                      <CardDescription className="text-sm text-muted-foreground">
                        {tx(feature.description, language)}
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="rules"
        ref={rulesMotion.ref}
        data-motion={rulesMotion.motion}
        className="rules-motion relative z-10 scroll-mt-[calc(var(--header-offset)+1rem)] py-24"
      >
        <div className="mx-auto grid w-full max-w-6xl items-start gap-12 px-6 lg:grid-cols-[1.02fr_0.98fr]">
          <Card className="rules-panel border-border/70 bg-white/80 shadow-[0_18px_48px_-36px_rgba(21,34,26,0.58)]">
            <CardHeader className="space-y-5">
              <Badge variant="muted" className="w-fit">
                {language === "am" ? "የማሳሰቢያ ደንቦች" : "Reminder Rules"}
              </Badge>
              <CardTitle className="text-3xl leading-tight sm:text-4xl">
                {language === "am"
                  ? "አንድ ጊዜ መድገሚያ ይምረጡ፣ KenRemind ቀሪውን ይተካል።"
                  : "Pick a cadence once, KenRemind handles the rest."}
              </CardTitle>
              <CardDescription className="text-base text-muted-foreground">
                {language === "am"
                  ? "መተግበሪያው ከኢትዮጵያ ቀናት የሚመጡ የሚቀጥሉ ማሳሰቢያዎችን ያስላል እና ሳምንታዊ እይታውን ግልጽ ያደርጋል።"
                  : "The app calculates upcoming reminders from Ethiopian dates and keeps the weekly view clean."}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 pb-8 text-sm text-muted-foreground">
              {[
                {
                  en: "Upcoming reminders dashboard",
                  am: "የሚመጡ ማሳሰቢያዎች ዳሽቦርድ",
                },
                {
                  en: "Weekly grouping by Ethiopian date",
                  am: "በኢትዮጵያ ቀን ሳምንታዊ ማቀናበር",
                },
                {
                  en: "Quick add and edit flow",
                  am: "ፈጣን መጨመር እና ማስተካከል",
                },
              ].map((item) => (
                <div key={item.en} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  {tx(item, language)}
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="rules-list grid gap-4">
            {reminderRules.map((rule, index) => {
              const Icon = rule.icon;
              return (
                <Card
                  key={rule.title.en}
                  className="rules-item border-border/70 bg-white/80 transition-shadow duration-300 hover:shadow-[0_20px_40px_-32px_rgba(16,26,21,0.5)]"
                  style={
                    {
                      "--rules-enter-delay": `${150 + index * 95}ms`,
                      "--rules-exit-delay": `${(reminderRules.length - index - 1) * 55}ms`,
                    } as CSSProperties
                  }
                >
                  <CardContent className="flex items-start gap-4 p-5">
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${rule.color} text-primary`}
                    >
                      <Icon className="h-[22px] w-[22px]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{tx(rule.title, language)}</h3>
                      <p className="text-sm text-muted-foreground">{tx(rule.description, language)}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="privacy"
        ref={privacyMotion.ref}
        data-motion={privacyMotion.motion}
        className="privacy-motion relative z-10 scroll-mt-[calc(var(--header-offset)+1rem)] py-24"
      >
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 lg:grid-cols-[1fr_1fr]">
          <div className="privacy-copy space-y-6">
            <Badge variant="muted" className="w-fit">
              {language === "am" ? "ግላዊነት" : "Privacy"}
            </Badge>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              {language === "am" ? "ማሳሰቢያዎችዎ ከእርስዎ ጋር ይቆያሉ።" : "Your reminders stay with you."}
            </h2>
            <p className="text-base text-muted-foreground">
              {language === "am"
                ? "KenRemind የማሳሰቢያ መረጃዎችን በመሣሪያዎ ላይ ያከማቻል። የማሳሰቢያ ይዘት ወደ ውጭ ሰርቨሮች አይላክም።"
                : "KenRemind stores reminder data on-device. Reminder content is not uploaded to external servers."}
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  label: { en: "No cloud account", am: "የደመና መለያ የለም" },
                  icon: CloudOff,
                },
                {
                  label: { en: "Encrypted on-device", am: "በመሣሪያ ላይ የተመሰጠረ" },
                  icon: ShieldCheck,
                },
                {
                  label: { en: "Offline friendly", am: "ከኢንተርኔት ውጭ የሚሰራ" },
                  icon: BellRing,
                },
                {
                  label: { en: "Calendar sync", am: "የቀን መቁጠሪያ ማመሳሰል" },
                  icon: CalendarCheck,
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label.en}
                    className="privacy-pill flex items-center gap-3 rounded-2xl border border-border/70 bg-white/70 p-3"
                    style={
                      {
                        "--privacy-enter-delay": `${140 + index * 85}ms`,
                        "--privacy-exit-delay": `${(4 - index) * 45}ms`,
                      } as CSSProperties
                    }
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DDE9D8] text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-semibold">{tx(item.label, language)}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <Card className="privacy-card border-border/70 bg-white/80">
            <CardHeader className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                <Sparkles className="h-4 w-4 text-primary" />
                {language === "am" ? "የዲዛይን አቅጣጫ" : "Design direction"}
              </div>
              <CardTitle className="text-2xl">
                {language === "am"
                  ? "ቀላል፣ ብሩህ እና በዓላማ የተዘጋጀ ልምድ።"
                  : "Minimal, bright, and intentionally calm."}
              </CardTitle>
              <CardDescription className="text-base">
                {language === "am"
                  ? "ግልጽ ፊደላት፣ ለስላሳ ጥላ እና ትኩረትን የሚደግፍ እንቅስቃሴ።"
                  : "Clean typography, soft depth, and motion that supports focus instead of distraction."}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              {[
                {
                  en: "Light neutral base and layered shadows",
                  am: "ቀላል መሠረታዊ ቀለም እና ተደራሽ ጥላዎች",
                },
                {
                  en: "Subtle moving highlights for visual energy",
                  am: "ለእይታ ኃይል ቀስ ብሎ የሚንቀሳቀስ አብራሪ ውጤት",
                },
                {
                  en: "Deliberate spacing inspired by app UI",
                  am: "ከመተግበሪያ UI የተነሳ የተወሰነ ክፍተት",
                },
              ].map((item) => (
                <div key={item.en} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  {tx(item, language)}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section
        id="faq"
        ref={faqMotion.ref}
        data-motion={faqMotion.motion}
        className="faq-motion relative z-10 scroll-mt-[calc(var(--header-offset)+1rem)] py-24"
      >
        <div className="mx-auto w-full max-w-4xl px-6">
          <div className="faq-intro space-y-4 text-center">
            <Badge variant="muted" className="mx-auto w-fit">
              {language === "am" ? "ጥያቄዎች" : "FAQ"}
            </Badge>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              {language === "am" ? "ጥያቄዎች፣ በቀጥታ መልሶች።" : "Questions, answered."}
            </h2>
            <p className="text-base text-muted-foreground">
              {language === "am" ? "KenRemind ከመጫንዎ በፊት ፈጣን መረጃዎች።" : "Quick details before you install KenRemind."}
            </p>
          </div>
          <Accordion type="single" collapsible className="faq-list mt-10 space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question.en}
                value={faq.question.en}
                className="faq-item"
                style={
                  {
                    "--faq-enter-delay": `${120 + index * 95}ms`,
                    "--faq-exit-delay": `${(faqs.length - index - 1) * 50}ms`,
                  } as CSSProperties
                }
              >
                <AccordionTrigger>{tx(faq.question, language)}</AccordionTrigger>
                <AccordionContent>{tx(faq.answer, language)}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section
        id="cta"
        ref={ctaMotion.ref}
        data-motion={ctaMotion.motion}
        className="cta-motion relative z-10 scroll-mt-[calc(var(--header-offset)+1rem)] pb-24"
      >
        <div className="mx-auto w-full max-w-6xl px-6">
          <Card className="cta-shell border-border/70 bg-gradient-to-br from-white via-[#F7F8F3] to-[#DDE9D8] shadow-[0_22px_48px_-32px_rgba(20,33,25,0.55)]">
            <CardContent className="grid gap-10 p-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="cta-copy space-y-6">
                <Badge variant="accent" className="w-fit">
                  {language === "am" ? "ዝግጁ ሲሆኑ" : "Ready when you are"}
                </Badge>
                <h2 className="text-3xl font-semibold sm:text-4xl">
                  {language === "am"
                    ? "KenRemind ያውርዱ እና በእርግጠኝነት ያቅዱ።"
                    : "Download KenRemind and plan with confidence."}
                </h2>
                <p className="text-base text-muted-foreground">
                  {language === "am"
                    ? "አሁን በ Apple App Store እና Google Play ይገኛል። ለድጋፍ እና መረጃ በቀጥታ ኢሜይል ያድርጉልን።"
                    : "Available now on the Apple App Store and Google Play. For support and onboarding, email us directly."}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" type="button" onClick={handleGetAppClick}>
                    {getAppLabel}
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="mailto:info@kenremind.app">
                      {language === "am" ? "ድጋፍ ያግኙ" : "Contact support"}
                    </a>
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  {language === "am" ? "መገናኛ: " : "Contact: "}info@kenremind.app
                </p>
              </div>

              <div className="cta-peek flex items-center justify-center">
                <div className="flex items-center gap-4 rounded-3xl border border-white/80 bg-white/85 p-6 shadow-lg">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1F4B36] text-white">
                    <BellRing className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-wide text-muted-foreground">
                      {language === "am" ? "ቀጣይ ማሳሰቢያ" : "Next reminder"}
                    </p>
                    <p className="text-lg font-semibold">
                      {language === "am" ? "ቀጣይ · 12:30 PM" : "Upcoming · 12:30 PM"}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {language === "am" ? "ወርሃዊ ኢትዮጵያ ቀን" : "Monthly Ethiopian date"}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="relative z-10 border-t border-border/60 py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-3 px-6 text-center">
          <div className="inline-flex items-center">
            <BrandLogo variant="footer" />
          </div>
          <p className="max-w-xl text-xs text-muted-foreground">
            {language === "am"
              ? "KenRemind ማሳሰቢያዎችዎን በመሣሪያዎ ላይ ያቆያል። የማሳሰቢያ ይዘትን ወደ ሰርቨሮቻችን አንላክም።"
              : "KenRemind keeps your reminders on your device. We do not upload reminder content to our servers."}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-muted-foreground">
            <Link className="transition hover:text-foreground" href="/privacy">
              {language === "am" ? "የግላዊነት ፖሊሲ" : "Privacy Policy"}
            </Link>
            <Link className="transition hover:text-foreground" href="/terms">
              {language === "am" ? "ውሎች እና ሁኔታዎች" : "Terms & Conditions"}
            </Link>
          </div>
          <p className="text-xs text-muted-foreground">
            {language === "am" ? "KenRemind · ለኢትዮጵያ ቀናት የተሰራ" : "KenRemind · Built for Ethiopian dates"}
          </p>
        </div>
      </footer>

      {isStoreChooserOpen ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-foreground/15 px-6 backdrop-blur-sm"
          onClick={() => setStoreChooserOpen(false)}
        >
          <Card
            role="dialog"
            aria-modal="true"
            aria-labelledby="store-chooser-title"
            className="w-full max-w-md border-white/80 bg-white/95 shadow-[0_28px_80px_-30px_rgba(17,24,20,0.45)]"
            onClick={(event) => event.stopPropagation()}
          >
            <CardHeader className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <Badge variant="muted" className="w-fit">
                    {language === "am" ? "መደብር ይምረጡ" : "Choose a store"}
                  </Badge>
                  <CardTitle id="store-chooser-title" className="text-2xl">
                    {language === "am" ? "KenRemind የሚወርድበትን መደብር ይምረጡ።" : "Pick where to download KenRemind."}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {language === "am"
                      ? "በዴስክቶፕ ላይ ስለሆኑ ለመሣሪያዎ የሚመች መደብር ይምረጡ።"
                      : "You’re on desktop, so choose the store that matches your device."}
                  </CardDescription>
                </div>
                <Button
                  type="button"
                  size="icon"
                  variant="ghost"
                  className="shrink-0"
                  onClick={() => setStoreChooserOpen(false)}
                  aria-label={language === "am" ? "ዝጋ" : "Close"}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                type="button"
                className="w-full justify-between"
                onClick={() => openDesktopStore(APP_STORE_URL)}
              >
                <span>Apple App Store</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full justify-between"
                onClick={() => openDesktopStore(PLAY_STORE_URL)}
              >
                <span>Google Play</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      ) : null}
    </main>
  );
}
