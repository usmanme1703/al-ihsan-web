'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function GalleryPage() {
  const TOTAL_IMAGES = 131;
  const BATCH_SIZE = 12; // Loads 12 at a time
  
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);

  // Creates an array from 1 to the current visible count
  const imagesToShow = Array.from({ length: visibleCount }, (_, i) => i + 1);

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + BATCH_SIZE, TOTAL_IMAGES));
  };

  return (
    <main className="min-h-screen bg-ihsan-light pb-20">
      {/* Header */}
      <header className="bg-white border-b py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-ihsan-green uppercase tracking-tighter mb-4">
          Media <span className="text-ihsan-gold">Archives</span>
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto italic font-serif leading-relaxed">
          A comprehensive look at our journey in building a generation of 
          Muslims achieving excellence and perfection.
        </p>
      </header>

      {/* Gallery Grid */}
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
              {/* Subtle Overlay on Hover */}
              <div className="absolute inset-0 bg-ihsan-green/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < TOTAL_IMAGES && (
          <div className="mt-20 text-center">
            <button 
              onClick={loadMore}
              className="bg-ihsan-green text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-ihsan-dark hover:scale-105 transition-all shadow-xl shadow-green-900/20"
            >
              Show More Photos
            </button>
            <p className="text-gray-400 mt-4 text-sm font-medium uppercase tracking-widest">
              Viewing {visibleCount} of {TOTAL_IMAGES}
            </p>
          </div>
        )}
      </div>

      {/* Back to Home CTA */}
      <section className="max-w-3xl mx-auto px-6 text-center mt-10">
        <Link href="/" className="text-ihsan-green font-bold hover:text-ihsan-gold transition flex items-center justify-center gap-2">
          ← Back to Homepage
        </Link>
      </section>
    </main>
  );
}