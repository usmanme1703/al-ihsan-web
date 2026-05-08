import { SCHOOL_DATA } from "@/constants";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-ihsan-light pb-20">
      <header className="bg-ihsan-green py-20 text-center text-white px-6">
        <h1 className="text-4xl font-bold uppercase tracking-tighter">Connect With Us</h1>
        <p className="text-gray-200 mt-2">We are here to assist with your inquiries</p>
      </header>

      <div className="max-w-7xl mx-auto px-6 -mt-10 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-white p-8 rounded-[2rem] shadow-sm">
            <h4 className="text-ihsan-gold font-bold text-xs uppercase mb-4">Phones</h4>
            {SCHOOL_DATA.phones.map(p => <p key={p} className="text-lg font-bold text-ihsan-dark">{p}</p>)}
          </div>
          <div className="bg-white p-8 rounded-[2rem] shadow-sm">
            <h4 className="text-ihsan-gold font-bold text-xs uppercase mb-4">Email Address</h4>
            <p className="text-lg font-bold text-ihsan-dark lowercase">{SCHOOL_DATA.email}</p>
          </div>
        </div>

        <div className="lg:col-span-2 bg-white p-10 rounded-[3rem] shadow-sm">
          <h2 className="text-2xl font-bold text-ihsan-green mb-8">Send a Message</h2>
          <form className="grid md:grid-cols-2 gap-6">
            <input type="text" placeholder="Your Name" className="p-4 rounded-2xl bg-ihsan-light outline-none focus:ring-2 focus:ring-ihsan-green" />
            <input type="email" placeholder="Email Address" className="p-4 rounded-2xl bg-ihsan-light outline-none focus:ring-2 focus:ring-ihsan-green" />
            <textarea rows={4} placeholder="How can we help you?" className="md:col-span-2 p-4 rounded-2xl bg-ihsan-light outline-none focus:ring-2 focus:ring-ihsan-green"></textarea>
            <button className="bg-ihsan-green text-white py-4 px-10 rounded-2xl font-bold hover:bg-ihsan-gold transition-all">Send Inquiry</button>
          </form>
        </div>
      </div>
    </main>
  );
}