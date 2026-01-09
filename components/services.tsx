"use client";

import React, { useEffect, useState, useCallback } from "react";
import { Truck, Package, Clock, Users, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function Services() {
  const [isMounted, setIsMounted] = useState(false);

  // --- Data ---
  const services = [
    { icon: Truck, title: "نقل آمن", description: "نقل آمن وموثوق لأثاثك مع فريق محترف" },
    { icon: Package, title: "تغليف احترافي", description: "تغليف عالي الجودة لحماية أثاثك أثناء النقل" },
    { icon: Clock, title: "خدمة سريعة", description: "نلتزم بالمواعيد والسرعة في إنجاز الخدمة" },
    { icon: Users, title: "فريق احترافي", description: "فريق مدرب وذو خبرة في مجال النقل" },
  ];

  const testimonials = [
    { 
      name: "أحمد محمد", 
      role: "عميل سكني", 
      image: "https://ui-avatars.com/api/?name=A&background=0D9488&color=fff", 
      text: "خدمة ممتازة وفريق محترف جداً. تم نقل الأثاث بكل حرص وبدون أي أضرار." 
    },
    { 
      name: "سارة خالد", 
      role: "صاحبة متجر", 
      image: "https://ui-avatars.com/api/?name=S&background=0D9488&color=fff", 
      text: "التزام تام بالمواعيد وسرعة في الإنجاز. التغليف كان متقناً وحمى القطع الزجاجية تماماً." 
    },
     { 
      name: "مصطفي المغازي", 
      role: "عميل سكني", 
      image: "https://ui-avatars.com/api/?name=M&background=0D9488&color=fff", 
      text: "سرعة استجابة مذهلة وأسعار شفافة بدون تكاليف مخفية." 
    },
    { 
      name: "خالد منصور", 
      role: "عميل سكني", 
      image: "https://ui-avatars.com/api/?name=K&background=0D9488&color=fff", 
      text: "أفضل شركة نقل تعاملت معها في جدة، دقة وأمانة في التعامل وحرص شديد." 
    },
     { 
      name: "أحمد أبوليلة", 
      role: "عميل تجاري", 
      image: "https://ui-avatars.com/api/?name=Ab&background=0D9488&color=fff", 
      text: "خدمة احترافية جداً، تم التعامل مع المعدات المكتبية بدقة عالية." 
    },
    { 
      name: "فيصل العتيبي", 
      role: "عميل تجاري", 
      image: "https://ui-avatars.com/api/?name=F&background=0D9488&color=fff", 
      text: "تجربة رائعة، السعر منافس جداً مقارنة بجودة الخدمة المقدمة. شكراً لفريق العمل." 
    },
    { 
      name: "خالد منصور", 
      role: "عميل سكني", 
      image: "https://ui-avatars.com/api/?name=K&background=0D9488&color=fff", 
      text: "أفضل شركة نقل تعاملت معها في جدة، دقة وأمانة في التعامل وحرص شديد." 
    },
    { 
      name: "أحمد أبوليلة", 
      role: "عميل تجاري", 
      image: "https://ui-avatars.com/api/?name=Ab&background=0D9488&color=fff", 
      text: "خدمة احترافية جداً، تم التعامل مع المعدات المكتبية بدقة عالية." 
    },
   
  ];

  // --- Carousel Configuration ---
  const [emblaRef, emblaApi] = useEmblaCarousel({
    dir: "rtl", 
    loop: true, 
    align: "start",
    duration: 25,
    slidesToScroll: 1
  }, [
    Autoplay({ delay: 3000, stopOnInteraction: false })
  ]);

  // Set mounted state
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Force re-init whenever the API becomes available
  useEffect(() => {
    if (emblaApi) emblaApi.reInit();
  }, [emblaApi]);

  if (!isMounted) return null;

  return (
    <div className="space-y-0 overflow-x-hidden">
      {/* 1. Services Section */}
      <section id="services" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground font-arabic">
            خدماتنا
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={`service-${index}`} className="transform transition-all duration-500 hover:-translate-y-2">
                <Card className="p-6 hover:shadow-lg transition-shadow border-primary/10">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center text-foreground font-arabic">{service.title}</h3>
                  <p className="text-center text-muted-foreground font-arabic">{service.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">آراء عملائنا</h2>
          
          {/* استدعاء مكون التعليقات هنا */}
          <ReviewsList />
          
        </div>
      </section>
    </div>
  );
}