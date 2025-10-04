/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { LiftService } from "@/services/enhancedLiftService";
import { GeneratorService } from "@/services/generatorService";
import { brandImages } from "@/data/allLifts";

import { Product } from "@/types/products";
import { ForkliftProduct } from "@/types/forklift";
import {
  GeneratorProduct,
  HVACProduct,
  StreetLightProduct,
  SolarProduct,
} from "@/types/otherProducts";

import ForkliftDetails from "@/components/product-details/ForkliftDetails";
import GeneratorDetails from "@/components/product-details/GeneratorDetails";
import HVACDetails, {
  HVACAdditionalInfo,
} from "@/components/product-details/HVACDetails";
import StreetLightDetails, {
  StreetLightAdditionalInfo,
} from "@/components/product-details/StreetLightDetails";
import SolarDetails from "@/components/product-details/SolarDetails";
import PassengerLiftDetails from "@/components/product-details/PassengerLiftDetails";
import CapsuleLiftDetails from "@/components/product-details/CapsuleLiftDetails";
import HospitalLiftDetails from "@/components/product-details/HospitalLiftDetails";
import CargoLiftDetails from "@/components/product-details/CargoLiftDetails";
import EscalatorDetails from "@/components/product-details/EscalatorDetails";
import ImportedLiftDetails from "@/components/product-details/ImportedLiftDetails";

type AllProductTypes =
  | Product
  | ForkliftProduct
  | GeneratorProduct
  | HVACProduct
  | StreetLightProduct
  | SolarProduct;

export default function ProductDetailClient({
  itemCode,
}: {
  itemCode: string;
}) {
  const [product, setProduct] = useState<AllProductTypes | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<AllProductTypes[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [gallery, setGallery] = useState<string[]>([]);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!itemCode) return;

      try {
        setIsLoading(true);
        setError(null);

        // First try to find in lift products
        const foundLiftProduct = await LiftService.getProductByItemCode(
          itemCode
        );
        if (foundLiftProduct) {
          setProduct(foundLiftProduct);
          // try load gallery images for the brand
          const brand = (foundLiftProduct as Product).brand || "";
          const galleryImages = getImagesForBrand(brand);
          setGallery(galleryImages);
          setActiveImage(galleryImages[0] || foundLiftProduct.image || "/dummy_rectangular.jfif");
          const allLiftProducts = await LiftService.getAllProducts();
          const related = allLiftProducts
            .filter(
              (p: Product) =>
                p.type === foundLiftProduct.type && p.itemCode !== itemCode
            )
            .slice(0, 3);
          setRelatedProducts(related);
          return;
        }

       

        // Generators
        const foundGenerator = await GeneratorService.getGeneratorByItemCode(
          itemCode
        );
        if (foundGenerator) {
          setProduct(foundGenerator);
          const brand = (foundGenerator as GeneratorProduct).brand || "";
          const galleryImages = getImagesForBrand(brand);
          setGallery(galleryImages);
          setActiveImage(galleryImages[0] || foundGenerator.image || "/dummy_rectangular.jfif");
          const related = await GeneratorService.getRelatedGenerators(
            itemCode,
            3
          );
          setRelatedProducts(related);
          return;
        }

        setError("Product not found");
      } catch (e) {
        console.error(e);
        setError("Failed to load product details");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [itemCode]);

  useEffect(() => {
    // ensure activeImage fallback when product changes
    if (!product) return;
    if (!activeImage) {
      const prod = product as
        | Product
        | ForkliftProduct
        | GeneratorProduct
        | HVACProduct
        | StreetLightProduct
        | SolarProduct;
      const brand = prod.brand || "";
      const galleryImages = getImagesForBrand(brand);
      setGallery(galleryImages);
      const prodImage = (prod as { image?: string }).image;
      setActiveImage(
        galleryImages[0] ||
          prodImage ||
          "https://res.cloudinary.com/brotherslift/image/upload/v1759002409/Hidoks.jpg"
      );
    }
  }, [product, activeImage]);

  const renderSpecifications = () => {
    if (!product) return null;

    if ("forkliftType" in product) return <ForkliftDetails product={product} />;
    if ("origin" in product) return <GeneratorDetails product={product} />;
    if ("coolingCapacity" in product || "efficiency" in product)
      return <HVACDetails product={product} showAdditionalInfo={false} />;
    if ("energySaving" in product || "mainFeatures" in product)
      return (
        <StreetLightDetails product={product} showAdditionalInfo={false} />
      );
    if ("benefits" in product || "services" in product)
      return <SolarDetails product={product} />;

    const liftProduct = product as Product;
    switch (liftProduct.type) {
      case "passenger":
        return (
          <PassengerLiftDetails
            product={liftProduct as Product & { type: "passenger" }}
          />
        );
      case "capsule":
        return (
          <CapsuleLiftDetails
            product={liftProduct as Product & { type: "capsule" }}
          />
        );
      case "hospital":
        return (
          <HospitalLiftDetails
            product={liftProduct as Product & { type: "hospital" }}
          />
        );
      case "cargo":
        return (
          <CargoLiftDetails
            product={liftProduct as Product & { type: "cargo" }}
          />
        );
      case "escalator":
        return (
          <EscalatorDetails
            product={liftProduct as Product & { type: "escalator" }}
          />
        );
      case "imported":
        return (
          <ImportedLiftDetails
            product={liftProduct as Product & { type: "imported" }}
          />
        );
      default:
        return null;
    }
  };

  const getImagesForBrand = (brandName?: string) => {
    if (!brandName) return [];
    // brandImages keys may be e.g. "Brother's Lift Technology" or simple brand names
    type BrandImage = { url: string };
    const imagesMap = brandImages as Record<string, BrandImage[]>;
    const direct = imagesMap[brandName];
    if (direct && direct.length > 0) {
      return direct.map((i) => i.url);
    }
    // try normalized match
    const normalized = brandName.toLowerCase().replace(/[^a-z0-9]/g, "").trim();
    for (const key of Object.keys(imagesMap)) {
      const k = key.toLowerCase().replace(/[^a-z0-9]/g, "").trim();
      if (k === normalized) {
        const imgs = imagesMap[key];
        if (imgs && imgs.length > 0) return imgs.map((i) => i.url);
      }
    }
    // fallback set of useful lift images (public CDN)
    return [
      "https://res.cloudinary.com/brotherslift/image/upload/v1758993189/IMG-20250927-WA0007_qub413.jpg",
      "https://res.cloudinary.com/brotherslift/image/upload/v1758993190/IMG-20250927-WA0008_ldjlim.jpg",
      "https://res.cloudinary.com/brotherslift/image/upload/v1759002409/Hidoks.jpg",
    ];
  };

  const renderLiftSpecs = (p: Product) => {
    const rows: { label: string; value?: Product[keyof Product] | any }[] = [];
    // allow keys that may not be declared on Product (some lift fields live outside the base Product type)
    const push = (label: string, key?: keyof Product | string) => {
      // use an any cast to safely index dynamic keys without TypeScript errors
      const v = key ? (p as any)[key as any] : undefined;
      if (v !== undefined) {
        if (typeof v === "string") {
          if (v !== "?" && v !== "") rows.push({ label, value: v });
        } else {
          rows.push({ label, value: v });
        }
      }
    };

    push("Rated Capacity", "ratedCapacity");
    push("Rated Speed", "speed");
    push("Floors", "floors");
    push("Control", "control");
    push("Drive System", "driveSystem");
    push("Traction Machine", "tractionMachine");
    push("Machine Room", "machineRoomSize");
    push("Car Entrances", "carEntrances");
    push("Door Type", "doorOpeningType");
    push("Main Power", "mainPowerSupply");
    push("Car Dimensions", "carDimensions");
    push("Pit Depth", "pitDepth");
    push("Overhead", "overhead");
    push("Load Capacity", "loadCapacity");
    push("Platform Size", "platformSize");
    push("Lifting Height", "liftingHeight");
    push("Hospital Capacity", "capacity");
    push("Certifications", "certifications");

    if (rows.length === 0) return null;

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
        {rows.map((r, idx) => (
          <div key={idx} className="flex items-start space-x-3">
            <div className="text-sm text-gray-500 w-36">{r.label}</div>
            <div className="text-sm text-gray-800 font-medium">{r.value}</div>
          </div>
        ))}
      </div>
    );
  };

  const renderAdditionalInfo = () => {
    if (!product) return null;
    if ("coolingCapacity" in product || "efficiency" in product)
      return <HVACAdditionalInfo product={product} />;
    if ("energySaving" in product || "mainFeatures" in product)
      return <StreetLightAdditionalInfo product={product} />;
    return null;
  };

  const getProductName = () => {
    if (!product) return "";
    if ("forkliftType" in product) return product.model || product.name;
    return product.name;
  };

  const getProductImage = () => product?.image || "/dummy_rectangular.jfif";
  const getProductDescription = () => {
    if (!product) return "";
    if ("forkliftType" in product) {
      return `${product.brand} ${product.model} - ${product.forkliftType} forklift with ${product.loadCapacity} capacity`;
    }
    return product.description || "";
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-400 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            {error || "The requested product could not be found."}
          </p>
          <Link
            href="/products"
            className="bg-orange-400 text-white px-6 py-3 rounded-lg hover:bg-orange-500 transition-colors"
          >
            Browse All Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-96 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
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
            <h1 className="text-5xl font-bold mb-4">{getProductName()}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
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
              {"forkliftType" in product ? (
                <li>
                  <Link
                    href="/products/forklift"
                    className="hover:text-orange-400"
                  >
                    Forklifts
                  </Link>
                </li>
              ) : (
                <li>
                  <Link href="/products/lift" className="hover:text-orange-400">
                    Lifts
                  </Link>
                </li>
              )}
              <li className="text-gray-400">&gt;</li>
              <li className="text-gray-800 font-medium">{getProductName()}</li>
            </ol>
          </nav>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              <div className="space-y-4">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden relative">
                  <Image
                    src={activeImage || getProductImage()}
                    alt={getProductName()}
                    width={700}
                    height={700}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        "/dummy_rectangular.jfif";
                    }}
                  />
                  <div className="absolute top-3 right-3 bg-black/40 text-white text-xs px-2 py-1 rounded">
                    {product?.brand}
                  </div>
                </div>

                {/* Thumbnails / gallery */}
                <div className="flex items-center gap-3 overflow-x-auto">
                  {gallery && gallery.length > 0 ? (
                    gallery.map((g, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImage(g)}
                        className={`w-20 h-20 rounded-md overflow-hidden border ${
                          activeImage === g ? "ring-2 ring-orange-400" : "border-gray-200"
                        }`}
                        aria-label={`Show image ${i + 1}`}
                      >
                        <Image
                          src={g}
                          alt={`${getProductName()} image ${i + 1}`}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src = "/dummy_rectangular.jfif";
                          }}
                        />
                      </button>
                    ))
                  ) : (
                    <div className="text-sm text-gray-500">No images available</div>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">
                    {getProductName()}
                  </h1>
                  <p>
                    <span className="font-bold">Category :</span>{" "}
                    {product.type
                      .split("-")
                      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                      .join(" ")}
                  </p>
                  <hr className="my-4 border-gray-300 border-[1px]" />
                  <div className="flex items-center mt-4">
                    {getProductDescription() && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          Description
                        </h3>
                        <p className="text-gray-600 text-base">
                          {getProductDescription()}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* If this is a lift product render a compact spec grid, otherwise use existing detailed spec components */}
                {product && "type" in product && [
                  "passenger",
                  "capsule",
                  "hospital",
                  "cargo",
                  "escalator",
                  "imported",
                ].includes((product as Product).type) ? (
                  <div>
                    {renderLiftSpecs(product as Product)}
                    {/* keep the detailed spec components below for deeper info */}
                    <div className="mt-6">{renderSpecifications()}</div>
                  </div>
                ) : (
                  renderSpecifications() && <div>{renderSpecifications()}</div>
                )}
              </div>
            </div>
          </div>

          {renderAdditionalInfo() && (
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              {renderAdditionalInfo()}
            </div>
          )}

          {relatedProducts.length > 0 && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Related Products
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((relatedProduct, index) => (
                  <Link
                    key={index}
                    href={`/product/${relatedProduct.itemCode}`}
                    className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="aspect-square bg-gray-200 rounded-lg mb-3 overflow-hidden">
                      <Image
                        src={relatedProduct.image}
                        alt={
                          "forkliftType" in relatedProduct
                            ? relatedProduct.model
                            : relatedProduct.name
                        }
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src =
                            "/dummy_rectangular.jfif";
                        }}
                      />
                    </div>
                    <h3 className="font-semibold text-gray-800 text-sm">
                      {"forkliftType" in relatedProduct
                        ? relatedProduct.model
                        : relatedProduct.name}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
