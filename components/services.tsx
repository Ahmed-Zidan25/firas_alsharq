"use client";

import React from "react";
import { Truck, Package, Clock, Users, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function Services() {
  // 1. Logic Fix: Set 'align' to 'start' to prevent floating gaps
  const [emblaRef] = useEmblaCarousel({ 
    dir: "rtl", 
    loop: true, 
    align: "start" 
  }, [
    Autoplay({ delay: 2000, stopOnInteraction: true })
  ]);

  const services = [
    { icon: Truck, title: "نقل آمن", description: "نقل آمن وموثوق لأثاثك مع فريق محترف" },
    { icon: Package, title: "تغليف احترافي", description: "تغليف عالي الجودة لحماية أثاثك أثناء النقل" },
    { icon: Clock, title: "خدمة سريعة", description: "نلتزم بالمواعيد والسرعة في إنجاز الخدمة" },
    { icon: Users, title: "فريق احترافي", description: "فريق مدرب وذو خبرة في مجال النقل" },
  ];

  const testimonials = [
    { name: "أحمد محمد", role: "عميل سكني", text: "خدمة ممتازة وفريق محترف جداً. تم نقل الأثاث بكل حرص وبدون أي أضرار." },
    { name: "سارة خالد", role: "صاحبة متجر", text: "التزام تام بالمواعيد وسرعة في الإنجاز. التغليف كان متقناً." },
    { name: "فيصل العتيبي", role: "عميل تجاري", text: "تجربة رائعة، السعر منافس جداً مقارنة بجودة الخدمة المقدمة." },
    { name: "خالد منصور", role: "عميل سكني", text: "أفضل شركة نقل تعاملت معها في جدة، دقة وأمانة في التعامل." },
    { name: "أحمد محمد", role: "عميل سكني", text: "خدمة ممتازة وفريق محترف جداً. تم نقل الأثاث بكل حرص وبدون أي أضرار." },
    { name: "سارة خالد", role: "صاحبة متجر", text: "التزام تام بالمواعيد وسرعة في الإنجاز. التغليف كان متقناً." },
    { name: "فيصل العتيبي", role: "عميل تجاري", text: "تجربة رائعة، السعر منافس جداً مقارنة بجودة الخدمة المقدمة." },
    { name: "خالد منصور", role: "عميل سكني", text: "أفضل شركة نقل تعاملت معها في جدة، دقة وأمانة في التعامل." },
  ];

  return (
    <div className="space-y-20">
      {/* Services Grid */}
      <section id="services" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">خدماتنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center text-foreground">{service.title}</h3>
                <p className="text-center text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-16 md:py-24 bg-muted/30" dir="rtl">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">آراء عملائنا</h2>
          
          <div className="overflow-hidden" ref={emblaRef}>
            {/* 2. Container Fix: -mr-4 offsets the pr-4 on slides for perfect edge alignment */}
            <div className="flex -mr-4">
              {testimonials.map((t, index) => (
                <div
                  key={index}
                  // 3. Slide Width Fix: Set exactly 33.333% for desktop
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pr-4"
                >
                  <Card className="h-full border-none shadow-md transition-all duration-300">
                    <CardContent className="p-8 flex flex-col items-center text-center">
                      <div className="bg-primary/10 p-3 rounded-full mb-4">
                        <Quote className="w-6 h-6 text-primary rotate-180" />
                      </div>
                      <p className="text-muted-foreground mb-6 italic">"{t.text}"</p>
                      <div className="mt-auto">
                        <h4 className="font-bold text-foreground">{t.name}</h4>
                        <p className="text-sm text-primary">{t.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">تتحرك البطاقات تلقائياً، أو يمكنك السحب للمشاهدة</p>
        </div>
      </section>
    </div>
  );
}
//align: "start": By default, carousels often try to "center" a single card, which leaves massive white spaces on the sides. Setting this to start forces the cards to fill from the right (in RTL). 
// lg:flex-[0_0_33.333%]: This tells the browser that on large screens, each slide must occupy exactly one-third of the available space.
//flex -mr-4 with pr-4: This is a standard CSS pattern. The negative margin on the parent "pulls" the slides to the edges of your container, while the padding on the slides themselves creates the internal gap between the cards.