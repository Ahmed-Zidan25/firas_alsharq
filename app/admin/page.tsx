"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// تأكد من أن كل هذه الأيقونات مستوردة بشكل صحيح
import { 
  CheckCircle, 
  Trash2, 
  Clock, 
  User, 
  ShieldCheck, 
  LogOut,
  RefreshCw,
  MessageSquare,
  Truck // تأكد من وجود هذه الأيقونة هنا
} from 'lucide-react';

export default function AdminDashboard() {
  const [reviews, setReviews] = useState([]);
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved'>('all');

  const fetchReviews = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/get-all-reviews'); 
      const data = await res.json();
      setReviews(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Failed to load reviews");
      setReviews([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthorized) {
      fetchReviews();
    }
  }, [isAuthorized]);

  const handleAction = async (id: number, action: 'approve' | 'delete') => {
    const method = action === 'approve' ? 'PATCH' : 'DELETE';
    try {
      const res = await fetch('/api/approve-review', {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, approved: true }),
      });

      if (res.ok) fetchReviews();
    } catch (error) {
      console.error("Action failed:", error);
    }
  };

  const filteredReviews = reviews.filter((rev: any) => {
    if (filter === 'pending') return !rev.approved;
    if (filter === 'approved') return rev.approved;
    return true;
  });

  // شاشة تسجيل الدخول
  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4" dir="rtl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-8 rounded-3xl shadow-xl max-w-sm w-full border border-gray-100">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-red-50 rounded-full">
              <ShieldCheck className="w-10 h-10 text-red-600" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">دخول الإدارة</h1>
          <input 
            type="password" 
            placeholder="كلمة المرور" 
            className="w-full border-2 border-gray-100 p-4 rounded-2xl mb-4 focus:border-red-500 outline-none transition-all text-center"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && (password === "firas123" ? setIsAuthorized(true) : alert("خطأ"))}
          />
          <button 
            onClick={() => password === "firas123" ? setIsAuthorized(true) : alert("كلمة المرور غير صحيحة")}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-red-100 transition-all"
          >
            تسجيل الدخول
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-right" dir="rtl">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="bg-red-600 p-2 rounded-lg text-white">
            <Truck className="w-6 h-6" />
          </div>
          <h1 className="text-xl font-bold text-gray-800">لوحة تحكم فراس الشرق</h1>
        </div>
        <button onClick={() => setIsAuthorized(false)} className="flex items-center gap-2 text-gray-500 hover:text-red-600 font-medium transition-colors">
          <LogOut className="w-5 h-5" />
          خروج
        </button>
      </nav>

      <main className="max-w-6xl mx-auto p-6 md:p-10">
        {/* العدادات والفلاتر */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex bg-white p-1 rounded-xl shadow-sm border border-gray-200">
            <button onClick={() => setFilter('all')} className={`px-6 py-2 rounded-lg font-bold transition-all ${filter === 'all' ? 'bg-red-600 text-white' : 'text-gray-50'}`}>الكل</button>
            <button onClick={() => setFilter('pending')} className={`px-6 py-2 rounded-lg font-bold transition-all ${filter === 'pending' ? 'bg-red-600 text-white' : 'text-gray-500'}`}>المعلق</button>
            <button onClick={() => setFilter('approved')} className={`px-6 py-2 rounded-lg font-bold transition-all ${filter === 'approved' ? 'bg-red-600 text-white' : 'text-gray-500'}`}>المعتمد</button>
          </div>
          <button onClick={fetchReviews} className="p-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all text-gray-600">
            <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
          </button>
        </div>

        {/* الجدول */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-right">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100 text-gray-600 text-sm font-bold">
                  <th className="p-5">العميل</th>
                  <th className="p-5">التعليق</th>
                  <th className="p-5">الحالة</th>
                  <th className="p-5 text-center">إجراءات</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filteredReviews.length > 0 ? filteredReviews.map((rev: any) => (
                  <tr key={rev.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="p-5 font-bold">{rev.name}</td>
                    <td className="p-5 text-gray-600 text-sm">{rev.comment}</td>
                    <td className="p-5">
                       {rev.approved ? <span className="text-green-600 text-xs font-bold">✅ معتمد</span> : <span className="text-orange-600 text-xs font-bold">⏳ معلق</span>}
                    </td>
                    <td className="p-5">
                      <div className="flex justify-center gap-2">
                        {!rev.approved && (
                          <button onClick={() => handleAction(rev.id, 'approve')} className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition-all">
                            <CheckCircle className="w-5 h-5" />
                          </button>
                        )}
                        <button onClick={() => handleAction(rev.id, 'delete')} className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-all">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan={4} className="p-10 text-center text-gray-400">لا توجد تعليقات حالياً</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}