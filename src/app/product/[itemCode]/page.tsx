'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { LiftService } from '@/services/enhancedLiftService';
import { Product } from '@/types/products';

// Type guards for different product types
const isPassengerLift = (product: Product): product is Product & { type: 'passenger' } => {
    return product.type === 'passenger';
};

const isCapsuleLift = (product: Product): product is Product & { type: 'capsule' } => {
    return product.type === 'capsule';
};

const isHospitalLift = (product: Product): product is Product & { type: 'hospital' } => {
    return product.type === 'hospital';
};

const isCargoLift = (product: Product): product is Product & { type: 'cargo' } => {
    return product.type === 'cargo';
};

const isEscalator = (product: Product): product is Product & { type: 'escalator' } => {
    return product.type === 'escalator';
};

const isImportedLift = (product: Product): product is Product & { type: 'imported' } => {
    return product.type === 'imported';
};

export default function ProductDetailPage() {
    const params = useParams();
    const itemCode = params?.itemCode as string;

    const [product, setProduct] = useState<Product | null>(null);
    const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            if (!itemCode) return;

            try {
                setIsLoading(true);
                setError(null);

                // Use enhanced service to search all product types
                const foundProduct = await LiftService.getProductByItemCode(itemCode);

                if (foundProduct) {
                    setProduct(foundProduct);

                    // Fetch related products of the same type
                    const allProducts = await LiftService.getAllProducts();
                    const related = allProducts
                        .filter(p => p.type === foundProduct.type && p.itemCode !== itemCode)
                        .slice(0, 3);
                    setRelatedProducts(related);
                } else {
                    setError('Product not found');
                }
            } catch (err) {
                console.error('Error fetching product:', err);
                setError('Failed to load product details');
            } finally {
                setIsLoading(false);
            }
        };

        fetchProduct();
    }, [itemCode]);
    const renderSpecifications = () => {
        if (!product) return null;

        if (isPassengerLift(product)) {
            const passengerProduct = product as Product & {
                ratedCapacity?: string;
                floors?: string;
                speed?: string;
                control?: string;
                driveSystem?: string;
                tractionMachine?: string;
                machineRoomSize?: string;
                carEntrances?: string;
                doorOpeningType?: string;
                mainPowerSupply?: string;
                carDimensions?: string;
                pitDepth?: string;
                overhead?: string;
            };

            return (
                <div className="space-y-4">
                    <div className="space-y-3">
                        <p className="text-base"><span className="font-medium">Rated Capacity:</span> {passengerProduct.ratedCapacity || 'N/A'}</p>
                        <p className="text-base"><span className="font-medium">Floors:</span> {passengerProduct.floors || 'N/A'}</p>
                        <p className="text-base"><span className="font-medium">Speed:</span> {passengerProduct.speed || 'N/A'}</p>
                        <p className="text-base"><span className="font-medium">Control:</span> {passengerProduct.control || 'N/A'}</p>
                        <p className="text-base"><span className="font-medium">Drive System:</span> {passengerProduct.driveSystem || 'N/A'}</p>
                        <p className="text-base"><span className="font-medium">Traction Machine:</span> {passengerProduct.tractionMachine || 'N/A'}</p>
                        <p className="text-base"><span className="font-medium">Machine Room Size:</span> {passengerProduct.machineRoomSize || 'N/A'}</p>
                        <p className="text-base"><span className="font-medium">Car Entrances:</span> {passengerProduct.carEntrances || 'N/A'}</p>
                        <p className="text-base"><span className="font-medium">Door Opening Type:</span> {passengerProduct.doorOpeningType || 'N/A'}</p>
                        <p className="text-base"><span className="font-medium">Main Power Supply:</span> {passengerProduct.mainPowerSupply || 'N/A'}</p>
                        <p className="text-base"><span className="font-medium">Car Dimensions:</span> {passengerProduct.carDimensions || 'N/A'}</p>
                        <p className="text-base"><span className="font-medium">Pit Depth:</span> {passengerProduct.pitDepth || 'N/A'}</p>
                        <p className="text-base"><span className="font-medium">Overhead:</span> {passengerProduct.overhead || 'N/A'}</p>
                    </div>
                </div>
            );
        }

        if (isCapsuleLift(product)) {
            const capsuleProduct = product as Product & {
                observationPlane?: string;
                externalDecorationPlate?: string;
                externalDecorationLighting?: string;
                carWall?: string;
                carDoorType?: string;
                carDoorMaterial?: string;
                carCeiling?: string;
                handrail?: string;
                floor?: string;
            };

            return (
                <div className="space-y-4">

                    <div className="">
                        <div className="space-y-3">
                            <p className="text-base"><span className="font-medium">Observation Plane:</span> {capsuleProduct.observationPlane || 'N/A'}</p>
                            <p className="text-base"><span className="font-medium">External Decoration Plate:</span> {capsuleProduct.externalDecorationPlate || 'N/A'}</p>
                            <p className="text-base"><span className="font-medium">External Decoration Lighting:</span> {capsuleProduct.externalDecorationLighting || 'N/A'}</p>
                            <p className="text-base"><span className="font-medium">Car Wall:</span> {capsuleProduct.carWall || 'N/A'}</p>
                            <p className="text-base"><span className="font-medium">Car Door Type:</span> {capsuleProduct.carDoorType || 'N/A'}</p>

                            <p className="text-base"><span className="font-medium">Car Door Material:</span> {capsuleProduct.carDoorMaterial || 'N/A'}</p>
                            <p className="text-base"><span className="font-medium">Car Ceiling:</span> {capsuleProduct.carCeiling || 'N/A'}</p>
                            <p className="text-base"><span className="font-medium">Handrail:</span> {capsuleProduct.handrail || 'N/A'}</p>
                            <p className="text-base"><span className="font-medium">Floor:</span> {capsuleProduct.floor || 'N/A'}</p>
                        </div>
                    </div>
                </div>
            );
        }

        if (isHospitalLift(product)) {
            return (
                <div className="space-y-4">
                    <div className="space-y-3">
                        <p className="text-base"><span className="font-medium">Item Name:</span> {product.name}</p>
                        <p className="text-base"><span className="font-medium">Rated capacity:</span> {product.capacity}</p>
                        <p className="text-base"><span className="font-medium">Persons:</span> {product.hospitalStandards}</p>
                        <p className="text-base"><span className="font-medium">Floors/Stops/Doors:</span> {product.emergencyFeatures}</p>
                        <p className="text-base"><span className="font-medium">Speed:</span> {product.hygieneFeatures}</p>
                        <p className="text-base"><span className="font-medium">Control system:</span> {product.accessibilityFeatures}</p>
                        <p className="text-base"><span className="font-medium">Drive system:</span> {product.powerBackup}</p>
                        <p className="text-base"><span className="font-medium">Traction machine:</span> {product.dimensions}</p>
                        <p className="text-base"><span className="font-medium">Machine room size (mm):</span> {product.certifications}</p>
                        <p className="text-base"><span className="font-medium">Car entrances:</span> Single</p>
                        <p className="text-base"><span className="font-medium">Door opening type:</span> Center opening/ Side opening</p>
                    </div>
                </div>
            );
        }

        if (isCargoLift(product)) {
            return (
                <div className="space-y-4">
                    <div className="space-y-3">
                        <p className="text-base"><span className="font-medium">Item:</span> {product.loadCapacity}</p>
                        <p className="text-base"><span className="font-medium">Car Ceiling:</span> {product.platformSize}</p>
                        <p className="text-base"><span className="font-medium">Car Wall & Car Door:</span> {product.liftingHeight}</p>
                        <p className="text-base"><span className="font-medium">Operational Panel:</span> {product.powerRequirement}</p>
                        <p className="text-base"><span className="font-medium">Car Floor:</span> {product.safetyFeatures}</p>
                        <p className="text-base"><span className="font-medium">Sill:</span> {product.operationType}</p>
                    </div>
                </div>
            );
        }

        if (isEscalator(product)) {
            return (
                <div className="space-y-4">
                    <div className="space-y-3">
                        <p className="text-base"><span className="font-medium">Maximum Rise:</span> Up to 20 meters</p>
                        <p className="text-base"><span className="font-medium">Application:</span> Indoor, Outdoor, 16-hr operation daily</p>
                        <p className="text-base"><span className="font-medium">Rise H:</span> {product.riseHeight}</p>
                        <p className="text-base"><span className="font-medium">Step Width:</span> {product.stepWidth}</p>
                        <p className="text-base"><span className="font-medium">Speed:</span> {product.inclination}</p>
                        <p className="text-base"><span className="font-medium">Main Power:</span> {product.speed}</p>
                        <p className="text-base"><span className="font-medium">Balustrade:</span> {product.capacity}</p>
                        <p className="text-base"><span className="font-medium">Handrail:</span> {product.safetyFeatures}</p>
                        <p className="text-base"><span className="font-medium">Handrail Bracket:</span> {product.construction}</p>
                        <p className="text-base"><span className="font-medium">Inner & Outer Decking:</span> {product.finishing}</p>
                        <p className="text-base"><span className="font-medium">Step:</span> Stainless Steel</p>
                    </div>
                </div>
            );
        }

        if (isImportedLift(product)) {
            return (
                <div className="space-y-4">
                    <div className="space-y-3">
                        <p className="text-base"><span className="font-medium">Manufacturer:</span> {product.manufacturer}</p>
                        <p className="text-base"><span className="font-medium">Model:</span> {product.model}</p>
                        <p className="text-base"><span className="font-medium">Specifications:</span> {product.specifications}</p>
                        <p className="text-base"><span className="font-medium">Features:</span> {product.features}</p>
                        <p className="text-base"><span className="font-medium">Warranty:</span> {product.warranty}</p>
                        <p className="text-base"><span className="font-medium">Installation:</span> {product.installation}</p>
                        <p className="text-base"><span className="font-medium">Maintenance:</span> {product.maintenance}</p>
                        <p className="text-base"><span className="font-medium">Country of Origin:</span> {product.countryOfOrigin}</p>
                    </div>
                </div>
            );
        }

        return null;
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
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
                    <p className="text-gray-600 mb-6">{error || 'The requested product could not be found.'}</p>
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
            <div className="relative h-96 bg-gradient-to-r from-orange-400 to-orange-600 overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="absolute inset-0 bg-[url('/dummy_background.jpg')] bg-cover bg-center moving-bg"></div>
                <div className="relative max-w-[1320px] mx-auto px-4 h-full flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-extrabold mb-4">{product.name}</h1>
                    </div>
                </div>
            </div>
            <div className="max-w-[1320px] mx-auto px-4 py-8">

                <div className="max-w-6xl mx-auto">
                    {/* Breadcrumb */}
                    <nav className="mb-8">
                        <ol className="flex items-center space-x-2 text-sm text-gray-600">
                            <li><Link href="/" className="hover:text-orange-400">Home</Link></li>
                            <li className="text-gray-400">&gt;</li>
                            <li><Link href="/products" className="hover:text-orange-400">Products</Link></li>
                            <li className="text-gray-400">&gt;</li>
                            <li className="text-gray-800 font-medium">{product.name}</li>
                        </ol>
                    </nav>

                    {/* Product Details */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                            {/* Product Image */}
                            <div className="space-y-4">
                                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        width={500}
                                        height={500}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.currentTarget.src = '/images/placeholder-lift.jpg';
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="space-y-6">
                                <div>
                                    <h1 className="text-3xl font-extrabold text-gray-800 mb-2">{product.name}</h1>
                                    <div className="flex items-center mt-4">
                                        {product.description && (
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
                                                <p className="text-gray-600 text-base">{product.description}</p>
                                            </div>
                                        )}
                                    </div>
                                    {renderSpecifications()}

                                </div>


                            </div>
                        </div>
                    </div>

                    {/* Specifications */}

                    {/* Related Products */}
                    {relatedProducts.length > 0 && (
                        <div className="mt-12">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Related Products</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {relatedProducts.map((relatedProduct) => (
                                    <Link
                                        key={relatedProduct.itemCode}
                                        href={`/product/${relatedProduct.itemCode}`}
                                        className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                                    >
                                        <div className="aspect-square bg-gray-100">
                                            <Image
                                                src={relatedProduct.image}
                                                alt={relatedProduct.name}
                                                width={300}
                                                height={300}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    e.currentTarget.src = '/images/placeholder-lift.jpg';
                                                }}
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h4 className="font-semibold text-gray-800 mb-2">{relatedProduct.name}</h4>
                                            <p className="text-sm text-orange-400">{relatedProduct.itemCode}</p>
                                        </div>
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
