"use client";

import CommonLiftPage from "@/components/CommonLiftPage";

const lgBrandConfig = {
  name: "LG",
  displayName: "LG - Sino Korea",
  heroImage:
    "https://res.cloudinary.com/brotherslift/image/upload/v1758993190/IMG-20250927-WA0008_ldjlim.jpg",
  description:
    "Korean innovation meets Chinese manufacturing excellence. LG SIGMA series delivers advanced elevator technology with regenerative drives and premium build quality for modern buildings.",
  brandColor: "green" as const,
  features: [
    {
      label: "Capacity Range",
      value: "450kg - 2500kg",
    },
    {
      label: "Speed Range",
      value: "1.0 - 6.0 m/s",
    },
    {
      label: "Floor Range",
      value: "2 - 50 Floors",
    },
    {
      label: "Standards",
      value: "Korean KS, ISO 14798",
    },
  ],
  whyChoose: [
    {
      icon: "⚡",
      title: "SIGMA Technology",
      description:
        "Advanced SIGMA series with permanent magnet gearless motors for superior efficiency",
    },
    {
      icon: "🔋",
      title: "Regenerative Drive",
      description:
        "VVVF regenerative drive system that feeds energy back to building power supply",
    },
    {
      icon: "🏥",
      title: "Hospital Grade",
      description:
        "Specialized hospital lifts with stainless steel interiors and UPS integration",
    },
    {
      icon: "📋",
      title: "Korean Standards",
      description:
        "Certified to Korean KS standards with international safety compliance",
    },
  ],
};

export default function LGLiftPage() {
  return <CommonLiftPage brandConfig={lgBrandConfig} />;
}
