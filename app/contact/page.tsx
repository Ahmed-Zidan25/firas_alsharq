"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
// Added missing Card sub-components to the import list
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
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">تواصل معنا</h1>
            <p className="text-lg text-white/90">نحن هنا للإجابة على جميع استفساراتك</p>
          </div>
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
              <a 
                href="https://wa.me/966705451313" 
                dir="ltr" 
                className="text-primary hover:text-primary-light transition-colors inline-block"
              >
                +966 54 210 0371
              </a>
            </Card>

            <Card className="p-6 px-2 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">البريد الإلكتروني</h3>
              <a
                href="mailto:shroukamr29072006@gmail.com"
                className="text-primary hover:text-primary-light transition-colors block text-sm truncate px-1"
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
              <p className="text-muted-foreground text-sm">حى المروه، شارع حراء، جده، بجوار بنك الراجحي، المملكة العربية السعودية</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">مواعيد العمل</h3>
              <p className="text-muted-foreground text-sm">24 ساعة / 7 أيام بالأسبوع</p>
            </Card>
          </div>

          <div className="max-w-5xl mx-auto mb-20">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-gray-800 flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-red-600" />
                  <span>موقعنا علي الخريطة</span>
                </CardTitle>
                <CardDescription>عنوان مكتبنا بجدة - المملكة العربية السعودية</CardDescription>
              </CardHeader>
              <CardContent>
                {/* FIX: Changed aspect-[21/9] to a fixed height to resolve Vercel build error */}
                <div className="min-h-[400px] w-full rounded-xl overflow-hidden shadow-xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.6582570371454!2d39.20815347596009!3d21.60024476711516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d97439000001%3A0x867018ec2a68897c!2z2LTYp9ix2Lkg2K3Ysdin2KEsINin2YTZhdis2YjZhywg2KzYr9ipIDIzNTQ0LCDYp9mE2YXZhNmD2Kkg2KfZhNi52LHYqNmK2Kkg2KfZhNiz2LnZiNiv2YrYqQ!5e0!3m2!1sar!2ssa!4v1715600000000!5m2!1sar!2ssa"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="موقع فراس الشرق"
                  ></iframe>
                </div>
                
                <p className="text-sm text-gray-600 mt-4 flex items-center justify-center sm:justify-start">
                    <MapPin className="h-4 w-4 text-teal-600 mr-2" />
                    حى المروه، شارع حراء، جده، بجوار بنك الراجحي، المملكة العربية السعودية
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