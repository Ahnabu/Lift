import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // Removed "export" mode to enable API routes
  // If you need static export, you'll need to use an external API service for contact form
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN", // Allows embedding in same-origin iframes. Use "DENY" to block all iframes, or remove this header to allow all
          },
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self'", // Allows embedding from same origin. Use "frame-ancestors 'none'" to block, or "frame-ancestors *" to allow all
          },
        ],
      },
    ];
  },
};

export default nextConfig;
