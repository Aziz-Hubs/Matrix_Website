import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    template: "%s | XYZ Dimensions",
    default: "XYZ Dimensions - Technology Ecosystem Partners",
  },
  description:
    "XYZ Dimensions designs, builds, and implements complex technology ecosystems for governments, smart cities, and enterprises across Saudi Arabia and beyond.",
  keywords: [
    "technology ecosystems",
    "smart cities",
    "digital transformation",
    "Saudi Arabia IT",
    "enterprise solutions",
    "government technology",
  ],
  authors: [{ name: "XYZ Dimensions" }],
  creator: "XYZ Dimensions",
  metadataBase: new URL("https://e-xyzd.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://e-xyzd.com",
    siteName: "XYZ Dimensions",
    title: "XYZ Dimensions - Technology Ecosystem Partners",
    description:
      "Designing, building, and implementing complex technology ecosystems for governments, smart cities, and enterprises.",
    images: ["/xyz-logo.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "XYZ Dimensions - Technology Ecosystem Partners",
    description:
      "Designing, building, and implementing complex technology ecosystems for governments, smart cities, and enterprises.",
    images: ["/xyz-logo.svg"],
  },
  icons: {
    icon: "/xyz-logo.svg",
    shortcut: "/xyz-logo.svg",
    apple: "/xyz-logo.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen bg-background`}
      >
        {children}
      </body>
    </html>
  );
}
