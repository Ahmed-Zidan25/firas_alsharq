"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Send, User, MessageSquare, Truck, ShieldCheck } from 'lucide-react';

export default function ReviewPage() {
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(5);

  // الهوية اللونية لموقع فراس الشرق (الأحمر والرمادي)
  const colors = {
    brandRed: "#e53e3e",    // الأحمر الأساسي للموقع
    brandDark: "#2d3748",   // الرمادي الغامق للنصوص والعناوين
    starYellow: "#f6ad55",  // الأصفر للنجوم
    lightBg: "#f7fafc"
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      rating: rating,
      comment: formData.get('comment'),
    };

    try {
      const response = await fetch('/api/submit-review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("شكراً لثقتكم! تم استلام تقييمكم بنجاح.");
        (e.target as HTMLFormElement).reset();
        setRating(5);
      } else {
        alert("عذراً، حدث خطأ أثناء الإرسال.");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f7fafc] py-16 px-4 font-sans" dir="rtl">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
      >
        {/* Header - الهوية الحمراء لفراس الشرق */}
        <div className="bg-[#e53e3e] p-12 text-white text-center relative overflow-hidden">
          <Truck className="absolute -bottom-4 -left-4 opacity-15 w-32 h-32 rotate-12" />
          <motion.div 
             initial={{ scale: 0 }} 
             animate={{ scale: 1 }} 
             className="inline-flex items-center justify-center p-4 bg-white/20 rounded-full mb-6 backdrop-blur-sm"
          >
            <ShieldCheck className="w-10 h-10 text-white" />
          </motion.div>
          <h1 className="text-3xl font-extrabold mb-3 tracking-tight">شاركنا تجربتك مع فراس الشرق</h1>
          <p className="text-white/90 text-lg max-w-md mx-auto leading-relaxed">
            رأيكم يساعدنا في تطوير خدمات نقل العفش لخدمتكم بشكل أفضل
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-10 space-y-8">
          {/* حقل الاسم */}
          <div>
            <label className="flex items-center gap-2 text-[#2d3748] font-bold mb-3 text-sm">
              <User className="w-5 h-5 text-[#e53e3e]" />
              الاسم بالكامل
            </label>
            <input 
              name="name" 
              type="text"
              placeholder="اكتب اسمك هنا..." 
              required 
              className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-[#e53e3e] focus:bg-white transition-all outline-none text-gray-800 shadow-sm"
            />
          </div>

          {/* نظام النجوم */}
          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 text-center shadow-inner">
            <label className="block text-[#2d3748] font-bold mb-5 text-lg">تقييمك لخدماتنا</label>
            <div className="flex justify-center gap-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.button
                  key={star}
                  type="button"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setRating(star)}
                >
                  <Star 
                    className={`w-12 h-12 transition-all ${
                      star <= rating ? "fill-[#f6ad55] text-[#f6ad55] drop-shadow-sm" : "text-gray-300"
                    }`} 
                  />
                </motion.button>
              ))}
            </div>
          </div>

          {/* حقل التعليق */}
          <div>
            <label className="flex items-center gap-2 text-[#2d3748] font-bold mb-3 text-sm">
              <MessageSquare className="w-5 h-5 text-[#e53e3e]" />
              اكتب تعليقك
            </label>
            <textarea 
              name="comment" 
              placeholder="احكي لنا عن تجربتك معنا..." 
              required 
              className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl h-44 focus:border-[#e53e3e] focus:bg-white transition-all outline-none resize-none text-gray-800 shadow-sm"
            />
          </div>

          {/* زر الإرسال الأحمر */}
          <motion.button 
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.97 }}
            type="submit" 
            disabled={loading}
            className="w-full bg-[#e53e3e] hover:bg-[#c53030] text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-red-200 transition-all disabled:bg-gray-400"
          >
            {loading ? (
              <div className="w-7 h-7 border-4 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <Send className="w-6 h-6 rotate-180" />
                <span className="text-xl">إرسال التقييم</span>
              </>
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}