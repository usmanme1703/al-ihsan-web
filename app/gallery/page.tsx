'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Quote } from 'lucide-react';

export default function GalleryPage() {
  const TOTAL_IMAGES = 82;
  const BATCH_SIZE = 12; // Number of images to show per "Load More" click

  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);

  // Generates an array of numbers from 1 to the current visible count
  const imagesToShow = Array.from({ length: visibleCount }, (_, i) => i + 1);

  const loadMore = () => {
    // Increments the count but caps it at 82
    setVisibleCount(prev => Math.min(prev + BATCH_SIZE, TOTAL_IMAGES));
  };

  return (
    <main className="min-h-screen bg-ihsan-cream pb-20">
      {/* 1. Header Section */}
      <header className="pt-20 pb-16 px-6 max-w-7xl mx-auto">
        <p className="text-ihsan-gold font-bold text-xs uppercase tracking-[0.25em] mb-4">Media Gallery</p>
        <h1 className="font-serif text-4xl md:text-5xl text-ihsan-dark mb-5">
          Our Community in Focus
        </h1>
        <span className="block w-16 h-[3px] bg-ihsan-gold mb-6" />
        <p className="text-ihsan-dark/60 max-w-xl leading-relaxed text-lg">
          A visual journey through Al-Ihsan Noble Scholars, capturing life on campus and moments of
          academic and spiritual growth.
        </p>
      </header>

      {/* 2. Featured Mosaic */}
      <div className="max-w-7xl mx-auto px-6 mb-16 space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 rounded-[2.5rem] overflow-hidden shadow-sm h-64 md:h-80">
            <img src="/gallery/10.jpg" alt="Al-Ihsan community" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-[2.5rem] overflow-hidden shadow-sm h-64 md:h-80">
            <img src="/gallery/23.jpg" alt="Al-Ihsan student" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-[2.5rem] overflow-hidden shadow-sm h-56">
            <img src="/gallery/34.jpg" alt="Al-Ihsan campus" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-[2.5rem] overflow-hidden shadow-sm h-56">
            <img src="/gallery/47.jpg" alt="Al-Ihsan campus" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-[2.5rem] bg-ihsan-green text-white p-8 h-56 flex flex-col justify-center">
            <Quote className="text-ihsan-gold mb-4" size={26} />
            <p className="font-serif italic text-lg leading-snug">
              &ldquo;Knowledge without action is arrogance; action without knowledge is ignorance.&rdquo;
            </p>
          </div>
        </div>

        <div className="rounded-[2.5rem] overflow-hidden shadow-sm h-72 md:h-96">
          <img src="/gallery/58.jpg" alt="Al-Ihsan assembly" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* 3. Gallery Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {imagesToShow.map((num) => (
            <div
              key={num}
              className="group relative aspect-square bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-ihsan-cream-alt"
            >
              <img
                src={`/gallery/${num}.jpg`}
                alt={`Al-Ihsan Moment ${num}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              {/* Green Overlay on Hover */}
              <div className="absolute inset-0 bg-ihsan-green/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              {/* Image Number Badge */}
              <div className="absolute bottom-4 right-6 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-ihsan-green opacity-0 group-hover:opacity-100 transition-opacity">
                #{num}
              </div>
            </div>
          ))}
        </div>

        {/* 4. Load More Interaction */}
        {visibleCount < TOTAL_IMAGES && (
          <div className="mt-20 text-center">
            <button
              onClick={loadMore}
              className="bg-ihsan-green text-white px-12 py-5 rounded-full font-semibold text-lg hover:bg-ihsan-green-soft transition-all shadow-lg active:scale-95"
            >
              Load More Photos
            </button>
            <p className="text-ihsan-dark/40 mt-6 text-sm font-medium uppercase tracking-widest">
              Showing {visibleCount} of {TOTAL_IMAGES} Moments
            </p>
          </div>
        )}
      </div>

      {/* 5. Footer Navigation */}
      <div className="max-w-7xl mx-auto px-6 pt-10 mt-16 border-t border-ihsan-cream-alt">
        <Link
          href="/"
          className="text-ihsan-green font-bold hover:text-ihsan-gold transition flex items-center justify-center gap-2 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Homepage
        </Link>
      </div>
    </main>
  );
}
