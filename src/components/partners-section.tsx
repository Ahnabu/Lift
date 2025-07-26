"use client"

import { partners } from "@/lib/data"

export function PartnersSection() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Global Partners
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Trusted partnerships with world-leading brands to deliver exceptional quality and reliability
                    </p>
                </div>

                {/* Category-wise Partners */}
                <div className="space-y-12">
                    {/* Generator Partners */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-700 text-center mb-6">
                            Global Partners of Generator
                        </h3>
                        <div className="flex justify-center items-center space-x-8 overflow-x-auto pb-4">
                            {partners.filter(p => p.category === 'generator').map((partner) => (
                                <div key={partner.id} className="flex-shrink-0 bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                                    <div className="w-24 h-16 bg-white rounded border flex items-center justify-center">
                                        <span className="text-sm font-bold text-gray-600">{partner.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* HVAC Partners */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-700 text-center mb-6">
                            Global Partners of HVAC
                        </h3>
                        <div className="flex justify-center items-center space-x-8 overflow-x-auto pb-4">
                            {partners.filter(p => p.category === 'hvac').map((partner) => (
                                <div key={partner.id} className="flex-shrink-0 bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                                    <div className="w-24 h-16 bg-white rounded border flex items-center justify-center">
                                        <span className="text-sm font-bold text-gray-600">{partner.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Street Light Partners */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-700 text-center mb-6">
                            Global Partners of Street Light
                        </h3>
                        <div className="flex justify-center items-center space-x-8 overflow-x-auto pb-4">
                            {partners.filter(p => p.category === 'street-light').map((partner) => (
                                <div key={partner.id} className="flex-shrink-0 bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                                    <div className="w-24 h-16 bg-white rounded border flex items-center justify-center">
                                        <span className="text-sm font-bold text-gray-600">{partner.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Lift Partners */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-700 text-center mb-6">
                            Global Partners of Lift
                        </h3>
                        <div className="flex justify-center items-center space-x-8 overflow-x-auto pb-4">
                            {partners.filter(p => p.category === 'lift').map((partner) => (
                                <div key={partner.id} className="flex-shrink-0 bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                                    <div className="w-24 h-16 bg-white rounded border flex items-center justify-center">
                                        <span className="text-sm font-bold text-gray-600">{partner.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Forklift Partners */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-700 text-center mb-6">
                            Global Partners of Forklift
                        </h3>
                        <div className="flex justify-center items-center space-x-8 overflow-x-auto pb-4">
                            {partners.filter(p => p.category === 'forklift').map((partner) => (
                                <div key={partner.id} className="flex-shrink-0 bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                                    <div className="w-24 h-16 bg-white rounded border flex items-center justify-center">
                                        <span className="text-sm font-bold text-gray-600">{partner.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
