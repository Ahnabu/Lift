'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LiftService } from '@/services/enhancedLiftService';
import { Product } from '@/types/products';

export default function CapsuleLiftPage() {
    const [capsuleLifts, setCapsuleLifts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCapsuleLifts = async () => {
            try {
                setIsLoading(true);
                const capsuleData = await LiftService.getCapsuleLifts();
                setCapsuleLifts(capsuleData);
            } catch (err) {
                console.error('Error fetching capsule lifts:', err);
                setError('Failed to load capsule lifts');
            } finally {
                setIsLoading(false);
            }
        };

        fetchCapsuleLifts();
    }, []);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-400 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading capsule lifts...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Error Loading Capsule Lifts</h1>
                    <p className="text-gray-600">{error}</p>
                </div>
            </div>
        );
    }
    console.log(capsuleLifts);
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section with Moving Background */}
            <div className="relative h-96 bg-gradient-to-r from-orange-400 to-orange-600 overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="absolute inset-0 bg-[url('/dummy_background.jpg')] bg-cover bg-center moving-bg"></div>
                <div className="relative max-w-[1320px] mx-auto px-4 h-full flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-bold mb-4">Capsule Lifts</h1>
                    </div>
                </div>
            </div>

            <div className="max-w-[1320px] mx-auto px-4 py-12">
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
                            <li><Link href="/products/lift/property-lifts" className="hover:text-orange-400">Property Lifts</Link></li>
                            <li className="text-gray-400">&gt;</li>
                            <li className="text-gray-800 font-medium">Capsule Lifts</li>
                        </ol>
                    </nav>

                    {/* Capsule Lifts Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {capsuleLifts.map((capsuleLift, index) => (
                            <Link
                                key={capsuleLift.itemCode}
                                href={`/product/${capsuleLift.itemCode}`}
                                className="group cursor-pointer"
                            >
                                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                    <div className="aspect-square bg-gray-100 overflow-hidden">
                                        <Image
                                            src="/dummy_rectangular.jfif"
                                            alt={capsuleLift.name}
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
                                            {capsuleLift.name}
                                        </h3>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
