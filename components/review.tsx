"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Send, User, MessageSquare, Quote } from 'lucide-react';

export default function ReviewPage() {
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(5);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      rating: rating, // نستخدم الحالة المحسنة للنجوم
      comment: formData.get('comment'),
    };

    try {
      const response = await fetch('/api/submit-review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("شكراً لك! تم إرسال تقييمك بنجاح وسيظهر بعد مراجعة الإدارة.");
        (e.target as HTMLFormElement).reset();
        setRating(5);
      } else {
        alert("فشل إرسال التعليق، يرجى المحاولة مرة أخرى.");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4" dir="rtl">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
      >
        <div className="bg-black p-8 text-white text-center relative">
          <Quote className="absolute top-4 right-4 opacity-20 w-12 h-12" />
          <h1 className="text-3xl font-bold mb-2">رأيك يهمنا</h1>
          <p className="text-gray-400">ساعدنا لنقدم لك خدمة أفضل في فراس الشرق</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* حقل الاسم */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-gray-700 font-medium">
              <User className="w-4 h-4 text-orange-500" />
              الاسم الكامل
            </label>
            <input 
              name="name" 
              type="text"
              placeholder="اكتب اسمك هنا..." 
              required 
              className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none"
            />
          </div>

          {/* اختيار التقييم بالنجوم */}
          <div className="space-y-2 text-center py-4 bg-gray-50 rounded-2xl">
            <label className="block text-gray-700 font-medium mb-3">تقييمك للخدمة</label>
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="transition-transform active:scale-90"
                >
                  <Star 
                    className={`w-10 h-10 ${star <= rating ? "fill-orange-500 text-orange-500" : "text-gray-300"}`} 
                  />
                </button>
              ))}
            </div>
          </div>

          {/* حقل التعليق */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-gray-700 font-medium">
              <MessageSquare className="w-4 h-4 text-orange-500" />
              تجربتك معنا
            </label>
            <textarea 
              name="comment" 
              placeholder="اكتب ملاحظاتك أو تجربتك مع خدمة نقل الأثاث..." 
              required 
              className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl h-40 focus:ring-2 focus:ring-orange-500 transition-all outline-none resize-none"
            />
          </div>

          {/* زر الإرسال */}
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit" 
            disabled={loading}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-orange-200 transition-colors disabled:bg-gray-400"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                جاري الإرسال...
              </span>
            ) : (
              <>
                <Send className="w-5 h-5 rotate-180" />
                إرسال التقييم
              </>
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}