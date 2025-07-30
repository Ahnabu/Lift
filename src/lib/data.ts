import { Product, Service, Project, Partner, SliderItem } from "@/types"

export const sliderItems: SliderItem[] = [
  {
    id: "1",
    title: "DUAL SENSING",
    subtitle: "CONTROL",
    description: "Advanced dual sensing control technology for enhanced safety and precision in lift operations.",
    image: "/api/placeholder/1200/600",
    href: "/slider/details/dual-sensing-control",
    ctaText: "LEARN MORE"
  },
  {
    id: "2",
    title: "MOVE UP WITH",
    subtitle: "STYLE & ELEGANCE",
    description: "Experience luxury and sophistication with our premium lift designs that complement any architectural style.",
    image: "/api/placeholder/1200/600",
    href: "/slider/details/move-up-with-style-elegance",
    ctaText: "LEARN MORE"
  },
  {
    id: "3",
    title: "LIFTING AND MOVING",
    subtitle: "FORWARD",
    description: "Innovative lift solutions that propel your building and business towards a brighter future.",
    image: "/api/placeholder/1200/600",
    href: "/slider/details/lifting-and-moving-forward",
    ctaText: "LEARN MORE"
  },
  {
    id: "4",
    title: "PLUG INTO UNINTERRUPTED",
    subtitle: "POWER SUPPLY",
    description: "Reliable backup power systems ensuring your lifts operate smoothly during power outages.",
    image: "/api/placeholder/1200/600",
    href: "/slider/details/plug-into-uninterrupted-power-supply",
    ctaText: "LEARN MORE"
  }
]

export const products: Product[] = [
  {
    id: "generator",
    title: "GENERATOR",
    description: "High-quality generators providing reliable backup power for all your lift systems and building needs.",
    image: "https://propertylifts.com/images/sections/d66f4890260e4a2c8860f4414b155ab8/liftLIFT.jpg",
    href: "/products/generator",
    category: "generator"
  },
  {
    id: "hvac",
    title: "HVAC",
    description: "Complete heating, ventilation, and air conditioning solutions for optimal comfort and air quality.",
    image: "https://propertylifts.com/images/sections/d66f4890260e4a2c8860f4414b155ab8/liftLIFT.jpg",
    href: "/products/hvac",
    category: "hvac"
  },
  {
    id: "solar",
    title: "SOLAR",
    description: "Sustainable solar energy systems for eco-friendly and cost-effective power solutions.",
    image: "https://propertylifts.com/images/sections/d66f4890260e4a2c8860f4414b155ab8/liftLIFT.jpg",
    href: "/products/solar",
    category: "solar"
  },
  {
    id: "lift",
    title: "LIFT",
    description: "Premium lifts and elevators designed for safety, reliability, and smooth operation in any building.",
    image: "https://propertylifts.com/images/sections/d66f4890260e4a2c8860f4414b155ab8/liftLIFT.jpg",
    href: "/products/lift/property-lifts",
    category: "lift"
  },
  {
    id: "forklift",
    title: "FORKLIFT",
    description: "Industrial-grade forklifts for efficient material handling and warehouse operations.",
    image: "https://propertylifts.com/images/sections/d66f4890260e4a2c8860f4414b155ab8/liftLIFT.jpg",
    href: "/products/forklift",
    category: "forklift"
  }
]

export const services: Service[] = [
  {
    id: "24-7-service",
    title: "24/7 SERVICE",
    description: "The one-stop call center 09613737777 has a solution for emergency, complaints exploration, installation, pay ladder, use, maintenance and other services.",
    icon: "Clock",
    features: [
      "24/7 Emergency Support",
      "Quick Response Time",
      "Expert Technical Team",
      "Comprehensive Solutions"
    ]
  },
  {
    id: "technical-support",
    title: "TECHNICAL SUPPORT AND TRAINING",
    description: "The after sales and installation service includes staff training, explanation of usage & routine check up",
    icon: "Users",
    features: [
      "Staff Training Programs",
      "Usage Guidelines",
      "Routine Check-ups",
      "Technical Documentation"
    ]
  },
  {
    id: "maintenance",
    title: "CONTINUED ROUTINE MAINTENANCE",
    description: "Every fortnightly preventative routine maintenance (cleaning, lubrication, adjustment) to ensure that your company's elevator to stable operation.",
    icon: "Settings",
    features: [
      "Fortnightly Maintenance",
      "Preventative Care",
      "Performance Optimization",
      "Stable Operations"
    ]
  }
]

export const projects: Project[] = [
  {
    id: "azimpur-govt-colony",
    title: "AZIMPUR GOVT. COLONY",
    description: "Government residential complex lift installation and maintenance project.",
    image: "/api/placeholder/400/300",
    category: "Residential",
    completed: true,
    location: "Azimpur, Dhaka"
  },
  {
    id: "bangladesh-secretariat",
    title: "BANGLADESH SECRETARIAT",
    description: "Premium lift systems for the main government administrative building.",
    image: "/api/placeholder/400/300",
    category: "Government",
    completed: true,
    location: "Dhaka"
  },
  {
    id: "bsmmu",
    title: "BANGABANDHU SHEIKH MUJIB MEDICAL UNIVERSITY",
    description: "Hospital-grade lift systems with advanced safety features for medical facility.",
    image: "/api/placeholder/400/300",
    category: "Healthcare",
    completed: true,
    location: "Dhaka"
  }
]

export const partners: Partner[] = [
  {
    id: "cps",
    name: "CPS",
    logo: "/api/placeholder/150/80",
    category: "generator"
  },
  {
    id: "visa",
    name: "VISA",
    logo: "/api/placeholder/150/80",
    category: "generator"
  },
  {
    id: "volcano",
    name: "Volcano",
    logo: "/api/placeholder/150/80",
    category: "generator"
  },
  {
    id: "lg",
    name: "LG",
    logo: "/api/placeholder/150/80",
    category: "hvac"
  },
  {
    id: "aermec",
    name: "Aermec",
    logo: "/api/placeholder/150/80",
    category: "hvac"
  },
  {
    id: "zgsm",
    name: "ZGSM",
    logo: "/api/placeholder/150/80",
    category: "street-light"
  },
  {
    id: "kone",
    name: "Kone",
    logo: "/api/placeholder/150/80",
    category: "lift"
  },
  {
    id: "mp",
    name: "MP",
    logo: "/api/placeholder/150/80",
    category: "lift"
  },
  {
    id: "srh",
    name: "SRH",
    logo: "/api/placeholder/150/80",
    category: "lift"
  },
  {
    id: "yale",
    name: "Yale",
    logo: "/api/placeholder/150/80",
    category: "forklift"
  }
]

export const companyHighlights = [
  "Extensive Experience",
  "Quality from start to finish",
  "Employees are continually trained on safety",
  "Best service provider"
]
