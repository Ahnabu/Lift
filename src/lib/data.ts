import { Product, Service, Project, Partner, SliderItem } from "@/types";

export const sliderItems: SliderItem[] = [
  {
    id: "1",
    title: "Elevating Your World With",
    subtitle: "Style and Reliability",
    description:
      "We provide state-of-the-art lifts, escalators, and power solutions designed for safety, elegance, and unmatched performance. From residential buildings to commercial complexes, our solutions are engineered for excellence.",
    image:
      "https://res.cloudinary.com/brotherslift/image/upload/v1758993190/IMG-20250927-WA0008_ldjlim.jpg",
    href: "/products",
    ctaText: "Explore Our Products",
  },
  {
    id: "2",
    title: "The Future Of",
    subtitle: "Vertical Transportation",
    description:
      "We provide state-of-the-art lifts, escalators, and power solutions designed for safety, elegance, and unmatched performance. From residential buildings to commercial complexes, our solutions are engineered for excellence.",
    image:
      "https://res.cloudinary.com/brotherslift/image/upload/v1758992975/WhatsApp_Image_2025-09-24_at_13.11.52_76fb1db5_jefhvg.jpg",
    href: "/products",
    ctaText: "Explore Our Products",
  },
  {
    id: "3",
    title: "LIFTING AND MOVING",
    subtitle: "FORWARD",
    description:
      "Innovative lift solutions that propel your building and business towards a brighter future.",
    image:
      "https://res.cloudinary.com/brotherslift/image/upload/v1758993188/IMG-20250927-WA0010_zjt9un.jpg",
    href: "/products",
    ctaText: "Explore Our Products",
  },
  {
    id: "4",
    title: "PLUG INTO UNINTERRUPTED",
    subtitle: "POWER SUPPLY",
    description:
      "Reliable backup power systems ensuring your lifts operate smoothly during power outages.",
    image:
      "https://res.cloudinary.com/brotherslift/image/upload/v1758993189/IMG-20250927-WA0007_qub413.jpg",
    href: "/products",
    ctaText: "Explore Our Products",
  },
];

export const products: Product[] = [
  {
    id: "lift",
    title: "LIFT",
    description:
      "Premium lifts and elevators designed for safety, reliability, and smooth operation in any building.",
    image:
      "https://res.cloudinary.com/brotherslift/image/upload/v1758993190/IMG-20250927-WA0008_ldjlim.jpg",
    href: "/products/lift",
    category: "lift",
  },
  {
    id: "generator",
    title: "GENERATOR",
    description:
      "High-quality generators providing reliable backup power for all your lift systems and building needs.",
    image:
      "https://res.cloudinary.com/brotherslift/image/upload/v1758993189/IMG-20250927-WA0007_qub413.jpg",
    href: "/products/generator",
    category: "generator",
  },
];

export const services: Service[] = [
  {
    id: "24-7-service",
    title: "24/7 SERVICE",
    description:
      "The one-stop call center +8801920-883427 has a solution for emergency, complaints exploration, installation, pay ladder, use, maintenance and other services.",
    icon: "Clock",
    features: [
      "24/7 Emergency Support",
      "Quick Response Time",
      "Expert Technical Team",
      "Comprehensive Solutions",
    ],
  },
  {
    id: "technical-support",
    title: "TECHNICAL SUPPORT",
    description:
      "The after sales and installation service includes staff training, explanation of usage & routine check up",
    icon: "Users",
    features: [
      "Usage Guidelines",
      "Routine Check-ups",
      "Technical Documentation",
    ],
  },
  {
    id: "maintenance",
    title: "CONTINUED ROUTINE MAINTENANCE",
    description:
      "Every fortnightly preventative routine maintenance (cleaning, lubrication, adjustment) to ensure that your company's elevator to stable operation.",
    icon: "Settings",
    features: [
      "Fortnightly Maintenance",
      "Preventative Care",
      "Performance Optimization",
      "Stable Operations",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "lr-bhaban",
    title: "LR BHABAN",
    description:
      "Modern lift installation and maintenance services for commercial building with advanced safety features and smooth operation.",
    image:
      "https://res.cloudinary.com/brotherslift/image/upload/v1756820178/LR_Bhaban.jpg",
    category: "Lift",
    completed: true,
    location: "1/2 Outer Circular, Malibagh Mor, Dhaka-1217",
  },
  {
    id: "safe-shelter",
    title: "SAFE SHELTER",
    description:
      "Residential building lift system installation providing safe and reliable vertical transportation for residents.",
    image:
      "https://res.cloudinary.com/brotherslift/image/upload/v1756820177/SafeShelter.jpg",
    category: "Lift",
    completed: true,
    location: "182/C Mogbazar, Dhaka",
  },
  {
    id: "krishnachura-nibas",
    title: "KRISHNACHURA NIBAS",
    description:
      "Premium residential complex lift solutions ensuring comfort and safety for all residents with modern elevator technology.",
    image:
      "https://res.cloudinary.com/brotherslift/image/upload/v1756820179/KrisnochuraNibas.jpg",
    category: "Lift",
    completed: true,
    location: "423/1, Nayatala, Mogbazar, Dhaka-1217",
  },
  {
    id: "keya-plaza",
    title: "Keya Plaza",
    description:
      "Premium residential complex lift solutions ensuring comfort and safety for all residents with modern elevator technology.",
    image:
      "https://res.cloudinary.com/brotherslift/image/upload/v1758830915/DSC03873-min_z0halg.jpg",
    category: "Lift",
    completed: true,
    location: "Pachtala bazar mor, Post office road, Badda, Dhaka-1212",
  },
];

export const partners: Partner[] = [
  {
    id: "cps",
    name: "CPS",
    logo: "/next.svg",
    category: "generator",
  },
  {
    id: "visa",
    name: "VISA",
    logo: "/vercel.svg",
    category: "generator",
  },
  {
    id: "volcano",
    name: "Volcano",
    logo: "/globe.svg",
    category: "generator",
  },
  {
    id: "lg",
    name: "LG",
    logo: "/file.svg",
    category: "hvac",
  },
  {
    id: "aermec",
    name: "Aermec",
    logo: "/window.svg",
    category: "hvac",
  },
  {
    id: "zgsm",
    name: "ZGSM",
    logo: "/next.svg",
    category: "street-light",
  },
  {
    id: "kone",
    name: "Kone",
    logo: "/vercel.svg",
    category: "lift",
  },
  {
    id: "mp",
    name: "MP",
    logo: "/globe.svg",
    category: "lift",
  },
  {
    id: "srh",
    name: "SRH",
    logo: "/file.svg",
    category: "lift",
  },
  {
    id: "yale",
    name: "Yale",
    logo: "/window.svg",
    category: "forklift",
  },
];

export const companyHighlights = [
  "Extensive Experience",
  "Quality from start to finish",
  "Employees are continually trained on safety",
  "Best service provider",
];

export const homeOfferings = [
  {
    id: "lift",
    title: "LIFT",
    description:
      "Premium lifts and elevators designed for safety, reliability, and smooth operation in any building.",
    image:
      "https://res.cloudinary.com/brotherslift/image/upload/v1758993190/IMG-20250927-WA0008_ldjlim.jpg",
    type: "product",
    href: "/products/lift",
    category: "lift",
  },
  {
    id: "generator",
    title: "GENERATOR",
    description:
      "High-quality generators providing reliable backup power for all your lift systems and building needs.",
    image:
      "https://res.cloudinary.com/brotherslift/image/upload/v1759083829/download_mrkqv3.jpg",
    type: "product",
    href: "/products/generator",
    category: "generator",
  },
  {
    id: "blt-lift",
    title: "BLT Lift",
    description:
      "Premium quality lifts designed with cutting-edge technology for superior performance and safety.",
    image: "https://cdn.bdstall.com/product-image/giant_266200.jpg",
    type: "product",
    href: "/products/lift/blt-lift",
    category: "lift",
  },
  {
    id: "hidoks-turkey",
    title: "Hidoks - Turkey",
    description:
      "Turkish engineering excellence in vertical transportation with European quality standards.",
    image: "https://cdn.bdstall.com/product-image/giant_266201.jpg",
    type: "product",
    href: "/products/lift/hidoks",
    category: "lift",
  },
  {
    id: "otis-china",
    title: "Otis - China",
    description:
      "Global elevator leader with cutting-edge technology and unmatched performance for all building types.",
    image: "https://cdn.bdstall.com/product-image/giant_266202.jpg",
    type: "product",
    href: "/products/lift/otis",
    category: "lift",
  },
];
