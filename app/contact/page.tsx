import Header from "@/components/header"
import Footer from "@/components/footer"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
           <Card className="p-6 text-center hover:shadow-lg transition-shadow">
  <div className="flex justify-center mb-4">
    <Phone className="w-8 h-8 text-primary" />
  </div>
  <h3 className="font-bold text-lg mb-2 text-foreground">الهاتف</h3>
  {/* Add dir="ltr" and inline-block to ensure the number displays correctly */}
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

         {/*    <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">البريد الإلكتروني</h3>
              <a
                href="mailto:shroukamr29072006@gmail.com"
                className="text-primary hover:text-primary-light transition-colors"
              >
                shroukamr29072006@gmail.com
              </a>
            </Card> */}

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

      {/* Social Media Section */}
      {/* <SocialMedia /> */}

      <Footer />
    </main>
  )
}