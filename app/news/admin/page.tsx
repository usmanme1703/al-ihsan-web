'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SCHOOL_DATA } from '@/constants';

export default function BlogAdminPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [publishedSlug, setPublishedSlug] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/blog', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });

      const result = await res.json();

      if (res.ok) {
        setPublishedSlug(result.slug);
        setStatus('success');
      } else {
        setErrorMessage(result.error || 'Something went wrong.');
        setStatus('error');
      }
    } catch {
      setErrorMessage('Could not reach the server. Please try again.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <main className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 bg-ihsan-cream">
        <div className="w-20 h-20 bg-ihsan-green text-white rounded-full flex items-center justify-center text-4xl mb-6">✓</div>
        <h1 className="font-serif text-3xl text-ihsan-dark mb-4">Post Published!</h1>
        <p className="text-ihsan-dark/60 max-w-md mb-8">Your update is now live on the News page.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href={`/news/${publishedSlug}`} className="bg-ihsan-green text-white px-8 py-3 rounded-full font-semibold hover:bg-ihsan-green-soft transition">
            View Post
          </Link>
          <button onClick={() => setStatus('idle')} className="text-ihsan-gold font-bold">
            Publish another post
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-ihsan-cream py-16 px-6 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <header className="mb-12 text-center">
          <p className="text-ihsan-gold font-bold text-xs uppercase tracking-[0.25em] mb-4">Staff Only</p>
          <h1 className="font-serif text-3xl text-ihsan-dark">Publish a News Update</h1>
          <p className="text-ihsan-dark/60 mt-2">This page is for {SCHOOL_DATA.name} staff to post blog updates.</p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="bg-white p-8 rounded-3xl border border-ihsan-cream-alt">
            <label className="block text-xs font-bold text-ihsan-dark/50 uppercase mb-2">Admin Password</label>
            <input
              name="password"
              type="password"
              required
              className="w-full p-3 rounded-xl bg-ihsan-cream border-none focus:ring-2 focus:ring-ihsan-green outline-none"
            />
          </div>

          <div className="bg-white p-8 rounded-3xl border border-ihsan-cream-alt space-y-6">
            <div>
              <label className="block text-xs font-bold text-ihsan-dark/50 uppercase mb-2">Title</label>
              <input
                name="title"
                required
                className="w-full p-3 rounded-xl bg-ihsan-cream border-none focus:ring-2 focus:ring-ihsan-green outline-none"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-ihsan-dark/50 uppercase mb-2">Category</label>
                <input
                  name="category"
                  placeholder="General"
                  className="w-full p-3 rounded-xl bg-ihsan-cream border-none focus:ring-2 focus:ring-ihsan-green outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-ihsan-dark/50 uppercase mb-2">Date</label>
                <input
                  name="date"
                  type="date"
                  className="w-full p-3 rounded-xl bg-ihsan-cream border-none focus:ring-2 focus:ring-ihsan-green outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-ihsan-dark/50 uppercase mb-2">Image URL (optional)</label>
              <input
                name="image_url"
                type="url"
                placeholder="https://..."
                className="w-full p-3 rounded-xl bg-ihsan-cream border-none focus:ring-2 focus:ring-ihsan-green outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-ihsan-dark/50 uppercase mb-2">Excerpt (short summary)</label>
              <textarea
                name="excerpt"
                rows={2}
                className="w-full p-3 rounded-xl bg-ihsan-cream border-none focus:ring-2 focus:ring-ihsan-green outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-ihsan-dark/50 uppercase mb-2">Full Content</label>
              <textarea
                name="content"
                required
                rows={10}
                placeholder="Write the full post here. Leave a blank line between paragraphs."
                className="w-full p-3 rounded-xl bg-ihsan-cream border-none focus:ring-2 focus:ring-ihsan-green outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-ihsan-green text-white py-5 rounded-2xl font-bold text-lg hover:bg-ihsan-green-soft transition-all disabled:opacity-50"
          >
            {status === 'loading' ? 'Publishing...' : 'Publish Post'}
          </button>

          {status === 'error' && (
            <p className="text-red-600 text-center font-medium">{errorMessage}</p>
          )}
        </form>
      </div>
    </main>
  );
}
