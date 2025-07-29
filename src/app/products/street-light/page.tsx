'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { StreetLightService } from '@/services/streetLightService';
import { StreetLightProduct } from '@/types/otherProducts';

export default function StreetLightPage() {
    const [streetLights, setStreetLights] = useState<StreetLightProduct[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchStreetLights = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const allStreetLights = await StreetLightService.getAllStreetLights();
                setStreetLights(allStreetLights);
            } catch (err) {
                console.error('Error fetching street lights:', err);
                setError('Failed to load street lights');
            } finally {
                setIsLoading(false);
            }
        };

        fetchStreetLights();
    }, []);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-400 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading street lights...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Error Loading Street Lights</h1>
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
            <div className="relative h-96 bg-gradient-to-r from-yellow-500 to-yellow-700 overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="absolute inset-0 bg-[url('/dummy_background.jpg')] bg-cover bg-center moving-bg"></div>
                <div className="relative max-w-[1320px] mx-auto px-4 h-full flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-bold mb-4">Street Lights</h1>
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
                            <li className="text-gray-800 font-medium">Street Light</li>
                        </ol>
                    </nav>

                    {/* Street Lights Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {streetLights.map((light, index) => (
                            <Link
                                key={light.itemCode}
                                href={`/product/${light.itemCode}`}
                                className="group cursor-pointer"
                            >
                                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                    <div className="aspect-square bg-gray-100 overflow-hidden">
                                        <Image
                                            src="/dummy_rectangular.jfif"
                                            alt={light.name}
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
                                            {light.name}
                                        </h3>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Street Light Information Section */}
                    <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">About Our LED Street Lights</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Street Light Types</h3>
                                <div className="space-y-3 text-gray-700">
                                    <p><strong>LED Street Lights:</strong> Advanced LED technology with 70% energy saving, up to 100,000 hours lifetime, and luminous efficiency up to 170 lm/w.</p>
                                    <p><strong>Solar Street Lights:</strong> Eco-friendly solar-powered lighting with integrated battery systems and intelligent control for zero electricity cost.</p>
                                    <p><strong>LED Flood Lights:</strong> High-power LED flood lighting for large area illumination and security applications with adjustable mounting brackets.</p>
                                </div>

                                <h3 className="text-lg font-semibold text-gray-800 mb-4 mt-6">Installation Benefits</h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    The installation of LED street lights has revolutionized street lighting, providing uniform, high-quality lighting for roads and walkways. LED technology offers longer lifespans, better weather resistance, and environmental benefits compared to traditional lighting.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Features</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start">
                                        <span className="text-yellow-500 mr-2">•</span>
                                        70% energy saving with short ROI period
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-yellow-500 mr-2">•</span>
                                        Up to 100,000 hours @ L70, low maintenance cost
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-yellow-500 mr-2">•</span>
                                        World class quality components (LED, Driver, etc.)
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-yellow-500 mr-2">•</span>
                                        Horizontal and vertical mounting support
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-yellow-500 mr-2">•</span>
                                        Tool-free opening for easy maintenance
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-yellow-500 mr-2">•</span>
                                        Luminous efficiency up to 170 lm/w
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-yellow-500 mr-2">•</span>
                                        Impact resistance IK10, Protection IP66
                                    </li>
                                </ul>

                                <h3 className="text-lg font-semibold text-gray-800 mb-4 mt-6">Best LED Street Light</h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    PDL is the best way to get LED street lights in Bangladesh. We provide much faster and easier installation than traditional street light systems, offering the best LED street lighting solutions for your area.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
