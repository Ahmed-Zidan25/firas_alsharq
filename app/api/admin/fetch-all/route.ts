import { NextResponse } from 'next/server';

// 1. Force this to stay dynamic so Vercel doesn't crash during build
export const dynamic = 'force-dynamic'; 

export async function GET() {
  try {
    // 2. Here is where you would normally call your Database (Prisma/MongoDB)
    const reviews = [
      { id: 1, name: "Ahmed", comment: "Great service!", approved: true }
    ];

    return NextResponse.json(reviews);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}