"use client"
import React, { useState, KeyboardEvent } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

export const Gallery = () => {
  // Extended image array with 20+ images (first 6 shown initially)
  const images = [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    "https://images.unsplash.com/photo-1584132967334-10e028bd69f7",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
    "https://images.unsplash.com/photo-1564501049412-61c2a3083791",
    "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9",
    "https://images.unsplash.com/photo-1568084680786-a84f91d1153c",
    // Add more image URLs here...
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const displayedImages = showAll ? images : images.slice(0, 6);

  const navigateImage = (direction: 'next' | 'prev') => {
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

  return (
    <section id="gallery" className="bg-gray-50 py-12">
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
                setCurrentImageIndex(index);
                setIsModalOpen(true);
              }}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative">
                <img
                  src={`${imageUrl}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                  alt={`Hotel Image ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && images.length > 6 && (
          <div className="text-center mt-8">
            <Button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Show More Images
            </Button>
          </div>
        )}

        {/* Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent 
            className="max-w-4xl w-full bg-black/95 border-none p-0"
            onKeyDown={handleKeyPress}
          >
            <DialogTitle className="sr-only">
              Hotel Image {currentImageIndex + 1} of {images.length}
            </DialogTitle>
            
            <div className="relative h-[80vh] flex items-center justify-center">
              <img
                src={`${images[currentImageIndex]}?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80`}
                alt={`Hotel Image ${currentImageIndex + 1}`}
                className="max-h-full max-w-full object-contain"
              />
              
              {/* Navigation Arrows */}
              <Button
                variant="ghost"
                className="absolute left-2 p-2 text-white hover:bg-black/50"
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
                className="absolute right-2 p-2 text-white hover:bg-black/50"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('next');
                }}
                aria-label="Next image"
              >
                <ChevronRight className="w-8 h-8" />
              </Button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/75 px-4 py-2 rounded-full text-white text-sm">
                {currentImageIndex + 1} / {images.length}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};