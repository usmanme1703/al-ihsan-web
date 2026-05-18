'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function GalleryPage() {
  const TOTAL_IMAGES = 131;
  const BATCH_SIZE = 12; // Number of images to show per "Load More" click
  
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);

  // Generates an array of numbers from 1 to the current visible count
  const imagesToShow = Array.from({ length: visibleCount }, (_, i) => i + 1);

  const loadMore = () => {
    // Increments the count but caps it at 131
    setVisibleCount(prev => Math.min(prev + BATCH_SIZE, TOTAL_IMAGES));
  };

  return (
    <main className="min-h-screen bg-ihsan-light pb-20">
      {/* 1. Header Section */}
      <header className="bg-white border-b py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-ihsan-green uppercase tracking-tighter mb-4">
          Media <span className="text-ihsan-gold">Archives</span>
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto italic font-serif leading-relaxed text-lg">
          A visual journey through Al-Ihsan Noble Scholars, documenting our path 
          toward academic and spiritual perfection.
        </p>
      </header>

      {/* 2. Gallery Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {imagesToShow.map((num) => (
            <div 
              key={num} 
              className="group relative aspect-square bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              <img 
                src={`/gallery/${num}.jpg`} 
                alt={`Al-Ihsan Moment ${num}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              {/* Green Overlay on Hover */}
              <div className="absolute inset-0 bg-ihsan-green/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              {/* Image Number Badge (Optional, remove if you don't like it) */}
              <div className="absolute bottom-4 right-6 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-ihsan-green opacity-0 group-hover:opacity-100 transition-opacity">
                #{num}
              </div>
            </div>
          ))}
        </div>

        {/* 3. Load More Interaction */}
        {visibleCount < TOTAL_IMAGES && (
          <div className="mt-20 text-center">
            <button 
              onClick={loadMore}
              className="bg-ihsan-green text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-ihsan-dark hover:scale-105 transition-all shadow-xl shadow-green-900/20 active:scale-95"
            >
              Load More Photos
            </button>
            <p className="text-gray-400 mt-6 text-sm font-medium uppercase tracking-widest">
              Showing {visibleCount} of {TOTAL_IMAGES} Moments
            </p>
          </div>
        )}
      </div>

      {/* 4. Footer Navigation */}
      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-gray-200">
        <Link 
          href="/" 
          className="text-ihsan-green font-bold hover:text-ihsan-gold transition flex items-center justify-center gap-2 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Homepage
        </Link>
      </div>
    </main>
  );
}