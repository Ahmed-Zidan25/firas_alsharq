"use client";

import { useState } from 'react';

export default function ReviewPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    
    // تجميع البيانات في كائن JSON
    const data = {
      name: formData.get('name'),
      rating: formData.get('rating'),
      comment: formData.get('comment'),
    };

    try {
      const response = await fetch('/api/submit-review', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(data),
      });

      // محاولة قراءة الرد كـ JSON دائماً لفهم الخطأ
      const result = await response.json();

      if (response.ok) {
        alert("تم إرسال التعليق بنجاح!");
        (e.target as HTMLFormElement).reset();
      } else {
        // إذا فشل الطلب، أظهر التفاصيل التي يرسلها الـ API (مثل مشكلة JSON أو قاعدة البيانات)
        alert("فشل الإرسال: " + (result.details || result.error || "خطأ مجهول"));
      }
    } catch (error: any) {
      console.error("Fetch Error:", error);
      alert("حدث خطأ في الاتصال بالخادم.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto py-10 px-4" dir="rtl">
      <h1 className="text-2xl font-bold mb-4">تفضل بترك تعليقك</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          name="name" 
          placeholder="الإسم" 
          required 
          className="w-full p-2 border rounded text-right" 
        />
        
        <select name="rating" className="w-full p-2 border rounded text-right">
          <option value="5">★★★★★ (ممتاز)</option>
          <option value="4">★★★★ (جيد جداً)</option>
          <option value="3">★★★ (جيد)</option>
          <option value="2">★★ (مقبول)</option>
          <option value="1">★ (ضعيف)</option>
        </select>

        <textarea 
          name="comment" 
          placeholder="اوصف تجربتك معنا" 
          required 
          className="w-full p-2 border rounded h-32 text-right" 
        />
        
        <button 
          type="submit" 
          disabled={loading}
          className="bg-black text-white px-4 py-2 rounded w-full disabled:bg-gray-400 transition-colors"
        >
          {loading ? "جاري الإرسال..." : "انشر التعليق"}
        </button>
      </form>
    </div>
  );
}