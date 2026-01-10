import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

// هذا السطر يمنع التخزين المؤقت ويجبر السيرفر على جلب البيانات في كل مرة
export const dynamic = 'force-dynamic'; 

export async function GET() {
  try {
    const sql = neon(process.env.DATABASE_URL!);
    // جلب كل الأعمدة من جدول firasalsharq
    const data = await sql`SELECT * FROM firasalsharq ORDER BY created_at DESC`;
    
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Fetch Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}