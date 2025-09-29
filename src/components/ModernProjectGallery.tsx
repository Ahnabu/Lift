"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  id: string;
  url: string;
  title: string;
  description: string;
}

interface ModernProjectGalleryProps {
  images: GalleryImage[];
  projectName: string;
}

export function ModernProjectGallery({ images }: ModernProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  if (!images || images.length === 0) {
    return (
      <div className="bg-gray-100 rounded-xl p-8 text-center">
        <p className="text-gray-600">Project images coming soon...</p>
      </div>
    );
  }

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <>
      {/* Modern Gallery Grid - Similar to Hotel Room Layout */}
      <div className="space-y-3">
        {/* Main Image */}
        {images[0] && (
          <div
            className="relative aspect-[5/2] rounded-lg overflow-hidden cursor-pointer group shadow-sm border border-gray-200"
            onClick={() => openLightbox(0)}
          >
            <Image
              src={images[0].url}
              alt={images[0].title}
              fill
              className="object-cover transition-transform duration-200 group-hover:scale-105"
              sizes="(max-width: 768px) 40vw, 30vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-200 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 max-w-[80%]">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {images[0].title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Thumbnail Grid */}
        {images.length > 1 && (
          <div className="grid grid-cols-3 gap-2">
            {images.slice(1, 4).map((image, index) => (
              <div
                key={image.id}
                className="relative aspect-square rounded-md overflow-hidden cursor-pointer group shadow-sm border border-gray-200"
                onClick={() => openLightbox(index + 1)}
              >
                <Image
                  src={image.url}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-200 group-hover:scale-105"
                  sizes="(max-width: 768px) 33vw, 16vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-200 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-center px-1">
                    <div className="bg-white/90 backdrop-blur-sm rounded px-2 py-1">
                      <p className="text-xs font-medium text-gray-900 truncate">
                        {image.title}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Show "+X more" overlay on last thumbnail if more images exist */}
                {index === 2 && images.length > 4 && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <div className="text-white text-center">
                      <p className="text-sm font-semibold">
                        +{images.length - 4}
                      </p>
                      <p className="text-xs">more</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* View All Images Button */}
        {images.length > 4 && (
          <button
            onClick={() => openLightbox(0)}
            className="w-full py-2 bg-gray-900 text-white rounded-md font-medium hover:bg-gray-800 transition-colors text-sm"
          >
            View All {images.length} Images
          </button>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            aria-label="Close gallery"
            className="absolute top-4 right-4 z-20 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
          >
            <X size={20} />
          </button>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextImage}
                aria-label="Next image"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          {/* Image Container */}
          <div className="relative max-w-3xl max-h-[75vh] w-full">
            <Image
              src={images[selectedImage].url}
              alt={images[selectedImage].title}
              width={0}
              height={0}
              sizes="80vw"
              className="w-full h-auto max-h-[75vh] object-contain rounded-md"
              priority
            />
          </div>

          {/* Image Info */}
          <div className="absolute bottom-4 left-4 right-4 text-center z-10">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 max-w-sm mx-auto">
              <h3 className="text-gray-900 text-sm font-semibold mb-1">
                {images[selectedImage].title}
              </h3>
              <p className="text-gray-600 text-xs mb-1">
                {images[selectedImage].description}
              </p>
              <p className="text-gray-500 text-xs">
                {selectedImage + 1} of {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
