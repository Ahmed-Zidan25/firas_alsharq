import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

export async function PATCH(request: Request) {
  try {
    const { id, approved } = await request.json();
    const sql = neon(process.env.DATABASE_URL!);

    await sql`
      UPDATE firasalsharq 
      SET approved = ${approved} 
      WHERE id = ${id}
    `;

    return NextResponse.json({ message: "تم تحديث الحالة" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    const sql = neon(process.env.DATABASE_URL!);

    await sql`DELETE FROM firasalsharq WHERE id = ${id}`;

    return NextResponse.json({ message: "تم حذف التعليق" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}