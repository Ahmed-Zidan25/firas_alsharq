import { NextResponse } from 'next/server';

// This prevents Vercel from trying to "pre-render" this route during build
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, comment } = body;

    // 1. Validate data
    if (!name || !comment) {
      return NextResponse.json({ error: "Name and comment are required" }, { status: 400 });
    }

    // 2. SAVE TO DATABASE HERE 
    // Example: await prisma.review.create({ data: { name, comment, approved: false } });
    
    console.log("New review received:", name, comment);

    return NextResponse.json({ message: "Review submitted successfully" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}