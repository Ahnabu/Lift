'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LiftService } from '@/services/enhancedLiftService';
import { ImportedLift } from '@/types/products';

export default function MpLiftPage() {
    const [lifts, setLifts] = useState<ImportedLift[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchLifts = async () => {
            try {
                setIsLoading(true);
                const allImportedLifts = await LiftService.getImportedLifts();
                const mpLifts = allImportedLifts.filter(lift => lift.brand === 'MP') as ImportedLift[];
                setLifts(mpLifts);
            } catch (err) {
                console.error('Error fetching MP lifts:', err);
                setError('Failed to load MP lifts');
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
                    <p className="mt-4 text-gray-600">Loading MP lifts...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Error Loading MP Lifts</h1>
                    <p className="text-gray-600">{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section with Moving Background */}
            <div className="relative h-96 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center moving-bg opacity-40"
                    style={{
                        backgroundImage: "url('/dummy_background.jpg')",
                    }}></div>
                <div className="relative max-w-[1320px] mx-auto px-4 h-full flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-bold mb-4">MP Elevators</h1>
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
                            <li><Link href="/products/lift/imported-lifts" className="hover:text-orange-400">Imported Lifts</Link></li>
                            <li className="text-gray-400">&gt;</li>
                            <li className="text-gray-800 font-medium">MP</li>
                        </ol>
                    </nav>

                    {/* MP Lifts Grid */}
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
                                        <p className="text-gray-600 text-sm">{lift.model}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* If no lifts found, show message */}
                    {lifts.length === 0 && (
                        <div className="text-center py-12">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">No MP Lifts Available</h2>
                            <p className="text-gray-600">MP lifts will be available soon. Please check back later.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
