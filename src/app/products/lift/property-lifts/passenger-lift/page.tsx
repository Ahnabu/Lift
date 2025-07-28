'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Lift } from '@/data/lifts';
import { LiftService } from '@/services/liftService';

export default function PassengerLiftPage() {
    const [lifts, setLifts] = useState<Lift[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchLifts = async () => {
            try {
                setLoading(true);
                const data = await LiftService.getPassengerLifts();
                setLifts(data);
            } catch (err) {
                setError('Failed to load lifts');
                console.error('Error fetching lifts:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchLifts();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading lifts...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <p className="text-red-600 text-lg">{error}</p>
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
                            PRODUCTS
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
                        <Link href="/products/lift" className="hover:text-primary">LIFT</Link>
                        <span className="mx-2">&gt;</span>
                        <Link href="/products/lift/property-lifts" className="hover:text-primary">PROPERTY-LIFTS</Link>
                        <span className="mx-2">&gt;</span>
                        <span className="text-gray-800 font-medium">PASSENGER-LIFT</span>
                    </nav>
                </div>
            </section>

            {/* Lifts Grid */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {lifts.map((lift) => (
                            <div key={lift.id} className="group cursor-pointer">
                                <Link href={`/product/${lift.itemCode}`}>
                                    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                        {/* Lift Image */}
                                        <div className="relative aspect-[4/5] overflow-hidden rounded-t-lg">
                                            <Image
                                                src={lift.image}
                                                alt={lift.name}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-300"
                                            />
                                        </div>

                                        {/* Lift Info */}
                                        <div className="p-6 text-center">
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                                {lift.itemCode}
                                            </h3>
                                            <p className="text-gray-600 text-sm">
                                                {lift.category}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Passenger Lift Information Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            PASSENGER LIFT: CAPACITY, SERVICE & PRICE
                        </h2>
                        <div className="w-24 h-1 bg-primary mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <p className="text-gray-700 leading-relaxed">
                                We are the best Elevator Lift Supplier in Bangladesh. Our experts we are keeping track of the
                                specifications and business and best market leading elevator technology to aid manufacturing. Here
                                we are the best Company in Bangladesh that help us lift the business of commercial business that aid in
                                our company with our best services and best quality.
                            </p>

                            <p className="text-gray-700 leading-relaxed">
                                Our Passenger lift is very famous in the market and gives the best performance to our customers by
                                which they can drive their businesses successfully. The expert professionals of the company have been
                                certified with all the required installation.
                            </p>

                            <p className="text-gray-700 leading-relaxed">
                                We are providing various designed lifts in the market for enhancing the building beauty and comfort.
                                All our lifts are tested with certified quality standard before delivery to our clients. The various
                                dimensions and features are also are available.
                            </p>
                        </div>

                        <div className="relative">
                            <Image
                                src="/dummy_rectangular.jfif"
                                alt="Passenger Lift Features"
                                width={500}
                                height={600}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Features List */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Features:</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <span className="text-gray-700">Passenger car Interior: 8 Specification: 8 Stainless steel, S.S interior with Decorative mirror S.S Hand rail</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <span className="text-gray-700">The car roof is equipped with LED Lighting with fan or Air Conditioner</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <span className="text-gray-700">With music sound system which has the amplification using good in the best quality and sound clarity</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <span className="text-gray-700">Electronic safety monitoring automatic rescue device & automatic rescue operation (optional)</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Safety Features:</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <span className="text-gray-700">Emergency phone/ Intercom facility</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <span className="text-gray-700">Overload device indication & Voice</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <span className="text-gray-700">Fire service switches in the car & Hall call button</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <span className="text-gray-700">Standby Power Generator connection system</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
