"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { sliderItems } from "@/lib/data"
import Link from "next/link"

export function HeroSlider() {
    const [currentSlide, setCurrentSlide] = React.useState(0)

    const nextSlide = React.useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % sliderItems.length)
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
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                            style={{
                                backgroundImage: `url('https://propertylifts.com/images/sections/652823d0cc5a4db6a4ae66c79de25c4c/lifting-and-movingForklift-1470X754px-min.jpg')`
                            }}
                        >
                            <div className="absolute inset-0 bg-black/40" />
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
                                    <Button asChild size="lg" className="bg-red-600 text-white hover:bg-red-700 px-8 py-3 text-lg font-semibold">
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

            {/* Dots Indicator */}
            {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
                {sliderItems.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-4 h-4 rounded-full border-2 border-white transition-all duration-300 ${
                            index === currentSlide
                                ? "bg-white scale-110"
                                : "bg-transparent hover:bg-white/30"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div> */}
        </section>
    );
}