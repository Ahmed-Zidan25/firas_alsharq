"use client";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // نتحقق من كلمة المرور (يفضل مستقبلاً أن يكون التحقق من خلال الـ API لزيادة الأمان)
    if (password === "@123456") { // استبدل 123456 بكلمة مرورك
      setIsAuthenticated(true);
      fetchReviews();
    } else {
      alert("كلمة المرور خاطئة!");
    }
  };

  const fetchReviews = async () => {
    try {
      const res = await fetch('/api/admin/fetch-all');
      const data = await res.json();
      setReviews(data);
      setLoading(false);
    } catch (err) {
      console.error("خطأ في جلب البيانات");
    }
  };

  // شاشة تسجيل الدخول البسيطة
  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50" dir="rtl">
        <form onSubmit={handleLogin} className="p-8 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-bold mb-4">دخول الإدارة</h2>
          <input 
            type="password" 
            placeholder="كلمة المرور" 
            className="border p-2 w-full mb-4 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="w-full bg-black text-white py-2 rounded">دخول</button>
        </form>
      </div>
    );
  }

  if (loading) return <p className="p-10 text-center">جاري التحميل...</p>;

  return (
    <div className="p-8 max-w-5xl mx-auto" dir="rtl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">إدارة التعليقات</h1>
        <button onClick={() => setIsAuthenticated(false)} className="text-sm text-gray-500 underline">خروج</button>
      </div>
      
      {/* باقي جدول التعليقات الذي أنشأناه سابقاً */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow-sm border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 border text-right">الإسم</th>
              <th className="p-3 border text-right">التعليق</th>
              <th className="p-3 border text-center">الحالة</th>
              <th className="p-3 border text-center">إجراءات</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((rev: any) => (
              <tr key={rev.id} className="hover:bg-gray-50 transition-colors">
                <td className="p-3 border font-medium">{rev.name}</td>
                <td className="p-3 border text-gray-600">{rev.comment}</td>
                <td className="p-3 border text-center">
                  {rev.approved ? 
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">منشور</span> : 
                    <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs">مخفي</span>
                  }
                </td>
                <td className="p-3 border text-center space-x-2 space-x-reverse">
                  <button 
                    onClick={() => updateStatus(rev.id, !rev.approved)}
                    className="bg-blue-600 text-white px-3 py-1 rounded text-sm"
                  >
                    {rev.approved ? "إخفاء" : "موافقة"}
                  </button>
                  <button 
                    onClick={() => deleteReview(rev.id)}
                    className="bg-red-50 text-white px-3 py-1 rounded text-sm"
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  // دوال الحذف والتحديث (كما هي في الكود السابق)
  async function updateStatus(id: number, approved: boolean) {
    await fetch('/api/admin/reviews', {
      method: 'PATCH',
      body: JSON.stringify({ id, approved }),
    });
    fetchReviews();
  }

  async function deleteReview(id: number) {
    if (confirm("هل أنت متأكد من الحذف؟")) {
      await fetch('/api/admin/reviews', {
        method: 'DELETE',
        body: JSON.stringify({ id }),
      });
      fetchReviews();
    }
  }
}