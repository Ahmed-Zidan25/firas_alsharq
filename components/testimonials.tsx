"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function InfiniteTestimonials() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadReviews() {
      try {
        const res = await fetch('/api/get-approved-reviews');
        const data = await res.json();
        // نكرر المصفوفة لضمان استمرارية الحركة اللانهائية
        setReviews([...data, ...data]);
      } catch (error) {
        console.error("Failed to load reviews", error);
      } finally {
        setLoading(false);
      }
    }
    loadReviews();
  }, []);

  if (loading || reviews.length === 0) return null;

  return (
    <section className="py-16 bg-white overflow-hidden" dir="rtl">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-gray-800">قالوا عن فراس الشرق</h2>
      </div>

      {/* الحاوية الخارجية التي تخفي الأطراف الخارجة عن الشاشة */}
      <div className="relative flex overflow-x-hidden group">
        
        {/* شريط الحركة اللانهائي */}
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }} // التحرك بمقدار نصف طول المصفوفة المكررة
          transition={{ 
            ease: "linear", 
            duration: 25, // سرعة الحركة (كلما زاد الرقم كانت أبطأ وأهدأ)
            repeat: Infinity 
          }}
          // التوقف المؤقت عند مرور الماوس
          whileHover={{ transition: { duration: 0 } }} 
        >
          {reviews.map((rev: any, index: number) => (
            <div 
              key={index} 
              className="inline-block w-[300px] md:w-[400px] mx-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm"
            >
              <div className="flex text-yellow-400 mb-2">
                {"★".repeat(Number(rev.review))}
              </div>
              <p className="text-gray-600 whitespace-normal leading-relaxed italic mb-4">
                "{rev.comment}"
              </p>
              <div className="border-t pt-3">
                <span className="font-bold text-gray-800">{rev.name}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* إضافة تأثير التدرج الشفاف على الجوانب (اختياري لجمالية أكثر) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent"></div>
      </div>
    </section>
  );
}