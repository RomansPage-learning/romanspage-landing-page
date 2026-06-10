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
    `${siteConfig.siteTitle} is a BDSP and HR partner delivering technology consulting, platform development, and Agri-SME capacity building through practical training and measurable outcomes.`,
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
      `${siteConfig.siteTitle} provides BDSP technology services, digital platform development, and Agri-SME training alongside recruitment, HR consulting, and policy support.`,
    url: siteConfig.siteUrl,
    siteName: siteConfig.siteTitle,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.siteTitle,
    description:
      `${siteConfig.siteTitle} provides BDSP technology services, digital platform development, and Agri-SME training alongside recruitment, HR consulting, and policy support.`,
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
