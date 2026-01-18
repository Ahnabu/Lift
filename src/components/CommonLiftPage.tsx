/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { allProducts, brandImages, BrandImageGallery } from "@/data/allLifts";
import { LiftImageGallery } from "@/components/LiftImageGallery";
import { ContactInfoSection } from "@/components/ContactInfoSection";

interface BrandConfig {
  name: string;
  displayName: string;
  heroImage: string;
  description: string;
  brandColor: "blue" | "red" | "orange" | "green" | "yellow" | "purple";
  features: {
    label: string;
    value: string;
  }[];
  whyChoose: {
    icon: string;
    title: string;
    description: string;
  }[];
}

interface CommonLiftPageProps {
  brandConfig: BrandConfig;
}

export default function CommonLiftPage({ brandConfig }: CommonLiftPageProps) {
  const [lifts, setLifts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Get brand images from the centralized configuration
  const brandLiftImages: BrandImageGallery[] =
    brandImages[brandConfig.name] || [];

  useEffect(() => {
    // Filter lifts by brand
    const filteredLifts = allProducts.filter(
      (lift) => lift.brand === brandConfig.name
    );
    setLifts(filteredLifts);
    setIsLoading(false);
  }, [brandConfig.name]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div
            className={`animate-spin rounded-full h-12 w-12 border-b-2 border-${brandConfig.brandColor}-400 mx-auto`}
          ></div>
          <p className="mt-4 text-gray-600">
            Loading {brandConfig.displayName} lifts...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center moving-bg"
          style={{
            backgroundImage: `url('${brandConfig.heroImage}')`,
          }}
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-[1320px] mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">
              {brandConfig.displayName}
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              {brandConfig.description}
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
              <li className="text-gray-800 font-medium">
                {brandConfig.displayName}
              </li>
            </ol>
          </nav>

          {/* Brand Overview */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  {brandConfig.displayName} - Excellence in Vertical
                  Transportation
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {brandConfig.description}
                </p>

                {brandConfig.features.length > 0 && (
                  <div className="grid grid-cols-2 gap-4 text-sm mb-8">
                    {brandConfig.features.map((feature, index) => (
                      <div key={index}>
                        <span className="font-semibold text-gray-700">
                          {feature.label}:
                        </span>
                        <br />
                        <span className="text-gray-600">{feature.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                <ContactInfoSection
                  brand={brandConfig.displayName}
                  brandColor={brandConfig.brandColor}
                />
              </div>
              <div>
                <LiftImageGallery
                  images={brandLiftImages}
                  brand={brandConfig.displayName}
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
                  <div className="aspect-[4/3] bg-gray-100 overflow-hidden relative">
                    <Image
                      src={lift.image}
                      alt={lift.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`text-xs font-semibold px-2 py-1 bg-${brandConfig.brandColor}-100 text-${brandConfig.brandColor}-800 rounded-full`}
                      >
                        {lift.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        {lift.itemCode}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-orange-500 transition-colors">
                      {lift.name}
                    </h3>
                    <div className="space-y-1 text-sm text-gray-600">
                      {lift.type === "passenger" && (
                        <>
                          <p>
                            <span className="font-medium">Capacity:</span>{" "}
                            {lift.ratedCapacity}
                          </p>
                          <p>
                            <span className="font-medium">Speed:</span>{" "}
                            {lift.speed}
                          </p>
                          <p>
                            <span className="font-medium">Floors:</span>{" "}
                            {lift.floors}
                          </p>
                        </>
                      )}
                      {lift.type === "cargo" && (
                        <>
                          <p>
                            <span className="font-medium">Load:</span>{" "}
                            {lift.loadCapacity}
                          </p>
                          <p>
                            <span className="font-medium">Platform:</span>{" "}
                            {lift.platformSize}
                          </p>
                          <p>
                            <span className="font-medium">Height:</span>{" "}
                            {lift.liftingHeight}
                          </p>
                        </>
                      )}
                      {lift.type === "hospital" && (
                        <>
                          <p>
                            <span className="font-medium">Capacity:</span>{" "}
                            {lift.capacity}
                          </p>
                          <p>
                            <span className="font-medium">Standards:</span>{" "}
                            {lift.hospitalStandards}
                          </p>
                          <p>
                            <span className="font-medium">Features:</span>{" "}
                            Medical Grade
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Features Section */}
          {brandConfig.whyChoose.length > 0 && (
            <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Why Choose {brandConfig.displayName}?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {brandConfig.whyChoose.map((feature, index) => (
                  <div key={index} className="text-center">
                    <div
                      className={`w-16 h-16 bg-${brandConfig.brandColor}-100 rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <div
                        className={`text-${brandConfig.brandColor}-600 text-2xl`}
                      >
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
