import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { PWARegister } from "@/components/pwa-register"
import { InstallPrompt } from "@/components/install-prompt"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "TILLA BUYUMLAR — Premium Zargarlik Do'koni",
  description:
    "O'zbekistondagi eng yirik premium zargarlik do'koni. 585 va 750 probali tilla buyumlar, brilliantli uzuklar, zanjirlar va to'plamlar.",
  generator: "v0.app",
  applicationName: "TILLA BUYUMLAR",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "TILLA",
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/icons/icon-192.jpg", sizes: "192x192", type: "image/jpeg" },
      { url: "/icons/icon-512.jpg", sizes: "512x512", type: "image/jpeg" },
    ],
    apple: [{ url: "/icons/apple-icon.jpg", sizes: "180x180", type: "image/jpeg" }],
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf7f2" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <InstallPrompt />
        <PWARegister />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
