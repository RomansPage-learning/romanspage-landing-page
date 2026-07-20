import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";
import { headers } from "next/headers";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.siteTitle,
    template: `%s | ${siteConfig.siteTitle}`,
  },
  description:
    `${siteConfig.siteName} is an executive HR consultancy helping growing businesses run seamless people operations — from payroll and compliance to recruitment, enterprise development, and digital solutions.`,
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/favicon.png" }],
    shortcut: ["/favicon.png"],
  },
  openGraph: {
    title: siteConfig.siteTitle,
    description:
      `${siteConfig.siteName} provides HR advisory, enterprise development and business support, and digital & technology solutions for SMEs and growing teams.`,
    url: siteConfig.siteUrl,
    siteName: siteConfig.siteTitle,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.siteTitle,
    description:
      `${siteConfig.siteName} provides HR advisory, enterprise development and business support, and digital & technology solutions for SMEs and growing teams.`,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nonce = (await headers()).get("x-nonce") ?? "";
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body nonce={nonce}>{children}</body>
    </html>
  );
}
