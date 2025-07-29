'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HVACService } from '@/services/hvacService';
import { HVACProduct } from '@/types/otherProducts';

export default function HVACPage() {
    const [hvacProducts, setHvacProducts] = useState<HVACProduct[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchHVAC = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const allHVAC = await HVACService.getAllHVAC();
                setHvacProducts(allHVAC);
            } catch (err) {
                console.error('Error fetching HVAC products:', err);
                setError('Failed to load HVAC products');
            } finally {
                setIsLoading(false);
            }
        };

        fetchHVAC();
    }, []);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-400 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading HVAC products...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Error Loading HVAC Products</h1>
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
            <div className="relative h-96 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
                <div  className="absolute inset-0 bg-cover bg-center moving-bg opacity-40"
                    style={{
                        backgroundImage: "url('/dummy_background.jpg')",
                    }}></div>
                {/* content */}
                <div className="relative max-w-[1320px] mx-auto px-4 h-full flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-bold mb-4">HVAC Systems</h1>

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
                            <li className="text-gray-800 font-medium">HVAC</li>
                        </ol>
                    </nav>

                    {/* HVAC Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {hvacProducts.map((hvac, index) => (
                            <Link
                                key={hvac.itemCode}
                                href={`/product/${hvac.itemCode}`}
                                className="group cursor-pointer"
                            >
                                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                    <div className="aspect-square bg-gray-100 overflow-hidden">
                                        <Image
                                            src="/dummy_rectangular.jfif"
                                            alt={hvac.name}
                                            width={400}
                                            height={400}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-4 md:flex text-center items-center justify-between ">
                                        <div className="text-gray-400 text-4xl font-light mb-2">
                                            {String(index + 1).padStart(2, '0')}
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-800">
                                            {hvac.name}
                                        </h3>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* HVAC Information Section */}
                    <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">About Our HVAC Solutions</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">HVAC Product Range</h3>
                                <div className="space-y-3 text-gray-700">
                                    <p><strong>LG Chillers:</strong> Advanced chiller systems designed for large buildings and facilities with high efficiency two-stage compressors and optimized central control.</p>
                                    <p><strong>VRF Systems:</strong> Variable Refrigerant Flow systems providing precise temperature control and energy efficiency with individual zone management.</p>
                                    <p><strong>Ceiling Cassettes:</strong> Aesthetic ceiling-mounted units with four-way air distribution for uniform cooling and easy maintenance access.</p>
                                </div>

                                <h3 className="text-lg font-semibold text-gray-800 mb-4 mt-6">What is a Chiller Machine?</h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    Chillers are machines that remove heat from a liquid coolant. They can be classified by the way they remove the heat: vapor compression, adsorption refrigeration, or absorption refrigeration. Our chillers are designed to provide efficient cooling for large buildings and facilities.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Features</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start">
                                        <span className="text-blue-400 mr-2">•</span>
                                        High efficiency two-stage compressor technology
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-400 mr-2">•</span>
                                        Variable airflow control for optimal comfort
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-400 mr-2">•</span>
                                        Stable operation with minimal maintenance
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-400 mr-2">•</span>
                                        Advanced ice thermal storage system
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-400 mr-2">•</span>
                                        Optimized central control system
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-400 mr-2">•</span>
                                        Energy efficient design suitable for Bangladesh climate
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-400 mr-2">•</span>
                                        Professional installation and maintenance support
                                    </li>
                                </ul>

                                <h3 className="text-lg font-semibold text-gray-800 mb-4 mt-6">Applications</h3>
                                <ul className="space-y-1 text-gray-700">
                                    <li>• Large commercial buildings</li>
                                    <li>• Industrial facilities</li>
                                    <li>• Office complexes</li>
                                    <li>• Hotels and resorts</li>
                                    <li>• Hospitals and healthcare facilities</li>
                                    <li>• Shopping malls and retail spaces</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
