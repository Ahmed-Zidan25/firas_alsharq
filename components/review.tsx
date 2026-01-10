"use client";

import { useState } from 'react';

export default function ReviewPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      rating: formData.get('rating'),
      comment: formData.get('comment'),
    };

    try {
      const response = await fetch('/api/submit-review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("تم إرسال التعليق بنجاح!");
        (e.target as HTMLFormElement).reset();
      } else {
        alert("فشل إرسال التعليق.");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto py-10" dir="rtl">
      <h1 className="text-2xl font-bold mb-4">تفضل بترك تعليقك</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="الإسم" required className="w-full p-2 border rounded" />
        
        <select name="rating" className="w-full p-2 border rounded">
          <option value="5">★★★★★</option>
          <option value="4">★★★★</option>
          <option value="3">★★★</option>
          <option value="2">★★</option>
          <option value="1">★</option>
        </select>

        <textarea name="comment" placeholder="اوصف تجربتك معنا" required className="w-full p-2 border rounded h-32" />
        
        <button 
          type="submit" 
          disabled={loading}
          className="bg-black text-white px-4 py-2 rounded w-full disabled:bg-gray-400"
        >
          {loading ? "جاري الإرسال..." : "انشر التعليق"}
        </button>
      </form>
    </div>
  );
}