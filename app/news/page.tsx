'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SCHOOL_DATA } from '@/constants';

type Post = {
  title?: string;
  slug?: string;
  excerpt?: string;
  image_url?: string;
  category?: string;
  date?: string;
};

export default function NewsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(SCHOOL_DATA.sheetdbUrl)
      .then(res => res.json())
      .then(data => { setPosts(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  return (
    <main className="min-h-screen bg-ihsan-cream pb-20">
      <header className="pt-20 pb-16 px-6 max-w-7xl mx-auto text-center">
        <p className="text-ihsan-gold font-bold text-xs uppercase tracking-[0.25em] mb-4">Latest Updates</p>
        <h1 className="font-serif text-4xl md:text-5xl text-ihsan-dark mb-5">News &amp; Announcements</h1>
        <span className="block w-16 h-[3px] bg-ihsan-gold mx-auto mb-6" />
        <p className="text-ihsan-dark/60 max-w-xl mx-auto leading-relaxed text-lg">
          The latest updates and stories from {SCHOOL_DATA.name}.
        </p>
      </header>

      <div className="max-w-5xl mx-auto px-6">
        {/* Featured Event */}
        <a
          href="/flyers/ibtidahiy-graduation-2026.jpg"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-10 bg-white rounded-[2rem] border border-ihsan-cream-alt hover:shadow-lg transition-all flex flex-col md:flex-row gap-8 items-center p-8"
        >
          <div className="w-full md:w-1/3 rounded-2xl overflow-hidden shrink-0">
            <img
              src="/flyers/ibtidahiy-graduation-2026.jpg"
              alt="Ibtidahiy Graduation Ceremony flyer"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="flex-1">
            <span className="text-ihsan-gold font-bold text-xs uppercase tracking-widest">Event</span>
            <h2 className="font-serif text-2xl text-ihsan-dark mt-2 mb-4">Ibtidahiy Graduation Ceremony</h2>
            <p className="text-ihsan-dark/60 mb-2">
              Celebrating our students&apos; achievements in Qur&apos;anic &amp; Islamic Studies.
            </p>
            <p className="text-ihsan-dark/60 mb-1">
              <strong className="text-ihsan-dark">Sunday, 6th September, 2026</strong> · 9:00 AM – 1:00 PM
            </p>
            <p className="text-ihsan-dark/60 mb-6">
              School Premises, No 9 Dr. Kazeem Durodoye Street, Ayekale, Osogbo, Osun State
            </p>
            <span className="text-ihsan-green font-bold text-sm inline-flex items-center gap-2 group">
              View Full Flyer
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </a>

        {loading ? (
          <div className="space-y-6 animate-pulse">
            {[1, 2, 3].map(i => <div key={i} className="h-48 bg-white rounded-[2rem] border border-ihsan-cream-alt" />)}
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-[2.5rem] border border-ihsan-cream-alt">
            <p className="text-ihsan-dark/50">No updates have been posted yet. Check back soon.</p>
          </div>
        ) : (
          <div className="grid gap-8">
            {posts.map((post, idx) => (
              <Link
                key={post.slug || idx}
                href={`/news/${post.slug || idx}`}
                className="bg-white p-8 rounded-[2rem] border border-ihsan-cream-alt hover:shadow-lg transition-all flex flex-col md:flex-row gap-8 items-center"
              >
                <div className="w-full md:w-1/3 h-48 bg-ihsan-cream rounded-2xl overflow-hidden flex items-center justify-center text-ihsan-dark/30 shrink-0">
                  {post.image_url ? (
                    <img src={post.image_url} alt="" className="object-cover w-full h-full" />
                  ) : (
                    "No Image"
                  )}
                </div>
                <div className="flex-1">
                  <span className="text-ihsan-gold font-bold text-xs uppercase tracking-widest">{post.category || "General"}</span>
                  <h2 className="font-serif text-2xl text-ihsan-dark mt-2 mb-4">{post.title}</h2>
                  <p className="text-ihsan-dark/60 line-clamp-2 mb-6">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-ihsan-dark/40 font-medium">{post.date}</p>
                    <span className="text-ihsan-green font-bold text-sm inline-flex items-center gap-2 group">
                      Read More
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-16 text-center border-t border-ihsan-cream-alt pt-10">
          <Link href="/news/admin" className="text-ihsan-dark/40 text-sm hover:text-ihsan-green transition">
            Staff: post an update →
          </Link>
        </div>
      </div>
    </main>
  );
}
