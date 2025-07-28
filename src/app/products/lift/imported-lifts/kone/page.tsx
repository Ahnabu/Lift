'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LiftService } from '@/services/enhancedLiftService';
import { ImportedLift } from '@/types/products';

export default function KoneLiftPage() {
    const [lifts, setLifts] = useState<ImportedLift[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchLifts = async () => {
            try {
                setIsLoading(true);
                const koneLifts = await LiftService.getImportedLifts();
                setLifts(koneLifts);
            } catch (err) {
                console.error('Error fetching KONE lifts:', err);
                setError('Failed to load KONE lifts');
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
                    <p className="mt-4 text-gray-600">Loading KONE lifts...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Error Loading KONE Lifts</h1>
                    <p className="text-gray-600">{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section with Moving Background */}
            <div className="relative h-96 bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="moving-bg"></div>
                <div className="relative max-w-[1320px] mx-auto px-4 h-full flex items-center justify-center">
                    <div className="text-center text-white">
                        <div className="flex items-center justify-center mb-4">
                            <div className="bg-white rounded-lg p-4 mr-4">
                                <span className="text-2xl font-bold text-blue-600">KONE</span>
                            </div>
                            <h1 className="text-5xl font-extrabold">KONE Elevators</h1>
                        </div>
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
                            <li className="text-gray-800 font-medium">KONE</li>
                        </ol>
                    </nav>

                    {/* KONE Features Section */}
                    <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">KONE Innovation Features</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Eco-Efficient™</h3>
                                <p className="text-gray-600">Energy-regenerating drives and LED lighting reduce energy consumption by up to 50%.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">24/7 Connected Services</h3>
                                <p className="text-gray-600">Remote monitoring and predictive maintenance with IoT connectivity.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Machine-Room-Less</h3>
                                <p className="text-gray-600">Space-saving MonoSpace® technology eliminates the need for machine rooms.</p>
                            </div>
                        </div>
                    </div>

                    {/* KONE Lifts Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {lifts.map((lift) => (
                            <Link
                                key={lift.itemCode}
                                href={`/product/${lift.itemCode}`}
                                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                            >
                                <div className="aspect-square bg-gray-100 overflow-hidden">
                                    <Image
                                        src={lift.image}
                                        alt={lift.name}
                                        width={400}
                                        height={400}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        onError={(e) => {
                                            e.currentTarget.src = '/images/placeholder-lift.jpg';
                                        }}
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center mb-2">
                                        <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded mr-2">KONE</span>
                                        <span className="text-gray-500 text-sm">Finland</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-orange-400 transition-colors">
                                        {lift.name}
                                    </h3>
                                    <p className="text-orange-400 font-medium mb-2">{lift.itemCode}</p>
                                    <p className="text-gray-600 text-sm mb-3">{lift.model}</p>
                                    <div className="space-y-1 text-sm text-gray-500">
                                        <p><strong>Specs:</strong> {lift.specifications}</p>
                                        <p><strong>Warranty:</strong> {lift.warranty}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* KONE Technology */}
                    <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">KONE Technology Excellence</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Innovation Leadership</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• MonoSpace® machine-room-less technology</li>
                                    <li>• EcoDisc® energy-efficient hoisting motor</li>
                                    <li>• People Flow® planning and solutions</li>
                                    <li>• KONE Care™ maintenance services</li>
                                    <li>• Digital connectivity and IoT integration</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Quality & Service</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• 110+ years of elevator innovation</li>
                                    <li>• Global service network in 60+ countries</li>
                                    <li>• 24/7 remote monitoring capabilities</li>
                                    <li>• Predictive maintenance technology</li>
                                    <li>• Comprehensive warranty programs</li>
                                    <li>• Factory-trained certified technicians</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">Experience KONE Excellence</h2>
                        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                            Discover why KONE is the world&apos;s leading elevator and escalator company with innovative People Flow® solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                Request KONE Quote
                            </button>
                            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                                Download KONE Brochure
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
