"use client";

import CommonLiftPage from "@/components/CommonLiftPage";

const hidoksBrandConfig = {
  name: "Hidoks",
  displayName: "Hidoks",
  heroImage:
    "https://res.cloudinary.com/brotherslift/image/upload/v1758993190/IMG-20250927-WA0008_ldjlim.jpg",
  description:
    "Reliable and cost-effective elevator solutions with proven technology. Hidoks delivers quality lifts with excellent value for money, featuring robust construction and dependable performance for residential and commercial applications.",
  brandColor: "green" as const,
  features: [
    {
      label: "Capacity Range",
      value: "320kg - 2000kg",
    },
    {
      label: "Speed Range",
      value: "0.5 - 1.75 m/s",
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
      icon: "💰",
      title: "Cost Effective",
      description:
        "Excellent value for money with reliable performance and quality construction",
    },
    {
      icon: "🔧",
      title: "Easy Maintenance",
      description:
        "Simple design with readily available parts for easy maintenance and service",
    },
    {
      icon: "🏗️",
      title: "Robust Construction",
      description:
        "Durable and reliable elevator systems built to last for years of operation",
    },
    {
      icon: "📞",
      title: "Local Support",
      description:
        "Comprehensive local support with quick response times for service and maintenance",
    },
  ],
};

export default function HidoksLiftPage() {
  return <CommonLiftPage brandConfig={hidoksBrandConfig} />;
}
