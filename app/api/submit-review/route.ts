import postgres from 'postgres';
import { redirect } from 'next/navigation';

// This connects to Neon using the environment variable Vercel creates for you
const sql = postgres(process.env.DATABASE_URL!, { ssl: 'require' });

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get('name');
    const rating = formData.get('rating');
    const comment = formData.get('comment');

    // Insert into Neon
    await sql`
      INSERT INTO reviews (name, rating, comment, approved)
      VALUES (${String(name)}, ${Number(rating)}, ${String(comment)}, false)
    `;

    return redirect('/thank-you');
  } catch (error) {
    console.error('Database Error:', error);
    return new Response('Error saving review', { status: 500 });
  }
}