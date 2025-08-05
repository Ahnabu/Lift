"use client";

import { useState } from "react";
import { Clock, Users, Settings, ChevronRight, ArrowRight } from "lucide-react";
import { services } from "@/lib/data";
import { cn } from "@/lib/utils";
import Link from "next/link";

const iconMap = {
  Clock,
  Users,
  Settings,
};

export function ServicesSection() {
  const [activeService, setActiveService] = useState(services[0].id);

  const handleServiceClick = (serviceId: string) => {
    setActiveService(serviceId);
  };

  const activeServiceData = services.find(
    (service) => service.id === activeService
  );

  return (
    <section className="py-8 bg-gradient-to-br from-secondary/5 to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Expert Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive support services that ensure your systems perform at
            their best
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Service Navigation */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-xl shadow-lg overflow-hidden border border-border">
              {services.map((service, index) => {
                const IconComponent =
                  iconMap[service.icon as keyof typeof iconMap];
                const isActive = service.id === activeService;

                return (
                  <div
                    key={service.id}
                    className={cn(
                      "cursor-pointer transition-all",
                      isActive
                        ? "bg-primary/10 border-l-4 border-primary"
                        : "hover:bg-accent border-l-4 border-transparent",
                      index !== services.length - 1 && "border-b border-border"
                    )}
                    onClick={() => handleServiceClick(service.id)}
                  >
                    <div className="p-6 flex items-center justify-between">
                      <div className="flex items-center">
                        <div
                          className={cn(
                            "w-12 h-12 rounded-full flex items-center justify-center mr-4",
                            isActive
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          )}
                        >
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <h3
                          className={cn(
                            "font-semibold",
                            isActive ? "text-primary" : "text-foreground"
                          )}
                        >
                          {service.title}
                        </h3>
                      </div>
                      <ChevronRight
                        className={cn(
                          "w-5 h-5 transition-transform",
                          isActive
                            ? "text-primary rotate-90"
                            : "text-muted-foreground"
                        )}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Service Details */}
          <div className="lg:col-span-3 h-full">
            {activeServiceData && (
              <div className="bg-card rounded-xl shadow-lg h-full border border-border p-8">
                <div className="flex items-center mb-6">
                  {activeServiceData.icon &&
                    iconMap[activeServiceData.icon as keyof typeof iconMap] && (
                      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                        {(() => {
                          const IconComponent =
                            iconMap[
                              activeServiceData.icon as keyof typeof iconMap
                            ];
                          return (
                            <IconComponent className="h-8 w-8 text-primary" />
                          );
                        })()}
                      </div>
                    )}
                  <h3 className="text-2xl font-bold text-foreground">
                    {activeServiceData.title}
                  </h3>
                </div>

                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  {activeServiceData.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activeServiceData.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/services"
                  className="inline-flex items-center group text-primary hover:text-primary/80 font-semibold"
                >
                  Learn more about our services
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-foreground mb-6">
            Need immediate assistance or have questions?
          </p>
          <Link
            href="/contact-us"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-md inline-flex items-center font-medium hover:bg-primary/90 transition-colors"
          >
            Contact Our Service Team
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}