"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/data/projects";
import {
  X,
  ZoomIn,
  ZoomOut,
  Download,
  Share2,
  Maximize,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const categories = ["All", "Lift"];

interface CustomLightboxProps {
  isOpen: boolean;
  images: { src: string; alt: string; title: string }[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

function CustomLightbox({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: CustomLightboxProps) {
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    // Handle keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          onPrev();
          break;
        case "ArrowRight":
          onNext();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoom((prev) => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoom((prev) => Math.max(prev - 0.5, 0.5));
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoom(1);
  };

  const handleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    const link = document.createElement("a");
    link.href = currentImage.src;
    link.download = `${currentImage.title}.jpg`;
    link.click();
  };

  const handleShare = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      try {
        await navigator.share({
          title: currentImage.title,
          text: `Check out this project: ${currentImage.title}`,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNext();
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onPrev();
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Header Controls */}
      <div className="absolute top-4 right-4 z-20 flex items-center space-x-2">
        <button
          aria-label="Zoom Out"
          title="Zoom Out"
          onClick={handleZoomOut}
          className="p-2 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-colors"
        >
          <ZoomOut size={20} />
        </button>
        <button
          aria-label="Zoom In"
          title="Zoom In"
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
          aria-label="Download Image"
          onClick={handleDownload}
          className="p-2 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-colors"
        >
          <Download size={20} />
        </button>
        <button
          aria-label="Share Image"
          onClick={handleShare}
          className="p-2 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-colors"
        >
          <Share2 size={20} />
        </button>
        <button
          aria-label="Toggle Fullscreen"
          onClick={handleFullscreen}
          className="p-2 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-colors"
        >
          <Maximize size={20} />
        </button>
        <button
          aria-label="Close Lightbox"
          onClick={handleClose}
          className="p-2 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      {/* Navigation Arrows - FIXED */}
      {images.length > 1 && (
        <>
          <button
            aria-label="Previous Image"
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            aria-label="Next Image"
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
            style={{ right: "1rem" }}
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* Image Container - IMPROVED */}
      <div
        className="relative w-full h-full flex items-center justify-center p-16"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="relative transition-transform duration-200 max-w-full max-h-full"
          style={{
            transform: `scale(${zoom})`,
          }}
        >
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            width={0}
            height={0}
            sizes="90vw"
            className="w-auto h-auto max-w-[90vw] max-h-[90vh] object-contain"
            priority
          />
        </div>
      </div>

      {/* Image Info */}
      <div className="absolute bottom-4 left-4 right-4 text-center z-10">
        <h3 className="text-white text-lg font-semibold mb-1">
          {currentImage.title}
        </h3>
        <p className="text-white/80 text-sm">
          {currentIndex + 1} of {images.length}
        </p>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter(
          (project) =>
            project.category.toLowerCase() === activeCategory.toLowerCase()
        );

  const images = filteredProjects.map((project) => ({
    src: project.image,
    alt: project.name,
    title: project.name,
  }));


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
          className="absolute inset-0 bg-cover bg-center moving-bg "
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/brotherslift/image/upload/v1758993190/IMG-20250927-WA0008_ldjlim.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4 opacity-95">OUR PROJECTS</h1>
          <p className="text-xl opacity-90">
            Our successful project installations
          </p>
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
              <li>
                <Link href="/" className="hover:text-orange-400">
                  HOME
                </Link>
              </li>
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
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-orange-500 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-orange-100 hover:text-orange-600 shadow-md"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid - IMPROVED IMAGE HANDLING */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {filteredProjects.map((project, index) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.id}`}
                  className="group cursor-pointer h-full block"
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                    <div className="aspect-[4/3] bg-gray-100 overflow-hidden relative flex-shrink-0">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {project.category}
                        </span>
                      </div>
                      {/* Status Badge */}
                      {project.completedDate && (
                        <div className="absolute top-4 right-4 z-10">
                          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Completed
                          </span>
                        </div>
                      )}
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white/90 rounded-full p-3">
                            <svg
                              className="w-6 h-6 text-gray-800"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
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
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="bg-white rounded-lg shadow-lg p-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  No Projects Found
                </h3>
                <p className="text-gray-600 mb-6">
                  No projects found for the selected category. Please try a
                  different filter.
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-600 mb-6">
              Contact our experienced team to discuss your requirements and get
              a customized solution for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium"
              >
                Get Free Consultation
              </Link>
              <Link
                href="tel:+8801111-111111"
                className="bg-gray-100 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                Call: +8801111-111111
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
