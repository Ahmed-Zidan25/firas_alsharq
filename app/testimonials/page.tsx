import { neon } from '@neondatabase/serverless';

async function getApprovedReviews() {
  const sql = neon(process.env.DATABASE_URL!);
  // جلب التعليقات المعتمدة فقط وترتيبها من الأحدث للأقدم
  const data = await sql`
    SELECT name, review, comment, created_at 
    FROM firasalsharq 
    WHERE approved = true 
    ORDER BY created_at DESC
  `;
  return data;
}

export default async function TestimonialsPage() {
  const reviews = await getApprovedReviews();

  return (
    <div className="max-w-4xl mx-auto py-12 px-4" dir="rtl">
      <h2 className="text-3xl font-bold text-center mb-8">آراء العملاء</h2>
      
      {reviews.length === 0 ? (
        <p className="text-center text-gray-500">لا توجد تعليقات معتمدة حالياً.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {reviews.map((rev, index) => (
            <div key={index} className="p-6 border rounded-lg shadow-sm bg-white">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-lg">{rev.name}</span>
                <span className="text-yellow-500">{"★".repeat(Number(rev.review))}</span>
              </div>
              <p className="text-gray-700 leading-relaxed">{rev.comment}</p>
              <small className="text-gray-400 block mt-4">
                {new Date(rev.created_at).toLocaleDateString('ar-EG')}
              </small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}