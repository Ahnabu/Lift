import { HeroSlider } from "@/components/hero-slider"
import { ProductsSection } from "@/components/products-section"
import { ServicesSection } from "@/components/services-section"
import { ProjectsSection } from "@/components/projects-section"
import { PartnersSection } from "@/components/partners-section"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSlider />
      <ProductsSection />
      <ServicesSection />
      <ProjectsSection />
      <PartnersSection />
      <ContactForm />
    </div>
  )
}
