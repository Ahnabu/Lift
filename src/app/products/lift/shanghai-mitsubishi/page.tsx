/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { allProducts } from "@/data/allLifts";
import { Product } from "@/types/products";

export default function ShanghaiMitsubishiPage() {
  const [lifts, setLifts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLifts = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Filter Shanghai Mitsubishi lifts from allProducts
        const shanghaiMitsubishiLifts = allProducts.filter(
          (product) =>
            product.type === "imported" &&
            product.brand === "Shanghai Mitsubishi"
        );

        setLifts(shanghaiMitsubishiLifts);
      } catch (err) {
        console.error("Error loading Shanghai Mitsubishi lifts:", err);
        setError("Failed to load Shanghai Mitsubishi lifts");
      } finally {
        setIsLoading(false);
      }
    };

    fetchLifts();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">
            Loading Shanghai Mitsubishi lifts...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Error Loading Shanghai Mitsubishi Lifts
          </h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <Link
            href="/products/lift"
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
          >
            Back to All Lifts
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 flex items-center justify-center bg-gradient-to-br from-red-800 via-red-600 to-red-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center moving-bg opacity-40"
          style={{
            backgroundImage: "url('/dummy_background.jpg')",
          }}
        ></div>
        <div className="relative max-w-[1320px] mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">
              Shanghai Mitsubishi Lifts
            </h1>
            <p className="text-xl text-red-200">
              Premium Japanese-Chinese Engineering
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-red-600">
                  Home
                </Link>
              </li>
              <li className="text-gray-400">&gt;</li>
              <li>
                <Link href="/products" className="hover:text-red-600">
                  Products
                </Link>
              </li>
              <li className="text-gray-400">&gt;</li>
              <li>
                <Link href="/products/lift" className="hover:text-red-600">
                  Lifts
                </Link>
              </li>
              <li className="text-gray-400">&gt;</li>
              <li className="text-gray-800 font-medium">Shanghai Mitsubishi</li>
            </ol>
          </nav>

          {/* Brand Information */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-1/3">
                <div className="bg-red-100 p-4 rounded-lg">
                  <Image
                    src="/dummy_rectangular.jfif"
                    alt="Shanghai Mitsubishi Logo"
                    width={300}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  About Shanghai Mitsubishi
                </h2>
                <p className="text-gray-600 mb-4">
                  Shanghai Mitsubishi Elevator Co., Ltd. is a joint venture
                  between Mitsubishi Electric Corporation and Shanghai
                  Mechanical & Electrical Industry Co., Ltd. Since its
                  establishment in 1987, the company has become one of China&apos;s
                  largest elevator manufacturers, combining Japanese precision
                  engineering with Chinese manufacturing expertise.
                </p>
                <p className="text-gray-600 mb-4">
                  Their premium elevator systems are known for high-speed
                  operation, advanced safety features, and exceptional
                  reliability. Shanghai Mitsubishi elevators are extensively
                  used in high-rise buildings, hotels, shopping malls, and
                  commercial complexes around the world.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-red-50 p-4 rounded-md">
                    <h3 className="font-semibold text-gray-800">Founded</h3>
                    <p className="text-gray-600">1987</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-md">
                    <h3 className="font-semibold text-gray-800">Country</h3>
                    <p className="text-gray-600">China/Japan</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-md">
                    <h3 className="font-semibold text-gray-800">
                      Specialization
                    </h3>
                    <p className="text-gray-600">
                      High-speed & High-rise Elevators
                    </p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-md">
                    <h3 className="font-semibold text-gray-800">Support</h3>
                    <p className="text-gray-600">Global service network</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-red-600">
            Available Models
          </h2>

          {/* Shanghai Mitsubishi Lifts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lifts.length > 0 ? (
              lifts.map((lift, index) => (
                <Link
                  key={lift.itemCode}
                  href={`/products/lift/shanghai-mitsubishi/${lift.id}`}
                  className="group cursor-pointer"
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="aspect-video bg-gradient-to-r from-red-600 to-red-800 relative overflow-hidden">
                      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                      <div className="relative z-10 p-6 h-full flex items-center justify-center">
                        <div className="text-center text-white">
                          <h3 className="text-2xl font-bold">
                            {(lift as any).model || "Premium Model"}
                          </h3>
                          <p className="opacity-90">Shanghai Mitsubishi</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded mb-3 inline-block">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-red-600 transition-colors">
                        {lift.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {(lift as any).specifications ||
                          "Premium elevator solution"}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {(lift as any).features &&
                          (lift as any).features
                            .split(",")
                            .map((feature: string, i: number) => (
                              <span
                                key={i}
                                className="bg-red-50 text-red-600 text-xs px-2 py-1 rounded"
                              >
                                {feature.trim()}
                              </span>
                            ))}
                      </div>
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
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  No Shanghai Mitsubishi Lifts Available
                </h2>
                <p className="text-gray-600">
                  Shanghai Mitsubishi lifts will be available soon. Please check
                  back later or contact us for more information.
                </p>
              </div>
            )}
          </div>

          {/* Benefits Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-red-600">
              Why Choose Shanghai Mitsubishi?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-red-600"
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
                  Featuring the latest in elevator technology including VVVF
                  drives, energy-saving systems, and intelligent control
                  mechanisms.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Superior Safety
                </h3>
                <p className="text-gray-600">
                  Multiple safety systems including emergency brakes, power
                  backup, and advanced monitoring ensure passenger protection.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Reliability
                </h3>
                <p className="text-gray-600">
                  Built to last with minimal downtime and maintenance
                  requirements, ensuring smooth operation for decades.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Energy Efficiency
                </h3>
                <p className="text-gray-600">
                  Eco-friendly designs that reduce power consumption and
                  operational costs while minimizing environmental impact.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-lg shadow-lg p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Interested in Shanghai Mitsubishi Elevators?
            </h2>
            <p className="text-xl mb-6 max-w-3xl mx-auto">
              Contact our specialists today for detailed information, pricing,
              and installation services for Shanghai Mitsubishi elevator
              systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Request a Consultation
              </Link>
              <Link
                href="/products/lift"
                className="border border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-md font-medium transition-colors"
              >
                View All Lifts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}