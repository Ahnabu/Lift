'use client';

import Link from 'next/link';

export default function PropertyLiftsPage() {
    const propertyLiftTypes = [
        {
            name: 'Passenger Lifts',
            description: 'High-quality elevators for residential and commercial buildings',
            href: '/products/lift/property-lifts/passenger-lift',
            image: '/dummy_rectangular.jfif',
            color: 'from-blue-500 to-blue-700'
        },
        {
            name: 'Cargo Lifts',
            description: 'Heavy-duty freight elevators for industrial applications',
            href: '/products/lift/property-lifts/cargo-lift',
            image: '/dummy_rectangular.jfif',
            color: 'from-green-500 to-green-700'
        },
        {
            name: 'Hospital Lifts',
            description: 'Medical-grade elevators with advanced safety features',
            href: '/products/lift/property-lifts/hospital-lift',
            image: '/dummy_rectangular.jfif',
            color: 'from-red-500 to-red-700'
        },
        {
            name: 'Escalators',
            description: 'Premium escalator systems for commercial spaces',
            href: '/products/lift/property-lifts/escalator',
            image: '/dummy_rectangular.jfif',
            color: 'from-purple-500 to-purple-700'
        },
        {
            name: 'Capsule Lifts',
            description: 'Scenic elevators with panoramic glass design',
            href: '/products/lift/property-lifts/capsule-lift',
            image: '/dummy_rectangular.jfif',
            color: 'from-orange-500 to-orange-700'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-96 bg-gradient-to-r from-orange-400 to-orange-600 overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="absolute inset-0 bg-[url('/dummy_background.jpg')] bg-cover bg-center moving-bg"></div>
                <div className="relative max-w-[1320px] mx-auto px-4 h-full flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-bold mb-4">Property Lifts</h1>
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
                            <li className="text-gray-800 font-medium">Property Lifts</li>
                        </ol>
                    </nav>

                    {/* Lift Types Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {propertyLiftTypes.map((liftType, index) => (
                            <Link
                                key={liftType.name}
                                href={liftType.href}
                                className="group cursor-pointer"
                            >
                                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                    <div className={`h-48 bg-gradient-to-r ${liftType.color} relative overflow-hidden`}>
                                        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                                        <div className="relative z-10 p-6 h-full flex items-center justify-center">
                                            <div className="text-center text-white">
                                                <h3 className="text-2xl font-bold">{liftType.name}</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded mb-3 inline-block">
                                            {String(index + 1).padStart(2, '0')}
                                        </div>
                                        <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-orange-400 transition-colors">
                                            {liftType.name}
                                        </h4>
                                        <p className="text-gray-600 text-sm mb-3">{liftType.description}</p>
                                        <div className="flex items-center text-orange-400 text-sm font-medium">
                                            View Products
                                            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Features Section */}
                    <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">PropertyLifts Excellence</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality Assurance</h3>
                                <p className="text-gray-600">Premium materials and rigorous testing ensure long-lasting performance.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Advanced Technology</h3>
                                <p className="text-gray-600">Modern control systems and energy-efficient components.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Local Support</h3>
                                <p className="text-gray-600">Comprehensive installation and maintenance services nationwide.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
