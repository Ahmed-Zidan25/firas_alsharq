import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, rating, comment } = body;

    // Connect using the URL from your Environment Variables
    const sql = neon(process.env.DATABASE_URL!);

    // Insert into your new table 'firasalsharq'
    await sql`
      INSERT INTO firasalsharq (name, review, comment)
      VALUES (${name}, ${rating}, ${comment})
    `;

    return NextResponse.json({ message: "تم حفظ التعليق بنجاح!" }, { status: 201 });
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json({ error: "خطأ في الاتصال بقاعدة البيانات" }, { status: 500 });
  }
}