import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    // Change .json() to .formData()
    const formData = await request.formData();
    const name = formData.get('name');
    const comment = formData.get('comment');
    const rating = formData.get('rating');

    if (!name || !comment) {
      return NextResponse.json({ error: "Name and comment are required" }, { status: 400 });
    }

    console.log("New review received:", { name, comment, rating });

    // After success, you usually redirect back to the page
    return Response.redirect(new URL('/reviews', request.url));
    
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}