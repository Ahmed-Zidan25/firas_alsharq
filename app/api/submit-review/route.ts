import postgres from 'postgres';
import { redirect } from 'next/navigation';

// Connect to Neon
const sql = postgres(process.env.DATABASE_URL!, { ssl: 'require' });

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    // These names must match the 'name' attribute in your form inputs
    const name = formData.get('name');
    const rating = formData.get('rating');
    const comment = formData.get('comment');

    // Insert into your 'reviews' table
    await sql`
      INSERT INTO reviews (name, rating, comment, approved)
      VALUES (${String(name)}, ${Number(rating)}, ${String(comment)}, false)
    `;

    // Redirect to a thank-you page after successful submission
    return redirect('/thank-you'); 
  } catch (error) {
    console.error('Database Error:', error);
    return new Response('حدث خطأ أثناء حفظ التعليق', { status: 500 });
  }
}