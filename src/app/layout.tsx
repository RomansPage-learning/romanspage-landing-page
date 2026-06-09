import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-display",
  weight: ["600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.siteTitle,
    template: `%s | ${siteConfig.siteTitle}`,
  },
  description:
    `${siteConfig.siteTitle} delivers modern advisory and growth services with clarity, discipline, and measurable outcomes.`,
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [{ url: "/favicon.png" }],
    shortcut: ["/favicon.png"],
  },
  openGraph: {
    title: siteConfig.siteTitle,
    description:
      `A modern, high-performance digital platform for ${siteConfig.siteTitle} landing experiences.`,
    url: siteConfig.siteUrl,
    siteName: siteConfig.siteTitle,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.siteTitle,
    description:
      `A modern, high-performance digital platform for ${siteConfig.siteTitle} landing experiences.`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${sora.variable}`}>
      <body>{children}</body>
    </html>
  );
}
