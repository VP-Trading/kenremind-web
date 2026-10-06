export type LegalPageSearchParams = Promise<
  Record<string, string | string[] | undefined>
>;

export async function isEmbeddedLegalPage(searchParams: LegalPageSearchParams) {
  const params = await searchParams;
  return params.embedded === "true";
}
