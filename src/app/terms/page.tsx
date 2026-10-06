import { LegalPageShell } from "~/components/site/legal-page-shell";
import {
  isEmbeddedLegalPage,
  type LegalPageSearchParams,
} from "~/config/legal-page";
import { termsPageContent } from "~/content/legal";

export default async function TermsPage({
  searchParams,
}: {
  searchParams: LegalPageSearchParams;
}) {
  const embedded = await isEmbeddedLegalPage(searchParams);

  return (
    <LegalPageShell
      content={termsPageContent}
      documentLabel="KenRemind Terms and Conditions"
      embedded={embedded}
    />
  );
}
