import Header from "@/components/header"
import Footer from "@/components/footer"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "تواصل معنا - فراس الشرق",
  description: "تواصل معنا للحصول على خدمة نقل أثاث احترافية",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-primary-light text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">تواصل معنا</h1>
          <p className="text-lg text-white/90">نحن هنا للإجابة على جميع استفساراتك</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            
            <Card className="p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">الهاتف</h3>
              <a href="tel:+966542100371" dir="ltr" className="text-primary hover:underline">+966 54 210 0371</a>
            </Card>

            <Card className="p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">البريد الإلكتروني</h3>
              <a href="mailto:shroukamr29072006@gmail.com" className="text-primary text-xs sm:text-sm block truncate px-2">
                shroukamr29072006@gmail.com
              </a>
            </Card>

            <Card className="p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">الموقع</h3>
              <p className="text-muted-foreground text-sm">حي المروه، شارع حراء، جده</p>
            </Card>

            <Card className="p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">مواعيد العمل</h3>
              <p className="text-muted-foreground text-sm">24 ساعة / 7 أيام</p>
            </Card>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden border-none shadow-lg">
              <CardHeader className="bg-white border-b">
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-500" />
                  <span>موقعنا على الخريطة</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {/* Fixed: Removed aspect-[21/9] which caused the -21 RangeError */}
                <div className="w-full h-[450px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.6738987483786!2d39.1959714!3d21.6111002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDM2JzQwLjAiTiAzOcKwMTEnNDUuNSJF!5e0!3m2!1sen!2ssa!4v1700000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="موقع الشركة"
                  ></iframe>
                </div>
                <div className="p-6 bg-slate-50">
                   <p className="text-sm text-slate-600 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    حى المروه، شارع حراء، جده، بجوار بنك الراجحي، المملكة العربية السعودية
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