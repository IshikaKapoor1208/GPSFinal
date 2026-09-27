import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Go Prime Services",
    short_name: "Go Prime",
    description:
      "Government-registered rent agreement services, doorstep biometric verification, notarized agreements, and document services across Maharashtra and worldwide.",
    start_url: "/",
    display: "standalone",
    background_color: "#1F216B",
    theme_color: "#1F216B",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/icon",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
