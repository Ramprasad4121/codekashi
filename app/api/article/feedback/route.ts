import { NextResponse } from 'next/server';
import { addFeedback } from '@/lib/db';
import { sendNotificationEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const { slug, feedback, topics } = await request.json();
    
    if (!slug) {
      return NextResponse.json({ error: 'Missing slug parameter' }, { status: 400 });
    }

    const updatedData = addFeedback(slug, feedback || '', topics || '');
    
    // Asynchronously send notification without blocking the response
    sendNotificationEmail(slug, feedback, topics).catch(console.error);

    return NextResponse.json(updatedData);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
