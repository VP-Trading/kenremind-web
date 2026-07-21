"use client";

import { ArrowUp, Mail } from "lucide-react";
import Link from "next/link";

import { BrandLogo } from "~/components/brand-logo";
import { useLanguage } from "~/components/language-provider";
import { useMotion } from "~/components/motion/motion-provider";
import { CONTACT_EMAIL } from "~/config/site";

export function SiteFooter({ dark = false }: { dark?: boolean }) {
  const { language } = useLanguage();
  const { scrollToHash } = useMotion();

  const handleTop = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname !== "/") return;
    event.preventDefault();
    scrollToHash("#top");
  };

  return (
    <footer className={dark ? "site-footer site-footer--dark" : "site-footer"}>
      <div className="site-footer__top">
        <div className="site-footer__brand">
          <BrandLogo
            variant="footer"
            tone={dark ? "inverse" : "default"}
            className="site-footer__brand-logo"
          />
          <p>
            {language === "am"
              ? "ለኢትዮጵያ ቀናት የተዘጋጀ የተረጋጋ ማሳሰቢያ።"
              : "A calmer reminder, built for Ethiopian dates."}
          </p>
        </div>

        <div className="site-footer__links">
          <div>
            <p className="site-footer__label">
              {language === "am" ? "ሕጋዊ" : "Legal"}
            </p>
            <Link href="/privacy">
              {language === "am" ? "የግላዊነት ፖሊሲ" : "Privacy Policy"}
            </Link>
            <Link href="/terms">
              {language === "am" ? "ውሎች እና ሁኔታዎች" : "Terms & Conditions"}
            </Link>
          </div>
          <div>
            <p className="site-footer__label">
              {language === "am" ? "ድጋፍ" : "Support"}
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>
          © 2026 KenRemind.{" "}
          {language === "am" ? "መብቱ የተጠበቀ ነው።" : "All rights reserved."}
        </p>
        <Link
          href="/#top"
          onClick={handleTop}
          className="site-footer__top-link"
        >
          {language === "am" ? "ወደ ላይ" : "Back to top"}
          <ArrowUp className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </footer>
  );
}
