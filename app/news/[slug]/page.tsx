'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { SCHOOL_DATA } from '@/constants';

type Post = {
  title?: string;
  slug?: string;
  excerpt?: string;
  content?: string;
  image_url?: string;
  category?: string;
  date?: string;
  author?: string;
};

export default function NewsPostPage() {
  const params = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null | undefined>(undefined); // undefined = loading, null = not found

  useEffect(() => {
    fetch(SCHOOL_DATA.sheetdbUrl)
      .then((res) => res.json())
      .then((data: Post[]) => {
        const match = data.find((p) => p.slug === params.slug);
        setPost(match || null);
      })
      .catch(() => setPost(null));
  }, [params.slug]);

  if (post === undefined) {
    return (
      <main className="min-h-screen bg-ihsan-cream py-24 px-6">
        <div className="max-w-3xl mx-auto animate-pulse space-y-6">
          <div className="h-8 w-1/3 bg-ihsan-cream-alt rounded" />
          <div className="h-12 w-full bg-ihsan-cream-alt rounded" />
          <div className="h-72 w-full bg-ihsan-cream-alt rounded-3xl" />
        </div>
      </main>
    );
  }

  if (post === null) {
    return (
      <main className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 bg-ihsan-cream">
        <h1 className="font-serif text-3xl text-ihsan-dark mb-4">Post Not Found</h1>
        <p className="text-ihsan-dark/60 mb-8">This update may have been removed or the link is incorrect.</p>
        <Link href="/news" className="text-ihsan-green font-bold hover:text-ihsan-gold transition inline-flex items-center gap-2">
          <ArrowLeft size={16} /> Back to News
        </Link>
      </main>
    );
  }

  const paragraphs = (post.content || '').split(/\n+/).filter(Boolean);

  return (
    <main className="min-h-screen bg-ihsan-cream pb-24">
      <div className="max-w-3xl mx-auto px-6 pt-16">
        <Link href="/news" className="text-ihsan-green font-bold hover:text-ihsan-gold transition inline-flex items-center gap-2 mb-8">
          <ArrowLeft size={16} /> Back to News
        </Link>

        <p className="text-ihsan-gold font-bold text-xs uppercase tracking-[0.25em] mb-4">
          {post.category || 'General'}
        </p>
        <h1 className="font-serif text-3xl md:text-5xl text-ihsan-dark mb-6 leading-tight">
          {post.title}
        </h1>
        <p className="text-ihsan-dark/50 text-sm font-medium mb-10">
          {post.author || SCHOOL_DATA.name}{post.date ? ` · ${post.date}` : ''}
        </p>

        {post.image_url && (
          <div className="rounded-[2.5rem] overflow-hidden shadow-xl mb-12">
            <img src={post.image_url} alt={post.title} className="w-full max-h-[480px] object-cover" />
          </div>
        )}

        <article className="space-y-6 text-lg text-ihsan-dark/80 leading-relaxed">
          {paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </article>
      </div>
    </main>
  );
}
