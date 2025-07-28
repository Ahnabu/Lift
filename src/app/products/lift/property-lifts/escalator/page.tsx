/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LiftService } from '@/services/enhancedLiftService';
import { Product } from '@/types/products';

export default function EscalatorPage() {
    const [escalators, setEscalators] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEscalators = async () => {
            try {
                setIsLoading(true);
                const escalatorData = await LiftService.getEscalators();
                setEscalators(escalatorData);
            } catch (err) {
                console.error('Error fetching escalators:', err);
                setError('Failed to load escalators');
            } finally {
                setIsLoading(false);
            }
        };

        fetchEscalators();
    }, []);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-400 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading escalators...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Error Loading Escalators</h1>
                    <p className="text-gray-600">{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section with Moving Background */}
            <div className="relative h-96 bg-gradient-to-r from-orange-400 to-orange-600 overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="absolute inset-0 bg-[url('/dummy_background.jpg')] bg-cover bg-center moving-bg"></div>
                <div className="relative max-w-[1320px] mx-auto px-4 h-full flex items-center">
                    <div className="max-w-6xl mx-auto text-white">
                        <h1 className="text-5xl font-bold mb-4">Escalators</h1>
                        <p className="text-xl text-orange-100 max-w-2xl">
                            Premium escalator systems for commercial spaces, shopping malls, and transit stations
                            with advanced safety features and modern design.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-[1320px] mx-auto px-4 py-12">
                <div className="max-w-6xl mx-auto">
                    {/* Breadcrumb */}
                    <nav className="mb-8">
                        <ol className="flex items-center space-x-2 text-sm text-gray-600">
                            <li><Link href="/" className="hover:text-orange-400">Home</Link></li>
                            <li className="text-gray-400">/</li>
                            <li><Link href="/products" className="hover:text-orange-400">Products</Link></li>
                            <li className="text-gray-400">/</li>
                            <li><Link href="/products/lift" className="hover:text-orange-400">Lifts</Link></li>
                            <li className="text-gray-400">/</li>
                            <li><Link href="/products/lift/property-lifts" className="hover:text-orange-400">Property Lifts</Link></li>
                            <li className="text-gray-400">/</li>
                            <li className="text-gray-800 font-medium">Escalators</li>
                        </ol>
                    </nav>

                    {/* Escalators Grid */}
                    <div className="space-y-12">
                        {escalators.map((escalator) => (
                            <Link
                                key={escalator.itemCode}
                                href={`/product/${escalator.itemCode}`}
                                className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                                    {/* Left side - Image */}
                                    <div className="aspect-square bg-gray-100 overflow-hidden rounded-lg">
                                        <Image
                                            src="/placeholder-lift.jpg"
                                            alt={escalator.name}
                                            width={400}
                                            height={400}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>

                                    {/* Right side - Details */}
                                    <div className="flex flex-col justify-center space-y-4">
                                        <div>
                                            <h3 className="text-3xl font-bold text-gray-800 mb-2 group-hover:text-orange-400 transition-colors">
                                                {escalator.name}
                                            </h3>
                                            <p className="text-orange-400 font-medium text-lg mb-4">Category: {(escalator as any).category || 'Escalators'}</p>
                                        </div>

                                        <div className="space-y-3">
                                            <h4 className="text-xl font-semibold text-gray-800">Specification:</h4>
                                            <div className="space-y-2 text-gray-700">
                                                <p><strong>Maximum Rise:</strong> {(escalator as any).maximumRise || 'N/A'}</p>
                                                <p><strong>Application:</strong> {(escalator as any).application || 'N/A'}</p>
                                                <p><strong>Rise Height:</strong> {(escalator as any).riseHeight || 'N/A'}</p>
                                                <p><strong>Step Width:</strong> {(escalator as any).stepWidth || 'N/A'}</p>
                                                <p><strong>Speed:</strong> {(escalator as any).speed || 'N/A'}</p>
                                                <p><strong>Main Power:</strong> {(escalator as any).mainPower || 'N/A'}</p>
                                                <p><strong>Balustrade:</strong> {(escalator as any).balustrade || 'N/A'}</p>
                                                <p><strong>Handrail:</strong> {(escalator as any).handrail || 'N/A'}</p>
                                                <p><strong>Handrail Bracket:</strong> {(escalator as any).handrailBracket || 'N/A'}</p>
                                                <p><strong>Inner & Outer Decking:</strong> {(escalator as any).innerOuterDecking || 'N/A'}</p>
                                                <p><strong>Step:</strong> {(escalator as any).step || 'N/A'}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Technical Information */}
                    <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Escalator Applications</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Commercial Applications</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Shopping malls and retail centers</li>
                                    <li>• Office buildings and corporate towers</li>
                                    <li>• Airports and transit stations</li>
                                    <li>• Hotels and entertainment venues</li>
                                    <li>• Public buildings and institutions</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical Specifications</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Step width: 1000mm - 1200mm</li>
                                    <li>• Rise height: Up to 15 meters</li>
                                    <li>• Inclination: 30° or 35°</li>
                                    <li>• Speed: 0.5 - 0.65 m/s</li>
                                    <li>• Capacity: 9,000 - 13,500 persons/hour</li>
                                    <li>• Safety: Emergency stops, monitoring systems</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Design Options */}
                    <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Design & Customization</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center p-6 bg-gray-50 rounded-lg">
                                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <h4 className="font-semibold text-gray-800 mb-2">Balustrade Options</h4>
                                <p className="text-sm text-gray-600">Glass, stainless steel, or decorative panels with custom finishes</p>
                            </div>
                            <div className="text-center p-6 bg-gray-50 rounded-lg">
                                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h4 className="font-semibold text-gray-800 mb-2">LED Lighting</h4>
                                <p className="text-sm text-gray-600">RGB LED systems, step lighting, and architectural illumination</p>
                            </div>
                            <div className="text-center p-6 bg-gray-50 rounded-lg">
                                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a4 4 0 004-4V5z" />
                                    </svg>
                                </div>
                                <h4 className="font-semibold text-gray-800 mb-2">Step Materials</h4>
                                <p className="text-sm text-gray-600">Aluminum, composite, or anti-slip materials with various textures</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg p-8 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">Custom Escalator Solutions</h2>
                        <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
                            Design and install custom escalator systems tailored to your building architecture and traffic requirements.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-orange-400 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                Get Design Consultation
                            </button>
                            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-400 transition-colors">
                                Download Catalog
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .moving-bg {
          position: absolute;
          top: 0;
          left: -100%;
          width: 300%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.1) 25%,
            rgba(255, 255, 255, 0.2) 50%,
            rgba(255, 255, 255, 0.1) 75%,
            transparent 100%
          );
          animation: moveBackground 15s linear infinite;
        }

        @keyframes moveBackground {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
        </div>
    );
}
