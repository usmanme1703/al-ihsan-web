export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      <header className="py-20 text-center px-6">
        <h1 className="text-4xl font-bold text-ihsan-green uppercase tracking-tighter">Media Gallery</h1>
        <p className="text-gray-500 mt-2 italic">A glimpse into life at Al-Ihsan Noble Scholars</p>
      </header>

      <section className="max-w-7xl mx-auto px-6 pb-20 grid grid-cols-2 md:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="aspect-square bg-ihsan-light rounded-[2rem] flex items-center justify-center text-gray-300 italic border border-gray-100 overflow-hidden group">
            <div className="group-hover:scale-110 transition-transform duration-500">Facility Image {i}</div>
          </div>
        ))}
      </section>
    </main>
  );
}