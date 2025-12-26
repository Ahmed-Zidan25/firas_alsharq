"use client";

import React from "react";
import { Truck, Package, Clock, Users, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function Services() {
  // --- Carousel Configuration ---
  const carouselOptions = {
    dir: "rtl" as const,
    loop: true,
    align: "start" as const,
    duration: 25, // Transition speed (higher = slower movement)
  };

  const autoplayOptions = {
    delay: 4000, // Stay time (ms) before moving to the next card
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  };

  const [emblaRef] = useEmblaCarousel(carouselOptions, [
    Autoplay(autoplayOptions)
  ]);

  // --- Data ---
  const services = [
    {
      icon: Truck,
      title: "نقل آمن",
      description: "نقل آمن وموثوق لأثاثك مع فريق محترف",
    },
    {
      icon: Package,
      title: "تغليف احترافي",
      description: "تغليف عالي الجودة لحماية أثاثك أثناء النقل",
    },
    {
      icon: Clock,
      title: "خدمة سريعة",
      description: "نلتزم بالمواعيد والسرعة في إنجاز الخدمة",
    },
    {
      icon: Users,
      title: "فريق احترافي",
      description: "فريق مدرب وذو خبرة في مجال النقل",
    },
  ];

  const testimonials = [
    {
      name: "أحمد محمد",
      role: "عميل سكني",
      text: "خدمة ممتازة وفريق محترف جداً. تم نقل الأثاث بكل حرص وبدون أي أضرار. أنصح بالتعامل معهم بشدة.",
    },
    {
      name: "سارة خالد",
      role: "صاحبة متجر",
      text: "التزام تام بالمواعيد وسرعة في الإنجاز. التغليف كان متقناً وحمى القطع الزجاجية تماماً.",
    },
    {
      name: "فيصل العتيبي",
      role: "عميل تجاري",
      text: "تجربة رائعة، السعر منافس جداً مقارنة بجودة الخدمة المقدمة. شكراً لفريق العمل على مجهودهم.",
    },
    {
      name: "خالد منصور",
      role: "عميل سكني",
      text: "أفضل شركة نقل تعاملت معها في جدة، دقة وأمانة في التعامل وحرص شديد على سلامة المنقولات.",
    },
    {
      name: "أحمد محمد",
      role: "عميل سكني",
      text: "خدمة ممتازة وفريق محترف جداً. تم نقل الأثاث بكل حرص وبدون أي أضرار. أنصح بالتعامل معهم بشدة.",
    },
    {
      name: "سارة خالد",
      role: "صاحبة متجر",
      text: "التزام تام بالمواعيد وسرعة في الإنجاز. التغليف كان متقناً وحمى القطع الزجاجية تماماً.",
    },
    {
      name: "فيصل العتيبي",
      role: "عميل تجاري",
      text: "تجربة رائعة، السعر منافس جداً مقارنة بجودة الخدمة المقدمة. شكراً لفريق العمل على مجهودهم.",
    },
    {
      name: "خالد منصور",
      role: "عميل سكني",
      text: "أفضل شركة نقل تعاملت معها في جدة، دقة وأمانة في التعامل وحرص شديد على سلامة المنقولات.",
    },
  ];

  return (
    <div className="space-y-0">
      {/* 1. Services Grid Section */}
      <section id="services" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            خدماتنا
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="transform transition-all duration-500 hover:-translate-y-2">
                  <Card className="p-6 hover:shadow-lg transition-shadow border-primary/10">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-center text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-center text-muted-foreground">
                      {service.description}
                    </p>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Testimonials Carousel Section */}
      <section className="py-16 md:py-24 bg-muted/30" dir="rtl">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            آراء عملائنا
          </h2>

          {/* Viewport */}
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            {/* Container: -mr-4 offsets the pr-4 on slides for perfect alignment */}
            <div className="flex -mr-4">
              {testimonials.map((t, index) => (
                <div
                  key={index}
                  // Responsive sizing: 1 card mobile, 2 cards tablet, 3 cards desktop
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pr-4 group"
                >
                  <Card className="h-full border-none shadow-md transition-all duration-300 group-hover:shadow-xl">
                    <CardContent className="p-8 flex flex-col items-center text-center">
                      <div className="bg-primary/10 p-3 rounded-full mb-4">
                        <Quote className="w-6 h-6 text-primary rotate-180" />
                      </div>
                      <p className="text-muted-foreground mb-6 italic">
                        "{t.text}"
                      </p>
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

          {/* Swipe Indicator */}
          <p className="text-center text-sm text-muted-foreground mt-8 animate-pulse">
            تتحرك البطاقات تلقائياً، أو يمكنك السحب للمشاهدة
          </p>
        </div>
      </section>
    </div>
  );
}