import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, rating, comment } = body;

    // الاتصال بقاعدة البيانات
    const sql = neon(process.env.DATABASE_URL!);

    // إدخال البيانات في الجدول
    await sql`
      INSERT INTO firasalsharq (name, review, comment)
      VALUES (${name}, ${rating}, ${comment})
    `;

    return NextResponse.json({ message: "تم حفظ التعليق بنجاح!" }, { status: 201 });
    
  } catch (error: any) {
    console.error("Database Error Details:", error.message);
    return NextResponse.json({ 
        error: "خطأ في الاتصال بقاعدة البيانات", 
        details: error.message 
    }, { status: 500 });
  }
}