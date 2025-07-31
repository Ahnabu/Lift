'use client';

import Link from 'next/link';
import Image from 'next/image';

// Spare parts data based on the image provided
const sparePartsData = [
    {
        id: 'avr',
        name: 'AVR',
        image: '/placeholder-lift.jpg',
        description: 'Automatic Voltage Regulator'
    },
    {
        id: 'ard',
        name: 'ARD',
        image: '/placeholder-lift.jpg',
        description: 'Automatic Rescue Device'
    },
    {
        id: 'controller',
        name: 'Controller',
        image: '/placeholder-lift.jpg',
        description: 'Lift Control System'
    },
    {
        id: 'door-operator',
        name: 'Door Operator',
        image: '/placeholder-lift.jpg',
        description: 'Automatic Door Opening System'
    },
    {
        id: 'door-hanger',
        name: 'Door Hanger',
        image: '/placeholder-lift.jpg',
        description: 'Door Mounting Hardware'
    },
    {
        id: 'door-inverter',
        name: 'Door Inverter',
        image: '/placeholder-lift.jpg',
        description: 'Door Motor Control Unit'
    },
    {
        id: 'gearless-traction-machine',
        name: 'Gearless Traction Machine',
        image: '/placeholder-lift.jpg',
        description: 'Main Lifting Motor'
    },
    {
        id: 'traction-machine',
        name: 'Traction Machine',
        image: '/placeholder-lift.jpg',
        description: 'Mechanical Lifting System'
    },
    {
        id: 'speed-governor',
        name: 'Speed Governor',
        image: '/placeholder-lift.jpg',
        description: 'Safety Speed Control Device'
    },
    {
        id: 'cop-lop',
        name: 'COP & LOP',
        image: '/placeholder-lift.jpg',
        description: 'Car & Landing Operating Panels'
    },
    {
        id: 'suspension-rod',
        name: 'Suspension Rod',
        image: '/placeholder-lift.jpg',
        description: 'Car Suspension Component'
    },
    {
        id: 'steel-rope',
        name: 'Steel Rope',
        image: '/placeholder-lift.jpg',
        description: 'High-Strength Lifting Cable'
    }
];

export default function SparePartsPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section with Moving Background */}
            <div className="relative h-96 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('/dummy_background.jpg')] bg-cover bg-center moving-bg opacity-40"></div>
                <div className="relative max-w-[1320px] mx-auto px-4 h-full flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-bold mb-4">SPARE PARTS</h1>
                    </div>
                </div>
            </div>

            <div className="max-w-[1320px] mx-auto px-4 py-8">
                <div className="max-w-6xl mx-auto">
                    {/* Breadcrumb */}
                    <nav className="mb-8">
                        <ol className="flex items-center space-x-2 text-sm text-gray-600">
                            <li><Link href="/" className="hover:text-orange-400">HOME</Link></li>
                            <li className="text-gray-400">&gt;</li>
                            <li className="text-gray-800 font-medium">SPARE PARTS</li>
                        </ol>
                    </nav>

                    {/* Spare Parts Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sparePartsData.map((part) => (
                            <div
                                key={part.id}
                                className="group cursor-pointer"
                            >
                                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="aspect-square bg-gray-100 overflow-hidden relative">
                                        <Image
                                            src={part.image}
                                            alt={part.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-6 text-center">
                                        <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-orange-500 transition-colors">
                                            {part.name}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            {part.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Section */}
                    <div className="mt-16 bg-white rounded-lg shadow-lg p-8 text-center">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Need Help Finding Parts?</h2>
                        <p className="text-gray-600 mb-6">
                            Our experienced team can help you find the right spare parts for your lift system.
                            Contact us for professional assistance and genuine parts.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact-us"
                                className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium"
                            >
                                Contact Our Experts
                            </Link>
                            <Link
                                href="tel:+0800-7777777"
                                className="bg-gray-100 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                            >
                                Call: +0800-7777777
                            </Link>
                        </div>
                    </div>

                    {/* Additional Information */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Quality Assurance</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start">
                                    <span className="text-orange-500 mr-2">•</span>
                                    Genuine OEM parts from trusted manufacturers
                                </li>
                                <li className="flex items-start">
                                    <span className="text-orange-500 mr-2">•</span>
                                    Rigorous quality testing and certification
                                </li>
                                <li className="flex items-start">
                                    <span className="text-orange-500 mr-2">•</span>
                                    Warranty coverage on all spare parts
                                </li>
                                <li className="flex items-start">
                                    <span className="text-orange-500 mr-2">•</span>
                                    Compatible with all major lift brands
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Expert Services</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start">
                                    <span className="text-orange-500 mr-2">•</span>
                                    Professional installation services
                                </li>
                                <li className="flex items-start">
                                    <span className="text-orange-500 mr-2">•</span>
                                    24/7 emergency support available
                                </li>
                                <li className="flex items-start">
                                    <span className="text-orange-500 mr-2">•</span>
                                    Preventive maintenance programs
                                </li>
                                <li className="flex items-start">
                                    <span className="text-orange-500 mr-2">•</span>
                                    Technical consultation and support
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
