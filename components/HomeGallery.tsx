'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HomeGallery() {
  const [startIndex, setStartIndex] = useState(0);
  const totalInFolder = 82; // Update this based on your gallery folder count

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % (totalInFolder - 5));
    }, 5000); // Changes every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const displayImages = Array.from({ length: 6 }, (_, i) => ((startIndex + i) % totalInFolder) + 1);

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between items-end gap-6 mb-12">
          <div>
            <p className="text-ihsan-gold font-bold text-xs uppercase tracking-[0.25em] mb-4">Around Campus</p>
            <h2 className="font-serif text-3xl md:text-4xl text-ihsan-dark">Campus Life</h2>
            <p className="text-ihsan-dark/60 mt-2">Moments of excellence in action.</p>
          </div>
          <Link href="/gallery" className="text-ihsan-green font-bold hover:text-ihsan-gold transition inline-flex items-center gap-2 group">
            See All Photos
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {displayImages.map((num) => (
            <div key={num} className="aspect-square rounded-[2rem] overflow-hidden bg-ihsan-cream border border-ihsan-cream-alt transition-opacity duration-1000">
              <img src={`/gallery/${num}.jpg`} className="w-full h-full object-cover" alt="Gallery" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
