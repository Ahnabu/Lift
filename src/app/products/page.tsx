"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building, Zap } from "lucide-react";

const productCategories = [
  {
    id: "lifts",
    title: "LIFT & ELEVATORS",
    description:
      "Complete range of vertical transportation solutions with premium brands and professional installation services.",
    icon: Building,
    href: "/products/lift",
    image:
      "https://res.cloudinary.com/brotherslift/image/upload/v1758993190/IMG-20250927-WA0008_ldjlim.jpg",
    brands: [
      {
        name: "BLT Lift",
        description: "Premium technology lifts",
        href: "/products/lift/blt-lift",
        image: "https://cdn.bdstall.com/product-image/giant_266200.jpg",
      },
      {
        name: "Hidoks - Turkey",
        description: "Turkish engineering excellence",
        href: "/products/lift/hidoks",
        image:
          "https://res.cloudinary.com/brotherslift/image/upload/v1759002409/Hidoks.jpg",
      },
      {
        name: "Otis - China",
        description: "Global elevator leader",
        href: "/products/lift/otis",
        image:
          "https://res.cloudinary.com/brotherslift/image/upload/v1759002566/OTis%20-%20China.webp",
      },
      {
        name: "LG - Sino Korea",
        description: "Korean innovation",
        href: "/products/lift/lg",
        image:
          "https://res.cloudinary.com/brotherslift/image/upload/v1759002750/giant_331619_arpvvq.jpg",
      },
      {
        name: "Sunny Lifts",
        description: "Economic excellence",
        href: "/products/lift/sunny",
        image:
          "https://res.cloudinary.com/brotherslift/image/upload/v1759002841/download_l0xvnw.jpg",
      },
      {
        name: "Fuji Lifts",
        description: "Japanese precision",
        href: "/products/lift/fuji",
        image:
          "https://res.cloudinary.com/brotherslift/image/upload/v1759002916/download_gyqrwm.jpg",
      },
    ],
  },
  {
    id: "generators",
    title: "GENERATORS",
    description:
      "Reliable backup power systems ensuring uninterrupted operation of your vertical transportation systems.",
    icon: Zap,
    href: "/products/generator",
    image:
      "https://res.cloudinary.com/brotherslift/image/upload/v1759215872/eng1-scaled_pntrwx.jpg",
    brands: [
      {
        name: "Industrial Generators",
        description: "High-capacity power backup systems",
        href: "/products/generator",
        image:
          "https://res.cloudinary.com/brotherslift/image/upload/v1759215872/eng1-scaled_pntrwx.jpg",
      },
    ],
  },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("lifts");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden products-hero-bg">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-[1320px] mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4 tracking-wider">
              OUR PRODUCTS
            </h1>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Discover our comprehensive range of premium lift solutions and
              power systems
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-[1320px] mx-auto px-4 py-12">
        {/* Category Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-white rounded-lg shadow-lg p-2">
            {productCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-md transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-orange-500 text-white shadow-lg"
                      : "text-gray-600 hover:text-orange-500 hover:bg-orange-50"
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="font-semibold">{category.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Category Content */}
        {productCategories.map((category) => (
          <div
            key={category.id}
            className={`${activeCategory === category.id ? "block" : "hidden"}`}
          >
            {/* Category Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {category.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {category.description}
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.brands.map((brand, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {brand.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{brand.description}</p>

                    {/* View Products Link */}
                    <div className="mb-6">
                      <span className="text-blue-600 text-sm font-medium">
                        View Products & Get Quote →
                      </span>
                    </div>

                    {/* CTA Button */}
                    <Link
                      href={brand.href}
                      className="inline-flex items-center space-x-2 w-full justify-center bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300 group"
                    >
                      <span>Explore {brand.name}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info for Lifts */}
            {category.id === "lifts" && (
              <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    Why Choose Our Lift Solutions?
                  </h3>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    We partner with the world&apos;s leading elevator
                    manufacturers to bring you the best in vertical
                    transportation
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building className="w-8 h-8 text-orange-500" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">
                      Global Standards
                    </h4>
                    <p className="text-gray-600">
                      International quality standards with local service
                      excellence
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-orange-500" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">
                      Energy Efficient
                    </h4>
                    <p className="text-gray-600">
                      Advanced technology for reduced energy consumption and
                      costs
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building className="w-8 h-8 text-orange-500" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">
                      24/7 Support
                    </h4>
                    <p className="text-gray-600">
                      Round-the-clock maintenance and emergency support services
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl shadow-lg p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Elevate Your Building?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Get in touch with our experts to find the perfect solution for your
            needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Quote
            </Link>
            <Link
              href="/projects"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-500 transition-colors"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
