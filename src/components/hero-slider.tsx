"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { sliderItems } from "@/lib/data"
import Link from "next/link"

export function HeroSlider() {
    const [currentSlide, setCurrentSlide] = React.useState(0)

    const nextSlide = React.useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % sliderItems.length)
    }, [])

    const prevSlide = React.useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + sliderItems.length) % sliderItems.length)
    }, [])

    React.useEffect(() => {
        const timer = setInterval(nextSlide, 5000) // Auto-advance every 5 seconds
        return () => clearInterval(timer)
    }, [nextSlide])

    return (
        <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
            {/* Slides */}
            <div className="relative h-full">
                {sliderItems.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        {/* Background */}
                        <div className="absolute inset-0 hero-gradient">
                            <div className="absolute inset-0 bg-black/30" />
                        </div>

                        {/* Content */}
                        <div className="relative h-full flex items-center">
                            <div className="container mx-auto px-4">
                                <div className="max-w-3xl text-white">
                                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
                                        {slide.title}
                                        {slide.subtitle && (
                                            <span className="block text-yellow-400">{slide.subtitle}</span>
                                        )}
                                    </h1>
                                    <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl">
                                        {slide.description}
                                    </p>
                                    <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-white/90">
                                        <Link href={slide.href}>
                                            {slide.ctaText}
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
                aria-label="Previous slide"
            >
                <ChevronLeft className="h-6 w-6" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
                aria-label="Next slide"
            >
                <ChevronRight className="h-6 w-6" />
            </button>
            {/* Dots Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
                {sliderItems.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
