"use client";

import Link from "next/link";

import { BrandLogo } from "~/components/brand-logo";
import { termsPageContent, type LegalCopy } from "~/content/legal";
import { LanguageToggle } from "~/components/language-toggle";
import { useLanguage } from "~/components/language-provider";
import { Badge } from "~/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";

const tx = (value: LegalCopy, language: "en" | "am") => value[language];

export default function TermsPage() {
  const { language } = useLanguage();

  return (
    <main id="top" className="relative overflow-hidden bg-background pt-[var(--header-offset)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-[#B7C8A4]/30 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#DCE8F6]/40 blur-[120px]" />
      </div>

      <header className="fixed inset-x-0 top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="inline-flex items-center">
            <BrandLogo priority />
          </Link>
          <div className="flex items-center gap-3">
            <nav className="hidden items-center gap-6 text-sm font-semibold text-muted-foreground md:flex">
              <Link className="transition hover:text-foreground" href="/">
                {language === "am" ? "መነሻ" : "Home"}
              </Link>
              <Link className="transition hover:text-foreground" href="/privacy">
                {language === "am" ? "ግላዊነት" : "Privacy"}
              </Link>
              <Link className="text-foreground" href="/terms">
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
            {tx(termsPageContent.badge, language)}
          </Badge>
          <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">
            {tx(termsPageContent.title, language)}
          </h1>
          <p className="mt-3 text-base text-muted-foreground">
            {tx(termsPageContent.subtitle, language)}
          </p>
          <p className="mt-2 text-sm font-medium text-muted-foreground">
            {tx(termsPageContent.updatedLabel, language)}
          </p>

          <div className="mt-8 space-y-4">
            {termsPageContent.sections.map((section) => (
              <Card key={section.title.en} className="border-border/70 bg-white/70">
                <CardHeader className="space-y-2">
                  <CardTitle className="text-lg">{tx(section.title, language)}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {tx(section.body, language)}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-border/60 py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left">
          <div className="inline-flex items-center">
            <BrandLogo variant="footer" />
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
