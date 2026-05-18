import { SCHOOL_DATA } from "@/constants";
import Link from "next/link";

export default function Home() {
  return (
    <main>

      <section className="relative bg-ihsan-dark text-white pt-24 pb-32 px-6 overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img src="/hero.jpg" className="w-full h-full object-cover opacity-30" alt="" />
          <div className="absolute inset-0 bg-gradient-to-r from-ihsan-green/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-1 gap-16 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-9">
              Building a Generation of Muslim Achiving <span className="text-ihsan-gold">Excellence</span>
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed italic font-serif">
              Integrating high-quality Western education with deep-roted Islamic values. Join a community dedicated to perfection in character and academics.
            </p>
            <Link href="/apply" className="bg-ihsan-green hover:bg-ihsan-gold text-white px-10 py-5 rounded-2xl font-bold transition-all text-lg inline-block">
              Enroll Now
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Accredited Centre", val: "NBAIS" },
            { label: "Student Ratio", val: "12:1" },
            { label: "Islamic Courses", val: "5+" },
            { label: "Years of Legacy", val: "4+" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl font-bold text-ihsan-green">{stat.val}</p>
              <p className="text-xs uppercase tracking-widest text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CORE VALUES (On Landing Page) */}
      <section className="py-20 bg-ihsan-light">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            { t: "Faith", d: "Spiritual growth as the bedrock of learning." },
            { t: "Excellence", d: "Striving for Ihsan in every assignment." },
            { t: "Integrity", d: "Building honest and reliable leaders." }
          ].map(v => (
            <div key={v.t} className="bg-white p-8 rounded-3xl text-center">
              <h3 className="text-xl font-bold text-ihsan-green mb-2 uppercase tracking-tighter">{v.t}</h3>
              <p className="text-gray-500 text-sm">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. DUAL-TRACK PROGRAMS */}
      <section className="py-20 bg-ihsan-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ihsan-dark mb-4 text-center inline-block border-b-4 border-ihsan-gold pb-2">
              Our Educational Tracks
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Islamic Academy */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-ihsan-gold/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🌙</span>
              </div>
              <h3 className="text-2xl font-bold text-ihsan-green mb-4">Islamic Academy</h3>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li>• Hifz Program (Quran Memorization)</li>
                <li>• Islamiyah for Children</li>
                <li>• Adult Islamic Education (Men & Women)</li>
                <li>• Arabic & Tajweed Classes</li>
              </ul>
              <Link href="/programs" className="text-ihsan-green font-bold hover:text-ihsan-gold underline underline-offset-4">
                View Islamic Tracks
              </Link>
            </div>

            {/* General Education */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-ihsan-green/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-2xl font-bold text-ihsan-green mb-4">General Education</h3>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li>• Kindergarten & Primary</li>
                <li>• Secondary Education</li>
                <li>• Post-Secondary Prep</li>
                <li>• STEM & Humanities Focus</li>
              </ul>
              <Link href="/programs" className="text-ihsan-green font-bold hover:text-ihsan-gold underline underline-offset-4">
                View Academic Tracks
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DIRECT CONTACT SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-ihsan-green rounded-[3rem] p-10 md:p-20 text-white flex flex-col lg:flex-row justify-between items-center gap-12">
            <div className="max-w-md text-center lg:text-left">
              <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-200 text-lg">
                Have questions about admissions or our curriculum? Reach out to our team directly.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4 w-full lg:w-auto">
              {/* Phones */}
              {SCHOOL_DATA.phones.map((phone) => (
                <a 
                  key={phone} 
                  href={`tel:${phone}`} 
                  className="bg-white/10 hover:bg-white/20 border border-white/10 p-5 rounded-2xl flex items-center gap-4 transition-all"
                >
                  <span className="text-2xl text-ihsan-gold">📞</span>
                  <span className="font-bold text-lg">{phone}</span>
                </a>
              ))}
              
              {/* Email */}
              <a 
                href={`mailto:${SCHOOL_DATA.email}`} 
                className="bg-white/10 hover:bg-white/20 border border-white/10 p-5 rounded-2xl flex items-center gap-4 transition-all"
              >
                <span className="text-2xl text-ihsan-gold">✉️</span>
                <span className="font-bold text-lg lowercase">{SCHOOL_DATA.email}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}