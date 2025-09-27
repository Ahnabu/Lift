/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { allProducts } from "@/data/allLifts";
import { siteConfig } from "@/config/site";

export default function SunnyLiftPage() {
  const [lifts, setLifts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Filter Sunny lifts
    const sunnyLifts = allProducts.filter((lift) => lift.brand === "Sunny");
    setLifts(sunnyLifts);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading Sunny lifts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 flex items-center justify-center   text-white overflow-hidden">
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
            <h1 className="text-5xl font-bold mb-4">Sunny</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Affordable reliability meets practical functionality. Sunny lifts
              offer cost-effective elevator solutions without compromising on
              safety and essential features for everyday use.
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
              <li>
                <Link href="/products/lift" className="hover:text-orange-400">
                  Lifts
                </Link>
              </li>
              <li className="text-gray-400">&gt;</li>
              <li className="text-gray-800 font-medium">Sunny</li>
            </ol>
          </nav>

          {/* Brand Overview */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Sunny - Economic Excellence
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Sunny elevators are designed for budget-conscious projects
                  that still require reliable vertical transportation. Featuring
                  microprocessor controls, VVVF AC motors, and essential safety
                  features, Sunny lifts provide dependable service for
                  residential buildings, small offices, and light industrial
                  applications at competitive prices.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-yellow-50 p-4 rounded">
                    <h4 className="font-semibold text-yellow-800 mb-2">
                      Capacity Range
                    </h4>
                    <p className="text-yellow-600">400kg - 3000kg</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded">
                    <h4 className="font-semibold text-orange-800 mb-2">
                      Speed Range
                    </h4>
                    <p className="text-orange-600">0.25 - 2.0 m/s</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded">
                    <h4 className="font-semibold text-green-800 mb-2">
                      Floor Range
                    </h4>
                    <p className="text-green-600">2 - 20 Floors</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded">
                    <h4 className="font-semibold text-blue-800 mb-2">
                      Best For
                    </h4>
                    <p className="text-blue-600">Budget Projects</p>
                  </div>
                </div>
              </div>
              <div className="relative h-80 bg-gradient-to-br from-yellow-100 to-orange-200 rounded-lg overflow-hidden">
                <Image
                  src="/dummy_rectangular.jfif"
                  alt="Sunny Economic Elevators"
                  fill
                  className="object-cover"
                />
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
                  <div className="h-48 bg-gradient-to-r from-yellow-500 to-orange-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                    <Image
                      src={lift.image}
                      alt={lift.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white text-yellow-600 text-xs font-bold px-3 py-1 rounded-full">
                        {lift.type.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                    <div className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded mb-3 inline-block w-fit">
                      SUNNY
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors">
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
                    <div className="flex items-center text-yellow-600 text-sm font-medium mt-auto">
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
              Why Choose Sunny Lifts?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Cost Effective
                </h3>
                <p className="text-gray-600 text-sm">
                  Budget-friendly solutions without compromising essential
                  safety features
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Reliable Performance
                </h3>
                <p className="text-gray-600 text-sm">
                  Proven VVVF AC motor technology for consistent and dependable
                  operation
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
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Easy Maintenance
                </h3>
                <p className="text-gray-600 text-sm">
                  Simple control systems and standard components for easy
                  servicing
                </p>
              </div>
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
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Versatile Applications
                </h3>
                <p className="text-gray-600 text-sm">
                  Suitable for residential, light commercial, and small
                  industrial buildings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
