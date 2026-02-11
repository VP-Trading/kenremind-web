import "~/styles/globals.css";

import { type Metadata } from "next";
import { Fraunces, Sora } from "next/font/google";


const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
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
    <html lang="en" className={`${sora.variable} ${fraunces.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
