'use server';

import postgres from 'postgres';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

const sql = postgres(process.env.DATABASE_URL!, { ssl: 'require' });

export async function submitReview(formData: FormData) {
  const name = formData.get('name');
  const rating = formData.get('rating');
  const comment = formData.get('comment');

  try {
    // Insert into Neon (matching your schema)
    await sql`
      INSERT INTO reviews (name, rating, comment, approved)
      VALUES (${String(name)}, ${Number(rating)}, ${String(comment)}, false)
    `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to save review');
  }

  // Refresh the reviews page to show the new data (if approved)
  revalidatePath('/reviews'); 
  
  // Redirect the user
  redirect('/thank-you');
}