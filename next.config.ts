import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
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
