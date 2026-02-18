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
            key: "Content-Security-Policy",
            value: "frame-ancestors *", // Allows embedding from any origin
          },
        ],
      },
    ];
  },
};

export default nextConfig;
