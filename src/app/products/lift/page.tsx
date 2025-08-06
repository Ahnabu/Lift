"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { allProducts } from "@/data/allLifts";

export default function LIFT() {
  const [activeFilter, setActiveFilter] = useState("all");
  const liftCategories = [
    { id: "all", name: "All Lifts" },
    { id: "passenger", name: "Passenger Lifts" },
    { id: "cargo", name: "Cargo Lifts" },
    { id: "hospital", name: "Hospital Lifts" },
    { id: "capsule", name: "Capsule Lifts" },
    { id: "escalator", name: "Escalators" },
    { id: "imported", name: "Imported Lifts" },
  ];

  const lifts = allProducts.filter((product) =>
    activeFilter === "all"
      ? [
          "passenger",
          "cargo",
          "hospital",
          "capsule",
          "escalator",
          "imported",
        ].includes(product.type)
      : product.type === activeFilter
  );

    console.log(`Filter: ${activeFilter}, Items found: ${lifts.length}`);

  const importedBrands =
    activeFilter === "imported"
      ? Array.from(
          new Set(
            lifts
              .filter((lift) => lift.type === "imported")
              .map((lift) => lift.brand)
          )
        )
          .filter(Boolean)
          .filter(
            (brand) =>
              brand !== "PropertyLifts" && brand !== "Brother's Lift Technology"
          )
          .map((brand) => ({
            name: brand,
            lifts: lifts.filter((lift) => lift.brand === brand),
          }))
      : [];

  // Debug information for brands
  console.log("Imported brands:", importedBrands);

  const getBrandColor = (brand : string) => {
    const brandColors = {
      KONE: "from-blue-600 to-blue-800",
      SRH: "from-orange-400 to-orange-600",
      MP: "from-green-600 to-green-800",
      "Shanghai Mitsubishi": "from-red-600 to-red-800",
      default: "from-gray-600 to-gray-800",
    };

    return brandColors[brand as keyof typeof brandColors] || brandColors["default"];
  };

  const getLiftTypeColor = (type : string) => {
    const typeColors = {
      passenger: "from-blue-500 to-blue-700",
      cargo: "from-green-500 to-green-700",
      hospital: "from-red-500 to-red-700",
      escalator: "from-purple-500 to-purple-700",
      capsule: "from-orange-500 to-orange-700",
      default: "from-gray-500 to-gray-700",
    };

    return typeColors[type as keyof typeof typeColors] || typeColors["default"];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center moving-bg opacity-40"
          style={{
            backgroundImage: "url('/dummy_background.jpg')",
          }}
        ></div>
        <div className="relative max-w-[1320px] mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">
              Elevator & Lift Solutions
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              From local manufacturing to premium global brands, we offer
              comprehensive vertical transport solutions for every building
              need.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex flex-wrap items-center space-x-2 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-orange-400">
                  Home
                </Link>
              </li>
              <li className="text-gray-400">&gt;</li>
              <li>
                <Link href="/products" className="hover:text-orange-400">
                  Products
                </Link>
              </li>
              <li className="text-gray-400">&gt;</li>
              <li className="text-gray-800 font-medium">Lifts</li>
            </ol>
          </nav>

          {/* Filter Categories */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Browse By Category
            </h2>
            <div className="flex flex-wrap gap-3">
              {liftCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    activeFilter === category.id
                      ? "bg-orange-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {activeFilter === "imported" ? (
            // Imported Lifts by Brand
            <div className="space-y-16">
              {importedBrands.map((brand) => (
                <div key={brand.name}>
                  <h2 className="text-3xl font-bold mb-6 text-gray-800 pb-2 border-b-2 border-orange-500">
                    {brand.name} Lifts
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {brand.lifts.map((lift) => (
                      <Link
                        key={lift.id}
                        href={`/products/lift/${lift.brand
                          .toLowerCase()
                          .replace(/\s+/g, "-")}/${lift.id}`}
                        className="group cursor-pointer"
                      >
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
                          <div
                            className={`h-48 bg-gradient-to-r ${getBrandColor(
                              lift.brand
                            )} relative overflow-hidden`}
                          >
                            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                            <div className="relative z-10 p-6 h-full flex items-center justify-center">
                              <div className="text-center text-white">
                                {/* <h3 className="text-2xl font-bold">
                                  {lift.model}
                                </h3> */}
                                <p className="opacity-90">{lift.brand}</p>
                              </div>
                            </div>
                          </div>
                          <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                            <div className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded mb-3 inline-block">
                              IMPORTED
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-orange-400 transition-colors">
                              {lift.name}
                            </h4>
                            {/* <p className="text-gray-600 text-sm mb-3 flex-grow">
                              {lift.specifications}
                            </p> */}
                            <div className="flex items-center text-orange-400 text-sm font-medium mt-auto">
                              View Details
                              <svg
                                className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Regular Lifts by Type
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {lifts.map((lift) => (
                <Link
                  key={lift.id}
                  href={`/products/lift/${lift.type}/${lift.id}`}
                  className="group cursor-pointer"
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
                    <div
                      className={`h-48 bg-gradient-to-r ${getLiftTypeColor(
                        lift.type
                      )} relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                      <div className="relative z-10 p-6 h-full flex items-center justify-center">
                        <div className="text-center text-white">
                          <h3 className="text-2xl font-bold capitalize">
                            {lift.type} Lift
                          </h3>
                          {lift.brand && (
                            <p className="opacity-90">{lift.brand}</p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                      <div
                        className={`text-white text-xs font-bold px-2 py-1 rounded mb-3 inline-block ${
                          lift.type === "imported"
                            ? "bg-purple-500"
                            : "bg-orange-500"
                        }`}
                      >
                        {lift.type.toUpperCase()}
                      </div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-orange-400 transition-colors">
                        {lift.name}
                      </h4>
                      <p className="text-gray-600 text-sm mb-3 flex-grow">
                        {lift.type === "passenger" && lift.ratedCapacity}
                        {lift.type === "capsule" && lift.observationPlane}
                        {lift.type === "hospital" && lift.capacity}
                        {lift.type === "cargo" && lift.loadCapacity}
                        {lift.type === "escalator" && lift.stepWidth}
                        {lift.type === "imported" && lift.specifications}
                      </p>
                      <div className="flex items-center text-orange-400 text-sm font-medium mt-auto">
                        View Details
                        <svg
                          className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Features Section */}
          <div className="mt-20 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              {siteConfig.name} Excellence
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Quality Assurance
                </h3>
                <p className="text-gray-600">
                  Premium materials and rigorous testing ensure long-lasting
                  performance.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Advanced Technology
                </h3>
                <p className="text-gray-600">
                  Modern control systems and energy-efficient components.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Global Standards
                </h3>
                <p className="text-gray-600">
                  International quality certifications and compliance with
                  safety standards.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Local Support
                </h3>
                <p className="text-gray-600">
                  Comprehensive installation and maintenance services
                  nationwide.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg shadow-lg p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Need Help Choosing the Right Lift?
            </h2>
            <p className="text-xl mb-6 max-w-3xl mx-auto">
              Our experts are ready to assist you in finding the perfect
              vertical transportation solution for your building needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Request a Quote
              </Link>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}