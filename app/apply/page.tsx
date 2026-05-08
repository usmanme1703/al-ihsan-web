'use client';

import { useState } from 'react';
import { SCHOOL_DATA } from '@/constants';

export default function ApplyPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/enroll', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });

      if (res.ok) setStatus('success');
      else setStatus('error');
    } catch (err) {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <div className="w-20 h-20 bg-ihsan-green text-white rounded-full flex items-center justify-center text-4xl mb-6">✓</div>
        <h1 className="text-3xl font-bold text-ihsan-green mb-4">Application Received!</h1>
        <p className="text-gray-600 max-w-md">We have received your enrollment request. Our admissions team will contact you at {SCHOOL_DATA.phones[0]} shortly.</p>
        <button onClick={() => setStatus('idle')} className="mt-8 text-ihsan-gold font-bold">Submit another form</button>
      </div>
    );
  }

  return (
    <main className="bg-ihsan-light py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-ihsan-green uppercase tracking-tight">School Enrollment Form</h1>
          <p className="text-gray-500 mt-2">Fill the details below to start the journey at Al-Ihsan</p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Section: Student */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold text-ihsan-gold mb-6 border-b pb-2 uppercase tracking-widest">1. Student Details</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2">First Name</label>
                <input name="firstName" required className="w-full p-3 rounded-xl bg-ihsan-light border-none focus:ring-2 focus:ring-ihsan-green outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Last Name</label>
                <input name="lastName" required className="w-full p-3 rounded-xl bg-ihsan-light border-none focus:ring-2 focus:ring-ihsan-green outline-none" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Residential Address</label>
                <textarea name="address" required rows={2} className="w-full p-3 rounded-xl bg-ihsan-light border-none focus:ring-2 focus:ring-ihsan-green outline-none" />
              </div>
            </div>
          </div>

          {/* Section: Parent */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold text-ihsan-gold mb-6 border-b pb-2 uppercase tracking-widest">2. Parent / Guardian</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Full Name</label>
                <input name="parentName" required className="w-full p-3 rounded-xl bg-ihsan-light border-none focus:ring-2 focus:ring-ihsan-green outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Phone Number</label>
                <input name="parentPhone" required type="tel" className="w-full p-3 rounded-xl bg-ihsan-light border-none focus:ring-2 focus:ring-ihsan-green outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Email Address</label>
                <input name="parentEmail" required type="email" className="w-full p-3 rounded-xl bg-ihsan-light border-none focus:ring-2 focus:ring-ihsan-green outline-none" />
              </div>
            </div>
          </div>

          <button 
            type="submit" 
            disabled={status === 'loading'}
            className="w-full bg-ihsan-green text-white py-5 rounded-2xl font-bold text-lg hover:bg-ihsan-dark transition-all disabled:opacity-50"
          >
            {status === 'loading' ? 'Processing...' : 'Submit Application'}
          </button>
          
          {status === 'error' && (
            <p className="text-red-500 text-center font-medium">Something went wrong. Please try calling us instead.</p>
          )}
        </form>
      </div>
    </main>
  );
}