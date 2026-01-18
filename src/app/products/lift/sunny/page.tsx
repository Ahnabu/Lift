"use client";

import CommonLiftPage from "@/components/CommonLiftPage";

const sunnyBrandConfig = {
  name: "Sunny",
  displayName: "Sunny",
  heroImage:
    "https://res.cloudinary.com/brotherslift/image/upload/v1758993190/IMG-20250927-WA0008_ldjlim.jpg",
  description:
    "Affordable reliability with practical functionality and essential features. Sunny elevators provide cost-effective solutions without compromising on safety standards for residential and light commercial applications.",
  brandColor: "yellow" as const,
  features: [
    {
      label: "Capacity Range",
      value: "320kg - 1000kg",
    },
    {
      label: "Speed Range",
      value: "0.5 - 1.5 m/s",
    },
    {
      label: "Floor Range",
      value: "2 - 15 Floors",
    },
    {
      label: "Applications",
      value: "Residential & Light Commercial",
    },
  ],
  whyChoose: [
    {
      icon: "💰",
      title: "Budget Friendly",
      description:
        "Cost-effective elevator solutions that deliver excellent value for money",
    },
    {
      icon: "🔧",
      title: "Easy Maintenance",
      description:
        "Simple design with readily available spare parts for minimal maintenance costs",
    },
    {
      icon: "🏠",
      title: "Perfect for Small Buildings",
      description:
        "Ideal for residential complexes, small offices, and light commercial buildings",
    },
    {
      icon: "✅",
      title: "Reliable Operation",
      description:
        "Proven performance with essential safety features and dependable operation",
    },
  ],
};

export default function SunnyLiftPage() {
  return <CommonLiftPage brandConfig={sunnyBrandConfig} />;
}
