'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Lift } from '@/data/lifts';
import { LiftService } from '@/services/liftService';

export default function ProductDetailPage() {
    const params = useParams();
    const [lift, setLift] = useState<Lift | null>(null);
    const [relatedLifts, setRelatedLifts] = useState<Lift[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchLiftDetails = async () => {
            try {
                setLoading(true);
                const itemCode = params.itemCode as string;

                // Fetch lift details
                const liftData = await LiftService.getLiftByItemCode(itemCode);
                setLift(liftData);

                // Fetch related lifts (excluding current one)
                const allLifts = await LiftService.getAllLifts();
                const related = allLifts.filter(l => l.itemCode !== itemCode).slice(0, 4);
                setRelatedLifts(related);

            } catch (err) {
                setError('Failed to load lift details');
                console.error('Error fetching lift details:', err);
            } finally {
                setLoading(false);
            }
        };

        if (params.itemCode) {
            fetchLiftDetails();
        }
    }, [params.itemCode]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading lift details...</p>
                </div>
            </div>
        );
    }

    if (error || !lift) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <p className="text-red-600 text-lg">{error || 'Lift not found'}</p>
                    <Link href="/products/lift/property-lifts/passenger-lift" className="text-primary hover:underline mt-4 inline-block">
                        Back to Passenger Lifts
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-[1320px] mx-auto">
            {/* Hero Section with Moving Background */}
            <section className="relative min-h-[400px] bg-gradient-to-r from-gray-900/90 to-gray-800/90 overflow-hidden">
                {/* Moving Background */}
                <div className="absolute inset-0 bg-[url('/dummy_background.jpg')] bg-cover bg-center moving-bg"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-800/60"></div>

                {/* Content */}
                <div className="relative z-10 flex items-center justify-center min-h-[400px]">
                    <div className="text-center text-white">
                        <h1 className="text-5xl md:text-6xl font-bold tracking-wider">
                            PRODUCT
                        </h1>
                    </div>
                </div>
            </section>

            {/* Breadcrumb */}
            <section className="bg-gray-100 py-4">
                <div className="max-w-6xl mx-auto px-4">
                    <nav className="text-sm text-gray-600">
                        <Link href="/" className="hover:text-primary">HOME</Link>
                        <span className="mx-2">&gt;</span>
                        <Link href="/products" className="hover:text-primary">PRODUCTS</Link>
                        <span className="mx-2">&gt;</span>
                        <Link href="/products/lift/property-lifts/passenger-lift" className="hover:text-primary">PASSENGER LIFT</Link>
                        <span className="mx-2">&gt;</span>
                        <span className="text-gray-800 font-medium">{lift.itemCode}</span>
                    </nav>
                </div>
            </section>

            {/* Product Details */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Product Image */}
                        <div className="relative">
                            <div className="aspect-[4/5] relative overflow-hidden rounded-lg shadow-lg">
                                <Image
                                    src={lift.image}
                                    alt={lift.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Product Information */}
                        <div className="space-y-6">
                            <div>
                                <h1 className="text-4xl font-bold text-gray-800 mb-4">{lift.itemCode}</h1>
                                <p className="text-lg text-primary font-medium mb-6">Category: {lift.category}</p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Specifications</h2>

                                <div className="grid grid-cols-1 gap-4">
                                    <div className="border-b border-gray-200 pb-2">
                                        <span className="font-medium text-gray-800">Item code:</span>
                                        <span className="ml-2 text-gray-600">{lift.itemCode}</span>
                                    </div>

                                    <div className="border-b border-gray-200 pb-2">
                                        <span className="font-medium text-gray-800">Brand:</span>
                                        <span className="ml-2 text-gray-600">{lift.brand}</span>
                                    </div>

                                    <div className="border-b border-gray-200 pb-2">
                                        <span className="font-medium text-gray-800">Rated capacity:</span>
                                        <span className="ml-2 text-gray-600">{lift.ratedCapacity}</span>
                                    </div>

                                    <div className="border-b border-gray-200 pb-2">
                                        <span className="font-medium text-gray-800">Floors/Stops/Doors:</span>
                                        <span className="ml-2 text-gray-600">{lift.floors}</span>
                                    </div>

                                    <div className="border-b border-gray-200 pb-2">
                                        <span className="font-medium text-gray-800">Speed:</span>
                                        <span className="ml-2 text-gray-600">{lift.speed}</span>
                                    </div>

                                    <div className="border-b border-gray-200 pb-2">
                                        <span className="font-medium text-gray-800">Control:</span>
                                        <span className="ml-2 text-gray-600">{lift.control}</span>
                                    </div>

                                    <div className="border-b border-gray-200 pb-2">
                                        <span className="font-medium text-gray-800">Drive system:</span>
                                        <span className="ml-2 text-gray-600">{lift.driveSystem}</span>
                                    </div>

                                    <div className="border-b border-gray-200 pb-2">
                                        <span className="font-medium text-gray-800">Traction machine:</span>
                                        <span className="ml-2 text-gray-600">{lift.tractionMachine}</span>
                                    </div>

                                    <div className="border-b border-gray-200 pb-2">
                                        <span className="font-medium text-gray-800">Machine room size (mm):</span>
                                        <span className="ml-2 text-gray-600">{lift.machineRoomSize}</span>
                                    </div>

                                    <div className="border-b border-gray-200 pb-2">
                                        <span className="font-medium text-gray-800">Car entrances:</span>
                                        <span className="ml-2 text-gray-600">{lift.carEntrances}</span>
                                    </div>

                                    <div className="border-b border-gray-200 pb-2">
                                        <span className="font-medium text-gray-800">Door opening type:</span>
                                        <span className="ml-2 text-gray-600">{lift.doorOpeningType}</span>
                                    </div>

                                    <div className="border-b border-gray-200 pb-2">
                                        <span className="font-medium text-gray-800">Main power supply:</span>
                                        <span className="ml-2 text-gray-600">{lift.mainPowerSupply}</span>
                                    </div>

                                    <div className="border-b border-gray-200 pb-2">
                                        <span className="font-medium text-gray-800">Car dimensions:</span>
                                        <span className="ml-2 text-gray-600">{lift.carDimensions}</span>
                                    </div>

                                    <div className="border-b border-gray-200 pb-2">
                                        <span className="font-medium text-gray-800">Pit depth:</span>
                                        <span className="ml-2 text-gray-600">{lift.pitDepth}</span>
                                    </div>

                                    <div className="pb-2">
                                        <span className="font-medium text-gray-800">Overhead:</span>
                                        <span className="ml-2 text-gray-600">{lift.overhead}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Products */}
            {relatedLifts.length > 0 && (
                <section className="py-16 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">
                                RELATED PRODUCTS
                            </h2>
                            <div className="w-24 h-1 bg-primary mx-auto"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {relatedLifts.map((relatedLift) => (
                                <div key={relatedLift.id} className="group cursor-pointer">
                                    <Link href={`/product/${relatedLift.itemCode}`}>
                                        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                            {/* Lift Image */}
                                            <div className="relative aspect-[4/5] overflow-hidden rounded-t-lg">
                                                <Image
                                                    src={relatedLift.image}
                                                    alt={relatedLift.name}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                                                />
                                            </div>

                                            {/* Lift Info */}
                                            <div className="p-4 text-center">
                                                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                                    {relatedLift.itemCode}
                                                </h3>
                                                <p className="text-gray-600 text-sm">
                                                    {relatedLift.category}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>

                        {/* Show more button */}
                        <div className="text-center mt-8">
                            <Link
                                href="/products/lift/property-lifts/passenger-lift"
                                className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg transition-colors duration-300"
                            >
                                View All Products
                            </Link>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
