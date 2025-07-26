"use client"

import { Clock, Users, Settings } from "lucide-react"
import { services } from "@/lib/data"

const iconMap = {
    Clock,
    Users,
    Settings,
}

export function ServicesSection() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Our Services
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Comprehensive support and maintenance services to keep your systems running smoothly
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service) => {
                        const IconComponent = iconMap[service.icon as keyof typeof iconMap]

                        return (
                            <div key={service.id} className="text-center group">
                                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                                    <IconComponent className="h-8 w-8 text-blue-600" />
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    {service.title}
                                </h3>

                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {service.description}
                                </p>

                                <ul className="space-y-2">
                                    {service.features.map((feature, index) => (
                                        <li key={index} className="text-sm text-gray-500 flex items-center justify-center">
                                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
