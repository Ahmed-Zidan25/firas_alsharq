"use client";

import React from "react";
import { Truck, Package, Clock, Users, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import useEmblaCarousel from "embla-carousel-react";

export default function Services() {
  // Carousel configuration for RTL and looping
  const [emblaRef] = useEmblaCarousel({ dir: "rtl", loop: true });

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
  ];

  return (
    <div className="space-y-20">
      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            خدماتنا
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-muted/30" dir="rtl">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            آراء عملائنا
          </h2>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((t, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4"
                >
                  <Card className="h-full border-none shadow-md">
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

          <p className="text-center text-sm text-muted-foreground mt-8">
            اسحب لليسار أو اليمين لمشاهدة المزيد
          </p>
        </div>
      </section>
    </div>
  );
}