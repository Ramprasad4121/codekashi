import { NextResponse } from 'next/server';
import { addFeedback } from '@/lib/db';
import { sendNotificationEmail } from '@/lib/email';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { slug, type, text } = body;

    if (!slug || typeof slug !== 'string') {
      return NextResponse.json({ error: 'Missing or invalid slug parameter' }, { status: 400 });
    }

    if (!type || (type !== 'thought' && type !== 'topic')) {
      return NextResponse.json({ error: 'Invalid type: must be "thought" or "topic"' }, { status: 400 });
    }

    if (!text || !text.trim()) {
      return NextResponse.json({ error: 'Text cannot be empty' }, { status: 400 });
    }

    const updatedData = addFeedback(slug, type, text);

    // Fire-and-forget email notification — never block the response
    sendNotificationEmail(slug, type, text).catch((err) =>
      console.error('Email notification failed:', err)
    );

    return NextResponse.json(updatedData, {
      headers: { 'Cache-Control': 'no-store' },
    });
  } catch (error) {
    console.error('POST /api/article/feedback error:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
