import { NextResponse } from 'next/server';

// This prevents the build-time "Failed to collect page data" error on Vercel
export const dynamic = 'force-dynamic'; 

export async function GET() {
  try {
    // Replace this array with your actual database call later
    const reviews = [
      { id: 1, name: "عميل 1", comment: "خدمة رائعة جداً", approved: true },
      { id: 2, name: "عميل 2", comment: "شغل احترافي وسريع", approved: true }
    ];

    return NextResponse.json(reviews);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}