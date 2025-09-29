"use client";

import CommonLiftPage from "@/components/CommonLiftPage";

const bltBrandConfig = {
  name: "Brother's Lift Technology",
  displayName: "Brother's Lift Technology (BLT)",
  heroImage:
    "https://res.cloudinary.com/brotherslift/image/upload/v1758993190/IMG-20250927-WA0008_ldjlim.jpg",
  description:
    "Setting the standard for excellence in vertical transportation. Our advanced elevator systems combine cutting-edge technology with unmatched reliability, ensuring smooth and safe operation for residential, commercial, and industrial applications.",
  brandColor: "blue" as const,
  features: [
    {
      label: "Capacity Range",
      value: "630kg - 5000kg",
    },
    {
      label: "Speed Range",
      value: "0.25 - 2.5 m/s",
    },
    {
      label: "Floor Range",
      value: "2 - 20 Floors",
    },
    {
      label: "Applications",
      value: "Residential & Commercial",
    },
  ],
  whyChoose: [
    {
      icon: "✅",
      title: "Quality Assurance",
      description:
        "Rigorous testing and quality control at every manufacturing stage",
    },
    {
      icon: "⚡",
      title: "Energy Efficient",
      description:
        "VVVF drives with regenerative capabilities for optimal power consumption",
    },
    {
      icon: "🎛️",
      title: "Advanced Control",
      description:
        "State-of-the-art microprocessor control systems for smooth operation",
    },
    {
      icon: "🇧🇩",
      title: "Local Support",
      description:
        "Comprehensive after-sales service and maintenance support in Bangladesh",
    },
  ],
};

export default function BLTLiftPage() {
  return <CommonLiftPage brandConfig={bltBrandConfig} />;
}
