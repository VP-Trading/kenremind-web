export const SITE_URL = "https://kenremind.app";
export const CONTACT_EMAIL = "info@kenremind.app";

export const APP_STORE_URL =
  "https://apps.apple.com/us/app/kenremind-ethiopian-reminder/id6758899285";
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.vp.kenremind&pli=1";

export const siteConfig = {
  name: "KenRemind",
  title: "KenRemind — Ethiopian Calendar Reminders",
  description:
    "Plan one-time and recurring reminders in Ethiopian dates, sync them to your device calendar, and keep reminder details private on your phone.",
  url: SITE_URL,
  email: CONTACT_EMAIL,
  appStoreUrl: APP_STORE_URL,
  playStoreUrl: PLAY_STORE_URL,
} as const;
