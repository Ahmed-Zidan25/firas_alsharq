import { createClient } from '@supabase/supabase-js'
import { redirect } from 'next/navigation'

// Initialize Supabase (Ideally, move these to .env.local)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = formData.get('name');
  const rating = formData.get('rating');
  const comment = formData.get('comment');

  // Save to Supabase
  const { error } = await supabase
    .from('reviews') // Make sure your table name is 'reviews'
    .insert([
      { 
        name: name, 
        rating: Number(rating), 
        comment: comment, 
        approved: false 
      },
    ])

  if (error) {
    console.error('Error inserting review:', error)
    return new Response('Error saving review', { status: 500 })
  }

  redirect('/thank-you');
}