export interface NavigationItem {
  title: string
  href: string
  description?: string
  items?: NavigationItem[]
}

export interface Product {
  id: string
  title: string
  description: string
  image: string
  href: string
  category: "generator" | "hvac" | "solar" | "lift" | "forklift"
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  category: string
  completed: boolean
  location?: string
}

export interface Partner {
  id: string
  name: string
  logo: string
  category: "hvac" | "lift" | "forklift" | "generator" | "street-light"
  href?: string
}

export interface SliderItem {
  id: string
  title: string
  subtitle?: string
  description: string
  image: string
  href: string
  ctaText: string
}

export interface ContactForm {
  name: string
  email: string
  phone: string
  message: string
}

export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    facebook: string
    linkedin: string
  }
  contact: {
    phone: string
    email: string
    address: string
    emergency: string
  }
}
