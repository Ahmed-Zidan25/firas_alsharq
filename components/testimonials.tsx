import { neon } from '@neondatabase/serverless';

// إجبار المكون على جلب بيانات حديثة دائماً عند التحميل
export const revalidate = 0; 

async function getApprovedReviews() {
  try {
    const sql = neon(process.env.DATABASE_URL!);
    // جلب التعليقات التي حالتها approved = true فقط
    const data = await sql`
      SELECT name, review, comment, created_at 
      FROM firasalsharq 
      WHERE approved = true 
      ORDER BY created_at DESC
    `;
    return data;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return [];
  }
}

export default async function Testimonials() {
  const reviews = await getApprovedReviews();

  if (reviews.length === 0) {
    return null; // لا يتم عرض القسم إذا لم تكن هناك تعليقات معتمدة
  }

  return (
    <section className="py-12 bg-gray-50" dir="rtl">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          ماذا يقول عملاؤنا عن فراس الشرق؟
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="flex text-yellow-400 mb-3">
                  {/* عرض النجوم بناءً على الرقم المخزن في review */}
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>{i < (Number(rev.review) || 5) ? "★" : "☆"}</span>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">"{rev.comment}"</p>
              </div>
              
              <div className="border-t pt-4 mt-auto">
                <p className="font-bold text-gray-900">{rev.name}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {new Date(rev.created_at).toLocaleDateString('ar-EG')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}