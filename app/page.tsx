import { SCHOOL_DATA } from "@/constants";
import Link from "next/link";
import { Award, HeartHandshake, Sparkles, ShieldCheck, Moon, BookOpen, CheckCircle2, Users, GraduationCap, Clock3, Phone, Mail, ArrowRight } from "lucide-react";
import HomeGallery from "@/components/HomeGallery";

const STATS = [
  { icon: Award, label: "Accredited Centre", val: "NBAIS" },
  { icon: Users, label: "Student Ratio", val: "12:1" },
  { icon: BookOpen, label: "Islamic Courses", val: "5+" },
  { icon: Clock3, label: "Years of Legacy", val: "4+" },
];

const VALUES = [
  { icon: HeartHandshake, t: "Faith", d: "Spiritual growth as the bedrock of learning." },
  { icon: Sparkles, t: "Excellence", d: "Striving for Ihsan in every assignment." },
  { icon: ShieldCheck, t: "Integrity", d: "Building honest and reliable leaders." },
];

export default function Home() {
  return (
    <main>

      {/* 1. HERO */}
      <section className="bg-ihsan-cream pt-16 pb-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6 text-ihsan-gold font-bold text-xs uppercase tracking-[0.25em]">
              <span className="w-8 h-px bg-ihsan-gold" />
              Excellence in Character &amp; Academics
            </div>
            <h1 className="font-serif text-5xl md:text-6xl leading-[1.1] mb-8 text-ihsan-dark">
              Building a Generation of Muslims Achieving{" "}
              <span className="text-ihsan-green italic">Excellence</span>
            </h1>
            <p className="text-lg text-ihsan-dark/70 mb-10 leading-relaxed max-w-lg">
              Integrating high-quality Western education with deep-rooted Islamic values. Join a community dedicated to perfection in character and academics.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Link href="/apply" className="bg-ihsan-green hover:bg-ihsan-green-soft text-white px-9 py-4 rounded-full font-semibold transition-all inline-block">
                Enroll Now
              </Link>
              <Link href="/programs" className="flex items-center gap-2 font-semibold text-ihsan-dark hover:text-ihsan-green transition group">
                Explore Programmes
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2.5rem] overflow-hidden shadow-xl">
              <img src="/hero.jpg" className="w-full h-[420px] object-cover" alt="Al-Ihsan Noble Scholars students" />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 sm:right-auto sm:w-72 bg-white rounded-2xl shadow-lg p-5 flex items-center gap-4 border border-ihsan-cream-alt">
              <div className="w-12 h-12 rounded-full bg-ihsan-gold/15 flex items-center justify-center shrink-0">
                <Award className="text-ihsan-gold" size={22} />
              </div>
              <div>
                <p className="font-serif text-ihsan-dark leading-tight">NBAIS Accredited</p>
                <p className="text-xs text-ihsan-dark/50 uppercase tracking-widest mt-1">Certified Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="bg-white py-12 border-y border-ihsan-cream-alt">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-3">
              <div className="w-11 h-11 rounded-full bg-ihsan-green/10 flex items-center justify-center">
                <stat.icon className="text-ihsan-green" size={20} />
              </div>
              <p className="text-2xl font-serif text-ihsan-dark">{stat.val}</p>
              <p className="text-xs uppercase tracking-widest text-ihsan-dark/50">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 bg-ihsan-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-ihsan-gold font-bold text-xs uppercase tracking-[0.25em] mb-4">Our Values</p>
            <h2 className="font-serif text-3xl md:text-4xl text-ihsan-dark mb-5">
              Foundational Principles for a Life of Purpose
            </h2>
            <span className="block w-16 h-[3px] bg-ihsan-gold mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {VALUES.map((v) => (
              <div key={v.t} className="bg-white p-10 rounded-3xl text-center border border-ihsan-cream-alt">
                <div className="w-14 h-14 rounded-full bg-ihsan-green/10 flex items-center justify-center mx-auto mb-6">
                  <v.icon className="text-ihsan-green" size={24} />
                </div>
                <h3 className="font-serif text-xl text-ihsan-dark mb-2">{v.t}</h3>
                <p className="text-ihsan-dark/60 text-sm leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DUAL-TRACK PROGRAMS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-ihsan-gold font-bold text-xs uppercase tracking-[0.25em] mb-4">What We Offer</p>
            <h2 className="font-serif text-3xl md:text-4xl text-ihsan-dark mb-5">
              Our Educational Tracks
            </h2>
            <span className="block w-16 h-[3px] bg-ihsan-gold mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Islamic Academy */}
            <div className="bg-ihsan-cream p-10 rounded-3xl border border-ihsan-cream-alt">
              <div className="w-12 h-12 bg-ihsan-gold/15 rounded-full flex items-center justify-center mb-6">
                <Moon className="text-ihsan-gold" size={22} />
              </div>
              <h3 className="font-serif text-2xl text-ihsan-dark mb-4">Islamic Academy</h3>
              <ul className="space-y-3 text-ihsan-dark/70 mb-8">
                {["Hifz Program (Quran Memorization)", "Islamiyah for Children", "Adult Islamic Education (Men & Women)", "Arabic & Tajweed Classes"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="text-ihsan-gold shrink-0 mt-0.5" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/programs" className="text-ihsan-green font-bold hover:text-ihsan-gold transition inline-flex items-center gap-2 group">
                View Islamic Tracks
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* General Education */}
            <div className="bg-ihsan-cream p-10 rounded-3xl border border-ihsan-cream-alt">
              <div className="w-12 h-12 bg-ihsan-green/15 rounded-full flex items-center justify-center mb-6">
                <GraduationCap className="text-ihsan-green" size={22} />
              </div>
              <h3 className="font-serif text-2xl text-ihsan-dark mb-4">General Education</h3>
              <ul className="space-y-3 text-ihsan-dark/70 mb-8">
                {["Kindergarten & Primary", "Secondary Education", "Post-Secondary Prep", "STEM & Humanities Focus"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="text-ihsan-green shrink-0 mt-0.5" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/programs" className="text-ihsan-green font-bold hover:text-ihsan-gold transition inline-flex items-center gap-2 group">
                View Academic Tracks
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CAMPUS LIFE GALLERY */}
      <HomeGallery />

      {/* 4. DIRECT CONTACT SECTION */}
      <section className="py-24 bg-ihsan-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-ihsan-green rounded-[3rem] p-10 md:p-20 text-white flex flex-col lg:flex-row justify-between items-center gap-12">
            <div className="max-w-md text-center lg:text-left">
              <p className="text-ihsan-gold font-bold text-xs uppercase tracking-[0.25em] mb-4">Reach Out</p>
              <h2 className="font-serif text-4xl mb-6">Get in Touch</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Have questions about admissions or our curriculum? Reach out to our team directly.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4 w-full lg:w-auto">
              {/* Phones */}
              {SCHOOL_DATA.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone}`}
                  className="bg-white/10 hover:bg-white/15 border border-white/15 p-5 rounded-2xl flex items-center gap-4 transition-all"
                >
                  <Phone className="text-ihsan-gold shrink-0" size={20} />
                  <span className="font-semibold text-lg">{phone}</span>
                </a>
              ))}

              {/* Email */}
              <a
                href={`mailto:${SCHOOL_DATA.email}`}
                className="bg-white/10 hover:bg-white/15 border border-white/15 p-5 rounded-2xl flex items-center gap-4 transition-all"
              >
                <Mail className="text-ihsan-gold shrink-0" size={20} />
                <span className="font-semibold text-lg lowercase">{SCHOOL_DATA.email}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
