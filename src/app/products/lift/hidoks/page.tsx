/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { allProducts } from "@/data/allLifts";
import { LiftImageGallery } from "@/components/LiftImageGallery";
import { ContactInfoSection } from "@/components/ContactInfoSection";
import { siteConfig } from "@/config/site";

export default function HidoksLiftPage() {
  const [lifts, setLifts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Hidoks lift images
  const hidoksLiftImages = [
    {
      id: "hidoks-1",
      url: "https://res.cloudinary.com/brotherslift/image/upload/v1759002409/Hidoks.jpg",
      title: "Hidoks Passenger Lift Premium",
      description:
        "Premium Turkish engineering with microprocessor VVVF control",
    },
    {
      id: "hidoks-2",
      url: "https://cdn.bdstall.com/product-image/giant_266202.jpg",
      title: "Hidoks Hospital Lift Medical",
      description:
        "EN 81-70 compliant medical lifts with antibacterial surfaces",
    },
    {
      id: "hidoks-3",
      url: "https://cdn.bdstall.com/product-image/giant_266203.jpg",
      title: "Hidoks Turkish Engineering",
      description: "Advanced gearless permanent magnet motor technology",
    },
  ];

  useEffect(() => {
    // Filter Hidoks lifts
    const hidoksLifts = allProducts.filter((lift) => lift.brand === "Hidoks");
    setLifts(hidoksLifts);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-400 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading Hidoks lifts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center moving-bg "
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/brotherslift/image/upload/v1758993190/IMG-20250927-WA0008_ldjlim.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-[1320px] mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Hidoks - Turkey</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Premium Turkish engineering excellence in vertical transportation.
              Hidoks lifts combine European quality standards with innovative
              technology for superior performance and reliability.
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

              <li className="text-gray-800 font-medium">Hidoks - Turkey</li>
            </ol>
          </nav>

          {/* Brand Overview */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Hidoks - Turkish Excellence
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Hidoks represents the pinnacle of Turkish elevator
                  engineering, bringing European quality standards and
                  innovative design to Bangladesh. Our lifts feature advanced
                  gearless permanent magnet motors, machine-room-less
                  technology, and comprehensive safety systems that meet
                  international standards including EN 81-70.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-red-50 p-4 rounded">
                    <h4 className="font-semibold text-red-800 mb-2">
                      Capacity Range
                    </h4>
                    <p className="text-red-600">400kg - 2000kg</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded">
                    <h4 className="font-semibold text-green-800 mb-2">
                      Speed Range
                    </h4>
                    <p className="text-green-600">1.0 - 3.0 m/s</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded">
                    <h4 className="font-semibold text-purple-800 mb-2">
                      Floor Range
                    </h4>
                    <p className="text-purple-600">2 - 40 Floors</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded">
                    <h4 className="font-semibold text-orange-800 mb-2">
                      Certification
                    </h4>
                    <p className="text-orange-600">CE Marked, EN 81-70</p>
                  </div>
                </div>
              </div>
              <div>
                <LiftImageGallery images={hidoksLiftImages} brand="Hidoks" />
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
                  <div className="h-48 bg-gradient-to-r from-red-500 to-red-700 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                    <Image
                      src={lift.image}
                      alt={lift.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white text-red-600 text-xs font-bold px-3 py-1 rounded-full">
                        {lift.type.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                    <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded mb-3 inline-block w-fit">
                      HIDOKS
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-red-600 transition-colors">
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
                    <div className="flex items-center text-red-600 text-sm font-medium mt-auto">
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
              Why Choose Hidoks Lifts?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.25-4.5L12 2.25l-5.25 3L12 8.25l5.25-3z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  European Standards
                </h3>
                <p className="text-gray-600 text-sm">
                  CE marked and EN 81-70 compliant for hospital and medical
                  applications
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
                  Gearless Technology
                </h3>
                <p className="text-gray-600 text-sm">
                  Permanent magnet gearless motors for smooth, quiet, and
                  efficient operation
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
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Machine Room-less
                </h3>
                <p className="text-gray-600 text-sm">
                  Space-saving machine room-less design with compact
                  installation
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
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Medical Grade
                </h3>
                <p className="text-gray-600 text-sm">
                  Specialized hospital lifts with antibacterial surfaces and
                  accessibility features
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <ContactInfoSection brand="Hidoks" brandColor="red" />
        </div>
      </div>
    </div>
  );
}
