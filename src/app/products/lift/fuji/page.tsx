"use client";

import CommonLiftPage from "@/components/CommonLiftPage";

const fujiBrandConfig = {
  name: "Fuji",
  displayName: "Fuji",
  heroImage:
    "https://res.cloudinary.com/brotherslift/image/upload/v1758993190/IMG-20250927-WA0008_ldjlim.jpg",
  description:
    "Japanese precision engineering meets advanced AI technology. Fuji ZEPHYR series delivers ultra-high performance elevators with machine room-less design and earthquake emergency operation.",
  brandColor: "purple" as const,
  features: [
    {
      label: "Capacity Range",
      value: "450kg - 3000kg",
    },
    {
      label: "Speed Range",
      value: "1.0 - 10.0 m/s",
    },
    {
      label: "Floor Range",
      value: "2 - 60 Floors",
    },
    {
      label: "Special Features",
      value: "AI Technology, Earthquake Safety",
    },
  ],
  whyChoose: [
    {
      icon: "🤖",
      title: "AI Technology",
      description:
        "Advanced VVVF with AI technology for predictive maintenance and optimization",
    },
    {
      icon: "⚡",
      title: "Ultra High Speed",
      description:
        "ZEPHYR technology enables ultra-high speeds up to 10.0 m/s for tall buildings",
    },
    {
      icon: "🚨",
      title: "Earthquake Safety",
      description:
        "Advanced earthquake emergency operation system with automatic safety protocols",
    },
    {
      icon: "📋",
      title: "Japanese Standards",
      description:
        "Certified to JIS A 4307 and global safety standards with precision engineering",
    },
  ],
};

export default function FujiLiftPage() {
  return <CommonLiftPage brandConfig={fujiBrandConfig} />;
}
