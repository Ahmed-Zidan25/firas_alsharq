import { redirect } from 'next/navigation';
import postgres from 'postgres';
import { submitReview } from './actions';

// Connect to Neon using your environment variable
const sql = postgres(process.env.DATABASE_URL!, { ssl: 'require' });

export default async function ReviewsPage() {
  // Fetch reviews using the postgres-js syntax
  const reviews = await sql`
    SELECT id, name, rating, comment, created_at 
    FROM reviews 
    WHERE approved = true 
    ORDER BY created_at DESC
  `;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Customer Reviews</h1>
      
      {/* Review Form */}
      <form action={submitReview} className="mb-8 p-4 border rounded shadow-sm">
        <input name="name" placeholder="Your Name" required className="block w-full mb-2 p-2 border" />
        <select name="rating" className="block w-full mb-2 p-2 border">
          {[5,4,3,2,1].map(n => <option key={n} value={n}>{n} Stars</option>)}
        </select>
        <textarea name="comment" placeholder="Your Review" required className="block w-full mb-2 p-2 border" />
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">Submit Review</button>
      </form>

      {/* Review List */}
      <div className="space-y-4">
        {reviews.length === 0 ? (
          <p className="text-gray-500">No reviews yet.</p>
        ) : (
          reviews.map((rev) => (
            <div key={rev.id} className="border-b pb-4">
              <div className="font-bold">{rev.name} — {rev.rating}/5 ⭐</div>
              <p className="text-gray-600">{rev.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}