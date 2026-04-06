"use client";

import Link from "next/link";

import { LanguageToggle } from "~/components/language-toggle";
import { useLanguage } from "~/components/language-provider";
import { Badge } from "~/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";

type Localized = {
  en: string;
  am: string;
};

const logoMask =
  "bg-primary [mask-image:url('/brand/appointment-01.webp')] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center] [-webkit-mask-image:url('/brand/appointment-01.webp')] [-webkit-mask-size:contain] [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:center]";

const sections: Array<{ title: Localized; body: Localized }> = [
  {
    title: { en: "1. What We Store", am: "1. የምናከማቸው" },
    body: {
      en: "KenRemind keeps your reminders on your device. We do not upload reminder content to our servers.",
      am: "KenRemind ማሳሰቢያዎችዎን በመሣሪያዎ ላይ ያቆያል። የማሳሰቢያ ይዘትን ወደ ሰርቨሮቻችን አንላክም።",
    },
  },
  {
    title: { en: "2. Data Security", am: "2. የውሂብ ደህንነት" },
    body: {
      en: "On mobile, reminder data is encrypted on-device. The encryption key is stored in the device keychain/keystore.",
      am: "በሞባይል ላይ የማሳሰቢያ ውሂብ በመሣሪያው ላይ ይመሰጠራል። የምስጠራ ቁልፉ በመሣሪያው keychain/keystore ውስጥ ይቀመጣል።",
    },
  },
  {
    title: { en: "3. Notifications", am: "3. ማሳወቂያዎች" },
    body: {
      en: "Notification delivery is handled by your operating system. We do not receive notification content.",
      am: "የማሳወቂያ መላክ በስርዓተ ክወናዎ ይተዳደራል። የማሳወቂያ ይዘት አንቀበልም።",
    },
  },
  {
    title: { en: "4. Analytics", am: "4. ትንታኔ" },
    body: {
      en: "We do not collect analytics by default. If that changes, you will be informed and can opt out.",
      am: "በነባሪ ትንታኔ አንሰበስብም። ይህ ከተቀየረ እናሳውቅዎታለን እና መሰረዝ ይችላሉ።",
    },
  },
  {
    title: { en: "5. Contact", am: "5. መገናኛ" },
    body: {
      en: "For privacy concerns, contact info@kenremind.app.",
      am: "ለግላዊነት ጉዳዮች በ info@kenremind.app ያግኙን።",
    },
  },
];

export default function PrivacyPage() {
  const { language } = useLanguage();

  return (
    <main id="top" className="relative overflow-hidden bg-background pt-[var(--header-offset)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-[#B7C8A4]/30 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#DCE8F6]/40 blur-[120px]" />
      </div>

      <header className="fixed inset-x-0 top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <span aria-hidden className={`block h-9 w-9 ${logoMask}`} />
            <span className="text-lg font-semibold tracking-tight">KenRemind</span>
          </Link>
          <div className="flex items-center gap-3">
            <nav className="hidden items-center gap-6 text-sm font-semibold text-muted-foreground md:flex">
              <Link className="transition hover:text-foreground" href="/">
                {language === "am" ? "መነሻ" : "Home"}
              </Link>
              <Link className="text-foreground" href="/privacy">
                {language === "am" ? "ግላዊነት" : "Privacy"}
              </Link>
              <Link className="transition hover:text-foreground" href="/terms">
                {language === "am" ? "ውሎች" : "Terms"}
              </Link>
            </nav>
            <LanguageToggle className="hidden sm:inline-flex" />
          </div>
        </div>
      </header>

      <section className="relative z-10 pb-20 pt-12">
        <div className="mx-auto w-full max-w-4xl px-6">
          <Badge variant="muted" className="w-fit">
            {language === "am" ? "የግላዊነት ፖሊሲ" : "Privacy Policy"}
          </Badge>
          <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">
            {language === "am" ? "የግላዊነት ፖሊሲ" : "Privacy Policy"}
          </h1>
          <p className="mt-3 text-base text-muted-foreground">
            {language === "am" ? "ውሂብዎን እንዴት እንደምንያዝ።" : "How we handle your data."}
          </p>

          <div className="mt-8 space-y-4">
            {sections.map((section) => (
              <Card key={section.title.en} className="border-border/70 bg-white/70">
                <CardHeader className="space-y-2">
                  <CardTitle className="text-lg">
                    {language === "am" ? section.title.am : section.title.en}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {language === "am" ? section.body.am : section.body.en}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-border/60 py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-3">
            <span aria-hidden className={`block h-7 w-7 ${logoMask}`} />
            <span className="text-sm font-semibold">KenRemind</span>
          </div>
          <div className="space-y-2 text-xs text-muted-foreground">
            <p>
              {language === "am"
                ? "KenRemind ማሳሰቢያዎችዎን በመሣሪያዎ ላይ ያቆያል። የማሳሰቢያ ይዘትን ወደ ሰርቨሮቻችን አንላክም።"
                : "KenRemind keeps your reminders on your device. We do not upload reminder content to our servers."}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
              <Link className="transition hover:text-foreground" href="/privacy">
                {language === "am" ? "የግላዊነት ፖሊሲ" : "Privacy Policy"}
              </Link>
              <Link className="transition hover:text-foreground" href="/terms">
                {language === "am" ? "ውሎች እና ሁኔታዎች" : "Terms & Conditions"}
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            {language === "am" ? "KenRemind · ለኢትዮጵያ ቀናት የተሰራ" : "KenRemind · Built for Ethiopian dates"}
          </p>
        </div>
      </footer>
    </main>
  );
}
