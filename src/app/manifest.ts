import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "KenRemind — Ethiopian Calendar Reminders",
    short_name: "KenRemind",
    description:
      "Plan one-time and recurring reminders using Ethiopian calendar dates.",
    start_url: "/",
    display: "standalone",
    background_color: "#f3f6ef",
    theme_color: "#1f4b36",
    icons: [
      {
        src: "/icon.png",
        sizes: "942x1024",
        type: "image/png",
      },
    ],
  };
}
