import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Replace this array with your database call (e.g., prisma.review.findMany())
    const reviews = [
      { id: 1, name: "Ahmed", comment: "ممتاز جداً", approved: true },
    ];

    return NextResponse.json(reviews, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}