import postgres from 'postgres';
import { Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const sql = postgres(process.env.DATABASE_URL!, { ssl: 'require' });

export default async function ReviewsList() {
  // جلب التعليقات التي تمت الموافقة عليها فقط
  const reviews = await sql`
    SELECT * FROM reviews 
    WHERE approved = true 
    ORDER BY id DESC 
    LIMIT 6
  `;

  if (reviews.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 px-4">
      {reviews.map((review) => (
        <Card key={review.id} className="shadow-sm">
          <CardHeader className="pb-2">
            <div className="flex text-yellow-500 mb-1">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <h3 className="font-bold text-lg">{review.name}</h3>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 italic">"{review.comment}"</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}