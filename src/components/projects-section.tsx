"use client"

import { projects } from "@/lib/data"
import { MapPin, CheckCircle } from "lucide-react"

export function ProjectsSection() {
    return (
        <section className="py-8 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Our Projects
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Successfully completed projects across Bangladesh showcasing our expertise and reliability
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <div className="aspect-video bg-gradient-to-br from-blue-500 to-blue-700 relative">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-white text-2xl font-bold">
                                        {project.title.split(' ').map(word => word.charAt(0)).join('').slice(0, 3)}
                                    </span>
                                </div>
                                {project.completed && (
                                    <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs flex items-center">
                                        <CheckCircle className="h-3 w-3 mr-1" />
                                        Completed
                                    </div>
                                )}
                            </div>

                            <div className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                                        {project.category}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                                    {project.title}
                                </h3>

                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                {project.location && (
                                    <div className="flex items-center text-sm text-gray-500">
                                        <MapPin className="h-4 w-4 mr-1" />
                                        {project.location}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
