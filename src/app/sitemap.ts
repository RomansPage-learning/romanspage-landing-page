import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: siteConfig.siteUrl, lastModified: now, priority: 1 },
    { url: `${siteConfig.siteUrl}/about`, lastModified: now, priority: 0.8 },
    { url: `${siteConfig.siteUrl}/contact`, lastModified: now, priority: 0.9 },
    { url: `${siteConfig.siteUrl}/hr-consulting`, lastModified: now, priority: 0.9 },
    { url: `${siteConfig.siteUrl}/hr-policies`, lastModified: now, priority: 0.8 },
    { url: `${siteConfig.siteUrl}/recruitment`, lastModified: now, priority: 0.9 },
    { url: `${siteConfig.siteUrl}/sme-hr-support`, lastModified: now, priority: 0.9 },
    { url: `${siteConfig.siteUrl}/training`, lastModified: now, priority: 0.8 },
  ];
}
