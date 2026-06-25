import { NextResponse } from 'next/server';
import { addLike } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { slug } = body;

    if (!slug || typeof slug !== 'string') {
      return NextResponse.json({ error: 'Missing or invalid slug parameter' }, { status: 400 });
    }

    const updatedData = addLike(slug);
    return NextResponse.json(updatedData, {
      headers: { 'Cache-Control': 'no-store' },
    });
  } catch (error) {
    console.error('POST /api/article/like error:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
