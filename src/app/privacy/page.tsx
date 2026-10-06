import { LegalPageShell } from "~/components/site/legal-page-shell";
import {
  isEmbeddedLegalPage,
  type LegalPageSearchParams,
} from "~/config/legal-page";
import { privacyPageContent } from "~/content/legal";

export default async function PrivacyPage({
  searchParams,
}: {
  searchParams: LegalPageSearchParams;
}) {
  const embedded = await isEmbeddedLegalPage(searchParams);

  return (
    <LegalPageShell
      content={privacyPageContent}
      documentLabel="KenRemind Privacy Policy"
      embedded={embedded}
    />
  );
}
