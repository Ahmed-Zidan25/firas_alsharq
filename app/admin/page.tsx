"use client";
import { useState, useEffect } from 'react';

export default function AdminDashboard() {
  const [reviews, setReviews] = useState([]);
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);

  // جلب كل التعليقات (الموافقة وغير الموافقة)
  const fetchReviews = async () => {
    // سنحتاج لإنشاء GET API أو استخدام Server Actions، للتبسيط سنفترض وجود API لجلب الكل
    const res = await fetch('/api/get-all-reviews'); 
    const data = await res.json();
    setReviews(data);
  };

  const handleAction = async (id: number, action: 'approve' | 'delete') => {
    const method = action === 'approve' ? 'PATCH' : 'DELETE';
    const endpoint = action === 'approve' ? '/api/approve-review' : '/api/approve-review';
    
    const res = await fetch(endpoint, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, approved: true }),
    });

    if (res.ok) fetchReviews();
  };

  if (!isAuthorized) {
    return (
      <div className="flex flex-col items-center justify-center h-screen" dir="rtl">
        <input 
          type="password" 
          placeholder="كلمة مرور الإدارة" 
          className="border p-2 rounded"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button 
          onClick={() => password === "firas123" ? setIsAuthorized(true) : alert("خطأ")}
          className="bg-blue-600 text-white p-2 mt-2 rounded w-32"
        >
          دخول
        </button>
      </div>
    );
  }

  return (
    <div className="p-8" dir="rtl">
      <h1 className="text-2xl font-bold mb-6">لوحة تحكم التعليقات</h1>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">الاسم</th>
            <th className="border p-2">التعليق</th>
            <th className="border p-2">الحالة</th>
            <th className="border p-2">إجراءات</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((rev: any) => (
            <tr key={rev.id}>
              <td className="border p-2">{rev.name}</td>
              <td className="border p-2">{rev.comment}</td>
              <td className="border p-2">{rev.approved ? "✅ معتمد" : "⏳ معلق"}</td>
              <td className="border p-2 space-x-2 space-x-reverse">
                {!rev.approved && (
                  <button onClick={() => handleAction(rev.id, 'approve')} className="bg-green-500 text-white px-2 py-1 rounded">موافقة</button>
                )}
                <button onClick={() => handleAction(rev.id, 'delete')} className="bg-red-500 text-white px-2 py-1 rounded">حذف</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}