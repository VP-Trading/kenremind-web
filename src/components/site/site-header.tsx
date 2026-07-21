"use client";

import { ArrowUpRight, Mail, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { LanguageToggle } from "~/components/language-toggle";
import { useLanguage } from "~/components/language-provider";
import { useMotion } from "~/components/motion/motion-provider";
import { useStoreDownload } from "~/components/site/store-download-provider";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { CONTACT_EMAIL } from "~/config/site";
import { navigationItems, tx } from "~/content/marketing";

const menuLabels = {
  home: { en: "Home", am: "መነሻ" },
  legal: { en: "Legal & support", am: "ሕጋዊ እና ድጋፍ" },
  privacy: { en: "Privacy Policy", am: "የግላዊነት ፖሊሲ" },
  terms: { en: "Terms & Conditions", am: "ውሎች እና ሁኔታዎች" },
  close: { en: "Close menu", am: "ምናሌውን ዝጋ" },
} as const;

export function SiteHeader() {
  const { language } = useLanguage();
  const { scrollToHash } = useMotion();
  const { openStore } = useStoreDownload();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleAnchorClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    setMenuOpen(false);
    if (pathname !== "/" || !href.startsWith("/#")) return;
    event.preventDefault();
    scrollToHash(href.slice(1));
  };

  const handleDownload = () => {
    setMenuOpen(false);
    window.setTimeout(openStore, menuOpen ? 180 : 0);
  };

  return (
    <header className="site-header">
      <Dialog open={menuOpen} onOpenChange={setMenuOpen}>
        <div className="site-header__dock" data-menu-open={menuOpen}>
          <DialogTrigger asChild>
            <button
              type="button"
              className="site-header__menu-button"
              aria-label={language === "am" ? "ምናሌ ክፈት" : "Open menu"}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </DialogTrigger>

          <Link
            href="/"
            className="site-header__dock-mark"
            aria-label="KenRemind home"
          >
            <Image
              src="/brand/logo-icon.png"
              alt=""
              width={1024}
              height={1024}
              priority
            />
          </Link>

          <button
            type="button"
            onClick={handleDownload}
            className="site-header__download"
          >
            <span>{language === "am" ? "መተግበሪያውን ያግኙ" : "Get the app"}</span>
            <ArrowUpRight aria-hidden="true" />
          </button>
        </div>

        <DialogContent
          hideClose
          className="nav-dock-menu"
          overlayClassName="nav-dock-overlay"
          aria-describedby={undefined}
        >
          <DialogTitle className="sr-only">
            {language === "am" ? "ዋና ምናሌ" : "Main menu"}
          </DialogTitle>

          <div className="nav-dock-menu__header" aria-hidden="true">
            <div>
              <span>13</span>
              <p>{language === "am" ? "ወራት" : "months"}</p>
            </div>
            <Image
              src="/brand/logo-icon.png"
              alt=""
              width={1024}
              height={1024}
            />
          </div>

          <nav className="nav-dock-menu__nav" aria-label="Primary navigation">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="nav-dock-menu__link"
            >
              <span>01</span>
              <strong>{tx(menuLabels.home, language)}</strong>
              <ArrowUpRight aria-hidden="true" />
            </Link>
            {navigationItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(event) => handleAnchorClick(event, item.href)}
                className="nav-dock-menu__link"
              >
                <span>0{index + 2}</span>
                <strong>{tx(item.label, language)}</strong>
                <ArrowUpRight aria-hidden="true" />
              </Link>
            ))}
          </nav>

          <div className="nav-dock-menu__secondary">
            <div>
              <p className="nav-dock-menu__label">
                {tx(menuLabels.legal, language)}
              </p>
              <Link href="/privacy" onClick={() => setMenuOpen(false)}>
                {tx(menuLabels.privacy, language)}
              </Link>
              <Link href="/terms" onClick={() => setMenuOpen(false)}>
                {tx(menuLabels.terms, language)}
              </Link>
            </div>
            <a href={`mailto:${CONTACT_EMAIL}`}>
              <Mail aria-hidden="true" />
              <span>{CONTACT_EMAIL}</span>
            </a>
          </div>

          <div className="nav-dock-menu__controls">
            <LanguageToggle />
            <DialogClose asChild>
              <button type="button" className="nav-dock-menu__close">
                <X aria-hidden="true" />
                <span>{tx(menuLabels.close, language)}</span>
              </button>
            </DialogClose>
          </div>

          <button
            type="button"
            className="nav-dock-menu__download"
            onClick={handleDownload}
          >
            <span>
              {language === "am" ? "KenRemindን ያግኙ" : "Get KenRemind"}
            </span>
            <ArrowUpRight aria-hidden="true" />
          </button>
        </DialogContent>
      </Dialog>
    </header>
  );
}
