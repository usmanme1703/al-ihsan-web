import Link from 'next/link';
import { Moon, Languages, CheckCircle2, School, GraduationCap, Sparkles, BookOpen, ArrowRight } from 'lucide-react';

const HIFZ_ITEMS = ["Hifz Program (Quran Memorization)", "Islamiyah for Children"];
const ARABIC_ITEMS = ["Arabic & Tajweed Classes", "Adult Islamic Education (Men & Women)"];

const GENERAL_LEVELS = [
  { icon: School, t: "Early Years & Primary", d: "Foundational literacy, numeracy and character formation." },
  { icon: BookOpen, t: "Secondary Education", d: "Broad-based subjects preparing students for national examinations." },
  { icon: GraduationCap, t: "Post-Secondary Prep", d: "Guidance and coursework geared toward tertiary admission." },
  { icon: Sparkles, t: "STEM & Humanities Focus", d: "Balanced exposure to sciences, technology and the arts." },
];

export default function ProgramsPage() {
  return (
    <main className="bg-ihsan-cream">

      {/* HERO */}
      <section className="pt-16 pb-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6 text-ihsan-gold font-bold text-xs uppercase tracking-[0.25em]">
              <span className="w-8 h-px bg-ihsan-gold" />
              Educational Excellence
            </div>
            <h1 className="font-serif text-4xl md:text-5xl leading-[1.15] mb-8 text-ihsan-dark">
              A Dual Path to Excellence.
            </h1>
            <p className="text-lg text-ihsan-dark/70 leading-relaxed">
              Comprehensive learning for this world and the hereafter — bridging deep Islamic scholarship
              with NBAIS-accredited Western education under one roof.
            </p>
          </div>
          <div className="rounded-[2.5rem] overflow-hidden shadow-xl">
            <img src="/hero.jpg" alt="Al-Ihsan programmes" className="w-full h-[420px] object-cover" />
          </div>
        </div>
      </section>

      {/* ISLAMIC ACADEMY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-ihsan-gold font-bold text-xs uppercase tracking-[0.25em] mb-4">Faith-Centred Learning</p>
            <h2 className="font-serif text-3xl md:text-4xl text-ihsan-dark mb-5">The Islamic Academy</h2>
            <span className="block w-16 h-[3px] bg-ihsan-gold mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Hifz Programme - filled card */}
            <div className="bg-ihsan-green p-10 rounded-3xl text-white">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <Moon className="text-ihsan-gold" size={22} />
              </div>
              <h3 className="font-serif text-2xl mb-4">Hifz Programme</h3>
              <ul className="space-y-3 text-white/80">
                {HIFZ_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="text-ihsan-gold shrink-0 mt-0.5" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Arabic & Tajweed - cream card */}
            <div className="bg-ihsan-cream p-10 rounded-3xl border border-ihsan-cream-alt">
              <div className="w-12 h-12 bg-ihsan-green/10 rounded-full flex items-center justify-center mb-6">
                <Languages className="text-ihsan-green" size={22} />
              </div>
              <h3 className="font-serif text-2xl text-ihsan-dark mb-4">Arabic &amp; Tajweed</h3>
              <ul className="space-y-3 text-ihsan-dark/70">
                {ARABIC_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="text-ihsan-green shrink-0 mt-0.5" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GENERAL EDUCATION */}
      <section className="py-24 bg-ihsan-cream">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4 order-2 lg:order-1">
            <div className="rounded-[2rem] overflow-hidden shadow-lg mt-8">
              <img src="/gallery/1.jpg" alt="Al-Ihsan classroom" className="w-full h-64 object-cover" />
            </div>
            <div className="rounded-[2rem] overflow-hidden shadow-lg">
              <img src="/gallery/2.jpg" alt="Al-Ihsan students" className="w-full h-64 object-cover" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-2 mb-6 text-ihsan-gold font-bold text-xs uppercase tracking-[0.25em]">
              <span className="w-8 h-px bg-ihsan-gold" />
              NBAIS Accredited
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-ihsan-dark mb-8">General Education</h2>
            <div className="space-y-6">
              {GENERAL_LEVELS.map((level) => (
                <div key={level.t} className="flex gap-5">
                  <div className="w-11 h-11 rounded-full bg-ihsan-green/10 flex items-center justify-center shrink-0">
                    <level.icon className="text-ihsan-green" size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ihsan-dark mb-1">{level.t}</h3>
                    <p className="text-ihsan-dark/60 text-sm leading-relaxed">{level.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-ihsan-green rounded-[3rem] p-10 md:p-20 text-white text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Begin the Journey of Knowledge</h2>
            <p className="text-white/70 max-w-xl mx-auto mb-10 leading-relaxed">
              Find the right track for your child and take the next step toward a life of faith and academic excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/apply" className="bg-ihsan-gold text-ihsan-dark px-9 py-4 rounded-full font-semibold hover:bg-white transition-all">
                Enroll Now
              </Link>
              <Link href="/contact" className="border border-white/30 text-white px-9 py-4 rounded-full font-semibold hover:bg-white/10 transition-all inline-flex items-center gap-2 group">
                Contact Admissions
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
