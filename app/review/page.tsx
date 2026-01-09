export default function ReviewPage() {
  return (
    <div className="max-w-md mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Leave a Review</h1>
      <form action="/api/submit-review" method="POST" className="space-y-4">
        <input name="name" placeholder="Your Name" required className="w-full p-2 border rounded" />
        
        <select name="rating" className="w-full p-2 border rounded">
          <option value="5">5 Stars ★★★★★</option>
          <option value="4">4 Stars ★★★★</option>
          <option value="3">3 Stars ★★★</option>
          <option value="2">2 Stars ★★</option>
          <option value="1">1 Star ★</option>
        </select>

        <textarea name="comment" placeholder="Your experience..." required className="w-full p-2 border rounded h-32" />
        
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">
          Submit Review
        </button>
      </form>
    </div>
  );
}