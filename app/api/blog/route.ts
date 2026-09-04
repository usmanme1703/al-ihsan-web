import { NextResponse } from 'next/server';
import { SCHOOL_DATA } from '@/constants';

function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { password, title, content } = body;

    const adminPassword = process.env.BLOG_ADMIN_PASSWORD;
    if (!adminPassword) {
      return NextResponse.json(
        { error: 'Blog publishing is not configured yet. Set BLOG_ADMIN_PASSWORD on the server.' },
        { status: 500 }
      );
    }
    if (!password || password !== adminPassword) {
      return NextResponse.json({ error: 'Incorrect password.' }, { status: 401 });
    }

    if (!title || !content) {
      return NextResponse.json({ error: 'Title and content are required.' }, { status: 400 });
    }

    const slug = body.slug ? slugify(body.slug) : slugify(title);
    if (!slug) {
      return NextResponse.json({ error: 'Could not generate a valid slug from the title.' }, { status: 400 });
    }

    const row = {
      title,
      slug,
      excerpt: body.excerpt || '',
      content,
      image_url: body.image_url || '',
      category: body.category || 'General',
      date: body.date || new Date().toISOString().slice(0, 10),
      author: body.author || SCHOOL_DATA.name,
    };

    const headers: Record<string, string> = { 'Content-Type': 'application/json' };
    if (process.env.SHEETDB_API_KEY) {
      headers['Authorization'] = `Bearer ${process.env.SHEETDB_API_KEY}`;
    }

    const sheetRes = await fetch(SCHOOL_DATA.sheetdbUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify({ data: [row] }),
    });

    if (!sheetRes.ok) {
      const detail = await sheetRes.text().catch(() => '');
      return NextResponse.json(
        { error: `Failed to save post to the sheet (status ${sheetRes.status}). ${detail}`.trim() },
        { status: 502 }
      );
    }

    return NextResponse.json({ message: 'Published', slug }, { status: 200 });
  } catch {
    return NextResponse.json({ error: 'Something went wrong publishing the post.' }, { status: 500 });
  }
}
