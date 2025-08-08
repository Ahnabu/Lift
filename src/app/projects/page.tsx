"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/data";
import { X, ZoomIn, ZoomOut, Download, Share2, Maximize, ChevronLeft, ChevronRight } from 'lucide-react';

const categories = ["All", "Lift", "Forklift", "Generator", "HVAC"];

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
        console.log('Error sharing:', err);
      }
    } else {
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

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
        (project) =>
          project.category.toLowerCase() === activeCategory.toLowerCase()
      );

  const images = filteredProjects.map(project => ({
    src: project.image,
    alt: project.title,
    title: project.title
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
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center moving-bg opacity-40"
          style={{
            backgroundImage: "url('/dummy_background.jpg')",
          }}
        />
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">OUR PROJECTS</h1>
          <p className="text-xl opacity-90">Our successful project installations</p>
        </div>



        {/* Animated particles effect */}
        <div className="absolute inset-0 overflow-hidden z-5">
          <div
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
            style={{ top: "20%", left: "10%", animationDelay: "0s" }}
          />
          <div
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
            style={{ top: "40%", left: "80%", animationDelay: "1s" }}
          />
          <div
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
            style={{ top: "60%", left: "30%", animationDelay: "2s" }}
          />
          <div
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
            style={{ top: "80%", left: "70%", animationDelay: "3s" }}
          />
        </div>
      </section>
      <div className="max-w-[1320px] mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li><Link href="/" className="hover:text-orange-400">HOME</Link></li>
              <li className="text-gray-400">&gt;</li>
              <li className="text-gray-800 font-medium">PROJECTS</li>
            </ol>
          </nav>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeCategory === category
                    ? "bg-orange-500 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-orange-100 hover:text-orange-600 shadow-md"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group cursor-pointer h-full"
                  onClick={() => openLightbox(index)}
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                    <div className="aspect-[4/3] bg-gray-100 overflow-hidden relative flex-shrink-0">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {project.category}
                        </span>
                      </div>
                      {/* Status Badge */}
                      {project.completed && (
                        <div className="absolute top-4 right-4">
                          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Completed
                          </span>
                        </div>
                      )}
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
                          {project.title}
                        </h3>
                      </div>
                      <div className="space-y-1">
                        {project.location && (
                          <p className="text-sm text-gray-600 line-clamp-1">
                            📍 {project.location}
                          </p>
                        )}

                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="bg-white rounded-lg shadow-lg p-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">No Projects Found</h3>
                <p className="text-gray-600 mb-6">
                  No projects found for the selected category. Please try a different filter.
                </p>
                <button
                  onClick={() => setActiveCategory("All")}
                  className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Show All Projects
                </button>
              </div>
            </div>
          )}

          {/* Contact Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Start Your Project?</h2>
            <p className="text-gray-600 mb-6">
              Contact our experienced team to discuss your requirements and get a customized solution for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium"
              >
                Get Free Consultation
              </Link>
              <Link
                href="tel:+8801920-883427"
                className="bg-gray-100 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                Call: +8801920-883427
              </Link>
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
