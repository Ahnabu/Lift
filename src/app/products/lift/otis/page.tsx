"use client";

import CommonLiftPage from "@/components/CommonLiftPage";

const otisBrandConfig = {
  name: "Otis",
  displayName: "Otis - China",
  heroImage:
    "https://res.cloudinary.com/brotherslift/image/upload/v1758993190/IMG-20250927-WA0008_ldjlim.jpg",
  description:
    "Global elevator leader with ReGen Drive and flat belt technology. Otis delivers world-class engineering with advanced destination dispatch and traffic optimization systems.",
  brandColor: "purple" as const,
  features: [
    {
      label: "Capacity Range",
      value: "630kg - 5000kg",
    },
    {
      label: "Speed Range",
      value: "1.0 - 7.0 m/s",
    },
    {
      label: "Floor Range",
      value: "2 - 60 Floors",
    },
    {
      label: "Technology",
      value: "GeN2 Premier, ReGen Drive",
    },
  ],
  whyChoose: [
    {
      icon: "🌍",
      title: "Global Leader",
      description:
        "World's leading elevator company with over 170 years of innovation and excellence",
    },
    {
      icon: "⚡",
      title: "ReGen Drive",
      description:
        "Advanced regenerative drive technology that reduces energy consumption by up to 75%",
    },
    {
      icon: "🎯",
      title: "Destination Dispatch",
      description:
        "Smart traffic management system that optimizes elevator efficiency and reduces wait times",
    },
    {
      icon: "🔧",
      title: "GeN2 Technology",
      description:
        "Flat belt technology with machine room-less design for smooth and quiet operation",
    },
  ],
};

export default function OtisLiftPage() {
  return <CommonLiftPage brandConfig={otisBrandConfig} />;
}
