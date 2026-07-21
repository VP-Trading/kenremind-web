"use client";

import { LegalPageShell } from "~/components/site/legal-page-shell";
import { privacyPageContent } from "~/content/legal";

export default function PrivacyPage() {
  return (
    <LegalPageShell
      content={privacyPageContent}
      documentLabel="KenRemind Privacy Policy"
    />
  );
}
