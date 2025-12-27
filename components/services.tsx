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
    Autoplay({ delay: 5000, stopOnInteraction: false })
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

      {/* 2. Testimonials Section */}
      <section className="py-16 md:py-24 bg-muted/30" dir="rtl">
        <div className="container mx-auto px-4 overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground font-arabic">
            آراء عملائنا
          </h2>

          {/* THE FIX: By using 'key={testimonials.length}', we force React 
              to re-render the entire carousel if the array size is 6.
          */}
          <div 
            className="overflow-hidden touch-pan-y" 
            ref={emblaRef} 
            key={testimonials.length} 
          >
            <div className="flex -ml-4">
              {testimonials.map((t, index) => (
                <div
                  key={`testimonial-final-${index}`}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.3333%] pl-4"
                >
                  <Card className="h-full border-none shadow-md transition-all duration-300 hover:shadow-xl mx-1">
                    <CardContent className="p-6 md:p-8 flex flex-col items-center text-center h-full">
                      
                      <div className="relative mb-6">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary/10">
                          <img 
                            src={t.image} 
                            alt={t.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-primary p-1.5 rounded-full shadow-lg">
                          <Quote className="w-3 h-3 text-white rotate-180" />
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6 italic leading-relaxed text-sm md:text-base font-arabic">
                        "{t.text}"
                      </p>

                      <div className="mt-auto">
                        <h4 className="font-bold text-foreground text-lg font-arabic">{t.name}</h4>
                        <p className="text-sm text-primary font-medium font-arabic">{t.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8 animate-pulse font-arabic">
            {testimonials.length} آراء - اسحب يميناً أو يساراً للمشاهدة
          </p>
        </div>
      </section>
    </div>
  );
}