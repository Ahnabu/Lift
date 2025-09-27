/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { allProducts } from "@/data/allLifts";
import { LiftImageGallery } from "@/components/LiftImageGallery";
import { ContactInfoSection } from "@/components/ContactInfoSection";
import { siteConfig } from "@/config/site";

export default function BLTLiftPage() {
  const [lifts, setLifts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // BLT lift images
  const bltLiftImages = [
    {
      id: "blt-1",
      url: "https://res.cloudinary.com/brotherslift/image/upload/v1758993189/IMG-20250927-WA0007_qub413.jpg",
      title: "BLT Passenger Lift Standard",
      description:
        "Premium passenger elevator with VVVF control and gearless traction machine",
    },
    {
      id: "blt-2",
      url: "https://cdn.bdstall.com/product-image/giant_266200.jpg",
      title: "BLT Lift Control System",
      description:
        "Advanced VVVF frequency control with permanent magnet synchronous motor",
    },
    {
      id: "blt-3",
      url: "https://cdn.bdstall.com/product-image/giant_266201.jpg",
      title: "BLT Cargo Lift Heavy Duty",
      description:
        "Industrial cargo lift with reinforced platform for warehouse applications",
    },
    {
      id: "blt-4",
      url: "https://res.cloudinary.com/brotherslift/image/upload/v1758993190/IMG-20250927-WA0008_ldjlim.jpg",
      title: "BLT Professional Installation",
      description:
        "Professional installation services with certified technicians",
    },
  ];

  useEffect(() => {
    // Filter BLT lifts
    const bltLifts = allProducts.filter(
      (lift) => lift.brand === "Brother's Lift Technology"
    );
    setLifts(bltLifts);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-400 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading BLT lifts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 flex items-center justify-center  text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center moving-bg "
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/brotherslift/image/upload/v1758993190/IMG-20250927-WA0008_ldjlim.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-[1320px] mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">BLT Lift Technology</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Brother&apos;s Lift Technology - Premium quality lifts designed
              and manufactured with cutting-edge technology for superior
              performance and reliability.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
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
              <li className="text-gray-800 font-medium">BLT Lift</li>
            </ol>
          </nav>

          {/* Brand Overview */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Brother&apos;s Lift Technology
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  As a leading manufacturer in Bangladesh, BLT combines local
                  expertise with international standards to deliver premium lift
                  solutions. Our lifts feature advanced VVVF control systems,
                  gearless traction machines, and energy-efficient designs
                  suitable for both residential and commercial applications.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-blue-50 p-4 rounded">
                    <h4 className="font-semibold text-blue-800 mb-2">
                      Capacity Range
                    </h4>
                    <p className="text-blue-600">630kg - 5000kg</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded">
                    <h4 className="font-semibold text-green-800 mb-2">
                      Speed Range
                    </h4>
                    <p className="text-green-600">0.25 - 2.5 m/s</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded">
                    <h4 className="font-semibold text-purple-800 mb-2">
                      Floor Range
                    </h4>
                    <p className="text-purple-600">2 - 20 Floors</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded">
                    <h4 className="font-semibold text-orange-800 mb-2">
                      Applications
                    </h4>
                    <p className="text-orange-600">Residential & Commercial</p>
                  </div>
                </div>
              </div>
              <div>
                <LiftImageGallery images={bltLiftImages} brand="BLT Lift" />
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Our Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lifts.map((lift) => (
              <Link
                key={lift.id}
                href={`/product/${lift.itemCode}`}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-700 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                    <Image
                      src={lift.image}
                      alt={lift.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white text-blue-600 text-xs font-bold px-3 py-1 rounded-full">
                        {lift.type.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                    <div className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded mb-3 inline-block w-fit">
                      BLT
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {lift.name}
                    </h4>
                    <p className="text-gray-600 text-sm mb-3 flex-grow">
                      {lift.type === "passenger" &&
                        "ratedCapacity" in lift &&
                        lift.ratedCapacity}
                      {lift.type === "hospital" &&
                        "capacity" in lift &&
                        lift.capacity}
                      {lift.type === "cargo" &&
                        "loadCapacity" in lift &&
                        lift.loadCapacity}
                    </p>
                    <div className="flex items-center text-blue-600 text-sm font-medium mt-auto">
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

          {/* Features Section */}
          <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Why Choose BLT Lifts?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-blue-600"
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
                <p className="text-gray-600 text-sm">
                  Rigorous testing and quality control at every manufacturing
                  stage
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-green-600"
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
                  Energy Efficient
                </h3>
                <p className="text-gray-600 text-sm">
                  VVVF drives with regenerative capabilities for optimal power
                  consumption
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Advanced Control
                </h3>
                <p className="text-gray-600 text-sm">
                  State-of-the-art microprocessor control systems for smooth
                  operation
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
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
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM12 18a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V18.75A.75.75 0 0112 18z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Local Support
                </h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive after-sales service and maintenance support in
                  Bangladesh
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <ContactInfoSection brand="BLT Lift" brandColor="blue" />
        </div>
      </div>
    </div>
  );
}
