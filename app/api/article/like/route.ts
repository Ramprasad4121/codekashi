import { NextResponse } from 'next/server';
import { addLike } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const { slug } = await request.json();
    
    if (!slug) {
      return NextResponse.json({ error: 'Missing slug parameter' }, { status: 400 });
    }

    const updatedData = addLike(slug);
    return NextResponse.json(updatedData);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
