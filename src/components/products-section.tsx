"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "@/lib/data";

export function ProductsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(4);

  // Auto-change slider - moves one product at a time
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    }, 3000); // Change every 3 seconds

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
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  // Get visible products based on current slide and items per slide
  const getVisibleProducts = () => {
    const visibleProducts = [];
    for (let i = 0; i < itemsPerSlide; i++) {
      const productIndex = (currentSlide + i) % products.length;
      visibleProducts.push(products[productIndex]);
    }
    return visibleProducts;
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-wider">
            Our Products & Services
          </h2>
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
              aria-label="Previous products"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
              aria-label="Next products"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Products Slider */}
        <div className="relative overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-all duration-500 ease-in-out">
            {getVisibleProducts().map((product, index) => (
              <Link
                key={`${product.id}-${currentSlide}-${index}`}
                href={product.href}
                className="group block"
              >
                <div className="bg-white rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                  {/* Product Image */}
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Product Title */}
                  <div className="p-4 text-center">
                    <h3 className="font-bold text-lg tracking-wider text-gray-900 group-hover:text-black transition-colors">
                      {product.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
