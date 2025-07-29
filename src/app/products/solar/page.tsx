'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SolarService } from '@/services/solarService';
import { SolarProduct } from '@/types/otherProducts';

export default function SolarPage() {
    const [solarProducts, setSolarProducts] = useState<SolarProduct[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSolar = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const allSolar = await SolarService.getAllSolar();
                setSolarProducts(allSolar);
            } catch (err) {
                console.error('Error fetching solar products:', err);
                setError('Failed to load solar products');
            } finally {
                setIsLoading(false);
            }
        };

        fetchSolar();
    }, []);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-400 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading solar products...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Error Loading Solar Products</h1>
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
            <div className="relative h-96 bg-gradient-to-r from-green-500 to-green-700 overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="absolute inset-0 bg-[url('/dummy_background.jpg')] bg-cover bg-center moving-bg"></div>
                <div className="relative max-w-[1320px] mx-auto px-4 h-full flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-bold mb-4">Solar Systems</h1>

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
                            <li className="text-gray-800 font-medium">Solar</li>
                        </ol>
                    </nav>

                    {/* Solar Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {solarProducts.map((solar, index) => (
                            <Link
                                key={solar.itemCode}
                                href={`/product/${solar.itemCode}`}
                                className="group cursor-pointer"
                            >
                                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                    <div className="aspect-square bg-gray-100 overflow-hidden">
                                        <Image
                                            src="/dummy_rectangular.jfif"
                                            alt={solar.name}
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
                                            {solar.name}
                                        </h3>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Solar Information Section */}
                    <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">About Solar Energy in Bangladesh</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Industry Growth</h3>
                                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                                    The industrial sector of Bangladesh has experienced remarkable growth over the last decade, owing to the flourishing economy. This, however, has led to an increase in power demand, resulting in environmental pollution and greenhouse gas emissions. To mitigate the impact of global warming, the switch to clean energy, particularly solar energy, is imperative.
                                </p>

                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Benefits of Solar Energy</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        Cost savings on electricity bills
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        Reduction in operational expenditure
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        Extended project lifetime
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        Better utilization of idle roof space
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        Compliance benefits for industries
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Our Services</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        Project development and consultation
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        Site-specific design and engineering
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        Feasibility study and economic evaluation
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        Supply & installation (turnkey basis)
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        Testing & commissioning
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        Operation & maintenance support
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        24x7 service support
                                    </li>
                                </ul>

                                <h3 className="text-lg font-semibold text-gray-800 mb-4 mt-6">Customer Support</h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    Our customer satisfaction is a top priority, and we provide 24x7 service support to ensure our clients&apos; needs are always met. We follow a meticulous process from site survey to continuous follow-up and feedback.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 border-t pt-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Project Process</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <ol className="space-y-2 text-gray-700">
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2 font-bold">1.</span>
                                        Initial consultation and site survey
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2 font-bold">2.</span>
                                        Preliminary design and feasibility analysis
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2 font-bold">3.</span>
                                        Economic evaluation and financing options
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2 font-bold">4.</span>
                                        Design and engineering
                                    </li>
                                </ol>
                                <ol className="space-y-2 text-gray-700">
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2 font-bold">5.</span>
                                        Necessary permitting and approvals
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2 font-bold">6.</span>
                                        Procurement, construction and installation
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2 font-bold">7.</span>
                                        Grid inspection, operation and commissioning
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2 font-bold">8.</span>
                                        Maintenance and continuous follow up
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
