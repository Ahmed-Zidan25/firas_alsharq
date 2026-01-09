import postgres from 'postgres';
import { redirect } from 'next/navigation';

// التأكد من الاتصال بقاعدة البيانات
const sql = postgres(process.env.DATABASE_URL!, { ssl: 'require' });

export async function POST(request: Request) {
  let success = false;

  try {
    const formData = await request.formData();
    
    const name = formData.get('name');
    const rating = formData.get('rating');
    const comment = formData.get('comment');

    // التأكد من أن التقييم لا يتجاوز 5 في حال تم اختيار الخيار الفارغ
    const validatedRating = Number(rating) > 5 ? 5 : Number(rating);

    await sql`
      INSERT INTO reviews (name, rating, comment, approved)
      VALUES (
        ${String(name)}, 
        ${validatedRating}, 
        ${String(comment)}, 
        false
      )
    `;

    success = true;
  } catch (error) {
    // هذا سيطبع لك تفاصيل الخطأ في الـ Terminal الخاص بـ VS Code
    console.error('Database Insertion Error:', error);
    return new Response('حدث خطأ أثناء حفظ التعليق', { status: 500 });
  }

  // التحويل يتم هنا حصراً بعد نجاح الـ try بالكامل
  if (success) {
    redirect('/thank-you'); 
  }
}