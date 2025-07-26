"use client"

import Link from "next/link"
import { products } from "@/lib/data"

export function ProductsSection() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Our Products
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Comprehensive solutions for all your building infrastructure needs
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {products.map((product) => (
                        <Link
                            key={product.id}
                            href={product.href}
                            className="group block">
                            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                                <div className="aspect-square bg-gray-100 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                                        <span className="text-white text-4xl font-bold">
                                            {product.title.charAt(0)}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-4 text-center">
                                    <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                        {product.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 line-clamp-3">
                                        {product.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
