"use client";

import { Apple, ArrowUpRight, Play } from "lucide-react";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import QRCode from "react-qr-code";

import { useLanguage } from "~/components/language-provider";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "~/components/ui/dialog";
import { APP_STORE_URL, PLAY_STORE_URL } from "~/config/site";

type DevicePlatform = "ios" | "android" | "desktop";

type StoreDownloadContextValue = {
  openStore: () => void;
};

const StoreDownloadContext = createContext<
  StoreDownloadContextValue | undefined
>(undefined);

function detectStorePlatform(): DevicePlatform {
  const userAgent = window.navigator.userAgent;
  const platform = window.navigator.platform;
  const maxTouchPoints = window.navigator.maxTouchPoints ?? 0;

  if (/Android/i.test(userAgent)) return "android";
  if (
    /iPhone|iPad|iPod/i.test(userAgent) ||
    (platform === "MacIntel" && maxTouchPoints > 1)
  ) {
    return "ios";
  }
  return "desktop";
}

function StoreCard({
  label,
  detail,
  href,
  store,
  index,
  scanLabel,
}: {
  label: string;
  detail: string;
  href: string;
  store: "apple" | "play";
  index: string;
  scanLabel: string;
}) {
  const Icon = store === "apple" ? Apple : Play;

  return (
    <article className="store-card" data-store={store}>
      <div className="store-card__heading">
        <span className="store-card__icon">
          <Icon aria-hidden="true" />
        </span>
        <div>
          <h3>{label}</h3>
          <p>{detail}</p>
        </div>
        <span className="store-card__index" aria-hidden="true">
          {index}
        </span>
      </div>

      <div className="store-card__qr-frame" aria-hidden="true">
        <div className="store-card__qr">
          <QRCode
            value={href}
            size={156}
            bgColor="#ffffff"
            fgColor="#173c2a"
            level="M"
          />
        </div>
        <span className="store-card__scan-label">{scanLabel}</span>
      </div>

      <a href={href} target="_blank" rel="noreferrer">
        <span>{label}</span>
        <ArrowUpRight aria-hidden="true" />
      </a>
    </article>
  );
}

export function StoreDownloadProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { language } = useLanguage();
  const [open, setOpen] = useState(false);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  const openStore = useCallback(() => {
    const platform = detectStorePlatform();
    if (platform === "ios") {
      window.location.assign(APP_STORE_URL);
      return;
    }
    if (platform === "android") {
      window.location.assign(PLAY_STORE_URL);
      return;
    }
    returnFocusRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    setOpen(true);
  }, []);

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
    if (nextOpen) return;

    window.requestAnimationFrame(() => {
      const returnTarget = returnFocusRef.current;
      if (returnTarget?.isConnected) {
        returnTarget.focus();
        return;
      }
      document.querySelector<HTMLElement>(".site-header__menu-button")?.focus();
    });
  };

  const value = useMemo(() => ({ openStore }), [openStore]);

  return (
    <StoreDownloadContext.Provider value={value}>
      {children}
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent
          aria-describedby="store-chooser-description"
          className="store-dialog"
          overlayClassName="store-dialog__overlay"
        >
          <div className="store-dialog__header">
            <div className="store-dialog__meta">
              <p>
                <span>13</span>
                {language === "am" ? "መደብር ይምረጡ" : "Choose your store"}
              </p>
              <span aria-hidden="true">2018 EC</span>
            </div>
            <DialogTitle className="store-dialog__title">
              {language === "am"
                ? "KenRemindን ወደ ስልክዎ ይውሰዱ።"
                : "Take KenRemind to your phone."}
            </DialogTitle>
            <DialogDescription
              id="store-chooser-description"
              className="store-dialog__description"
            >
              {language === "am"
                ? "QR ኮዱን በስልክዎ ይቃኙ ወይም የሚፈልጉትን መደብር በቀጥታ ይክፈቱ።"
                : "Scan a QR code with your phone, or open the store listing directly."}
            </DialogDescription>
          </div>
          <div className="store-dialog__grid">
            <StoreCard
              store="apple"
              index="01"
              label="Apple App Store"
              detail={
                language === "am" ? "ለ iPhone እና iPad" : "For iPhone and iPad"
              }
              href={APP_STORE_URL}
              scanLabel={
                language === "am" ? "በስልክ ይቃኙ" : "Scan with your phone"
              }
            />
            <StoreCard
              store="play"
              index="02"
              label="Google Play"
              detail={
                language === "am" ? "ለ Android መሣሪያዎች" : "For Android devices"
              }
              href={PLAY_STORE_URL}
              scanLabel={
                language === "am" ? "በስልክ ይቃኙ" : "Scan with your phone"
              }
            />
          </div>
        </DialogContent>
      </Dialog>
    </StoreDownloadContext.Provider>
  );
}

export function useStoreDownload() {
  const context = useContext(StoreDownloadContext);
  if (!context) {
    throw new Error(
      "useStoreDownload must be used within StoreDownloadProvider",
    );
  }
  return context;
}
