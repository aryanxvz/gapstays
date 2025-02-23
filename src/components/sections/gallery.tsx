"use client"
import React, { useState, KeyboardEvent } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from 'lucide-react';
import NextImage from 'next/image';

export const Gallery = () => {
  const images = [
    "/gallery/Gapstays-2.jpg", //1
    "/gallery/Gapstays-4.jpg", //2
    "/gallery/Gapstays-8.jpg", //3
    "/gallery/Gapstays-22.jpg", //4
    "/gallery/Gapstays-24.jpg", //5
    "/gallery/Gapstays-3.jpg", //6
    "/gallery/Gapstays-5.jpg",
    "/gallery/Gapstays-6.jpg",
    "/gallery/Gapstays-7.jpg",
    "/gallery/Gapstays-11.jpg",
    "/gallery/Gapstays-12.jpg",
    "/gallery/Gapstays-20.jpg",
    "/gallery/Gapstays-15.jpg",
    "/gallery/Gapstays-17.jpg",
    "/gallery/Gapstays-14.jpg",
    "/gallery/Gapstays-9.jpg",
    "/gallery/Gapstays-21.jpg",
    "/gallery/Gapstays-10.jpg",
    "/gallery/Gapstays-26.jpg",
    "/gallery/Gapstays-27.jpg",
    "/gallery/Gapstays-28.jpg",
    "/gallery/Gapstays-29.jpg",
    "/gallery/Gapstays-36.jpg",
    "/gallery/Gapstays-30.jpg",
    "/gallery/Gapstays-31.jpg",
    "/gallery/Gapstays-32.jpg",
    "/gallery/Gapstays-34.jpg",
    "/gallery/Gapstays-38.jpg",
    "/gallery/Gapstays-37.jpg",
    "/gallery/Gapstays-39.jpg",
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [modalImageLoading, setModalImageLoading] = useState(true);

  const displayedImages = showAll ? images : images.slice(0, 6);

  const navigateImage = (direction: 'next' | 'prev') => {
    setModalImageLoading(true);
    setCurrentImageIndex((prevIndex) => {
      if (direction === 'next') {
        return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
      }
    });
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') navigateImage('prev');
    if (e.key === 'ArrowRight') navigateImage('next');
    if (e.key === 'Escape') setIsModalOpen(false);
  };

  const handleToggleImages = () => {
    setShowAll(!showAll);
    if (showAll) {
      document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="gallery" className="bg-gray-50 py-12 pb-20 scroll-mt-16">
      <div className="mx-auto max-w-6xl 2xl:max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Gallery Header */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black pb-4">
            Our Hotel Gallery
          </h2>
          <p className="text-gray-600 mb-6">
            Explore the beauty of our hotel through these images
          </p>
          <div className="w-16 sm:w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedImages.map((imageUrl, index) => (
            <div
              key={index}
              onClick={() => {
                setModalImageLoading(true);
                setCurrentImageIndex(index);
                setIsModalOpen(true);
              }}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative aspect-[4/3] w-full">
                <NextImage
                  src={imageUrl}
                  alt={`Hotel Image ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                    isLoading ? 'opacity-0' : 'opacity-100'
                  }`}
                  onLoadingComplete={() => setIsLoading(false)}
                  priority={index < 6}
                  quality={75}
                />
                <div className="absolute inset-0 hover:cursor-pointer bg-neutral-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Toggle Images Button */}
        {images.length > 6 && (
          <div className="text-center mt-8">
            <Button
              onClick={handleToggleImages}
              className="inline-flex items-center gap-2"
            >
              {showAll ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  Collapse Images
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  Show All 30 Images
                </>
              )}
            </Button>
          </div>
        )}

        {/* Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent 
            className="max-w-4xl w-full bg-neutral-900/95 border-none p-0"
            onKeyDown={handleKeyPress}
          >
            <DialogTitle className="sr-only">
              Hotel Image {currentImageIndex + 1} of {images.length}
            </DialogTitle>
            
            <div className="relative h-[80vh] flex items-center justify-center">
              <div className="relative w-full h-full">
                <NextImage
                  src={images[currentImageIndex]}
                  alt={`Hotel Image ${currentImageIndex + 1}`}
                  fill
                  sizes="100vw"
                  className={`object-contain transition-opacity duration-300 ${
                    modalImageLoading ? 'opacity-0' : 'opacity-100'
                  }`}
                  onLoadingComplete={() => setModalImageLoading(false)}
                  quality={90}
                />
              </div>
              
              {/* Loading indicator */}
              {modalImageLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              
              {/* Navigation Arrows */}
              <Button
                variant="ghost"
                className="absolute left-2 p-2 text-white hover:bg-neutral-900/50"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('prev');
                }}
                aria-label="Previous image"
              >
                <ChevronLeft className="w-8 h-8" />
              </Button>
              
              <Button
                variant="ghost"
                className="absolute right-2 p-2 text-white hover:bg-neutral-900/50"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('next');
                }}
                aria-label="Next image"
              >
                <ChevronRight className="w-8 h-8" />
              </Button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-neutral-900/75 px-4 py-2 rounded-full text-white text-sm">
                {currentImageIndex + 1} / {images.length}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};