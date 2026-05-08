import Link from 'next/link';

export default function ProgramsPage() {
  const tracks = [
    {
      name: "Islamic Academy",
      desc: "Deep spiritual grounding and Quranic mastery.",
      items: ["Hifz Program", "Islamiyah for Kids", "Adult Education", "Arabic Studies"],
      color: "bg-ihsan-gold/10",
      text: "text-ihsan-gold"
    },
    {
      name: "General Education",
      desc: "Quality Western education with NBAIS accreditation.",
      items: ["Kindergarten", "Primary School", "Secondary School", "Post-Secondary Prep"],
      color: "bg-ihsan-green/10",
      text: "text-ihsan-green"
    }
  ];

  return (
    <main className="min-h-screen">
      <header className="bg-ihsan-green py-20 text-center text-white px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tighter">Educational Excellence</h1>
        <p className="text-gray-200 max-w-2xl mx-auto italic font-serif">Comprehensive learning for this world and the hereafter.</p>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-8">
        {tracks.map((track) => (
          <div key={track.name} className={`${track.color} p-12 rounded-[3rem] border border-black/5`}>
            <h2 className={`text-3xl font-bold ${track.text} mb-4`}>{track.name}</h2>
            <p className="text-gray-700 mb-8 font-medium">{track.desc}</p>
            <ul className="space-y-4 mb-10">
              {track.items.map(i => <li key={i} className="flex items-center gap-3 text-gray-600 font-medium">✓ {i}</li>)}
            </ul>
            <Link href="/apply" className="inline-block bg-ihsan-dark text-white px-8 py-3 rounded-2xl font-bold hover:scale-105 transition-transform">
              Enroll in this Track
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}