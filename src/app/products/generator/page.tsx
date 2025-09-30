"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { GeneratorService } from "@/services/generatorService";
import { GeneratorProduct } from "@/types/otherProducts";

export default function GeneratorPage() {
  const [generators, setGenerators] = useState<GeneratorProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGenerators = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const allGenerators = await GeneratorService.getAllGenerators();
        setGenerators(allGenerators);
      } catch (err) {
        console.error("Error fetching generators:", err);
        setError("Failed to load generators");
      } finally {
        setIsLoading(false);
      }
    };

    fetchGenerators();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-400 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading generators...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Error Loading Generators
          </h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <Link
            href="/products"
            className="bg-orange-400 text-white px-6 py-3 rounded-lg hover:bg-orange-500 transition-colors"
          >
            Back to Products
          </Link>
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
            <h1 className="text-5xl font-bold mb-4">Generators</h1>
          </div>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
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
              <li className="text-gray-800 font-medium">Generator</li>
            </ol>
          </nav>

          {/* Generators Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {generators.map((generator, index) => (
              <Link
                key={generator.itemCode}
                href={`/product/${generator.itemCode}`}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-square bg-gray-100 overflow-hidden">
                    <Image
                      src={generator.image}
                      alt={generator.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 md:flex text-center items-center justify-between ">
                    <div className="text-gray-400 text-4xl font-light mb-2">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {generator.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Generator Information Section */}
          <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              About Our Generators
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Generator Types
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>VISA Generators:</strong> Italian engineering
                    excellence with reliable power output and efficient
                    operation.
                  </p>
                  <p>
                    <strong>Teksan Generators:</strong> Turkish premium
                    generator series with advanced technology and robust
                    construction.
                  </p>
                  <p>
                    <strong>VOLCANO Generators:</strong> Heavy-duty generators
                    designed for continuous operation and high reliability.
                  </p>
                  <p>
                    <strong>Powerlink Generators:</strong> UK engineered
                    generators with modern control systems and fuel-efficient
                    operation.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Key Features
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    Premium engine brands: Perkins, Cummins, Deutz, Volvo, FPT
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    Stamford alternators for reliable power generation
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    Advanced control systems: Deepsea, ComAp, SmartGen
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    Automatic Transfer Switch (ATS) compatibility
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    Weather-proof and soundproof enclosures
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    50Hz frequency standard for Bangladesh market
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
