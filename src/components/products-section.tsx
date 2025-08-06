"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Users,
  Settings,
  Wrench,
  Phone,
  Building,
  Package,
  MoveUp,
  Zap,
} from "lucide-react";
import { homeOfferings } from "@/lib/data";

const iconMap = {
  Clock,
  Users,
  Settings,
  Wrench,
  Phone,
  Building,
  Package,
  MoveUp,
  Zap,
};

export function ProductsServicesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(4);

  // Auto-change slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % homeOfferings.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Handle responsive items per slide
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setItemsPerSlide(4);
      else if (window.innerWidth >= 768) setItemsPerSlide(3);
      else if (window.innerWidth >= 640) setItemsPerSlide(2);
      else setItemsPerSlide(1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % homeOfferings.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + homeOfferings.length) % homeOfferings.length
    );
  };

  const getVisibleOfferings = () => {
    const visibleOfferings = [];
    for (let i = 0; i < itemsPerSlide; i++) {
      const offeringIndex = (currentSlide + i) % homeOfferings.length;
      visibleOfferings.push(homeOfferings[offeringIndex]);
    }
    return visibleOfferings;
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-wider mb-2">
              Our Products & Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive solutions for all your vertical transportation and
              power needs
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full border border-border hover:bg-accent transition-colors"
              aria-label="Previous offerings"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full border border-border hover:bg-accent transition-colors"
              aria-label="Next offerings"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Offerings Slider */}
        <div className="relative overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-all duration-500 ease-in-out">
            {getVisibleOfferings().map((offering, index) => (
              <div
                key={`${offering.id}-${currentSlide}-${index}`}
                className="group block"
              >
                <div className="bg-card rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 border border-border h-full">
                  {/* Image/Icon */}
                  <div className="aspect-[4/3] relative overflow-hidden">
                    {offering.type === "product" && offering.image ? (
                      <Image
                        src={offering.image}
                        alt={offering.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        {/* {offering.icon &&
                          iconMap[offering.icon as keyof typeof iconMap] &&
                          (() => {
                            const IconComponent =
                              iconMap[offering.icon as keyof typeof iconMap];
                            return (
                              <IconComponent className="w-12 h-12 text-primary" />
                            );
                          })()} */}
                      </div>
                    )}
                    {/* Type Badge */}
                    <div className="absolute top-2 right-2">
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          offering.type === "product"
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground"
                        }`}
                      >
                        {offering.type === "product" ? "Product" : "Service"}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-bold text-lg tracking-wider text-card-foreground group-hover:text-primary transition-colors mb-2">
                      {offering.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {offering.description}
                    </p>

                    {/* CTA */}
                    <div className="mt-4">
                      <Link
                        href={offering.href}
                        className="text-primary hover:text-primary/80 text-sm font-semibold"
                      >
                        {offering.type === "product"
                          ? "Learn More →"
                          : "Get Service →"}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}