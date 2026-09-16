import type { Metadata, Viewport } from "next";
import "./globals.css";
import JsonLdSchema from "@/components/JsonLdSchema";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1F216B",
};

const siteUrl = "https://www.goprimeservices.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Go Prime Services | Registered Rent Agreement & Legal Documentation",
    template: "%s | Go Prime Services",
  },
  description:
    "Go Prime Services offers government-registered rent agreement services, doorstep biometric verification, notarized agreements, partnership deeds, court marriage assistance, and document services across Maharashtra, India, and worldwide.",
  keywords: [
    "Go Prime Services",
    "GoPrimeServices",
    "Go Prime Services Pune",
    "Go Prime Services Mumbai",
    "Go Prime Services Maharashtra",
    "goprimeservices",
    "goprimeservices.com",
    "Registered Rent Agreement",
    "Online Rent Agreement Registration",
    "Doorstep Biometric Verification",
    "Notarized Rent Agreement",
    "Partnership Deed Registration",
    "Court Marriage Assistance",
    "Passport Renewal Services",
    "PAN Aadhaar Linking",
    "Maharashtra Rent Agreement",
    "E-Registration Maharashtra",
    "CSC Digital India Services",
  ],
  authors: [{ name: "Go Prime Services", url: siteUrl }],
  creator: "Go Prime Services",
  publisher: "Go Prime Services",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/logo/logo.png", type: "image/png" },
    ],
    shortcut: ["/favicon.svg"],
    apple: [
      { url: "/logo/logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Go Prime Services | Registered Rent Agreement & Doorstep Biometric Verification",
    description:
      "Get government-approved registered rent agreements and legal document services with doorstep biometric verification across Maharashtra and worldwide.",
    url: siteUrl,
    siteName: "Go Prime Services",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo/logo.png",
        width: 600,
        height: 120,
        alt: "Go Prime Services Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Go Prime Services | Registered Rent Agreement & Legal Services",
    description:
      "Get government-approved registered rent agreements and legal document services with doorstep biometric verification across Maharashtra and worldwide.",
    images: ["/logo/logo.png"],
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Maharashtra",
    "geo.position": "18.5204;73.8567",
    ICBM: "18.5204, 73.8567",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/logo/logo.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/logo/logo.png" />
        <link rel="canonical" href="https://www.goprimeservices.com" />
        <JsonLdSchema />
      </head>
      <body
        className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans antialiased selection:bg-[#1F216B] selection:text-white"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
