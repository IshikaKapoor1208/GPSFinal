import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1F216B",
};

export const metadata: Metadata = {
  title: "Go Prime Services | Legal Docs. Zero Office Visits.",
  description:
    "Rental agreements, affidavits, notary services — prepared, registered, and delivered to your doorstep in 2–3 working days. Skip the queue with Go Prime Services.",
  keywords: [
    "Go Prime Services",
    "Legal Documentation Services",
    "Registered Rent Agreement",
    "Doorstep Biometric Verification",
    "Affidavit and Notary",
    "Leave & License Agreement",
    "Lease Agreement",
    "Bengaluru Rent Agreement",
    "Delhi Rent Agreement",
  ],
  authors: [{ name: "Go Prime Services" }],
  icons: {
    icon: "/logo/logo.png",
    shortcut: "/logo/logo.png",
    apple: "/logo/logo.png",
  },
  openGraph: {
    title: "Go Prime Services | Legal Docs. Zero Office Visits.",
    description:
      "Rental agreements, affidavits, notary services — prepared, registered, and delivered to your doorstep in 2–3 working days.",
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
    <html lang="en" className="light scroll-smooth">
      <head>
        <link rel="icon" href="/logo/logo.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/logo/logo.png" />
      </head>
      <body className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans antialiased selection:bg-[#1F216B] selection:text-white">
        {children}
      </body>
    </html>
  );
}
