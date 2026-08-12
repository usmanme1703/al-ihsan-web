import { SCHOOL_DATA } from "@/constants";
import { Users, Sparkles, Building2, Quote } from "lucide-react";

const PILLARS = [
  {
    icon: Users,
    t: "Community Life",
    d: "A close-knit environment where students, families and teachers grow together in faith and purpose.",
  },
  {
    icon: Sparkles,
    t: "Excellence Ethos",
    d: "Rigorous academics paired with Islamic scholarship, aimed at producing well-rounded achievers.",
  },
  {
    icon: Building2,
    t: "Modern Facility",
    d: "Purpose-built classrooms and learning spaces designed to support both faith and formal education.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-ihsan-cream">

      {/* HERO */}
      <section className="pt-16 pb-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6 text-ihsan-gold font-bold text-xs uppercase tracking-[0.25em]">
              <span className="w-8 h-px bg-ihsan-gold" />
              Our Story
            </div>
            <h1 className="font-serif text-4xl md:text-5xl leading-[1.15] mb-8 text-ihsan-dark">
              Rooted in Tradition, Built for Tomorrow
            </h1>
            <p className="text-lg text-ihsan-dark/70 leading-relaxed">
              Founded with a vision of holistic education, Al-Ihsan Noble Scholars has grown from a humble
              beginning into a premier institution for NBAIS accredited studies, bridging Islamic scholarship
              with modern academic excellence in Osogbo, Osun State.
            </p>
          </div>
          <div className="rounded-[2.5rem] overflow-hidden shadow-xl">
            <img
              src="/history.jpg"
              alt="Al-Ihsan History"
              className="w-full h-[420px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="rounded-[2.5rem] overflow-hidden shadow-xl">
              <img src="/hero.jpg" alt="Al-Ihsan community" className="w-full h-[420px] object-cover" />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 sm:right-auto sm:w-72 bg-ihsan-green text-white rounded-2xl shadow-lg p-5 flex items-center gap-4">
              <Quote className="text-ihsan-gold shrink-0" size={22} />
              <p className="text-sm font-serif italic leading-snug">&ldquo;{SCHOOL_DATA.motto}&rdquo;</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-ihsan-gold font-bold text-xs uppercase tracking-[0.25em] mb-4">Our Mission</p>
            <h2 className="font-serif text-3xl md:text-4xl text-ihsan-dark mb-8">
              Guided by Purpose, Rooted in Faith
            </h2>
            <div className="space-y-6">
              {SCHOOL_DATA.objectives.map((obj, i) => (
                <div key={i} className="flex gap-5">
                  <span className="font-serif text-2xl text-ihsan-gold shrink-0">0{i + 1}</span>
                  <p className="text-ihsan-dark/70 leading-relaxed pt-1">{obj}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-24 bg-ihsan-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-ihsan-gold font-bold text-xs uppercase tracking-[0.25em] mb-4">What Sets Us Apart</p>
            <h2 className="font-serif text-3xl md:text-4xl text-ihsan-dark mb-5">The Pillars of Our School</h2>
            <span className="block w-16 h-[3px] bg-ihsan-gold mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PILLARS.map((p) => (
              <div key={p.t} className="bg-white p-10 rounded-3xl text-center border border-ihsan-cream-alt">
                <div className="w-14 h-14 rounded-full bg-ihsan-green/10 flex items-center justify-center mx-auto mb-6">
                  <p.icon className="text-ihsan-green" size={24} />
                </div>
                <h3 className="font-serif text-xl text-ihsan-dark mb-2">{p.t}</h3>
                <p className="text-ihsan-dark/60 text-sm leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-[2.5rem] overflow-hidden shadow-xl order-2 lg:order-1">
            <img src="/history.jpg" alt="Al-Ihsan building" className="w-full h-[380px] object-cover" />
          </div>
          <div className="order-1 lg:order-2 border-l-4 border-ihsan-gold pl-8">
            <Quote className="text-ihsan-gold mb-6" size={32} />
            <blockquote className="font-serif italic text-2xl md:text-3xl leading-snug text-ihsan-dark mb-6">
              Education without a moral compass is merely instruction. At Al-Ihsan, we are not just teaching
              students how to make a living; we are guiding them on how to make a life — rooted in divine
              principles and aimed at societal benefit.
            </blockquote>
            <p className="text-ihsan-gold font-bold text-xs uppercase tracking-[0.25em]">
              — {SCHOOL_DATA.name}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
