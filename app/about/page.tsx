import Header from "@/components/header"
import Footer from "@/components/footer"
import { CheckCircle } from "lucide-react"
import type { Metadata, Viewport } from 'next' // Added types for safety

// 1. Standard Metadata Export
export const metadata: Metadata = {
  title: "عن فراس الشرق",
  description: "تعرف على فراس الشرق - متخصصة في نقل الأثاث والمنقولات",
}

// 2. Separate Viewport Export (This fixes the warning)
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-primary-light text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">عن فراس الشرق</h1>
            <p className="text-lg text-white/90">نحن متخصصون في نقل الأثاث والمنقولات بكل احترافية وأمان</p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">قصتنا</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              بدأت فراس الشرق منذ أكثر من 10 سنوات برؤية واضحة: تقديم خدمة نقل أثاث احترافية وموثوقة في المملكة العربية
              السعودية. منذ ذلك الحين، ساعدنا الآلاف من العملاء في نقل أثاثهم بأمان وسهولة.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              نحن نؤمن بأن كل أثاث له قيمة ومعنى لأصحابه، لذلك نتعامل مع كل قطعة بالحذر والاحترافية التي تستحقها.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              فريقنا مدرب بشكل احترافي ومجهز بأحدث الأدوات والمعدات لضمان وصول أثاثك إلى وجهته في أفضل حالة.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">قيمنا الأساسية</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">الأمان</h3>
              <p className="text-muted-foreground">حماية أثاثك وممتلكاتك هو أولويتنا الأولى</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">الاحترافية</h3>
              <p className="text-muted-foreground">خدمة احترافية من فريق خبير ومدرب</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">الموثوقية</h3>
              <p className="text-muted-foreground">التزام كامل بالمواعيد والجودة</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}