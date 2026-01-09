import { sql } from '@vercel/postgres';
import { redirect } from 'next/navigation';

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = formData.get('name');
  const rating = formData.get('rating');
  const comment = formData.get('comment');

  // Save to Vercel Postgres
  await sql`
    INSERT INTO Reviews (name, rating, comment, approved)
    VALUES (${name as string}, ${Number(rating)}, ${comment as string}, false);
  `;

  // Redirect to a thank you page
  redirect('/thank-you');
}