'use client';
import { useEffect, useState } from 'react';
import { SCHOOL_DATA } from '@/constants';

export default function NewsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(SCHOOL_DATA.sheetdbUrl)
      .then(res => res.json())
      .then(data => { setPosts(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  return (
    <main className="min-h-screen bg-ihsan-light pb-20">
      <header className="bg-white border-b py-16 text-center">
        <h1 className="text-4xl font-bold text-ihsan-green">News & Announcements</h1>
        <p className="text-gray-500 mt-2">The latest updates from Al-Ihsan Noble Scholars</p>
      </header>

      <div className="max-w-5xl mx-auto px-6 mt-12">
        {loading ? (
          <div className="space-y-6 animate-pulse">
            {[1, 2, 3].map(i => <div key={i} className="h-48 bg-gray-200 rounded-3xl" />)}
          </div>
        ) : (
          <div className="grid gap-8">
            {posts.map((post: any, idx) => (
              <article key={idx} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3 h-48 bg-gray-100 rounded-2xl overflow-hidden flex items-center justify-center text-gray-400">
                  {post.image_url ? <img src={post.image_url} alt="" className="object-cover w-full h-full" /> : "No Image"}
                </div>
                <div className="flex-1">
                  <span className="text-ihsan-gold font-bold text-xs uppercase tracking-widest">{post.category || "General"}</span>
                  <h2 className="text-2xl font-bold text-ihsan-dark mt-2 mb-4">{post.title}</h2>
                  <p className="text-gray-600 line-clamp-2 mb-6">{post.excerpt}</p>
                  <p className="text-sm text-gray-400 font-medium">{post.date}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}