import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    // 1. Use formData() instead of json() for standard HTML forms
    const formData = await request.formData();
    const name = formData.get('name');
    const comment = formData.get('comment');
    const rating = formData.get('rating');

    // 2. Validate
    if (!name || !comment) {
      return NextResponse.json({ error: "Name and comment are required" }, { status: 400 });
    }

    console.log("Review received:", { name, comment, rating });

    // 3. Redirect user back to a "thank you" page or the home page
    return Response.redirect(new URL('/?success=true', request.url));

  } catch (error) {
    console.error("Submission error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}