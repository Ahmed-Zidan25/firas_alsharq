import Header from "@/components/header"
import Footer from "@/components/footer"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
// Ensure all these sub-components are actually exported from your card file
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
            
            {/* Phone Card */}
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">الهاتف</h3>
              <a 
                href="tel:+966542100371" 
                dir="ltr" 
                className="text-primary hover:text-primary-light transition-colors inline-block"
              >
                +966 54 210 0371
              </a>
            </Card>

            {/* Email Card - Fixed to avoid breaking */}
            <Card className="p-6 px-2 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">البريد الإلكتروني</h3>
              <a
                href="mailto:shroukamr29072006@gmail.com"
                className="text-primary hover:text-primary-light transition-colors block text-xs sm:text-sm truncate px-1"
                title="shroukamr29072006@gmail.com"
              >
                shroukamr29072006@gmail.com
              </a>
            </Card>

            {/* Location Card */}
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">الموقع</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                حي المروه، شارع حراء، جده، بجوار بنك الراجحي
              </p>
            </Card>

            {/* Hours Card */}
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">مواعيد العمل</h3>
              <p className="text-muted-foreground text-sm">24 ساعة / 7 أيام بالأسبوع</p>
            </Card>
          </div>

          {/* Map Section */}
          <div className="max-w-5xl mx-auto mb-20">
            <Card className="overflow-hidden border-border">
              <CardHeader className="bg-gray-50/50">
                <CardTitle className="text-gray-800 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-600" />
                  <span>موقعنا على الخريطة</span>
                </CardTitle>
                <CardDescription>عنوان مكتبنا بجدة - المملكة العربية السعودية</CardDescription>
              </CardHeader>
              <CardContent className="p-0 sm:p-6">
                <div className="aspect-video sm:aspect-[21/9] rounded-none sm:rounded-xl overflow-hidden shadow-inner">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.646545166649!2d39.2064!3d21.6189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDM3JzA4LjAiTiAzOcKwMTInMjMuMCJF!5e0!3m2!1sen!2ssa!4v1700000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="موقع فراس الشرق"
                  ></iframe>
                </div>
                
                <div className="p-4 sm:px-0 flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-600">
                      حي المروه، شارع حراء، جده، بجوار بنك الراجحي، المملكة العربية السعودية
                    </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}