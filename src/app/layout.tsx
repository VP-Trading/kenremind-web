import "~/styles/globals.css";

import { type Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import { LanguageProvider } from "~/components/language-provider";


const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "KenRemind — Ethiopian Calendar Reminders",
  description:
    "Plan, repeat, and stay on time with Ethiopian calendar reminders that live on your device.",
  icons: [{ rel: "icon", url: "/icon.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sora.variable} ${manrope.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
