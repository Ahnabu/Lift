'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Enhanced forklift data with detailed specifications
const forkliftData = [
    {
        itemCode: 'ERP16-20VF',
        name: 'Yale ERP16-20VF Electric Counterbalance Forklift',
        model: 'ERP16-20VF',
        brand: 'Yale',
        description: 'Electric counterbalance forklift with advanced technology',
        image: '/dummy_rectangular.jfif',
        category: 'Forklift',
        type: 'ELECTRIC COUNTERBALANCE FORKLIFTS',
        loadCapacity: '1,600 – 2,000kg',
        wheel: '4 Wheel',
        color: 'Mixed (As per given picture)',
        liftingHeight: '3,000mm - 6,000mm',
        wheelType: 'Pneumatic',
        forkLength: '1,220mm',
        dimensions: 'L: 3,400mm x W: 1,200mm x H: 2,100mm',
        weight: '3,500kg',
        batteryType: 'Lead-acid 48V',
        operatingTime: '8 hours',
        chargingTime: '8-10 hours',
        safetyFeatures: 'Operator protection system, Stability control, Emergency stop'
    },
    {
        itemCode: 'FK-ELE-002',
        name: 'Yale ERP 2.5-3.0 Ton Electric Forklift',
        model: 'ERP25-30VF',
        brand: 'Yale',
        description: 'Heavy-duty electric forklift for industrial applications',
        image: '/dummy_rectangular.jfif',
        category: 'Forklift',
        type: 'ELECTRIC COUNTERBALANCE FORKLIFTS',
        loadCapacity: '2.5-3.0 tons',
        wheel: '4 Wheel',
        color: 'Yellow/Black',
        liftingHeight: '3,000mm - 6,500mm',
        wheelType: 'Pneumatic',
        forkLength: '1,220mm',
        dimensions: 'L: 3,600mm x W: 1,260mm x H: 2,150mm',
        weight: '4,200kg',
        batteryType: 'Lead-acid 48V',
        operatingTime: '8 hours',
        chargingTime: '8-10 hours',
        safetyFeatures: 'Operator protection system, Load backrest, Overhead guard'
    },
    {
        itemCode: 'FK-ELE-003',
        name: 'Yale ERP 3.5-4.0 Ton Electric Forklift',
        model: 'ERP35-40VF',
        brand: 'Yale',
        description: 'High-capacity electric forklift for demanding environments',
        image: '/dummy_rectangular.jfif',
        category: 'Forklift',
        type: 'ELECTRIC COUNTERBALANCE FORKLIFTS',
        loadCapacity: '3.5-4.0 tons',
        wheel: '4 Wheel',
        color: 'Yellow/Black',
        liftingHeight: '3,000mm - 7,000mm',
        wheelType: 'Pneumatic',
        forkLength: '1,220mm',
        dimensions: 'L: 3,800mm x W: 1,320mm x H: 2,200mm',
        weight: '5,100kg',
        batteryType: 'Lead-acid 80V',
        operatingTime: '8 hours',
        chargingTime: '8-10 hours',
        safetyFeatures: 'Advanced stability control, Load sensing, Emergency systems'
    }
];

export default function ForkliftPage() {
    const [forklifts, setForklifts] = useState(forkliftData);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-400 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading forklifts...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Error Loading Forklifts</h1>
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
                <div className="absolute inset-0 bg-cover bg-center moving-bg opacity-40"
                    style={{
                        backgroundImage: "url('/dummy_background.jpg')",
                    }}></div>
                <div className="relative max-w-[1320px] mx-auto px-4 h-full flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-bold mb-4">Forklifts</h1>
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
                            <li className="text-gray-800 font-medium">Forklifts</li>
                        </ol>
                    </nav>


                    {/* Forklifts Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {forklifts.map((forklift, index) => (
                            <Link
                                key={forklift.itemCode}
                                href={`/product/${forklift.itemCode}`}
                                className="group cursor-pointer"
                            >
                                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                    <div className="aspect-square bg-gray-100 overflow-hidden">
                                        <Image
                                            src={forklift.image}
                                            alt={forklift.name}
                                            width={400}
                                            height={400}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            onError={(e) => {
                                                e.currentTarget.src = '/dummy_rectangular.jfif';
                                            }}
                                        />
                                    </div>
                                    <div className="p-4 md:flex text-center items-center justify-between ">
                                        <div className="text-gray-400 text-4xl font-light mb-2">
                                            {String(index + 1).padStart(2, '0')}
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-800">
                                            {forklift.model}
                                        </h3>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Additional Information */}
                    <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Our Forklifts?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Advanced Technology</h3>
                                <p className="text-gray-600">
                                    Our forklifts feature cutting-edge electric drive systems, advanced battery technology,
                                    and intelligent control systems for maximum efficiency and reliability.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Safety First</h3>
                                <p className="text-gray-600">
                                    All our forklifts come with comprehensive safety features including operator
                                    protection systems, stability control, and emergency stop functions.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Versatile Applications</h3>
                                <p className="text-gray-600">
                                    Perfect for warehouses, distribution centers, manufacturing facilities,
                                    and outdoor operations with various load capacities and configurations.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Service & Support</h3>
                                <p className="text-gray-600">
                                    Comprehensive after-sales service, maintenance support, and genuine spare parts
                                    availability to keep your operations running smoothly.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* SEO Content Section */}
                    <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">FORKLIFT IN BANGLADESH</h2>
                        <div className="space-y-4 text-gray-700 text-base leading-relaxed">
                            <p>
                                PropertyLifts offers comprehensive forklift solutions in Bangladesh, providing high-quality material handling equipment for warehouses, factories, and distribution centers. Our electric forklifts are designed for efficiency, reliability, and environmental responsibility.
                            </p>
                            <p>
                                With advanced battery technology and ergonomic designs, our forklifts ensure maximum productivity while minimizing operational costs. From compact 3-wheel models to heavy-duty 4-wheel counterbalance forklifts, we have the right solution for every application.
                            </p>
                        </div>

                        <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">TYPES OF FORKLIFT</h3>
                        <div className="space-y-4 text-gray-700 text-base leading-relaxed">
                            <p>
                                <strong>Electric Counterbalance Forklifts:</strong> Ideal for indoor operations with zero emissions and quiet operation. Available in 3-wheel and 4-wheel configurations with load capacities from 1,500kg to 8,000kg.
                            </p>
                            <p>
                                <strong>Reach Trucks:</strong> Perfect for narrow aisle operations with excellent maneuverability and lift heights up to 8,000mm. Designed for high-density storage applications.
                            </p>
                            <p>
                                <strong>Order Pickers:</strong> Specialized equipment for picking operations with stand-on platforms and various lift heights for efficient warehouse operations.
                            </p>
                        </div>

                        <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">FORKLIFT COMPANY IN BANGLADESH</h3>
                        <div className="space-y-4 text-gray-700 text-base leading-relaxed">
                            <p>
                                PropertyLifts is a leading forklift supplier in Bangladesh, offering Yale brand forklifts known for their reliability and performance. We provide comprehensive services including sales, rental, maintenance, and spare parts support.
                            </p>
                        </div>

                        <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">FORKLIFT PRICE IN BANGLADESH</h3>
                        <div className="space-y-4 text-gray-700 text-base leading-relaxed">
                            <p>
                                Our forklift prices are competitive and offer excellent value for money. We provide flexible financing options and rental programs to suit different business needs. Contact us for detailed quotations and customized solutions.
                            </p>
                        </div>

                        <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">PROPERTY FORKLIFT: YOUR ULTIMATE SOLUTIONS</h3>
                        <div className="space-y-4 text-gray-700 text-base leading-relaxed">
                            <p>
                                Choose PropertyLifts for reliable forklift solutions backed by professional service and support. Our experienced team ensures optimal equipment selection, proper installation, and ongoing maintenance for maximum operational efficiency.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
