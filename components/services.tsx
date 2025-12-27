"use client";

import React from "react";
import { Truck, Package, Clock, Users, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function Services() {
  // --- Carousel Configuration ---
const [emblaRef, emblaApi] = useEmblaCarousel({
  dir: "rtl", 
  loop: true, 
  align: "start",
  duration: 25, 
  slidesToScroll: 1
}, [
  Autoplay({ delay: 5000, stopOnInteraction: true })
]);

// This is the "Used" part - it fixes the Vercel/Next.js hydration gaps
React.useEffect(() => {
  if (emblaApi) {
    emblaApi.reInit();
  }
}, [emblaApi]);

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
      image: "https://ui-avatars.com/api/?name=F&background=0D9488&color=fff", 
      text: "تجربة رائعة، السعر منافس جداً مقارنة بجودة الخدمة المقدمة. شكراً لفريق العمل." 
    },
    { 
      name: "مصطفي المغازي", 
      role: "عميل سكني", 
      image: "https://ui-avatars.com/api/?name=K&background=0D9488&color=fff", 
      text: "أفضل شركة نقل تعاملت معها في جدة، دقة وأمانة في التعامل وحرص شديد." 
    }
  ];

  return (
    <div className="space-y-0">
      {/* 1. Services Section */}
      <section id="services" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            خدماتنا
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="transform transition-all duration-500 hover:-translate-y-2">
                <Card className="p-6 hover:shadow-lg transition-shadow border-primary/10">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center text-foreground">{service.title}</h3>
                  <p className="text-center text-muted-foreground">{service.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Testimonials Section */}
      {/* 2. Testimonials Section */}
<section className="py-16 md:py-24 bg-muted/30" dir="rtl">
  <div className="container mx-auto px-4 overflow-hidden">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
      آراء عملائنا
    </h2>

    {/* The Viewport */}
    <div className="overflow-hidden" ref={emblaRef}>
      {/* FIX: Added -mr-4 here to offset the slide padding. 
         This removes the "dead space" on the sides of the desktop view.
      */}
      <div className="flex -mr-4">
        {testimonials.map((t, index) => (
          <div
            key={index}
            /* FIX: Added pr-4 for spacing. 
               min-w-0 is vital to prevent the card from expanding based on text length.
            */
            className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.3333%] pr-4"
          >
            <Card className="h-full border-none shadow-md transition-all duration-300 hover:shadow-xl">
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

                <p className="text-muted-foreground mb-6 italic leading-relaxed text-sm md:text-base">
                  "{t.text}"
                </p>

                <div className="mt-auto">
                  <h4 className="font-bold text-foreground text-lg">{t.name}</h4>
                  <p className="text-sm text-primary font-medium">{t.role}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>

    <p className="text-center text-sm text-muted-foreground mt-8 animate-pulse">
      تتحرك البطاقات تلقائياً، أو يمكنك السحب للمشاهدة
    </p>
  </div>
</section>
    </div>
  );
}