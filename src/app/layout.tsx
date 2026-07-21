import "~/styles/globals.css";

import { type Metadata } from "next";
import { Manrope, Noto_Sans_Ethiopic } from "next/font/google";
import { LanguageProvider } from "~/components/language-provider";
import { MotionProvider } from "~/components/motion/motion-provider";
import { StoreDownloadProvider } from "~/components/site/store-download-provider";
import { siteConfig } from "~/config/site";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const notoEthiopic = Noto_Sans_Ethiopic({
  subsets: ["ethiopic"],
  weight: "variable",
  variable: "--font-ethiopic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | KenRemind",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: { canonical: "/" },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "KenRemind Ethiopian calendar reminder app",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/icon.png", type: "image/png" }],
  },
};

export const viewport = {
  themeColor: "#0c1711",
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} ${notoEthiopic.variable}`}
    >
      <body className="bg-background text-foreground min-h-screen antialiased">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <LanguageProvider>
          <MotionProvider>
            <StoreDownloadProvider>{children}</StoreDownloadProvider>
          </MotionProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
