import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type') || '';
    let data;

    // التحقق من نوع البيانات الواردة للتعامل معها بذكاء
    if (contentType.includes('application/json')) {
      data = await request.json();
    } else {
      // إذا وصلت البيانات كـ Form (السبب في الخطأ الحالي)
      const formData = await request.formData();
      data = Object.fromEntries(formData.entries());
    }

    const { name, rating, comment } = data;
    const sql = neon(process.env.DATABASE_URL!);

    await sql`
      INSERT INTO firasalsharq (name, review, comment)
      VALUES (${name}, ${rating}, ${comment})
    `;

    return NextResponse.json({ message: "تم حفظ التعليق بنجاح!" }, { status: 201 });
    
  } catch (error: any) {
    console.error("Database Error:", error.message);
    return NextResponse.json({ 
        error: "خطأ في الاتصال بقاعدة البيانات", 
        details: error.message 
    }, { status: 500 });
  }
}