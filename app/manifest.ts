import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TILLA BUYUMLAR — Premium Zargarlik Do'koni",
    short_name: "TILLA",
    description:
      "O'zbekistondagi eng yirik premium zargarlik do'koni. 585 va 750 probali tilla buyumlar, brilliantli uzuklar, zanjirlar va to'plamlar.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#faf7f2",
    theme_color: "#1a1a1a",
    lang: "uz",
    dir: "ltr",
    categories: ["shopping", "lifestyle", "business"],
    icons: [
      {
        src: "/icons/icon-192.jpg",
        sizes: "192x192",
        type: "image/jpeg",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.jpg",
        sizes: "512x512",
        type: "image/jpeg",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.jpg",
        sizes: "512x512",
        type: "image/jpeg",
        purpose: "maskable",
      },
      {
        src: "/icons/apple-icon.jpg",
        sizes: "180x180",
        type: "image/jpeg",
      },
    ],
    screenshots: [
      {
        src: "/icons/screenshot-mobile.jpg",
        sizes: "1080x1920",
        type: "image/jpeg",
        form_factor: "narrow",
        label: "TILLA BUYUMLAR — Bosh sahifa",
      },
    ],
    shortcuts: [
      {
        name: "Yangi mahsulotlar",
        short_name: "Yangiliklar",
        description: "Eng so'nggi tilla buyumlar",
        url: "/?utm_source=pwa#mahsulotlar",
        icons: [{ src: "/icons/icon-192.jpg", sizes: "192x192" }],
      },
      {
        name: "Aksiyalar",
        short_name: "Aksiya",
        description: "Chegirmali mahsulotlar",
        url: "/?utm_source=pwa#aksiya",
        icons: [{ src: "/icons/icon-192.jpg", sizes: "192x192" }],
      },
    ],
  }
}
