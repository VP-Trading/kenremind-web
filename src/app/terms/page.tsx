"use client";

import { LegalPageShell } from "~/components/site/legal-page-shell";
import { termsPageContent } from "~/content/legal";

export default function TermsPage() {
  return (
    <LegalPageShell
      content={termsPageContent}
      documentLabel="KenRemind Terms and Conditions"
    />
  );
}
