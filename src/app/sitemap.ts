import type { MetadataRoute } from "next";

import { SITE_URL } from "~/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-20");

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}
