import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, rating, comment } = body;

    // Connect to Neon using your environment variable
    const sql = neon(process.env.DATABASE_URL!);

    // Insert into the new table: firasalsharq
    // Ensure the column names (name, review, comment) match your Neon table
    await sql`
      INSERT INTO firasalsharq (name, review, comment)
      VALUES (${name}, ${rating}, ${comment})
    `;

    return NextResponse.json({ message: "Review saved!" }, { status: 201 });
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json({ error: "Could not save to database" }, { status: 500 });
  }
}