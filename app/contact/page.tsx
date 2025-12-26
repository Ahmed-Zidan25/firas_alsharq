import Header from "@/components/header"
import Footer from "@/components/footer"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
// Ensure your card component exports these, or use the basic <Card> if not
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">الهاتف</h3>
              <a href="tel:+966542100371" dir="ltr" className="text-primary hover:underline">
                +966 54 210 0371
              </a>
            </Card>

            <Card className="p-6 px-4 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">البريد الإلكتروني</h3>
              <a
                href="mailto:shroukamr29072006@gmail.com"
                className="text-primary text-xs md:text-sm block break-all"
              >
                shroukamr29072006@gmail.com
              </a>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">الموقع</h3>
              <p className="text-muted-foreground text-sm">حي المروه، شارع حراء، جده</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">مواعيد العمل</h3>
              <p className="text-muted-foreground text-sm">24 ساعة / 7 أيام</p>
            </Card>
          </div>

          {/* Map Section */}
          <div className="max-w-5xl mx-auto mb-20">
            <Card className="overflow-hidden border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-600" />
                  <span>موقعنا على الخريطة</span>
                </CardTitle>
                <CardDescription>حي المروه، شارع حراء، جده، بجوار بنك الراجحي</CardDescription>
              </CardHeader>
              <CardContent>
                {/* FIXED: Removed aspect ratio logic and used a standard pixel height */}
                <div className="w-full h-96 rounded-xl overflow-hidden shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3708.963442436842!2d39.1865!3d21.6122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDM2JzQzLjkiTiAzOcKwMTEnMTEuNCJF!5e0!3m2!1sen!2ssa!4v1700000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="موقع مكتب فراس الشرق"
                  ></iframe>
                </div>
                <p className="text-sm text-gray-600 mt-4 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  المملكة العربية السعودية، جدة، حي المروة، شارع حراء
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