import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how KenRemind stores reminder data, protects it on-device, and uses privacy-conscious Firebase Analytics.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    url: "/privacy",
    title: "KenRemind Privacy Policy",
    description:
      "How KenRemind stores reminder data, protects it on-device, and handles analytics.",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
