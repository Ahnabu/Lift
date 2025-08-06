import { HeroSlider } from "@/components/hero-slider"
import { ServicesSection } from "@/components/services-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactForm } from "@/components/contact-form"
import { WhyChooseUsSection } from "@/components/whyChooseUsSection"
import { ProductsServicesSection } from "@/components/products-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSlider />
      <ProductsServicesSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProjectsSection />
      {/* <PartnersSection /> */}
      <ContactForm />
    </div>
  )
}
