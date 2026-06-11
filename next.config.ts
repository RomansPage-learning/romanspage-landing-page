import type { NextConfig } from "next";

const getApiHostname = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) return '';

  try {
    return new URL(apiUrl).hostname;
  } catch {
    return '';
  }
};

const apiHostname = getApiHostname();

const securityHeaders = [
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
        port: "",
        pathname: "/**",
      },
      ...(apiHostname
        ? [
            {
              protocol: 'https' as const,
              hostname: apiHostname,
              port: '',
              pathname: '/**',
            },
          ]
        : []),
    ],
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizeCss: true,
  },
  async redirects() {
    return [
      {
        source: "/sme-hr-suppport.html",
        destination: "/sme-hr-support",
        permanent: true,
      },
      {
        source: "/Training.html",
        destination: "/training",
        permanent: true,
      },
      {
        source: "/recruitment.html",
        destination: "/recruitment",
        permanent: true,
      },
      {
        source: "/about.html",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/contact.html",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/hr-consulting.html",
        destination: "/hr-consulting",
        permanent: true,
      },
      {
        source: "/Hr-policies.html",
        destination: "/hr-policies",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
