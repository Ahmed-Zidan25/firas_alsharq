import postgres from 'postgres';
import { redirect } from 'next/navigation';

const sql = postgres(process.env.DATABASE_URL!, { ssl: 'require' });

export async function POST(request: Request) {
  let success = false;

  try {
    const formData = await request.formData();
    const name = formData.get('name');
    const rating = formData.get('rating');
    const comment = formData.get('comment');

    await sql`
      INSERT INTO reviews (name, rating, comment, approved)
      VALUES (${String(name)}, ${Number(rating)}, ${String(comment)}, false)
    `;
    success = true;
  } catch (error) {
    console.error('Database Error:', error);
    return new Response('حدث خطأ أثناء حفظ التعليق', { status: 500 });
  }

  // Redirect must happen outside the try/catch block
  if (success) {
    redirect('/thank-you'); 
  }
}