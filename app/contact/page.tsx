import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import type { Metadata, Viewport } from 'next' // Added types

// 1. Correct Metadata Export
export const metadata: Metadata = {
  title: "تواصل معنا - فراس الشرق",
  description: "تواصل معنا للحصول على خدمة نقل أثاث احترافية",
}

// 2. Separate Viewport Export to fix the warning
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">الهاتف</h3>
              <a 
                href="https://wa.me/966542100371" 
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
              <p className="text-muted-foreground">حى المروه، شارع حراء، جده، بجوار بنك الراجحي، المملكة العربية السعودية</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">مواعيد العمل</h3>
              <p className="text-muted-foreground text-sm">24 ساعة / 7 أيام بالأسبوع</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto px-4">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-gray-800 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-red-600" />
                <span>موقعنا</span>
              </CardTitle>
              <CardDescription>موقع مكتبنا بحي المروة - جدة - المملكة العربية السعودية</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-[21/9] rounded-xl overflow-hidden shadow-xl border border-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.324545648816!2d39.18341657593683!3d21.61244306716751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d95954471f4b%3A0xe54972f7d566378e!2sHira%20St%2C%20Jeddah!5e0!3m2!1sen!2ssa!4v1715450000000!5m2!1sen!2ssa"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="موقع فراس الشرق"
                ></iframe>
              </div>
              <p className="text-sm text-gray-600 mt-4 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                حى المروه، شارع حراء، جده، بجوار بنك الراجحي، المملكة العربية السعودية
              </p>
            </CardContent>
          </Card>
        </div> 
      </section>

      <Footer />
    </main>
  )
}