'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HomeGallery() {
  const [startIndex, setStartIndex] = useState(0);
  const totalInFolder = 12; // Update this based on your gallery folder count

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % (totalInFolder - 5));
    }, 5000); // Changes every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const displayImages = Array.from({ length: 6 }, (_, i) => ((startIndex + i) % totalInFolder) + 1);

  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-ihsan-green">Campus Life</h2>
            <p className="text-gray-500 mt-2">Moments of excellence in action.</p>
          </div>
          <Link href="/gallery" className="text-ihsan-gold font-bold hover:underline">See All Photos →</Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {displayImages.map((num) => (
            <div key={num} className="aspect-square rounded-[2rem] overflow-hidden bg-gray-100 border transition-opacity duration-1000">
              <img src={`/gallery/${num}.jpg`} className="w-full h-full object-cover" alt="Gallery" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}