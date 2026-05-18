import { SCHOOL_DATA } from "@/constants";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <header className="bg-ihsan-dark py-24 text-center text-white px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tighter">Our Foundation</h1>
        <p className="text-ihsan-gold font-bold tracking-widest text-sm uppercase">"{SCHOOL_DATA.motto}"</p>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-20 space-y-24">
        
        {/* History */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="/history.jpg" 
              alt="Al-Ihsan History" 
              className="rounded-[3rem] shadow-2xl border-8 border-ihsan-light w-full h-[400px] object-cover" 
            />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl font-bold text-ihsan-green">Our History</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Founded with a vision of holistic education, Al-Ihsan Noble Scholars has grown from a humble 
              beginning into a premier institution for NBAIS accredited studies...
            </p>
          </div>
        </div>

        {/* Objectives */}
        <div className="bg-ihsan-green p-12 md:p-20 rounded-[4rem] text-white">
          <h2 className="text-3xl font-bold mb-12 text-center">Core Objectives</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {SCHOOL_DATA.objectives.map((obj, i) => (
              <div key={i} className="bg-white/10 p-6 rounded-2xl border border-white/10">
                <span className="text-ihsan-gold font-bold mr-2">0{i+1}.</span> {obj}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}