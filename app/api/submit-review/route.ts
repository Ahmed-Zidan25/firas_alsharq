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
  } 
  
  // ابحث عن هذا الجزء في ملف route.ts وحدثه
 catch (error: any) {
    console.error("Database Error Details:", error.message); // سيظهر في Vercel Logs
    return NextResponse.json({ 
        error: "خطأ في الاتصال بقاعدة البيانات", 
        details: error.message // سيظهر لك في المتصفح لتعرف المشكلة
    }, { status: 500 });
}

