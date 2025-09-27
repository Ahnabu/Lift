"use client";

import { useState } from "react";
import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ZoomIn, X } from "lucide-react";

interface LiftImage {
  id: string;
  url: string;
  title: string;
  description?: string;
}

interface LiftImageGalleryProps {
  images: LiftImage[];
  brand: string;
}

export function LiftImageGallery({ images, brand }: LiftImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  // ESC key support for closing lightbox
  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      }
    };
    
    if (isLightboxOpen) {
      document.addEventListener('keydown', handleEsc);
      return () => document.removeEventListener('keydown', handleEsc);
    }
  }, [isLightboxOpen]);

  const nextLightboxImage = () => {
    setLightboxIndex((prev) => (prev + 1) % images.length);
  };

  const prevLightboxImage = () => {
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) {
    return (
      <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
        <p className="text-gray-500">No images available</p>
      </div>
    );
  }

  // Debug logging
  console.log(
    `LiftImageGallery: ${brand} - ${images.length} images loaded`,
    images
  );

  return (
    <div className="space-y-4 relative z-0]">
      {/* Main Image Display */}
      <div className="relative">
        <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src={images[selectedImage]?.url || "/dummy_rectangular.jfif"}
            alt={images[selectedImage]?.title || `${brand} Lift`}
            fill
            className="object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => openLightbox(selectedImage)}
            priority
          />
          <div className="absolute top-4 right-4 flex space-x-2">
            <button
              onClick={() => openLightbox(selectedImage)}
              className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
              title="View Full Size"
            >
              <ZoomIn size={20} />
            </button>
            
          </div>
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              title="Previous Image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              title="Next Image"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {selectedImage + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
                index === selectedImage
                  ? "border-blue-500 ring-2 ring-blue-200"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.url}
                alt={image.title}
                width={120}
                height={120}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )}

      {/* Image Description */}
      {images[selectedImage]?.description && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">
            {images[selectedImage]?.title}
          </h3>
          <p className="text-gray-600 text-sm">
            {images[selectedImage]?.description}
          </p>
        </div>
      )}

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-[1000] bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            <div className="relative w-full h-full max-w-5xl max-h-[90vh]">
              <Image
                src={images[lightboxIndex]?.url || "/dummy_rectangular.jfif"}
                alt={images[lightboxIndex]?.title || `${brand} Lift`}
                fill
                className="object-contain pointer-events-none"
                priority
              />
            </div>

            {/* Close Button - Enhanced */}
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="fixed top-4 right-4 bg-black text-white p-3 rounded-full  transition-colors z-[999999] shadow-lg border-2 border-white/20"
              title="Close (ESC)"
            >
              <X size={20} />
            </button>
            
            {/* Close on Background Click */}
            <div 
              className="absolute inset-0 cursor-pointer z-[99990]"
              onClick={() => setIsLightboxOpen(false)}
              title="Click to close"
            />

            {/* Navigation in Lightbox */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevLightboxImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors z-[99998]"
                  title="Previous"
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  onClick={nextLightboxImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors z-[99998]"
                  title="Next"
                >
                  <ChevronRight size={28} />
                </button>
              </>
            )}

            {/* Image Info in Lightbox */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 text-white p-4 rounded-lg z-[10000] backdrop-blur-sm">
              <h3 className="font-semibold text-lg mb-1">
                {images[lightboxIndex]?.title}
              </h3>
              {images[lightboxIndex]?.description && (
                <p className="text-sm text-gray-200">
                  {images[lightboxIndex]?.description}
                </p>
              )}
              <p className="text-xs text-gray-300 mt-2">
                Image {lightboxIndex + 1} of {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
