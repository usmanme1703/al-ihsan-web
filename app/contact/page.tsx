'use client';

import { useState } from 'react';
import { SCHOOL_DATA } from "@/constants";

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
        e.currentTarget.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

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

          {status === 'success' ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-ihsan-green text-white rounded-full flex items-center justify-center text-3xl mx-auto mb-6">✓</div>
              <h3 className="text-xl font-bold text-ihsan-green mb-2">Message Sent!</h3>
              <p className="text-gray-500 mb-6">Thank you for reaching out. We&apos;ll get back to you shortly.</p>
              <button onClick={() => setStatus('idle')} className="text-ihsan-gold font-bold">Send another message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <input name="name" required type="text" placeholder="Your Name" className="p-4 rounded-2xl bg-ihsan-light outline-none focus:ring-2 focus:ring-ihsan-green" />
              <input name="email" required type="email" placeholder="Email Address" className="p-4 rounded-2xl bg-ihsan-light outline-none focus:ring-2 focus:ring-ihsan-green" />
              <textarea name="message" required rows={4} placeholder="How can we help you?" className="md:col-span-2 p-4 rounded-2xl bg-ihsan-light outline-none focus:ring-2 focus:ring-ihsan-green"></textarea>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="md:col-span-2 bg-ihsan-green text-white py-4 px-10 rounded-2xl font-bold hover:bg-ihsan-gold transition-all disabled:opacity-50"
              >
                {status === 'loading' ? 'Sending...' : 'Send Inquiry'}
              </button>
              {status === 'error' && (
                <p className="md:col-span-2 text-red-500 text-center font-medium">Something went wrong. Please try calling us instead.</p>
              )}
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
