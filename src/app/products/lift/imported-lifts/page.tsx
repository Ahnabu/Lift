'use client';

import Link from 'next/link';

export default function ImportedLiftsPage() {
    const importedLiftBrands = [
        {
            name: 'KONE',
            description: 'Finnish engineering excellence with eco-efficient technology',
            href: '/products/lift/imported-lifts/kone',
            image: '/dummy_rectangular.jfif',
            country: 'Finland',
            color: 'from-blue-600 to-blue-800'
        },
        {
            name: 'SRH',
            description: 'Premium Indian elevator systems with modern design',
            href: '/products/lift/imported-lifts/srh',
            image: '/dummy_rectangular.jfif',
            country: 'India',
            color: 'from-orange-400 to-orange-600'
        },
        {
            name: 'MP',
            description: 'Reliable elevator solutions with advanced controls',
            href: '/products/lift/imported-lifts/mp',
            image: '/dummy_rectangular.jfif',
            country: 'India',
            color: 'from-green-600 to-green-800'
        },
        {
            name: 'Shanghai Mitsubishi',
            description: 'High-speed elevators with Japanese precision',
            href: '/products/lift/imported-lifts/shanghai-mitsubishi',
            image: '/dummy_rectangular.jfif',
            country: 'China',
            color: 'from-red-600 to-red-800'
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
                        <h1 className="text-5xl font-bold mb-4">Imported Lifts</h1>
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
                            <li className="text-gray-800 font-medium">Imported Lifts</li>
                        </ol>
                    </nav>

                    {/* Brands Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {importedLiftBrands.map((brand, index) => (
                            <Link
                                key={brand.name}
                                href={brand.href}
                                className="group cursor-pointer"
                            >
                                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                    <div className={`h-48 bg-gradient-to-r ${brand.color} relative overflow-hidden`}>
                                        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                                        <div className="relative z-10 p-6 h-full flex items-center justify-center">
                                            <div className="text-center text-white">
                                                <h3 className="text-3xl font-bold mb-2">{brand.name}</h3>
                                                <p className="text-sm opacity-90">{brand.country}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded mb-3 inline-block">
                                            {String(index + 1).padStart(2, '0')}
                                        </div>
                                        <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-orange-400 transition-colors">
                                            {brand.name} Elevators
                                        </h4>
                                        <p className="text-gray-600 text-sm mb-3">{brand.description}</p>
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
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Why Choose Imported Lifts?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Advanced Technology</h3>
                                <p className="text-gray-600">Latest international standards with cutting-edge features and smart controls.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Global Standards</h3>
                                <p className="text-gray-600">International quality certifications and compliance with global safety standards.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 3v2.25m-.622 4.5l-1.366 1.366M12 18.75V21m.622-4.5l1.366 1.366M12 5.25v13.5M8.25 12H21M3 12h5.25" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Support</h3>
                                <p className="text-gray-600">Professional installation, maintenance, and after-sales service support.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
