"use client";

import { CheckCircle, Clock, Shield, Users, Wrench, Phone } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Years of Experience",
    description:
      "With over 20 years in the industry, we bring unparalleled expertise to every project.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "We partner with leading global brands and adhere to the highest international safety and quality standards.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Our team of certified engineers and technicians is dedicated to flawless installation and service.",
  },
  {
    icon: Phone,
    title: "24/7 Customer Support",
    description:
      "Your peace of mind is our priority. Our support team is available around the clock to assist you.",
  },
  {
    icon: Wrench,
    title: "Custom Solutions",
    description:
      "We design and deliver tailored solutions that perfectly match your building's requirements and aesthetic.",
  },
  {
    icon: CheckCircle,
    title: "Proven Track Record",
    description:
      "Hundreds of successful installations and satisfied clients across residential and commercial sectors.",
  },
];

const stats = [
  {
    value: "20+",
    label: "Years Experience",
  },
  {
    value: "500+",
    label: "Projects Completed",
  },
  {
    value: "24/7",
    label: "Customer Support",
  },
  {
    value: "100%",
    label: "Client Satisfaction",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the advantages that make us the preferred choice for lift
            solutions across the industry
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-lg bg-card hover:shadow-lg transition-all duration-300 border border-border"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-8 py-12 bg-muted rounded-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}