"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
// Added all necessary sub-components to the import
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import SocialMedia from "@/components/social-media"

export const metadata = {
  title: "تواصل معنا - فراس الشرق",
  description: "تواصل معنا للحصول على خدمة نقل أثاث احترافية",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-primary-light text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">تواصل معنا</h1>
            <p className="text-lg text-white/90">نحن هنا للإجابة على جميع استفساراتك</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">الهاتف</h3>
              <a href="tel:+966542100371" dir="ltr" className="text-primary hover:underline inline-block">
                +966 54 210 0371
              </a>
            </Card>

            {/* Email Card - Optimized to prevent breaking */}
            <Card className="p-6 px-2 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">البريد الإلكتروني</h3>
              <a
                href="mailto:shroukamr29072006@gmail.com"
                className="text-primary text-xs sm:text-sm block truncate px-1"
                title="shroukamr29072006@gmail.com"
              >
                shroukamr29072006@gmail.com
              </a>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">الموقع</h3>
              <p className="text-muted-foreground text-sm">حي المروة، شارع حراء، جدة</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">مواعيد العمل</h3>
              <p className="text-muted-foreground text-sm">24 ساعة / 7 أيام</p>
            </Card>
          </div>

          {/* Map Section */}
          <div className="max-w-5xl mx-auto mb-20">
            <Card className="border-border overflow-hidden">
              <CardHeader>
                <CardTitle className="text-gray-800 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-600" />
                  <span>موقعنا على الخريطة</span>
                </CardTitle>
                <CardDescription>حي المروة، شارع حراء، جدة، بجوار بنك الراجحي</CardDescription>
              </CardHeader>
              <CardContent>
                {/* FIXED: Removed aspect-[21/9] to resolve RangeError */}
                <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.431284561!2d39.2000!3d21.6000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDM2JzAwLjAiTiAzOcKwMTInMDAuMCJF!5e0!3m2!1sen!2ssa!4v123456789"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="فراس الشرق"
                  ></iframe>
                </div>
                <p className="text-sm text-gray-600 mt-4 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-teal-600" />
                    حي المروة، شارع حراء، جدة، بجوار بنك الراجحي، المملكة العربية السعودية
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}