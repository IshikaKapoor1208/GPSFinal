import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1F216B",
};

export const metadata: Metadata = {
  title: "Go Prime Services | Registered Rent Agreement Services",
  description:
    "Registered rent agreements and government services with quick support, easy documentation, and doorstep assistance across Maharashtra.",
  keywords: [
    "Go Prime Services",
    "Legal Documentation Services",
    "Registered Rent Agreement",
    "Doorstep Biometric Verification",
    "Notarized Rent Agreement",
    "Partnership Deed Registration",
    "Court Marriage",
    "Passport Renewal",
    "PAN Aadhaar Linking",
    "Maharashtra Rent Agreement",
  ],
  authors: [{ name: "Go Prime Services" }],
  icons: {
    icon: "/logo/logo.png",
    shortcut: "/logo/logo.png",
    apple: "/logo/logo.png",
  },
  openGraph: {
    title: "Go Prime Services | Registered Rent Agreement Services",
    description:
      "Registered rent agreements and government services with quick support, easy documentation, and doorstep assistance across Maharashtra.",
    images: [
      {
        url: "/logo/logo.png",
        width: 600,
        height: 120,
        alt: "Go Prime Services",
      },
    ],
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
        <link rel="icon" href="/logo/logo.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/logo/logo.png" />
      </head>
      <body className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans antialiased selection:bg-[#1F216B] selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
