import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read the terms and conditions for using the KenRemind reminder app.",
  alternates: { canonical: "/terms" },
  openGraph: {
    url: "/terms",
    title: "KenRemind Terms & Conditions",
    description: "The terms and conditions that apply when using KenRemind.",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
