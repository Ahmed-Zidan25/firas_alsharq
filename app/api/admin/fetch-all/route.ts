

// app/api/admin/fetch-all/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Replace this with your actual Database logic (Prisma, MongoDB, etc.)
    const reviews = [
       { id: 1, name: "User", comment: "Great!", approved: true }
    ];

    return NextResponse.json(reviews);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}