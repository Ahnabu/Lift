'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ProjectData } from '@/data/projects';
import { X, ZoomIn, ZoomOut, Download, Share2, Maximize, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface ProjectGalleryProps {
    projects: ProjectData[];
    title: string;
    category: string;
}

interface CustomLightboxProps {
    isOpen: boolean;
    images: { src: string; alt: string; title: string }[];
    currentIndex: number;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
}

function CustomLightbox({ isOpen, images, currentIndex, onClose, onNext, onPrev }: CustomLightboxProps) {
    const [zoom, setZoom] = useState(1);
    const [isFullscreen, setIsFullscreen] = useState(false);

    if (!isOpen) return null;

    const currentImage = images[currentIndex];

    const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.5, 3));
    const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.5, 0.5));
    const handleReset = () => setZoom(1);

    const handleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = currentImage.src;
        link.download = `${currentImage.title}.jpg`;
        link.click();
    };

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: currentImage.title,
                    text: `Check out this project: ${currentImage.title}`,
                    url: window.location.href
                });
            } catch (err) {
                console.error('Share failed');
            }
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    return (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
            {/* Header Controls */}
            <div className="absolute top-4 right-4 z-10 flex items-center space-x-2">
                <button
                    onClick={handleZoomOut}
                    className="p-2 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-colors"
                >
                    <ZoomOut size={20} />
                </button>
                <button
                    onClick={handleZoomIn}
                    className="p-2 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-colors"
                >
                    <ZoomIn size={20} />
                </button>
                <button
                    onClick={handleReset}
                    className="px-3 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white text-sm transition-colors"
                >
                    {Math.round(zoom * 100)}%
                </button>
                <button
                    onClick={handleDownload}
                    className="p-2 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-colors"
                >
                    <Download size={20} />
                </button>
                <button
                    onClick={handleShare}
                    className="p-2 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-colors"
                >
                    <Share2 size={20} />
                </button>
                <button
                    onClick={handleFullscreen}
                    className="p-2 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-colors"
                >
                    <Maximize size={20} />
                </button>
                <button
                    onClick={onClose}
                    className="p-2 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-colors"
                >
                    <X size={20} />
                </button>
            </div>

            {/* Navigation Arrows */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={onPrev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={onNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
                    >
                        <ChevronRight size={24} />
                    </button>
                </>
            )}

            {/* Image Container */}
            <div className="relative w-full h-full flex items-center justify-center p-16">
                <div
                    className="relative max-w-full max-h-full transition-transform duration-200"
                    style={{ transform: `scale(${zoom})` }}
                >
                    <Image
                        src={currentImage.src}
                        alt={currentImage.alt}
                        width={1200}
                        height={800}
                        className="max-w-full max-h-full object-contain"
                        priority
                    />
                </div>
            </div>

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 text-center">
                <h3 className="text-white text-lg font-semibold mb-1">{currentImage.title}</h3>
                <p className="text-white/80 text-sm">
                    {currentIndex + 1} of {images.length}
                </p>
            </div>

            {/* Background Click to Close */}
            <div
                className="absolute inset-0 -z-10"
                onClick={onClose}
            />
        </div>
    );
}

export default function ProjectGallery({ projects, title, category }: ProjectGalleryProps) {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const images = projects.map(project => ({
        src: project.image,
        alt: project.name,
        title: project.name
    }));

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    const nextImage = () => {
        setLightboxIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section with Moving Background */}
            <div className="relative h-96 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('/dummy_background.jpg')] bg-cover bg-center moving-bg opacity-40"></div>



                <div className="relative max-w-[1320px] mx-auto px-4 h-full flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-bold mb-4">{title}</h1>
                        <p className="text-xl opacity-90">Our successful project installations</p>
                    </div>
                </div>
            </div>

            <div className="max-w-[1320px] mx-auto px-4 py-8">
                <div className="max-w-6xl mx-auto">
                    {/* Breadcrumb */}
                    <nav className="mb-8">
                        <ol className="flex items-center space-x-2 text-sm text-gray-600">
                            <li><Link href="/" className="hover:text-orange-400">HOME</Link></li>
                            <li className="text-gray-400">&gt;</li>
                            <li className="text-gray-800 font-medium uppercase">{category}</li>
                        </ol>
                    </nav>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                className="group cursor-pointer h-full"
                                onClick={() => openLightbox(index)}
                            >
                                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-gray-100 overflow-hidden relative flex-shrink-0">
                                        <Image
                                            src={project.image}
                                            alt={project.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        {/* Overlay on hover */}
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="bg-white/90 rounded-full p-3">
                                                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 text-center flex-grow flex flex-col justify-between min-h-[140px]">
                                        <div className="flex-grow">
                                            <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-orange-500 transition-colors line-clamp-2 min-h-[3.5rem]">
                                                {project.name}
                                            </h3>
                                        </div>
                                        <div className="space-y-1">
                                            {project.location && (
                                                <p className="text-sm text-gray-600 line-clamp-1">
                                                    📍 {project.location}
                                                </p>
                                            )}
                                            {project.completedDate && (
                                                <p className="text-sm text-gray-500">
                                                    Completed: {project.completedDate}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Section */}
                    <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Start Your Project?</h2>
                        <p className="text-gray-600 mb-6">
                            Contact our experienced team to discuss your requirements and get a customized solution for your project.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/contact-us"
                                className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium"
                            >
                                Get Free Consultation
                            </a>
                            <a
                                href="tel:+0800-7777777"
                                className="bg-gray-100 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                            >
                                Call: +0800-7777777
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Lightbox */}
            <CustomLightbox
                isOpen={lightboxOpen}
                images={images}
                currentIndex={lightboxIndex}
                onClose={() => setLightboxOpen(false)}
                onNext={nextImage}
                onPrev={prevImage}
            />
        </div>
    );
}
