/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LiftService } from '@/services/enhancedLiftService';
import { Product } from '@/types/products';

export default function SRHPage() {
    const [lifts, setLifts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchLifts = async () => {
            try {
                setIsLoading(true);
                setError(null);

                const allProducts = await LiftService.getAllProducts();
                const srhLifts = allProducts.filter(product =>
                    product.type === 'imported' &&
                    product.manufacturer?.toLowerCase() === 'srh'
                );

                setLifts(srhLifts);
            } catch (err) {
                console.error('Error fetching SRH lifts:', err);
                setError('Failed to load SRH lifts');
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
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-400 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading SRH lifts...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Error Loading SRH Lifts</h1>
                    <p className="text-gray-600 mb-6">{error}</p>
                    <Link
                        href="/products/lift/imported-lifts"
                        className="bg-orange-400 text-white px-6 py-3 rounded-lg hover:bg-orange-500 transition-colors"
                    >
                        Back to Imported Lifts
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
                        <h1 className="text-5xl font-bold mb-4">SRH Lifts</h1>
                        <p className="text-xl text-orange-200">Premium Imported Elevator Solutions</p>
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
                            <li><Link href="/products/lift" className="hover:text-orange-400">Lifts</Link></li>
                            <li className="text-gray-400">&gt;</li>
                            <li><Link href="/products/lift/imported-lifts" className="hover:text-orange-400">Imported Lifts</Link></li>
                            <li className="text-gray-400">&gt;</li>
                            <li className="text-gray-800 font-medium">SRH</li>
                        </ol>
                    </nav>

                    {/* SRH Lifts Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {lifts.map((lift, index) => (
                            <Link
                                key={lift.itemCode}
                                href={`/product/${lift.itemCode}`}
                                className="group cursor-pointer"
                            >
                                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                    <div className="aspect-square bg-gray-100 overflow-hidden">
                                        <Image
                                            src="/dummy_rectangular.jfif"
                                            alt={lift.name}
                                            width={400}
                                            height={400}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded mb-2 inline-block">
                                            {String(index + 1).padStart(2, '0')}
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-orange-400 transition-colors">
                                            {lift.name}
                                        </h3>
                                        <p className="text-orange-400 font-medium mb-2">{lift.itemCode}</p>
                                        <p className="text-gray-600 text-sm">{(lift as any).model || lift.name}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* If no lifts found, show message */}
                    {lifts.length === 0 && (
                        <div className="text-center py-12">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">No SRH Lifts Available</h2>
                            <p className="text-gray-600">SRH lifts will be available soon. Please check back later.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
