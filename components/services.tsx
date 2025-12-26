"use client";

import React from "react";
import { Truck, Package, Clock, Users, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function Services() {
  // Initialize Embla with Autoplay plugin and RTL direction
  const [emblaRef] = useEmblaCarousel({ dir: "rtl", loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false })
  ]);

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
      {/* 1. Services Section */}
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

      {/* 2. Testimonials Section (Fixed Carousel) */}
      <section className="py-16 md:py-24 bg-muted/30" dir="rtl">
        <div className="container mx