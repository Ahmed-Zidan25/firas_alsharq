import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function ThankYouPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="mb-6 text-green-500">
        <CheckCircle size={80} />
      </div>
      
      <h1 className="text-3xl font-bold mb-4 text-gray-800">
        تم إرسال تعليقك بنجاح!
      </h1>
      
      <p className="text-gray-600 mb-8 max-w-md">
        شكرًا لك على مشاركة تجربتك معنا. سيتم مراجعة تعليقك ونشره في أقرب وقت ممكن.
      </p>

      <Link 
        href="/" 
        className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
      >
        العودة للرئيسية
      </Link>
    </div>
  );
}