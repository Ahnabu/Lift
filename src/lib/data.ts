import { Product, Service, Project, Partner, SliderItem } from "@/types"

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
    id: "generator",
    title: "GENERATOR",
    description:
      "High-quality generators providing reliable backup power for all your lift systems and building needs.",
    image:
      "https://res.cloudinary.com/brotherslift/image/upload/v1758993190/IMG-20250927-WA0008_ldjlim.jpg",
    href: "/products/generator",
    category: "generator",
  },
  {
    id: "hvac",
    title: "HVAC",
    description:
      "Complete heating, ventilation, and air conditioning solutions for optimal comfort and air quality.",
    image:
      "https://res.cloudinary.com/brotherslift/image/upload/v1758992975/WhatsApp_Image_2025-09-24_at_13.11.52_76fb1db5_jefhvg.jpg",
    href: "/products/hvac",
    category: "hvac",
  },
  {
    id: "solar",
    title: "SOLAR",
    description:
      "Sustainable solar energy systems for eco-friendly and cost-effective power solutions.",
    image: "/dummy_rectangular.jfif",
    href: "/products/solar",
    category: "solar",
  },
  {
    id: "lift",
    title: "LIFT",
    description:
      "Premium lifts and elevators designed for safety, reliability, and smooth operation in any building.",
    image: "/dummy_rectangular.jfif",
    href: "/products/lift",
    category: "lift",
  },
  {
    id: "forklift",
    title: "FORKLIFT",
    description:
      "Industrial-grade forklifts for efficient material handling and warehouse operations.",
    image: "/dummy_rectangular.jfif",
    href: "/products/forklift",
    category: "forklift",
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
    title: "TECHNICAL SUPPORT AND TRAINING",
    description:
      "The after sales and installation service includes staff training, explanation of usage & routine check up",
    icon: "Users",
    features: [
      "Staff Training Programs",
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
    category: "generator"
  },
  {
    id: "visa",
    name: "VISA",
  logo: "/vercel.svg",
    category: "generator"
  },
  {
    id: "volcano",
    name: "Volcano",
  logo: "/globe.svg",
    category: "generator"
  },
  {
    id: "lg",
    name: "LG",
  logo: "/file.svg",
    category: "hvac"
  },
  {
    id: "aermec",
    name: "Aermec",
  logo: "/window.svg",
    category: "hvac"
  },
  {
    id: "zgsm",
    name: "ZGSM",
  logo: "/next.svg",
    category: "street-light"
  },
  {
    id: "kone",
    name: "Kone",
  logo: "/vercel.svg",
    category: "lift"
  },
  {
    id: "mp",
    name: "MP",
  logo: "/globe.svg",
    category: "lift"
  },
  {
    id: "srh",
    name: "SRH",
  logo: "/file.svg",
    category: "lift"
  },
  {
    id: "yale",
    name: "Yale",
  logo: "/window.svg",
    category: "forklift"
  }
]

export const companyHighlights = [
  "Extensive Experience",
  "Quality from start to finish",
  "Employees are continually trained on safety",
  "Best service provider"
]

export const homeOfferings = [
  {
    id: "passenger-lifts",
    title: "Passenger Lifts",
    description:
      "Safe, comfortable, and stylish elevators for residential and commercial buildings.",
    image:
      "https://propertylifts.com/images/sections/c78bfd6e90e848c09203843d43199b5e/generatorGENERATOR.jpg",
    type: "product",
    href: "/products/lift/passenger-lift",
    category: "lift",
  },
  {
    id: "cargo-lifts",
    title: "Cargo Lifts",
    description:
      "Heavy-duty solutions for transporting goods efficiently and securely.",
    image:
      "https://propertylifts.com/images/sections/c78bfd6e90e848c09203843d43199b5e/generatorGENERATOR.jpg",
    type: "product",
    href: "/products/lift/cargo-lift",
    category: "lift",
  },
  {
    id: "hospital-lifts",
    title: "Hospital Lifts",
    description:
      "Specially designed for medical facilities, ensuring smooth and safe patient transport.",
    image:
      "https://propertylifts.com/images/sections/c78bfd6e90e848c09203843d43199b5e/generatorGENERATOR.jpg",
    type: "product",
    href: "/products/lift/hospital-lift",
    category: "lift",
  },
  {
    id: "escalators",
    title: "Escalators",
    description:
      "Modern and reliable escalators for shopping malls, airports, and public spaces.",
    image:
      "https://propertylifts.com/images/sections/c78bfd6e90e848c09203843d43199b5e/generatorGENERATOR.jpg",
    type: "product",
    href: "/products/escalator",
    category: "escalator",
  },
  {
    id: "generators",
    title: "Generators",
    description:
      "Uninterrupted power solutions to keep your operations running 24/7.",
    image:
      "https://propertylifts.com/images/sections/c78bfd6e90e848c09203843d43199b5e/generatorGENERATOR.jpg",
    type: "product",
    href: "/products/generator",
    category: "generator",
  },
  {
    id: "forklift",
    title: "Forklifts",
    description:
      "Industrial-grade forklifts for efficient material handling and warehouse operations.",
    image:
      "https://propertylifts.com/images/sections/c78bfd6e90e848c09203843d43199b5e/generatorGENERATOR.jpg",
    type: "product",
    href: "/products/forklift",
    category: "forklift",
  },
];